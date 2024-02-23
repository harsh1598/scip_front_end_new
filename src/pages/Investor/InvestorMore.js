import React, { useState } from 'react';
import { ProjectName } from "../../Components/constants/layout";
import classnames from "classnames";
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane, Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import InvestmentDetailsFamily from './MoreInfopage/InvestmentDetailsFamily';
import InvestmentDetailsCompany from './MoreInfopage/InvestmentDetailsCompany';
import AuthorizedSignatoryDetails from './MoreInfopage/AuthorizedSignatoryDetails';
import AssistantDetails from './MoreInfopage/AssistantDetails';
import Investment from './MoreInfopage/Investment';

const InvestorMore = () => {

    document.title = `${ProjectName} | More Info`;

    // Custom Tabs Bordered
    const [customActiveTab, setcustomActiveTab] = useState("1");
    const [open, setOpen] = useState('');

    //Toggle tabs
    const toggleCustom = (tab) => {
        if (customActiveTab !== tab) {
            setcustomActiveTab(tab);
        }
    };

    //Toggle Accordion
    const toggleAccordion = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <BreadCrumb title=" More Info" pageTitle=" More Info" location="/investor" />
                    <Row>
                        <Col lg={12}>
                            <Card id="company-view-detail">
                                <CardBody className="">
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
                                                    Investor Directory
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
                                                    Investment
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                    <div classnames="clearfix"></div>
                                    <TabContent activeTab={customActiveTab} className="text-muted mt-4">
                                        <TabPane tabId="1" id="home1">
                                            <Accordion className="custom-accordionwithicon-plus" open={open} toggle={toggleAccordion} >
                                                <AccordionItem>
                                                    <AccordionHeader targetId="1">Investment Details Family</AccordionHeader>
                                                    <AccordionBody accordionId="1">
                                                        <InvestmentDetailsFamily />
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <AccordionHeader targetId="2">Investment Details Company</AccordionHeader>
                                                    <AccordionBody accordionId="2">
                                                        <InvestmentDetailsCompany />
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <AccordionHeader targetId="3">Authorized Signatory Details</AccordionHeader>
                                                    <AccordionBody accordionId="3">
                                                        <AuthorizedSignatoryDetails />
                                                    </AccordionBody>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <AccordionHeader targetId="4">Assistant Details</AccordionHeader>
                                                    <AccordionBody accordionId="4">
                                                        <AssistantDetails />
                                                    </AccordionBody>
                                                </AccordionItem>
                                            </Accordion>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Investment />
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

export default InvestorMore;
