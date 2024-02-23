import React, { useEffect, useRef, useState } from "react";
import {
    Col,
    Container,
    Row,
    CardHeader,
    Card,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Modal,
    ModalHeader,
    ModalFooter,
} from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import Grid, {
    GridColumn,
    GridRow,
} from "../../../../Components/Grid/Grid";
import { useParams } from "react-router-dom";
import WebService from "../../../../utility/WebService";
import toast from "react-hot-toast";
import AddEditQuestion from "./AddEditQuestion";
import HelperService from "../../../../utility/HelperService";
import QuestionFilter from "./QuestionFilter";

const Question = () => {
    document.title = `${ProjectName} | Application Question `;
    const [modelName, setModelName] = useState<string>("");
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [headers, setHeaders] = useState<any[]>([]);
    const [searchText, setSearchText] = useState('');
    const [isShowQuestionFilter, setIsShowQuestionFilter] = useState(false);
    const [filterData, setFilterData] = useState<any>([]);
    const [filterData2, setFilterData2] = useState<any>([]);
    const formData = useRef({});
    let { id } = useParams();
    useEffect(() => {
        getlist(1);
    }, [filterData]);

    const getlist = (page?: any) => {
        setShowLoader(true);
        let obj: any = {};
        for (let key in filterData2) {
            if (key && filterData2[key]) {
                obj[key] = filterData2[key].id ? filterData2[key].id : filterData2[key];
            }
        }
        obj.offset = page - 1;
        obj.subsection_id = id;
        obj.keyword = searchText ? searchText : "";
        WebService.getAPI({
            action: `/application-question-pagination-list`,
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
                            } else if (arr[j].db_column == "question_title") {
                                columns.push({
                                    value: HelperService.getText(res.list[i].question_title, 40),
                                });
                            } else if (arr[j].db_column == "is_mandatory") {
                                columns.push({
                                    value: isshowIsmandatory({
                                        is_mandatory: res.list[i].is_mandatory,
                                    }),
                                });
                            } else if (arr[j].db_column == "updated_date") {
                                columns.push({
                                    value: HelperService.getOrderDateFormat(res.list[i].updated_date),
                                });
                            }
                            else if (arr[j].db_column == "seq_no") {
                                columns.push({
                                    value: isshowSeqNumber({
                                        seq_no: res.list[i].seq_no,
                                    }),
                                });
                            } else if (arr[j].title == "Action") {
                                columns.push({
                                    value: actionList({
                                        id: res.list[i].question_id,
                                        status: res.list[i].status
                                    }),
                                });
                            } else if (
                                arr[j].control_type == "SELECT" &&
                                arr[j].nature == "DYNAMIC"
                              ) {
                                columns.push({ value: res.list[i][arr[j].source_value_name] });
                              }else {
                                columns.push({ value: res.list[i][arr[j].db_column] });
                            }
                        }
                        rows.push({ data: columns });
                        // console.log("rows", rows);
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
                                <DropdownItem
                                    onClick={(e) => toggleModel("AddEditQuestion", data.id)}>
                                    <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                </DropdownItem>
                                {data.status === "active" ? (
                                    <>
                                        <DropdownItem
                                            onClick={(e) =>
                                                setData({ alert: true, id: data.id, status: "inactive" })
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
                                                setData({ alert: true, id: data.id, status: "active" })
                                            }>
                                            <i
                                                className="ri-checkbox-circle-line align-middle me-1"
                                                style={{ color: "green" }}></i>
                                            Active
                                        </DropdownItem>
                                    </>
                                )}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const isshowIsmandatory = (data: any) => {
        return (
            <>
                <span
                    className={"badge badge-soft-success fs-12"}>
                    {data.is_mandatory === "Y" ? "YES" : "NO"}
                </span>
            </>
        );
    };

    const isshowSeqNumber = (data: any) => {
        return (
            <>
                <span> {data.seq_no}.00</span>
            </>
        );
    };

    const toggleModel = (name: string, id?: any) => {
        if (id) {
            WebService.getAPI({
                action: "/application-question-details/" + id,
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

    const changeStatus = (id: any, status: any) => {
        let obj: any = {};
        obj.question_id = id;
        obj.status = status;
        WebService.postAPI({
            action: `/application-question-update-status`,
            body: obj,
            id: "application-question-modal-submit-btn",
        })
            .then((res: any) => {
                if (res) {
                    toast.success(res.message);
                    setData({ alert: false, id: 0, status: "" });
                    getlist(1);
                }
            })
            .catch((error: any) => { });
    };

    const closeQuestionFilter = () => {
        setIsShowQuestionFilter(false);
        getlist(1);
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

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb
                        title="Question"
                        pageTitle="Question"
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
                                                            getlist(1)
                                                        }
                                                    }}
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            {filterData &&
                                                <Row>
                                                    <div className="filter-choices-input mt-0">
                                                        <div className="choices">
                                                            <div className="choices__inner">
                                                                <div className="choices__list choices__list--multiple">
                                                                    {filterData?.length > 0 && filterData.map((chat: any, index: any) => {

                                                                        return <>
                                                                            {filterData[index].data.id ?
                                                                                <div className="choices__item choices__item--selectable">{filterData[index].data.value} {" "} <i className="ri-close-line align-bottom me-1 "
                                                                                    onClick={e => {
                                                                                        updateFilter(index, chat.key);
                                                                                    }}
                                                                                ></i></div>
                                                                                :
                                                                                <div className="choices__item choices__item--selectable">{filterData[index].data} {" "} <i className="ri-close-line align-bottom me-1 "
                                                                                    onClick={e => {
                                                                                        updateFilter(index, chat.key);
                                                                                    }}
                                                                                ></i></div>}
                                                                        </>;
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>}
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-soft-info" onClick={() => setIsShowQuestionFilter(true)}>
                                                    <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                                                    Filters
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-brand-theme"
                                                    id="create-btn"
                                                    onClick={(e) => toggleModel("AddEditQuestion")}>
                                                    <i className="ri-add-line align-bottom me-1"></i> Add
                                                </button>
                                            </div>
                                        </div>
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

            <AddEditQuestion
                formData={formData.current}
                getlist={() => getlist(1)}
                show={modelName === "AddEditQuestion" ? true : false}
                onCloseClick={() => {
                    setModelName("");
                }}
                parentId={id}
            />

            <QuestionFilter
                formData={formData}
                setFilterData={setFilter}
                show={isShowQuestionFilter}
                onCloseClick={closeQuestionFilter} />

            <Modal size="md" isOpen={data.alert} centered>
                <ModalHeader
                    className="mb-2"
                    toggle={() => setData({ alert: false, id: 0, status: "" })}>
                    Are you sure you want to do this action?
                </ModalHeader>
                <ModalFooter className="border-top p-2">
                    <div className="hstack gap-2 justify-content-end">
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => setData({ alert: false, id: 0, status: "" })}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            id="application-question-modal-submit-btn"
                            className="btn btn-primary"
                            onClick={() => changeStatus(data.id, data.status)}>
                            Ok
                        </button>
                    </div>
                </ModalFooter>
            </Modal>

        </React.Fragment>
    );
};

export default Question;
