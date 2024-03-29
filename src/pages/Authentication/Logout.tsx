import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { ProjectName } from "../../Components/constants/layout";
//import images
import Logo from "../../assets/images/scip-logo.svg";
import Lottie from "react-lottie";
import * as animatedData from "../../assets/logout.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

const BasicLogout = () => {
    document.title=`Log Out | ${ProjectName}`;
    return (
        <React.Fragment>
            <div className="auth-page-content">
                <div className="auth-page-wrapper">
                    <ParticlesAuth>
                        <div className="auth-page-content">
                            <Container>
                                <Row>
                                    <Col lg={12}>
                                        <div className="text-center mt-sm-5 mb-4 text-white-50">
                                            <div>
                                                <Link to="/dashboard" className="d-inline-block auth-logo">
                                                    <img src={Logo} alt="" height="20" />
                                                </Link>
                                            </div>
                                            <p className="mt-3 fs-15 fw-medium text-brand">Admin Login</p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center">
                                    <Col>   {/* md={8} lg={6} xl={5} */}
                                        <Card className="mt-4">
                                            <CardBody className="p-4 text-center">
                                                {/* <lord-icon
                                                    src="https://cdn.lordicon.com/hzomhqxz.json"
                                                    trigger="loop"
                                                    colors="primary:#405189,secondary:#08a88a"
                                                    style={{ width: "180px", height: "180px" }}>
                                                </lord-icon> */}
                                                 <Lottie options={defaultOptions} height={180} width={180}  />

                                                <div className="mt-4 pt-2">
                                                    <h5>You are Logged Out</h5>
                                                    <p className="text-muted">Thank you for using  SCIP</p>
                                                    <div className="mt-4">
                                                        <Link to="/login" className="btn btn-brand-theme w-100">Sign In</Link>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </ParticlesAuth>

                </div>
            </div >
        </React.Fragment >
    );
};

export default BasicLogout;