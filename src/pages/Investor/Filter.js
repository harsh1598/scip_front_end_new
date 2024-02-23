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
import SimpleBar from "simplebar-react";

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

    // const handleChange = (name, event, index=null ,)=>{   

    //     let form = {...formData};
    //     if(index === 'multi'){
    //         form[name] = event;
    //     }else{
    //         if(name==='date'){

    //             let Date= event;
    //             let DateCount =  Object.values(Date); 
    //             if(DateCount.length > 1){
    //                 let date1 = moment(DateCount[0].toString()).format('DD/MM/YYYY');
    //                 let date2 = moment(DateCount[1].toString()).format('DD/MM/YYYY');
    //                 let finalDate = {"date1":date1 , "date2":date2};
    //                 form[name] = finalDate;
    //             }else{
    //                 form[name] = moment(Date.toString()).format('DD/MM/YYYY');
    //             }

    //         }else{
    //             form[name] = event.target.value;
    //         }
         
    //     }
    //     setFormData({...formData, ...form});
  
    // }


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
        { value: 'registrationDate', label: 'Registration Date' },
        { value: 'headquarters', label: 'Headquarters' },
        { value: 'companyWebsite', label: 'Company Website' },
        { value: 'companyFounded ', label: 'Company Founded' },
        { value: 'roundOfInvestment ', label: 'Round Of Investment' }
    ];

    const ZoneList = [
        { value: 'userCode', label: 'East' },
        { value: 'userName', label: 'Gujarat' },
        { value: 'companyBrand', label: 'KKG' },
        { value: 'companyStage ', label: 'MPCG ' },
        { value: 'emailId ', label: 'Mumbai' },
        { value: 'contactNo ', label: 'North ' },
        { value: 'registrationDate', label: 'North Zone' },
        { value: 'submissionDate', label: 'Rajasthan' },
        { value: 'campaignStatus', label: 'ROM' },
        { value: 'industry ', label: 'TNAPTS' }
    ];

    const CityList = [
        { value: 'userCode', label: 'East' },
        { value: 'userName', label: 'Gujarat' },
        { value: 'companyBrand', label: 'KKG' },
        { value: 'companyStage ', label: 'MPCG ' },
        { value: 'emailId ', label: 'Mumbai' },
        { value: 'contactNo ', label: 'North ' },
        { value: 'registrationDate', label: 'North Zone' },
        { value: 'submissionDate', label: 'Rajasthan' },
        { value: 'campaignStatus', label: 'ROM' },
        { value: 'industry ', label: 'TNAPTS' }
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
                Investor Filters
            </OffcanvasHeader>
            {/*  h-100 */}
            <form action="" className="d-flex flex-column justify-content-end">
                <SimpleBar style={{ height: "84vh" }}>
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
                                        <Label htmlFor="timezone" className="form-label">Profile </Label>
                                        <Select
                                            isClearable={true}
                                            // isMulti
                                            name="profile"
                                            value={formData.profile?formData.profile:[]}
                                            onChange={e=>handleChange("profile", e, 'multi')}
                                            options={CompanyStageList}
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">Application </Label>
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
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">Membership </Label>
                                        <Select
                                            isClearable={true}
                                            // isMulti
                                            name="approval"
                                            value={formData.membership?formData.membership:[]}
                                            onChange={e=>handleChange("membership", e, 'multi')}
                                            options={CompanyStageList}
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">Zone </Label>
                                        <Select
                                            isClearable={true}
                                            // isMulti
                                            name="zone"
                                            value={formData.zone?formData.zone:[]}
                                            onChange={e=>handleChange("zone", e, 'multi')}
                                            options={ZoneList}
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">City </Label>
                                        <Select
                                            isClearable={true}
                                            // isMulti
                                            name="city"
                                            value={formData.city?formData.city:[]}
                                            onChange={e=>handleChange("city", e, 'multi')}
                                            options={CityList}
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
                </SimpleBar>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme  "
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
