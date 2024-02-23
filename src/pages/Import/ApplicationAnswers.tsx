import React, { useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col } from "reactstrap";
import Common from "./Common";
import toast from "react-hot-toast";
import WebService from "../../utility/WebService";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../Components/Select/CustomDropdown";

const ApplicationAnswers = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();
    const [show, setShow] = useState(false);
    const [campaignOption, setCampaignOption] = useState<any>([]);
    const [campaignSelected, setCampaignSelected] = useState<any>([]);
    const [queationOption, setQuestionOption] = useState<any>([]);
    const [queationSelected, setQuestionSelected] = useState<any>([]);
    const [userOption, setUserOption] = useState<any>([]);
    const [userSelected, setUserSelected] = useState<any>([]);
    const [optionlist, setOptionList] = useState<any>([]);
    const [optionSelected, setOptionSelected] = useState<any>([]);
    const [doclist, setDocList] = useState<any>([]);
    const [docSelected, setDocSelected] = useState<any>([]);
    const [currencylist, setCurrencyList] = useState<any>([]);
    const [currencySelected, setCurrencySelected] = useState<any>([]);

    useEffect(() => {
        if (show) {
            getQuestionList();
            getUserList();
            getCurrencyList();
        }
    }, [show])

    const onSave = (data: any) => {

        WebService.fileUploadAPI({
            action: `/import-application-answers-file`,
            body: {
                prepared_by: data.prepared_by,
                checked_by: data.checked_by,
                authorized_by: data.authorized_by,
                questionId: queationSelected.id,
                userId: userSelected.id,
                optionId: optionSelected.id ?? 0,
                docId: docSelected.id ?? 0,
                currencyId: currencySelected.id ?? 0,
                answer: data.answer,
                comments: data.comments ?? "",
            },
        })
            .then((res: any) => {
                toast.success(res.message);
                setShow(false);
                reset()
            })
            .catch((e) => {
            });

        //  else {
        //     toast.error("Please Upload File")
        // }
    }

    const getQuestionList = () => {

        var obj: any = {}
        WebService.getAPI({
            action: `/question-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].question_id, value: res.list[i].question_title });
                }
                setQuestionOption(array);
            })
            .catch((e) => { });
    };

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
                    array.push({ id: res.list[i].campaignId, value: res.list[i].campaign_name });
                }
                setCampaignOption(array);
            })
            .catch((e) => { });
    };

    const getOptionList = (id: any) => {

        var obj: any = {}
        obj.question_id = id;
        WebService.getAPI({
            action: `/option-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].optionId, value: res.list[i].value });
                }
                setOptionList(array);
            })
            .catch((e) => { });
    };

    const getDocumentList = (id: any) => {
        var obj: any = {}
        obj.campaignId = id;
        WebService.getAPI({
            action: `/document-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].docId, value: res.list[i].doc_title });
                }
                setDocList(array);
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
                    array.push({ id: res.list[i].id, value: res.list[i].currency_code });
                }
                setCurrencyList(array);
            })
            .catch((e) => { });
    };

    const onCloseClick = () => {
        reset();
        setShow(false);
    };

    return (
        <>
            <Common name="Application Answers" setShow={setShow} />
            <Offcanvas
                direction="end"
                isOpen={show}
                id="offcanvasExample"
                toggle={onCloseClick}
                className="size-sm"
            >
                <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                    Import Application Answers
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
                                    <Label htmlFor="name-field" className="form-label">Question <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="questionId"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={queationOption}
                                                selected={queationSelected}
                                                isSearchable={true}
                                                placeholder="Select Question"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setQuestionSelected(data);
                                                    getOptionList(data.id)
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.questionId && (
                                            <span className="text-danger fs-12">Please Select Question</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
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
                                                    getCampaignList(data.id)
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
                                                    getDocumentList(data.id)
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
                                    <Label htmlFor="name-field" className="form-label">Option <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="optionId"
                                        // rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={optionlist}
                                                selected={optionSelected}
                                                isSearchable={true}
                                                placeholder="Select Option"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setOptionSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                    {/* <div>
                                        {errors.optionId && (
                                            <span className="text-danger fs-12">Please Select User</span>
                                        )}
                                    </div> */}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Document <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="docId"
                                        // rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={doclist}
                                                selected={docSelected}
                                                isSearchable={true}
                                                placeholder="Select Document"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setDocSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                    {/* <div>
                                        {errors.docId && (
                                            <span className="text-danger fs-12">Please Select Document</span>
                                        )}
                                    </div> */}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Currency <span className="text-danger">*</span></Label>
                                    <Controller
                                        control={control}
                                        name="currencyId"
                                        // rules={{ required: true }}
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
                                    {/* <div>
                                        {errors.currencyId && (
                                            <span className="text-danger fs-12">Please Select Document</span>
                                        )}
                                    </div> */}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Answer <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Answer"
                                        autoComplete="off"
                                        {...register("answer", {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        {errors.answer && (
                                            <span className="text-danger fs-12">Please Enter Answer</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Comments <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Comments"
                                        autoComplete="off"
                                        {...register("comments", {
                                            required: false,
                                        })}
                                    />
                                    {/* <div>
                                        {errors.comments && (
                                            <span className="text-danger fs-12">Please Enter Comments</span>
                                        )}
                                    </div> */}
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
                                <p className="text-black-50 ms-1">Last User Code on platform : {slug}</p>
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

export default ApplicationAnswers;
