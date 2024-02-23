import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
  } from "reactstrap";
  import Select from "react-select";
  import Flatpickr from "react-flatpickr";

const EditkanbanTask = ({ show, onCloseClick }) => {

    const CompanyStatus = [
        { value: 'Investor', label: 'Yes' },
        { value: 'Investor', label: 'No' }
    ];

    const handleChange = (name, event, index=null)=>{   

    }

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Edit Assign Task
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
            <OffcanvasBody>
                <Row>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Milestone<span className='text-danger'>*</span> </Label>
                            <Select
                                isClearable={true}
                                placeholder="Select "
                                // isMulti
                                name="applicationstatus"
                                options={CompanyStatus}
                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Task</Label>
                            <Select
                                isClearable={true}
                                placeholder="Select "
                                // isMulti
                                name="applicationstatus"
                                options={CompanyStatus}
                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Task Title<span className='text-danger'>*</span></Label>
                            <Select
                                isClearable={true}
                                placeholder="Select "
                                // isMulti
                                name="applicationstatus"
                                options={CompanyStatus}
                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Priority<span className='text-danger'>*</span></Label>
                            <Select
                                isClearable={true}
                                placeholder="Select "
                                // isMulti
                                name="applicationstatus"
                                options={CompanyStatus}
                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Due Date </Label>
                            <Flatpickr
                                className="form-control date-picker-icon"
                                name="date"
                                placeholder="Select a date"
                                onChange={e => handleChange('date',e,'multi' )}
                                options={{
                                    mode: "range",
                                    dateFormat: "d-m-Y",
                                    allowInput:true
                                }}
                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Assigned To<span className='text-danger'>*</span></Label>
                            <Select
                                isClearable={true}
                                placeholder="Select "
                                // isMulti
                                name="applicationstatus"
                                options={CompanyStatus}
                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Assigned To Users<span className='text-danger'>*</span></Label>
                            <Select
                                isClearable={true}
                                placeholder="Select "
                                // isMulti
                                name="applicationstatus"
                                options={CompanyStatus}
                            />
                        </div>
                    </Col>
                </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme"
                        onClick={onCloseClick}
                    >
                        Ok
                    </button>
                    <button
                        className="btn btn-light"
                        onClick={onCloseClick}
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </Offcanvas>
    );
};

export default EditkanbanTask;

