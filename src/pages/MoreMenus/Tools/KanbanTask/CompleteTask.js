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

const CompleteTask = ({ show, onCloseClick }) => {

    const [formData, setFormData] = useState({});

    const handleChange = (name, event, index = null) => {

        let form = { ...formData };
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
                Complete Task
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mt-1">
                                <b>Please check below respective user to complete there task.</b>  
                            </div>
                            <div className="mt-3">
                                <div className="form-check">
                                    <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                    <Label className="form-check-label" htmlFor="auth-remember-check">gayathri verma </Label>
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

export default CompleteTask;
