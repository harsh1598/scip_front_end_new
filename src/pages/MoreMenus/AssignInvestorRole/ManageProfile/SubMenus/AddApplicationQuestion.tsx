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
import MultiSelect from "../../../../../Components/MultiSelect/MultiSelect";
import toast from "react-hot-toast";

interface propData {
    show: boolean;
    onCloseClick: any;
    sectionId: any
    listData: any
};

const AddApplicationQuestion = (props: propData) => {
    const {
        register,
        reset,
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    const watchAllFields = watch();
    const [typeSelected, setTypeSelected] = useState<any>([]);
    const [requiredSelected, setRequiredSelected] = useState<any>([]);
    const [membershipOption, setMembershipOption] = useState<any[]>([]);
    const [membershipSelected, setMembershipSelected] = useState<any[]>([]);
    const [questionOption, setQuestionOption] = useState<any[]>([]);
    const [questionSelected, setQuestionSelected] = useState<any[]>([]);
    const [loading, setLoading] = useState<any>(false);

    useEffect(() => {
        getMembershipList();
        getApplicationQuestionList();
    }, [props.show])

    const onCloseBlade = () => {
        reset()
        props.onCloseClick()
    }

    const onSave = (data: any) => {
        data.membershipTypeId = membershipSelected
        data.sectionId = props.sectionId
        data.section = props.listData.title
        data.user_type = props.listData.user_type
        setLoading(true);
        WebService.postAPI({
            action: `/manageprofile/add-application-question`,
            body: data,
            id: 'add-application-question'
        })
            .then((res: any) => {
                toast.success(res.message);
                props.onCloseClick(!props.show);
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const getApplicationQuestionList = () => {
        WebService.getAPI({
            action: `/manageprofile/question-combo`,
            body: null,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].question_id, value: res.list[i].question_title });
                }
                setQuestionOption(array);
            })
            .catch((e) => { });
    };


    const getMembershipList = () => {
        WebService.getAPI({
            action: `/manageprofile/membership-combo`,
            body: null,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].membership_type });
                }
                setMembershipOption(array);
            })
            .catch((e) => { });
    };

    const requiredList: any = [
        { id: "Y", value: "YES" },
        { id: "N", value: "NO" }
    ];

    return (
        <Offcanvas
            isOpen={props.show}
            onHide={onCloseBlade}
            toggle={props.onCloseClick}
            direction="end"
            className="border-bottom"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {"Add Application Question"}
            </OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                    <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Application Question<span className="text-danger">*</span></Label>
                                <Controller
                                    control={control}
                                    name="question_id"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={questionOption}
                                            selected={questionSelected}
                                            isSearchable={true}
                                            placeholder="Select User Type"
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setQuestionSelected(data);
                                                setValue("input_title", data.value)
                                            }}
                                        />
                                    )}
                                />
                                <div>
                                    {errors.question_id && (
                                        <span className="text-danger fs-12">Please Select Application Question</span>
                                    )}
                                </div>
                            </div>

                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Title<span className="text-danger">*</span> </Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title"
                                    // disabled={props.Id ? true : false}
                                    autoComplete="off"
                                    {...register("input_title", {
                                        required: true,
                                    })}
                                />
                                <div>
                                    {errors.input_title && (
                                        <span className="text-danger fs-12">Please Enter Title</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Order </Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Order"
                                    // disabled={props.Id ? true : false}
                                    autoComplete="off"
                                    {...register("input_order")}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Placeholder </Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Placeholder"
                                    // disabled={props.Id ? true : false}
                                    autoComplete="off"
                                    {...register("input_placeholder")}
                                />
                            </div>
                        </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Membership Type <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="membershipTypeId"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <MultiSelect
                                                selectLimit={membershipOption.length}
                                                options={membershipOption}
                                                selected={membershipSelected}
                                                placeholder="Select Membership Type"
                                                onChange={(data: any) => {
                                                    if (data) {
                                                        let temp: any = data.map((item: any) => {
                                                            field.onChange(item.id);
                                                            return item.id;
                                                        });
                                                        setMembershipSelected(temp);
                                                    }
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.membershipTypeId && (
                                            <span className="text-danger fs-12">Please Select Membership Type</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Required <span className="text-danger">*</span></Label>
                                <Controller
                                    control={control}
                                    name="is_required"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={requiredList}
                                            selected={requiredSelected}
                                            isSearchable={true}
                                            placeholder="Select Required"
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setRequiredSelected(data);
                                            }}
                                        />
                                    )}
                                />
                                <div>
                                    {errors.is_required && (
                                        <span className="text-danger fs-12">Please Select Required</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <div className="">
                            <div className="form-check">
                                <Col lg={12}>
                                    <div className="mt-2">
                                        <span>
                                            <input
                                                type="checkbox"
                                                value=""
                                                {...register("is_basic_profile")}
                                            />
                                            &nbsp;  &nbsp;
                                            <Label className="form-check-label" htmlFor="auth-remember-check" style={{ display: "inherit" }}>Check this for profile completeness</Label></span>

                                    </div>
                                    <p style={{ fontSize: "11px" }}>Note - Please select Is required Yes then check box.</p>
                                </Col>
                            </div>
                        </div>
                        <div className="">
                            <div className="form-check">
                                <Col lg={12}>
                                    <div className="mt-2">
                                        <Label className="form-check-label" htmlFor="auth-remember-check" style={{ display: "inherit" }}>Check this for display this field in App  </Label>
                                        <input
                                            type="checkbox"
                                            value=""
                                            {...register("is_app")}
                                        />
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme"
                        id="add-application-question"
                    >
                        Submit
                    </button>
                    <button
                        className="btn btn-light"
                        onClick={() => onCloseBlade()}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default AddApplicationQuestion;
