import React, { useState } from "react";
import { Col, Container, Row, Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import InvestorDashboardtbl from "./indexPages/InvestorDashboardtbl";
import FilingLabels from "./indexPages/FilingLabels";
import DashboardDisplaySetting from "./indexPages/DashboardDisplaySetting";
import PaymentGateway from "./indexPages/PaymentGateway";
import MembershipExpired from "./indexPages/MembershipExpired";


const Index = () => {

    document.title = `${ProjectName} | Investor Dashboard`;
    const [open, setOpen] = useState('1');

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
                    <BreadCrumb title="Investor Dashboard" pageTitle="Investor Dashboard" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Accordion className="custom-accordionwithicon-plus" open={open} toggle={toggleAccordion} >
                                <AccordionItem>
                                    <AccordionHeader targetId="1">Manage investor dashboard labels </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <Row className="align-items-center">
                                            <Col lg={12}>
                                                <InvestorDashboardtbl />
                                            </Col>
                                        </Row>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            <Accordion className="custom-accordionwithicon-plus" open={open} toggle={toggleAccordion} >
                                <AccordionItem>
                                    <AccordionHeader targetId="2">Manage investor dashboard filing labels</AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <Row className="align-items-center">
                                            <Col lg={12}>
                                                <FilingLabels />
                                            </Col>
                                        </Row>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            <Accordion className="custom-accordionwithicon-plus" open={open} toggle={toggleAccordion} >
                                <AccordionItem>
                                    <AccordionHeader targetId="3">Manage investor dashboard display setting</AccordionHeader>
                                    <AccordionBody accordionId="3">
                                        <Row className="align-items-center">
                                            <Col lg={12}>
                                                <DashboardDisplaySetting />
                                            </Col>
                                        </Row>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            <Accordion className="custom-accordionwithicon-plus" open={open} toggle={toggleAccordion} >
                                <AccordionItem>
                                    <AccordionHeader targetId="4">Manage direct pay payment gateway</AccordionHeader>
                                    <AccordionBody accordionId="4">
                                        <Row className="align-items-center">
                                            <Col lg={12}>
                                                <PaymentGateway />
                                            </Col>
                                        </Row>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            <Accordion className="custom-accordionwithicon-plus" open={open} toggle={toggleAccordion} >
                                <AccordionItem>
                                    <AccordionHeader targetId="5">Investor can see following pages after membership expired</AccordionHeader>
                                    <AccordionBody accordionId="5">
                                        <Row className="align-items-center">
                                            <Col lg={12}>
                                                <MembershipExpired />
                                            </Col>
                                        </Row>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Index;
