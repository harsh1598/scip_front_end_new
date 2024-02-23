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
import { Link } from "react-router-dom";

const CallForMoney = ({ show, onCloseClick }) => {
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
                Call For Money
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
            <OffcanvasBody>
                <Row>
                    <Col lg={12}>
                        <div className="mb-2">
                            <Label htmlFor="name-field" className="form-label">Campaign Name</Label>
                            <Input
                            name="name" id="customername-field" className="form-control"  placeholder="Enter Campaign Name " type="text"
                            validate={{
                                required: { value: true },
                            }}
                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-2">
                            <Label htmlFor="name-field" className="form-label">Raising Amount</Label>
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1">INR</span>
                                <Input type="text" class="form-control" placeholder="50000001" aria-label="Username" aria-describedby="basic-addon1"  disabled
                                validate={{
                                    required: { value: true },
                                }} 
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-2">
                            <Label htmlFor="name-field" className="form-label">Total Final Commitment</Label>
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1">INR</span>
                                <Input type="text" class="form-control" placeholder="337100000" aria-label="Username" aria-describedby="basic-addon1"  disabled
                                validate={{
                                    required: { value: true },
                                }} 
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="table-responsive table-card mt-1 mb-2">
                            <table className="table table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <td className="fw-medium">
                                            efwef :
                                        </td>
                                        <td>1,000 INR</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-2">
                           <span>Investment Instrument</span><br></br>
                           <span><i className="bx bxs-chevrons-right me-2"></i>Equity   </span>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <Link to="#" className="breadcrumb-item" > Click here to add Tranche</Link>
                    </Col>
                    <Col lg={12}>
                        <div className="mt-3">
                            <div className="form-check">
                                <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                <Label className="form-check-label" htmlFor="auth-remember-check">Send notification to investors  </Label>
                            </div>
                        </div>
                        <div className="mt-0">
                            <p>Note – Please select the check box to inform investors via a notification and email that Deal Documentation is completed for Survya Co Watcon Seed 2, and the Deal is in Call for Money stage on the mobile App and the web platform.</p>
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

export default CallForMoney;

