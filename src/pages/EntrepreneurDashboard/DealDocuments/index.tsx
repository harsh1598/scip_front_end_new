import React, { useState } from "react";
import classnames from "classnames";
import { TabContent, TabPane, CardHeader, Nav, NavItem, NavLink, Card, CardBody, Col, Container, Row, } from "reactstrap";

//Images

import EditCompany from "./Modals/EditCompany";
import StandardDocumentTbl from "./StandardDocumentTbl";
import InvestmentDocumentsTbl from "./InvestmentDocumentsTbl";
import ArchiveVideoTbl from "./ArchiveVideoTbl";

const Index = () => {
  document.title = "SCIP | Deal Documents";

  // Default Accordion
  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");

  const toggleModel = (name: any) => {
    setModelName(name);
  };

  const [activityTab, setActivityTab] = useState("1");

  const toggleActivityTab = (tab: any) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  return (
    <>
    <React.Fragment>
     
    <div className="mb-none profile-wrapper">
          <Row className="g-0">
            <Col>
              <h3 className="text-white mb-4">Deal Documents</h3>
            </Col>
          </Row>
        </div>
    <Row className="g-2">
            <Col md={12}>
              <Card className="mb-1">
             

                <CardHeader className="align-items-center">
                  <div className="flex-shrink-0 ml-auto pt-2">
                  <Nav
                      className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0 hr-scrolling"
                      role="tablist"
                    >
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        "px-0": true,
                        active: activityTab === "1",
                      })}
                      onClick={() => {
                        toggleActivityTab("1");
                      }}
                      id="v-pills-1-tab"
                    >
                      Standard Document <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        "px-0": true,
                        active: activityTab === "2",
                      })}
                      onClick={() => {
                        toggleActivityTab("2");
                      }}
                      id="v-pills-2-tab"
                    >
                      Investment Documents <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        "px-0": true,
                        active: activityTab === "3",
                      })}
                      onClick={() => {
                        toggleActivityTab("3");
                      }}
                      id="v-pills-3-tab"
                    >
                      DD Reports <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                         "px-0": true,
                        active: activityTab === "4",
                      })}
                      onClick={() => {
                        toggleActivityTab("4");
                      }}
                      id="v-pills-4-tab"
                    >
                      Fund Diligence <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                         "px-0": true,
                        active: activityTab === "5",
                      })}
                      onClick={() => {
                        toggleActivityTab("5");
                      }}
                      id="v-pills-5-tab"
                    >
                      Investor Announcement <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                         "px-0": true,
                        active: activityTab === "6",
                      })}
                      onClick={() => {
                        toggleActivityTab("6");
                      }}
                      id="v-pills-6-tab"
                    >
                      Investor Consent <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                         "px-0": true,
                        active: activityTab === "7",
                      })}
                      onClick={() => {
                        toggleActivityTab("7");
                      }}
                      id="v-pills-7-tab"
                    >
                      Investor Update <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                         "px-0": true,
                        active: activityTab === "8",
                      })}
                      onClick={() => {
                        toggleActivityTab("8");
                      }}
                      id="v-pills-8-tab"
                    >
                      Deal Process Flow <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                         "px-0": true,
                        active: activityTab === "9",
                      })}
                      onClick={() => {
                        toggleActivityTab("9");
                      }}
                      id="v-pills-9-tab"
                    >
                      Teaser Documents <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                         "px-0": true,
                        active: activityTab === "10",
                      })}
                      onClick={() => {
                        toggleActivityTab("10");
                      }}
                      id="v-pills-10-tab"
                    >
                      Cap Table <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                         "px-0": true,
                        active: activityTab === "11",
                      })}
                      onClick={() => {
                        toggleActivityTab("11");
                      }}
                      id="v-pills-11-tab"
                    >
                      Old Reports <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                         "px-0": true,
                        active: activityTab === "12",
                      })}
                      onClick={() => {
                        toggleActivityTab("12");
                      }}
                      id="v-pills-12-tab"
                    >
                      Other Documents <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                         "px-0": true,
                        active: activityTab === "13",
                      })}
                      onClick={() => {
                        toggleActivityTab("13");
                      }}
                      id="v-pills-13-tab"
                    >
                      Archive Documents <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                         "px-0": true,
                        active: activityTab === "14",
                      })}
                      onClick={() => {
                        toggleActivityTab("14");
                      }}
                      id="v-pills-14-tab"
                    >
                      Archive Video <i className="mdi mdi-circle-medium fs-18 align-bottom px-1"></i>
                    </NavLink>
                  </NavItem>
                </Nav>
                  </div>
                </CardHeader>
                <CardBody>
                <TabContent
                activeTab={activityTab}
                className="text-muted mt-4 mt-md-0"
                id="v-pills-tabContent"
              >
                <TabPane tabId="1" id="v-pills-1">
                  <StandardDocumentTbl />
                </TabPane>
                <TabPane tabId="2" id="v-pills-2">
                  <InvestmentDocumentsTbl />
                </TabPane>
                <TabPane tabId="3" id="v-pills-3">
                   <InvestmentDocumentsTbl />
                 </TabPane>
                <TabPane tabId="4" id="v-pills-4">
                   <InvestmentDocumentsTbl />
                 </TabPane>
                <TabPane tabId="5" id="v-pills-5">
                   <InvestmentDocumentsTbl />
                 </TabPane>
                <TabPane tabId="6" id="v-pills-6">
                   <InvestmentDocumentsTbl />
                 </TabPane>
                <TabPane tabId="7" id="v-pills-7">
                   <InvestmentDocumentsTbl />
                 </TabPane>
                <TabPane tabId="8" id="v-pills-8">
                   <InvestmentDocumentsTbl />
                 </TabPane>
                <TabPane tabId="9" id="v-pills-9">
                   <InvestmentDocumentsTbl />
                 </TabPane>
                <TabPane tabId="10" id="v-pills-10">
                   <InvestmentDocumentsTbl />
                 </TabPane>
                <TabPane tabId="11" id="v-pills-11">
                   <InvestmentDocumentsTbl />
                 </TabPane>
                <TabPane tabId="12" id="v-pills-12">
                   <InvestmentDocumentsTbl />
                 </TabPane>
                <TabPane tabId="13" id="v-pills-13">
                   <InvestmentDocumentsTbl />
                 </TabPane>
                <TabPane tabId="14" id="v-pills-14">
                   <ArchiveVideoTbl />
                 </TabPane>
              </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>

      <EditCompany
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditCompany" ? true : false}
        onCloseClick={() => setModelName("")}
      />

    </React.Fragment>
    </>
  );
};

export default Index;