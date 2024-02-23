import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, CardBody, Modal, ModalHeader, ModalFooter, Button, Spinner } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import SMEFilter from "./SMEFilter";
import WebService from "../../../utility/WebService";
import Loader from "../../../Components/Loader/Loader";
import moment from "moment";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { Link } from "react-router-dom";

const SMEService = () => {

    document.title = `${ProjectName} | Email`;
    const [formData, setFormData] = useState({ month: { id: moment(new Date()).format('MM'), value: moment(new Date()).format('MMMM') }, year: { id: moment(new Date()).format('YYYY'), value: moment(new Date()).format('YYYY') } });
    const [modelName, setModelName] = useState("");
    const [showloader, setShowLoader] = useState(false);
    const [count, setCount] = useState<any>(0);
    const [data, setData] = useState({ alert: false });
    const [userOtp, setUserOtp] = useState<string>('');
    const [error, setError] = useState<any>(false);
    const [loading, setLoading] = useState<any>(false);
    const [moduleAcessData, setModuleAcessData] = useState<any>([])

    useEffect(() => {
        getModuleAcesslist()
        // getlist(1);

    }, [formData]);

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "sms_service";
        WebService.getAPI({
          action: `/module-access`,
          body: obj,
        })
          .then((res: any) => {
            setModuleAcessData(res.result)
            if (currentPage) {
              getlist(currentPage);
            } else {
              getlist(1);
            }
    
          })
          .catch((error: any) => { });
      };

    const toggleModel = (name: any) => {
        var obj: any = {};
        obj = {
            month: { id: '', value: '' }, year: { id: '', value: '' }
        }
        setFormData({ ...obj })
        setModelName(name);
    };

    const handleRemoveFilter = (name: any) => {
        if (name == 'month') {
            formData.month.id = ''
            formData.month.value = ''
        }

        if (name == 'year') {
            formData.year.id = ''
            formData.year.value = ''
        }
        setFormData({ ...formData })
        // if( formData.month.id == '' &&  formData.year.id == ''  ){
        //     setFormData({ month: { id: moment(new Date()).format('MM'), value: moment(new Date()).format('MMMM') }, year: { id: moment(new Date()).format('YYYY'), value: moment(new Date()).format('YYYY') } })
        // }

    }

    const getlist = (page?: any) => {
        setShowLoader(true);
        let obj: any = {};
        obj.month = formData?.month.id ? formData.month.id : '';
        obj.year = formData?.year.id ? formData.year.id : '';

        WebService.getAPI({
            action: `/sms-log-count`,
            body: obj
        }).then((res: any) => {
            setCount(0);
            if (res && res.count) {
                setCount(res.count);
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    const onClickExport = () => {
        var obj: any = {}
        obj.type = 'Sms_service'
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

    const sendOtp = () => {
        var obj: any = {}
        obj.type = 'Sms_service';
        obj.otp = userOtp;
        WebService.postAPI({
            action: "/sms-excel-url",
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

    const handleChange = (value: any) => {
        setUserOtp(value)
    }

    return (
        <>
            <Loader show={showloader} />
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="SMS" pageTitle="SMS" location={"/admin/menu"} />
                        <Row>
                            <Col lg={12}>
                                <Card id="leadsList">
                                    <CardHeader className="border-0">
                                        <Row className="g-0 align-items-center">
                                            <Col sm={4}>
                                                {
                                                    formData &&
                                                    <Row>
                                                        <div className="filter-choices-input mt-0">
                                                            <div className="choices">
                                                                <div className="choices__inner">
                                                                    <div className="choices__list choices__list--multiple">
                                                                        {
                                                                            formData?.month.id ?
                                                                                <div className="choices__item choices__item--selectable">{formData?.month.value} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter("month")} ></i></div>
                                                                                :
                                                                                ''
                                                                        }
                                                                        {
                                                                            formData?.year.id ?
                                                                                <div className="choices__item choices__item--selectable">{formData?.year.value} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter("year")} ></i></div>
                                                                                :
                                                                                ''
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                }
                                            </Col>
                                            <div className="col-sm-auto ms-auto">
                                                <div className="hstack gap-2 flex-wrap">
                                                    <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('SMEFilter')}>
                                                        <i className="ri-filter-2-line align-bottom me-1"></i>{" "}
                                                        Filters
                                                    </button>
                                                    {moduleAcessData.is_export == 1 && 
                                                    <button type="button" className="btn btn-soft-info" onClick={e => onClickExport()}>
                                                        <i className="mdi mdi-export align-bottom me-1"></i>{" "}
                                                        Export
                                                    </button>
                                                    }
                                                </div>
                                            </div>
                                        </Row>
                                    </CardHeader>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={3} lg={6}>
                                <Card className="ribbon-box right overflow-hidden border">
                                    <CardBody className="text-center p-2">
                                        <h5 className="text-muted">Total Sms</h5>
                                        <p className="fs-15 mt-1 link-primary"> {count} </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
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

                                            <form>
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
                                    <p className="mb-0">Didn't receive a code ? <Link to="" className="fw-semibold text-brand text-decoration-underline" onClick={e => onClickExport()}>Resend OTP</Link> </p>
                                </div>
                            </Col>
                        </Row>
                    </ModalFooter>
                </Modal>

                <SMEFilter
                    formData={formData}
                    setFormData={setFormData}
                    show={modelName === 'SMEFilter' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
            </React.Fragment>
        </>

    );
};

export default SMEService;
