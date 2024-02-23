import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import EntrepreneurTbl from "./EntrepreneurTbl";
import InvestorTbl from "./InvestorTbl";
import AdvisorTbl from "./AdvisorTbl";
import SyndicateTbl from "./SyndicateTbl";
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
      <div className="card-header px-0 pt-0">
        <Nav
          tabs
          className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0 mobile-tabs flex-nowrap pb-0"
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
              Entrepreneur
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
              Investor
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
              Syndicate
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
              SME Advisor
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div classnames="clearfix"></div>
      
      <TabContent activeTab={customActiveTab} className="text-muted mt-2">
        <TabPane tabId="1" id="home1">
          <EntrepreneurTbl />
        </TabPane>
        <TabPane tabId="2">
          <InvestorTbl />
        </TabPane>
        <TabPane tabId="3">
          <SyndicateTbl />
        </TabPane>
        <TabPane tabId="4">
          <AdvisorTbl />
        </TabPane>
      </TabContent>
      
    </>
  );
};

export default Tab;
