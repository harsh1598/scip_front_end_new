import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import Select from "react-select";

const TabAdvanceSettings = () => {

    const [selectedGroup2, setSelectedGroup2] = useState(null);
    function handleSelectGroups2(selectedGroup2) {
        setSelectedGroup2(selectedGroup2);
    }

    const [selectedCountry, setSelectedCountry] = useState(null);
    function handleSelectCountry(selectedCountry) {
        setSelectedCountry(selectedCountry);
    }

    const [selectedState, setSelectedState] = useState(null);
    function handleSelectState(selectedState) {
        setSelectedState(selectedState);
    }
    const [selectedCity, setSelectedCity] = useState(null);
    function handleSelectCity(selectedCity) {
        setSelectedCity(selectedState);
    }

    const GroupOptions2 = [
        { value: 'Dr.', label: 'Dr.' },
        { value: 'Mr.', label: 'Mr.' },
        { value: 'Mrs.', label: 'Mrs.' },
        { value: 'Ms', label: 'Ms' },
        { value: 'Other', label: 'Other' },
        { value: 'Prof.', label: 'Prof.' },
        { value: 'Rev.', label: 'Rev.' },
    ];
    const CountryOptions = [
        { value: 'India', label: 'India' },
        { value: 'America', label: 'America' },
        { value: 'Jermany', label: 'Jermany' },
        { value: 'Japan', label: 'Japan' },
        { value: 'Australia', label: 'Australia' },
        { value: 'Rusia', label: 'Rusia' },
        { value: 'UAE.', label: 'UAE' },
    ];
    const StateOptions = [
        { value: 'Maharashtra', label: 'Maharashtra' },
        { value: 'Uttarakhand', label: 'Uttarakhand' },
        { value: 'Asam', label: 'Asam' },
        { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
        { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
        { value: 'Punjab', label: 'Punjab' },
        { value: 'Hariyana.', label: 'Hariyana' },
    ];
    const CityOptions = [
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Nagpur', label: 'Nagpur' },
        { value: 'Pune', label: 'Pune' },
        { value: 'Aurangabad', label: 'Aurangabad' },
    ];
    return (
        <React.Fragment>
            <Form>
                <Row>
                    <Col md={12}>
                        <div className='border-bottom mb-3'>
                            <h3 className='fs-5 text-dark mb-2'>Admin Details</h3>
                        </div>
                    </Col>
                    <Col md={2} >
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Title  </Label>
                            <Select
                                isClearable={true}
                                value={selectedGroup2}
                                onChange={() => {
                                    handleSelectGroups2();
                                }}
                                options={GroupOptions2}
                            />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="mb-3">
                            <Label htmlFor="firstnameInput" className="form-label">First
                                Name</Label>
                            <Input type="text" className="form-control" id="firstnameInput"
                                placeholder="Enter your firstname" defaultValue="Smriti" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="mb-3">
                            <Label htmlFor="lastnameInput" className="form-label">Last
                                Name</Label>
                            <Input type="text" className="form-control" id="lastnameInput"
                                placeholder="Enter your lastname" defaultValue="Misra" />
                        </div>
                    </Col>

                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="emailInput" className="form-label">Email Address</Label>
                            <Input type="email" className="form-control" id="emailInput"
                                placeholder="Enter your email"
                                 />
                        </div>
                    </Col>
                    <Col md={12} className='mt-3'>
                        <div className='border-bottom mb-3'>
                            <h3 className='fs-5 text-dark mb-2'>Company Details</h3>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="CompanyName" className="form-label">Company Name</Label>
                            <Input type="text" className="form-control" id="CompanyName" defaultValue="Sciptorn" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="TAXnumber" className="form-label">VAT / TAX number</Label>
                            <Input type="text" className="form-control" id="TAXnumber" defaultValue="3454354545" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="website" className="form-label">Website</Label>
                            <Input type="url" className="form-control" id="website" defaultValue="http://dev.scip.co" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="GSTIN" className="form-label">GSTIN</Label>
                            <Input type="text" className="form-control" id="GSTIN"  defaultValue="GST4543554545" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="PanNo" className="form-label">PAN NO.</Label>
                            <Input type="text" className="form-control" id="PanNo"  defaultValue="CLMPM4983K" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="AccountName" className="form-label">Account Name</Label>
                            <Input type="text" className="form-control" id="AccountName"  defaultValue="Scip A" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="AccountName" className="form-label">Account Name</Label>
                            <Input type="text" className="form-control" id="AccountName"  defaultValue="Scip A" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="AccountNo" className="form-label">Account Number</Label>
                            <Input type="number" className="form-control" id="AccountNo"  defaultValue="3434345656546" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="AccountNo" className="form-label">IFSC Code</Label>
                            <Input type="text" className="form-control" id="AccountNo"  defaultValue="SBIN00004" />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3 pb-2">
                            <Label htmlFor="note"
                                className="form-label">Notes</Label>
                            <textarea className="form-control"
                                id="note"
                                rows="3" defaultValue=" write not here"></textarea>
                        </div>
                    </Col>
                    <Col md={12} className='mt-3'>
                        <div className='border-bottom mb-3'>
                            <h3 className='fs-5 text-dark mb-2'>Contact Details</h3>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="AccountNo" className="form-label">Country</Label>
                            <Select
                                isClearable={true}
                                value={selectedCountry}
                                onChange={() => {
                                    handleSelectCountry();
                                }}
                                options={CountryOptions}
                            />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="AccountNo" className="form-label">State</Label>
                            <Select
                                isClearable={true}
                                value={selectedState}
                                onChange={() => {
                                    handleSelectState();
                                }}
                                options={StateOptions}
                            />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="AccountNo" className="form-label">State Code</Label>
                            <Input type="text" className="form-control" id="AccountNo"  defaultValue="SBIN00004" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="AccountNo" className="form-label">City</Label>
                            <Select
                                isClearable={true}
                                value={selectedCity}
                                onChange={() => {
                                    handleSelectCity();
                                }}
                                options={CityOptions}
                            />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="pin" className="form-label">Pin/Zip</Label>
                            <Input type="text" className="form-control" id="pin"  defaultValue="56456455" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="phone" className="form-label">Phone</Label>
                            <Input type="text" className="form-control" id="phone"  defaultValue="8855221144" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="mb-3">
                            <Label htmlFor="fax" className="form-label">Fax</Label>
                            <Input type="text" className="form-control" id="fax"  defaultValue="65645645656" />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="address" className="form-label">Address</Label>
                            <Input type="text" className="form-control" id="address"  defaultValue="21 mg road pune maharashtra" />
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

export default TabAdvanceSettings;