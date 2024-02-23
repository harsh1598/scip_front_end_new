import React, { useEffect, useState } from "react";
import {  useForm } from "react-hook-form";
import { Button, Col, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import WebService from "../../../../utility/WebService";
import toast from "react-hot-toast";

interface PropData {
    isShow: any;
    isClose: any;
    onEdit: any;
}

const EditSEO = (props: PropData) => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const [loading, setLoading] = useState<any>(false);

    useEffect(() => {
        if(props?.onEdit){
            getDetail();
        }
    }, [props.isShow, props?.onEdit]);


    const onCloseModal = () => {
        reset({})
        props.isClose(!props.isShow);
    };


    const onSave = (data: any) => {
        setLoading(true);
        WebService.postAPI({
            action: `/edit-seo`,
            body: data,
        })
            .then((res: any) => {
                toast.success(res.message);
                props.isClose(!props.isShow);
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const getDetail = () => {
        setLoading(true);
        WebService.getAPI({
            action: `/cms-details/${props.onEdit}`,
        })
            .then((res: any) => {          
                reset(res.result)
            })
            .catch((e) => {
                setLoading(false);
            });
    }



    return (
        <Offcanvas
            isOpen={props.isShow}
            onHide={onCloseModal}
            toggle={props.isClose}
            direction="end"
            className=" size-md  border-bottom"
        >
            <OffcanvasHeader className="bg-light" id="offcanvasRightLabel">Edit CMS</OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody className="px-0 overflow-hidden">
                    <div className="px-4">
                        <Row>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                    Title
                                    </Label>
                                    <input
                                        type="text"
                                        disabled={true}
                                        className="form-control"
                                        placeholder="Title"
                                        autoComplete="off"
                                        {...register("cmsTitle")}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                    Meta Description
                                    </Label>
                                    <textarea
                                    rows={3}
                                        className="form-control"
                                        placeholder="Meta Description"
                                        autoComplete="off"
                                        {...register("metaDescription")}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                    Meta Keywords
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Meta Keywords"
                                        autoComplete="off"
                                        {...register("metaKeywords")}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <Button
                        type="submit"
                        id="addedit-workflow-imanagetemplate-submit-btn"
                        color="primary" className="btn-brand-theme"
                    >
                        Send
                    </Button>
                    <button type="button" className="btn btn-light" onClick={() => { onCloseModal() }}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    )
}

export default EditSEO;