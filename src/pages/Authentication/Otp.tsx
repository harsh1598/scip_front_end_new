import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Button,
  Spinner,
} from "reactstrap";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
//import images
import Logo from "../../assets/images/scip-logo.svg";
import toast from "react-hot-toast";
import { ProjectName } from "../../Components/constants/layout";
import WebService from "../../utility/WebService";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";

const Otp = () => {
  document.title = `Two Step Verification  | ${ProjectName}`;
  const history = useNavigate();
  const [data, setData] = useState<any>({
    typeOfInput: "",
    text: "",
    recaptchaResponse: "",
  });
  const [userOtp, setUserOtp] = useState<string>("");
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);

  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem("ForgotData") || "");
    let text = "";
    if (localdata.typeOfInput === "EMAIL") {
      text = localdata.email;
    } else {
      text = localdata.phone;
    }
    setData({
      typeOfInput: localdata.typeOfInput,
      text: text,
      recaptchaResponse: localdata.recaptchaResponse,
    });
  }, []);

  const handleChange = (value: any) => {
    setUserOtp(value);
  };

  const sendOtp = () => {
    let object = {};
    object = { email: data.text, otp: userOtp };
    WebService.postAPI({
      action: "/verify-forgot-password-otp",
      body: object,
    })
      .then((res: any) => {
        if (res) {
          localStorage.setItem("ForgotData", JSON.stringify(object));
          history("/reset-password");
          toast.success(res.message);
        }
      })
      .catch((error: any) => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <React.Fragment>
      <div className="auth-page-wrapper">
        <ParticlesAuth>
          <div className="auth-page-content">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="text-center mt-sm-5 mb-4 text-white-50">
                    <div>
                      <Link
                        to="/dashboard"
                        className="d-inline-block auth-logo">
                        <img src={Logo} alt="" height="20" />
                      </Link>
                    </div>
                    <p className="mt-3 fs-15 fw-medium text-brand">
                      Admin Login
                    </p>
                  </div>
                </Col>
              </Row>

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
                          <h4 className="">
                            Verify Your{" "}
                            {data.typeOfInput === "EMAIL" ? "Email" : "PHONE"}{" "}
                          </h4>
                          <p>
                            Please enter the 4 digit code sent to{" "}
                            <span className="fw-semibold">{data.text} </span>
                          </p>
                        </div>

                        <form>
                          {/* <Row>
                                                        <Col className="col-3">
                                                            <div className="mb-3">
                                                                <label htmlFor="digit1-input" className="visually-hidden">Digit 1</label>
                                                                <input type="text"
                                                                    className="form-control form-control-lg bg-light border-light text-center"
                                                                    maxLength={1}
                                                                    id="digit1-input" onKeyUp={() => moveToNext(1)} />
                                                            </div>
                                                        </Col>

                                                        <Col className="col-3">
                                                            <div className="mb-3">
                                                                <label htmlFor="digit2-input" className="visually-hidden">Digit 2</label>
                                                                <input type="text"
                                                                    className="form-control form-control-lg bg-light border-light text-center"
                                                                    maxLength={1}
                                                                    id="digit2-input" onKeyUp={() => moveToNext(2)} />
                                                            </div>
                                                        </Col>

                                                        <Col className="col-3">
                                                            <div className="mb-3">
                                                                <label htmlFor="digit3-input" className="visually-hidden">Digit 3</label>
                                                                <input type="text"
                                                                    className="form-control form-control-lg bg-light border-light text-center"
                                                                    maxLength={1}
                                                                    id="digit3-input" onKeyUp={() => moveToNext(3)} />
                                                            </div>
                                                        </Col>

                                                        <Col className="col-3">
                                                            <div className="mb-3">
                                                                <label htmlFor="digit4-input" className="visually-hidden">Digit 4</label>
                                                                <input type="text"
                                                                    className="form-control form-control-lg bg-light border-light text-center"
                                                                    maxLength={1}
                                                                    id="digit4-input" onKeyUp={() => moveToNext(4)} />
                                                            </div>
                                                        </Col>
                                                    </Row> */}

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
                            disabled={error ? false : loading ? true : false}
                            className="w-100 btn-brand-theme"
                            onClick={() => sendOtp()}>
                            {error ? null : loading ? (
                              <Spinner size="sm" className="me-2">
                                {" "}
                                Loading...{" "}
                              </Spinner>
                            ) : null}
                            Verify Otp
                          </Button>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <div className="mt-4 text-center">
                    <p className="mb-0">
                      Didn't receive a code ?{" "}
                      <Link
                        to="/auth-pass-reset-basic"
                        className="fw-semibold text-brand text-decoration-underline">
                        Resend
                      </Link>{" "}
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </ParticlesAuth>
      </div>
    </React.Fragment>
  );
};

export default Otp;
