import React from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  ListGroup,
} from "reactstrap";
import { Link } from "react-router-dom";
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";

const PastCampaign = () => {
  return (
    <React.Fragment>
      <Row className="g-2">
        <Col md={12}>
          <Card className="mb-2">
            <CardBody>
              <h4 className="card-title card-title mb-0 me-2">
                Other round of investment(s)
              </h4>
            </CardBody>
          </Card>
          <div className="live-preview">
            <ListGroup>
              <Row className="g-2">
                <Col md={6}>
                  <Card className="mb-0">
                    <CardBody>
                      <Row className="align-items-center">
                        <Col sm={10} xs={10}>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src={avatar1}
                                alt=""
                                className="avatar-xs rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2">
                              Watcon Seed
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={2}
                          xs={2}
                          className="icon-demo-content text-end"
                        >
                          <Link>
                            <i className="las la-arrow-right float-end me-0"></i>
                          </Link>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-0">
                    <CardBody>
                      <Row className="align-items-center">
                        <Col sm={10} xs={10}>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src={avatar2}
                                alt=""
                                className="avatar-xs rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2">
                              Anna Smith
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={2}
                          xs={2}
                          className="icon-demo-content text-end"
                        >
                          <Link>
                            <i className="las la-arrow-right float-end me-0"></i>
                          </Link>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-0">
                    <CardBody>
                      <Row className="align-items-center">
                        <Col sm={10} xs={10}>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src={avatar1}
                                alt=""
                                className="avatar-xs rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2">
                              Watcon Seed
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={2}
                          xs={2}
                          className="icon-demo-content text-end"
                        >
                          <Link>
                            <i className="las la-arrow-right float-end me-0"></i>
                          </Link>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-0">
                    <CardBody>
                      <Row className="align-items-center">
                        <Col sm={10} xs={10}>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src={avatar2}
                                alt=""
                                className="avatar-xs rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2">
                              Anna Smith
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={2}
                          xs={2}
                          className="icon-demo-content text-end"
                        >
                          <Link>
                            <i className="las la-arrow-right float-end me-0"></i>
                          </Link>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PastCampaign;
