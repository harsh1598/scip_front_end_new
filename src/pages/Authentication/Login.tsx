import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  FormFeedback,
  Spinner,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import classnames from "classnames";
import Logo from "../../assets/images/scip-logo.svg";
import { ProjectName } from "../../Components/constants/layout";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
// actions
import withRouter from "../../Components/Common/withRouter";
import WebService from "../../utility/WebService";
import SignUpCreateNewAccount from "./SignUpCreateNewAccount";

const Login = (props: any) => {
  document.title = `SignIn | ${ProjectName}`;
  const [passwordShow, setPasswordShow] = useState<any>(false);
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);
  const [isShowSignUpBlade, setIsShowSignUpBlade] = useState<any>(false);
  const [typeOfInput, setTypeOfInput] = useState<any>("EMAIL");
  const [PasswordTypeTab, setPasswordTypeTab] = useState<any>("OTP");
  const history = useNavigate();

  const IsSuperAdmin = localStorage.getItem("IsSuperAdmin");

  useEffect(() => {
    localStorage.clear();
    getbaseUrl();
  }, []);

  const TypeOfInputToggle = (tab: any) => {
    if (typeOfInput !== tab) {
      setTypeOfInput(tab);
    }
  };

  const PasswordTypeToggle = (tab: any) => {
    if (PasswordTypeTab !== tab) {
      setPasswordTypeTab(tab);
    }
  };

  const getbaseUrl = () => {
    localStorage.removeItem("api_base_url");
    localStorage.removeItem("tenantId");
    localStorage.removeItem("token");
    localStorage.removeItem("UserData");
    localStorage.setItem("IsSuperAdmin", "N");
    var obj: any = {};
    obj.subdomain = WebService.getSubDomain();

    WebService.postAPI({
      action: "/check-subdomain",
      body: obj,
    })
    
      .then((res: any) => {
        if (res && res.api_base_url && res.tenant_id) {
          localStorage.setItem("api_base_url", res.api_base_url);
          localStorage.setItem("tenantId", res.tenant_id);
          localStorage.setItem("IsSuperAdmin", "N");
          setLoading(false);
        } else {
          localStorage.setItem("IsSuperAdmin", "Y");
        }
      })
      .catch((error: any) => {
        setLoading(false);
      });
  };

  const validation = useFormik({
    initialValues: {
      email: "",
      password: "",
      otp: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email:
        typeOfInput === "EMAIL"
          ? Yup.string().email().required("Please Enter Your Email")
          : Yup.string(),
      phone:
        typeOfInput === "PHONE"
          ? Yup.number().required("Please Enter Your Mobile")
          : Yup.number(),
      password:
        PasswordTypeTab === "PASSWORD"
          ? Yup.string().required("Please Enter Your Password")
          : Yup.string(),
      otp:
        PasswordTypeTab === "OTP"
          ? Yup.string().required("Please Enter Your otp")
          : Yup.string(),
    }),
    onSubmit: (values) => {
      setLoading(true);

      var url = "";
      let data = {
        email: values.email,
        password: values.password,
        otp: values.otp,
        typeOfInput: typeOfInput,
        recaptchaResponse: typeOfInput,
      };
      if (PasswordTypeTab === "PASSWORD") {
        url = "/ouath-token";
      }
      if (PasswordTypeTab === "OTP") {
        url = "/check-login-otp";
      }
      WebService.getAccesstoken({
        action: url,
        body: data,
      })
        .then((res: any) => {
          if (res && res.access_token) {
            localStorage.setItem("token", res.access_token);
            toast.success(res.message);
            getLoginUserDetails();
          }
        })
        .catch((error: any) => {
          setError(true);
          setLoading(false);
        });
    },
  });

  const getLoginUserDetails = () => {
    WebService.getAPI({
      action: "/me",
    })
      .then((res: any) => {
        if (res && res.result) {
          localStorage.setItem("UserData", JSON.stringify(res.result));
          let IS_SUPER_ADMIN = localStorage.getItem("IsSuperAdmin");
          if (res.result && res.result.profileStatus == 'INPROGRESS') {
            if (res.result.email_verified == 'N') {
              alert('Your account is not  activated yet!!')
              localStorage.clear();
              setLoading(false);
              return;
            }
            if (res.result.user_type == 'entrepreneur') {
              history("/entrepreneur/signup/entrepreneur/MQ==");
            } else if (res.result.user_type == 'investor') {
              history("/investor/signup/investor/Mg==");
            } else if (res.result.user_type == 'thirdparty') {
              history("/thirdparty/signup/thirdparty/Mw==");
            } else {
              if (IS_SUPER_ADMIN == "N") {
                history("/dashboard");
              } else {
                history("/manage-tenants");
              }
            }
          } else {
            if (IS_SUPER_ADMIN == "N") {
              history("/dashboard");
            } else {
              history("/manage-tenants");
            }
          }
          setLoading(false);
        }
      })
      .catch((error: any) => {
        setLoading(false);
      });
  };

  const sendOtp = () => {
    // const emailRgex = /^[\w-\.]+@([\w-]+\.)+[\w-]$/
    if (validation.values.email && validation.values.email != "") {
      // emailRgex.test(validation.values.email)
      if (!validation.errors.email || !validation.errors.phone) {
        let data = {};
        if (typeOfInput === "EMAIL") {
          data = {
            email: validation.values.email,
            typeOfInput: typeOfInput,
            recaptchaResponse: typeOfInput,
          };
        }
        if (typeOfInput === "PHONE") {
          data = {
            phone: validation.values.phone,
            typeOfInput: typeOfInput,
            recaptchaResponse: typeOfInput,
          };
        }
        WebService.postAPI({
          action: "/send-otp",
          body: data,
        })
          .then((res: any) => {
            if (res) {
              toast.success(res.message);
              setLoading(false);
            }
          })
          .catch((error: any) => {
            setLoading(false);
          });
      } else {
        validation.setFieldError("email", "Please Enter Valid Email");
      }
    } else {
      validation.setFieldError("email", "Please Enter Email");
      validation.setFieldTouched("email", true);
    }
  };

  const closeSignUp = () => {
    setIsShowSignUpBlade(false);
  }

  return (
    <React.Fragment>
      <ParticlesAuth>

        {isShowSignUpBlade &&
          <SignUpCreateNewAccount
            show={isShowSignUpBlade}
            onCloseClick={closeSignUp} />
        }
        <div className="auth-page-content">
          <Container>
            <Row className="mt-5 pt-5">
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link to="/" className="d-inline-block auth-logo">
                      <img src={Logo} alt="" height="40" />
                    </Link>
                  </div>
                  <p className="mt-3 fs-15 fw-medium text-brand">Admin Login</p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col>
                {/* md={8} lg={6} xl={5} */}
                <Card className="mt-4">
                  <CardBody className="p-4">
                    {/* {errorMsg && errorMsg ? (
                      <Alert color="danger"> {errorMsg} </Alert>
                    ) : null}
                    {msg && msg ? <Alert color="success"> {msg} </Alert> : null} */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                      action="#">
                      <Nav
                        pills
                        className="nav nav-pills nav-custom nav-custom-light mb-3 login-tabs">
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: typeOfInput === "EMAIL",
                            })}
                            onClick={() => {
                              TypeOfInputToggle("EMAIL");
                            }}>
                            Email
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: typeOfInput === "PHONE",
                            })}
                            onClick={() => {
                              TypeOfInputToggle("PHONE");
                            }}>
                            Mobile
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        activeTab={typeOfInput}
                        className="text-muted">
                        <TabPane tabId="EMAIL" id="nav-light-home">
                          <div className="mb-3">
                            <Label htmlFor="email" className="form-label">
                              {" "}
                              Email{" "}
                            </Label>
                            <Input
                              name="email"
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.email || ""}
                              invalid={
                                validation.touched.email &&
                                  validation.errors.email
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.email &&
                              validation.errors.email ? (
                              <FormFeedback type="invalid">
                                {" "}
                                Please Enter Email{" "}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </TabPane>
                        <TabPane tabId="PHONE" id="nav-light-profile">
                          <div className="mb-3">
                            <Label htmlFor="phone" className="form-label">
                              {" "}
                              Mobile No.{" "}
                            </Label>
                            <Input
                              name="phone"
                              className="form-control"
                              placeholder="Enter email"
                              type="number"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.phone || ""}
                              invalid={
                                validation.touched.phone &&
                                  validation.errors.phone
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.phone &&
                              validation.errors.phone ? (
                              <FormFeedback type="invalid">
                                {" "}
                                Please Enter phone{" "}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </TabPane>
                      </TabContent>

                      <Nav
                        pills
                        className="nav nav-pills nav-custom nav-custom-light mb-3 pasword-type-tab">
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: PasswordTypeTab === "OTP",
                            })}
                            onClick={() => {
                              PasswordTypeToggle("OTP");
                            }}>
                            Send OTP
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: PasswordTypeTab === "PASSWORD",
                            })}
                            onClick={() => {
                              PasswordTypeToggle("PASSWORD");
                            }}>
                            I Have Password
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        activeTab={PasswordTypeTab}
                        className="text-muted">
                        <TabPane tabId="OTP" id="nav-light-home">
                          <div className="mb-3">
                            <div className="float-end">
                              <Link
                                to="#"
                                className="text-brand"
                                onClick={() => sendOtp()}>
                                {" "}
                                Send OTP{" "}
                              </Link>
                            </div>
                            <Label
                              className="form-label"
                              htmlFor="password-input">
                              {" "}
                              Enter OTP{" "}
                            </Label>
                            <div className="mb-3">
                              <Input
                                name="otp"
                                value={
                                  PasswordTypeTab === "OTP"
                                    ? validation.values.otp
                                    : ""
                                }
                                type={"text"}
                                className="form-control pe-5"
                                placeholder="Enter Otp"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.otp &&
                                    validation.errors.otp &&
                                    PasswordTypeTab === "OTP"
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.otp &&
                                validation.errors.otp &&
                                PasswordTypeTab === "OTP" ? (
                                <FormFeedback type="invalid">
                                  {" "}
                                  Please Enter otp{" "}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="PASSWORD" id="nav-light-home">
                          <div className="mb-3">
                            <div className="float-end">
                              <Link
                                to="/forgot-password"
                                className="text-muted">
                                {" "}
                                Forgot password?
                              </Link>
                            </div>
                            <Label
                              className="form-label"
                              htmlFor="password-input">
                              {" "}
                              Password{" "}
                            </Label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                              <Input
                                name="password"
                                value={validation.values.password || ""}
                                type={passwordShow ? "text" : "password"}
                                className="form-control pe-5"
                                placeholder="Enter Password"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.password &&
                                    validation.errors.password
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.password &&
                                validation.errors.password ? (
                                <FormFeedback type="invalid">
                                  {" "}
                                  Please Enter Password{" "}
                                </FormFeedback>
                              ) : null}
                              <button
                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                type="button"
                                id="password-addon"
                                onClick={() => setPasswordShow(!passwordShow)}>
                                {" "}
                                <i className="ri-eye-fill align-middle"></i>{" "}
                              </button>
                            </div>
                          </div>
                        </TabPane>
                      </TabContent>

                      {/* {errorMsg && errorMsg ? (<Alert color="danger"> {errorMsg} </Alert>) : null} */}
                      <div className="mt-3">
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="auth-remember-check"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="auth-remember-check">
                            {" "}
                            Remember me{" "}
                          </Label>
                        </div>

                        <div className="mt-4">
                          <Button
                            type="submit"
                            disabled={error ? false : loading ? true : false}
                            color="primary"
                            className="w-100 btn-brand-theme"
                          // onClick={() => history("/dashboard")}
                          >
                            {error ? null : loading ? (
                              <Spinner size="sm" className="me-2">
                                {" "}
                                Loading...{" "}
                              </Spinner>
                            ) : null}
                            Log In
                          </Button>
                        </div>
                        {IsSuperAdmin == 'N' ?
                          <div className="mt-4 text-center">
                            <p className="mb-0">Don't Have An Account? <Link to="" className="fw-semibold text-brand text-decoration-underline" onClick={() => setIsShowSignUpBlade(true)} >Sign Up</Link> </p>
                          </div> : ""
                        }
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default withRouter(Login);
