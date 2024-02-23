import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import SimpleBar from "simplebar-react";
import AddStage from "./Modals/AddStage";
import AddTask from "./Modals/AddTask";

const EntrepreneurDashboard = () => {
  document.title = "SCIP | Entrepreneur Dashboard";

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

  //Dropdown
  const [dropdownOpenOne, setDropdownOpenOne] = useState(false);

  const toggledropDownOne = () => {
    setDropdownOpenOne(!dropdownOpenOne);
  };

  const [dropdownOpenTwo, setDropdownOpenTwo] = useState(false);
  const toggledropDownTwo = () => {
    setDropdownOpenTwo(!dropdownOpenTwo);
  };

  const [dropdownOpenThree, setDropdownOpenThree] = useState(false);
  const toggledropDownThree = () => {
    setDropdownOpenThree(!dropdownOpenThree);
  };

  const [dropdownOpenFour, setDropdownOpenFour] = useState(false);
  const toggledropDownFour = () => {
    setDropdownOpenFour(!dropdownOpenFour);
  };

  const [dropdownOpenFive, setDropdownOpenFive] = useState(false);
  const toggledropDownFive = () => {
    setDropdownOpenFive(!dropdownOpenFive);
  };

  const submit = () => {
    // console.log(profileData)
  };

  return (
    <React.Fragment>


      <Row>
        <Col lg={12}>
          <Card id="leadsList" className="mb-2">
            <CardBody className="border-0">
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
                            <Link to="/entrepreneur_dashboard/listview">
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
            </CardBody>
          </Card>
        </Col>
      </Row>
      <SimpleBar
        autoHide={false}
        style={{ maxHeight: "660px", overflowY: "hidden" }}
      >
        <div className="dashboard-data d-flex w-100 gap-3">
          <div className="col-11 col-lg">
            <Card className="mb-3 static-toggle">
              <Link to="#" className="card-body bg-danger-subtle">
                <h5 className="card-title text-uppercase fw-semibold mb-1 fs-14">
                  Screening
                  </h5>
                <Dropdown isOpen={dropdownOpenOne} toggle={toggledropDownOne}>
                  <DropdownToggle
                    type="button"
                    className="fs-22 btn-bg-none"
                    style={{ background: "none" }}
                  >
                    <i className="ri-arrow-down-s-line"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        Sector Expert call
                          <span className="badge bg-info-subtle text-info text-uppercase float-end">
                          3
                          </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        Initial Presentation
                          <span className="badge bg-info-subtle text-info text-uppercase float-end">
                          0
                          </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        <span class="badge bg-success-subtle text-success text-uppercase">
                          View All
                          </span>
                      </Link>
                    </li>
                  </DropdownMenu>
                </Dropdown>
                <p className="text-muted mb-0">
                  <span className="fw-medium">0 Task</span>
                </p>
              </Link>
            </Card>
            <Card>
              <SimpleBar
                autoHide={false}
                style={{ maxHeight: "600px", overflowX: "hidden" }}
              >
                <CardBody>
                  <Link to="#">
                    <h6 class="fs-14 mb-1">Term Sheet</h6>
                  </Link>
                  <div className="btn-dots">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="button-bg-none"
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
                            <i className="ri-delete-bin-line align-bottom me-1"></i>
                            Archive Task
                            </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem className="px-2">
                            <i className="ri-check-line align-bottom me-1"></i>
                            Complete Task
                            </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem className="px-2">
                            <i className="ri-pencil-line align-bottom me-1"></i>
                            Edit Task
                            </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <p class="text-muted mb-0">High</p>
                  <small class="text-info">Smriti Misra</small>
                  <Row>
                    <Col md={6} sm={6}>
                      <span>
                        <small class="text-muted">31/08/2023</small>
                      </span>
                    </Col>
                    <Col md={6} sm={6} className="text-end">
                      <span class="badge rounded-pill border border-danger text-danger">
                        Over due 128 days
                        </span>
                    </Col>
                  </Row>
                  {/* <hr className="my-3" /> */}
                </CardBody>
              </SimpleBar>
            </Card>
          </div>
          <div className="col-11 col-lg">
            <Card className="mb-3 static-toggle">
              <Link to="#" className="card-body bg-success-subtle">
                <h5 className="card-title text-uppercase fw-semibold mb-1 fs-14">
                  Presentation To Initial Commitments
                  </h5>
                <Dropdown isOpen={dropdownOpenTwo} toggle={toggledropDownTwo}>
                  <DropdownToggle
                    type="button"
                    className="fs-22 btn-bg-none"
                    style={{ background: "none" }}
                  >
                    <i className="ri-arrow-down-s-line"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        Presentation to Angels
                          <span className="badge bg-info-subtle text-info text-uppercase float-end">
                          3
                          </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        Initial commitment by Angels
                          <span className="badge bg-info-subtle text-info text-uppercase float-end">
                          0
                          </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        <span class="badge bg-success-subtle text-success text-uppercase">
                          View All
                          </span>
                      </Link>
                    </li>
                  </DropdownMenu>
                </Dropdown>
                <p className="text-muted mb-0">
                  <span className="fw-medium">1 Task</span>
                </p>
              </Link>
            </Card>
            <Card>
              <SimpleBar
                autoHide={false}
                style={{ maxHeight: "600px", overflowX: "hidden" }}
              >
                <CardBody>
                  <Link to="#">
                    <h6 class="fs-14 mb-1">Term Sheet</h6>
                  </Link>
                  <div className="btn-dots">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="button-bg-none"
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
                            <i className="ri-delete-bin-line align-bottom me-1"></i>
                            Archive Task
                            </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem className="px-2">
                            <i className="ri-check-line align-bottom me-1"></i>
                            Complete Task
                            </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem className="px-2">
                            <i className="ri-pencil-line align-bottom me-1"></i>
                            Edit Task
                            </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <p class="text-muted mb-0">High</p>
                  <small class="text-info">Smriti Misra</small>
                  <Row>
                    <Col md={6} sm={6}>
                      <span>
                        <small class="text-muted">31/08/2023</small>
                      </span>
                    </Col>
                    <Col md={6} sm={6} className="text-end">
                      <span class="badge rounded-pill border border-success text-success">
                        Due in 0 Days
                        </span>
                    </Col>
                  </Row>
                  {/* <hr className="my-3" /> */}
                </CardBody>
              </SimpleBar>
            </Card>
          </div>
          <div className="col-11 col-lg">
            <Card className="mb-3 static-toggle">
              <Link to="#" className="card-body bg-warning-subtle">
                <h5 className="card-title text-uppercase fw-semibold mb-1 fs-14">
                  Terms Of Investment
                  </h5>
                <Dropdown
                  isOpen={dropdownOpenThree}
                  toggle={toggledropDownThree}
                >
                  <DropdownToggle
                    type="button"
                    className="fs-22 btn-bg-none"
                    style={{ background: "none" }}
                  >
                    <i className="ri-arrow-down-s-line"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        Term Sheet
                          <span className="badge bg-info-subtle text-info text-uppercase float-end">
                          3
                          </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        DD
                          <span className="badge bg-info-subtle text-info text-uppercase float-end">
                          0
                          </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        SHA
                          <span className="badge bg-info-subtle text-info text-uppercase float-end">
                          0
                          </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        Call for Money
                          <span className="badge bg-info-subtle text-info text-uppercase float-end">
                          0
                          </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        <span class="badge bg-success-subtle text-success text-uppercase">
                          View All
                          </span>
                      </Link>
                    </li>
                  </DropdownMenu>
                </Dropdown>
                <p className="text-muted mb-0">
                  <span className="fw-medium">2 Task</span>
                </p>
              </Link>
            </Card>
            <Card>
              <SimpleBar
                autoHide={false}
                style={{ maxHeight: "600px", overflowX: "hidden" }}
              >
                <CardBody>
                  <Link to="#">
                    <h6 className="fs-14 mb-1">Track CS</h6>
                  </Link>
                  <div className="btn-dots">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="button-bg-none"
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
                            <i className="ri-delete-bin-line align-bottom me-1"></i>
                            Archive Task
                            </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem className="px-2">
                            <i className="ri-check-line align-bottom me-1"></i>
                            Complete Task
                            </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem className="px-2">
                            <i className="ri-pencil-line align-bottom me-1"></i>
                            Edit Task
                            </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <p className="text-muted mb-0">Medium</p>
                  <small className="text-info">Smriti Misra</small>
                  <Row>
                    <Col md={6} sm={6}>
                      <span>
                        <small className="text-muted">31/08/2023</small>
                      </span>
                    </Col>
                    <Col md={6} sm={6} className="text-end">
                      <span className="badge rounded-pill border border-success text-success">
                        Due in 0 Days
                        </span>
                    </Col>
                  </Row>
                  {/* <hr className="my-3" /> */}
                </CardBody>
              </SimpleBar>
            </Card>
          </div>
          <div className="col-11 col-lg">
            <Card className="mb-3 static-toggle">
              <Link to="#" className="card-body bg-info-subtle">
                <h5 className="card-title text-uppercase fw-semibold mb-1 fs-14">
                  Investment
                  </h5>
                <Dropdown
                  isOpen={dropdownOpenFour}
                  toggle={toggledropDownFour}
                >
                  <DropdownToggle
                    type="button"
                    className="fs-22 btn-bg-none"
                    style={{ background: "none" }}
                  >
                    <i className="ri-arrow-down-s-line"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        Deal Closure
                          <span className="badge bg-info-subtle text-info text-uppercase float-end">
                          3
                          </span>
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        <span class="badge bg-success-subtle text-success text-uppercase">
                          View All
                          </span>
                      </Link>
                    </li>
                  </DropdownMenu>
                </Dropdown>
                <p className="text-muted mb-0">
                  <span className="fw-medium">3 Task</span>
                </p>
              </Link>
            </Card>
            <Card>
              <SimpleBar
                autoHide={false}
                style={{ maxHeight: "600px", overflowX: "hidden" }}
              >
                <CardBody>
                  <Link to="#">
                    <h6 class="fs-14 mb-1">Term Sheet</h6>
                  </Link>
                  <div className="btn-dots">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="button-bg-none"
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
                            <i className="ri-delete-bin-line align-bottom me-1"></i>
                            Archive Task
                            </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem className="px-2">
                            <i className="ri-check-line align-bottom me-1"></i>
                            Complete Task
                            </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem className="px-2">
                            <i className="ri-pencil-line align-bottom me-1"></i>
                            Edit Task
                            </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <p class="text-muted mb-0">Low</p>
                  <small class="text-info">Smriti Misra</small>
                  <Row>
                    <Col md={6} sm={6}>
                      <span>
                        <small class="text-muted">31/08/2023</small>
                      </span>
                    </Col>
                    <Col md={6} sm={6} className="text-end">
                      <span class="badge rounded-pill border border-success text-success">
                        Due in 0 Days
                        </span>
                    </Col>
                  </Row>
                  {/* <hr className="my-3" /> */}
                </CardBody>
              </SimpleBar>
            </Card>
          </div>
          <div className="col-11 col-lg">
            <Card className="mb-3 static-toggle">
              <Link to="#" className="card-body bg-secondary-subtle">
                <h5 className="card-title text-uppercase fw-semibold mb-1 fs-14">
                  Post Investment Monitoring
                  </h5>
                <Dropdown
                  isOpen={dropdownOpenFive}
                  toggle={toggledropDownFive}
                >
                  <DropdownToggle
                    type="button"
                    className="fs-22 btn-bg-none"
                    style={{ background: "none" }}
                  >
                    <i className="ri-arrow-down-s-line"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        Track CS
                          <span className="badge bg-info-subtle text-info text-uppercase float-end">
                          3
                          </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        Share Allotment
                          <span className="badge bg-info-subtle text-info text-uppercase float-end">
                          0
                          </span>
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item fs-13 px-2" to="#">
                        <span class="badge bg-success-subtle text-success text-uppercase">
                          View All
                          </span>
                      </Link>
                    </li>
                  </DropdownMenu>
                </Dropdown>
                <p className="text-muted mb-0">
                  <span className="fw-medium">4 Task</span>
                </p>
              </Link>
            </Card>
            <Card>
              <SimpleBar
                autoHide={false}
                style={{ maxHeight: "610px", overflowX: "hidden" }}
              >
                <CardBody>
                  <Link to="#">
                    <h6 class="fs-14 mb-1">Track CS</h6>
                  </Link>
                  <div className="btn-dots">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="button-bg-none"
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
                            <i className="ri-delete-bin-line align-bottom me-1"></i>
                            Archive Task
                            </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem className="px-2">
                            <i className="ri-check-line align-bottom me-1"></i>
                            Complete Task
                            </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem className="px-2">
                            <i className="ri-pencil-line align-bottom me-1"></i>
                            Edit Task
                            </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <p class="text-muted mb-0">Medium</p>
                  <small class="text-info">Smriti Misra</small>
                  <Row>
                    <Col md={6} sm={6}>
                      <span>
                        <small class="text-muted">31/08/2023</small>
                      </span>
                    </Col>
                    <Col md={6} sm={6} className="text-end">
                      <span class="badge rounded-pill border border-danger text-danger">
                        Over due 52 days
                        </span>
                    </Col>
                  </Row>
                  {/* <hr className="my-3" /> */}
                </CardBody>
              </SimpleBar>
            </Card>
          </div>
        </div>
      </SimpleBar>


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
    </React.Fragment>
  );
};

export default EntrepreneurDashboard;
