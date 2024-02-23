import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
    Input,
    Card,
    CardBody,
} from "reactstrap";
import Select from "react-select";
import { useState } from "react";
import SimpleBar from "simplebar-react";

const Edit = ({ show, onCloseClick }) => {

    const [formData, setFormData] = useState({});

    const handleChange = (name, event, index = null) => {

        let form = { ...formData };

        if (index === 'multi') {

            if (name === "assigned") {
                form[name] = event;
            } else {
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
                Edit
            </OffcanvasHeader>
            {/*  h-100 */}
            <form action="" className="d-flex flex-column justify-content-end ">
                <SimpleBar autoHide={false}
                    style={{ maxHeight: "760px" }}>
                    <OffcanvasBody >
                        <div>
                            <Row>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">Title<span className='text-danger'>*</span> </Label>
                                        <Input
                                            name="title" id="customername-field" className="form-control"
                                            placeholder="" type="text"
                                            value={formData.title ? formData.title : ""}
                                            onChange={e => handleChange("title", e)}
                                            validate={{
                                                required: { value: true },
                                            }}
                                        />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">Assigned <span className='text-danger'>*</span> </Label>
                                        <Select
                                            isClearable={true}
                                            // isMulti
                                            name="assigned"
                                            value={formData.assigned ? formData.assigned : []}
                                            onChange={e => handleChange("assigned", e, 'multi')}
                                            options={CompanyStageList}
                                        />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">Commitment </Label>
                                        <Input
                                            name="commitment" id="customername-field" className="form-control"
                                            placeholder="Commitment" type="text"
                                            value={formData.commitment ? formData.commitment : ""}
                                            onChange={e => handleChange("commitment", e)}
                                            validate={{
                                                required: { value: true },
                                            }}
                                        />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">Soft Minimum Amount  </Label>
                                        <Input
                                            name="softminimumAmount" id="customername-field" className="form-control"
                                            placeholder="Soft Minimum Amount" type="text"
                                            value={formData.softminimumAmount ? formData.softminimumAmount : ""}
                                            onChange={e => handleChange("softminimumAmount", e)}
                                            validate={{
                                                required: { value: true },
                                            }}
                                        />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">Final Minimum Amount </Label>
                                        <Input
                                            name="finalMinimumAmount" id="customername-field" className="form-control"
                                            placeholder="Final Minimum Amount" type="text"
                                            value={formData.finalMinimumAmount ? formData.finalMinimumAmount : ""}
                                            onChange={e => handleChange("finalMinimumAmount", e)}
                                            validate={{
                                                required: { value: true },
                                            }}
                                        />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">Notes <span className='text-danger'>*</span> </Label>
                                        <textarea className="form-control"
                                            id="note" placeholder=""
                                            rows="3" defaultValue=""></textarea>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <Card className="dashboard-data">
                                        <CardBody className="bg-danger-subtle">
                                            <Row>
                                                <Col xl={5} lg={5}>
                                                    <h5 className="fs-15 mb-2">Column Name</h5>
                                                </Col>
                                                <Col xl={2} lg={2}> </Col>
                                                <Col xl={5} lg={5}>
                                                    <h5 className="fs-15 mb-2">Percentage</h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xl={5} lg={5}>
                                                    <div className="mb-2">
                                                        <Input
                                                            name="finalMinimumAmount" id="customername-field" className="form-control"
                                                            placeholder="Carts" type="text"
                                                            value={formData.finalMinimumAmount ? formData.finalMinimumAmount : ""}
                                                            onChange={e => handleChange("finalMinimumAmount", e)}
                                                            validate={{
                                                                required: { value: true },
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col xl={2} lg={2}>
                                                    <div className="text-center" style={{ marginTop: "1vh" }}>
                                                        <i className="ri-drag-move-2-fill align-bottom fs-20"></i>
                                                    </div>
                                                </Col>
                                                <Col xl={5} lg={5}>
                                                    <div className="mb-2">
                                                        <Input
                                                            name="finalMinimumAmount" id="customername-field" className="form-control"
                                                            placeholder="" type="text"
                                                            value={formData.finalMinimumAmount ? formData.finalMinimumAmount : ""}
                                                            onChange={e => handleChange("finalMinimumAmount", e)}
                                                            validate={{
                                                                required: { value: true },
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xl={5} lg={5}>
                                                    <div className="mb-2">
                                                        <Input
                                                            name="finalMinimumAmount" id="customername-field" className="form-control"
                                                            placeholder="Testing" type="text"
                                                            value={formData.finalMinimumAmount ? formData.finalMinimumAmount : ""}
                                                            onChange={e => handleChange("finalMinimumAmount", e)}
                                                            validate={{
                                                                required: { value: true },
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col xl={2} lg={2}>
                                                    <div className="text-center" style={{ marginTop: "1vh" }}>
                                                        <i className="ri-drag-move-2-fill align-bottom fs-20" id="RazorPay"></i>
                                                    </div>
                                                </Col>
                                                <Col xl={5} lg={5}>
                                                    <div className="mb-2">
                                                        <Input
                                                            name="finalMinimumAmount" id="customername-field" className="form-control"
                                                            placeholder="" type="text"
                                                            value={formData.finalMinimumAmount ? formData.finalMinimumAmount : ""}
                                                            onChange={e => handleChange("finalMinimumAmount", e)}
                                                            validate={{
                                                                required: { value: true },
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </OffcanvasBody>
                </SimpleBar>
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

export default Edit;
