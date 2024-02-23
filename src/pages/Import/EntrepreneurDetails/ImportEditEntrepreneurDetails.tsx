import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import WebService from "../../../utility/WebService";
import toast from "react-hot-toast";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import CustomDatePicker from "../../../Components/CustomDatePicker/CustomDatePicker";

interface PropData {
    show: any;
    onCloseClick: any;
    Id: any;
    getlist: any;
}

const ImportEditEntrepreneurDetails = (props: PropData) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState<any>(false);
    const [industryTypeOption, setIndustryTypeOption] = useState<any>([]);
    const [industryTypeSelected, setIndustryTypeSelected] = useState<any>([]);
    const [subIndustryTypeOption, setSubIndustryTypeOption] = useState<any>([]);
    const [subIndustryTypeSelected, setSubIndustryTypeSelected] = useState<any>([]);
    const [currencylist, setCurrencyList] = useState<any>([]);
    const [currencySelected, setCurrencySelected] = useState<any>([]);
    const [companyStagelist, setCompanyStageList] = useState<any>([]);
    const [companyStageSelected, setCompanyStageSelected] = useState<any>([]);
    const [sourceContactlist, setSourceContactList] = useState<any>([]);
    const [sourceContactSelected, setSourceContactSelected] = useState<any>([]);
    const [statusSelected, setStatusSelected] = useState<any>([]);
    const [expiryDate, setExpiryDate] = useState(null);
    const [productService, setProductService] = useState(null);

    useEffect(() => {
        if (props?.Id) {
            getDetail();
            getIndustryTypeList();
            getCurrencyList();
            getCompanyStageList();
            getSourceContactList();
        }
    }, [props.show, props?.Id]);

    const onCloseModal = () => {
        reset({})
        props.onCloseClick(!props.show);
    };

    const onSave = (data: any) => {
        setLoading(true);
        WebService.putAPI({
            action: `/import/entrepreneur-details-update`,
            body: data,
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

    const getIndustryTypeList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/report/industry-list`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].industryId, value: res.list[i].industry_name });
                }
                setIndustryTypeOption(array);
            })
            .catch((e) => { });
    };

    const getSubIndustryTypeList = (id: any) => {
        var obj: any = {}
        obj.parentId = id;
        WebService.getAPI({
            action: `/sub-industry-dropdown-list`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].industryId, value: res.list[i].industry_name });
                }
                setSubIndustryTypeOption(array);
            })
            .catch((e) => { });
    };

    const getCurrencyList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/currencies-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].currency_code, value: res.list[i].currency_code });
                }
                setCurrencyList(array);
            })
            .catch((e) => { });
    };

    const getCompanyStageList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/company-stage-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].stageId, value: res.list[i].stage_name });
                }
                setCompanyStageList(array);
            })
            .catch((e) => { });
    };

    const getSourceContactList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/source-contact-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].title });
                }
                setSourceContactList(array);
            })
            .catch((e) => { });
    };

    const requiredList: any = [
        { id: "Y", value: "Active" },
        { id: "N", value: "Inactive" }
    ];

    const List: any = [
        { id: "Product", value: "Product" },
        { id: "Service", value: "Service" }
    ];

    const getDetail = () => {
        setLoading(true);
        WebService.getAPI({
            action: `/import/entrepreneur-details/${props.Id}`,
        })
            .then((res: any) => {
                reset(res.result)
                setCurrencySelected(res.result.currency)
                setExpiryDate(res.result.company_founded)
                setProductService(res.result.company_type)
                setIndustryTypeSelected(res.result.company_industry)
                setSubIndustryTypeSelected(res.result.company_sub_industry)
                setCompanyStageSelected(res.result.stageId)
                setStatusSelected(res.result.active)
                setSourceContactSelected(res.result.source_id)
                getSubIndustryTypeList(res.result.company_industry);
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
            <OffcanvasHeader className="bg-light" id="offcanvasRightLabel" toggle={props.onCloseClick}>Entrepreneur Details</OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody className="px-0 overflow-hidden">
                    <div className="px-4">
                        <Col lg={12}>
                            <Row>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            First Name <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            autoComplete="off"
                                            {...register("first_name", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.first_name && (
                                                <span className="text-danger fs-12">Please Enter First Name</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Last Name <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                            autoComplete="off"
                                            {...register("last_name", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.last_name && (
                                                <span className="text-danger fs-12">Please Enter Last Name</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Phone Code <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Phone Code"
                                            autoComplete="off"
                                            {...register("phone_code", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.phone_code && (
                                                <span className="text-danger fs-12">Please Enter Phone Code</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Phone Number <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Phone Number"
                                            autoComplete="off"
                                            {...register("phone", {
                                                required: true,
                                                maxLength: 10
                                            })}
                                        />
                                        <div>
                                            {errors.phone && errors.phone.type === "required" && (
                                                <span className="text-danger fs-12">Please Enter Phone Number</span>
                                            )}
                                            {errors.phone && errors.phone.type === "maxLength" && (
                                                <span className="text-danger ms-1">Invalid Number</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Email <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email"
                                            autoComplete="off"
                                            {...register("email", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.email && (
                                                <span className="text-danger fs-12">Please Enter Email</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Address <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address"
                                            autoComplete="off"
                                            {...register("address", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.address && (
                                                <span className="text-danger fs-12">Please Enter Address</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Currency <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="currency"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={currencylist}
                                                    selected={currencySelected}
                                                    isSearchable={true}
                                                    placeholder="Select Currency"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setCurrencySelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.currency && (
                                                <span className="text-danger fs-12">Please Select Currency</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Seeking funding amount <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Seeking funding amount"
                                            autoComplete="off"
                                            {...register("seek_fund_amount", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.seek_fund_amount && (
                                                <span className="text-danger fs-12">Please Enter Seeking funding amount</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Cash invested in business <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Cash invested in business"
                                            autoComplete="off"
                                            {...register("invested_cash", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.invested_cash && (
                                                <span className="text-danger fs-12">Please Enter Cash invested in business</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Book Value <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Book Value"
                                            autoComplete="off"
                                            {...register("per_share_value", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.per_share_value && (
                                                <span className="text-danger fs-12">Please Enter Book Value</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Valuation <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Valuation"
                                            autoComplete="off"
                                            {...register("valuation", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.valuation && (
                                                <span className="text-danger fs-12">Please Enter Valuation</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Pan Card Number <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Pan Card Number"
                                            autoComplete="off"
                                            {...register("pancard_no", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.pancard_no && (
                                                <span className="text-danger fs-12">Please Enter Pan Card Number</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Registred Company name <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Registred Company name"
                                            autoComplete="off"
                                            {...register("company_name", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.company_name && (
                                                <span className="text-danger fs-12">Please Enter Registred Company name</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Brand Name <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Brand Name"
                                            autoComplete="off"
                                            {...register("brand_name", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.brand_name && (
                                                <span className="text-danger fs-12">Please Enter Brand Name</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">
                                            Founded date <span className="text-danger">*</span>
                                        </Label>
                                        <Controller
                                            control={control}
                                            name="company_founded"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDatePicker
                                                    placeholderText='Founded date'
                                                    minData={new Date()}
                                                    selected={expiryDate}
                                                    onChange={(data: any) => {
                                                        field.onChange(data);
                                                        setExpiryDate(data);
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div>
                                        {errors.company_founded && (
                                            <span className="text-danger fs-12">Please Select Founded date</span>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">
                                            Product or service <span className="text-danger">*</span>
                                        </Label>
                                        <Controller
                                            control={control}
                                            name="company_type"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={List}
                                                    selected={productService}
                                                    isSearchable={true}
                                                    placeholder="Select Product or service"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setProductService(data);
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div>
                                        {errors.company_type && (
                                            <span className="text-danger fs-12">Please Select Product or service</span>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Industry <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="company_industry"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={industryTypeOption}
                                                    selected={industryTypeSelected}
                                                    isSearchable={true}
                                                    placeholder="Select Industry"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setIndustryTypeSelected(data);
                                                        getSubIndustryTypeList(data.id)
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.company_industry && (
                                                <span className="text-danger fs-12">Please Select Industry</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Sub Industry </Label>
                                        <Controller
                                            control={control}
                                            name="company_sub_industry"
                                            // rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={subIndustryTypeOption}
                                                    selected={subIndustryTypeSelected}
                                                    isSearchable={true}
                                                    placeholder="Select Sub Industry"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setSubIndustryTypeSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        {/* <div>
                                            {errors.company_sub_industry && (
                                                <span className="text-danger fs-12">Please Select Sub Industry</span>
                                            )}
                                        </div> */}
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Registered official address <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Registered official address"
                                            autoComplete="off"
                                            {...register("company_contact_info", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.company_contact_info && (
                                                <span className="text-danger fs-12">Please Enter Registered official address</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Operational Headquarters <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Operational Headquarters"
                                            autoComplete="off"
                                            {...register("company_location", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.company_location && (
                                                <span className="text-danger fs-12">Please Enter Operational Headquarters</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Wesbite link <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Wesbite link"
                                            autoComplete="off"
                                            {...register("company_website", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.company_website && (
                                                <span className="text-danger fs-12">Please Enter Wesbite link</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Company Stage <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="stageId"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={companyStagelist}
                                                    selected={companyStageSelected}
                                                    isSearchable={true}
                                                    placeholder="Select Company Stage"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setCompanyStageSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.stageId && (
                                                <span className="text-danger fs-12">Please Select Company Stage</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Source of contact <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="source_id"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={sourceContactlist}
                                                    selected={sourceContactSelected}
                                                    isSearchable={true}
                                                    placeholder="Select Source of contact"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setSourceContactSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.source_id && (
                                                <span className="text-danger fs-12">Please Select Source of contact</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Source of contact Information <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Source of contact Information"
                                            autoComplete="off"
                                            {...register("source_info", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.source_info && (
                                                <span className="text-danger fs-12">Please Enter Source of contact Information</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Status <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="active"
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
                                            {errors.active && (
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

export default ImportEditEntrepreneurDetails;