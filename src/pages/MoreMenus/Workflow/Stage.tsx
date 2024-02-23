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
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import AddEditStage from "./AddEditStage";
// import EditTeam from "./EditTeam";
import Grid, {
  GridColumn,
  GridHeader,
  GridRow,
} from "../../../Components/Grid/Grid";
import WebService from "../../../utility/WebService";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// const headers: GridHeader[] = [
//   {
//     title: "Sr.no",
//     classTitle: "text-start",
//   },
//   {
//     title: "Stage Title",
//     classTitle: "text-start",
//   },
//   {
//     title: "Dashboard Color",
//     classTitle: "text-start",
//   },
//   {
//     title: "Sequence No",
//     classTitle: "text-start",
//   },
//   {
//     title: "Action",
//     class: "text-center",
//   },
// ];

const Stage = () => {
  document.title = `${ProjectName} | Stage`;
  const [modelName, setModelName] = useState<any>("");
  const [data, setData] = useState({ alert: false, id: 0, status: "" });
  const [rows, setRows] = useState<GridRow[]>([]);
  const [totalCount, setTotalCount] = useState<any>(0);
  const [showloader, setShowLoader] = useState(false);
  const [headers, setHeaders] = useState<any[]>([]);
  const formData = useRef({});
  let { id } = useParams();

  useEffect(() => {
    getlist(1);
  }, []);

  const onchange = (currentPage: number) => {
    getlist(currentPage);
  };

  const getlist = (page?: any) => {
    setShowLoader(true);
    let rows: GridRow[] = [];
    let obj: any = {};
    obj.offset = page - 1;
    obj.workflowId = id;
    WebService.getAPI({
      action: `/stage-pagination-list`,
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
                    id: res.list[i].stageId,
                    active: res.list[i].active,
                  }),
                });
              } else if (
                arr[j].control_type == "SELECT" &&
                arr[j].nature == "DYNAMIC"
              ) {
                columns.push({ value: res.list[i][arr[j].source_value_name] });
              } else {
                if (arr[j].control_type == "COLOR_PICKER") {
                  columns.push({
                    value: colorbtn(res.list[i][arr[j].db_column]),
                  });
                } else {
                  columns.push({ value: res.list[i][arr[j].db_column] });
                }
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

  const colorbtn = (data: any) => {
    return (
      <>
        <button
          className="btn"
          style={{ backgroundColor: `${data}` }}
          type="button"></button>
      </>
    );
  };

  const actionList = (data: any) => {
    console.log("sdfsd", data);

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
                <DropdownItem
                  onClick={(e) => toggleModel("AddEditStage", data.id)}>
                  <i className="ri-edit-box-line align-middle me-1"></i>Edit
                </DropdownItem>
                {data.active === "Y" ? (
                  <>
                    <DropdownItem
                      onClick={(e) =>
                        setData({ alert: true, id: data.id, status: "N" })
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
                        setData({ alert: true, id: data.id, status: "Y" })
                      }>
                      <i
                        className="ri-checkbox-circle-line align-middle me-1"
                        style={{ color: "green" }}></i>
                      Active
                    </DropdownItem>
                  </>
                )}
                <DropdownItem>
                  <Link
                    className="text-body"
                    to={{
                      pathname: `/admin/workflow/substage/${data.id}`,
                    }}>
                    <i className="ri-team-line align-middle me-1"></i>View Sub
                    Stage
                  </Link>
                </DropdownItem>
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
        action: "/stage-details/" + id,
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

  const _changeStatus = (id: any, status: any) => {
    let obj: any = {};
    obj.stageId = id;
    obj.status = status;
    WebService.postAPI({
      action: `/stage-update-status`,
      body: obj,
      id: "stage-modal-submit-btn",
    })
      .then((res: any) => {
        // console.log(res)
        if (res) {
          toast.success(res.message);
          setData({ alert: false, id: 0, status: "" });
          getlist(1);
        }
      })
      .catch((error: any) => {});
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Stages"
            pageTitle="Stages"
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
                          name="title"
                          value={""}
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <div className="col-sm-auto ms-auto">
                      <div className="hstack gap-2 flex-wrap">
                        <button
                          type="button"
                          className="btn btn-brand-theme"
                          id="create-btn"
                          onClick={(e) => toggleModel("AddEditStage")}>
                          <i className="ri-add-line align-bottom me-1"></i> Add
                        </button>
                      </div>
                    </div>
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

      <AddEditStage
        formData={formData.current}
        workflowId={id}
        getlist={() => getlist(1)}
        show={modelName === "AddEditStage" ? true : false}
        onCloseClick={() => {
          setModelName("");
        }}
      />

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
              id="stage-modal-submit-btn"
              className="btn btn-primary"
              onClick={() => _changeStatus(data.id, data.status)}>
              Ok
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default Stage;
