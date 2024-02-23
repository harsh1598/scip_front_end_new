import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import WebService from "../../../../utility/WebService";
import toast from "react-hot-toast";
import CustomDropdown from "../../../../Components/Select/CustomDropdown";

interface PropData {
    show: any;
    onCloseClick: any;
    Id: any;
}

const AddEditCampaignInfo = (props: PropData) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState<any>(false);
    const [columnTypeOption, setColumnTypeOption] = useState<any>([])
    const [columnTypeSelected, setColumnTypeSelected] = useState<any>([])
    const [columnValueTypeOption, setColumnValueTypeOption] = useState<any>([])
    const [columnValueTypeSelected, setColumnValueTypeSelected] = useState<any>([])
    const [sectionOptions, setSectionOptions] = useState<any>([]);
    const [sectionSelected, setSectionSelected] = useState<any>([]);

    useEffect(() => {
        getColumnTypeList();
        getColumnValueTypeList();
        getColumnSectionList();
    }, []);

    useEffect(() => {
        if (props?.Id) {
            getDetail();
        }
    }, [props.show, props?.Id]);

    const onCloseModal = () => {
        reset({})
        props.onCloseClick(!props.show);
    };


    const onSave = (data: any) => {
        setLoading(true);
        WebService.postAPI({
            action: props.Id ? `/campaigninfo/edit` : `/campaigninfo/add`,
            body: data,
        })
            .then((res: any) => {
                toast.success(res.message);
                props.onCloseClick(!props.show);
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const getColumnTypeList = () => {
        var obj: any = {}
        obj.table = "tblCampaignInfo"
        obj.field = "column_type"
        WebService.postAPI({
            action: `/campaigninfo/type-list`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].value });
                }
                setColumnTypeOption(array);
            })
            .catch((e) => { });
    };

    const getColumnValueTypeList = () => {
        var obj: any = {}
        obj.table = "tblCampaignInfo"
        obj.field = "column_value_type"
        WebService.postAPI({
            action: `/campaigninfo/type-list`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].value });
                }
                setColumnValueTypeOption(array);
            })
            .catch((e) => { });
    };

    const getColumnSectionList = () => {
        var obj: any = {}
        obj.table = "tblCampaignInfo"
        obj.field = "column_section"
        WebService.postAPI({
            action: `/campaigninfo/type-list`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].value });
                }
                setSectionOptions(array);
            })
            .catch((e) => { });
    };

    const getDetail = () => {
        setLoading(true);
        WebService.getAPI({
            action: `/campaigninfo/details/${props.Id}`,
        })
            .then((res: any) => {
                reset(res.result)
                setColumnTypeSelected(res.result.column_type)
                setColumnValueTypeSelected(res.result.column_value_type)
                setSectionSelected(res.result.column_section)
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    return (
        <Offcanvas
            isOpen={props.show}
            onHide={onCloseModal}
            toggle={props.onCloseClick}
            direction="end"
            className="border-bottom"
        >
            <OffcanvasHeader className="bg-light" id="offcanvasRightLabel">{props.Id ? "Edit Campaign Info" : "Add Campaign Info"}</OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody className="px-0 overflow-hidden">
                    <div className="px-4">
                        <Row>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Column Name<span className="text-danger">*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Column Name"
                                        autoComplete="off"
                                        {...register("column_name", {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        {errors.column_name && (
                                            <span className="text-danger fs-12">Please Enter Column Name</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Column Description<span className="text-danger">*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Column Description"
                                        autoComplete="off"
                                        {...register("column_description", {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        {errors.column_description && (
                                            <span className="text-danger fs-12">Please Enter Column Description</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Column Type<span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="column_type"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={columnTypeOption}
                                                selected={columnTypeSelected}
                                                isSearchable={true}
                                                placeholder="Select Type"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setColumnTypeSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.column_type && (
                                            <span className="text-danger fs-12">Please Select Column Type</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Column Pattern Title
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Column Pattern Title"
                                        autoComplete="off"
                                        {...register("column_pattern_title")}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Column Value Type<span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="column_value_type"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={columnValueTypeOption}
                                                selected={columnValueTypeSelected}
                                                isSearchable={true}
                                                placeholder="Select Value Type"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setColumnValueTypeSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.column_value_type && (
                                            <span className="text-danger fs-12">Please Select Column Value Type</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Column Section<span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="column_section"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={sectionOptions}
                                                selected={sectionSelected}
                                                isSearchable={true}
                                                placeholder="Select Section"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setSectionSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.column_value_type && (
                                            <span className="text-danger fs-12">Please Select Column Section</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Seq No<span className="text-danger">*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Seq No"
                                        autoComplete="off"
                                        {...register("seq_no", {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        {errors.seq_no && (
                                            <span className="text-danger fs-12">Please Enter Seq No</span>
                                        )}
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

export default AddEditCampaignInfo;