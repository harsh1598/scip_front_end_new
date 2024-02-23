import React from "react";
import {
    Card,
    CardBody,
    Col,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Row,
} from "reactstrap";
import Approvals from "../../Approvals/Tab";

const Action = ({ show, onCloseClick }) => {

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick}
            className="size-xl">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Action
            </OffcanvasHeader>
            <OffcanvasBody >
                <Approvals />
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default Action;
