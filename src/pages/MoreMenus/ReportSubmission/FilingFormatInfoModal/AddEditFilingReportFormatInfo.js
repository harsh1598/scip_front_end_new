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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddEditFilingReportFormatInfo = ({ show, onCloseClick , formData, setFormData  }) => {

    const handleChange = (name, event, index = '', type = '') => {

        let from = { ...formData };
        if (index !== '') {
            from[name] = event;
        } else {
            from[name] = event.target.value;
        }
        setFormData({ ...formData, ...from });

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
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                {formData.id ? "Edit Filing Report Format Info" : " Add Filing Report Format Info "}
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Title</Label>
                                <Input
                                    name="title" id="customername-field"
                                    className="form-control" placeholder="Enter Title" type="text"
                                    value={formData.title ? formData.title : ""}
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3 ">
                                <Label className="form-label">Logo</Label>
                                <div className="d-flex align-items-center form-control mb-0">
                                    <div className='attachment-btn'>
                                        <input type="file" className='input' />
                                        <i className='ri ri-attachment-line icon' />
                                    </div>
                                    <span className=" text-black-50 ms-1">filename.doc</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Type</Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="type"
                                    value={formData.type ? formData.type : []}
                                    onChange={e => handleChange("type", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label className="form-label">Description</Label>
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

export default AddEditFilingReportFormatInfo;
