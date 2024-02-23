import React, { useEffect, useState } from "react";
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
// import EditTeam from "./EditTeam";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Grid, {
  GridColumn,
  GridHeader,
  GridRow,
} from "../../Components/Grid/Grid";
import { ProjectName } from "../../Components/constants/layout";
import WebService from "../../utility/WebService";
import EditManageMasterTable from "./EditManageMasterTable";

const headers: GridHeader[] = [
  {
    title: "Sr.no",
    classTitle: "text-start",
  },
  {
    title: "Title",
    classTitle: "text-start",
  },
  {
    title: "Action",
    class: "text-center",
  },
];

const ManageMasterTables = () => {
  document.title = `${ProjectName} | Manage Master Tables`;
  const [modelName, setModelName] = useState<any>("");
  const [data, setData] = useState({ alert: false, id: 0, status: "" });
  const [rows, setRows] = useState<GridRow[]>([]);
  const [formData, setFormData] = useState<any>();
  const [totalCount, setTotalCount] = useState<any>(0);
  const [showloader, setShowLoader] = useState(false);
  const [bladeTitle, setBladeTitle] = useState<any>("");

  useEffect(() => {
    getlist(1);
  }, []);

  const onchange = (currentPage: number) => {
    getlist(currentPage);
  };

  const getlist = (page?: any) => {
    setShowLoader(true);
    let rows: GridRow[] = [];
    const res: any = {};
    let obj: any = {};
    obj.offset = page - 1;
    
    WebService.getAPI({
      action: `/master-table-pagination-list`,
      body: obj,
    })
      .then((res: any) => {
        if (res && res.list) {
          setTotalCount(res.count);
          setShowLoader(false);
          for (var i in res.list) {
            let columns: GridColumn[] = [];
            columns.push({
              value:
                page == 0
                  ? Number(i) + 1
                  : 10 * Number(page - 1) + Number(i) + 1,
            });
            columns.push({ value: res.list[i].table_name });
            columns.push({
              value: actionList({
                id: res.list[i].id,
                table_name: res.list[i].table_name,
              }),
            });
            rows.push({ data: columns });
          }
          setRows([...rows]);
        }
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
                style={{ position: 'relative'}}
                tag="button">
                <i className="ri-more-fill align-middle"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem
                  onClick={(e) =>
                    toggleModel("AddEditTeam", data.id, data.table_name)
                  }>
                  <i className="ri-edit-box-line align-middle me-1"></i>Edit
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
        </ul>
      </>
    );
  };

  const toggleModel = (name: string, id?: any, table_name?: any) => {
    setModelName(name);
    setBladeTitle(table_name);
  };

  const _changeStatus = (id: any, status: any) => {
    let obj: any = {};
    obj.teamId = id;
    obj.status = status;
    WebService.postAPI({
      action: `/update-status`,
      body: obj,
      id: "team-modal-submit-btn",
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

  return (
    <>
      <EditManageMasterTable
        formData={formData}
        setFormData={setFormData}
        getlist={() => getlist(1)}
        Title={bladeTitle}
        show={modelName === "AddEditTeam" ? true : false}
        onCloseClick={() => {
          setModelName("");
          setFormData({});
        }}
      />
      <React.Fragment>
        <Container fluid>
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
                          value={formData ? formData.title : ""}
                          X
                          onChange={(e) =>
                            setFormData({ keyword: e.target.value })
                          }
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
                id="team-modal-submit-btn"
                className="btn btn-primary"
                onClick={() => _changeStatus(data.id, data.status)}>
                Ok
              </button>
            </div>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    </>
  );
};

export default ManageMasterTables;
