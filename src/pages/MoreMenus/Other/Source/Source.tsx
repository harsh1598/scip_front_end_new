import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import { ProjectName } from "../../../../Components/constants/layout";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import toast from "react-hot-toast";
import AddEditSource from "./AddEditSource";
import SourceFilter from "./SourceFilter";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
        classTitle: "text-start",
    },
    {
        title: "Code",
        classTitle: "text-start",
    },
    {
        title: "Source",
        classTitle: "text-start",
    },
    {
        title: "User Type",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const Source = () => {

    document.title = `${ProjectName} | Source`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [filterData, setFilterData] = useState<any>([]);
    const [isShowAddSource, setIsShowAddAddSource] = useState(false);
    const [isShowSourceFilter, setIsShowSourceFilter] = useState(false);
    const [id, setId] = useState<any>();
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [searchText, setSearchText] = useState('');
    const [moduleAcessData, setModuleAcessData] = useState<any>([]);

    useEffect(() => {
        getModuleAcesslist();
    }, [filterData]);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "source_contact";
        WebService.getAPI({
            action: `/module-access`,
            body: obj,
        })
            .then((res: any) => {
                setModuleAcessData(res.result);
                if (currentPage) {
                    getlist(currentPage, res.result);
                } else {
                    getlist(1, res.result);
                }
            })
            .catch((error: any) => { });
    };


    const getlist = (page?: any, AcessData?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj = filterData
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/source-contact-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].slug });
                    columns.push({ value: res.list[i].title });
                    columns.push({ value: res.list[i].user_type });
                    columns.push({ value: actionList(res.list[i], AcessData) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    const actionList = (data: any, AcessData: any) => {
        return (
            <>
                <ul className="list-inline  gap-2 mb-0">
                    <li className="list-inline-item">
                        <UncontrolledDropdown>
                            <DropdownToggle
                                href="#"
                                className="btn btn-soft-secondary btn-sm dropdown"
                                tag="button"
                            >
                                <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                {AcessData.is_edit == 1 && (
                                    <DropdownItem onClick={() =>
                                        onEdit(data.id)
                                    } >
                                        <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                    </DropdownItem>
                                )}
                                {AcessData.sel_action_button &&
                                    AcessData.sel_action_button.length > 0 &&
                                    AcessData.sel_action_button.map((res: any) => {
                                        return (
                                            <>
                                                {res == "Active/Inactive" && (
                                                    <>
                                                        {data.status === "Y" && (
                                                            <DropdownItem
                                                                onClick={(e) =>
                                                                    setData({
                                                                        alert: true,
                                                                        id: data.id,
                                                                        status: "N",
                                                                    })
                                                                }>
                                                                <i
                                                                    className="ri-close-circle-line align-middle me-1"
                                                                    style={{ color: "red" }}></i>
                                                                Deactive
                                                            </DropdownItem>
                                                        )}
                                                        {data.status === "N" && (
                                                            <DropdownItem
                                                                onClick={(e) =>
                                                                    setData({
                                                                        alert: true,
                                                                        id: data.id,
                                                                        status: "Y",
                                                                    })
                                                                }>
                                                                <i
                                                                    className="ri-checkbox-circle-line align-middle me-1"
                                                                    style={{ color: "green" }}></i>
                                                                Active
                                                            </DropdownItem>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        );
                                    })}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const onchangeStatus = (id: any, status: any) => {
        let obj: any = {};
        obj.id = id;
        obj.status = status;
        WebService.postAPI({
            action: `/source-contact-status`,
            body: obj,
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
                setData({ alert: false, id: 0, status: "" });
                getModuleAcesslist(1);
            }
        }).catch((error: any) => {

        });
    }

    const onEdit = (id: any) => {
        setIsShowAddAddSource(true);
        setId(id)
    };

    const closeAddAppVersion = () => {
        setId('')
        setIsShowAddAddSource(false);
        getModuleAcesslist(1);
    }

    const closeAppVersionFilter = () => {
        setId('')
        setIsShowSourceFilter(false);
        getModuleAcesslist(1);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Source" pageTitle="Source" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="mb-4">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input type="text"
                                                    className="form-control search"
                                                    placeholder="Source"
                                                    value={searchText}
                                                    onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => {
                                                        if (e.keyCode === 13) {
                                                            getlist(1)
                                                        }
                                                    }}
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <Col sm={2}>
                                            {
                                                filterData?.user_type &&
                                                <Row>
                                                    <div className="filter-choices-input mt-0">
                                                        <div className="choices">
                                                            <div className="choices__inner">
                                                                <div className="choices__list choices__list--multiple">
                                                                    {
                                                                        filterData?.user_type ?
                                                                            <div className="choices__item choices__item--selectable">{filterData?.user_type} <i className="ri-close-line align-bottom me-1 " onClick={e => {
                                                                                filterData.user_type = "";
                                                                                setFilterData({ ...filterData })
                                                                            }
                                                                            } ></i></div>
                                                                            :
                                                                            ''
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            }
                                        </Col>

                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">

                                                <button
                                                    type="button"
                                                    className="btn btn-soft-info"
                                                    onClick={() => setIsShowSourceFilter(true)}>
                                                    <i className="ri-filter-3-line align-bottom me-1"></i>
                                                    Filters
                                                </button>
                                                {moduleAcessData.is_add == 1 && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-brand-theme"
                                                        id="create-btn"
                                                        onClick={() => setIsShowAddAddSource(true)}>
                                                        <i className="ri-add-line align-bottom me-1"></i> Add
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </Row>

                                    <div className="px-3 mt-3">
                                        <div className="table-card">
                                            <Grid
                                                headers={headers}
                                                rows={rows}
                                                count={totalCount}
                                                errorMessage={"No Data Found"}
                                                ShowLoader={showloader}
                                                onPageChange={onchange}
                                            />
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div >
            {/* Modal */}

            <Modal size="md" isOpen={data.alert} centered>
                <ModalHeader className="mb-2" toggle={() => setData({ alert: false, id: 0, status: "" })}>Are you sure you want to do this action?</ModalHeader>
                <ModalFooter className="border-top p-2">
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-light" onClick={() => setData({ alert: false, id: 0, status: "" })}>Cancel</button>
                        <button type="submit" id="workflow-modal-submit-btn" className="btn btn-primary" onClick={() => onchangeStatus(data.id, data.status)}>Ok</button>
                    </div>
                </ModalFooter>
            </Modal>

            <AddEditSource
                show={isShowAddSource}
                onCloseClick={closeAddAppVersion}
                Id={id}
            />
            <SourceFilter
                formData={formData}
                setFilterData={setFilterData}
                show={isShowSourceFilter}
                onCloseClick={closeAppVersionFilter}
            />
        </React.Fragment >
    );
};

export default Source;
