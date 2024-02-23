import React, { useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col } from "reactstrap";
import Common from "./Common";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import WebService from "../../utility/WebService";
import toast from "react-hot-toast";
import CustomDropdown from "../../Components/Select/CustomDropdown";
import MultiSelect from "../../Components/MultiSelect/MultiSelect";

const InvestorDetails = () => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        control,
        formState: { errors },
    } = useForm();

    const [show, setShow] = useState(false);
    const [documentName, setDocumentName] = useState<any>();
    const [image, setImage] = useState<any>(null);
    const [slug, setSlug] = useState<any>();
    const [industryTypeOption, setIndustryTypeOption] = useState<any>([]);
    const [industryTypeSelected, setIndustryTypeSelected] = useState<any>([]);
    const [subIndustryTypeOption, setSubIndustryTypeOption] = useState<any>([]);
    const [subIndustryTypeSelected, setSubIndustryTypeSelected] = useState<any>([]);
    const [tieOption, setTieOption] = useState<any>([]);
    const [tieSelected, setTieSelected] = useState<any>([]);
    const [tagOption, setTagOption] = useState<any>([]);
    const [tagSelected, setTagSelected] = useState<any>([]);
    const [cityOption, setCityOption] = useState<any>([]);
    const [citySelected, setCitySelected] = useState<any>([]);
    const [statusSelected, setStatusSelected] = useState<any>([]);

    useEffect(() => {
        if (show) {
            getUserCodeList();
            getIndustryTypeList();
            getTieList();
            getTagList();
            getCityList();
        }
    }, [show])

    const getUserCodeList = () => {
        if (show) {
            WebService.getAPI({
                action: `/import-user-code`,
                body: null,
            })
                .then((res: any) => {
                    setSlug(res.result.slug)
                })
                .catch((e) => {
                });
        }
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

    const getTieList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/tie-chapter-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].chapterId, value: res.list[i].name });
                }
                setTieOption(array);
            })
            .catch((e) => { });
    };

    const getTagList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/tag-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].tagId, value: res.list[i].title });
                }
                setTagOption(array);
            })
            .catch((e) => { });
    };

    const getCityList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/city-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].cityId, value: res.list[i].cityName });
                }
                setCityOption(array);
            })
            .catch((e) => { });
    };

    const onClickImport = () => {
        var obj: any = {}
        obj.type = 'investor_details'
        WebService.postAPI({
            action: `/dummy-import-file`,
            body: obj,
        })
            .then((res: any) => {
                window.open(res.url)
            })
            .catch((e) => {
            });
    }

    const onLoadImage = (e: any) => {
        const { files } = e.target;
        if (files && files[0]) {
            setDocumentName(files[0].name);
            setValue("file", files[0].name)
            setImage(files[0]);
        }
        e.target.value = '';
    }

    const onSave = (data: any) => {
        if (documentName) {
            WebService.fileUploadAPI({
                action: `/import-investor-details-file`,
                key: 'file',
                file: image,
                body: {
                    prepared_by: data.prepared_by,
                    checked_by: data.checked_by,
                    authorized_by: data.authorized_by,
                    industryType: industryTypeSelected.value,
                    subIndustryType: subIndustryTypeSelected.value ? subIndustryTypeSelected.value : '',
                    tieId: tieSelected.id,
                    tagId: tagSelected.toString(),
                    cityId: citySelected.id,
                    file: documentName,
                    status: statusSelected.id,
                },
            })
                .then((res: any) => {
                    toast.success(res.message);
                    setShow(false);
                    reset()
                    setDocumentName("")
                })
                .catch((e) => {
                });
        } else {
            toast.error("Please Upload File")
        }
    }

    const onCloseClick = () => {
        reset();
        setShow(false);
    };

    const requiredList: any = [
        { id: "Y", value: "Active" },
        { id: "N", value: "Inactive" }
    ];

    return (
        <>
            <Common name="Investor Details" setShow={setShow} />
            <Offcanvas
                direction="end"
                isOpen={show}
                id="offcanvasExample"
                toggle={onCloseClick}
                className="size-sm"
            >
                <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                    Import Investor Details
                </OffcanvasHeader>
                <form onSubmit={handleSubmit(onSave)} action="" className="d-flex flex-column justify-content-end h-100">
                    <OffcanvasBody>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Prepared by <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Prepared by"
                                        autoComplete="off"
                                        {...register("prepared_by", {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        {errors.prepared_by && (
                                            <span className="text-danger fs-12">Please Enter Prepared by</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Checked by <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Checked by"
                                        autoComplete="off"
                                        {...register("checked_by", {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        {errors.checked_by && (
                                            <span className="text-danger fs-12">Please Enter Checked by</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Authorized by <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Authorized by"
                                        autoComplete="off"
                                        {...register("authorized_by", {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        {errors.authorized_by && (
                                            <span className="text-danger fs-12">Please Enter Authorized by</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Industry <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="column_type"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={industryTypeOption}
                                                selected={industryTypeSelected}
                                                isSearchable={true}
                                                placeholder="Select Type"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setIndustryTypeSelected(data);
                                                    getSubIndustryTypeList(data.id)
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.column_type && (
                                            <span className="text-danger fs-12">Please Select Industry Type</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Sub Industry <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="sub_type"
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
                                        {errors.sub_type && (
                                            <span className="text-danger fs-12">Please Select Sub Industry Type</span>
                                        )}
                                    </div> */}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Tie Chapter </Label>
                                    <Controller
                                        control={control}
                                        name="tieChapter"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={tieOption}
                                                selected={tieSelected}
                                                isSearchable={true}
                                                placeholder="Select Tie Chapter"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setTieSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.tieChapter && (
                                            <span className="text-danger fs-12">Please Select Tie Chapter</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">User tag </Label>
                                    <Controller
                                        control={control}
                                        name="investorRole"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <MultiSelect
                                                selectLimit={tagOption.length}
                                                options={tagOption}
                                                selected={tagSelected}
                                                placeholder="Select Investor Role"
                                                onChange={(data: any) => {
                                                    if (data) {
                                                        let temp: any = data.map((item: any) => {
                                                            field.onChange(item.id);
                                                            return item.id;
                                                        });
                                                        setTagSelected(temp);
                                                    }
                                                }}
                                            />
                                        )}
                                    />
                                    {/* <Controller
                                        control={control}
                                        name="userTag"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={tagOption}
                                                selected={tagSelected}
                                                isSearchable={true}
                                                placeholder="Select User tag"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setTagSelected(data);
                                                }}
                                            />
                                        )}
                                    /> */}
                                    <div>
                                        {errors.userTag && (
                                            <span className="text-danger fs-12">Please Select User tag</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">City</Label>
                                    <Controller
                                        control={control}
                                        name="city"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={cityOption}
                                                selected={citySelected}
                                                isSearchable={true}
                                                placeholder="Select City"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setCitySelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.city && (
                                            <span className="text-danger fs-12">Please Select City</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Status <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="is_required"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={requiredList}
                                                selected={statusSelected}
                                                isSearchable={true}
                                                placeholder="Select Required"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setStatusSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.is_required && (
                                            <span className="text-danger fs-12">Please Select Status</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label"> Select File <span className='text-danger'>*</span></Label>
                                    <div className="d-flex align-items-center form-control">
                                        <div className='attachment-btn '>
                                            <input
                                                id="upload_device"
                                                type="file"
                                                className='input cursor-pointer'
                                                onChange={(e: any) => {
                                                    onLoadImage(e)
                                                }
                                                }
                                            />
                                            <i className='ri ri-attachment-line icon' />
                                        </div>
                                        {documentName ? documentName : <span className=" text-black-50 ms-1">No File Selected.</span>}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <p className="text-black-50 ms-1">CSV file should be in the specified format :</p>
                                <p className="text-black-50 ms-1"><Link to="#" onClick={() => onClickImport()}>Click here</Link> to download the CSV format</p>
                                <p className="text-black-50 ms-1">Last User Code on platform : {slug}</p>
                            </Col>
                        </Row>
                    </OffcanvasBody>
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                        <button type="submit" className="btn btn-brand-theme" id="entrepreneur-submit-btn">
                            Submit
                        </button>
                        <button type="button" className="btn btn-light" onClick={onCloseClick}>
                            Cancel
                        </button>
                    </div>
                </form>
            </Offcanvas>
        </>
    );
};

export default InvestorDetails;
