import React from "react";
import {
    Button,
    Col,
    Container,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Row,
} from "reactstrap";
import SimpleBar from "simplebar-react";

const TransactionDetails = ({ show, onCloseClick }) => {

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
                Transaction Details
            </OffcanvasHeader>
            <OffcanvasBody className="px-0 overflow-hidden">
                <Container>
                    <Row>
                        <Col md={8} sm={8}>
                            <label>Transaction Id:</label>
                        </Col>
                        <Col md={4} sm={4}>
                            <div className="text-muted">6</div>
                        </Col>
                        <Col md={8} sm={8}>
                            <label>Transaction Date (DD/MM/YYYY):</label>
                        </Col>
                        <Col md={4} sm={4}>
                            <div className="text-muted">02/08/2023 (IST) </div>
                        </Col>
                    </Row>
                </Container>
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

export default TransactionDetails;
