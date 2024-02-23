import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';

//import images
import progileBg from '../../assets/images/profile-bg.jpg';

const ContactSupport = () => {

    document.title = "Contact Support | Admin";

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
                            <h4 className="text-white mb-0 me-2 pb-3">Contact Support</h4>
                            <Card>
                                <CardHeader>
                                    <h3 className='card-title'>Keep in touch</h3>
                                    <p className='mb-0'>Our help line is always open to receive any inquiry or feedback. Please feel free to drop us an email from the form below and we will get back to you as soon as we can.</p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="name" className="form-label">Name<span className='text-danger'>*</span> </Label>
                                                <Input type="text" className="form-control" id="name"/>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label htmlFor="emailInput" className="form-label">Email<span className='text-danger'>*</span> </Label>
                                                <Input type="email" className="form-control" id="emailInput"/>
                                            </div>
                                        </Col>
                                      

                                        <Col lg={12}>
                                            <div className="mb-3 pb-2">
                                                <Label htmlFor="Message" className="form-label">Message</Label>
                                                <textarea className="form-control" id="Message" placeholder="write message" rows="3"></textarea>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="hstack gap-2 justify-content-end">
                                                <button type="button" className="btn btn-brand-theme">Submit</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ContactSupport;