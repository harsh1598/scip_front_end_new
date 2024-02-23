import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";
import toast from "react-hot-toast";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import { ProjectName } from "../../../../Components/constants/layout";
import WebService from "../../../../utility/WebService";
import HelperService from "../../../../utility/HelperService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import CampaignInfoFilter from "./CampaignInfoFilter";
import AddEditCampaignInfo from "./AddEditCampaignInfo";
import DragableGrid from "../../../../Components/DragableGrid/DragableGrid";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
        classTitle: "text-start",
    },
    {
        title: "Column Name",
        classTitle: "text-start",
    },
    {
        title: "Column Type",
        classTitle: "text-start",
    },
    {
        title: "Column Pattern Title",
        classTitle: "text-start",
    },
    {
        title: "Column Value Type",
        classTitle: "text-start",
    },
    {
        title: "Seq No",
        classTitle: "text-start",
    },
    {
        title: "Type",
        classTitle: "text-start",
    },
    {
        title: "Created Date",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const CampaignInfo = () => {

    document.title = `${ProjectName} | Campaign Info`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [currentPage, setCurrentPage] = useState(1)
    const [showloader, setShowLoader] = useState(false);
    const [filterData, setFilterData] = useState<any>([]);
    const [isShowAddManageUserForm, setIsShowAddManageUserForm] = useState(false);
    const [isShowAppVesrionFilter, setIsShowAppVesrionFilter] = useState(false);
    const [filterData2, setFilterData2] = useState<any>([]);
    const [searchText, setSearchText] = useState('');
    const [id, setId] = useState<any>();
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [moduleAcessData, setModuleAcessData] = useState<any>([]);

    useEffect(() => {
        getModuleAcesslist(1);
    }, [filterData]);

    const onchange = (currentPage: number) => {
        setCurrentPage(currentPage)
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "campaign_info";
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
        for (let key in filterData2) {
            if (key && filterData2[key]) {
                obj[key] = filterData2[key].id ? filterData2[key].id : filterData2[key];
            }
        }
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/campaigninfo/pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1, originalValue: res.list[i] });
                    columns.push({ value: res.list[i].column_name });
                    columns.push({ value: res.list[i].column_type });
                    columns.push({ value: res.list[i].column_pattern_title });
                    columns.push({ value: res.list[i].column_value_type });
                    columns.push({ value: res.list[i].seq_no });
                    columns.push({ value: res.list[i].type });
                    columns.push({ value: res.list[i].updated_date ? HelperService.getOrderDateFormat(res.list[i].updated_date) : "" });
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
            <> {/* hstack */}
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
                                                                <i className="ri-close-circle-line align-middle me-1"style={{ color: "red" }}></i>
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
                                                                <i className="ri-checkbox-circle-line align-middle me-1"style={{ color: "green" }}></i>
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
            action: `/campaigninfo/update-status`,
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
        setIsShowAddManageUserForm(true);
        setId(id)
    };

    const closeAddManageUserForm = () => {
        setId('')
        setIsShowAddManageUserForm(false);
        getModuleAcesslist(1);
    }

    const closeAppVersionFilter = () => {
        setId('')
        setIsShowAppVesrionFilter(false);
        getModuleAcesslist(1);
    }

    const updateFilter = (index: any, key2: any) => {
        for (let key in filterData2) {
            if (key == key2) {
                delete filterData2[key];
                break;
            }
        }

        setFilterData2({ ...filterData2 })
        filterData?.splice(index, 1)
        setFilterData([...filterData])
    };

    const setFilter = (data: any) => {

        setFilterData(null)
        setFilterData2(null)
        setFilterData2(data)
        let filterList: any = [];
        for (let key in data) {
            if (key && data[key]) {
                filterList.push({
                    data: data[key],
                    key: key
                });
            }
        }
        setFilterData(filterList);
    };

    const onclickGridRow = (data: any) => {
        console.log(data);

        var array = [];
        for (var i in data) {
            for (var j in data[i]) {
                if (data[i][j] && data[i][j].length > 0) {
                    array.push(data[i][j][0].originalValue)
                }
            }
        }
        if (array.length > 0) {
            WebService.postAPI({
                action: `/campaigninfo/change-seq-no `,
                body: {
                    list: array
                },
            }).then((res: any) => {
                getModuleAcesslist(currentPage)
            }).catch((error: any) => {

            });
        }
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Campaign Info" pageTitle="Campaign Info" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="mb-4">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input type="text"
                                                    className="form-control search"
                                                    placeholder="Search"
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
                                        <Col sm={4}>
                                            {
                                                filterData &&
                                                <Row>
                                                    <div className="filter-choices-input mt-0">
                                                        <div className="choices">
                                                            <div className="choices__inner">
                                                                <div className="choices__list choices__list--multiple">
                                                                    {filterData?.length > 0 && filterData.map((chat: any, index: any) => {
                                                                        return <>
                                                                            {
                                                                                filterData[index].data.id ?
                                                                                    <div className="choices__item choices__item--selectable">{filterData[index].data.value} {" "} <i className="ri-close-line align-bottom me-1 "
                                                                                        onClick={e => {
                                                                                            updateFilter(index, chat.key)
                                                                                        }
                                                                                        }
                                                                                    ></i></div>
                                                                                    :
                                                                                    <div className="choices__item choices__item--selectable">{filterData[index].data} {" "} <i className="ri-close-line align-bottom me-1 "
                                                                                        onClick={e => {
                                                                                            updateFilter(index, chat.key)
                                                                                        }
                                                                                        }
                                                                                    ></i></div>
                                                                            }
                                                                        </>
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            }
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">

                                                <button type="button" className="btn btn-soft-info" onClick={() => setIsShowAppVesrionFilter(true)}>
                                                    <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                                                    Filters
                                                </button>
                                                {moduleAcessData.is_add == 1 && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-brand-theme"
                                                        id="create-btn"
                                                        onClick={() => setIsShowAddManageUserForm(true)}
                                                    >
                                                        <i className="ri-add-line align-bottom me-1"></i> Add
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </Row>

                                    <div className="px-3 mt-3">
                                        <div className="table-card">
                                            <DragableGrid
                                                dragableGridData={onclickGridRow}
                                                headers={headers}
                                                rows={rows}
                                                count={totalCount}
                                                errorMessage={"No Data Found"}
                                                ShowLoader={showloader}
                                                onPageChange={onchange} />
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

            <AddEditCampaignInfo
                show={isShowAddManageUserForm}
                onCloseClick={closeAddManageUserForm}
                Id={id}
            />
            <CampaignInfoFilter
                formData={formData}
                setFilterData={setFilter}
                show={isShowAppVesrionFilter}
                onCloseClick={closeAppVersionFilter}
            />
        </React.Fragment >
    );
};

export default CampaignInfo;
