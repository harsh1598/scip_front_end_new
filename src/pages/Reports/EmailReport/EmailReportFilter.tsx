import React, { useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col, Modal, ModalHeader, ModalFooter, Card, CardBody, Button, Spinner, } from "reactstrap";
import Flatpickr from "react-flatpickr";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import WebService from "../../../utility/WebService";
import OTPInput from "react-otp-input";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

interface propData {
    show: boolean;
    onCloseClick: any;
    acessMenuData: any;
};

const EmailReportFilter = (props: propData) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const [companyOption, setCompanyOption] = useState<any>([]);
    const [companySelected, setCompanySelected] = useState<any>([]);
    const [campaignOption, setCampaignOption] = useState<any>([]);
    const [campaignSelected, setCampaignSelected] = useState<any>([]);
    const [emailReportData, setEmailReportData] = useState<any>([]);
    const [userOtp, setUserOtp] = useState<any>([]);
    const [data, setData] = useState<any>({ alert: false });
    const [error, setError] = useState<any>(false);
    const [loading, setLoading] = useState<any>(false);

    useEffect(() => {
        if(props.show){
            getCompanyList()
        }
    }, [props.show])

    const getCompanyList = () => {
        WebService.getAPI({
            action: `/report/all-company-list`,
            body: null
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].companyId, value: res.list[i].company_name });
                }
                setCompanyOption(array);
            })
            .catch((e) => {
            })
    }

    const getCampaignList = (id: any) => {
        WebService.getAPI({
            action: `/report/all-campaign-list/${id}`,
            body: null
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
            .catch((e) => {
            })
    }

    const onClickExport = (data: any) => {
        if (props.acessMenuData.is_export == 1 && props.acessMenuData.is_opt_export == 0) {
            sendOtp(data)
        } else if (props.acessMenuData.is_export == 1 && props.acessMenuData.is_opt_export == 1) {
        setEmailReportData(data)
        setUserOtp("")
        var obj: any = {}
        obj.type = 'email'
        WebService.postAPI({
            action: `/export/generate-otp`,
            body: obj,
        })
            .then((res: any) => {
                if (res) {
                    setData({ alert: true })
                }
            })
            .catch((e) => {

            });
        }
    }

    const handleChange = (value: any) => {
        setUserOtp(value)
    }

    const onCloseBlade = () => {
        props.onCloseClick()
    }

    const sendOtp = (data?:any) => {
        var obj: any = {}
        obj.type = 'email';
        obj.otp = userOtp;
        obj.is_opt_export = props.acessMenuData.is_opt_export;
        if (props.acessMenuData.is_export == 1) {
            if (data && data?.date && data?.date[0]) {
                obj.start_date = moment(data?.date[0]).format('DD/MM/YYYY');
            }
            if (data && data?.date && data?.date[1]) {
                obj.end_date = moment(data?.date[1]).format('DD/MM/YYYY');
            } if (data && data.companyId) {
                obj.companyId = data.companyId;
            }
            if (data && data.campaignId) {
                obj.campaignId = data.campaignId;
            } else if(props.acessMenuData.is_export == 1 && props.acessMenuData.is_opt_export == 1) {
                if (emailReportData && emailReportData?.date && emailReportData?.date[0]) {
                    obj.start_date = moment(emailReportData.current?.date[0]).format('DD/MM/YYYY');
                }
                if (emailReportData && emailReportData?.date && emailReportData?.date[1]) {
                    obj.end_date = moment(emailReportData?.date[1]).format('DD/MM/YYYY');
                }
                if (emailReportData && emailReportData.companyId) {
                    obj.companyId = emailReportData.companyId;
                }
                if (emailReportData && emailReportData.campaignId) {
                    obj.campaignId = emailReportData.campaignId;
                }
            }
        }
        WebService.postAPI({
            action: "/report/email-report-excel-url",
            body: obj
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
                if (res.url) {
                    window.open(res.url)
                    setData({ alert: false })
                    setUserOtp("")
                }
            }
        }).catch((error: any) => {
            setError(true);
            setLoading(false);
        });
    }

    const resendotp = () => {
        setUserOtp("")
        var obj: any = {}
        obj.type = 'email'
        WebService.postAPI({
            action: `/export/generate-otp`,
            body: obj,
        })
            .then((res: any) => {
                if (res) {
                    setData({ alert: true })
                }
            })
            .catch((e) => {

            });
    }

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <form onSubmit={handleSubmit(onClickExport)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                    Email Report Filter
                </OffcanvasHeader>
                <OffcanvasBody >
                    <div>
                        <Label
                            htmlFor="leads-tags"
                            className="form-label text-muted text-uppercase fw-semibold mb-3"
                        > Filters
                        </Label>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Date </Label>
                                    <Controller
                                        control={control}
                                        name="date"
                                        render={({ field }) => (
                                            <Flatpickr
                                                className="form-control date-picker-icon"
                                                name="date"
                                                placeholder="Select a date"
                                                options={{
                                                    mode: "range",
                                                    dateFormat: "d-m-Y",
                                                    allowInput: true
                                                }}
                                                onChange={(data: any) => {
                                                    field.onChange(data);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Company
                                    </Label>
                                    <Controller
                                        control={control}
                                        name="companyId"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={companyOption}
                                                selected={companySelected}
                                                isSearchable={true}
                                                placeholder="Select Company"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setCompanySelected(data.id);
                                                    if(data.id) {
                                                        getCampaignList(data.id)
                                                    }
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Campaign
                                    </Label>
                                    <Controller
                                        control={control}
                                        name="campaignId"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={campaignOption}
                                                selected={campaignSelected}
                                                isSearchable={true}
                                                placeholder="Select Campaign"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setCampaignSelected(data.id);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme"
                    >
                        <i className="ri-file-excel-line  align-bottom me-1"></i>{" "}Exports
                    </button>
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => onCloseBlade()}
                    >
                        Cancel
                    </button>
                </div>
            </form>
            {/* Modal */}
            <Modal size="md" isOpen={data.alert} centered>
                <ModalHeader className="mb-2" toggle={() => setData({ alert: false })}></ModalHeader>
                <ModalFooter className="">
                    <Row className="justify-content-center">
                        <Col>
                            <Card className="mt-4">
                                <CardBody className="p-4">
                                    <div className="mb-4">
                                        <div className="avatar-lg mx-auto">
                                            <div className="avatar-title bg-light text-brand display-5 rounded-circle">
                                                <i className="ri-mail-line"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 mt-4">
                                        <div className="text-muted text-center mb-4 mx-lg-3">
                                            <h4 className="">Verify Your Email</h4>
                                            <p>Please enter the 4 digit code sent to Email</p>
                                        </div>
                                        <form >
                                            <OTPInput
                                                onChange={handleChange}
                                                value={userOtp}
                                                inputStyle="otpInputStyle"
                                                numInputs={4}
                                                shouldAutoFocus={true}
                                                renderSeparator={<span></span>}
                                                renderInput={(props) => <input {...props} />}
                                            />
                                        </form>
                                        <div className="mt-3">
                                            <Button
                                                type="button"
                                                disabled={error ? false : loading ? true : false} className="w-100 btn-brand-theme"
                                                onClick={() => sendOtp()}
                                            >
                                                {error ? null : loading ? (
                                                    <Spinner size="sm" className="me-2">
                                                        {" "}
                                                        Loading...{" "}
                                                    </Spinner>
                                                ) : null}
                                                Verify OTP
                                            </Button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <div className="mt-4 text-center">
                                <p className="mb-0">Didn't receive a code ? <Link to="" className="fw-semibold text-brand text-decoration-underline" onClick={e => resendotp()}>Resend OTP</Link> </p>
                            </div>
                        </Col>
                    </Row>
                </ModalFooter>
            </Modal>
        </Offcanvas>
    );
};

export default EmailReportFilter;
