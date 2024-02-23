import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import { ProjectName } from "../../../../Components/constants/layout";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import toast from "react-hot-toast";
import DragableGrid from "../../../../Components/DragableGrid/DragableGrid";
import AddEditTeaser from "./AddEditTeaser";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
        classTitle: "text-start",
    },
    {
        title: "Title",
        classTitle: "text-start",
    },
    {
        title: "Is Editable",
        classTitle: "text-start",
    },
    {
        title: "Seq No",
        classTitle: "text-start",
    },
    {
        title: "Logo",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const Teaser = () => {

    document.title = `${ProjectName} | Teaser`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [searchText, setSearchText] = useState('');
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [isShowAddTeaser, setIsShowAddTeaser] = useState(false);
    const [id, setId] = useState<any>();
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [moduleAcessData, setModuleAcessData] = useState<any>([]);

    useEffect(() => {
        getModuleAcesslist(1);
    }, []);

    const onchange = (currentPage: number) => {
        setCurrentPage(currentPage)
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "teaser";
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
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/teaser/pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1, originalValue: res.list[i] });
                    columns.push({ value: res.list[i].title });
                    columns.push({ value: isshowallEditable({ is_editable: res.list[i].is_editable }) });
                    columns.push({ value: res.list[i].seq_no });
                    columns.push({ value: isshowImg({ logo: res.list[i].logo }) });
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

    const isshowallEditable = (data: any) => {
        return (
            <>
                <span className={data.is_editable === "Y" ? "badge badge-soft-success fs-12" : "badge badge-soft-danger fs-12"} >{data.is_editable === "Y" ? "Yes" : "No"}</span>
            </>
        );
    };

    const isshowImg = (data: any) => {
        return (
            <>
                <img src={data.logo} height={25} width={25} />
            </>
        );
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
                                    <>
                                        {data.is_editable == 'Y' &&
                                            <DropdownItem
                                                onClick={() =>
                                                    onEdit(data.teaser_id)
                                                } >
                                                <i className="ri-edit-box-line align-middle me-1" ></i>Edit
                                            </DropdownItem>
                                        }
                                        {data.is_editable == 'N' &&
                                            <DropdownItem disabled={true} className="editGray" title="Not Editable" onClick={() =>
                                                onEdit(data.teaser_id)
                                            } >
                                                <i className="ri-edit-box-line align-middle me-1 " ></i>Edit
                                            </DropdownItem>
                                        }
                                    </>
                                )}
                                {AcessData.sel_action_button &&
                                    AcessData.sel_action_button.length > 0 &&
                                    AcessData.sel_action_button.map((res: any) => {
                                        return (
                                            <>
                                                {res == "Active/Inactive" && (
                                                    <>
                                                        {data.status === "Y" && (
                                                            <DropdownItem onClick={(e) =>
                                                                setData({
                                                                    alert: true,
                                                                    id: data.teaser_id,
                                                                    status: "N",
                                                                })
                                                            }>
                                                                <i className="ri-close-circle-line align-middle me-1"style={{ color: "red" }}></i>
                                                                Deactive
                                                            </DropdownItem>
                                                        )}
                                                        {data.status === "N" && (
                                                            <DropdownItem onClick={(e) =>
                                                                setData({
                                                                    alert: true,
                                                                    id: data.teaser_id,
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
        obj.teaser_id = id;
        obj.status = status;
        WebService.postAPI({
            action: `/teaser/update-status`,
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
        setIsShowAddTeaser(true);
        setId(id)
    };

    const closeAddTeaser = () => {
        setId('')
        setIsShowAddTeaser(false);
        getModuleAcesslist(1);
    }

    const onclickGridRow = (data: any) => {
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
                action: `/teaser/change-seq-no`,
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
        <>
            {isShowAddTeaser &&
                <AddEditTeaser
                    show={isShowAddTeaser}
                    onCloseClick={closeAddTeaser}
                    Id={id} />
            }
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="Teaser" pageTitle="Teaser" location={"/admin/menu"} />
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
                                            {moduleAcessData.is_add == 1 && (
                                                <div className="col-sm-auto ms-auto">
                                                    <div className="hstack gap-2 flex-wrap">
                                                        <button
                                                            type="button"
                                                            className="btn btn-brand-theme"
                                                            id="create-btn"
                                                            onClick={() => setIsShowAddTeaser(true)}>
                                                            <i className="ri-add-line align-bottom me-1"></i> Add
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
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
                </div>
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

            </React.Fragment></>
    );
};

export default Teaser;
