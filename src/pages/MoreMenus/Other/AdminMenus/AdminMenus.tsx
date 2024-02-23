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
import Grid, { GridColumn, GridRow } from "../../../../Components/Grid/Grid";
import { Link } from "react-router-dom";
import WebService from "../../../../utility/WebService";
import toast from "react-hot-toast";
import DragableGrid from "../../../../Components/DragableGrid/DragableGrid";
import moment from "moment";
import AddEditAdminMenus from "./AddEditAdminMenus";
import AdminMenusFilter from "./AdminMenusFilter";

const AdminMenus = () => {
  document.title = `${ProjectName} | Menus`;
  const [modelName, setModelName] = useState<string>("");
  const [data, setData] = useState({ alert: false, id: 0 });
  const [rows, setRows] = useState<GridRow[]>([]);
  const [totalCount, setTotalCount] = useState<any>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showloader, setShowLoader] = useState(false);
  const [headers, setHeaders] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [filterData, setFilterData] = useState<any>([]);
  const [filterData2, setFilterData2] = useState<any>([]);
  const formData = useRef({});

  useEffect(() => {
    getModuleAcesslist(1);
  }, [filterData]);

  const onchange = (currentPage: number) => {
    setCurrentPage(currentPage);
    getModuleAcesslist(currentPage);
  };

  const closeFilter = () => {
    setIsShowFilter(false);
    getModuleAcesslist(1);
  };

  const getModuleAcesslist = (currentPage?: any) => {
    let obj: any = {};
    obj.code = "admin_menus";
    WebService.getAPI({
      action: `/module-access`,
      body: obj,
    })
      .then((res: any) => {
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
    let obj: any = {};
    for (let key in filterData2) {
      if (key && filterData2[key]) {
        console.log(filterData2[key], "filterData2");
        obj[key] = filterData2[key].id ? filterData2[key].id : filterData2[key];
      }
    }
    obj.offset = page - 1;
    obj.keyword = searchText ? searchText : "";
    WebService.getAPI({
      action: `/menu-pagination-list`,
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
                  originalValue: res.list[i],
                });
              } else if (arr[j].db_column == "updated_date") {
                columns.push({
                  value: dateColumns({
                    updated_date: moment(res.list[i].updated_date).format(
                      "DD-MM-YYYY HH:mm a"
                    ),
                  }),
                });
              } else if (arr[j].title == "Action") {
                columns.push({
                  value: actionList({
                    id: res.list[i].menuId,
                    status: res.list[i].status,
                    menueMoadule: AcessData,
                  }),
                });
              } else if (arr[j].db_column == "roleId") {
                columns.push({ value: res.list[i].role });
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

  const dateColumns = (data: any) => {
    return (
      <>
        <span>{data.updated_date}</span>
      </>
    );
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
                    onClick={(e) => toggleModel("AddEditAdminMenus", data.id)}>
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
                        {res == "Sub Menues" && (
                          <DropdownItem>
                            <Link className="text-body"to={{pathname: `/admin/subMenus/${data.id}`,}}>
                              <i className=" ri-list-unordered  align-middle me-1"></i>{" "}
                              Sub Menus
                            </Link>
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

  const toggleModel = (name: string, id?: any) => {
    if (id) {
      WebService.getAPI({
        action: "/menu-details/" + id,
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
        action: `/change-menu-seq-no`,
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

  const changeStatus = (id: any) => {
    let obj: any = {};
    obj.menuId = id;
    WebService.postAPI({
      action: `/menu-update-status`,
      body: obj,
      id: "menu-modal-submit-btn",
    })
      .then((res: any) => {
        if (res) {
          toast.success(res.message);
          setData({ alert: false, id: 0 });
          getModuleAcesslist(1);
        }
      })
      .catch((error: any) => { });
  };

  const updateFilter = (index: any, key2: any) => {
    for (let key in filterData2) {
      if (key == key2) {
        delete filterData2[key];
        break;
      }
    }
    setFilterData2({ ...filterData2 });
    filterData?.splice(index, 1);
    setFilterData([...filterData]);
  };

  const setFilter = (data: any) => {
    setFilterData(null);
    setFilterData2(null);
    setFilterData2(data);
    let filterList: any = [];
    for (let key in data) {
      if (key && data[key]) {
        filterList.push({
          data: data[key],
          key: key,
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
            title="Manage Menus"
            pageTitle="Menus"
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
                    <Col sm={4}>
                      {filterData && (
                        <Row>
                          <div className="filter-choices-input mt-0">
                            <div className="choices">
                              <div className="choices__inner">
                                <div className="choices__list choices__list--multiple">
                                  {filterData?.length > 0 &&
                                    filterData.map((chat: any, index: any) => {
                                      return (
                                        <>
                                          {filterData[index].data.id ? (
                                            <div className="choices__item choices__item--selectable">
                                              {filterData[index].data.value}{" "}
                                              <i
                                                className="ri-close-line align-bottom me-1 "
                                                onClick={(e) => {
                                                  updateFilter(index, chat.key);
                                                }}></i>
                                            </div>
                                          ) : (
                                            <div className="choices__item choices__item--selectable">
                                              {filterData[index].data}{" "}
                                              <i
                                                className="ri-close-line align-bottom me-1 "
                                                onClick={(e) => {
                                                  updateFilter(index, chat.key);
                                                }}></i>
                                            </div>
                                          )}
                                        </>
                                      );
                                    })}
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
                          onClick={() => setIsShowFilter(true)}>
                          <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                          Filters
                        </button>
                      </div>
                    </div>
                  </Row>
                  <div className="px-3">
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

      <AddEditAdminMenus
        formData={formData.current}
        getlist={() => getModuleAcesslist(1)}
        show={modelName === "AddEditAdminMenus" ? true : false}
        onCloseClick={() => {
          setModelName("");
        }}
      />

      <AdminMenusFilter
        setFilterData={setFilter}
        show={isShowFilter}
        onCloseClick={closeFilter}
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
              id="menu-modal-submit-btn"
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

export default AdminMenus;
