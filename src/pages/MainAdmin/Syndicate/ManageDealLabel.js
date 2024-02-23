import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  PaginationItem,
  Pagination,
  PaginationLink,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import "swiper/css";
import SweetAlert from "react-bootstrap-sweetalert";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AddDealLabel from "./Models/AddDealLabel";
import EditDealLabel from "./Models/EditDealLabel";

const ManageDealLabel = () => {
  const toggleModel = (name) => {
    setModelName(name);
  };

  const [modelName, setModelName] = useState("");
  const [profileData, setProfileData] = useState({
    alert: false,
    id: "",
    status: "",
  });

  const [statusData, setStatusData] = useState({
    alert: false,
    id: "",
    status: "",
  });

  const submit = () => {
    // console.log(statusData)
  };

  const data = [
    {
      code: "DL0010",
      srno: "1",
      title: "Lead Investor",
      type: "Single",
    },
    {
      code: "DL0011",
      srno: "2",
      title: "Board Observer",
      type: "Single",
    },
    {
      code: "DL0012",
      srno: "3",
      title: "Investment Director",
      type: "Single",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Manage Deal Label"
            pageTitle="Syndicate"
            location="/syndicate"
          />
          <Row>
            <Col lg={12}>
              <Card id="leadsList">
                <CardHeader className="border-0">
                  <Row className="g-0 align-items-center">
                    <Col sm={3}>
                      <div className="search-box">
                        <Input
                          type="text"
                          className="form-control search"
                          placeholder="Title"
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <div className="col-sm-auto ms-auto">
                      <div
                        className="d-flex hstack gap-2 flex-wrap"
                        id="AddDealLabel"
                        onClick={(e) => toggleModel("AddDealLabel")}
                      >
                        <button type="button" class="btn btn-brand-theme">
                          <i class="ri-add-line align-bottom me-1"></i> Add
                        </button>
                      </div>
                    </div>
                  </Row>

                  <div className="table-responsive table-card mt-3">
                    <table className="table align-middle table-nowrap table-striped-columns mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">Cpde ID</th>
                          <th scope="col">Sr. No.</th>
                          <th scope="col">Title</th>
                          <th scope="col">Type</th>
                          <th scope="col" style={{ width: "150px" }}>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.length &&
                          data.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{item.code}</td>
                                <td>{item.srno}</td>
                                <td>{item.title}</td>
                                <td>{item.type}</td>
                                <td className="social-icons">
                                  <div className="btn-dots">
                                    <UncontrolledDropdown>
                                      <DropdownToggle
                                        className="btn btn-soft-secondary btn-sm"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ri-more-fill align-middle"></i>
                                      </DropdownToggle>
                                      <DropdownMenu>
                                        <li>
                                          <DropdownItem
                                            className="px-2" id="EditDealLabel"
                                            onClick={(e) => toggleModel("EditDealLabel")}>
                                            <i className="ri-edit-line align-bottom me-2"></i>
                                            Edit
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem className="px-2" onClick={(e) =>
                                            setStatusData({
                                              alert: true,
                                              id: 1,
                                              status: 1,
                                            })
                                          }>
                                            <i className="ri-checkbox-circle-line align-bottom me-1"></i>
                                            Active
                                          </DropdownItem>
                                        </li>
                                      </DropdownMenu>
                                    </UncontrolledDropdown>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  <div className="gridjs-footer mt-4">
                    <div className="gridjs-pagination">
                      <div className="gridjs-summary" title="Total Count">
                        Total Count : 1
                      </div>
                      <div className="gridjs-pages">
                        <Pagination
                          className="mb-0"
                          style={{ marginBottom: "0" }}
                        >
                          <PaginationItem>
                            <PaginationLink first href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#" previous />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink className="active" href="#">
                              1
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#" next />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink last href="#" />
                          </PaginationItem>
                        </Pagination>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <AddDealLabel
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "AddDealLabel" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditDealLabel
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditDealLabel" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <SweetAlert
        custom
        show={statusData.alert}
        btnSize="md"
        showCancel
        showProfile
        showCloseButton
        confirmBtnText="Yes"
        cancelBtnText="Cancel"
        confirmBtnBsStyle="success"
        cancelBtnBsStyle="danger"
        onConfirm={submit}
        onCancel={(e) => setStatusData({ alert: false, id: "", status: "" })}
      >
        Are you sure you want to do this action?
      </SweetAlert>
    </React.Fragment>
  );
};

export default ManageDealLabel;
