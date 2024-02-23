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
import AddEditAppVersion from "./AddEditAppVersion";
import AppVersionFilter from "./AppVersionFilter";
import toast from "react-hot-toast";

const AppVersion = () => {
  document.title = `${ProjectName} | App Version`;
  const [rows, setRows] = useState<GridRow[]>([]);
  const [totalCount, setTotalCount] = useState<any>(0);
  const [showloader, setShowLoader] = useState(false);
  const [filterData, setFilterData] = useState<any>([]);
  const [isShowAppVesrionFilter, setIsShowAppVesrionFilter] = useState(false);
  const [modelName, setModelName] = useState<any>("");
  const [data, setData] = useState({ alert: false, id: 0 });
  const [headers, setHeaders] = useState<any[]>([]);
  const [searchText, setSearchText] = useState('');
  const [moduleAcessData, setModuleAcessData] = useState<any>([]);
  const formData = useRef({});
  const [id, setId] = useState<any>();
  useEffect(() => {
    getModuleAcesslist(1);
  }, [filterData]);

  const onchange = (currentPage: number) => {
    getModuleAcesslist(currentPage);
  };

  const getModuleAcesslist = (currentPage?: any) => {
    let obj: any = {};
    obj.code = "app_version";
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
    obj = filterData;
    obj.offset = page - 1;
    obj.keyword = searchText ? searchText : ""
    WebService.getAPI({
      action: `/app-version-pagination-list`,
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
            setRows([...rows]);
          }
        }
        setShowLoader(false);
      })
      .catch((error: any) => {
        setShowLoader(false);
      });
  };

  const actionList = (data: any) => {
    return (
      <>
        {" "}
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
                  onClick={() => toggleModel("AddEditAppVersion", data.id)}>
                  <i className="ri-edit-box-line align-middle me-1"></i>Edit
                </DropdownItem>
              )}
                {data.menueMoadule.sel_action_button &&
                  data.menueMoadule.sel_action_button.length > 0 &&
                  data.menueMoadule.sel_action_button.map((res: any) => {
                    return (
                      <>
                        {res == "Delete" && (
                         <DropdownItem
                         onClick={(e) => setData({ alert: true, id: data.id })}>
                         <i className="ri-delete-bin-2-line align-middle me-1 text-danger"></i>
                         Delete
                       </DropdownItem>
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

  const onchangeStatus = (id: any) => {
    WebService.getAPI({
      action: `/delete-app-version/${id}`,
      body: null,
    })
      .then((res: any) => {
        if (res) {
          toast.success(res.message);
          setData({ alert: false, id: 0 });
          getModuleAcesslist(1);
        }
      })
      .catch((error: any) => {});
  };

  const closeAppVersionFilter = () => {
    setId("");
    setIsShowAppVesrionFilter(false);
    getModuleAcesslist(1);
  };

  const toggleModel = (name: string, id?: any) => {
    if (id) {
      WebService.getAPI({
        action: "/team-details/" + id,
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

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="App Version"
            pageTitle="App Version"
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
                          placeholder="Version"
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
                      {filterData?.type && (
                        <Row>
                          <div className="filter-choices-input mt-0">
                            <div className="choices">
                              <div className="choices__inner">
                                <div className="choices__list choices__list--multiple">
                                  {filterData?.type ? (
                                    <div className="choices__item choices__item--selectable">
                                      {filterData?.type}{" "}
                                      <i
                                        className="ri-close-line align-bottom me-1 "
                                        onClick={(e) => {
                                          filterData.type = "";
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
                          className="btn btn-soft-info"
                          onClick={() => setIsShowAppVesrionFilter(true)}>
                          <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                          Filters
                        </button>
                        {moduleAcessData.is_add == 1 && (
                        <button
                          type="button"
                          className="btn btn-brand-theme"
                          id="create-btn"
                          onClick={() => toggleModel("AddEditAppVersion")}>
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
      </div>
      {/* Modal */}

      <Modal size="md" isOpen={data.alert} centered>
        <ModalHeader
          className="mb-2"
          toggle={() => setData({ alert: false, id: 0 })}>
          Are you sure you want to Delete?
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
              id="workflow-modal-submit-btn"
              className="btn btn-primary"
              onClick={() => onchangeStatus(data.id)}>
              Ok
            </button>
          </div>
        </ModalFooter>
      </Modal>

      <AddEditAppVersion
        formData={formData.current}
        getlist={() => getModuleAcesslist(1)}
        show={modelName === "AddEditAppVersion" ? true : false}
        onCloseClick={() => {
          setModelName("");
        }}
      />
      <AppVersionFilter
        formData={formData}
        setFilterData={setFilterData}
        show={isShowAppVesrionFilter}
        onCloseClick={closeAppVersionFilter}
      />
    </React.Fragment>
  );
};

export default AppVersion;
