import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Row, Col,} from "reactstrap";
import Flatpickr from "react-flatpickr";

const AddBankDetails = ({ show, onCloseClick }) => {

    const handleChange = (name, event, index=null)=>{   

    }

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick}
            className="size-sm">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Add Bank Details
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Name of account holder</Label>
                                <Input
                                    name="name" id="customername-field" className="form-control" placeholder="" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label"> Account number</Label>
                                <Input
                                    name="name" id="customername-field" className="form-control" placeholder="" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Type of account</Label>
                                <Input
                                    name="name" id="customername-field" className="form-control" placeholder="" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Bank</Label>
                                <Input
                                    name="name" id="customername-field" className="form-control" placeholder="" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Bank Address</Label>
                                <Input
                                    name="name" id="customername-field" className="form-control" placeholder="" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Branch</Label>
                                <Input
                                    name="name" id="customername-field" className="form-control" placeholder="" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">IFSC Code</Label>
                                <Input
                                    name="name" id="customername-field" className="form-control" placeholder="" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Swift Code</Label>
                                <Input
                                    name="name" id="customername-field" className="form-control" placeholder="" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Last date of Transaction</Label>
                                <Flatpickr
                                    className="form-control date-picker-icon"
                                    name="date"
                                    placeholder="Select a date"
                                    onChange={e => handleChange('date',e,'multi' )}
                                    options={{
                                        mode: "range",
                                        dateFormat: "d-m-Y",
                                        allowInput:true
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme"
                        onClick={onCloseClick}
                    >
                        Submit
                    </button>
                    <button
                        className="btn btn-light"
                        onClick={onCloseClick}
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </Offcanvas>
    );
};

export default AddBankDetails;
