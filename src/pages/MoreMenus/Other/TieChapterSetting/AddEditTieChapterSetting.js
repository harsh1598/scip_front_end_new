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

import SimpleBar from "simplebar-react";

const AddEditTieChapterSetting = ({ show, onCloseClick , formData , setFormData }) => {

    const handleChange = (name, event, index = null) => {


    }

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-md">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Edit SEO
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end ">
                <SimpleBar style={{ height: "84vh" }}>
                    <OffcanvasBody>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label"> Title </Label>
                                    <Input
                                        name="title" id="customername-field" className="form-control"
                                        placeholder="Title" type="text"
                                        value={formData.title ? formData.title : ""}
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label"> Meta Description </Label>
                                    <textarea className="form-control"
                                    id="note" placeholder="The text typed here will be send as email"
                                    rows="3" defaultValue={formData.title ? formData.title : ""}></textarea>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label"> Meta Keywords  </Label>
                                    <Input
                                        name="title" id="customername-field" className="form-control"
                                        placeholder="Title" type="text"
                                        value={formData.title ? formData.title : ""}
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </OffcanvasBody>
                </SimpleBar>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button type="submit" className="btn btn-brand-theme" onClick={onCloseClick}>
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

export default AddEditTieChapterSetting;
