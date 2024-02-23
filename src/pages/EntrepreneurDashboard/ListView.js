import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import AddStage from "./Modals/AddStage";
import AddTask from "./Modals/AddTask";
import EditTask from "./Modals/EditTask";
import CompleteTask from "./Modals/CompleteTask";
import SweetAlert from "react-bootstrap-sweetalert";
import Action from "./Modals/Action";

// Images

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";

const ListView = () => {
  document.title = "SCIP | List View";

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
      milestone: "Post Investment monitoring",
      title: "Track CS",
      assigned: "DI",
      createdt: "31/07/2023 02:53 PM",
      duedate: "31/07/2023",
      status: "Pending",
    },
    {
      id: 2,
      milestone: "Terms of Investment",
      title: "Term Sheet",
      assigned: "SM",
      createdt: "15/05/2023 09:19 AM",
      duedate: "16/05/2023",
      status: "Pending",
    },
  ];

  return (
    <React.Fragment>


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
                      placeholder="Search"
                    />
                    <i className="ri-search-line search-icon"></i>
                  </div>
                </Col>
                <div className="col-sm-auto ms-auto">
                  <div className="d-flex hstack gap-2 flex-wrap">
                    <button
                      type="button"
                      className="btn btn-brand-theme"
                      id="AddStage"
                      onClick={(e) => toggleModel("AddStage")}
                    >
                      <i className="ri-add-fill align-bottom"></i> Add Stage
                        </button>
                    <button
                      type="button"
                      className="btn btn-brand-theme"
                      id="AddTask"
                      onClick={(e) => toggleModel("AddTask")}
                    >
                      <i className="ri-add-fill align-bottom"></i> Add Task
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
                            <Link to="/entrepreneur_dashboard/">
                              <i className="ri-sd-card-line align-bottom me-1"></i>
                              Card View
                                </Link>
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem>
                            <Link to="/entrepreneur_dashboard/list-view">
                              <i className="ri-file-list-line align-bottom me-1"></i>
                              List View
                                </Link>
                          </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
              </Row>

              <div className="table-responsive table-card mt-3 scroll-none">
                <table className="table align-middle table-nowrap table-striped-columns mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Milestone</th>
                      <th scope="col">Title</th>
                      <th scope="col">Assigned</th>
                      <th scope="col">Created Date</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Status</th>
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
                            <td>{item.milestone}</td>
                            <td>{item.title}</td>
                            <td>
                              <div class="col-sm-auto">
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="d-inline-block"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Stine Nielsen"
                                    >
                                      <img
                                        src={avatar1}
                                        alt=""
                                        className="rounded-circle avatar-xxs"
                                      />
                                    </a>
                                  </div>
                                  <div class="avatar-group-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="d-inline-block"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Jansh Brown"
                                    >
                                      <img
                                        src={avatar2}
                                        alt=""
                                        className="rounded-circle avatar-xxs"
                                      />
                                    </a>
                                  </div>
                                  <div class="avatar-group-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="d-inline-block"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Dan Gibson"
                                    >
                                      <img
                                        src={avatar3}
                                        alt=""
                                        className="rounded-circle avatar-xxs"
                                      />
                                    </a>
                                  </div>
                                  <div class="avatar-group-item">
                                    <a href="javascript: void(0);">
                                      <div class="avatar-xxs">
                                        <span class="avatar-title rounded-circle bg-info text-white">
                                          5
                                            </span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>{item.createdt}</td>
                            <td>{item.duedate}</td>
                            <td>
                              <span className="badge badge-soft-success fs-12">
                                {item.status}
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
                                      <DropdownItem className="px-2" onClick={(e) =>
                                        setDealData({ alert: true, id: 1, status: 0 })
                                      }>
                                        <i className="ri-delete-bin-line align-bottom me-1"></i>
                                        Archive Task
                                          </DropdownItem>
                                    </li>
                                    <li>
                                      <DropdownItem className="px-2" id="CompleteTask"
                                        onClick={(e) => toggleModel("CompleteTask")}>
                                        <i className="ri-check-line align-bottom me-1"></i>
                                        Complete Task
                                          </DropdownItem>
                                    </li>
                                    <li>
                                      <DropdownItem className="px-2" id="EditTask"
                                        onClick={(e) => toggleModel("EditTask")}>
                                        <i className="ri-pencil-line align-bottom me-1"></i>
                                        Edit Task
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


      <AddStage
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "AddStage" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <AddTask
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "AddTask" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditTask
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditTask" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <CompleteTask
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "CompleteTask" ? true : false}
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

export default ListView;
