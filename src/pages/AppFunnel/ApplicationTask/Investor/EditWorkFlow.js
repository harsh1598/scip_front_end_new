import React, { useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Col } from "reactstrap";
import Select from "react-select";
import * as moment from "moment";
import Flatpickr from "react-flatpickr";

const EditWorkFlow = ({ show, onCloseClick }) => {

    const [formData, setFormData] = useState({ });
    const CompanyStageList = [
        { value: 'Beta', label: 'Beta' },
        { value: 'Concept', label: 'Concept' },
        { value: 'Idea', label: 'Idea' },
        { value: 'PreRevenue ', label: 'Pre Revenue ' },
        { value: 'Revenue ', label: 'Revenue' },
        { value: 'All ', label: 'All ' }
    ];

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

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Edit Workflow Task
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <div>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label"> Company <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="workflow"
                                    value={formData.workflow ? formData.workflow : []}
                                    onChange={e=>handleChange("workflow", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Workflow  <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="workflow"
                                    value={formData.workflow ? formData.workflow : []}
                                    onChange={e=>handleChange("workflow", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Milestone  <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="milestone"
                                    value={formData.milestone ? formData.milestone : []}
                                    onChange={e=>handleChange("milestone", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Task  <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="task"
                                    value={formData.task ? formData.task : []}
                                    onChange={e=>handleChange("task", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Assigned To  <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="assignedTo"
                                    value={formData.assignedTo ? formData.assignedTo : []}
                                    onChange={e=>handleChange("assignedTo", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Due Date <span className='text-danger'>*</span> </Label>
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

export default EditWorkFlow;
