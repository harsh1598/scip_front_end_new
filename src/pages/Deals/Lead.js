import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Alert,

} from "reactstrap";
import classnames from "classnames";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
// import LeadInvestorTbl from "./Lead/LeadInvestorTbl";

const Lead = () => {
  const [activityTab, setActivityTab] = useState("1");

  const toggleActivityTab = (tab) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  return (
    <React.Fragment>
      <Row className="g-2">
        <Col md={12}>
          <Card className="mb-1">
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2">
                Lead
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
                      to="#investor-tab"
                      className={classnames({
                        active: activityTab === "1",
                      })}
                      onClick={() => {
                        toggleActivityTab("1");
                      }}
                    >
                      Lead Investor
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#observer-tab"
                      className={classnames({
                        active: activityTab === "2",
                      })}
                      onClick={() => {
                        toggleActivityTab("2");
                      }}
                    >
                      Board Observer
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#director-tab"
                      className={classnames({
                        active: activityTab === "3",
                      })}
                      onClick={() => {
                        toggleActivityTab("3");
                      }}
                    >
                      Investment Director
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={activityTab} className="text-muted" >
                <TabPane tabId="1">
                  <div className="profile-timeline">
                    <div className="accordion accordion-flush" id="">
                      <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Investor Role</th>
                              <th scope="col">Investor Name</th>
                              <th scope="col"> Date </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Lead Investor</td>
                              <td>HA</td>
                              <td>05/08/2022</td>
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
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Lead;
