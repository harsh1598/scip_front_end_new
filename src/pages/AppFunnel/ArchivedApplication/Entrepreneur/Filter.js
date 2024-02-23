import React, { useState } from "react";
import {  Offcanvas,  OffcanvasHeader, OffcanvasBody, Label, Row,  Col, Input} from "reactstrap";

const Filter = ({ show, onCloseClick, formData, setFormData }) => {
    const [tableData, setTableData] = useState({ tableColumns: "" });

    const formhandler = (e, field, type = '') => {

        let data = { ...tableData };
        if (e.target.checked) {

            if (!data[field]) { data[field] = []; }

            data[field].push(e.target.value);

        } else {
            var index = data[field].indexOf(e.target.value);
            if (index !== -1) {
                data[field].splice(index, 1);
            }
        }
        setTableData(data);
    }

    const radioList = [
        { value: 'userCode', label: 'User Code' },
        { value: 'userName', label: 'User Name' },
        { value: 'companyBrand', label: 'Company / Brand' },
        { value: 'companyStage ', label: 'Company Stage ' },
        { value: 'emailId ', label: 'Email Id' },
        { value: 'contactNo ', label: 'Contact No ' },
        { value: 'registrationDate', label: 'Registration Date' },
        { value: 'submissionDate', label: 'Submission Date' },
        { value: 'campaignStatus', label: 'Campaign Status' },
        { value: 'industry ', label: 'Industry' },
        { value: 'sector ', label: 'Sector' },
        { value: 'registeredOffice ', label: 'Registered Office' },
        { value: 'headquarters', label: 'Headquarters' },
        { value: 'companyWebsite', label: 'Company Website' },
        { value: 'companyFounded ', label: 'Company Founded' },
        { value: 'roundOfInvestment ', label: 'Round Of Investment' }
    ];

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Filters
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <div>
                        <Label
                            htmlFor="leads-tags"
                            className="form-label text-muted text-uppercase fw-semibold mb-3"
                        >
                            Table Columns
                        </Label>
                        <Row className="g-3">
                            {
                                radioList.map((item, key) => {
                                    let check = tableData.tableColumns && tableData.tableColumns.length && tableData.tableColumns.includes(item.value) ? true : false;
                                    // console.log(check)
                                    return (
                                        <Col lg={6} key={key}>
                                            <div className="form-check">
                                                <Input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="tableColumns"
                                                    id="tableColumns"
                                                    Value={item.value}
                                                    onChange={e => formhandler(e, 'tableColumns', 'checkbox')}
                                                    checked={check}
                                                />
                                                <Label className="form-check-label" htmlFor={item.label}>
                                                    {item.label}
                                                </Label>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme  "
                        onClick={onCloseClick}
                    >
                        Apply
                    </button>
                    <button
                        className="btn btn-light  "
                        onClick={onCloseClick}
                    >
                        Clear Filter
                    </button>

                </div>
            </form>
        </Offcanvas>
    );
};

export default Filter;
