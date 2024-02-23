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
import Grid, {
  GridColumn,
  GridHeader,
  GridRow,
} from "../../../../Components/Grid/Grid";
import { ProjectName } from "../../../../Components/constants/layout";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import toast from "react-hot-toast";
import AddEditSource from "../../Other/Source/AddEditSource";
import SourceFilter from "../../Other/Source/SourceFilter";
import DragableGrid from "../../../../Components/DragableGrid/DragableGrid";
import { Link, useParams } from "react-router-dom";
import AddEditKanbanStage from "./AddEditKanbanStage";
import HelperService from "../../../../utility/HelperService";
import AddEditKanbanSubStage from "./AddEditKanbanSubStage";

const KanbanSubStage = () => {
  document.title = `${ProjectName} | Kanban Stage`;
  const [rows, setRows] = useState<GridRow[]>([]);
  const [modelName, setModelName] = useState<string>("");
  const [totalCount, setTotalCount] = useState<any>(0);
  const [showloader, setShowLoader] = useState(false);
  const [filterData, setFilterData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowAddKanbanSubStage, setIsShowAddKanbanSubStage] = useState(false);
  const [id, setId] = useState<any>();
  const [name, setName] = useState<any>();
  const [data, setData] = useState({ alert: false, id: 0, status: "" });
  const [headers, setHeaders] = useState<any[]>([]);
  const formData = useRef({});
  let { stageId } = useParams();

  useEffect(() => {
    getlist(1);
  }, [filterData]);

  const onchange = (currentPage: number) => {
    setCurrentPage(currentPage);
    getlist(currentPage);
  };

  const getlist = (page?: any) => {
    setShowLoader(true);
    let rows: GridRow[] = [];
    let obj: any = {};
    obj.offset = page - 1;
    obj.parentId = stageId;

    WebService.getAPI({
      action: `/kanban-stage/pagination-list`,
      body: obj,
    })
      .then((res: any) => {
        setName(res.name);
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
                  value: actionList(res.list[i]),
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
            console.log("rows", rows);
            setRows([...rows]);
          }
        }
        // if (res && res.list) {
        //   setTotalCount(res.count);
        //   for (var i in res.list) {
        //     let columns: GridColumn[] = [];
        //     columns.push({
        //       value:
        //         page == 0
        //           ? Number(i) + 1
        //           : 10 * Number(page - 1) + Number(i) + 1,
        //       originalValue: res.list[i],
        //     });
        //     columns.push({ value: res.list[i].stage_title });
        //     columns.push({ value: res.list[i].seq_no });
        //     columns.push({
        //       value: res.list[i].added_date
        //         ? HelperService.getUpdatedFormatedTimeWithSlash(
        //             res.list[i].added_date
        //           )
        //         : "",
        //     });
        //     columns.push({ value: actionList(res.list[i]) });
        //     rows.push({ data: columns });
        //   }
        //   setRows([...rows]);
        // }
        setShowLoader(false);
      })
      .catch((error: any) => {
        setShowLoader(false);
      });
  };
  const toggleModel = (name: string, id?: any) => {
    if (id) {
      WebService.getAPI({
        action: "/kanban-stage/details/" + id,
      })
        .then((res: any) => {
          if (res && res.result) {
            formData.current = res.result;
            setModelName(name);
          }
        })
        .catch((error: any) => {});
    } else {
      formData.current = "";
      setModelName(name);
    }
  };
  const actionList = (data: any) => {
    return (
      <>
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
                  onClick={() =>
                    toggleModel("AddEditKanbanSubStage", data.stageId)
                  }>
                  <i className="ri-edit-box-line align-middle me-1"></i>Edit
                </DropdownItem>
                {data.status == "Y" ? (
                  <>
                    <DropdownItem
                      onClick={(e) =>
                        setData({ alert: true, id: data.stageId, status: "N" })
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
                        setData({ alert: true, id: data.stageId, status: "Y" })
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

  const onchangeStatus = (id: any, status: any) => {
    let obj: any = {};
    obj.stageId = id;
    obj.status = status;
    WebService.postAPI({
      action: `/kanban-stage/status`,
      body: obj,
    })
      .then((res: any) => {
        if (res) {
          toast.success(res.message);
          setData({ alert: false, id: 0, status: "" });
          getlist(1);
        }
      })
      .catch((error: any) => {});
  };

  const onEdit = (id: any) => {
    setIsShowAddKanbanSubStage(true);
    setId(id);
  };

  const closeAddKanbanSubStage = () => {
    setId("");
    setIsShowAddKanbanSubStage(false);
    getlist(1);
  };

  const onclickGridRow = (data: any) => {
    var array = [];
    for (var i in data) {
      for (var j in data[i]) {
        if (data[i][j] && data[i][j].length > 0) {
          array.push(data[i][j][0].originalValue);
        }
      }
    }
    if (array.length > 0) {
      WebService.postAPI({
        action: `/kanban-stage/change-seq-no`,
        body: {
          list: array,
        },
      })
        .then((res: any) => {
          getlist(currentPage);
        })
        .catch((error: any) => {});
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title={`Manage Kanban Sub Stage` + " :" + name}
            pageTitle={`Manage Kanban Sub Stage` + " :" + name}
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
                          placeholder="Source"
                          value={""}
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <Col sm={2}>
                      {filterData?.user_type && (
                        <Row>
                          <div className="filter-choices-input mt-0">
                            <div className="choices">
                              <div className="choices__inner">
                                <div className="choices__list choices__list--multiple">
                                  {filterData?.user_type ? (
                                    <div className="choices__item choices__item--selectable">
                                      {filterData?.user_type}{" "}
                                      <i
                                        className="ri-close-line align-bottom me-1 "
                                        onClick={(e) => {
                                          filterData.user_type = "";
                                          setFilterData({ ...filterData });
                                        }}></i>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Row>
                      )}
                    </Col>

                    <div className="col-sm-auto ms-auto">
                      <div className="hstack gap-2 flex-wrap">
                        <button
                          type="button"
                          className="btn btn-brand-theme"
                          id="create-btn"
                          onClick={() => toggleModel("AddEditKanbanSubStage")}>
                          <i className="ri-add-line align-bottom me-1"></i> Add
                        </button>
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
              id="workflow-modal-submit-btn"
              className="btn btn-primary"
              onClick={() => onchangeStatus(data.id, data.status)}>
              Ok
            </button>
          </div>
        </ModalFooter>
      </Modal>
      <AddEditKanbanSubStage
        formData={formData.current}
        show={modelName === "AddEditKanbanSubStage" ? true : false}
        getlist={() => getlist(1)}
        onCloseClick={() => {
          setModelName("");
        }}
        parentId={stageId}
      />
    </React.Fragment>
  );
};

export default KanbanSubStage;
