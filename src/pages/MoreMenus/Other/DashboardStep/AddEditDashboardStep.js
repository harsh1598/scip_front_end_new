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
const AddEditCompanyStage = ({ show, onCloseClick, data, setData }) => {

    const handleChange = (name, event, index = null) => {


    }

    const CompanyStageList = [
        { value: 'Admin', label: 'Admin' },
        { value: 'Investor', label: 'Investor' },
        { value: 'SMEAdvisor', label: 'SME Advisor' },
    ];

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                {data.id ? "Edit Company Stage " : "Add Company Stage "}
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                {/* <SimpleBar style={{ height: "84vh" }}> */}
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Title  </Label>
                                <Input
                                    name="title" id="customername-field" className="form-control"
                                    placeholder="Title" type="text"
                                    value={data.title ? data.title : ""}
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Information</Label>
                                <textarea className="form-control"
                                    id="note" placeholder="informationl"
                                    rows="3" defaultValue={data.information ? data.information : ""}></textarea>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Sequence No  </Label>
                                <Input
                                    name="seqNo" id="customername-field" className="form-control"
                                    placeholder="Title" type="text"
                                    value={data.seqNo ? data.seqNo : ""}
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </OffcanvasBody>
                {/* </SimpleBar> */}
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button type="submit" className="btn btn-brand-theme" onClick={onCloseClick}>
                        Submit
                    </button>
                    <button className="btn btn-light" onClick={onCloseClick}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default AddEditCompanyStage;
