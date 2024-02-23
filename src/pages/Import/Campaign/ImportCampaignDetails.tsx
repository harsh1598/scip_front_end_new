import React, { useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col } from "reactstrap";
import Common from "../Common";
import { Link } from "react-router-dom";
import WebService from "../../../utility/WebService";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import MultiSelect from "../../../Components/MultiSelect/MultiSelect";

const ImportCampaignDetails = () => {
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
    const [investorRoleList, setInvestorRoleList] = useState<any[]>([]);
    const [investorRoleSelected, setInvestorRoleSelected] = useState<any[]>([]);
    // const [investorCodeList, setInvestorCodeList] = useState<any[]>([]);
    const [investorCodeSelected, setInvestorCodeSelected] = useState<any[]>([]);

    useEffect(() => {
        if (show) {
            getUserList();
            getInvestorRoleList();
        }
        // getInvestorCodeList();
    }, [show])

    const onClickImport = () => {
        var obj: any = {}
        obj.type = 'campaign'
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
                    if (res.list[i].campaign_name) {
                        array.push({ id: res.list[i].campaignId, value: res.list[i].campaign_name });
                    }
                }
                setCampaignOption(array);
            })
            .catch((e) => { });
    };

    const getInvestorRoleList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/investor-role-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].name });
                }
                setInvestorRoleList(array);
            })
            .catch((e) => { });
    };

    // const getInvestorCodeList = () => {
    //     var obj: any = {}
    //     WebService.getAPI({
    //         action: `/investor-code-list-for-import`,
    //         body: obj,
    //     })
    //     .then((res: any) => {
    //         var array: any = [];
    //         for (var i in res.list) {
    //             array.push({ id: res.list[i].id, value: res.list[i].name });
    //         }
    //         setInvestorCodeList(array);
    //     })
    //     .catch((e) => { });
    // };

    const onSave = (data: any) => {
        if (documentName) {
            WebService.fileUploadAPI({
                action: `/import-campign-file`,
                key: 'file',
                file: image,
                body: {
                    prepared_by: data.prepared_by,
                    checked_by: data.checked_by,
                    authorized_by: data.authorized_by,
                    userId: userSelected.id,
                    campaignId: campaignSelected.id ?? '',
                    investorRole: investorRoleSelected.toString(),
                    investorCode: investorCodeSelected.toString(),
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

    const onCloseClick = () => {
        reset();
        setShow(false);
    };


    return (
        <>
            <Common name="Campaign" link="/import/campaign" setShow={setShow} />
            <Offcanvas
                direction="end"
                isOpen={show}
                id="offcanvasExample"
                toggle={onCloseClick}
                className="size-sm"
            >
                <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                    Import Campaign
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
                                    <Label htmlFor="name-field" className="form-label">User <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="type"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={userOption}
                                                selected={userSelected}
                                                isSearchable={true}
                                                placeholder="Select Type"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setUserSelected(data);
                                                    getCampaignList(data.id)
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.type && (
                                            <span className="text-danger fs-12">Please Select User</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Campaign </Label>
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
                                    <Label htmlFor="name-field" className="form-label">Investor Role <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="investorRole"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <MultiSelect
                                                selectLimit={investorRoleList.length}
                                                options={investorRoleList}
                                                selected={investorRoleSelected}
                                                placeholder="Select Investor Role"
                                                onChange={(data: any) => {
                                                    if (data) {
                                                        let temp: any = data.map((item: any) => {
                                                            field.onChange(item.id);
                                                            return item.id;
                                                        });
                                                        setInvestorRoleSelected(temp);
                                                    }
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.investorRole && (
                                            <span className="text-danger fs-12">Please Select Investor Role</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Investor Code <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="InvestorCode"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <MultiSelect
                                                selectLimit={userOption.length}
                                                options={userOption}
                                                selected={investorCodeSelected}
                                                placeholder="Select Investor Code"
                                                onChange={(data: any) => {
                                                    if (data) {
                                                        let temp: any = data.map((item: any) => {
                                                            field.onChange(item.id);
                                                            return item.id;
                                                        });
                                                        setInvestorCodeSelected(temp);
                                                    }
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.InvestorCode && (
                                            <span className="text-danger fs-12">Please Select Investor Code</span>
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

export default ImportCampaignDetails;
