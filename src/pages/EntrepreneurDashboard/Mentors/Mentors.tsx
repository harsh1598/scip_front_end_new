import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import SimpleBar from "simplebar-react";
import img3 from "../../../assets/images/small/img-3.jpg";

//Images
import profileBg from "../../../assets/images/profile-bg.jpg";

import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Alert,
} from "reactstrap";

import BreadCrumb from "../../../Components/Common/BreadCrumb";

const Mentors = () => {
  const [activityTab, setActivityTab] = useState("1");

  const toggleActivityTab = (tab: any) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  return (
    <React.Fragment>
      <div className=""> {/* page-content */}
        {/* <Container fluid> */}
        {/* <BreadCrumb title="Training" pageTitle="Training" /> */}
        <div className="mb-none profile-wrapper">
          <Row className="g-0">
            <Col>
              <h3 className="text-white mb-4">Mentors</h3>
            </Col>
          </Row>
        </div>
          <Row className="g-2">
            <Col md={12}>
              <Card className="mb-1">
                {/* <SimpleBar
                  autoHide={false}
                  style={{ maxHeight: "45px", width: "900px", overflowY: "hidden" }}>*/}
                <CardHeader className="align-items-center mobile-tabs">
                <div className="flex-shrink-0 ml-auto pt-2">
                    <Nav
                      className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          to="#budget-tab"
                          className={classnames({
                            active: activityTab === "1",
                          })}
                          onClick={() => {
                            toggleActivityTab("1");
                          }}
                        >
                          All Mentors
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to="#financial-tab"
                          className={classnames({
                            active: activityTab === "2",
                          })}
                          onClick={() => {
                            toggleActivityTab("2");
                          }}
                        >
                          Operations Management
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to="#milestones-tab"
                          className={classnames({
                            active: activityTab === "3",
                          })}
                          onClick={() => {
                            toggleActivityTab("3");
                          }}
                        >
                          Digital Agencies
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to="#performance-tab"
                          className={classnames({
                            active: activityTab === "4",
                          })}
                          onClick={() => {
                            toggleActivityTab("4");
                          }}
                        >
                          B2C
                        </NavLink>
                      </NavItem>
                      <NavItem className="nav-item">
                        <NavLink
                          to="#presentation-tab"
                          className={classnames({
                            active: activityTab === "5",
                          })}
                          onClick={() => {
                            toggleActivityTab("5");
                          }}
                        >
                          B2B
                        </NavLink>
                      </NavItem>
                      <NavItem className="nav-item">
                        <NavLink
                          to="#presentation-tab"
                          className={classnames({
                            active: activityTab === "6",
                          })}
                          onClick={() => {
                            toggleActivityTab("6");
                          }}
                        >
                          Startup
                        </NavLink>
                      </NavItem>
                      <NavItem className="nav-item">
                        <NavLink
                          to="#presentation-tab"
                          className={classnames({
                            active: activityTab === "7",
                          })}
                          onClick={() => {
                            toggleActivityTab("7");
                          }}
                        >
                          Saas
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </CardHeader>
                {/* </SimpleBar> */}
                <CardBody>
                  <TabContent activeTab={activityTab} className="text-muted">
                    <TabPane tabId="1">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <SimpleBar
                            style={{ height: "600px", overflowX: "hidden" }}
                          >
                            <Row>
                              <Col lg={2} className="m15">
                                <img
                                  src={img3}
                                  className="rounded img-fluid"
                                  style={{ width: "100%" }}
                                  alt=""
                                />
                              </Col>
                              <Col lg={10}>
                                <h6 className="mb-1 lh-base fs-18">
                                  <Link to="#" className="text-reset">
                                    Marcus Svensson
                                  </Link>
                                </h6>
                                <p className="text-muted fs-14 mb-1">
                                  Founder @ GrowthMentor{" "}
                                  <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                  Experience: 13{" "}
                                  <Link to="#">
                                    <i className="ri-linkedin-box-fill align-bottom fs-18"></i>
                                  </Link>
                                </p>
                                <p className="text-dark fs-14 mb-1">
                                  Currently working as Head of Growth at
                                  Albacross, started as the only person in our
                                  growth team to manage 5 people, from few users
                                  to over 20.000+ today. Know my fair share of
                                  growth marketing in SaaS, especially for
                                  SME....
                                </p>
                                <div className="d-flex flex-wrap gap-2 py-2">
                                  <span className="badge border border-info text-info fs-13 fw-normal me-2">
                                    Marketing Automation
                                  </span>
                                  <span className="badge border border-info text-info fs-13 fw-normal me-2">
                                    Conversion Rate Optimisation{" "}
                                  </span>
                                  <span className="badge border border-info text-info fs-13 fw-normal me-2">
                                    SEO
                                  </span>
                                </div>
                                <div className="mt-2">
                                  <Link
                                    to="/entrepreneur/mentors/program/eventview/Index"
                                    className="btn btn-info waves-light me-3"
                                  >
                                    Request a Connect
                                  </Link>
                                  <Link
                                    to="/entrepreneur/mentors/program/eventview/Index"
                                    className="btn btn-light waves-light"
                                  >
                                    View Profile
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                            <hr />
                            <Row className="mt-3">
                              <Col lg={2} className="m15">
                                <img
                                  src={img3}
                                  className="rounded img-fluid"
                                  style={{ width: "100%" }}
                                  alt=""
                                />
                              </Col>
                              <Col lg={10}>
                                <h6 className="mb-1 lh-base fs-18">
                                  <Link to="#" className="text-reset">
                                    Marcus Svensson
                                  </Link>
                                </h6>
                                <p className="text-muted fs-14 mb-1">
                                  Founder @ GrowthMentor{" "}
                                  <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                  Experience: 13{" "}
                                  <Link to="#">
                                    <i className="ri-linkedin-box-fill align-bottom fs-18"></i>
                                  </Link>
                                </p>
                                <p className="text-dark fs-14 mb-1">
                                  Currently working as Head of Growth at
                                  Albacross, started as the only person in our
                                  growth team to manage 5 people, from few users
                                  to over 20.000+ today. Know my fair share of
                                  growth marketing in SaaS, especially for
                                  SME....
                                </p>
                                <div className="d-flex flex-wrap gap-2 py-2">
                                  <span className="badge border border-info text-info fs-13 fw-normal me-2">
                                    Marketing Automation
                                  </span>
                                  <span className="badge border border-info text-info fs-13 fw-normal me-2">
                                    Conversion Rate Optimisation{" "}
                                  </span>
                                  <span className="badge border border-info text-info fs-13 fw-normal me-2">
                                    SEO
                                  </span>
                                </div>
                                <div className="mt-2">
                                  <Link
                                    to="/entrepreneur/mentors/program/eventview/Index"
                                    className="btn btn-info waves-light me-3"
                                  >
                                    Request a Connect
                                  </Link>
                                  <Link
                                    to="/entrepreneur/mentors/program/eventview/Index"
                                    className="btn btn-light waves-light"
                                  >
                                    View Profile
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                            <hr />
                            <Row className="mt-3">
                              <Col lg={2} className="m15">
                                <img
                                  src={img3}
                                  className="rounded img-fluid"
                                  style={{ width: "100%" }}
                                  alt=""
                                />
                              </Col>
                              <Col lg={10}>
                                <h6 className="mb-1 lh-base fs-18">
                                  <Link to="#" className="text-reset">
                                    Marcus Svensson
                                  </Link>
                                </h6>
                                <p className="text-muted fs-14 mb-1">
                                  Founder @ GrowthMentor{" "}
                                  <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                  Experience: 13{" "}
                                  <Link to="#">
                                    <i className="ri-linkedin-box-fill align-bottom fs-18"></i>
                                  </Link>
                                </p>
                                <p className="text-dark fs-14 mb-1">
                                  Currently working as Head of Growth at
                                  Albacross, started as the only person in our
                                  growth team to manage 5 people, from few users
                                  to over 20.000+ today. Know my fair share of
                                  growth marketing in SaaS, especially for
                                  SME....
                                </p>
                                <div className="d-flex flex-wrap gap-2 py-2">
                                  <span className="badge border border-info text-info fs-13 fw-normal me-2">
                                    Marketing Automation
                                  </span>
                                  <span className="badge border border-info text-info fs-13 fw-normal me-2">
                                    Conversion Rate Optimisation{" "}
                                  </span>
                                  <span className="badge border border-info text-info fs-13 fw-normal me-2">
                                    SEO
                                  </span>
                                </div>
                                <div className="mt-2">
                                  <Link
                                    to="/entrepreneur/mentors/program/eventview/Index"
                                    className="btn btn-info waves-light me-3"
                                  >
                                    Request a Connect
                                  </Link>
                                  <Link
                                    to="/entrepreneur/mentors/program/eventview/Index"
                                    className="btn btn-light waves-light"
                                  >
                                    View Profile
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                          </SimpleBar>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Alert color="info" className="text-center">
                            No Document Found.
                          </Alert>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Alert color="info" className="text-center">
                            No Document Found.
                          </Alert>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="4">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Alert color="info" className="text-center">
                            No Document Found.
                          </Alert>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="5">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Alert color="info" className="text-center">
                            No Document Found.
                          </Alert>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="6">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Alert color="info" className="text-center">
                            No Document Found.
                          </Alert>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="7">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Alert color="info" className="text-center">
                            No Document Found.
                          </Alert>
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        {/* </Container>*/}
      </div>
    </React.Fragment>
  );
};

export default Mentors;
