import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Col } from "reactstrap";

const EditWorkFlow = ({ show, onCloseClick }) => {

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Edit Workflow Task Reason
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <div>
                        <Col lg={12}>
                            <div className="mb-3 pb-2">
                                <Label htmlFor="note"
                                className="form-label">Reason</Label>
                                <textarea className="form-control"
                                id="note" placeholder="Reason"
                                rows="3" defaultValue=""></textarea>
                            </div>
                        </Col>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme  "
                        onClick={onCloseClick}
                    >
                        Apply
                    </button>
                    <button
                        className="btn btn-light  "
                        onClick={onCloseClick}
                    >
                        Clear Filter
                    </button>

                </div>
            </form>
        </Offcanvas>
    );
};

export default EditWorkFlow;
