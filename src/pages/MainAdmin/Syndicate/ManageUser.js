import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import "swiper/css/pagination";
import "swiper/css/navigation";
import AddUser from "./Models/AddUser";
import EditUser from "./Models/EditUser";
import SweetAlert from "react-bootstrap-sweetalert";

const ManageUser = () => {
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

  const navigate = useNavigate();
  const navigateIndex = (data) => {
    navigate("/admin/modules/");
  };

  const submit = () => {
    // console.log(statusData)
  };

  const data = [
    {
      id: 1,
      name: "Donna Snider",
      emailid: "delete_Donnas@yopmail.com",
      contact: "9988552211",
      designation: "Senior Manager",
      addedby: "SCIP A",
    },
    {
      id: 2,
      name: "Ash King",
      emailid: "ak12@yopmail.com",
      contact: "7974733151",
      designation: "Manager",
      addedby: "SCIP A",
    },
    {
      id: 3,
      name: "Kalpana C",
      emailid: "kc2@yopmail.com",
      contact: "7465746577",
      designation: "CEO",
      addedby: "SCIP A",
    },
    {
      id: 4,
      name: "Shubham Sharma",
      emailid: "xxshubham74@gmail.com",
      contact: "7974733150",
      designation: "Tester",
      addedby: "SCIP A",
    },
    {
      id: 5,
      name: "Priyank Gupta",
      emailid: "jhoncarter00001@gmail.com",
      contact: "1223122312",
      designation: "CEO",
      addedby: "SCIP A",
    },
    {
      id: 6,
      name: "Mahi Gill",
      emailid: "mahi@yopmail.com",
      contact: "9988774455",
      designation: "PM",
      addedby: "SCIP A",
    },
    {
      id: 7,
      name: "Sunil chavan",
      emailid: "sphinxsunil5@gmail.com",
      contact: "9561619890",
      designation: "CEO",
      addedby: "Designer",
    },
    {
      id: 8,
      name: "Test Account",
      emailid: "tac@yopmail.com",
      contact: "1223232323",
      designation: "CEO",
      addedby: "SCIP A",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Manage User"
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
                          placeholder="Fname/Lname/Email"
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <div className="col-sm-auto ms-auto">
                      <div
                        className="d-flex hstack gap-2 flex-wrap"
                        id="AddUser"
                        onClick={(e) => toggleModel("AddUser")}
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
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email ID</th>
                          <th scope="col">Contact</th>
                          <th scope="col">Designation</th>
                          <th scope="col">Added By</th>
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
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.emailid}</td>
                                <td>{item.contact}</td>
                                <td>{item.designation}</td>
                                <td>{item.addedby}</td>
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
                                            className="px-2"
                                            id="EditUser"
                                            onClick={(e) =>
                                              toggleModel("EditUser")
                                            }
                                          >
                                            <i className="ri-edit-line align-bottom me-2"></i>
                                            Edit
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem
                                            className="px-2"
                                            onClick={(e) =>
                                              setStatusData({
                                                alert: true,
                                                id: 1,
                                                status: 1,
                                              })
                                            }
                                          >
                                            <i className=" ri-delete-bin-line align-bottom me-1"></i>
                                            Activate User
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem
                                            className="px-2"
                                            onClick={navigateIndex}
                                          >
                                            <i className="ri-task-line align-bottom me-1"></i>
                                            Add Module Column Access
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem
                                            className="px-2"
                                            onClick={(e) =>
                                              setStatusData({
                                                alert: true,
                                                id: 1,
                                                status: 1,
                                              })
                                            }
                                          >
                                            <i className=" ri-arrow-left-right-line align-bottom me-1"></i>
                                            Transfer data to primary user
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

      <AddUser
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "AddUser" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditUser
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditUser" ? true : false}
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
        Are you sure you want to do this action? If you make selected user to
        primary user, selected user data will be transfer to primary user and
        selected user account will be deactivate.
      </SweetAlert>
    </React.Fragment>
  );
};

export default ManageUser;
