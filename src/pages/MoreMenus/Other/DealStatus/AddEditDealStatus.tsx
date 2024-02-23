import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { useEffect, useState } from "react";
import FormLayout from "../../../../Components/FormLayout/FormLayout";

interface propData {
    show: boolean;
    onCloseClick: any;
    formData: any;
    getlist: any;
}

const AddEditDealStatus = (props: propData) => {
    const [formName, setFormName] = useState<any>();
    const formNameUpdate = (name: any) => {
        setFormName(name);
    };
    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-xm my-offcanvas-new">
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {(props.formData && props.formData.id ? "Edit " : "Add ") +
                    formName}
            </OffcanvasHeader>
            <OffcanvasBody className="my-offcanvas-body">
                <FormLayout
                    formSlug="tbldealstatus"
                    editUrl="/edit-deal-status"
                    addUrl="/add-deal-status"
                    id={props?.formData?.id}
                    detailObj={props?.formData}
                    formName={formNameUpdate}
                    isClose={props.onCloseClick}
                    getlist={props.getlist}
                />
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default AddEditDealStatus;
