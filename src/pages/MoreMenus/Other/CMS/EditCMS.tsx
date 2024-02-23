import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import WebService from "../../../../utility/WebService";
import toast from "react-hot-toast";
import TextEditor from "../../../../Components/TextEditor/TextEditor";

interface PropData {
    isShow: any;
    isClose: any;
    onEdit: any;
}

const EditCMS = (props: PropData) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState<any>(false);
    const [previousData, setpreviousData] = useState("");
    const [editorData, setEditorData] = useState<any>()


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
        if (!editorData) {
            toast.error("Please Enter Content")
            return;
        }
        data.cmsContent = editorData
        setLoading(true);
        WebService.postAPI({
            action: `/edit-cms`,
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
                setpreviousData(res.result.cmsContent)
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const currentValue = (data: any) => {
        setEditorData(data)
    };


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
                                        className="form-control"
                                        placeholder="Title"
                                        autoComplete="off"
                                        {...register("cmsTitle")}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                            <div className=" form-group">
                            <label>Content<span className=" text-red-600">*</span></label>
                            <div className="mt-2 ">
                                <TextEditor data={previousData} editedData={currentValue} type={"NORMAL"} />
                            </div>
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

export default EditCMS;