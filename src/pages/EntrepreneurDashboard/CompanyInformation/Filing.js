import React, { useState } from "react";
import classnames from "classnames";
import {
  Card,
  Col,
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  CardBody,
  CardHeader,
} from "reactstrap";

import AIIFllingsTbl from "./AIIFllingsTbl";
import PerformanceTbl from "./PerformanceTbl";
import KeyMilestonesTbl from "./KeyMilestonesTbl";
import PresentationTbl from "./PresentationTbl";
import BudgetActualTbl from "./BudgetActualTbl";
import ArchivedFilingsTbl from "./ArchivedFilingsTbl";

//Images
import profileBg from "../../../assets/images/profile-bg.jpg";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";

const Filing = () => {
  document.title = "SCIP | Filing";

  const [modelName, setModelName] = useState("");
  const toggleModel = (name) => {
    setModelName(name);
  };

  // Custom Tabs Bordered
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
     <Card>
     <CardHeader className="">
              <h5 className="mb-0">Filing</h5>
      </CardHeader>  
        <CardBody>
          <Nav
            tabs
            className="justify-content-start nav-tabs-custom rounded card-header-tabs pt-2"
            role="tablist"
          >
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: customActiveTab === "1",
                })}
                onClick={() => {
                  toggleCustom("1");
                }}
              >
                All Filings
                  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: customActiveTab === "2",
                })}
                onClick={() => {
                  toggleCustom("2");
                }}
              >
                Performance
                  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: customActiveTab === "3",
                })}
                onClick={() => {
                  toggleCustom("3");
                }}
              >
                Key Milestones
                  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: customActiveTab === "4",
                })}
                onClick={() => {
                  toggleCustom("4");
                }}
              >
                Presentation
                  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: customActiveTab === "5",
                })}
                onClick={() => {
                  toggleCustom("5");
                }}
              >
                Budget vs Actual
                  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: customActiveTab === "6",
                })}
                onClick={() => {
                  toggleCustom("6");
                }}
              >
                Archived Filings
                  </NavLink>
            </NavItem>
          </Nav>

          <div classnames="clearfix"></div>
          <TabContent
            activeTab={customActiveTab}
            className="text-muted my-4"
          >
            <TabPane tabId="1" id="home1">
              <AIIFllingsTbl />
            </TabPane>
            <TabPane tabId="2">
              <PerformanceTbl />
            </TabPane>
            <TabPane tabId="3">
              <KeyMilestonesTbl />
            </TabPane>
            <TabPane tabId="4">
              <PresentationTbl />
            </TabPane>
            <TabPane tabId="5">
              <BudgetActualTbl />
            </TabPane>
            <TabPane tabId="6">
              <ArchivedFilingsTbl />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>

    </React.Fragment>
  );
};

export default Filing;
