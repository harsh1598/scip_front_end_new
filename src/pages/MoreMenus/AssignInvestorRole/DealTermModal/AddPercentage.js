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
import Select from "react-select";
import { useState } from "react";

const AddPercentage = ({ show, onCloseClick }) => {

    const [formData, setFormData] = useState({});

    const handleChange = (name, event, index = null) => {

        let form = { ...formData };

        if (index === 'multi') {

            if(name === "assigned"){
                form[name] = event;
            }else{
                form[name] = event.value;
            }
          
        } else {
            form[name] = event.target.value;
        }

        setFormData({ ...formData, ...form });

    }

    const CompanyStageList = [
        { value: 'Active', label: 'Active' },
        { value: 'InActive', label: 'InActive' },
        { value: 'Deleted', label: 'Deleted' },
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
                Add Percentage
            </OffcanvasHeader>
            {/*  h-100 */}
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Title <span className='text-danger'>*</span> </Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="title"
                                        value={formData.title ? formData.title : []}
                                        onChange={e => handleChange("title", e, 'multi')}
                                        options={CompanyStageList}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Column <span className='text-danger'>*</span> </Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="column"
                                        value={formData.column ? formData.column : []}
                                        onChange={e => handleChange("column", e, 'multi')}
                                        options={CompanyStageList}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Percentage <span className='text-danger'>*</span> </Label>
                                    <Input
                                        name="percentage" id="customername-field" className="form-control"
                                        placeholder="" type="text"
                                        value={formData.percentage ? formData.percentage : ""}
                                        onChange={e => handleChange("percentage", e)}
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
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

export default AddPercentage;
