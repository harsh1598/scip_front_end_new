import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Row,
    Col,
    Table,
} from "reactstrap";

const BankDetails = ({ show, onCloseClick }) => {

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick}
            className="size-sm">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Bank Details
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <Table borderless striped>
                                <tbody>
                                    <tr>
                                        <td>Name of account holder :</td>
                                        <td>lorem ipsum</td>
                                    </tr>
                                    <tr>
                                        <td>Account number :</td>
                                        <td>Mother@yopmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Type of account  :</td>
                                        <td>918797897798</td>
                                    </tr>
                                    <tr>
                                        <td>Bank :</td>
                                        <td>234234232</td>
                                    </tr>
                                    <tr>
                                        <td>Bank Address :</td>
                                        <td>ASRTmhj</td>
                                    </tr>
                                    <tr>
                                        <td>Branch  : </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>IFSC Code  : </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Swift Code  : </td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td>Last date of Transaction  : </td>
                                        <td> </td>
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

export default BankDetails;
