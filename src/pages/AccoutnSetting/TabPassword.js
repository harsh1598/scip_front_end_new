import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, UncontrolledAlert } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";

const TabPassword = () => {
    return (
        <React.Fragment>
            <Form>
                <Row>
                    <Col md={6}>
                        <UncontrolledAlert color="warning">
                            <strong>Last Password Change</strong> A simple <b>16/01/2022</b>
                        </UncontrolledAlert>
                    </Col>
                    <Col lg={12}></Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="oldpassword" className="form-label">Old Password<span className='text-danger'>*</span> </Label>
                            <Input type="password" className="form-control" id="oldpassword" />
                        </div>
                    </Col>
                    <Col lg={12}></Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="newpassword" className="form-label">New Password<span className='text-danger'>*</span> </Label>
                            <Input type="password" className="form-control" id="newpassword" />
                        </div>
                    </Col>
                    <Col lg={12}></Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="cofirmpassword" className="form-label">Confirm Password<span className='text-danger'>*</span> </Label>
                            <Input type="password" className="form-control" id="cofirmpassword" />
                        </div>
                    </Col>



                    <Col lg={12}>
                        <div className="hstack gap-2 justify-content-end">
                            <button type="button"
                                className="btn btn-brand-theme">Update</button>
                            <Link to="/profile"
                                className="btn btn-soft-danger">Cancel</Link>
                        </div>
                    </Col>
                </Row>
            </Form>
        </React.Fragment>
    );
};

export default TabPassword;