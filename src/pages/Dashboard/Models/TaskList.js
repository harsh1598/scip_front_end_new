import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

//Images
import avatar7 from "../../../assets/images/users/avatar-7.jpg";
import small3 from "../../../assets/images/small/img-3.jpg";
import small7 from "../../../assets/images/small/img-7.jpg";
import small10 from "../../../assets/images/small/img-10.jpg";
import small9 from "../../../assets/images/small/img-9.jpg";

const TaskList = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);

  const togglePopup = useCallback(() => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [isShow]);

  useEffect(() => {
    setIsShow(false);
  }, [modelName == "CreateSchedule"]);

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-md"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Task List
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="p-0 overflow-hidden">
          <Row>
            <Col lg={12}>
              <SimpleBar
                autoHide={false}
                style={{ maxHeight: "80vh", overflowX: "hidden" }}>
                <div className="search-box px-3 mt-3">
                        <Input
                          type="text"
                          className="form-control search"
                          placeholder="Search"
                        />
                        <i className="ri-search-line search-icon ps-3"></i>
                      </div>
                <div className="timeline-2 mt-3">
                  <div className="timeline-continue">
                    <Row className="timeline-right">
                      <Col xs={12}>
                        <p className="timeline-date">04/08/2023</p>
                      </Col>
                      <Col xs={12}>
                        <div className="timeline-box p-3">
                          <div className="timeline-text">
                            <div className="d-flex">
                              <img
                                src={avatar7}
                                alt=""
                                className="avatar-sm rounded"
                              />
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">Workflow Task</h6>
                                <p className="text-muted mb-0">
                                  {" "}
                                  Workflow task (1.1) Readiness for Deal review
                                  created by Smriti Misra.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row className="timeline-right">
                      <Col xs={12}>
                        <p className="timeline-date">28/04/2022</p>
                      </Col>
                      <Col xs={12}>
                        <div className="timeline-box p-3">
                          <div className="timeline-text">
                            <div className="d-flex">
                              <img
                                src={avatar7}
                                alt=""
                                className="avatar-sm rounded"
                              />
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1"> Account Status</h6>
                                <p className="text-muted mb-0">
                                  {" "}
                                  Account Activated by Smriti Misra.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="timeline-right">
                      <Col xs={12}>
                        <p className="timeline-date">04/08/2023</p>
                      </Col>
                      <Col xs={12}>
                        <div className="timeline-box p-3">
                          <div className="timeline-text">
                            <div className="d-flex">
                              <img
                                src={avatar7}
                                alt=""
                                className="avatar-sm rounded"
                              />
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">Workflow Task</h6>
                                <p className="text-muted mb-0">
                                  {" "}
                                  Workflow task (1.1) Readiness for Deal review
                                  created by Smriti Misra.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row className="timeline-right">
                      <Col xs={12}>
                        <p className="timeline-date">28/04/2022</p>
                      </Col>
                      <Col xs={12}>
                        <div className="timeline-box p-3">
                          <div className="timeline-text">
                            <div className="d-flex">
                              <img
                                src={avatar7}
                                alt=""
                                className="avatar-sm rounded"
                              />
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1"> Account Status</h6>
                                <p className="text-muted mb-0">
                                  {" "}
                                  Account Activated by Smriti Misra.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="timeline-right">
                      <Col xs={12}>
                        <p className="timeline-date">04/08/2023</p>
                      </Col>
                      <Col xs={12}>
                        <div className="timeline-box p-3">
                          <div className="timeline-text">
                            <div className="d-flex">
                              <img
                                src={avatar7}
                                alt=""
                                className="avatar-sm rounded"
                              />
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">Workflow Task</h6>
                                <p className="text-muted mb-0">
                                  {" "}
                                  Workflow task (1.1) Readiness for Deal review
                                  created by Smriti Misra.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row className="timeline-right">
                      <Col xs={12}>
                        <p className="timeline-date">28/04/2022</p>
                      </Col>
                      <Col xs={12}>
                        <div className="timeline-box p-3">
                          <div className="timeline-text">
                            <div className="d-flex">
                              <img
                                src={avatar7}
                                alt=""
                                className="avatar-sm rounded"
                              />
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1"> Account Status</h6>
                                <p className="text-muted mb-0">
                                  {" "}
                                  Account Activated by Smriti Misra.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </SimpleBar>
            </Col>
          </Row>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Submit
            </button>
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default TaskList;
