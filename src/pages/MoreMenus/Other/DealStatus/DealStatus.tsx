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
import AddEditDealStatus from "./AddEditDealStatus";
import Grid, { GridColumn, GridRow } from "../../../../Components/Grid/Grid";
import WebService from "../../../../utility/WebService";
import toast from "react-hot-toast";

const DealStatus = () => {
  document.title = `${ProjectName} | Deal Status`;
  const [modelName, setModelName] = useState<any>("");
  const [data, setData] = useState({ alert: false, id: 0, status: "" });
  const [defaultDeal, setDefaultDeal] = useState({
    alert: false,
    id: 0,
    status: "",
  });
  const [rows, setRows] = useState<GridRow[]>([]);
  const [totalCount, setTotalCount] = useState<any>(0);
  const [showloader, setShowLoader] = useState(false);
  const [headers, setHeaders] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
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
    obj.code = "deal_status";
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
      .catch((error: any) => {});
  };

  const getlist = (page?: any, AcessData?: any) => {
    setShowLoader(true);
    const res: any = {};
    let obj: any = {};
    obj.offset = page - 1;
    obj.keyword = searchText ? searchText : "";
    WebService.getAPI({
      action: `/deal-status-pagination-list`,
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
                    id: res.list[i].id,
                    status: res.list[i].status,
                    is_default: res.list[i].is_default,
                    menueMoadule: AcessData,
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
            console.log("rows", rows);
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
                    onClick={(e) => toggleModel("AddEditDealStatus", data.id)}>
                    <i className="ri-edit-box-line align-middle me-1"></i>Edit
                  </DropdownItem>
                )}
                {data.menueMoadule.sel_action_button &&
                  data.menueMoadule.sel_action_button.length > 0 &&
                  data.menueMoadule.sel_action_button.map((res: any) => {
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
                        {res == "Make Default Deal Status" && (
                          <>
                            {data.is_default === "Y" && (
                              <DropdownItem
                                onClick={(e) =>
                                  setDefaultDeal({
                                    alert: true,
                                    id: data.id,
                                    status: "N",
                                  })
                                }>
                                <i className="ri-checkbox-blank-circle-line align-middle me-1 text-success"></i>
                                make Default Deal Status
                              </DropdownItem>
                            )}
                            {data.is_default === "N" && (
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

  const toggleModel = (name: string, id?: any) => {
    if (id) {
      WebService.getAPI({
        action: "/deal-status-details/" + id,
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

  const changeStatus = (id: any, status: any) => {
    let obj: any = {};
    obj.id = id;
    obj.status = status;
    WebService.postAPI({
      action: `/deal-status`,
      body: obj,
      id: "deal-modal-submit-btn",
    })
      .then((res: any) => {
        if (res) {
          toast.success(res.message);
          setData({ alert: false, id: 0, status: "" });
          getModuleAcesslist();
        }
      })
      .catch((error: any) => {});
  };

  const onchangeDefaultStatus = (id: any, status: any) => {
    let obj: any = {};
    obj.id = id;
    obj.status = status;
    WebService.postAPI({
      action: `/change-default-deal-status`,
      body: obj,
    })
      .then((res: any) => {
        if (res) {
          toast.success(res.message);
          setDefaultDeal({ alert: false, id: 0, status: "" });
          getModuleAcesslist();
        }
      })
      .catch((error: any) => {});
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Deal Status"
            pageTitle="Deal Status"
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
                          placeholder="Title"
                          value={searchText}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyUp={(e) => {
                            if (e.keyCode === 13) {
                              getlist(1);
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
                            onClick={(e) => toggleModel("AddEditDealStatus")}>
                            <i className="ri-add-line align-bottom me-1"></i>{" "}
                            Add
                          </button>
                        </div>
                      </div>
                    )}
                  </Row>
                  <div className="px-3 mt-3">
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
      <AddEditDealStatus
        formData={formData.current}
        getlist={() => getModuleAcesslist()}
        show={modelName === "AddEditDealStatus" ? true : false}
        onCloseClick={() => {
          setModelName("");
        }}
      />

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
              id="deal-modal-submit-btn"
              className="btn btn-primary"
              onClick={() => changeStatus(data.id, data.status)}>
              Ok
            </button>
          </div>
        </ModalFooter>
      </Modal>

      <Modal size="md" isOpen={defaultDeal.alert} centered>
        <ModalHeader
          className="mb-2"
          toggle={() => setDefaultDeal({ alert: false, id: 0, status: "" })}>
          Are you sure you want to do this action?
        </ModalHeader>
        <ModalFooter className="border-top p-2">
          <div className="hstack gap-2 justify-content-end">
            <button
              type="button"
              className="btn btn-light"
              onClick={() =>
                setDefaultDeal({ alert: false, id: 0, status: "" })
              }>
              Cancel
            </button>
            <button
              type="submit"
              id="default-modal-submit-btn"
              className="btn btn-primary"
              onClick={() =>
                onchangeDefaultStatus(defaultDeal.id, defaultDeal.status)
              }>
              Ok
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default DealStatus;
