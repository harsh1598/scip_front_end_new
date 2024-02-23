import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody } from "reactstrap";
import AccountDetailTbl from "./AccountDetailTbl";
import StartOrganizationTbl from "./StartOrganizationTbl";
import WhatCreatingTbl from "./WhatCreatingTbl";
import StartDetailsTbl from "./StartDetailsTbl";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";

const Tab = () => {
  // Custom Tabs Bordered
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  return (
    <>
      <div className="card-header">
      <Card className="p-4 mb-0">
      <CardBody>
        <Nav
          tabs
          className="justify-content-center nav-tabs-custom rounded card-header-tabs border-bottom-0"
          role="tablist"
        >
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classnames({
                active: customActiveTab === "1"
              })}
              onClick={() => {
                toggleCustom("1");
              }}
            >
            Account Details
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
            Start-up Organization
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
            What Are You Creating
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
            Start-up Details
            </NavLink>
          </NavItem>
        </Nav>
</CardBody>
</Card>

      </div>
      <div classnames="clearfix"></div>
      <TabContent activeTab={customActiveTab} className="text-muted mt-3">
        <TabPane tabId="1" id="home1">
          <AccountDetailTbl />
        </TabPane>
        <TabPane tabId="2">
          <StartOrganizationTbl />
        </TabPane>
        <TabPane tabId="3">
          <WhatCreatingTbl />
        </TabPane>
        <TabPane tabId="4">
          <StartDetailsTbl />
        </TabPane>
      </TabContent>
    </>
  );
};

export default Tab;
