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

const AddEditShareSale = ({ show, onCloseClick , formData, setFormData  }) => {

    const handleChange = (name, event, index = '', type = '') => {

        let from = { ...formData };
        if (index !== '') {
            from[name] = event;
        } else {
            from[name] = event.target.value;
        }
        setFormData({ ...formData, ...from });

    }

    const Status = [
        {
            name: "Yes",
            checked: true,
            id:1
        },
        {
            name: "No",
            checked: false,
            id:2
        },
    ];
    
    const Type = [
        {
            name: "Entrepreneurs",
            checked: true,
            id:1
        },
        {
            name: "Investors",
            checked: false,
            id:2
        },
        {
            name: "SME Advisors ",
            checked: false,
            id:2
        },
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
                {formData.id ? "Edit Share Sale Back Settings" : " Add Share Sale Back Settings"}
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Company Stage </Label>
                                <Input
                                    name="name" id="customername-field"
                                    className="form-control" placeholder="Enter Company Stage " type="text"
                                    value={formData.companyStage ? formData.companyStage : ""}
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label"> Months </Label>
                                <Input
                                    name="name" id="customername-field"
                                    className="form-control" placeholder="Enter Months " type="text"
                                    value={formData.month ? formData.month : ""}
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

export default AddEditShareSale;
