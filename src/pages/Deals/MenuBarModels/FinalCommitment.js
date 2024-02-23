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

const FinalCommitment = ({ show, onCloseClick }) => {
    const CompanyStageList = [
        { value: 'Investor', label: 'All Investors' },
        { value: 'Investor', label: 'Selected Investors' },
        { value: 'PE', label: 'Team' },
        { value: 'VC', label: 'None' }
    ];

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
                Final Commitment
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
            <OffcanvasBody>
                <Row>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Final Commitment Status</Label>
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
                            <Label htmlFor="timezone" className="form-label">Reminder Date </Label>
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
                            <Label  htmlFor="name-field" className="form-label"> Minimum Amount  </Label>
                            <Input
                                name="amount" id="customername-field" className="form-control" 
                                placeholder="Enter Password"  type="text"
                                validate={{
                                required: { value: true },
                                }}
                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label"> Open The Deal To </Label>
                            <Select
                                isClearable={true}
                                placeholder="Select "
                                // isMulti
                                name="applicationstatus"
                                options={CompanyStageList}
                            />
                        </div>
                        <div className="mt-3">
                            <div className="form-check">
                                <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                <Label className="form-check-label" htmlFor="auth-remember-check">Send notification to investors  </Label>
                            </div>
                        </div>
                        <div className="mt-0">
                            <p>Note – Please select the check box to inform investors via a notification and email the deal Survya Co Watcon Seed 2 has received required investment commitment. It is visible on the Final Commitment tile of the mobile App and the web platform. As DD, SHA and SSA, etc. become available they can be accessed on the mobile App and Web.</p>
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

export default FinalCommitment;

