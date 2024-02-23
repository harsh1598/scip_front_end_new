import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert, Spinner, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import classnames from "classnames";
import Logo from "../../assets/images/scip-logo.svg";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions

import withRouter from '../../Components/Common/withRouter';

const SecurityQuestion = (props) => {



    const dispatch = useDispatch();
    const { user, errorMsg, loading, error } = useSelector(state => ({
        user: state.Account.user,
        errorMsg: state.Login.errorMsg,
        loading: state.Login.loading,
        error: state.Login.error,
    }));

    const [userLogin, setUserLogin] = useState([]);
    const [passwordShow, setPasswordShow] = useState(false);
    const [passwordShow2, setPasswordShow2] = useState(false);

    useEffect(() => {
        if (user && user) {
            const updatedUserData = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? user.multiFactor.user.email : user.user.email;
            setUserLogin({
                email: updatedUserData,
                password: user.user.confirm_password ? user.user.confirm_password : ""
            });
        }
    }, [user]);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || "admin@themesbrand.com" || '',
            password: userLogin.password || "123456" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            // console.log('IN Submit')
            // dispatch(loginUser(values, props.router.navigate));
        }
    });

    const signIn = type => {
        // dispatch(socialLogin(type, props.router.navigate));
    };

    //handleTwitterLoginResponse
    // const twitterResponse = e => {}

    //for facebook and google authentication
    const socialResponse = type => {
        signIn(type);
    };

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                // dispatch(resetLoginFlag());
            }, 3000);
        }
    }, [dispatch, error]);


    document.title = "Basic SignIn | Velzon - React Admin & Dashboard Template";
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
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">
                                    <CardBody className="p-4">
                                        <div className="text-center mt-2 mb-4">
                                            <h3 className="text-dark">Security Question and Answer</h3>
                                            <i className='mdi mdi-security h1' style={{color: "#9c9c9c"}} />
                                        </div>

                                        <div className="mb-2">
                                            <Label className="form-label" htmlFor="password-input">Security Question 1</Label>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                <Input
                                                    name="question-1"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter question 1"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <Label className="form-label" htmlFor="password-input">Anaswer</Label>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                <Input
                                                    name="answer-1"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter answer 1"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <div className="mt-4">
                                                <Button disabled={error ? null : loading ? true : false} color='primary' className="w-100 btn-brand-theme" type="submit">
                                                    {error ? null : loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                    Submit
                                                </Button>
                                            </div>
                                        </div>
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

export default withRouter(SecurityQuestion);