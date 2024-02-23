import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row ,  Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { ProjectName } from "../../../../Components/constants/layout";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import classnames from "classnames";
import CampaignRunning from './CampaignRunning';
import CampaignSuccessful from './CampaignSuccessful';
import CampaignFailed from './CampaignFailed';
import SecondaryMarket from './SecondaryMarket';

const ViewCampaign = () => {

    document.title = `${ProjectName} | View Campaign `;

    // Custom Tabs Bordered
    const [customActiveTab, setcustomActiveTab] = useState("1");
    const toggleCustom = (tab) => {
        if (customActiveTab !== tab) {
            setcustomActiveTab(tab);
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="View Campaign" pageTitle="View Campaign" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <div className='card-header'>
                                        <Nav tabs className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
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
                                                    Campaign Running
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
                                                    Campaign Successful
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
                                                    Campaign Failed
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
                                                    Secondary Market
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                    <div classnames="clearfix"></div>
                                    <TabContent activeTab={customActiveTab} className="text-muted mt-4">
                                        <TabPane tabId="1" id="home1">
                                           <CampaignRunning />
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <CampaignSuccessful />
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <CampaignFailed />
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <SecondaryMarket />
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ViewCampaign;
