import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Row,
    Col,
    Table,
} from "reactstrap";

const ContactInfo = ({ show, onCloseClick }) => {

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick}
            className="size-sm">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Contact Info
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <Table borderless striped>
                                <tbody>
                                    <tr>
                                        <td>Name : </td>
                                        <td>lorem ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>Email : </td>
                                        <td>Mother@yopmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Number :</td>
                                        <td>918797897798</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    {/* <button
                        type="submit"
                        className="btn btn-brand-theme"
                        onClick={onCloseClick}
                    >
                        Submit
                    </button> */}
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

export default ContactInfo;
