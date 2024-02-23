import React, { useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col } from "reactstrap";
import Common from "./Common";
import toast from "react-hot-toast";
import WebService from "../../utility/WebService";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../Components/Select/CustomDropdown";

const TrancheCommitment = () => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        control,
        formState: { errors },
    } = useForm();
    const [show, setShow] = useState(false);
    const [campaignOption, setCampaignOption] = useState<any>([]);
    const [campaignSelected, setCampaignSelected] = useState<any>([]);
    const [subCampaignOption, setSubCampaignOption] = useState<any>([]);
    const [subCampaignSelected, setSubCampaignSelected] = useState<any>([]);
    const [investorOption, setInvestorOption] = useState<any>([]);
    const [investorSelected, setInvestorSelected] = useState<any>([]);
    const [finalCommitOption, setFinalCommitOption] = useState<any>([]);
    const [finalAmountSelected, setFinalAmountSelected] = useState<any>([]);

    useEffect(() => {
        if (show) {
            getCampaignList();
            getUserInvestorList();
        }
    }, [show]);


    const onSave = (data: any) => {
        // if (documentName) {
            WebService.fileUploadAPI({
                action: `/import-tranche-commitment-file`,
                body: {
                    prepared_by     : data.prepared_by,
                    checked_by      : data.checked_by,
                    authorized_by   : data.authorized_by,
                    campaignId      : campaignSelected.id,
                    subCampaignId   : subCampaignSelected.id ?? 0,
                    investorId      : investorSelected.id,
                    finalCommitId   : finalAmountSelected.id,
                    trancheAmount   : data.trancheAmount,
                    // file: documentName,
                },
            })
                .then((res: any) => {
                    toast.success(res.message);
                    setShow(false);
                    reset()
                })
                .catch((e) => {
                });
        // } else {
        //     toast.error("Please Upload File")
        // }
    }

    const getCampaignList = () => {

        var obj: any = {}
        WebService.getAPI({
            action: `/all-campaign-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    if (res.list[i].campaign_name) {
                        if (res.list[i].campaign_name) {
                            array.push({ id: res.list[i].campaignId, value: res.list[i].campaign_name });
                        }
                    }
                }
                setCampaignOption(array);
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

    const getfinalCommit = (id: any) => {
        var obj: any = {}
        obj.campaignId = id;
        WebService.getAPI({
            action: `/final-commit-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].amount });
                }
                setFinalCommitOption(array);
            })
            .catch((e) => { });
    };

    const onCloseClick = () => {
        reset();
        setShow(false);
    };

    return (
        <>
            <Common name="Tranche Commitment" setShow={setShow} />
            <Offcanvas
                direction="end"
                isOpen={show}
                id="offcanvasExample"
                toggle={onCloseClick}
                className="size-sm"
            >
                <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                    Import Tranche Commitment
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
                                                    getfinalCommit(data.id)
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
                                    <Label htmlFor="name-field" className="form-label">Sub Campaign </Label>
                                    <Controller
                                        control={control}
                                        name="subCampaign"
                                        rules={{ required: true }}
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
                                    <div>
                                        {errors.subCampaign && (
                                            <span className="text-danger fs-12">Please Select Sub Campaign</span>
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
                                    <Label htmlFor="name-field" className="form-label">Final Commit Amount </Label>
                                    <Controller
                                        control={control}
                                        name="finalAmount"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={finalCommitOption}
                                                selected={finalAmountSelected}
                                                isSearchable={true}
                                                placeholder="Select Final Commit Amount"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setFinalAmountSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.finalAmount && (
                                            <span className="text-danger fs-12">Please Select Final Commit Amount</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                    Tranche Amount <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Tranche Amount"
                                        autoComplete="off"
                                        {...register("trancheAmount", {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        {errors.trancheAmount && (
                                            <span className="text-danger fs-12">Please Enter Tranche Amount</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            {/* <Col lg={12}>
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
                            </Col> */}
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

export default TrancheCommitment;
