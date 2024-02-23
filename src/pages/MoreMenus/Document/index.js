import React, { useState } from "react";
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import classnames from "classnames";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import EntrepreneurTbl from "./EntrepreneurTbl";
import InvestorTbl from "./InvestorTbl";
import SMEAdvisorTbl from "./SMEAdvisorTbl";

const Tab = () => {

    // Custom Tabs Bordered
    const [customActiveTab, setcustomActiveTab] = useState("1");
    const toggleCustom = (tab) => {
        if (customActiveTab !== tab) {
            setcustomActiveTab(tab);
        }
    };

    document.title = `${ProjectName} | Documents `;

    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="Documents" pageTitle="Documents" location={"/admin/menu"} />
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
                                                        SME Advisor
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                        <div classnames="clearfix"></div>
                                        <TabContent activeTab={customActiveTab} className="text-muted mt-4">
                                            <TabPane tabId="1" id="home1">
                                                <EntrepreneurTbl />
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <InvestorTbl />
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <SMEAdvisorTbl />
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>

        </>

    );
};

export default Tab;
