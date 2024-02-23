import React, { useEffect, useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../../../../Components/Select/CustomDropdown";
import WebService from "../../../../../utility/WebService";

interface propData {
    show: boolean;
    onCloseClick: any;
    formData: any
    setFilterData: any
};

const ManageUserFormSubMenusFilter = (props: propData) => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    const [statusSelected, setStatusSelected] = useState<any>([])
    const [fieldTypeSelected, setFieldTypeSelected] = useState<any>([]);

    const oncloseBlade = () => {
        setStatusSelected("resetsawin")
        setFieldTypeSelected("resetsawin")
        var obj: any = {};
        reset(obj);
        props.onCloseClick();
    };

    useEffect(() => {
        setStatusSelected("resetsawin")
        setFieldTypeSelected("resetsawin")
        var obj: any = {};
        reset(obj);
    }, [props.show]);

    const onSave = (data: any) => {
        if (data) {
            console.log('data', data);
            props.setFilterData(data);
            props.onCloseClick();
        }
    };

    const statusList: any = [
        { id: "ACTIVE", value: "ACTIVE" },
        { id: "ARCHIVED", value: "ARCHIVED" }
    ];

    const fieldTypeList: any = [
        { id: "default", value: "DEFAULT" },
        { id: "dynamic", value: "DYNAMIC" },
    ];

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
                                    <Label htmlFor="name-field" className="form-label">Status</Label>
                                    <Controller
                                        control={control}
                                        name="status"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={statusList}
                                                selected={statusSelected}
                                                isSearchable={true}
                                                placeholder="Select Status"
                                                onChange={(data: any) => {
                                                    field.onChange(data);
                                                    setStatusSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Field Type </Label>
                                    <Controller
                                        control={control}
                                        name="profileType"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={fieldTypeList}
                                                selected={fieldTypeSelected}
                                                isSearchable={true}
                                                placeholder="Select Field Type"
                                                onChange={(data: any) => {
                                                    field.onChange(data);
                                                    setFieldTypeSelected(data);
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
                        onClick={() => oncloseBlade()}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default ManageUserFormSubMenusFilter;
