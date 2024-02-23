
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Row,
    Col,
    Table,
} from "reactstrap";

const Details = ({ show, onCloseClick }:any) => {

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-md"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Investment Details Of Family Member Approval
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <Table borderless striped  >
                                <tbody>
                                    <tr>
                                        <td>
                                            Member’s Name :
                                        </td>
                                        <td>
                                            lorem ipsum
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Member’s Email :
                                        </td>
                                        <td>

                                            Mother@yopmail.com
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Phone Number :
                                        </td>
                                        <td>
                                            918797897798
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Pan Card Number :
                                        </td>
                                        <td>

                                            234234232
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Member’s Proof of Address :
                                        </td>
                                        <td>
                                            ASRTmhj
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Member’s Proof of Address Scanned Copy : 
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
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

export default Details;
