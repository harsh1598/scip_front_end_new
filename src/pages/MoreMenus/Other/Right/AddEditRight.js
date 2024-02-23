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

const AddEditRight = ({ show, onCloseClick , formData }) => {

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
               {formData.id ? "Edit Right " : "Add Right "} 
            </OffcanvasHeader>
            {/*  h-100          <span className='text-danger'>*</span>*/}
    
                <form action="" className="d-flex flex-column justify-content-end h-100">
                    <OffcanvasBody >
                        <div>
                            <Row>
                                <Col lg={12}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">Right Title</Label>
                                        <Input
                                        name="name" id="customername-field"
                                        className="form-control" placeholder="Right Title" type="text"
                                        value={formData.title ? formData.title : "" }
                                        validate={{
                                            required: { value: true },
                                        }}
                                        />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">Description</Label>
                                        <textarea className="form-control" id="note"
                                        value={formData.desc ? formData.desc : "" }
                                        rows="3"  defaultValue=""></textarea>
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

export default AddEditRight;
