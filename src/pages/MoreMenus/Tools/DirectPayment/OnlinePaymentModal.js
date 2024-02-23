import React, { useEffect, useState } from "react";
import {
    Col,
    Row,
    Label,
    Input,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
} from "reactstrap";
import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SimpleBar from "simplebar-react";

const OnlinePaymentModal = ({ show, onCloseClick, formData, setFormData }) => {

    const handleChange = (name, event, index = null) => {

        let form = { ...formData };

        if (index === 'multi') {
            form[name] = event;
        } else {
            form[name] = event.value;
        }

        setFormData({ ...formData, ...form });

    }

    const CompanyStageList = [
        { value: 'Beta', label: 'Beta' },
        { value: 'Concept', label: 'Concept' },
        { value: 'Idea', label: 'Idea' },
        { value: 'PreRevenue ', label: 'Pre Revenue ' },
        { value: 'Revenue ', label: 'Revenue' },
        { value: 'All ', label: 'All ' }
    ];

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-md"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Online Payment
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end ">
                <SimpleBar autoHide={false} style={{ maxHeight: "760px" }}>
                    <OffcanvasBody>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Title<span className='text-danger'>*</span></Label>
                                    <Input
                                        name="name" id="customername-field"
                                        className="form-control" placeholder="Title" type="text"
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Assigned To<span className='text-danger'>*</span></Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="profile"
                                        value={formData.profile ? formData.profile : []}
                                        onChange={e => handleChange("profile", e, 'multi')}
                                        options={CompanyStageList}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">CC</Label>
                                    <Input
                                        name="name" id="customername-field"
                                        className="form-control" placeholder="CC" type="text"
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Subject<span className='text-danger'>*</span></Label>
                                    <Input
                                        name="name" id="customername-field"
                                        className="form-control" placeholder="Title" type="text"
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label className="form-label">Message<span className='text-danger'>*</span></Label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data="<p>Hello from CKEditor 5!</p>"
                                        onReady={(editor) => {
                                            // You can store the "editor" and use when it is needed.

                                        }}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            // console.log({ event, editor, data });
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Currency<span className='text-danger'>*</span></Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="profile"
                                        value={formData.profile ? formData.profile : []}
                                        onChange={e => handleChange("profile", e, 'multi')}
                                        options={CompanyStageList}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Amount<span className='text-danger'>*</span></Label>
                                    <Input
                                        name="name" id="customername-field"
                                        className="form-control" placeholder="Amount" type="text"
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Due Date<span className='text-danger'>*</span></Label>
                                    <Input
                                        name="name" id="customername-field"
                                        className="form-control" placeholder="Due Date" type="text"
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Due Date<span className='text-danger'>*</span></Label>
                                    <div className="d-flex align-items-center form-control">
                                        <div className='attachment-btn '>
                                            <input type="file" className='input' />
                                            <i className='ri ri-attachment-line icon' />
                                        </div>
                                        <span className=" text-black-50 ms-1">No File Selected.</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </OffcanvasBody>
                </SimpleBar>
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

export default OnlinePaymentModal;
