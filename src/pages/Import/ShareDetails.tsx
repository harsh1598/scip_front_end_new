import React, { useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col } from "reactstrap";
import Common from "./Common";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../Components/Select/CustomDropdown";
import WebService from "../../utility/WebService";
import toast from "react-hot-toast";
import MultiSelect from "../../Components/MultiSelect/MultiSelect";

const ShareDetails = () => {
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
    const [userOption, setUserOption] = useState<any>([]);
    const [userSelected, setUserSelected] = useState<any>([]);
    const [campaignOption, setCampaignOption] = useState<any>([]);
    const [campaignSelected, setCampaignSelected] = useState<any>([]);
    const [investorOption, setInvestorOption] = useState<any>([]);
    const [investorSelected, setInvestorSelected] = useState<any>([]);
    const [familyMemberOption, setFamilyMemberOption] = useState<any>([]);
    const [familyCodeSelected, setFamilyCodeSelected] = useState<any[]>([]);
    const [timeZonesOption, setTimeZonesOption] = useState<any>([]);
    const [timeZonesCodeSelected, setTimeZonesSelected] = useState<any>([]);
    const [subCampaignOption, setSubCampaignOption] = useState<any>([]);
    const [subCampaignSelected, setSubCampaignSelected] = useState<any>([]);

    useEffect(() => {
        if (show) {
            getUserList();
            getUserInvestorList();
            getTimeZonesList();
        }
        // getSubCampaignList();
    }, [show]);

    const onClickImport = () => {
        var obj: any = {}
        obj.type = 'share_details'
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
                action: `/import-share-details-file`,
                key: 'file',
                file: image,
                body: {
                    prepared_by: data.prepared_by,
                    checked_by: data.checked_by,
                    authorized_by: data.authorized_by,
                    userId: userSelected.id,
                    campaignId: campaignSelected.id,
                    investorId: investorSelected.id,
                    familyMemberId: familyCodeSelected.toString() ?? 0,
                    timeZoneId: timeZonesCodeSelected.id,
                    subCampaignid: subCampaignSelected.id ?? 0,
                    file: documentName,
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

    const getUserList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/user-dropdown-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].userId, value: res.list[i].name });
                }
                setUserOption(array);
            })
            .catch((e) => { });
    };

    const getUserInvestorList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/user-investor-dropdown-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].userId, value: res.list[i].name });
                }
                setInvestorOption(array);
            })
            .catch((e) => { });
    };

    const getCampaignList = (id: any) => {

        var obj: any = {}
        obj.userid = id;
        WebService.getAPI({
            action: `/campaign-code-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].campaignId, value: res.list[i].campaign_name });
                }
                setCampaignOption(array);
            })
            .catch((e) => { });
    };

    const getFamilyMemberList = (id: any) => {

        var obj: any = {}
        obj.investorId = id;
        WebService.getAPI({
            action: `/family-member-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].memberId, value: res.list[i].member_name });
                }
                setFamilyMemberOption(array);
            })
            .catch((e) => { });
    };

    const getTimeZonesList = () => {

        var obj: any = {}
        WebService.getAPI({
            action: `/time-zones-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].timezoneId, value: res.list[i].name });
                }
                setTimeZonesOption(array);
            })
            .catch((e) => { });
    };

    const getSubCampaignList = (id: any) => {

        var obj: any = {}
        obj.campaignId = id;
        WebService.getAPI({
            action: `/sub-campaign-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].subCampaignId, value: res.list[i].sub_campaign_name });
                }
                setSubCampaignOption(array);
            })
            .catch((e) => { });
    };

    const onCloseClick = () => {
        reset();
        setShow(false);
    };

    return (
        <>
            <Common name="Share Details" setShow={setShow} />
            <Offcanvas
                direction="end"
                isOpen={show}
                id="offcanvasExample"
                toggle={onCloseClick}
                className="size-sm"
            >
                <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                    Import Share Details
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
                                    <Label htmlFor="name-field" className="form-label">Entrepreneur <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="userId"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={userOption}
                                                selected={userSelected}
                                                isSearchable={true}
                                                placeholder="Select Entrepreneur"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setUserSelected(data);
                                                    getCampaignList(data.id)
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.userId && (
                                            <span className="text-danger fs-12">Please Select Entrepreneur</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Campaign <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="campaign"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={campaignOption}
                                                selected={campaignSelected}
                                                isSearchable={true}
                                                placeholder="Select Campaign"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setCampaignSelected(data);
                                                    getSubCampaignList(data.id)
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.campaign && (
                                            <span className="text-danger fs-12">Please Select Campaign</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Investor <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="investorId"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={investorOption}
                                                selected={investorSelected}
                                                isSearchable={true}
                                                placeholder="Select Investor"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setInvestorSelected(data);
                                                    getFamilyMemberList(data.id)
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.investorId && (
                                            <span className="text-danger fs-12">Please Select Investor</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Family Member and Company <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="familyMemberId"
                                        // rules={{ required: true }}
                                        render={({ field }) => (
                                            <MultiSelect
                                                selectLimit={familyMemberOption.length}
                                                options={familyMemberOption}
                                                selected={familyCodeSelected}
                                                placeholder="Select Family Member and Company"
                                                onChange={(data: any) => {
                                                    if (data) {
                                                        let temp: any = data.map((item: any) => {
                                                            field.onChange(item.id);
                                                            return item.id;
                                                        });
                                                        setFamilyCodeSelected(temp);
                                                    }
                                                }}
                                            />
                                        )}
                                    />
                                    {/* <div>
                                        {errors.familyMemberId && (
                                            <span className="text-danger fs-12">Please Select Family Member and Company</span>
                                        )}
                                    </div> */}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">TimeZones <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="timeZonesId"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={timeZonesOption}
                                                selected={timeZonesCodeSelected}
                                                isSearchable={true}
                                                placeholder="Select TimeZones"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setTimeZonesSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.timeZonesId && (
                                            <span className="text-danger fs-12">Please Select TimeZones</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Sub Campaign </Label>
                                    <Controller
                                        control={control}
                                        name="subCampaign"
                                        // rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={subCampaignOption}
                                                selected={subCampaignSelected}
                                                isSearchable={true}
                                                placeholder="Select Sub Campaign"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setSubCampaignSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                    {/* <div>
                                        {errors.subCampaign && (
                                            <span className="text-danger fs-12">Please Select Sub Campaign</span>
                                        )}
                                    </div> */}
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

export default ShareDetails;
