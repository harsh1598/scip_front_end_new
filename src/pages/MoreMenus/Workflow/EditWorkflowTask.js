import React from "react";
import { useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Input,
    Row,
    Col,
} from "reactstrap";
import Select from "react-select";
import Flatpickr from "react-flatpickr";

const EditWorkflowTask = ({ show, onCloseClick }) => {

    const [formData, setFormData] = useState({});

    const CompanyStageList = [
        { value: 'Admin', label: 'Admin' },
        { value: 'Investor', label: 'Investor' },
        { value: 'SMEAdvisor', label: 'SME Advisor' },
    ];

    const handleChange = (name, event, index=null)=>{   

        let form = {...formData};

        form[name] = event.target.value;
        
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
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Workflow <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="file"
                                    value={formData.file?formData.file:[]}
                                    onChange={e=>handleChange("file", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Milestone <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="file"
                                    value={formData.file?formData.file:[]}
                                    onChange={e=>handleChange("file", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Task <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="file"
                                    value={formData.file?formData.file:[]}
                                    onChange={e=>handleChange("file", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Company <span className='text-danger'>*</span></Label>
                                <Input
                                    name="name" id="customername-field"
                                    className="form-control" placeholder="Enter Company" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Assigned To <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="file"
                                    value={formData.file?formData.file:[]}
                                    onChange={e=>handleChange("file", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Rubric/Note</Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="file"
                                    value={formData.file?formData.file:[]}
                                    onChange={e=>handleChange("file", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Due Date <span className='text-danger'>*</span></Label>
                                <Flatpickr
                                    className="form-control date-picker-icon"
                                    // id="datepicker-publish-input"
                                    name="date"
                                    placeholder="Select a date"
                                    value={formData.date?formData.date:[]}
                                    onChange={e => handleChange('date',e,'multi' )}
                                    options={{
                                        mode: "single",
                                        dateFormat: "m"
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </OffcanvasBody>
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

export default EditWorkflowTask;
