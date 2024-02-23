import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardHeader,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import SimpleBar from "simplebar-react";
import Share from "./Models/Share";
import EditWorkflows from "./Models/EditWorkflows";
import AddWorkflows from "./Models/AddWorkflows";
import TaskList from "./Models/TaskList";
import SweetAlert from "react-bootstrap-sweetalert";
import Action from "./Models/Action";

// Images

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";

const DashboardList = () => {
  document.title = "SCIP | Dashboard List";

  const [rightColumn, setRightColumn] = useState(false);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  const [modelName, setModelName] = useState("");
  const [dealData, setDealData] = useState({
    alert: false,
    id: "",
    status: "",
  });

  const toggleModel = (name) => {
    setModelName(name);
  };

  const submit = () => {
    // console.log(profileData)
  };

  const data = [
    {
      id: 1,
      name: "(1) Screening to deep dive",
      Investmentname: "(1.1) Readiness for Deal review",
      amount: "andrewbat - moongoose Angel 1",
      addedby: "AK",
      date: "01/09/2023",
    },
    {
      id: 2,
      name: "Terms of investment",
      Investmentname: "Due diligence",
      amount: "Aman enterprise - Aman Series A 1",
      addedby: "CK",
      date: "31/08/2023",
    },
    {
      id: 3,
      name: "Terms of investment",
      Investmentname: "Call for money",
      amount: "Remonds CR - Remonds CR Seed 1",
      addedby: "SM",
      date: "31/08/2023",
    },
    {
      id: 4,
      name: "Terms of investment",
      Investmentname: "Term Sheet",
      amount: "Aman enterprise - Aman Series A 1",
      addedby: "AK",
      date: "31/08/2023",
    },
    {
      id: 5,
      name: "Terms of investment",
      Investmentname: "Call for money",
      amount: "Remonds CR - Remonds CR Seed 1",
      addedby: "SM",
      date: "31/08/2023",
    },
    {
      id: 6,
      name: "Terms of investment",
      Investmentname: "Term Sheet",
      amount: "Aman enterprise - Aman Series A 1",
      addedby: "AK",
      date: "31/08/2023",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Dashboard List" pageTitle="Dashboards" />

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
                          placeholder="Company / Brand"
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <div className="col-sm-auto ms-auto">
                      <div className="d-flex hstack gap-2 flex-wrap w-100-ipad">
                        <button type="button" className="btn btn-brand-theme">
                          My Work
                        </button>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            to="#"
                            className="btn btn-brand-theme dropdown"
                            tag="button"
                          >
                            Deal Status
                            <i className="ri-arrow-down-s-fill align-bottom"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-end">
                            <Link className="dropdown-item" to="#">
                              All
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Abhaya Kumar Shankar
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Aditya Reddy
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Ash King
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Balrama Nair
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Chetan Kothawade
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Chetan K
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Shobanaa Anand
                            </Link>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <button type="button" className="btn btn-soft-info">
                          <i className="ri-filter-3-line align-bottom me-1"></i>
                          Filters
                        </button>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn btn-soft-info"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="ri-grid-fill align-bottom"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                          <li>
                          <DropdownItem>
                           <Link to="#"><i className="ri-add-fill align-bottom me-1"></i>
                            Grid</Link>
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem> 
                          <a to="dashboard/dashboard-list">
                            <i className="ri-pencil-line align-bottom me-1"></i>List
                          </a>
                          </DropdownItem>
                        </li>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <button
                          type="button"
                          className="btn btn-soft-info"
                          id="AddWorkflows"
                          onClick={(e) => toggleModel("AddWorkflows")}
                        >
                          <i className="ri-add-box-line align-bottom"></i>
                        </button>
                      </div>
                    </div>
                  </Row>

                  <div className="table-responsive table-card  scroll-none mt-3">
                    <table className="table align-middle table-nowrap table-striped-columns mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Milestone</th>
                          <th scope="col">Task</th>
                          <th scope="col">Company</th>
                          <th scope="col">Assigned To</th>
                          <th scope="col">Due Date</th>
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
                                <td>
                                  <Link to="#">{item.Investmentname}</Link>
                                </td>
                                <td>{item.amount} INR</td>
                                <td>
                                <div className="col-sm-auto">
                                                    <div className="avatar-group">
                                                        <div className="avatar-group-item">
                                                            <a to="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Stine Nielsen">
                                                                <img src={avatar1} alt="" className="rounded-circle avatar-xxs" />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a to="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Jansh Brown">
                                                                <img src={avatar2} alt="" className="rounded-circle avatar-xxs" />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a to="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Dan Gibson">
                                                                <img src={avatar3} alt="" className="rounded-circle avatar-xxs" />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a to="#">
                                                                <div className="avatar-xxs">
                                                                    <span className="avatar-title rounded-circle bg-info text-white">
                                                                        5
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                 
                                </td>
                                <td>
                                  {item.date} <br />
                                  <span className="text-danger rounded-danger">
                                    Over due 4 Days
                                  </span>
                                </td>
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
                              <i className="ri-layout-grid-line align-bottom me-2"></i>
                              Grid
                            </DropdownItem>
                            <div className="inner-Submenu">
                              <Link
                                to="javascript:void(0);"
                                id="Share"
                                onClick={(e) => toggleModel("Share")}
                              >
                                <i className=" ri-share-line align-bottom me-1"></i>
                                Deal on App
                              </Link><br/>

                              <Link to="/enterpreneur/more">
                                <i className="ri-volume-down-line align-bottom me-1"></i>
                                Manage Deal
                              </Link><br/>

                              <Link to="javascript:void(0);">
                                <i className="ri-user-line align-bottom me-1"></i>
                                Entrepreneur Dash
                              </Link><br/>

                              <Link
                                to="javascript:void(0);"
                                onClick={(e) =>
                                  setDealData({ alert: true, id: 1, status: 0 })
                                }
                              >
                                <i className="ri-delete-bin-5-line align-bottom me-1"></i>
                                Delete Task
                              </Link><br/>

                              <Link
                                to="javascript:void(0);"
                                id="EditWorkflows"
                                onClick={(e) => toggleModel("EditWorkflows")}
                              >
                                <i className="ri-pencil-fill align-bottom me-1"></i>
                                Edit Task
                              </Link><br/>

                              <Link to="javascript:void(0);">
                                <i className="ri-checkbox-circle-line align-bottom me-1"></i>
                                Complete Task
                              </Link><br/>

                              <Link to="javascript:void(0);">
                                <i className="ri-spam-2-line align-bottom me-1"></i>{" "}
                                iManage
                              </Link>
                            </div>
                          </li>
                          <li>
                            <DropdownItem
                              className="px-2"
                            >
                              <Link  id="Comments"
                              onClick={(e) => toggleModel("Comments")}>
                              <i className="ri-chat-2-line align-bottom me-1"></i>
                              Comments
                              </Link>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem
                              className="px-2"
                            > 
                            <Link id="TaskList"
                            onClick={(e) => toggleModel("TaskList")}>
                              <i className="ri-feedback-line align-bottom me-1"></i>
                              Info</Link>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem
                              className="px-2"
                             >
                             <Link to="/dashboard/view-rubric/">
                              <i className="ri-grid-line align-bottom me-1"></i>
                              View Rubric
                              </Link>
                            </DropdownItem>
                          </li>
                          <li>
                          <DropdownItem  onClick={event =>  window.location.to='/dashboard/view-review/'}
                            className="px-2"
                          > <i className="ri-star-line align-bottom me-1"></i>
                            View Review
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
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Share
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Share" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <TaskList
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "TaskList" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <AddWorkflows
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "AddWorkflows" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditWorkflows
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditWorkflows" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <SweetAlert
        custom
        show={dealData.alert}
        btnSize="md"
        showProfile
        showCloseButton
        confirmBtnBsStyle="primary"
        cancelBtnBsStyle="success"
        title=""
        onConfirm={submit}
        onCancel={(e) => setDealData({ alert: false, id: "", status: "" })}
      >
        <h6> Are you sure you want to do this action? </h6>
      </SweetAlert>
      <Action
        show={modelName === "Action" ? true : false}
        onCloseClick={() => setModelName("")}
      />
    </React.Fragment>
  );
};

export default DashboardList;
