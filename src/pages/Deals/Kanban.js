import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import SwiperCore, { Autoplay } from "swiper";
import SimpleBar from "simplebar-react";
import { Controller, useForm } from "react-hook-form";

//Images
import avatar1 from "./../../assets/images/users/avatar-1.jpg";

import KanbanSlider from "./Modals/KanbanSlider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";

import AddEditStageModal from "./Modals/AddEditStageModal";
import AddTaskModal from "./Modals/AddTaskModal";
import EditTaskModal from "./Modals/EditTaskModal";
import CompleteTaskModal from "./Modals/CompleteTaskModal";

const Kanban = () => {
  SwiperCore.use([Autoplay]);

  const [isAllRubric, setIsAllRubric] = useState(false);
  const [ArchiveTask, setArchiveTask] = useState({
    alert: false,
    id: "",
    status: "",
    ind: "",
    tabName: "",
  });

  const toggleAllRubric = () => {
    setIsAllRubric(!isAllRubric);
  };

  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");
  const toggleModel = (name) => {
    setModelName(name);
  };

  const [activityTab, setActivityTab] = useState("1");
  const toggleActivityTab = (tab) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  const submit = () => {
    // console.log(setArchiveTask)
  };

  const data = [
    {
      id: 1,
      Milestone: "Post Investment monitoring",
      Title: "Track CS",
      AssignedTo: "DI",
      CreatedDate: "31/07/2023 02:53 PM",
      DueDate: "31/07/2023",
      Status: "Pending",
    },
    {
      id: 1,
      Milestone: "Terms of Investment",
      Title: "Term Sheet",
      AssignedTo: "SM",
      CreatedDate: "15/05/2023 09:19 AM",
      DueDate: "16/05/2023",
      Status: "Completed",
    },
  ];

  const data1 = [
    {
      id: 1,
      Task: "Brand Identity",
      Milestone: "Gotham City Parks brand",
      StartDate: "31/07/2023 02:53 PM",
      EndDate: "31/07/2023 02:53 PM",
      CriticalPath: "Flapper brand identity",
      Progress: "10%",
      Matric: "10",
    },
    {
      id: 2,
      Task: "Brand Identity",
      Milestone: "Gotham City Parks brand",
      StartDate: "31/07/2023 02:53 PM",
      EndDate: "31/07/2023 02:53 PM",
      CriticalPath: "Flapper brand identity",
      Progress: "10%",
      Matric: "10",
    },
  ];

  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Add Edit Stage Modal
  const [isShowAddEditStageModal, setIsShowAddEditStageModal] = useState(false);
  const closeaddeditstageModal = () => {
    setIsShowAddEditStageModal(false);
  };

  // Add Task Modal
  const [isShowAddTaskModal, setIsShowAddTaskModal] = useState(false);
  const closeaddetaskModal = () => {
    setIsShowAddTaskModal(false);
  };

  // Edit Task Modal
  const [isShowEditTaskModal, setIsShowEditTaskModal] = useState(false);
  const closeeditetaskModal = () => {
    setIsShowEditTaskModal(false);
  };

  // Complete Task Modal
  const [isShowCompleteTaskModal, setIsShowCompleteTaskModal] = useState(false);
  const closecompletetaskModal = () => {
    setIsShowCompleteTaskModal(false);
  };

  const onCloseModal = () => {
    reset();
    setIsShowAddEditStageModal(false);
    setIsShowAddTaskModal(false);
    setIsShowEditTaskModal(false);
    setIsShowCompleteTaskModal(false);
  };

  return (
    <React.Fragment>
      <AddEditStageModal
        show={isShowAddEditStageModal}
        onCloseClick={onCloseModal}
      />

      <AddTaskModal show={isShowAddTaskModal} onCloseClick={onCloseModal} />

      <EditTaskModal show={isShowEditTaskModal} onCloseClick={onCloseModal} />

      <CompleteTaskModal
        show={isShowCompleteTaskModal}
        onCloseClick={onCloseModal}
      />

      <SweetAlert
        custom
        show={ArchiveTask.alert}
        btnSize="md"
        showCancel
        showProfile
        showCloseButton
        confirmBtnText="Ok"
        cancelBtnText="Cancel"
        title=""
        confirmBtnBsStyle="primary"
        cancelBtnBsStyle="danger"
        onConfirm={submit}
        onCancel={(e) =>
          setArchiveTask({
            alert: false,
            id: "",
            status: "",
            ind: "",
            tabName: "",
          })
        }
      >
        Are you sure you want to do this action?
      </SweetAlert>

      <Row>
        <Col lg={12}>
          <Card className="mb-2" style={{ paddingBottom: "2px" }}>
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
                      onClick={() => {
                        setIsShowAddEditStageModal(true);
                      }}
                    >
                      <i className="ri-add-line align-bottom"></i> Add Stage
                    </button>

                    <button
                      type="button"
                      className="btn btn-brand-theme"
                      onClick={() => {
                        setIsShowAddTaskModal(true);
                      }}
                    >
                      <i className="ri-add-line align-bottom"></i> Add Task
                    </button>
                  </div>
                </div>
              </Row>
            </CardHeader>
          </Card>
        </Col>
      </Row>

      <Card className="mb-2">
        <CardBody>
          <CardHeader className="pt-2 mobile-tabs px-0">
            <div className="ml-auto">
              <div className="flex-shrink-0 ml-auto">
                <Nav
                  className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      to="#team-tab"
                      className={classnames({
                        active: activityTab === "1",
                      })}
                      onClick={() => {
                        toggleActivityTab("1");
                      }}
                    >
                      Card View
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#director-tab"
                      className={classnames({
                        active: activityTab === "2",
                      })}
                      onClick={() => {
                        toggleActivityTab("2");
                      }}
                    >
                      List View
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#director-tab"
                      className={classnames({
                        active: activityTab === "3",
                      })}
                      onClick={() => {
                        toggleActivityTab("3");
                      }}
                    >
                      Gantt
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </CardHeader>
          <Container fluid className="mt-3">
            <TabContent activeTab={activityTab} className="text-muted">
              <TabPane tabId="1">
                <div className="dashboard-data row row-cols-xxl-5 row-cols-lg-3 row-cols-1">
                  <Col className="px-1 col">
                    <Card className="mb-2">
                      <CardBody>
                        <h6 className="fs-14 mb-2 float-start">
                          <img
                            src={avatar1}
                            className="rounded-circle avatar-xxs"
                            alt=""
                          />
                          <span className="ms-2">Adam Davis</span>
                        </h6>
                        <div className="float-end">
                          <Link to="#" onClick={(e) => toggleModel("KanbanSlider")}>
                            <i className="ri-add-circle-fill fs-22 text-dark text-muted"></i>
                          </Link>
                        </div>
                        <div className="clearfix"></div>
                        <p className="text-muted mb-0">Role</p>
                        <span
                          className="badge rounded-pill border text-body fw-normal fs-11 mb-1"
                          style={{ borderColor: "#ccc !important" }}
                        >
                          Product
                        </span>
                        <p className="text-muted mb-0">Location</p>
                        <span
                          className="badge rounded-pill border text-body fw-normal fs-11"
                          style={{ borderColor: "#ccc !important" }}
                        >
                          New York
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="px-1 col">
                    <Card className="mb-2">
                      <CardBody>
                        <h6 className="fs-14 mb-2 float-start">
                          <img
                            src={avatar1}
                            className="rounded-circle avatar-xxs"
                            alt=""
                          />
                          <span className="ms-2">Felix Marlin</span>
                        </h6>
                        <div className="float-end">
                          <Link to="#">
                            <i className="ri-add-circle-fill fs-22 text-dark text-muted"></i>
                          </Link>
                        </div>
                        <div className="clearfix"></div>
                        <p className="text-muted mb-0">Role</p>
                        <span
                          className="badge rounded-pill border text-body fw-normal fs-11 mb-1"
                          style={{ borderColor: "#ccc !important" }}
                        >
                          Product
                        </span>
                        <p className="text-muted mb-0">Location</p>
                        <span
                          className="badge rounded-pill border text-body fw-normal fs-11"
                          style={{ borderColor: "#ccc !important" }}
                        >
                          New York
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="px-1 col">
                    <Card className="mb-2">
                      <CardBody>
                        <h6 className="fs-14 mb-2 float-start">
                          <img
                            src={avatar1}
                            className="rounded-circle avatar-xxs"
                            alt=""
                          />
                          <span className="ms-2">Mary Jones</span>
                        </h6>
                        <div className="float-end">
                          <Link to="#">
                            <i className="ri-add-circle-fill fs-22 text-dark text-muted"></i>
                          </Link>
                        </div>
                        <div className="clearfix"></div>
                        <p className="text-muted mb-0">Role</p>
                        <span
                          className="badge rounded-pill border text-body fw-normal fs-11 mb-1"
                          style={{ borderColor: "#ccc !important" }}
                        >
                          Product
                        </span>
                        <p className="text-muted mb-0">Location</p>
                        <span
                          className="badge rounded-pill border text-body fw-normal fs-11"
                          style={{ borderColor: "#ccc !important" }}
                        >
                          New York
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="px-1 col">
                    <Card className="mb-2">
                      <CardBody>
                        <h6 className="fs-14 mb-2 float-start">
                          <img
                            src={avatar1}
                            className="rounded-circle avatar-xxs"
                            alt=""
                          />
                          <span className="ms-2">Smith John</span>
                        </h6>
                        <div className="float-end">
                          <Link to="#">
                            <i className="ri-add-circle-fill fs-22 text-dark text-muted"></i>
                          </Link>
                        </div>
                        <div className="clearfix"></div>
                        <p className="text-muted mb-0">Role</p>
                        <span
                          className="badge rounded-pill border text-body fw-normal fs-11 mb-1"
                          style={{ borderColor: "#ccc !important" }}
                        >
                          Product
                        </span>
                        <p className="text-muted mb-0">Location</p>
                        <span
                          className="badge rounded-pill border text-body fw-normal fs-11"
                          style={{ borderColor: "#ccc !important" }}
                        >
                          New York
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="px-1 col">
                    <Card className="mb-2">
                      <CardBody>
                        <h6 className="fs-14 mb-2 float-start">
                          <img
                            src={avatar1}
                            className="rounded-circle avatar-xxs"
                            alt=""
                          />
                          <span className="ms-2">Mary Jones</span>
                        </h6>
                        <div className="float-end">
                          <Link to="#">
                            <i className="ri-add-circle-fill fs-22 text-dark text-muted"></i>
                          </Link>
                        </div>
                        <div className="clearfix"></div>
                        <p className="text-muted mb-0">Role</p>
                        <span
                          className="badge rounded-pill border text-body fw-normal fs-11 mb-1"
                          style={{ borderColor: "#ccc !important" }}
                        >
                          Product
                        </span>
                        <p className="text-muted mb-0">Location</p>
                        <span
                          className="badge rounded-pill border text-body fw-normal fs-11"
                          style={{ borderColor: "#ccc !important" }}
                        >
                          New York
                        </span>
                      </CardBody>
                    </Card>
                  </Col>
                </div>
                <div className="dashboard-data row row-cols-xxl-5 row-cols-lg-3 row-cols-1">
                  <Col className="px-1 col">
                    <Card className="mb-2">
                      <CardBody>
                        <h6>Speaker event</h6>
                        <p className="text-muted mb-0">Notes</p>
                        <p className="mb-3">
                          4 Speakers (1 resident expert, 3 external experts)
                        </p>
                        <p className="text-muted">
                          <i className="ri-money-dollar-circle-line align-bottom"></i>
                          Budget
                          <br />
                          <span>$ 5600,00.00</span>
                        </p>
                        <p className="text-muted">
                          <i className="ri-task-line align-bottom"></i> Approved
                          <br />
                          <span>
                            <i className="ri-thumb-up-fill text-success fs-16"></i>
                          </span>
                        </p>
                        <p className="text-muted mb-0">
                          <i className="ri-checkbox-circle-line align-bottom"></i>
                          Status
                          <br />
                          <span className="badge rounded-pill border border-warning text-warning">
                            Upcoming
                          </span>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="px-1 col">
                    <Card className="mb-2">
                      <CardBody>
                        <h6>Speaker event</h6>
                        <p className="text-muted mb-0">Notes</p>
                        <p className="mb-3">
                          4 Speakers (1 resident expert, 3 external experts)
                        </p>
                        <p className="text-muted">
                          <i className="ri-money-dollar-circle-line align-bottom"></i>{" "}
                          Budget
                          <br />
                          <span>$ 5600,00.00</span>
                        </p>
                        <p className="text-muted">
                          <i className="ri-task-line align-bottom"></i> Approved
                          <br />
                          <span>
                            <i className="ri-thumb-up-fill text-success fs-16"></i>
                          </span>
                        </p>
                        <p className="text-muted mb-0">
                          <i className="ri-checkbox-circle-line align-bottom"></i>{" "}
                          Status
                          <br />
                          <span className="badge rounded-pill border border-warning text-warning">
                            Upcoming
                          </span>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="px-1 col">
                    <Card className="mb-2">
                      <CardBody>
                        <h6>Speaker event</h6>
                        <p className="text-muted mb-0">Notes</p>
                        <p className="mb-3">
                          4 Speakers (1 resident expert, 3 external experts)
                        </p>
                        <p className="text-muted">
                          <i className="ri-money-dollar-circle-line align-bottom"></i>
                          Budget
                          <br />
                          <span>$ 5600,00.00</span>
                        </p>
                        <p className="text-muted">
                          <i className="ri-task-line align-bottom"></i> Approved
                          <br />
                          <span>
                            <i className="ri-thumb-up-fill text-success fs-16"></i>
                          </span>
                        </p>
                        <p className="text-muted mb-0">
                          <i className="ri-checkbox-circle-line align-bottom"></i>
                          Status
                          <br />
                          <span className="badge rounded-pill border border-warning text-warning">
                            Upcoming
                          </span>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="px-1 col">
                    <Card className="mb-2">
                      <CardBody>
                        <h6>Speaker event</h6>
                        <p className="text-muted mb-0">Notes</p>
                        <p className="mb-3">
                          4 Speakers (1 resident expert, 3 external experts)
                        </p>
                        <p className="text-muted">
                          <i className="ri-money-dollar-circle-line align-bottom"></i>{" "}
                          Budget
                          <br />
                          <span>$ 5600,00.00</span>
                        </p>
                        <p className="text-muted">
                          <i className="ri-task-line align-bottom"></i> Approved
                          <br />
                          <span>
                            <i className="ri-thumb-up-fill text-success fs-16"></i>
                          </span>
                        </p>
                        <p className="text-muted mb-0">
                          <i className="ri-checkbox-circle-line align-bottom"></i>{" "}
                          Status
                          <br />
                          <span className="badge rounded-pill border border-warning text-warning">
                            Upcoming
                          </span>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="px-1 col">
                    <Card className="mb-2">
                      <CardBody>
                        <h6>Speaker event</h6>
                        <p className="text-muted mb-0">Notes</p>
                        <p className="mb-3">
                          4 Speakers (1 resident expert, 3 external experts)
                        </p>
                        <p className="text-muted">
                          <i className="ri-money-dollar-circle-line align-bottom"></i>
                          Budget
                          <br />
                          <span>$ 5600,00.00</span>
                        </p>
                        <p className="text-muted">
                          <i className="ri-task-line align-bottom"></i> Approved
                          <br />
                          <span>
                            <i className="ri-thumb-up-fill text-success fs-16"></i>
                          </span>
                        </p>
                        <p className="text-muted mb-0">
                          <i className="ri-checkbox-circle-line align-bottom"></i>
                          Status
                          <br />
                          <span className="badge rounded-pill border border-warning text-warning">
                            Upcoming
                          </span>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="table-responsive table-card mt-3 scroll-none">
                  <table className="table align-middle table-nowrap table-striped-columns mb-0">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Milestone</th>
                        <th scope="col">Title</th>
                        <th scope="col">Assigned</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.length &&
                        data.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.Milestone}</td>
                              <td>{item.Title} </td>
                              <td>
                                <span
                                  style={{
                                    background: "#57b847",
                                    borderRadius: "100px",
                                    color: "#FFF",
                                    padding: "5px",
                                    width: "30px",
                                    height: "30px",
                                    display: "block",
                                  }}
                                >
                                  {item.AssignedTo}
                                </span>
                              </td>
                              <td>{item.CreatedDate}</td>
                              <td>{item.DueDate}</td>
                              <td>
                                <span
                                  className={
                                    item.Status === "Pending"
                                      ? "badge badge-soft-warning fs-12"
                                      : "badge badge-soft-success fs-12"
                                  }
                                >
                                  {item.Status}
                                </span>
                              </td>

                              <td className="social-icons">
                                <ul className="list-inline hstack gap-2 mb-0">
                                  <li className="list-inline-item">
                                    <UncontrolledDropdown>
                                      <DropdownToggle
                                        href="#"
                                        className="btn btn-soft-secondary btn-sm dropdown"
                                        tag="button"
                                      >
                                        <i className="ri-more-fill align-middle"></i>
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem
                                          onClick={(e) =>
                                            setArchiveTask({
                                              alert: true,
                                              id: 1,
                                              status: 0,
                                              tabName: "campaign",
                                            })
                                          }
                                        >
                                          <i className="ri-delete-bin-line fs-20 align-middle me-1"></i>
                                          Archive Task
                                        </DropdownItem>

                                        <DropdownItem
                                          onClick={() => {
                                            setIsShowCompleteTaskModal(true);
                                          }}
                                        >
                                          <i className="ri-check-line fs-20 align-middle me-1"></i>
                                          Complete Task
                                        </DropdownItem>

                                        <DropdownItem
                                          onClick={() => {
                                            setIsShowEditTaskModal(true);
                                          }}
                                        >
                                          <i className="ri-edit-box-line fs-20 align-middle me-1"></i>
                                          Edit Task
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </UncontrolledDropdown>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                
              </TabPane>
              <TabPane tabId="3">
                <div className="table-responsive table-card mt-3 scroll-none">
                  <table className="table align-middle table-nowrap table-striped-columns mb-0">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Task</th>
                        <th scope="col">Milestone</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Critical Path</th>
                        <th scope="col">% Progress</th>
                        <th scope="col">Matric 1 / Matric 2</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Brand Identity</td>
                        <td>Gotham City Parks brand</td>
                        <td>31/07/2023 02:53 PM</td>
                        <td>31/07/2023 02:53 PM</td>
                        <td>Flapper brand identity</td>
                        <td>10%</td>
                        <td>10</td>
                        <td className="social-icons">
                          <ul className="list-inline hstack gap-2 mb-0">
                            <li className="list-inline-item">
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  href="#"
                                  className="btn btn-soft-secondary btn-sm dropdown"
                                  tag="button"
                                >
                                  <i className="ri-more-fill align-middle"></i>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem>
                                    <i className="ri-check-line fs-20 align-middle me-1"></i>
                                    Complete Task
                                  </DropdownItem>

                                  <DropdownItem>
                                    <i className="ri-edit-box-line fs-20 align-middle me-1"></i>
                                    Edit Task
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Brand Identity</td>
                        <td>Gotham City Parks brand</td>
                        <td>31/07/2023 02:53 PM</td>
                        <td>31/07/2023 02:53 PM</td>
                        <td>Flapper brand identity</td>
                        <td>10%</td>
                        <td>10</td>
                        <td className="social-icons">
                          <ul className="list-inline hstack gap-2 mb-0">
                            <li className="list-inline-item">
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  href="#"
                                  className="btn btn-soft-secondary btn-sm dropdown"
                                  tag="button"
                                >
                                  <i className="ri-more-fill align-middle"></i>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem>
                                    <i className="ri-check-line fs-20 align-middle me-1"></i>
                                    Complete Task
                                  </DropdownItem>

                                  <DropdownItem>
                                    <i className="ri-edit-box-line fs-20 align-middle me-1"></i>
                                    Edit Task
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPane>
            </TabContent>
          </Container>
        </CardBody>
      </Card>

      <KanbanSlider
      modelName={modelName}
      toggleModel={toggleModel}
      show={modelName === "KanbanSlider" ? true : false}
      onCloseClick={() => setModelName("")}
    />

    </React.Fragment>
  );
};

export default Kanban;
