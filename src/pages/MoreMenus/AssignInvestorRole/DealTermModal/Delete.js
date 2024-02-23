import React , { useState }  from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Row,
    Col,
    Input,
} from "reactstrap";

const Delete = ({ show, onCloseClick }) => {

    const [formData, setFormData] = useState({});
    const [profileData, setProfileData] = useState({ alert: false, id: "", status: "" });

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

    const submit = () => {
        // console.log(profileData)
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
                Delete
            </OffcanvasHeader>
            {/*  h-100 */}
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <div className="p-3 bg-soft-secondary rounded-top mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="mb-0 fs-15">Treewood</h5>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className="d-flex gap-1 align-items-center my-n2">
                                            <i className="ri-delete-bin-line align-bottom fs-15"
                                            style={{ cursor: "pointer" }} onClick={e => setProfileData({ alert: true, id: 1, status: 1 })}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <Col xl={5} lg={5}>
                                <h5 className="fs-15 mb-2">Column Name :</h5>
                            </Col>
                            <Col xl={5} lg={5}>
                                <h5 className="fs-15 mb-2">Percentage :</h5>
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
                            <Col xl={2} lg={2}>
                                <div className="mt-3">
                                    <div className="d-flex gap-1 align-items-center my-n2">
                                        <i className="ri-delete-bin-line align-bottom fs-20"       style={{ cursor: "pointer" }} onClick={e => setProfileData({ alert: true, id: 1, status: 1 })} ></i>
                                    </div>
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
            <SweetAlert
                custom
                show={profileData.alert}
                btnSize="md"
                showCancel
                showProfile
                showCloseButton
                confirmBtnText="Yes"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={submit}
                onCancel={e => setProfileData({ alert: false, id: "", status: "" })}
            >
                Are you sure you want to do this action?
            </SweetAlert>
        </Offcanvas>
    );
};

export default Delete;
