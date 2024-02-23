import React, { useState } from 'react';

import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import Select from "react-select";
 


const TabTimeZone = () => {
    const [selectedGroup2, setSelectedGroup2] = useState(null);
    function handleSelectGroups2(selectedGroup2) {
        setSelectedGroup2(selectedGroup2);
    }
    const GroupOptions2 = [
        { value: '(GMT +02:00) Asia,Kolkata', label: '(GMT +02:00) Asia,Kolkata' },
        { value: '(GMT -11:00) Pacific, Midway', label: '(GMT -11:00) Pacific, Midway' },
        { value: '(GMT -11:00) Pacific, Pago Pago', label: '(GMT -11:00) Pacific, Pago Pago' },
        { value: '(GMT -10:00) America, Adak', label: '(GMT -10:00) America, Adak' },
        { value: '(GMT -10:00) Pacific, Honolulu', label: '(GMT -10:00) Pacific, Honolulu' },
        { value: '(GMT -09:00) America, Sitka', label: '(GMT -09:00) America, Sitka' },
        { value: '(GMT -08:00) America, Tijuana', label: '(GMT -08:00) America, Tijuana' },
    ];
    
    return (
        <React.Fragment>
            <Form>
                <Row>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Set Time Zone<span className='text-danger'>*</span> </Label>
                            <Select
                                classNamePrefix="custom-select"
                                isClearable={true}
                                defaultMenuIsOpen={true}
                                value={selectedGroup2}
                                onChange={() => {
                                    handleSelectGroups2();
                                }}
                                options={GroupOptions2}
                                defaultValue={{ label: "(GMT +02:00) Asia,Kolkata", value: "(GMT +02:00) Asia,Kolkata" }}
                            />
                        </div>
                    </Col>
                    <Col lg={12}></Col>
                </Row>
            </Form>
        </React.Fragment>
    );
};

export default TabTimeZone;