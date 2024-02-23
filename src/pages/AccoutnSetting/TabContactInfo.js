import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";

const TabContactInfo = () => {
    return (
        <React.Fragment>
            <Form>
                <Row>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="emailInput" className="form-label">Email<span className='text-danger'>*</span> </Label>
                            <Input type="email" className="form-control" id="emailInput"
                                  />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="phonenumberInput" className="form-label">Phone
                                Number</Label>
                            <Input type="text" className="form-control"
                                id="phonenumberInput"
                                placeholder="Enter your phone number"
                                defaultValue="8587988504" />
                        </div>
                    </Col>
                  
                    <Col lg={12}>
                        <div className="mb-3 pb-2">
                            <Label htmlFor="exampleFormControlTextarea"
                                className="form-label">Address</Label>
                            <textarea className="form-control"
                                id="exampleFormControlTextarea"
                                rows="3" defaultValue="Module No.6, Sixth Floor , Block A - Phase II, IIT Madras Research Park, Kanagam Road , Taramani, Chennai, Tamil Nadu 600113"></textarea>
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

export default TabContactInfo;