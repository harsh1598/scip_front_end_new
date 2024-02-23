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
import CustomDropdown from "../../../../Components/Select/CustomDropdown";
import HelperService from "../../../../utility/HelperService";
import WebService from "../../../../utility/WebService";
import toast from "react-hot-toast";
interface propData {
    show: boolean
    onCloseClick: any
    Id: any
}

const AddEditTeaser = (props: propData) => {
    const {
        register,
        reset,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (props?.Id) {
            getDetail()
        }else{
            onCloseModal();
        }
    }, [ props?.Id])

    const onCloseModal = () => {
        reset();
        setValue('name' , "");
        setValue('description' , "")
        props.onCloseClick();
    };

    const onSave = (data: any) => {

        setLoading(true);
        WebService.postAPI({
            action: props.Id ? `/edit-tie-chapter` : `/add-tie-chapter`,
            body: data,
            id: 'tie-chapter-submit-btn'
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
            action: `/tie-chapter-details/${props.Id}`,
        })
            .then((res: any) => {
                reset(res.result)
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    return (
        <>
            <Offcanvas
                isOpen={props.show}
                onHide={onCloseModal}
                toggle={props.onCloseClick}
                direction="end"
                className="border-bottom"
            >
                <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                    {props.Id ? "Edit Tie Chapter" : "Add Tie Chapter"}
                </OffcanvasHeader>
                <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                    <OffcanvasBody>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Name <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        autoComplete="off"
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        {errors.name && (
                                            <span className="text-danger fs-12">Please Enter Name</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Description
                                    </Label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Description"
                                        autoComplete="off"
                                        {...register("description", {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        {errors.description && (
                                            <span className="text-danger fs-12">Please Enter Description</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </OffcanvasBody>
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                        <button
                            type="submit"
                            className="btn btn-brand-theme"
                            id="tie-chapter-submit-btn"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => {
                                onCloseModal()
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Offcanvas>
        </>
    );
};

export default AddEditTeaser;
