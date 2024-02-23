import React, { useState } from "react";
import { Col, Container, Row, Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import ShareSale from "./ShareSale";
import MessageSend from "./MessageSend";

const Setting = () => {

    document.title = `${ProjectName} | Setting`;
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
                    <BreadCrumb title="Setting" pageTitle="Setting" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Accordion className="custom-accordionwithicon-plus" open={open} toggle={toggleAccordion} >
                                <AccordionItem>
                                    <AccordionHeader targetId="1"> Manage Share Sale Back Settings </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <Row className="align-items-center">
                                            <Col lg={12}>
                                                <ShareSale />
                                            </Col>
                                        </Row>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            <Accordion className="custom-accordionwithicon-plus" open={open} toggle={toggleAccordion} >
                                <AccordionItem>
                                    <AccordionHeader targetId="2">Manage Message Send Days/Month </AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <Row className="align-items-center">
                                            <Col lg={12}>
                                                <MessageSend />
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

export default Setting;
