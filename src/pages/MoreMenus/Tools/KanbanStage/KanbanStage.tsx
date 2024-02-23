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
  GridRow,
} from "../../../../Components/Grid/Grid";
import { ProjectName } from "../../../../Components/constants/layout";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import toast from "react-hot-toast";
import DragableGrid from "../../../../Components/DragableGrid/DragableGrid";
import { useNavigate } from "react-router-dom";
import AddEditKanbanStage from "./AddEditKanbanStage";

const KanbanStage = () => {
  document.title = `${ProjectName} | Kanban Stage`;
  const [rows, setRows] = useState<GridRow[]>([]);
  const [modelName, setModelName] = useState<any>("");
  const [totalCount, setTotalCount] = useState<any>(0);
  const [showloader, setShowLoader] = useState(false);
  const [filterData, setFilterData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [headers, setHeaders] = useState<any[]>([]);
  const formData = useRef({});
  const [data, setData] = useState({ alert: false, id: 0, status: "" });
  const [searchText, setSearchText] = useState('');
  const [moduleAcessData, setModuleAcessData] = useState<any>([]);

  let history = useNavigate();

  useEffect(() => {
    getModuleAcesslist();
  }, [filterData]);

  const onchange = (currentPage: number) => {
    setCurrentPage(currentPage);
    getModuleAcesslist(currentPage);
  };

  const getModuleAcesslist = (currentPage?: any) => {
    let obj: any = {};
    obj.code = "kanban_stage";
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
        .catch((error: any) => { });
    } else {
      formData.current = "";
      setModelName(name);
    }
  };

  const getlist = (page?: any, AcessData?: any) => {
    setShowLoader(true);
    let rows: GridRow[] = [];
    let obj: any = {};
    obj.offset = page - 1;
    obj.keyword = searchText ? searchText : ""
    WebService.getAPI({
      action: `/kanban-stage/pagination-list`,
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
                      : 10 * Number(page - 1) + Number(i) + 1,originalValue: res.list[i]
                });
              } else if (arr[j].title == "Action") {
                columns.push({
                  value: actionList(res.list[i], AcessData),
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
        setShowLoader(false);
      })
      .catch((error: any) => {
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
                tag="button">
                <i className="ri-more-fill align-middle"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                {AcessData.is_edit == 1 && (
                  <DropdownItem
                    onClick={() =>
                      toggleModel("AddEditKanbanStage", data.stageId)
                    }>
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
                                    id: data.stageId,
                                    status: "N",
                                  })
                                }>
                                <i className="ri-close-circle-line align-middle me-1"
                                  style={{ color: "red" }}></i>
                                Deactive
                              </DropdownItem>
                            )}
                            {data.status === "N" && (
                              <DropdownItem
                                onClick={(e) =>
                                  setData({
                                    alert: true,
                                    id: data.stageId,
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
                        {res == "View Stage List" && (
                          <>
                            {data.is_sub_stage == "Y" && (
                              <DropdownItem>
                                <a
                                  onClick={() =>
                                    history(`/admin/kanban/stage/${data.stageId}`)
                                  }
                                  className="text-body">
                                  <i className="ri-list-unordered align-middle me-1"></i>
                                  View Stage List
                                </a>
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
          getModuleAcesslist();
        }
      })
      .catch((error: any) => { });
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
          getModuleAcesslist(currentPage);
        })
        .catch((error: any) => { });
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Kanban Stage"
            pageTitle="Kanban Stage"
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
                    {moduleAcessData.is_add == 1 && (
                    <div className="col-sm-auto ms-auto">
                      <div className="hstack gap-2 flex-wrap">
                        <button
                          type="button"
                          className="btn btn-brand-theme"
                          id="create-btn"
                          onClick={() => toggleModel("AddEditKanbanStage")}>
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
      <AddEditKanbanStage
        formData={formData.current}
        getlist={() => getModuleAcesslist()}
        show={modelName === "AddEditKanbanStage" ? true : false}
        onCloseClick={() => {
          setModelName("");
        }}
      />
    </React.Fragment>
  );
};

export default KanbanStage;
