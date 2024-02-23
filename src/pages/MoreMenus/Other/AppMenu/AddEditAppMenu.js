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

const AddEditAppMenu = ({ show, onCloseClick, data, setData }) => {

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
                                    <Label htmlFor="name-field" className="form-label">Title <span className="text-danger">*</span></Label>
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
                                    <Label htmlFor="name-field" className="form-label">Sub Title <span className="text-danger">*</span></Label>
                                    <Input
                                        name="subTitle" id="customername-field"
                                        className="form-control" placeholder="Sub Title "
                                        value={data.subTitle ? data.subTitle : ""} type="text"
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Title Description <span className="text-danger">*</span></Label>
                                    <Input
                                        name="desc" id="customername-field"
                                        className="form-control" placeholder="Title Description "
                                        value={data.desc ? data.desc : ""} type="text"
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Order Number <span className="text-danger">*</span></Label>
                                    <Input
                                        name="desc" id="customername-field"
                                        className="form-control" placeholder="Order Number"
                                        value={data.orderNo ? data.orderNo : ""} type="text"
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">User Type <span className="text-danger">*</span></Label>
                                    <Input
                                        name="userType" id="customername-field"
                                        className="form-control" placeholder="User Type "
                                        value={data.userType ? data.userType : ""} type="text"
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Screen Type <span className="text-danger">*</span></Label>
                                    <Input
                                        name="screenType" id="customername-field"
                                        className="form-control" placeholder="Screen Type"
                                        value={data.screenType ? data.screenType : ""} type="text"
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

export default AddEditAppMenu;
