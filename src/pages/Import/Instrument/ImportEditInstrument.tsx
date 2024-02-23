import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import WebService from "../../../utility/WebService";
import toast from "react-hot-toast";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import HelperService from "../../../utility/HelperService";

interface PropData {
    show: any;
    onCloseClick: any;
    Id: any;
    getlist: any;
}

const ImportEditInstrument = (props: PropData) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState<any>(false);
    // const [userOption, setUserOption] = useState<any>([]);
    // const [userSelected, setUserSelected] = useState<any>([]);
    // const [campaignOption, setCampaignOption] = useState<any>([]);
    // const [campaignSelected, setCampaignSelected] = useState<any>([]);
    // const [instrumentOption, setInstrumentOption] = useState<any>([]);
    // const [instrumentSelected, setInstrumentSelected] = useState<any>([]);


    useEffect(() => {
        if (props?.Id) {
            getDetail();
            // getUserList();
            // getCampaignList();
            // getInstrumentList();
        }
    }, [props.show, props?.Id]);

    const onCloseModal = () => {
        reset({})
        props.onCloseClick(!props.show);
    };

    const onSave = (data: any) => {
        setLoading(true);
        WebService.putAPI({
            action: `/import/instrument-update`,
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

    // const getInstrumentList = () => {
    //     var obj: any = {}
    //     WebService.getAPI({
    //         action: `/instrument-list-for-import`,
    //         body: obj,
    //     })
    //         .then((res: any) => {
    //             var array: any = [];
    //             for (var i in res.list) {
    //                 array.push({
    //                     id: res.list[i].instrumentId, value: HelperService.getText(res.list[i].instrument_name, 30)
    //                 });
    //             }
    //             setInstrumentOption(array);
    //         })
    //         .catch((e) => { });
    // };

    // const getUserList = () => {
    //     var obj: any = {}
    //     WebService.getAPI({
    //         action: `/user-dropdown-list-for-import`,
    //         body: obj,
    //     })
    //         .then((res: any) => {
    //             var array: any = [];
    //             for (var i in res.list) {
    //                 array.push({
    //                     id: res.list[i].userId, value: HelperService.getText(res.list[i].name, 30)
    //                 });
    //             }
    //             setUserOption(array);
    //         })
    //         .catch((e) => { });
    // };

    // const getCampaignList = () => {

    //     var obj: any = {}
    //     WebService.getAPI({
    //         action: `/all-campaign-list-for-import`,
    //         body: obj,
    //     })
    //         .then((res: any) => {
    //             var array: any = [];
    //             for (var i in res.list) {
    //                 if (res.list[i].campaign_name) {
    //                     array.push({
    //                         id: res.list[i].campaignId, value: HelperService.getText(res.list[i].campaign_name, 30)
    //                     });
    //                 }
    //             }
    //             setCampaignOption(array);
    //         })
    //         .catch((e) => { });
    // };

    const getDetail = () => {
        setLoading(true);
        WebService.getAPI({
            action: `/import/instrument/${props.Id}`,
        })
            .then((res: any) => {
                reset(res.result)
                // setUserSelected(res.result.userId)
                // setCampaignSelected(res.result.campaignId)
                // setInstrumentSelected(res.result.instrumentId)
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
            className="size-md"
        >
            <OffcanvasHeader className="bg-light" id="offcanvasRightLabel" toggle={props.onCloseClick}>Instrument</OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody className="px-0 overflow-hidden">
                    <div className="px-4">
                        <Col lg={12}>
                            <Row>
                                {/* <Col lg={6}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">User <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="userId"
                                            rules={{ required: true }}
                                            disabled
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
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Campaign <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="campaignId"
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
                                            {errors.campaignId && (
                                                <span className="text-danger fs-12">Please Select Campaign</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Instrument <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="instrumentId"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={instrumentOption}
                                                    selected={instrumentSelected}
                                                    isSearchable={true}
                                                    placeholder="Select Instrument"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setInstrumentSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.instrumentId && (
                                                <span className="text-danger fs-12">Please Select Instrument</span>
                                            )}
                                        </div>
                                    </div>
                                </Col> */}
                                <Col lg={6}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Issue Price Per Instrument <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Issue Price Per Instrument"
                                            autoComplete="off"
                                            {...register("issue_price_per_instrument", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.issue_price_per_instrument && (
                                                <span className="text-danger fs-12">Please Enter Issue Price Per Instrument</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Total Number of Instruments <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Total Number of Instruments"
                                            autoComplete="off"
                                            {...register("total_number_of_instrument", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.total_number_of_instrument && (
                                                <span className="text-danger fs-12">Please Enter Total Number of Instruments</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Total Value <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Total Value"
                                            autoComplete="off"
                                            {...register("total_value", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.total_value && (
                                                <span className="text-danger fs-12">Please Enter Total Value</span>
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

export default ImportEditInstrument;