import React, { useEffect, useState } from "react";
import Select from "react-select";

import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Input,
    Row,
    Col,

} from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SimpleBar from "simplebar-react";

const AddTemplate = ({ show, onCloseClick }) => {

    const [formData, setFormData] = useState({});

    const CompanyStageList = [
        { value: 'Executivecouncil', label: 'Executive council' },
        { value: 'Family', label: 'Family' },
        { value: 'Founding', label: 'Founding' },
        { value: 'Individual ', label: 'Individual ' },
        { value: 'Institutional ', label: 'Institutional' },
        { value: 'Lifetime ', label: 'Lifetime ' }
    ];

    const handleChange = (name, event, index=null)=>{   

        let form = {...formData};

        form[name] = event.target.value;
        
        setFormData({...formData, ...form});
  
    }


    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Add Template
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end">
            <SimpleBar style={{ height: "84vh" }}>
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Work Type <span className='text-danger'>*</span> </Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="file"
                                    value={formData.file?formData.file:[]}
                                    onChange={e=>handleChange("file", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Title <span className='text-danger'>*</span> </Label>
                                <Input
                                    name="title" id="customername-field" className="form-control"
                                    placeholder="Title" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Subject <span className='text-danger'>*</span>  </Label>
                                <Input
                                    name="title" id="customername-field" className="form-control"
                                    placeholder="Title" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label className="form-label">Agenda <span className='text-danger'>*</span> </Label>
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
                    <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Set Default <span className='text-danger'>*</span> </Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="file"
                                    value={formData.file?formData.file:[]}
                                    onChange={e=>handleChange("file", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Select File </Label>
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
                    <button type="submit" className="btn btn-brand-theme" onClick={onCloseClick}>
                        Publish Schedule
                    </button>
                    <button className="btn btn-light" onClick={onCloseClick}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default AddTemplate;
