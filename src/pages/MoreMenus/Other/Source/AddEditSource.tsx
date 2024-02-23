import React, { useEffect, useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Input,
    Row,
    Col,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../../../Components/Select/CustomDropdown";
import WebService from "../../../../utility/WebService";
import toast from "react-hot-toast";

interface propData {
    show: boolean;
    onCloseClick: any;
    Id: any
};

const AddEditSource = (props: propData) => {
    const {
        register,
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [userTypeSelected, setUserTypeSelected] = useState<any>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (props.Id) {
            getDetail()
        }
    }, [props.show, props?.Id])

    const onSave = (data: any) => {
        setLoading(true);
        WebService.postAPI({
            action: props.Id ? `/edit-source-contact` : `/add-source-contact`,
            body: data,
            id: 'source-submit-btn'
        })
            .then((res: any) => {
                toast.success(res.message);
                props.onCloseClick(!props.show);
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const getDetail = () => {
        setLoading(true);
        WebService.getAPI({
            action: `/source-contact-details/${props.Id}`,
        })
            .then((res: any) => {
                reset(res.result)
                setUserTypeSelected(res.result.user_type)
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const userTypeList = [
        { id: "entrepreneur", value: "Enterpreneur" },
        { id: "investor", value: "Investor" },
        { id: "thirdparty", value: "Thirdparty" }
    ];

    const onCloseBlade = () => {
        reset()
        props.onCloseClick()
    }

    return (
        <Offcanvas direction="end" isOpen={props.show} id="offcanvasExample" toggle={props.onCloseClick} className="size-sm">
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {props.Id ? "Edit Source" : "Add Source"}
            </OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">
                                    Source <span className="text-danger">*</span>
                                </Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Source"
                                    autoComplete="off"
                                    {...register("title", {
                                        required: true,
                                    })}
                                />
                                <div>
                                    {errors.title && (
                                        <span className="text-danger fs-12">Please Enter Souce</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">
                                    User <span className="text-danger">*</span>
                                </Label>
                                <Controller
                                    control={control}
                                    name="user_type"
                                    rules={{ required: true }}
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
                                <div>
                                    {errors.user_type && (
                                        <span className="text-danger fs-12">Please Select User Type</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">
                                    Description
                                </Label>
                                <textarea
                                    className="form-control"
                                    placeholder="Description"
                                    rows={3}
                                    autoComplete="off"
                                    {...register("description")}
                                />
                            </div>
                        </Col>
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme"
                        id="source-submit-btn"
                    >
                        Submit
                    </button>
                    <button
                        className="btn btn-light"
                        onClick={() => {
                            onCloseBlade()
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default AddEditSource;
