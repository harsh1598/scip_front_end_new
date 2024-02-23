import React, { useEffect, useRef, useState } from "react";
import {
    Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Input, Modal, ModalHeader, ModalFooter
} from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import Grid, { GridColumn, GridRow } from "../../../../Components/Grid/Grid";
import WebService from "../../../../utility/WebService";
import toast from "react-hot-toast";
import AddEditTask from "./AddEditTask";

const Task = () => {

    document.title = `${ProjectName} | Task`;
    const [modelName, setModelName] = useState<string>("");
    const [data, setData] = useState({ alert: false, id: 0 });
    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [headers, setHeaders] = useState<any[]>([]);
    const [searchText, setSearchText] = useState('');
    const [moduleAcessData, setModuleAcessData] = useState<any>([]);
    const formData = useRef({});

    useEffect(() => {
        getModuleAcesslist();
    }, []);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "task";
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
        const res: any = {};
        let obj: any = {};
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : "";
        WebService.getAPI({
            action: `/task-pagination-list`,
            body: obj,
        })
            .then((res: any) => {
                if (res && res.coloumns) {
                    var arr: any = [];
                    var obj: any = {
                        title: "Sr No.",
                        classTitle: "text-start",
                    };
                    arr.push(obj);
                    for (var i in res.coloumns) {
                        var obj: any = {
                            title: res.coloumns[i].title,
                            db_column: res.coloumns[i].db_column,
                            control_type: res.coloumns[i].control_type,
                            nature: res.coloumns[i].nature,
                            source_value_name: res.coloumns[i].source_value_name,
                            classTitle: "text-start",
                        };

                        arr.push(obj);
                    }
                    var obj1: any = {
                        title: "Action",
                        classTitle: "text-start",
                    };
                    arr.push(obj1);
                    setHeaders(arr);
                }
                setRows([]);
                if (res && res.list) {
                    setTotalCount(res.count);
                    setShowLoader(false);
                    let rows: GridRow[] = [];

                    for (var i in res.list) {
                        let columns: GridColumn[] = [];
                        for (var j in arr) {
                            if (arr[j].title == "Sr No.") {
                                columns.push({
                                    value:
                                        page == 0
                                            ? Number(i) + 1
                                            : 10 * Number(page - 1) + Number(i) + 1,
                                });
                            } else if (arr[j].title == "Action") {
                                columns.push({
                                    value: actionList({
                                        id: res.list[i].taskId,
                                        status: res.list[i].status,
                                        menueMoadule: AcessData,
                                    }),
                                });
                            } else if (
                                arr[j].control_type == "SELECT" &&
                                arr[j].nature == "DYNAMIC"
                            ) {
                                columns.push({ value: res.list[i][arr[j].source_value_name] });
                            } else {
                                columns.push({ value: res.list[i][arr[j].db_column] });
                            }
                        }
                        rows.push({ data: columns });
                        setRows([...rows]);
                    }
                }
            })
            .catch((error: any) => {
                setShowLoader(false);
            });
    };

    const actionList = (data: any) => {
        return (
            <>
                {/* hstack */}
                <ul className="list-inline  gap-2 mb-0">
                    <li className="list-inline-item">
                        <UncontrolledDropdown>
                            <DropdownToggle
                                href="#"
                                className="btn btn-soft-secondary btn-sm dropdown"
                                tag="button">
                                <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                {data.menueMoadule.is_edit == 1 && (
                                    <DropdownItem
                                        onClick={(e) => toggleModel("AddEditTask", data.id)}>
                                        <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                    </DropdownItem>
                                )}
                                {/* {data.status === "Y" ? (
                                    <>
                                        <DropdownItem
                                            onClick={(e) =>
                                                setData({ alert: true, id: data.id })
                                            }>
                                            <i
                                                className="ri-close-circle-line align-middle me-1"
                                                style={{ color: "red" }}></i>
                                            Deactive
                                        </DropdownItem>
                                    </>
                                ) : (
                                    <>
                                        <DropdownItem
                                            onClick={(e) =>
                                                setData({ alert: true, id: data.id })
                                            }>
                                            <i
                                                className="ri-checkbox-circle-line align-middle me-1"
                                                style={{ color: "green" }}></i>
                                            Active
                                        </DropdownItem>
                                    </>
                                )} */}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const toggleModel = (name: string, id?: any) => {
        if (id) {
            WebService.getAPI({
                action: "/task-details/" + id,
            })
                .then((res: any) => {
                    if (res && res.result) {
                        formData.current = res.result;
                        setModelName(name);
                    }
                })
                .catch((error: any) => { });
        } else {
            formData.current = "";
            setModelName(name);
        }
    };

    const changeStatus = (id: any) => {
        let obj: any = {};
        obj.id = id;
        WebService.postAPI({
            action: `/task-update-status`,
            body: obj,
            id: "task-modal-submit-btn",
        })
            .then((res: any) => {
                if (res) {
                    toast.success(res.message);
                    setData({ alert: false, id: 0 });
                    getModuleAcesslist();
                    // getlist(1);
                }
            })
            .catch((error: any) => { });
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb
                        title="Manage Task"
                        pageTitle="Manage Task"
                        location={"/admin/menu"}
                    />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="mb-4">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input
                                                    type="text"
                                                    className="form-control search"
                                                    placeholder="Search"
                                                    value={searchText}
                                                    onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => {
                                                        if (e.keyCode === 13) {
                                                            getModuleAcesslist();
                                                        }
                                                    }}
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="px-3">
                                        <div className="table-card">
                                            <Grid
                                                headers={headers}
                                                rows={rows}
                                                count={totalCount}
                                                // perPageItem={5}
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
            </div>

            {/* Modal */}

            <AddEditTask
                formData={formData.current}
                getlist={() => getlist(1)}
                show={modelName === "AddEditTask" ? true : false}
                onCloseClick={() => {
                    setModelName("");
                }}
            />

            <Modal size="md" isOpen={data.alert} centered>
                <ModalHeader
                    className="mb-2"
                    toggle={() => setData({ alert: false, id: 0 })}>
                    Are you sure you want to do this action?
                </ModalHeader>
                <ModalFooter className="border-top p-2">
                    <div className="hstack gap-2 justify-content-end">
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => setData({ alert: false, id: 0 })}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            id="task-modal-submit-btn"
                            className="btn btn-primary"
                            onClick={() => changeStatus(data.id)}>
                            Ok
                        </button>
                    </div>
                </ModalFooter>
            </Modal>

        </React.Fragment>
    );
};

export default Task;
