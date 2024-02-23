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
import WebService from "../../../../utility/WebService";
import MultiSelect from "../../../../Components/MultiSelect/MultiSelect";
import toast from "react-hot-toast";

interface propData {
    show: boolean;
    onCloseClick: any;
    Id: any
};

const AddEditManageUserForm = (props: propData) => {
    const {
        register,
        reset,
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const watchAllFields = watch();
    const [userTypeSelected, setUserTypeSelected] = useState<any>([]);
    const [inSectionOption, setInSectionOption] = useState<any>([]);
    const [inSectionSelected, setInSectionSelected] = useState<any>([]);
    const [isRequiredSelected, setIsRequiredSelected] = useState<any>([]);
    const [membershipOption, setMembershipOption] = useState<any[]>([]);
    const [membershipSelected, setMembershipSelected] = useState<any[]>([]);
    const [loading, setLoading] = useState<any>(false);

    useEffect(() => {
        if (props.Id) {
            getDetail()
        }
        getMembershipList();
    }, [props.show, props?.Id])

    const onCloseBlade = () => {
        reset();
        props.onCloseClick()
    }

    const onSave = (data: any) => {
        data.membershipTypeId = membershipSelected
        setLoading(true);
        WebService.postAPI({
            action: props.Id ? `/manageprofile/edit-section-profile` : `/manageprofile/add-section-profile`,
            body: data,
            id:'manage-userForm-submit-btn'
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
            action: `/manageprofile/details/${props.Id}`,
        })
            .then((res: any) => {          
                reset(res.result)
                setUserTypeSelected(res.result.user_type)
                setInSectionSelected(res.result.parentId)
                setMembershipSelected(res.result.membershipTypeId.split(","));

                // setMembershipSelected(res.result.membershipTypeId)
                setIsRequiredSelected(res.result.section_type)
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const userTypeList: any = [
        { id: "admin", value: "ADMIN", is_disable: true },
        { id: "entrepreneur", value: "ENTREPRENEUR", is_disable: false },
        { id: "investor", value: "INVESTOR", is_disable: false },
        { id: "syndicate", value: "SYNDICATE", is_disable: true },
        { id: "thirdparty", value: "THIRDPARTY", is_disable: false }
    ];

    const getInSectionOptions = (id: any) => {
        WebService.getAPI({
            action: `/manageprofile/section-combo/${id}`,
            body: null
        })
            .then((res: any) => {
                const Parentobj = { id: '0', value: 'Parent' }
                var array: any = [];
                array.push(Parentobj);
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].title });
                }
                setInSectionOption(array);
            })
            .catch((e) => {
            })
    }

    const isRequired: any = [
        { id: "default", value: "Default" },
        { id: "default-required", value: "Default Required(Can not be deleted)" },
        { id: "dynamic", value: "Dynamic" },
        { id: "dynamic-required", value: "Dynamic Required(Can not be deleted)" },
    ]

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

    return (
        <Offcanvas
        isOpen={props.show}
        onHide={onCloseBlade}
        toggle={props.onCloseClick}
        direction="end"
        className="border-bottom"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {props.Id ? "Edit Section" : " Add Section"}
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
                                    disabled={props.Id ? true : false}
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
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">User Type <span className="text-danger">*</span></Label>
                                <Controller
                                    control={control}
                                    name="user_type"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={userTypeList}
                                            selected={userTypeSelected}
                                            isSearchable={true}
                                            placeholder="Select User Type"
                                            isDisable={props.Id ? true : false}
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setUserTypeSelected(data);
                                                getInSectionOptions(data.id)
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
                        {!props.Id && 
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">In Section <span className="text-danger">*</span></Label>
                                <Controller
                                    control={control}
                                    name="parentId"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={inSectionOption}
                                            selected={inSectionSelected}
                                            isSearchable={true}
                                            placeholder="Select In Section"
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setInSectionSelected(data);
                                            }}
                                        />
                                    )}
                                />
                                <div>
                                    {errors.parentId && (
                                        <span className="text-danger fs-12">Please Select In Section</span>
                                    )}
                                </div>
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
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label">Is Required <span className="text-danger">*</span></Label>
                                <Controller
                                    control={control}
                                    name="section_type"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={isRequired}
                                            selected={isRequiredSelected}
                                            isSearchable={true}
                                            placeholder="Select Is Required"
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setIsRequiredSelected(data);
                                            }}
                                        />
                                    )}
                                />
                                <div>
                                    {errors.section_type && (
                                        <span className="text-danger fs-12">Please Select Is Required</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <div className="">
                            <div className="form-check">
                                <Col lg={12}>
                                    <div className="mt-2">
                                        <Label className="form-check-label" htmlFor="auth-remember-check" style={{ display: "inherit" }}>Check this for display this Section in App  </Label>
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
                        id="manage-userForm-submit-btn"
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

export default AddEditManageUserForm;
