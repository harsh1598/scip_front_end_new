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


const Addfamilymember = ({ show, onCloseClick }) => {


    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Add Family Member / Company Name
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label className="form-label">Member/Company Name</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Member Name"
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="inlineCheckbox1" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox1">Member</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="inlineCheckbox1" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox1">Company</label>
                                </div>
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
                        Submit
                    </button>
                    <button className="btn btn-light" onClick={onCloseClick}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default Addfamilymember;
