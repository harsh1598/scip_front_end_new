import React, { useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Input,
    Row,
    Col,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import * as moment from "moment";
import Select from "react-select";

const Filter = ({ show, onCloseClick, formData, setFormData }) => {
    const [tableData, setTableData] = useState({ tableColumns: "" });

    const handleChange = (name, event, index=null)=>{   

        let form = {...formData};

        if(index === 'multi'){
            
            if(name==='date'){
                form[name] = moment(event.toString()).format('DD/MM/YYYY');
            }else{
                form[name] = event;
            }
    
        }else{
          form[name] = event.value;
        }
        
        setFormData({...formData, ...form});
  
    }

    const formhandler = (e, field) => {

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

    const CompanyStageList = [
        { value: 'Beta', label: 'Beta' },
        { value: 'Concept', label: 'Concept' },
        { value: 'Idea', label: 'Idea' },
        { value: 'PreRevenue ', label: 'Pre Revenue ' },
        { value: 'Revenue ', label: 'Revenue' },
        { value: 'All ', label: 'All ' }
    ];

    const applicationstatusList = [
        { value: 'Active', label: 'Active' },
        { value: 'Deactive', label: 'Deactive' }
    ];

    const userApprovalList = [
        { value: 'Approval', label: 'Approval' },
        { value: 'Not Approval', label: 'Not Approval' }
    ];

    const radioList = [
        { value: 'userCode', label: 'User Code' },
        { value: 'userName', label: 'User Name' },
        { value: 'emailId ', label: 'Email Id' },
        { value: 'contactNo ', label: 'Contact No ' },
        { value: 'address', label: 'Address' },
        { value: 'category', label: 'Category' },
        { value: 'companyName', label: 'Company Name' },
        { value: 'registrationDate ', label: 'Registration Date' },
        { value: 'submissionDate ', label: 'Submission Date' },
        { value: 'hearFrom ', label: 'Hear From' }
    ];

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-md"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                SME Advisor Filters
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Label
                            htmlFor="leads-tags"
                            className="form-label text-muted text-uppercase fw-semibold mb-3"
                        > Filters
                        </Label>
                        <Row>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Date </Label>
                                    {/* <Input
                                        id="datepicker-publish-input"
                                        name="date"
                                        placeholder="date placeholder"
                                        onChange={e => handleChange( e, 'date')} 
                                        className="form-control date-picker-icon"
                                        type="date"
                                    /> */}
                                    <Flatpickr
                                        className="form-control date-picker-icon"
                                        // id="datepicker-publish-input"
                                        name="date"
                                        placeholder="Select a date"
                                        value={formData.date?formData.date:[]}
                                        onChange={e => handleChange('date',e,'multi' )}
                                        options={{
                                            mode: "single",
                                            dateFormat: "d-m-Y"
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Catgory </Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="category"
                                        value={formData.category?formData.category:[]}
                                        onChange={e=>handleChange("category", e, 'multi')}
                                        options={CompanyStageList}
                                    />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Application Status </Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="applicationstatus"
                                        value={formData.applicationstatus?formData.applicationstatus:[]}
                                        onChange={e=>handleChange("applicationstatus", e, 'multi')}
                                        options={applicationstatusList}
                                    />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Approval </Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="approval"
                                        value={formData.approval?formData.approval:[]}
                                        onChange={e=>handleChange("approval", e, 'multi')}
                                        options={userApprovalList}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
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
                                    return (
                                        <Col lg={6} key={key}>
                                            <div className="form-check">
                                                <Input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="tableColumns"
                                                    id="tableColumns"
                                                    value={item.value}
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
                        className="btn btn-brand-theme "
                        onClick={onCloseClick}
                    >
                        Submit
                    </button>
                    <button
                        className="btn btn-light  "
                        onClick={onCloseClick}
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </Offcanvas>
    );
};

export default Filter;
