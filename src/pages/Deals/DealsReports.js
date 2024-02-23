import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Alert,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

const DealsReports = () => {
  const [activityTab, setActivityTab] = useState("1");

  const toggleActivityTab = (tab) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  const [isReportVideo, setIsReportVideo] = useState(false);
  const toggleReportVideo = () => {
    setIsReportVideo(!isReportVideo);
  };

  // Vertical Nav Tabs
  const [verticalTab, setverticalTab] = useState("1");
  const toggleVertical = (tab) => {
    if (verticalTab !== tab) {
      setverticalTab(tab);
    }
  };

  return (
    <React.Fragment>
      <Row className="g-2">
        <Col md={12}>
          <Card className="mb-1">
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2">
                Progress Report
              </h4>
            </CardHeader>
            <CardHeader className="align-items-center mobile-tabs">
              <div className="flex-shrink-0 ml-auto">
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
                      Budget vs Actual
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
                      Financial
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
                      Key Milestones
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
                      Performance
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
                      Presentation
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
                      Provisional Financials
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
                      <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Report Title</th>
                              <th scope="col">Updated By</th>
                              <th scope="col">Updated Date</th>
                              <th scope="col" style={{ width: "150px" }}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Test 1 doc</td>
                              <td>Smriti Misra</td>
                              <td>27/08/2021</td>
                              <td className="social-icons">
                                <Link to="#" className="text-muted">
                                  <i className="ri-download-2-line fs-20 me-2"></i>
                                </Link>
                                <Link to="#" className="text-muted">
                                  <i className="ri-message-3-line fs-20"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
                      <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Report Title</th>
                              <th scope="col">Updated By</th>
                              <th scope="col">Updated Date</th>
                              <th scope="col" style={{ width: "150px" }}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Test URL</td>
                              <td>Smriti Misra</td>
                              <td>15/11/2022</td>
                              <td className="social-icons">
                                <Link to="#" className="text-muted">
                                  <i className="ri-download-2-line fs-20 me-2"></i>
                                </Link>
                                <Link to="#" className="text-muted">
                                  <i className="ri-message-3-line fs-20"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>Q1</td>
                              <td>Smriti Misra</td>
                              <td>02/06/2021</td>
                              <td className="social-icons">
                                <Link to="#" className="text-muted">
                                  <i className="ri-download-2-line fs-20 me-2"></i>
                                </Link>
                                <Link to="#" className="text-muted">
                                  <i className="ri-message-3-line fs-20"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>Q3</td>
                              <td>Dinesh K</td>
                              <td>22/12/2021</td>
                              <td className="social-icons">
                                <Link to="#" className="text-muted">
                                  <i className="ri-download-2-line fs-20 me-2"></i>
                                </Link>
                                <Link to="#" className="text-muted">
                                  <i className="ri-message-3-line fs-20"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="5">
                  <div className="profile-timeline">
                    <div className="accordion accordion-flush" id="">
                      <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Report Title</th>
                              <th scope="col">Updated By</th>
                              <th scope="col">Updated Date</th>
                              <th scope="col" style={{ width: "150px" }}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Presentation Report Q1</td>
                              <td>Smriti Misra</td>
                              <td>12/02/2021</td>
                              <td className="social-icons">
                                <Link to="#" className="text-muted" onClick={toggleReportVideo}>
                                  <i className="ri-video-line fs-20 me-2"></i>
                                </Link>
                                <Link to="#" className="text-muted">
                                  <i className="ri-message-3-line fs-20"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Vertical tabs */}
      <Card className="mt-2" style={{ display: "none"}}>
        <CardBody>
          <Row>
            <Col md={2}>
              <Nav
                pills
                className="flex-column justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
                id="v-pills-tab"
              >
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      "mb-2": true,
                      active: verticalTab === "1",
                    })}
                    onClick={() => {
                      toggleVertical("1");
                    }}
                    id="v-pills-home-tab"
                  >
                    Budget vs Actual
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      "mb-2": true,
                      active: verticalTab === "2",
                    })}
                    onClick={() => {
                      toggleVertical("2");
                    }}
                    id="v-pills-profile-tab"
                  >
                    Financial
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      "mb-2": true,
                      active: verticalTab === "3",
                    })}
                    onClick={() => {
                      toggleVertical("3");
                    }}
                    id="v-pills-messages-tab"
                  >
                    Key Milestones
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: verticalTab === "4",
                    })}
                    onClick={() => {
                      toggleVertical("4");
                    }}
                    id="v-pills-settings-tab"
                  >
                    Performance
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: verticalTab === "5",
                    })}
                    onClick={() => {
                      toggleVertical("5");
                    }}
                    id="v-pills-settings-tab"
                  >
                    Presentation
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: verticalTab === "6",
                    })}
                    onClick={() => {
                      toggleVertical("6");
                    }}
                    id="v-pills-settings-tab"
                  >
                    Provisional Financials
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md={10}>
              <TabContent
                activeTab={verticalTab}
                className="text-muted mt-4 mt-md-0"
                id="v-pills-tabContent"
              >
                <TabPane tabId="1" id="v-pills-1">
                  <div className="profile-timeline">
                    <div className="accordion accordion-flush" id="">
                      <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Report Title</th>
                              <th scope="col">Updated By</th>
                              <th scope="col">Updated Date</th>
                              <th scope="col" style={{ width: "150px" }}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Test 1 doc</td>
                              <td>Smriti Misra</td>
                              <td>27/08/2021</td>
                              <td className="social-icons">
                                <Link to="#" className="text-muted">
                                  <i className="ri-download-2-line fs-20 me-2"></i>
                                </Link>
                                <Link to="#" className="text-muted">
                                  <i className="ri-message-3-line fs-20"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2" id="v-pills-2">
                  <div className="profile-timeline">
                    <div className="accordion accordion-flush" id="">
                      <Alert color="info" className="text-center">
                        No Document Found.
                      </Alert>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="3" id="v-pills-3">
                  <div className="profile-timeline">
                    <div className="accordion accordion-flush" id="">
                      <Alert color="info" className="text-center">
                        No Document Found.
                      </Alert>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="4" id="v-pills-4">
                  <div className="profile-timeline">
                    <div className="accordion accordion-flush" id="">
                      <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Report Title</th>
                              <th scope="col">Updated By</th>
                              <th scope="col">Updated Date</th>
                              <th scope="col" style={{ width: "150px" }}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Test URL</td>
                              <td>Smriti Misra</td>
                              <td>15/11/2022</td>
                              <td className="social-icons">
                                <Link to="#" className="text-muted">
                                  <i className="ri-download-2-line fs-20 me-2"></i>
                                </Link>
                                <Link to="#" className="text-muted">
                                  <i className="ri-message-3-line fs-20"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>Q1</td>
                              <td>Smriti Misra</td>
                              <td>02/06/2021</td>
                              <td className="social-icons">
                                <Link to="#" className="text-muted">
                                  <i className="ri-download-2-line fs-20 me-2"></i>
                                </Link>
                                <Link to="#" className="text-muted">
                                  <i className="ri-message-3-line fs-20"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>Q3</td>
                              <td>Dinesh K</td>
                              <td>22/12/2021</td>
                              <td className="social-icons">
                                <Link to="#" className="text-muted">
                                  <i className="ri-download-2-line fs-20 me-2"></i>
                                </Link>
                                <Link to="#" className="text-muted">
                                  <i className="ri-message-3-line fs-20"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="5" id="v-pills-5">
                  <div className="profile-timeline">
                    <div className="accordion accordion-flush" id="">
                      <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Report Title</th>
                              <th scope="col">Updated By</th>
                              <th scope="col">Updated Date</th>
                              <th scope="col" style={{ width: "150px" }}>
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Presentation Report Q1</td>
                              <td>Smriti Misra</td>
                              <td>12/02/2021</td>
                              <td className="social-icons">
                                <Link to="#" className="text-muted" onClick={toggleReportVideo}>
                                  <i className="ri-video-line fs-20 me-2"></i>
                                </Link>
                                <Link to="#" className="text-muted">
                                  <i className="ri-message-3-line fs-20"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="6" id="v-pills-6">
                  <div className="profile-timeline">
                    <div className="accordion accordion-flush" id="">
                      <Alert color="info" className="text-center">
                        No Document Found.
                      </Alert>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* Report Video Modal */}
      <Offcanvas
        isOpen={isReportVideo}
        direction="end"
        toggle={toggleReportVideo}
        id="offcanvasReportVideo"
        className="border-bottom"
      >
        <OffcanvasHeader
          className="bg-light"
          toggle={toggleReportVideo}
          id="offcanvasRightLabel"
        >
          Report Video
        </OffcanvasHeader>
        <OffcanvasBody className="px-0 overflow-hidden">
          <Container>
            <Row>
              <Col md="12" sm="12">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="rounded"
                    src="https://scipbucket.s3.ap-south-1.amazonaws.com/uploads/docx_video/3/VDO_10346585929_3_40171865.mp4"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button className="btn btn-light">Cancel</Button>
          </div>
        </div>
      </Offcanvas>
    </React.Fragment>
  );
};

export default DealsReports;
