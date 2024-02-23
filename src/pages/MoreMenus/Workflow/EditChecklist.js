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
import Select from "react-select";

const EditChecklist = ({ show, onCloseClick }) => {

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
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Add Checklist
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Title</Label>
                                <Input
                                    name="name" id="customername-field"
                                    className="form-control" placeholder="Enter Title" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Checklist can be viewed by</Label>
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

export default EditChecklist;
