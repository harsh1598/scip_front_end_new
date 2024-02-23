import React, { useEffect, useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
} from "reactstrap";
import { useForm } from "react-hook-form";


interface propData {
    show: boolean
    onCloseClick: any
}

const SampleFileForOpenBlade = (props: propData) => {
    const {
        register,
        reset,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();



    const onCloseModal = () => {
        reset();
        props.onCloseClick();
    };


    return (
        <Offcanvas
        isOpen={props.show}
        onHide={onCloseModal}
        toggle={props.onCloseClick}
        direction="end"
        className="border-bottom"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                { "Sample Blade"}
            </OffcanvasHeader>
            <form  className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Title <span className="text-danger">*</span>
                                </Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title"
                                    autoComplete="off"
                                    {...register("title", {
                                        required: true,
                                    })}
                                />
                                <div>
                                    {errors.title && (
                                        <span className="text-danger fs-12">Please Enter Title</span>
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
                        id="teaser-submit-btn"
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
    );
};

export default SampleFileForOpenBlade;
