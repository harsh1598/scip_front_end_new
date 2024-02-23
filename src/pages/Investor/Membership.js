import React, { useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Input,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import Select from "react-select";

const Membership = ({ show, onCloseClick }) => {
    const CompanyStageList = [
        { value: 'Beta', label: 'Beta' },
        { value: 'Concept', label: 'Concept' },
        { value: 'Idea', label: 'Idea' },
        { value: 'PreRevenue', label: 'Pre Revenue' },
        { value: 'Revenue', label: 'Revenue' },
        { value: 'All', label: 'All' }
      ];
    
    const handleChange = (name, event, index = null,) => {


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
                Membership
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="timezone" className="form-label">Membership Type </Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    // value={formData.profle ? formData.profle : []}
                                    onChange={(e) => {
                                        handleChange("profle", e, 'multi');
                                    }}
                                    options={CompanyStageList}
                                />
                            </div>
                            <div className="mt-3">
                                <UncontrolledTooltip placement="right" target="Password" >
                                    Temporary – User will only have access to their Portfolio. Permanent – User will have access to the complete deal flow on the Platform.
                                </UncontrolledTooltip>
                                <Label htmlFor="timezone" className="form-label">Membership Status <i className="ri-information-fill align-bottom "  id="Password"></i> </Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    // value={formData.profle ? formData.profle : []}
                                    onChange={(e) => {
                                        handleChange("profle", e, 'multi');
                                    }}
                                    options={CompanyStageList}
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

export default Membership;
