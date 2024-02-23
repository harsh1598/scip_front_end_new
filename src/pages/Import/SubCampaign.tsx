import React, { useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col} from "reactstrap";
import Common from "./Common";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import WebService from "../../utility/WebService";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../Components/Select/CustomDropdown";

const SubCampaign = () => {
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
    const [campaignOption, setCampaignOption] = useState<any>([]);
    const [campaignSelected, setCampaignSelected] = useState<any>([]);

    useEffect(() => {
        if(show){
            getCampaignList();
        }
    }, [show]);

    const onClickImport = () => {
        var obj: any = {}
        obj.type = 'sub_campaign'
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
                action: `/import-sub-campaign-file`,
                key: 'file',
                file: image,
                body: {
                    prepared_by: data.prepared_by,
                    checked_by: data.checked_by,
                    authorized_by: data.authorized_by,
                    campaignId: campaignSelected.id,
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
                        array.push({ id: res.list[i].campaignId, value: res.list[i].campaign_name });
                    }
                }
                setCampaignOption(array);
            })
            .catch((e) => { });
    };

    const onCloseClick = () => {
        reset();
        setShow(false);
    };

    return (
        <>
            <Common name="Sub Campaign" setShow={setShow} />
            <Offcanvas
                direction="end"
                isOpen={show}
                id="offcanvasExample"
                toggle={onCloseClick}
                className="size-sm"
            >
                <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                    Import Sub Campaign
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
                                <p className="text-black-50 ms-1"><Link to="#" onClick={()=> onClickImport()}>Click here</Link> to download the CSV format</p>
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

export default SubCampaign;
