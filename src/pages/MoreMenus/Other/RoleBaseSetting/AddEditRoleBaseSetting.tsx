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
import toast from "react-hot-toast";

interface propData {
    show: boolean
    onCloseClick: any
    Id: any
}

const AddEditRoleBaseSetting = (props: propData) => {
    const {
        register,
        reset,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const [statusSelected, setStatusSelected] = useState<any>([])
    const [roleOption, setRoleOption] = useState<any>([])
    const [roleSelected, setRoleSelected] = useState<any>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getRoleList();
    }, [])

    useEffect(() => {
        if (props?.Id) {
            getDetail()
        }
        else if(!props.Id){
            getSlug();
        }
    }, [props.show, props?.Id])

    const onCloseModal = () => {
        reset();
        props.onCloseClick();
    };

    const onSave = (data: any) => {
        setLoading(true);
        WebService.postAPI({
            action: props.Id ? `/rolebase/edit` : `/rolebase/add`,
            body: data,
            id: 'rolebase-submit-btn'
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
            action: `/rolebase/details/${props.Id}`,
        })
            .then((res: any) => {
                reset(res.result)
                setStatusSelected(res.result.status)
                setRoleSelected(Number(res.result.roleId))
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const getRoleList = () => {
        WebService.getAPI({
            action: `/rolebase/role-combo`,
            body: null
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].roleId, value: res.list[i].roles + " - " + res.list[i].subroles + " - " + res.list[i].web_work_type });
                }
                setRoleOption(array);
            })
            .catch((e) => {
            })
    }

    const getSlug = () => {
        WebService.getAPI({
            action: `/rolebase/getslug `,
            body: null
        })
            .then((res: any) => {
                setValue("slug",res.SLUG)
            })
            .catch((e) => {
            })
    }

    const statusList = [
        { id: 'Y', value: 'Active' },
        { id: 'N', value: 'Inactive' },
    ];

    return (
        <Offcanvas
            isOpen={props.show}
            onHide={onCloseModal}
            toggle={props.onCloseClick}
            direction="end"
            className="border-bottom"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {props.Id ? "Edit Role Base Setting" : "Add Role Base Setting"}
            </OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Role <span className="text-danger">*</span>
                                </Label>
                                <Controller
                                    control={control}
                                    name="roleId"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={roleOption}
                                            selected={roleSelected}
                                            isSearchable={true}
                                            placeholder="Select Role"
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setRoleSelected(data);
                                            }}
                                        />
                                    )}
                                />
                                <div>
                                    {errors.roleId && (
                                        <span className="text-danger fs-12">Please Select Role</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Slug <span className="text-danger">*</span>
                                </Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Slug"
                                    disabled={true}
                                    {...register("slug", {
                                        required: true,
                                    })}
                                />
                                <div>
                                    {errors.slug && (
                                        <span className="text-danger fs-12">Please Enter Slug</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Description <span className="text-danger">*</span>
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
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Status <span className="text-danger">*</span>
                                </Label>
                                <Controller
                                    control={control}
                                    name="status"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={statusList}
                                            selected={statusSelected}
                                            isSearchable={true}
                                            placeholder="Select Status"
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setStatusSelected(data);
                                            }}
                                        />
                                    )}
                                />
                                <div>
                                    {errors.status && (
                                        <span className="text-danger fs-12">Please Select Status</span>
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
                        id="rolebase-submit-btn"
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

export default AddEditRoleBaseSetting;
