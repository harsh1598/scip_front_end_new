import React from "react";
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

const AddEditFilingReport = ({ show, onCloseClick, formData, setFormData }) => {

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
                {formData.id ? "Edit Filing Report" : " Add Filing Report "}
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label"> Filing Report  Title</Label>
                                <Input
                                    name="name" id="customername-field"
                                    className="form-control" placeholder="Enter Filing Report  Title" type="text"
                                    value={formData.reportTitle ? formData.reportTitle : ""}
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label"> Filing Report  Type</Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="user"
                                    value={formData.user ? formData.user : []}
                                    onChange={e => handleChange("user", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label"> Filing Report Duration</Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="user"
                                    value={formData.user ? formData.user : []}
                                    onChange={e => handleChange("user", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Quarter </Label>
                                <select className="form-control" aria-label="Default select example">
                                    <option selected>Select Quarter</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                {/* <Flatpickr
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
                                /> */}
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Year </Label>
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
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Filing Report File </Label>
                                <div className="d-flex align-items-center form-control">
                                    <div className='attachment-btn '>
                                        <input type="file" className='input' />
                                        <i className='ri ri-attachment-line icon' />
                                    </div>
                                    <span className=" text-black-50 ms-1">filename.doc</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">End Date </Label>
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

export default AddEditFilingReport;
