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

const AddEditActionSubButton = ({ show, onCloseClick, data, setData }) => {

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                {data.id ? "Edit Action Button" : "Add Action Button"}
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Button Title </Label>
                                <Input
                                    name="title" id="customername-field"
                                    className="form-control" placeholder="Menu Title "
                                    value={data.title ? data.title : ""} type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Button Description  </Label>
                                <textarea className="form-control"
                                    id="note" placeholder="Dashboard"
                                    rows="3" defaultValue=""></textarea>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Button Color  </Label>
                                <input type="color" class="form-control form-control-color w-100" id="colorPicker" value="#364574" />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Button  Order </Label>
                                <Input
                                    name="order" id="customername-field"
                                    className="form-control" placeholder="Menu Order "
                                    value={data.order ? data.order : ""} type="text"
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

export default AddEditActionSubButton;
