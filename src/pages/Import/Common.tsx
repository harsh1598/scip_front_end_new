import React from "react";
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from "react-router-dom";

const Common = ({ name, setShow, link }: any) => {
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <CardBody>
                        <Row className="align-items-center">
                            <Col sm={8} xs={8}>
                                <p className="fs-12 mb-1">{name}</p>
                            </Col>
                            <Col sm={4} xs={4} className="icon-demo-content text-end ">
                                {/* <Link to="#" onClick={e => setShow(true)}><i className="las la-arrow-right "></i></Link> */}
                                <Link to="#" onClick={e => setShow(true)}><i className="las la-plus"></i></Link>
                                <Link to={link}><i className="ri-eye-line"></i></Link>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Common;
