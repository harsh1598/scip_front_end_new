import PropTypes from "prop-types";
import { useState } from "react";
import {
  Row,
  Col,
  Alert,
  Card,
  CardBody,
  Container,
  FormFeedback,
  Input,
  Label,
  Form,
  Button,
  Spinner,
} from "reactstrap";
import Logo from "../../assets/images/scip-logo.svg";
import { ProjectName } from "../../Components/constants/layout";
import { Link, useNavigate } from "react-router-dom";
// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import Lottie from "react-lottie";
import * as animatedData from "../../assets/mail.json";
// import images
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import WebService from "../../utility/WebService";
import withRouter from "../../Components/Common/withRouter";
import toast from "react-hot-toast";

// defaultOptions for Lottie icon
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animatedData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ForgetPasswordPage = (props: any) => {
  document.title = `Forget Password | ${ProjectName}`;
  const history = useNavigate();
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(false);

  const validation = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      let data = { email: values.email };
      WebService.postAPI({
        action: "/forgot-password",
        body: data,
      })
        .then((res: any) => {
          if (res) {
            var object = { email: res.email, otp: res.otp };
            localStorage.setItem("ForgotData", JSON.stringify(object));
            history("/otp");
            toast.success(res.message);
            setLoading(false);
          }
        })
        .catch((error: any) => {
          setError(true);
          // toast.error(error);
          setLoading(false);
        });
    },
  });

  return (
    <ParticlesAuth>
      <div className="auth-page-content">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mt-sm-5 mb-4 text-white-50">
                <div>
                  <Link to="/" className="d-inline-block auth-logo">
                    <img src={Logo} alt="" height="20" />
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
                    <h3 className="text-dark">Forgot Password?</h3>
                    <p className="text-muted">Reset password</p>

                    {/* <lord-icon
                      src="https://cdn.lordicon.com/rhvddzym.json"
                      trigger="loop"
                      colors="primary:#0ab39c"
                      className="avatar-xl"
                      style={{ width: "120px", height: "120px" }}
                    >
                    </lord-icon> */}
                    <Lottie options={defaultOptions} height={120} width={120} />
                  </div>

                  <Alert
                    className="alert-borderless alert-warning text-center mb-2 mx-2"
                    role="alert">
                    Enter your email and instructions will be sent to you!
                  </Alert>
                  <div className="p-2">
                    {/* {error && error ? (
                      <Alert color="danger" style={{ marginTop: "13px" }}>
                        {error}
                      </Alert>
                    ) : null} */}
                    {/* {forgetSuccessMsg ? (
                      <Alert color="success" style={{ marginTop: "13px" }}>
                        {forgetSuccessMsg}
                      </Alert>
                    ) : null} */}
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}>
                      <div className="mb-4">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.email}</div>
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="text-center mt-4">
                        {/* <button className="btn btn-brand-theme w-100" type="submit">Send Reset Link</button> */}
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
                          Send Reset Link
                        </Button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-4 text-center">
                <p className="mb-0">
                  Wait, I remember my password...{" "}
                  <Link
                    to="/login"
                    className="fw-semibold text-brand text-decoration-underline">
                    {" "}
                    Click here{" "}
                  </Link>{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </ParticlesAuth>
  );
};

ForgetPasswordPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ForgetPasswordPage);
