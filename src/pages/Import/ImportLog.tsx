import React from "react";
import {  Row, Col, Card, CardBody, } from "reactstrap";
import { Link } from "react-router-dom";

const ImportLog = () => {

    return (
        <>
            <Col md={6}>
                <Card>
                    <CardBody>
                        <Row className="align-items-center">
                            <Col sm={10} xs={10}>
                                <p className="fs-12 mb-1">Import Log</p>
                            </Col>
                            <Col sm={2} xs={2} className="icon-demo-content text-end">
                                <Link to="/importLog"><i className="las la-arrow-right"></i></Link>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default ImportLog;
