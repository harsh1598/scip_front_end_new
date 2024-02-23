import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import ContactInfo from "./TabContactInfo"
import TabPassword from './TabPassword';
import TabTimeZone from './TabTimeZone';
import TabAdvanceSettings from './TabAdvanceSettings';

//import images
import progileBg from '../../assets/images/profile-bg.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';

const AccountSetting = () => {
    const [activeTab, setActiveTab] = useState("1");

    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    document.title = "Account Settings | Admin";

    return (
        <React.Fragment>
            <div className="page-content mt-40">
                <Container fluid>
                        <div className="position-relative mx-n4 mt-n4 mb-n5">
                        <div className="profile-wid-bg profile-setting-img">
                            <img src={progileBg} className="profile-wid-img" alt="" />
                        </div>
                    </div>
                    <Row>
                        <Col xxl={12}>
                            <h4 className="text-white mb-0 me-2 pb-3">Account Settings</h4>
                            <Card>
                                <CardHeader>
                                    <Nav className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0 mobile-tabs flex-nowrap pb-0 nav nav-tabs"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "1" })}
                                                onClick={() => {
                                                    tabChange("1");
                                                }}>
                                                <i className="fas fa-home"></i>
                                                Contact Information
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#password"
                                                className={classnames({ active: activeTab === "2" })}
                                                onClick={() => {
                                                    tabChange("2");
                                                }}
                                                type="button">
                                                <i className="far fa-user"></i>
                                                Password
                                            </NavLink>
                                        </NavItem>
                                        <NavItem >
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "3" })}
                                                onClick={() => {
                                                    tabChange("3");
                                                }}
                                                type="button">
                                                <i className="far fa-envelope"></i>
                                                Time Zone Settings
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "4" })}
                                                onClick={() => {
                                                    tabChange("4");
                                                }}
                                                type="button">
                                                <i className="far fa-envelope"></i>
                                                Advance Settings
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <ContactInfo />
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <TabPassword />
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <TabTimeZone />
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <TabAdvanceSettings />
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

export default AccountSetting;