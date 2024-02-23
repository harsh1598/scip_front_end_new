import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import {
  Card,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  CardBody,
  CardHeader,
} from "reactstrap";

import CampaignInformationTbl from "./CampaignInformationTbl";
import ElevatorPitchTbl from "./ElevatorPitchTbl";
import InvestmentInstrumentTbl from "./InvestmentInstrumentTbl";
import CommitmentNetworksTbl from "./CommitmentNetworksTbl";
import TrancheTbl from "./TrancheTbl";
import CampaignStatusTbl from "./CampaignStatusTbl";

const Campaign = () => {
  document.title = "SCIP | Campaign";

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
              <h5 className="mb-0">Campaign</h5>
              </CardHeader>  
             <CardBody>
              <Nav
                tabs
                className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0 mobile-tabs flex-nowrap pb-0 nav nav-tabs pt-1"
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
                    Campaign Information
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
                    Elevator Pitch
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
                    Investment Instrument
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
                    Commitment by Other Investors/Angel Networks
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
                    Tranche
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
                    Campaign Status
                  </NavLink>
                </NavItem>
              </Nav>

              <div classnames="clearfix"></div>
              <TabContent
                activeTab={customActiveTab}
                className="text-muted mt-4"
              >
                <TabPane tabId="1" id="home1">
                  <CampaignInformationTbl />
                </TabPane>
                <TabPane tabId="2">
                <ElevatorPitchTbl />
                </TabPane>
                <TabPane tabId="3">
                <InvestmentInstrumentTbl />
                </TabPane>
                <TabPane tabId="4">
                <CommitmentNetworksTbl />
                </TabPane>
                <TabPane tabId="5">
                <TrancheTbl />
                </TabPane>
                <TabPane tabId="6">
                <CampaignStatusTbl />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        
    </React.Fragment>
  );
};

export default Campaign;
