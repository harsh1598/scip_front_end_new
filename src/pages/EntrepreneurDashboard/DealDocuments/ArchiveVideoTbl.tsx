import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink, NavItem, Nav, Button, CardHeader, Card, CardBody, Col, TabContent, TabPane, Container, Row, Input, ListGroup, ListGroupItem, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import SimpleBar from 'simplebar-react';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import classnames from "classnames";
import EditLink from "./Modals/EditLink";
import Comments from "./Modals/Comments";
import Move from "./Modals/Move";
import UploadDocuments from "./Modals/UploadDocuments";
import AddLink from "./Modals/AddLink";

const ArchiveVideoTbl = () => {
  document.title = "SCIP | Investment Documents";

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
      <Row>
        <Col xxl={12} className="ms-auto text-end">
          <Card className="mb-2">
            <CardBody>
              <Button type="button" className="btn btn-brand-theme me-2" onClick={(e) => toggleModel("Move")}> Move </Button>
              <Button type="button" className="btn btn-brand-theme me-2" onClick={(e) => toggleModel("UploadDocuments")}> Upload File </Button>
              <Button type="button" className="btn btn-brand-theme" onClick={(e) => toggleModel("AddLink")}> Add Link </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xxl={12}>
          <Card>
            <CardHeader className="align-items-center pt-4">
              <div className="flex-shrink-0 ml-auto">
                <Nav
                  className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0 mobile-tabs"
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
                      Initial Screening
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
                     DD Review
                                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink
                      to="#advisor-tab"
                      className={classnames({
                        active: activityTab === "3",
                      })}
                      onClick={() => {
                        toggleActivityTab("3");
                      }}
                    >
                      Pitching
                                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink
                      to="#investor-tab"
                      className={classnames({
                        active: activityTab === "4",
                      })}
                      onClick={() => {
                        toggleActivityTab("4");
                      }}
                    >
                      SME Advisor
                                    </NavLink>
                  </NavItem>
                   <NavItem className="nav-item">
                    <NavLink
                      to="#investor-tab"
                      className={classnames({
                        active: activityTab === "5",
                      })}
                      onClick={() => {
                        toggleActivityTab("6");
                      }}
                    >
                      Reporting
                                    </NavLink>
                  </NavItem>
                   <NavItem className="nav-item">
                    <NavLink
                      to="#investor-tab"
                      className={classnames({
                        active: activityTab === "6",
                      })}
                      onClick={() => {
                        toggleActivityTab("6");
                      }}
                    >
                      Screening
                                    </NavLink>
                  </NavItem>
                   <NavItem className="nav-item">
                    <NavLink
                      to="#investor-tab"
                      className={classnames({
                        active: activityTab === "7",
                      })}
                      onClick={() => {
                        toggleActivityTab("7");
                      }}
                    >
                      Others
                                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </CardHeader>

            <TabContent
              activeTab={activityTab}
              className="text-muted p-3"
            >
              <TabPane tabId="1">
                <div className="profile-timeline">
                  <div
                    className="accordion accordion-flush"
                    id="teamExample"
                  >
                    12

                                    </div>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="profile-timeline">
                  <div
                    className="accordion accordion-flush"
                    id="directorExample"
                  >
                    Director coming soon...
                                    </div>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="profile-timeline">
                  <div
                    className="accordion accordion-flush"
                    id="advisorExample"
                  >
                    Advisor coming soon...
                                    </div>
                </div>
              </TabPane>
              <TabPane tabId="4">
                <div className="profile-timeline">
                  <div
                    className="accordion accordion-flush"
                    id="investorExample"
                  >
                    Investor coming soon...
                                    </div>
                </div>
              </TabPane>
            </TabContent>

          </Card>
        </Col>
      </Row>
    
     <Comments
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Comments" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditLink
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditLink" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <Move
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Move" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <UploadDocuments
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "UploadDocuments" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <AddLink
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "AddLink" ? true : false}
        onCloseClick={() => setModelName("")}
      />

    </React.Fragment>
    </>
  );
};

export default ArchiveVideoTbl;