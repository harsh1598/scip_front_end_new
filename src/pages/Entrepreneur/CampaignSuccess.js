import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Row,
    Col,
    Table,
} from "reactstrap";

const CampaignSuccess = ({ show, onCloseClick }) => {

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Update Call for Money Status
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <Table borderless striped>
                                <tbody>
                                    <tr>
                                        <td> Total target amount  :</td>
                                        <td> 5,00,00,001 INR </td>
                                    </tr>
                                    <tr>
                                        <td> Total raised amount : </td>
                                        <td> 30,00,00,000 INR </td>
                                    </tr>
                                    <tr>
                                        <td> Total raised percentage : </td>
                                        <td> 600% </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p className="p-2"> Are you sure to declare the campaign as success? </p>
                        </Col>
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button type="submit" className="btn btn-brand-theme" onClick={onCloseClick}>
                        Ok
                    </button>
                    <button className="btn btn-light" onClick={onCloseClick}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default CampaignSuccess;
