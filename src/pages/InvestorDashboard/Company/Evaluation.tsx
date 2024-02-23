import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import SimpleBar from "simplebar-react";

// Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";

import {
  CardHeader,
  Card,
  Col,
  CardBody,
  Container,
  Row,
  Input,
} from "reactstrap";

import EvaluationSlider from "../Company/Modals/EvaluationSlider";

const Evaluation = () => {
  document.title = "SCIP | Evaluation";

  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");
  const toggleModel = (name: any) => {
    setModelName(name);
  };

  const [selectedFiles, setselectedFiles] = useState<any[]>([]);
  const [files, setFiles] = useState<any[]>([]);

  return (
    <>
      <React.Fragment>
        <div className="mb-none profile-wrapper">
          <Row>
            <Col>
              <h3 className="text-white mb-4">Under Evaluation</h3>
            </Col>
          </Row>
        </div>
        <Container fluid>
          <Row>
            <Card className="mb-2">
              <CardHeader className="border-0 px-2">
                <Row className="g-0 align-items-center mb-0">
                  <Col sm={4}>
                    <div className="search-box">
                      <Input
                        type="text"
                        className="form-control search"
                        placeholder="Search"
                      />
                      <i className="ri-search-line search-icon"></i>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
            </Card>
          </Row>

          {/* <SimpleBar
            autoHide={false}
            style={{ maxHeight: "660px", overflowY: "hidden" }}
            > */}
          <div className="dashboard-data row row-cols-xxl-5 row-cols-lg-3 row-cols-1">
            <Col className="px-1 col">
              <Card className="mb-2">
                <CardBody onClick={(e) => toggleModel("EvaluationSlider")}>
                  <h6 className="fs-14 mb-2 float-start">
                    <img
                      src={avatar1}
                      className="rounded-circle avatar-xxs"
                      alt=""
                    />
                    <span className="ms-2">Adam Davis</span>
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
                <CardBody onClick={(e) => toggleModel("EvaluationSlider")}>
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
                <CardBody onClick={(e) => toggleModel("EvaluationSlider")}>
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
                <CardBody onClick={(e) => toggleModel("EvaluationSlider")}>
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
                <CardBody onClick={(e) => toggleModel("EvaluationSlider")}>
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
              <Card>
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
              <Card>
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
              <Card>
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
              <Card>
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
              <Card>
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
          {/* </SimpleBar> */}
        </Container>

        <EvaluationSlider
          modelName={modelName}
          toggleModel={toggleModel}
          show={modelName === "EvaluationSlider" ? true : false}
          onCloseClick={() => setModelName("")}
        />
       
       </React.Fragment>
    </>
  );
};

export default Evaluation;
