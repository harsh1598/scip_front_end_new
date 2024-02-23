import React from "react";
import {
    Col,
    Row,
    Button,
    Form,
    Label,
    Input,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
} from "reactstrap";
const DeleteCommitment = ({ show, onCloseClick }) => {

    return (
        <Offcanvas
            isOpen={show}
            direction="end"
            toggle={onCloseClick}
            id="offcanvasAllRubric"
            className="border-bottom"
        >
            <OffcanvasHeader
                className="bg-light"
                toggle={onCloseClick}
                id="offcanvasRightLabel"
            >
                Delete Commitment
            </OffcanvasHeader>
            <OffcanvasBody className="px-0 overflow-hidden">
                <div className="px-4">
                    <Form>
                        <Row>
                            <Col lg={12}>
                                <Label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault1"
                                >
                                    Message
                                </Label>
                                <div>
                                    <textarea
                                        className="form-control"
                                        id=""
                                        rows="3"
                                        placeholder="The text typed here we bill sent as email"
                                    ></textarea>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </OffcanvasBody>
            <div className="offcanvas-foorter border p-3 text-center">
                <div className="hstack gap-2 justify-content-end">
                    <button type="button" className="btn btn-brand-theme">
                        Submit
                    </button>
                    <Button
                        onClick={onCloseClick}
                        className="btn btn-light"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Offcanvas>
    );

};

export default DeleteCommitment;
