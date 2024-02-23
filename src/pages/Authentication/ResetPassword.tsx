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
  Spinner,
  FormFeedback,
} from "reactstrap";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import Logo from "../../assets/images/scip-logo.svg";
import { Link, useNavigate } from "react-router-dom";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
// actions
import withRouter from "../../Components/Common/withRouter";
import { ProjectName } from "../../Components/constants/layout";
import toast from "react-hot-toast";
import WebService from "../../utility/WebService";

const ResetPassword = (props: any) => {
  document.title = `Reset Password | ${ProjectName}`;

  const history = useNavigate();
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);
  const [passwordShow, setPasswordShow] = useState<any>(false);
  const [passwordShow2, setPasswordShow2] = useState<any>(false);
  const [data, setData] = useState<any>({ email: "", otp: "" });

  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem("ForgotData") || "");
    setData({ email: localdata.email, otp: localdata.otp });
  }, []);

  const validation = useFormik({
    initialValues: {
      password: "",
      cpassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Please Enter Your Password"),
      cpassword: Yup.string().required("Please Enter Your Confirm Password"),
    }),
    onSubmit: (values) => {
      if (values.password != values.cpassword) {
        toast.error("Passward not match!");
      } else {
        setLoading(true);
        let object = {
          email: data.email,
          otp: data.otp,
          password: values.password,
        };
        // console.log(object)
        WebService.postAPI({
          action: "/reset-new-password",
          body: object,
        })
          .then((res: any) => {
            if (res) {
              history("/login");
              toast.success(res.message);
              setLoading(false);
            }
          })
          .catch((error: any) => {
            setError(true);
            setLoading(false);
          });
      }
    },
  });

  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <Container>
            <Row>
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
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h3 className="text-dark">Reset Password</h3>
                      <p className="text-muted">
                        Your new password must be different from previous used
                        password.
                      </p>
                    </div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                      action="#">
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="password-input">
                          Password
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
                              <div>{validation.errors.password}</div>
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

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="password-input">
                          Confirm Password
                        </Label>
                        <div className="position-relative auth-pass-inputgroup mb-3">
                          <Input
                            name="cpassword"
                            value={validation.values.cpassword || ""}
                            type={passwordShow2 ? "text" : "password"}
                            className="form-control pe-5"
                            placeholder="Enter confirm Password"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.cpassword &&
                              validation.errors.cpassword
                                ? true
                                : false
                            }
                          />
                          {validation.touched.cpassword &&
                          validation.errors.cpassword ? (
                            <FormFeedback type="invalid">
                              <div>{validation.errors.cpassword}</div>
                            </FormFeedback>
                          ) : null}
                          <button
                            className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                            type="button"
                            id="password-addon"
                            onClick={() => setPasswordShow2(!passwordShow2)}>
                            {" "}
                            <i className="ri-eye-fill align-middle"></i>{" "}
                          </button>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="mt-4">
                          <Button
                            disabled={error ? false : loading ? true : false}
                            color="primary"
                            className="w-100 btn-brand-theme"
                            type="submit">
                            {error ? null : loading ? (
                              <Spinner size="sm" className="me-2">
                                {" "}
                                Loading...{" "}
                              </Spinner>
                            ) : null}
                            Reset
                          </Button>
                        </div>
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

export default withRouter(ResetPassword);
