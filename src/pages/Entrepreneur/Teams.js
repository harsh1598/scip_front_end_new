import React, { useState, useMemo } from "react";
import { Col, Container, Row, Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { ProjectName } from "../../Components/constants/layout";
import AccessDetails from "./TeamsPage/AccessDetails";
import SignatoryDetails from "./TeamsPage/SignatoryDetails";

const Teams = () => {

    document.title = `${ProjectName} | Team Info`;
    
    const [open, setOpen] = useState('');

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
                    <BreadCrumb title="Team" pageTitle="Team" location={"/entrepreneur"} />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <Accordion className="custom-accordionwithicon-plus" open={open} toggle={toggleAccordion} >
                                        <AccordionItem>
                                            <AccordionHeader targetId="1">Team Member Access Details</AccordionHeader>
                                            <AccordionBody accordionId="1">
                                                <AccessDetails />
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="2">Authorized Signatory Details</AccordionHeader>
                                            <AccordionBody accordionId="2">
                                                <SignatoryDetails />
                                            </AccordionBody>
                                        </AccordionItem>
                                    </Accordion>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Teams;
