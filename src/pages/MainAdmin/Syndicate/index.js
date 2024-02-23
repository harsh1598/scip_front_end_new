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
import SyndicateFilters from "./Models/SyndicateFilters";
import Status from "./Models/Status";
import EditInfo from "./Models/EditInfo";
import SweetAlert from "react-bootstrap-sweetalert";

const Syndicate = () => {
  const toggleModel = (name) => {
    setModelName(name);
  };

  const [modelName, setModelName] = useState("");
  const [profileData, setProfileData] = useState({
    alert: false,
    id: "",
    status: "",
  });

  const navigate = useNavigate();
  const navigateMessage = (data) => {
    navigate("/message");
  };

  const navigateDocument = (data) => {
    navigate("/admin/documents/");
  };

  const navigateManageUser = (data) => {
    navigate("/admin/syndicate/manageuser");
  };

  const navigateManageDealLabel = (data) => {
    navigate("/admin/syndicate/managedeallabel");
  };

  const navigatePayment = (data) => {
    navigate("/admin/syndicate/payment");
  };

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
      id: 1,
      dateregistration: "08/02/2020",
      syndicate: "SCIP",
      usename: "Smriti Misra",
      emailid: "smisra24@gmail.com",
      contact: "8587988504",
      address:
        "Module No.6, Sixth Floor , Block A - Phase II, IIT Madras Research Park, Kanagam Road , Taramani, Chennai, Tamil Nadu 600113 Davangere",
      lastoperated: "08/09/2023",
      personalnvestments: "View",
      sourcecontact: "--",
    },
    {
      id: 2,
      dateregistration: "08/02/2020",
      syndicate: "SCIP",
      usename: "Smriti Misra",
      emailid: "smisra24@gmail.com",
      contact: "8587988504",
      address:
        "Module No.6, Sixth Floor , Block A - Phase II, IIT Madras Research Park, Kanagam Road , Taramani, Chennai, Tamil Nadu 600113 Davangere",
      lastoperated: "08/09/2023",
      personalnvestments: "View",
      sourcecontact: "--",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Syndicate" pageTitle="Syndicate" />
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
                          placeholder="User/Syndicate/Email/Contact/Address"
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <div className="col-sm-auto ms-auto">
                      <div className="d-flex hstack gap-2 flex-wrap">
                        <button type="button" className="btn btn-soft-info">
                          <i class="ri-file-excel-line  align-bottom me-1"></i>{" "}
                          Export
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-info"
                          id="SyndicateFilters"
                          onClick={(e) => toggleModel("SyndicateFilters")}
                        >
                          <i className="ri-filter-3-line align-bottom me-1"></i>
                          Filters
                        </button>
                      </div>
                    </div>
                  </Row>

                  <div className="table-responsive table-card mt-3" style={{ overflowX: "inherit", }}>
                    <table className="table align-middle table-nowrap table-striped-columns mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">Sr. No</th>
                          <th scope="col">Date of Registration</th>
                          <th scope="col">Syndicate</th>
                          <th scope="col">User Name</th>
                          <th scope="col">Email Id</th>
                          <th scope="col">Contact</th>
                          <th scope="col">Address</th>
                          <th scope="col">Last Operated </th>
                          <th scope="col">Personal Investments</th>
                          <th scope="col">Source Of Contact</th>
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
                                <td>{item.dateregistration}</td>
                                <td>
                                  <Link to="#">{item.syndicate}</Link>
                                </td>
                                <td>
                                  <Link to="#">{item.usename}</Link>
                                </td>
                                <td>{item.emailid}</td>
                                <td>{item.contact}</td>
                                <td
                                  style={{
                                    wordBreak: "break-word",
                                    whiteSpace: "break-spaces",
                                  }}
                                >
                                  {item.address}
                                </td>
                                <td>{item.lastoperated}</td>
                                <td>
                                  <span class="badge rounded-pill bg-info fw-normal">
                                    {item.personalnvestments}
                                  </span>
                                </td>
                                <td>{item.sourcecontact}</td>
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
                                          <DropdownItem className="px-2">
                                            <i className="ri-user-3-line align-bottom me-2"></i>
                                            View Admin
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem
                                            className="px-2"
                                            id="Status"
                                            onClick={(e) =>
                                              toggleModel("Status")
                                            }
                                          >
                                            <i className="ri-checkbox-circle-line align-bottom me-1"></i>
                                            Status
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem
                                            className="px-2"
                                            onClick={navigateMessage}
                                          >
                                            <i className="ri-message-2-line align-bottom me-1"></i>
                                            Message
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem
                                            className="px-2"
                                            id="EditInfo"
                                            onClick={(e) =>
                                              toggleModel("EditInfo")
                                            }
                                          >
                                            <i className="ri-pencil-line align-bottom me-1"></i>
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
                                            <i className="ri-checkbox-circle-line align-bottom me-1"></i>
                                            Active
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem className="px-2" onClick={navigateDocument}>
                                            <i className="ri-file-text-line align-bottom me-1"></i>
                                            Document
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem className="px-2" onClick={navigatePayment}>
                                            <i className=" ri-secure-payment-line align-bottom me-1"></i>
                                            Payment
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem className="px-2" onClick={navigateManageUser}>
                                            <i className="ri-group-line align-bottom me-1"></i>
                                            Users
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem className="px-2" onClick={navigateManageDealLabel}>
                                            <i className=" ri-price-tag-3-line align-bottom me-1"></i>
                                            Deal Label
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

      <SyndicateFilters
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "SyndicateFilters" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <Status
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Status" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditInfo
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditInfo" ? true : false}
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

export default Syndicate;
