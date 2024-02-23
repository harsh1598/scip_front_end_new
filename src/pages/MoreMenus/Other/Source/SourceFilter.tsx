import React, { useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../../../Components/Select/CustomDropdown";

interface propData {
    show: boolean;
    onCloseClick: any;
    formData: any;
    setFilterData: any;
}

const SourceFilter = (props: propData) => {
    const [userTypeSelected, setUserTypeSelected] = useState<any>([])

    const {
        control,
        handleSubmit,
    } = useForm();

    const onSave = (data: any) => {
        if(data){
            props.setFilterData(data);
            props.onCloseClick();
        }
    }

    const userTypeList = [
        { id: "entrepreneur", value: "Enterpreneur" },
        { id: "investor", value: "Investor" },
        { id: "thirdparty", value: "Thirdparty" }
    ];

    const onClickBlade = () => {
        props.onCloseClick()
    }

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                Filters
            </OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">User </Label>
                                    <Controller
                                        control={control}
                                        name="user_type"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={userTypeList}
                                                selected={userTypeSelected}
                                                isSearchable={true}
                                                placeholder="Select User"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setUserTypeSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => {
                            onClickBlade()
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};
export default SourceFilter;
