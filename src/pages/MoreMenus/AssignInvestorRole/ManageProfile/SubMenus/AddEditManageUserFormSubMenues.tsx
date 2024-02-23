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
import PlusIcon from "../../../../../assets/images/plus.svg";

interface propData {
    show: boolean;
    onCloseClick: any;
    Id: any;
    listData: any
    sectionId: any
};

const AddEditManageUserFormSubMenues = (props: propData) => {
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
    const [fileAllowedSelected, setFileAllowedSelected] = useState<any[]>([]);
    const [loading, setLoading] = useState<any>(false);
    const [options, setOptions] = useState<any[]>([]);
    const [documentName, setDocumentName] = useState<any>();
    const [image, setImage] = useState<any>(null);

    useEffect(() => {
        setOptions([
            {
                id: "",
                value: "",
            },
        ]);
        if (props.Id) {
            getDetail()
        }
        getMembershipList();
    }, [props.show, props?.Id])

    const onCloseBlade = () => {
        reset()
        props.onCloseClick()
    }

    const onSave = (data: any) => {
        data.membershipTypeId = membershipSelected
        data.sectionId = props.sectionId
        data.section = props.listData.title
        data.user_type = props.listData.user_type
        if (options.length > 0) {
            data.dropdown_data = options
        }
        setLoading(true);
        WebService.postAPI({
            action: props.Id ? `/manageprofile/edit-section-details-profile` : `/manageprofile/add-section-details-profile`,
            body: data,
            id: 'manage-user-form-sub-menu'
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
            action: `/manageprofile/section-details/${props.Id}`,
        })
            .then((res: any) => {
                reset(res.result)
                setTypeSelected(res.result.input_type)
                setFileAllowedSelected(res.result.allowedType)
                setRequiredSelected(res.result.is_required)
                if (res.result && res.result.input_type == 'multiselect' || 'select') {
                    setOptions(JSON.parse(res.result.dropdown_data).dropdown)
                }
                else if (res.result && res.result.input_type == 'checkbox') {
                    setOptions(JSON.parse(res.result.dropdown_data).checkbox)
                }
                else if (res.result && res.result.input_type == 'radio') {
                    setOptions(JSON.parse(res.result.dropdown_data).radio)
                }

                setMembershipSelected(res.result.membershipTypeId.split(","));

                // setMembershipSelected(res.result.membershipTypeId)
            })
            .catch((e) => {
                setLoading(false);
            });
    }


    const fileAllowedList: any = [
        { id: "doc", value: "Docx" },
        { id: "excel", value: "Excel/CSV" },
        { id: "mp3", value: "MP3" },
        { id: "mp4", value: "MP4" },
        { id: "text", value: "Text" },
        { id: "pdf", value: "PDF" },
        { id: "ppt", value: "PPT" },
        { id: "open_office", value: "Open Office(ods/odt)" },
    ];

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

    const typeList: any = [
        { id: "radio", value: 'radio' },
        { id: "checkbox", value: 'checkbox' },
        { id: "textarea", value: 'textarea' },
        { id: "select", value: 'select' },
        { id: "file", value: 'file' },
        { id: "password", value: 'password' },
        { id: "email", value: 'email' },
        { id: "number", value: 'number' },
        { id: "url", value: 'url' },
        { id: "date", value: 'date' },
        { id: "multiselect", value: 'multiselect' },
        { id: "hidden", value: 'hidden' },
    ];

    const requiredList: any = [
        { id: "Y", value: "YES" },
        { id: "N", value: "NO" }
    ];

    const addNewOption = () => {
        var isShowError = false;
        if (isShowError == false) {
            options.push({ option: "" });
            setOptions([...options]);
        }
    };

    const deleteOption = (index: any) => {
        options.splice(index, 1);
        setOptions([...options]);
    };

    const onLoadImage = (e: any) => {
        const { files } = e.target;
        if (files && files[0]) {
            setDocumentName(files[0].name);
            setValue("logo", files[0].name)
            setImage(files[0]);
        }
        e.target.value = '';
    }

    return (
        <Offcanvas
            isOpen={props.show}
            onHide={onCloseBlade}
            toggle={props.onCloseClick}
            direction="end"
            className="border-bottom"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {props.Id ? "Edit Detail" : " Add Detail"}
            </OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
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
                                <Label htmlFor="name-field" className="form-label">Type <span className="text-danger">*</span></Label>
                                <Controller
                                    control={control}
                                    name="input_type"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={typeList}
                                            selected={typeSelected}
                                            isSearchable={true}
                                            placeholder="Select User Type"
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setTypeSelected(data);
                                            }}
                                        />
                                    )}
                                />
                                <div>
                                    {errors.input_type && (
                                        <span className="text-danger fs-12">Please Select Type</span>
                                    )}
                                </div>
                            </div>

                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Order</Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Order"
                                    autoComplete="off"
                                    {...register("input_order")}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Placeholder</Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Placeholder"
                                    autoComplete="off"
                                    {...register("input_placeholder")}
                                />
                            </div>
                        </Col>
                        {watchAllFields.input_type == "file" &&
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label"> Select Image File: <span className='text-danger'>*</span></Label>
                                    <div className="d-flex align-items-center form-control">
                                        <div className='attachment-btn '>
                                            <input
                                                id="upload_device"
                                                type="file"
                                                className='input'
                                                onChange={(e: any) => {
                                                    onLoadImage(e)
                                                }
                                                }
                                            />
                                            <i className='ri ri-attachment-line icon' />
                                        </div>
                                        {documentName ? documentName : <span className=" text-black-50 ms-1">No File Selected.</span>}

                                    </div>
                                    {/* {documentName} */}
                                </div>
                            </Col>
                        }
                        {watchAllFields.input_type == "file" &&
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">File Allowed <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="allowedType"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <MultiSelect
                                                selectLimit={fileAllowedList.length}
                                                options={fileAllowedList}
                                                selected={fileAllowedSelected}
                                                placeholder="Select File Allowed"
                                                onChange={(data: any) => {
                                                    if (data) {
                                                        let temp: any = data.map((item: any) => {
                                                            field.onChange(item.id);
                                                            return item.id;
                                                        });
                                                        setFileAllowedSelected(temp);
                                                    }
                                                }}
                                            />

                                        )}
                                    />
                                    <div>
                                        {errors.allowedType && (
                                            <span className="text-danger fs-12">Please Select File Allowed</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                        }
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
                        {(watchAllFields.input_type == "radio" || watchAllFields.input_type == "checkbox" || watchAllFields.input_type == "select" || watchAllFields.input_type == "multiselect") &&
                            <Col lg={12} className="mt-4">
                                <table className="table table-style-list border rounded-lg p-3">
                                    <label className="label p-2">Add Select Options</label>
                                    {options && options.length > 0 &&
                                        options.map((res: any, index: any) => {
                                            return (
                                                <Row>
                                                    <Col lg={9} className=" mt-1 mb-1 marginLeft-1">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder={"Option " + Number(index + 1)}
                                                            value={res.value}
                                                            onChange={(e) => {
                                                                options[index].key = e.target.value;
                                                                options[index].value = e.target.value;
                                                                setOptions([...options]);
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col lg={2} style={{ display: "flex" }}>
                                                        {index == options.length - 1 && (
                                                            <a
                                                                href="javascript:void(0)"
                                                                className="action-btn">
                                                                <img
                                                                    src={PlusIcon}
                                                                    alt=""
                                                                    className="inline ml- text-green-600"
                                                                    onClick={() => addNewOption()}
                                                                />
                                                            </a>
                                                        )}
                                                        {index < options.length - 1 && (
                                                            <a
                                                                onClick={() => deleteOption(index)}
                                                                className="action-btn cursor-pointer">
                                                                <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                                            </a>
                                                        )}
                                                    </Col>
                                                </Row>
                                            );
                                        })}
                                </table>
                            </Col>
                        }
                        {watchAllFields.input_type == "file" &&
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Information</Label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Information"
                                        autoComplete="off"
                                        {...register("information")}
                                    />
                                </div>
                            </Col>
                        }
                        {watchAllFields.user_type == 'investor' &&
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
                        }
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
                        id="manage-user-form-sub-menu"
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

export default AddEditManageUserFormSubMenues;
