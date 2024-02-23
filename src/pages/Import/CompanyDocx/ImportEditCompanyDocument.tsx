import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import WebService from "../../../utility/WebService";
import toast from "react-hot-toast";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import CustomDatePicker from "../../../Components/CustomDatePicker/CustomDatePicker";
import HelperService from "../../../utility/HelperService";
import MultiSelect from "../../../Components/MultiSelect/MultiSelect";
import moment from "moment";

interface PropData {
    show: any;
    onCloseClick: any;
    Id: any;
    getlist: any;
}

const ImportEditCompanyDocument = (props: PropData) => {

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState<any>(false);
    const [userOption, setUserOption] = useState<any>([]);
    const [userSelected, setUserSelected] = useState<any>([]);
    const [year, setYear] = useState(new Date());
    const [statusSelected, setStatusSelected] = useState<any>([]);

    useEffect(() => {
        if (props?.Id) {
            getDetail();
            getUserList();
        }
    }, [props.show, props?.Id]);

    const onCloseModal = () => {
        reset({})
        props.onCloseClick(!props.show);
    };

    const onSave = (data: any) => {
        setLoading(true);
        WebService.putAPI({
            action: `/import/campaign-update`,
            body: {
                docId: data.docId,
                userId: data.userId,
            },
        })
            .then((res: any) => {
                toast.success(res.message);
                props.onCloseClick(!props.show);
                props.getlist(1);
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const getUserList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/user-dropdown-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({
                        id: res.list[i].userId, value: HelperService.getText(res.list[i].name,
                            50)
                    });
                }
                setUserOption(array);
            })
            .catch((e) => { });
    };

    const requiredList: any = [
        { id: "Y", value: "YES" },
        { id: "N", value: "NO" }
    ];

    const getDetail = () => {
        setLoading(true);
        WebService.getAPI({
            action: `/import/company-docx/${props.Id}`,
        })
            .then((res: any) => {
                reset(res.result)
                setUserSelected(res.result.userId)
                setYear(HelperService.getYear(res.result.year))
                setStatusSelected(res.result.status)
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    return (
        <Offcanvas
            isOpen={props.show}
            id="offcanvasExample"
            onHide={onCloseModal}
            toggle={props.onCloseClick}
            direction="end"
            className="size-xl"
        >
            <OffcanvasHeader className="bg-light" id="offcanvasRightLabel" toggle={props.onCloseClick}>Company Document</OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody className="px-0 overflow-hidden">
                    <div className="px-4">
                        <Col lg={12}>
                            <Row>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">User <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="userId"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={userOption}
                                                    selected={userSelected}
                                                    isSearchable={true}
                                                    placeholder="Select User"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setUserSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.userId && (
                                                <span className="text-danger fs-12">Please Select User</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Campaign <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="userId"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={userOption}
                                                    selected={userSelected}
                                                    isSearchable={true}
                                                    placeholder="Select Campaign"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setUserSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.userId && (
                                                <span className="text-danger fs-12">Please Select Campaign</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Category <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="userId"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={userOption}
                                                    selected={userSelected}
                                                    isSearchable={true}
                                                    placeholder="Select Category"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setUserSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.userId && (
                                                <span className="text-danger fs-12">Please Select Category</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Sub Category <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="userId"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={userOption}
                                                    selected={userSelected}
                                                    isSearchable={true}
                                                    placeholder="Select Sub Category"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setUserSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.userId && (
                                                <span className="text-danger fs-12">Please Select Sub Category</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Document Name <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Document Name"
                                            autoComplete="off"
                                            {...register("doc_title", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.doc_title && (
                                                <span className="text-danger fs-12">Please Enter Document Name</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Document Url <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Document Url"
                                            autoComplete="off"
                                            {...register("doc_file", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.doc_file && (
                                                <span className="text-danger fs-12">Please Enter Document Url</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Year <span className="text-danger">*</span>
                                        </Label>
                                        <Controller
                                            control={control}
                                            name="year"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDatePicker
                                                    type="YEAR"
                                                    placeholderText='Year'
                                                    selected={year}
                                                    onChange={(data: any) => {
                                                        field.onChange(data);
                                                        setYear(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.year && (
                                                <span className="text-danger fs-12">Please Enter Year</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Status <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="status"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={requiredList}
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
                        </Col>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <Button
                        type="submit"
                        disabled={errors ? false : loading ? true : false}
                        id="addedit-workflow-imanagetemplate-submit-btn"
                        color="primary" className="btn-brand-theme"
                    >
                        Submit
                    </Button>
                    <button type="button" className="btn btn-light" onClick={() => { onCloseModal() }}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    )
}

export default ImportEditCompanyDocument;