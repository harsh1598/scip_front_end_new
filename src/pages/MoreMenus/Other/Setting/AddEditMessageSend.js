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

const AddEditMessageSend = ({ show, onCloseClick , formData, setFormData  }) => {

    // const handleChange = (name, event, index = '', type = '') => {

    //     let from = { ...formData };
    //     if (index !== '') {
    //         from[name] = event;
    //     } else {
    //         from[name] = event.target.value;
    //     }
    //     setFormData({ ...formData, ...from });

    // }

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                {formData.id ? "Edit Settings" : " Add Settings"}
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Title</Label>
                                <Input
                                    name="name" id="customername-field"
                                    className="form-control" placeholder="Enter Company Stage " type="text"
                                    value={formData.title ? formData.title : ""}
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label"> Days </Label>
                                <Input
                                    name="name" id="customername-field"
                                    className="form-control" placeholder="Enter Days " type="text"
                                    value={formData.days ? formData.days : ""}
                                    validate={{
                                        required: { value: true },
                                    }}
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

export default AddEditMessageSend;
