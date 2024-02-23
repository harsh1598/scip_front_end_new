import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { newsFeed } from "../../../common/data";

import img1 from "../../../assets/images/small/img-1.jpg";
import img2 from "../../../assets/images/small/img-2.jpg";
import img3 from "../../../assets/images/small/img-3.jpg";
import img6 from "../../../assets/images/small/img-6.jpg";

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

const Resources = () => {
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
              <h3 className="text-white mb-4">Resources</h3>
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
                          All Resources
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
                          Retail
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
                          Business
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
                          Global
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
                          Entrepreneurship
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
                          Beinvestible
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
                          Startupincubator
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
                          <Row>
                            <Col lg={12}>
                             
                                {(newsFeed || []).map((item, key) => (
                                  <div
                                    className={
                                      item.id === 1
                                        ? "row align-middle"
                                        : "row mt-4"
                                    }
                                    key={key}
                                  >
                                    <div className="col-lg-2 m15">
                                      <img
                                        src={item.img}
                                        className="rounded img-fluid"
                                        style={{ width: "100%" }}
                                        alt=""
                                      />
                                    </div>
                                    <div className="col-lg-10">
                                      <h6 className="mb-1 lh-base fs-18">
                                        <Link to="#" className="text-reset">
                                          {item.caption}
                                        </Link>
                                      </h6>
                                      <p className="text-success fs-13 mb-0">
                                        {item.date}{" "}
                                        <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                        {item.time}{" "}
                                        <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                        {item.category}
                                      </p>
                                      <p className="text-muted fs-14">
                                        {item.description}
                                      </p>
                                      <Link
                                        to="/entrepreneur_dashboard/Resources/Blog/ResourcesDetails"
                                        className="btn btn-info waves-light"
                                      >
                                        Read More
                                      </Link>
                                    </div>
                                  </div>
                                ))}
                             
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Row>
                            <div className="col-lg-2 m15">
                              <img
                                src={img6}
                                className="rounded img-fluid"
                                style={{ width: "100%" }}
                                alt=""
                              />
                            </div>
                            <div className="col-lg-10">
                              <h6 className="mb-1 lh-base fs-18">
                                <Link to="#" className="text-reset">
                                  Retail industry challenge explained by the
                                  Smiley Curve
                                </Link>
                              </h6>
                              <p className="text-success fs-13 mb-0">
                                Nov 18, 2021{" "}
                                <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                06:13 PM{" "}
                                <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                Retail{" "}
                              </p>
                              <p className="text-muted fs-14">
                                Retailers have to accept the new reality,
                                believe that global supply relationships have
                                changed, their power over customers is over, and
                                recognize that customers are digital natives.{" "}
                              </p>
                              <Link
                                className="btn btn-info waves-light"
                                to="/entrepreneur_dashboard/Resources/Blog/ResourcesDetails"
                              >
                                Read More
                              </Link>
                            </div>
                          </Row>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Row>
                            <div className="col-lg-2 m15">
                              <img
                                src={img2}
                                className="rounded img-fluid"
                                style={{ width: "100%" }}
                                alt=""
                              />
                            </div>
                            <div className="col-lg-10">
                              <h6 className="mb-1 lh-base fs-18">
                                <Link to="#" className="text-reset">
                                  The First Step of Raising Capital — Getting
                                  Noticed
                                </Link>
                              </h6>
                              <p className="text-success fs-13 mb-0">
                                Nov 18, 2021{" "}
                                <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                06:13 PM{" "}
                                <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                Business{" "}
                              </p>
                              <p className="text-muted fs-14">
                                In the early stage of a startup, investment
                                decision making happens with partial information
                                because not enough data points exist.{" "}
                              </p>
                              <Link className="btn btn-info waves-light" to="#">
                                Read More
                              </Link>
                            </div>
                          </Row>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="4">
                      <div className="profile-timeline">
                        <div className="accordion accordion-flush" id="">
                          <Row>
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
                                  ZYEAL – ONLINE ENTREPRENEURSHIP CURRICULUM FOR
                                  HIGH SCHOOL
                                </Link>
                              </h6>
                              <p className="text-success fs-13 mb-0">
                                Nov 18, 2021{" "}
                                <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                06:13 PM{" "}
                                <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                Global{" "}
                              </p>
                              <p className="text-muted fs-14">
                                A startup is a company designed to grow fast.
                                Being newly founded does not in itself make a
                                company a startup.{" "}
                              </p>
                              <Link className="btn btn-info waves-light" to="#">
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
                          <Row>
                            <div className="col-lg-2 m15">
                              <img
                                src={img1}
                                className="rounded img-fluid"
                                style={{ width: "100%" }}
                                alt=""
                              />
                            </div>
                            <div className="col-lg-10">
                              <h6 className="mb-1 lh-base fs-18">
                                <Link to="#" className="text-reset">
                                  FRANCHISING IS DEAD. LONG LIVE FRANCHISING
                                </Link>
                              </h6>
                              <p className="text-success fs-13 mb-0">
                                Nov 18, 2021{" "}
                                <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                06:13 PM{" "}
                                <i className="mdi mdi-circle-medium align-middle mx-1"></i>{" "}
                                Entrepreneurship{" "}
                              </p>
                              <p className="text-muted fs-14">
                                A startup must demonstrate how they are (or
                                will) be able to digitally create demand
                                economies of scale in the engagement layer.{" "}
                              </p>
                              <Link className="btn btn-info waves-light" to="#">
                                Read More
                              </Link>
                            </div>
                          </Row>
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

export default Resources;
