import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Input,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";
  import Select from "react-select";
  import Flatpickr from "react-flatpickr";

const Evaluation = ({ show, onCloseClick }) => {

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
                Evaluation
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
            <OffcanvasBody>
                <Row>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Evaluation Status</Label>
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
                            <UncontrolledTooltip placement="right" target="Date">
                                Select a date to set a reminder and review the deal status.
                            </UncontrolledTooltip>
                            <Label htmlFor="timezone" className="form-label">Reminder Date <i className="ri-information-fill align-bottom "  id="Date"></i> </Label>
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
                        <div >
                            <div className="form-check">
                                <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                <Label className="form-check-label" htmlFor="auth-remember-check">Send notification to investors  </Label>
                            </div>
                        </div>
                        <div className="mt-0">
                            <p>Note – Please select the check box to inform investors via a notification and email that a new deal is under evaluation and it is visible on the Deals Under Evaluation tile of the mobile App and the web platform.</p>
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

export default Evaluation;

