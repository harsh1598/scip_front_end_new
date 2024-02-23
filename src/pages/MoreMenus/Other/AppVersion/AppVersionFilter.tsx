import React, { useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
    Button,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../../../Components/Select/CustomDropdown";

interface propData {
    show: boolean;
    onCloseClick: any;
    formData:any
    setFilterData:any
};

const AppVersionFilter = (props:propData ) => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const [typeSelected, setTypeSelected] = useState < any > ([]);


    const typeList: any = [
        { id: "ANDROID", value: "ANDROID" },
        { id: "IOS", value: "IOS" }
    ];


    const onCloseBlade = () => {
        reset();
        props.onCloseClick();
    };

    const onSave = (data: any) => {
        if(data){
            props.setFilterData(data);
            props.onCloseClick();
        }
    };

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
            {/*  h-100 */}
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label className="form-label">Type</Label>
                                    <Controller
                                        control={control}
                                        name="type"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={typeList}
                                                selected={typeSelected}
                                                isSearchable={true}
                                                placeholder="Select Type"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setTypeSelected(data);
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
                <Button
                        type="submit"
                        id="addedit-Document-submit-btn"
                        color="primary" className="btn-brand-theme"
                    >
                        Submit
                    </Button>
                    <button
                        type="button"
                        className="btn btn-light  "
                        onClick={() => onCloseBlade()}
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </Offcanvas>
    );
};

export default AppVersionFilter;
