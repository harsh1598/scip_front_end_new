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
  Modal,
  ModalHeader,
  ModalFooter,
  Input,
} from "reactstrap";
import { ProjectName } from "../../Components/constants/layout";
import Grid, {
  GridColumn,
  GridHeader,
  GridRow,
} from "../../Components/Grid/Grid";
import { Link } from "react-router-dom";
import WebService from "../../utility/WebService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../Components/Common/BreadCrumb";

const headers: GridHeader[] = [
  {
    title: "Sr.no",
    classTitle: "text-start",
  },
  {
    title: "Name",
    class: "text-center",
  },
  {
    title: "Action",
    class: "text-center",
  },
];

const TenantsList = () => {
  const history = useNavigate();
  document.title = `${ProjectName} | Tenants List`;
  const [rows, setRows] = useState<GridRow[]>([]);
  const [totalCount, setTotalCount] = useState<any>(0);
  const [data, setData] = useState({ alert: false, id: 0 });
  const [showloader, setShowLoader] = useState(false);
  const [formData, setFormData] = useState<any>();


  useEffect(() => {
    getlist(1);
  }, []);

  const onchange = (currentPage: number) => {
    getlist(currentPage);
  };

  const loginClientPortal = (id: number, url: any) => {
    const token: any = localStorage.getItem("token");
    const UserData: any = localStorage.getItem("UserData");
    let data: any = {
      id: id,
    };
    localStorage.setItem("tenantId", data.id);
    localStorage.setItem("api_base_url", url);
    WebService.getAccesstoken({
      action: "/login-client-portal",
      body: data,
    })
      .then((res: any) => {
        if (res && res.api_base_url && res.access_token) {
          localStorage.setItem("IsSuperAdmin", "A");
          localStorage.setItem("token1", token);
          localStorage.setItem("UserData1", UserData);
          localStorage.setItem("api_base_url", res.api_base_url);
          localStorage.setItem("token", res.access_token);
          localStorage.setItem("UserData", JSON.stringify(res.user_detail));
          history("/dashboard");
          window.location.reload();
        }
      })
      .catch((error: any) => {
        localStorage.setItem("tenantId", data.id);
        localStorage.setItem("api_base_url", url);
      });
  };
  const update = (id: number, url: any, type: string) => {
    const token: any = localStorage.getItem("token");
    const UserData: any = localStorage.getItem("UserData");
    let data: any = {
      id: id,
    };
    localStorage.setItem("tenantId", data.id);
    localStorage.setItem("api_base_url", url);
    WebService.getAccesstoken({
      action: "/check-role",
      body: data,
    })
      .then((res: any) => {
        if (res && res.api_base_url && res.access_token) {
          localStorage.setItem("token1", token);
          localStorage.setItem("UserData1", UserData);
          localStorage.setItem("api_base_url", res.api_base_url);
          localStorage.setItem("token", res.access_token);
          localStorage.setItem("UserData", JSON.stringify(res.user_detail));
        }
        if (type == 'MANAGE_ROLE') {
          if (res && res.user_role_id) {
            history("/admin-role/permission/" + res.user_role_id);
          } else {
            history("/admin-role/permission");
          }
        } else if (type == 'FORM_LAYOUT') {
          history("/admin/form-builder");
        } else if (type == 'MANAGE_USER') {
          history(`/admin/manage-user/${res.user_detail.userId}`);
        } else if (type == 'MANAGE_DEAL') {
          history("/admin/manage-deal-layout-list");
        }

      })
      .catch((error: any) => {
        localStorage.setItem("tenantId", data.id);
        localStorage.setItem("api_base_url", url);
      });
  };

  const getlist = (page?: any) => {
    const token1: any = localStorage.getItem("token1");
    const UserData1: any = localStorage.getItem("UserData1");
    if (token1 && UserData1) {
      localStorage.setItem("token", token1);
      localStorage.setItem("UserData", UserData1);
      localStorage.removeItem("tenantId");
      localStorage.removeItem("api_base_url");
      localStorage.removeItem("token1");
      localStorage.removeItem("UserData1");
    }
    setShowLoader(true);
    let rows: GridRow[] = [];
    const res: any = {};
    let obj: any = {};
    obj.offset = page - 1;

    // setTimeout(function () {

    WebService.getAPI({
      action: `/tenants-pagination-list`,
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
            columns.push({ value: res.list[i].name });
            columns.push({
              value: actionList({
                id: res.list[i].id,
                uuid: res.list[i].uuid,
                api_base_url: res.list[i].api_base_url,
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
    // }, 2000);

  };

  const actionList = (data: any) => {
    return (
      <>
        {/* hstack */}
        <ul className="list-inline gap-2 mb-0 justify-centent-end">
          <li className="list-inline-item cursor-pointer">
            <img
              src="/images/dashboardButton.svg"
              onClick={(e) => loginClientPortal(data.uuid, data.api_base_url)}
            />
          </li>
          <li className="list-inline-item">
            <UncontrolledDropdown>
              <DropdownToggle
                className="btn btn-soft-secondary btn-sm dropdown"
                tag="button">
                <i className="ri-more-fill align-middle"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem>
                  <Link
                    className="text-body"
                    to={{
                      // pathname: `/role/permission`,
                      pathname: `/edit-tenants/${data.uuid}`,
                    }}>
                    <i className="ri-edit-box-line align-middle me-1"></i>Edit
                  </Link>
                </DropdownItem>
                <DropdownItem
                  onClick={(e) => setData({ alert: true, id: data.uuid })}>
                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                  Delete
                </DropdownItem>
                <DropdownItem
                  onClick={(e) => {
                    localStorage.removeItem("tabId");
                    update(data.uuid, data.api_base_url, 'FORM_LAYOUT')

                  }
                  }>
                  <i className="ri-user-settings-line align-middle me-1"></i>
                  Manage Form Layout
                </DropdownItem>
                <DropdownItem
                  onClick={(e) => update(data.uuid, data.api_base_url, 'MANAGE_DEAL')}>
                  <i className="ri-user-settings-line align-middle me-1"></i>
                  Deal Form Layout
                </DropdownItem>
                <DropdownItem
                  onClick={(e) => update(data.uuid, data.api_base_url, 'MANAGE_ROLE')}>
                  <i className="ri-user-settings-line align-middle me-1"></i>
                  Manage Role
                </DropdownItem>
                <DropdownItem
                  onClick={(e) => update(data.uuid, data.api_base_url, 'MANAGE_USER')}>
                  <i className="ri-user-settings-line align-middle me-1"></i>
                  Manage User
                </DropdownItem>
             
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
        </ul>
      </>
    );
  };

  const _delete = (id: any) => {
    WebService.deleteAPI({
      action: `/delete/` + id,
      id: "role-list-submit-btn",
    })
      .then((res: any) => {
        if (res) {
          toast.success(res.message);
          setData({ alert: false, id: 0 });
          getlist(1);
        }
      })
      .catch((error: any) => { });
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Tenants Manager" pageTitle="Tenants Manager" />
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
                          onChange={(e) =>
                            setFormData({ keyword: e.target.value })
                          }
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <div className="col-sm-auto ms-auto">
                      <div className="hstack gap-2 flex-wrap">
                        <Link
                          className="btn btn-brand-theme"
                          to={{
                            pathname: `/add-tenants`,
                          }}>
                          <i className="ri-add-line align-bottom me-1"></i> Add
                        </Link>
                      </div>
                    </div>
                  </Row>
                  <div className="px-3">
                    <div className="table-card">
                      <Grid
                        headers={headers}
                        rows={rows}
                        count={totalCount}
                        class2={true}
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
              id="role-list-submit-btn"
              className="btn btn-primary"
              onClick={() => _delete(data.id)}>
              Ok
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default TenantsList;
