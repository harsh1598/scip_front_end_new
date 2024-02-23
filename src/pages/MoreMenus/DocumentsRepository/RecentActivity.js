import React from "react";
import {  Offcanvas,OffcanvasHeader,} from "reactstrap";

const RecentActivity = ({ show, onCloseClick, formData, setFormData }) => {

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Recent Activity
            </OffcanvasHeader>
            {/*  h-100 */}
         
        </Offcanvas>
    );
};

export default RecentActivity;
