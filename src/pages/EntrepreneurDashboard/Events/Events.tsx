import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import SimpleBar from "simplebar-react";
import img3 from "../../../assets/images/small/img-3.jpg";
import Calendar from "../../EntrepreneurDashboard/Events/Calendar/index";

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

const Events = () => {
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
              <h3 className="text-white mb-4">Events</h3>
            </Col>
          </Row>
        </div>
          <Row className="g-2">
            <Col md={12}>
              <Card className="mb-1">
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
                          All Events
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
                          Customized Programs
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
                          General Management
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
                          Retail
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
                          Strategy
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
                          Entrepreneurship
                        </NavLink>
                      </NavItem>
                      <NavItem className="nav-item">
                        <NavLink
                          to="#calendar-tab"
                          className={classnames({
                            active: activityTab === "8",
                          })}
                          onClick={() => {
                            toggleActivityTab("8");
                          }}
                        >
                          Calendar View
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </CardHeader>
                <CardBody>
                  <TabContent activeTab={activityTab} className="text-muted">
                    <TabPane tabId="1">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                       {/*   <SimpleBar
                            style={{ height: "350px", overflowX: "hidden" }}
                        > */}
                            <Row className="mb-2">
                              <div className="col-lg-2 m15">
                                <img
                                  src={img3}
                                  className="rounded img-fluid"
                                  style={{ width: "100%" }}
                                  alt=""
                                />
                              </div>
                              <div className="col-lg-10">
                                <h6 className="mb-1 lh-base fs-18">
                                  <Link to="#" className="text-reset">
                                    E-COMMERCE STRATEGIES
                                  </Link>
                                </h6>
                                <p className="text-danger fs-14 mb-1">
                                  SmartGlobal
                                </p>
                                <p className="text-muted fs-13 mb-1">
                                  <b>For Whom:</b> Managers graduating to
                                  GM/profit-center/Business Head{" "}
                                  <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                  <b>Duration:</b> 0 Hour{" "}
                                  <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                  <b>Start Date:</b> Oct 31, 2028
                                  <b>
                                    <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                    Location:
                                  </b>{" "}
                                  Dubai and IIMB campus Banglore
                                </p>
                                <Link
                                  className="btn btn-info waves-light mt-2"
                                  to="#"
                                >
                                  Read More
                                </Link>
                              </div>
                            </Row>
                         {/* </SimpleBar> */}
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Alert color="info" className="text-center">
                            No Records Found.
                          </Alert>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Alert color="info" className="text-center">
                            No Records Found.
                          </Alert>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="4">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          
                            <Row className="mb-2">
                              <div className="col-lg-2 m15">
                                <img
                                  src={img3}
                                  className="rounded img-fluid"
                                  style={{ width: "100%" }}
                                  alt=""
                                />
                              </div>
                              <div className="col-lg-10">
                                <h6 className="mb-1 lh-base fs-18">
                                  <Link to="#" className="text-reset">
                                    E-COMMERCE STRATEGIES
                                  </Link>
                                </h6>
                                <p className="text-danger fs-14 mb-1">
                                  SmartGlobal
                                </p>
                                <p className="text-muted fs-13 mb-1">
                                  <b>For Whom:</b> Managers graduating to
                                  GM/profit-center/Business Head{" "}
                                  <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                  <b>Duration:</b> 0 Hour{" "}
                                  <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                  <b>Start Date:</b> Oct 31, 2028
                                  <b>
                                    <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                    Location:
                                  </b>{" "}
                                  Dubai and IIMB campus Banglore
                                </p>
                                <Link
                                  className="btn btn-info waves-light mt-2"
                                  to="#"
                                >
                                  Read More
                                </Link>
                              </div>
                            </Row>
                          
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="5">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Alert color="info" className="text-center">
                            No Records Found.
                          </Alert>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="6">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Alert color="info" className="text-center">
                            No Records Found.
                          </Alert>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="7">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                         
                            <Row className="mb-2">
                              <div className="col-lg-2 m15">
                                <img
                                  src={img3}
                                  className="rounded img-fluid"
                                  style={{ width: "100%" }}
                                  alt=""
                                />
                              </div>
                              <div className="col-lg-10">
                                <h6 className="mb-1 lh-base fs-18">
                                  <Link to="#" className="text-reset">
                                    E-COMMERCE STRATEGIES
                                  </Link>
                                </h6>
                                <p className="text-danger fs-14 mb-1">
                                  SmartGlobal
                                </p>
                                <p className="text-muted fs-13 mb-1">
                                  <b>For Whom:</b> Managers graduating to
                                  GM/profit-center/Business Head{" "}
                                  <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                  <b>Duration:</b> 0 Hour{" "}
                                  <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                  <b>Start Date:</b> Oct 31, 2028
                                  <b>
                                    <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                    Location:
                                  </b>{" "}
                                  Dubai and IIMB campus Banglore
                                </p>
                                <Link
                                  className="btn btn-info waves-light mt-2"
                                  to="#"
                                >
                                  Read More
                                </Link>
                              </div>
                            </Row>
                          
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="8">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Calendar/>
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

export default Events;
