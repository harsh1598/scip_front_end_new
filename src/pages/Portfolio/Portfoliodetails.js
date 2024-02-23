import React, { useState } from "react";
import { ProjectName } from "../../Components/constants/layout";
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import 'react-toastify/dist/ReactToastify.css';

import PortfolioTbl from './portfoliodetailspages/PortfolioTbl';
import ExitTbl from './exitpages/ExitTbl';
import PartialExitTbl from './partialexitpages/PartialExitTbl';
import WindingUpTbl from './windingUppages/WindingUpTbl';


const Portfoliodetails = () => {

    document.title = `${ProjectName} | Portfolio Details`;

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
                    <BreadCrumb title="Portfolio Details" pageTitle="Portfolio Details" />
                    <Row>
                        <Col xl={3} lg={6}>
                            <Card className="ribbon-box right overflow-hidden">
                                <CardBody className="text-center p-2">
                                    <h5 className=" mt-1 link-primary"> 30 </h5>
                                    <p className="text-muted">Total No of Investments</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Card className="ribbon-box right overflow-hidden">
                                <CardBody className="text-center p-2">
                                    <h5 className=" mt-1 link-primary"> 2 </h5>
                                    <p className="text-muted">Total No of Exits</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Card className="ribbon-box right overflow-hidden">
                                <CardBody className="text-center p-2">
                                    <h5 className=" mt-1 link-primary"> 5 </h5>
                                    <p className="text-muted">Total No of Partial Exits</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Card className="ribbon-box right overflow-hidden">
                                <CardBody className="text-center p-2">
                                    <h5 className=" mt-1 link-primary"> 1 </h5>
                                    <p className="text-muted">Total No of Winding Up</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            {/* Card id="leadsList"  */}
                            {/* CardBody className="pt-0" */}
                            <Card>
                                <CardBody>
                                    <div className='card-header px-0'>
                                        <Nav tabs className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0 mobile-tabs flex-nowrap pb-0 nav nav-tabs" role="tablist">
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
                                                    Portfolio
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
                                                    Exit
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
                                                    Partial Exit
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
                                                    Winding Up
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                    <div classnames="clearfix"></div>
                                    <TabContent activeTab={customActiveTab} className="text-muted mt-4">
                                        <TabPane tabId="1" id="home1">
                                            <PortfolioTbl />
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <ExitTbl />
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <PartialExitTbl />
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <WindingUpTbl />
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

export default Portfoliodetails;
