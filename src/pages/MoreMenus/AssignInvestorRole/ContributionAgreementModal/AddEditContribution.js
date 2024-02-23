import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
    Input,
} from "reactstrap";
import Select from "react-select";
import { useState } from "react";
import Flatpickr from "react-flatpickr";

const AddEditContribution = ({ show, onCloseClick }) => {

    const [formData, setFormData] = useState({});

    const handleChange = (name, event, index = null) => {

        let form = { ...formData };

        if (index === 'multi') {
            form[name] = event;
        } else {
            form[name] = event.value;
        }

        setFormData({ ...formData, ...form });

    }

    const CompanyStageList = [
        { value: 'Active', label: 'Active' },
        { value: 'InActive', label: 'InActive' },
        { value: 'Deleted', label: 'Deleted' },
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
                Add
            </OffcanvasHeader>
            {/*  h-100 */}
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Investor / Member <span className='text-danger'>*</span> </Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="profile"
                                        value={formData.profile ? formData.profile : []}
                                        onChange={e => handleChange("profile", e, 'multi')}
                                        options={CompanyStageList}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Sign Date  <span className='text-danger'>*</span> </Label>
                                    <Flatpickr
                                        className="form-control date-picker-icon"
                                        name="date"
                                        placeholder="Select a date"
                                        onChange={e => handleChange('date', e, 'multi')}
                                        options={{
                                            mode: "range",
                                            dateFormat: "d-m-Y",
                                            allowInput: true
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Expiry Date <span className='text-danger'>*</span> </Label>
                                    <Flatpickr
                                        className="form-control date-picker-icon"
                                        name="date"
                                        placeholder="Select a date"
                                        onChange={e => handleChange('date', e, 'multi')}
                                        options={{
                                            mode: "range",
                                            dateFormat: "d-m-Y",
                                            allowInput: true
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="timezone" className="form-label">Agreement Amount <span className='text-danger'>*</span> </Label>
                                    <Input
                                        name="leadInvestorName" id="customername-field" className="form-control"
                                        placeholder="" type="text"
                                        value={formData.leadInvestorName ? formData.leadInvestorName : ""}
                                        onChange={e => handleChange("leadInvestorName", e)}
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="timezone" className="form-label">Remarks </Label>
                                    <textarea className="form-control"
                                        id="note" placeholder=""
                                        rows="3" defaultValue=""></textarea>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="button"
                        className="btn btn-brand-theme  "
                        onClick={onCloseClick}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
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

export default AddEditContribution;
