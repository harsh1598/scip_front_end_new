import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";
import Select from "react-select";
import Flatpickr from "react-flatpickr";

const AddEditCustom = ({ show, onCloseClick , formData, setFormData  }) => {

    const handleChange = (name, event, index = '', type = '') => {

        let from = { ...formData };
        if (index !== '') {
            from[name] = event;
        } else {
            from[name] = event.target.value;
        }
        setFormData({ ...formData, ...from });

    }

    const CompanyStageList = [
        { value: 'Beta', label: 'Beta' },
        { value: 'Concept', label: 'Concept' },
        { value: 'Idea', label: 'Idea' },
        { value: 'PreRevenue ', label: 'Pre Revenue ' },
        { value: 'Revenue ', label: 'Revenue' },
        { value: 'All ', label: 'All ' }
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
                {formData.id ? "Edit Report" : " Add Report "}
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                         <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Select Sheet View</Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="type"
                                    value={formData.type ? formData.type : []}
                                    onChange={e => handleChange("type", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Select Company</Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="type"
                                    value={formData.type ? formData.type : []}
                                    onChange={e => handleChange("type", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <UncontrolledTooltip placement="right" target="reportDate" >
                                    Please select the date as per the reporting duration
                                </UncontrolledTooltip>
                                <Label htmlFor="name-field" className="form-label"> Report date <i className="ri-information-fill align-bottom"  id="reportDate"></i></Label>
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
                        <Col lg={12}>
                            <div className="mb-3 ">
                                <Label className="form-label">Report File</Label>
                                <div className="d-flex align-items-center form-control mb-0">
                                    <div className='attachment-btn'>
                                        <input type="file" className='input' />
                                        <i className='ri ri-attachment-line icon' />
                                    </div>
                                    <span className=" text-black-50 ms-1">filename.doc</span>
                                </div>
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

export default AddEditCustom;
