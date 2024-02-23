import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, Input, Label, Row, Spinner, } from 'reactstrap';
//import images
import progileBg from '../../assets/images/profile-bg.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";

const EditProfile = () => {

    document.title = "Edit Profile Settings | Admin";
    const history = useNavigate();
    const [data, setData] = useState<any>({});
    const [error, setError] = useState<any>(false);
    const [loading, setLoading] = useState<any>(false);

    const validation = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            address: "",
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("Please Enter Your FirstName"),
            last_name: Yup.string().required("Please Enter Your LastName"),
            phone: Yup.number().required("Please Enter Your Phone Number"),
            email: Yup.string().email().required("Please Enter Your Email"),
            address: Yup.string().required("Please Enter Your Address"),
        }),
        onSubmit: (values) => {
            console.log(values, "values");

        },
    });

    useEffect(() => {

        const localdata = JSON.parse(localStorage.getItem("UserData") || "");
        setData(localdata);
        validation.setFieldValue("first_name", localdata?.first_name);
        validation.setFieldValue("last_name", localdata?.last_name);
        validation.setFieldValue("phone", localdata?.phone);
        validation.setFieldValue("email", localdata?.email);
        validation.setFieldValue("address", localdata?.address);

    }, []);



    return (
        <React.Fragment>
            <div className="page-content mt-5">
                <Container fluid>
                    {/* <div className="position-relative mx-n4 mt-n4 mb-n5">
                        <div className="profile-wid-bg profile-setting-img">
                            <img src={progileBg} className="profile-wid-img" alt="" />
                        </div>
                    </div> */}
                    <Row>
                        <Col xxl={3}>
                            <Card className="mt-n5">
                                <CardBody className="p-4">
                                    <div className="text-center">
                                        <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                            <img src={avatar4}
                                                className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                                                alt="user-profile" />
                                            <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                <Input id="profile-img-file-input" type="file"
                                                    className="profile-img-file-input" />
                                                <Label htmlFor="profile-img-file-input"
                                                    className="profile-photo-edit avatar-xs">
                                                    <span className="avatar-title rounded-circle bg-light text-body">
                                                        <i className="ri-camera-fill"></i>
                                                    </span>
                                                </Label>
                                            </div>
                                        </div>
                                        {/* <h5 className="fs-16 mb-1">Smriti Misra</h5> */}
                                        <h5 className="fs-16 mb-1">{data.first_name ? data.first_name : ""} {data.last_name ? data.last_name : ""}</h5>
                                    </div>
                                </CardBody>
                            </Card>

                        </Col>

                        <Col xxl={9}>
                            <Card className="mt-xxl-n5">
                                <CardHeader>
                                    <h4 className="card-title mb-0  me-2">Edit Information</h4>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <Form onSubmit={(e) => {
                                        e.preventDefault();
                                        validation.handleSubmit();
                                        return false;
                                    }}>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Label htmlFor="firstnameInput" className="form-label">First
                                                        Name</Label>
                                                    {/* <Input type="text" className="form-control" id="firstnameInput"
                                                        placeholder="Enter your firstname" defaultValue="Smriti" /> */}
                                                    <Input name="first_name" className="form-control" placeholder="Enter your firstname"
                                                        type="text" onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur} value={validation.values.first_name}
                                                        invalid={
                                                            validation.touched.first_name &&
                                                                validation.errors.first_name
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.first_name && validation.errors.first_name ? (
                                                        <FormFeedback type="invalid">  Please Enter firstname </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Label htmlFor="lastnameInput" className="form-label">Last
                                                        Name</Label>
                                                    {/* <Input type="text" className="form-control" id="lastnameInput"
                                                        placeholder="Enter your lastname" defaultValue="Misra" /> */}
                                                    <Input name="last_name" className="form-control" placeholder="Enter your lastname"
                                                        type="text" onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur} value={validation.values.last_name}
                                                        invalid={
                                                            validation.touched.last_name &&
                                                                validation.errors.last_name
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.last_name && validation.errors.last_name ? (
                                                        <FormFeedback type="invalid">  Please Enter lastname </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Label htmlFor="phonenumberInput" className="form-label">Phone
                                                        Number</Label>
                                                    {/* <Input type="text" className="form-control"
                                                        id="phonenumberInput"
                                                        placeholder="Enter your phone number"
                                                        defaultValue="8587988504" /> */}
                                                    <Input name="phone" className="form-control" placeholder="Enter your phone number"
                                                        type="text" onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur} value={validation.values.phone}
                                                        invalid={
                                                            validation.touched.phone &&
                                                                validation.errors.phone
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.phone && validation.errors.phone ? (
                                                        <FormFeedback type="invalid">  Please Enter phone number </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Label htmlFor="emailInput" className="form-label">Email
                                                        Address</Label>
                                                    {/* <Input type="email" className="form-control" id="emailInput"
                                                        placeholder="Enter your email"
                                                    /> */}
                                                    <Input name="email" className="form-control" placeholder="Enter your email"
                                                        type="text" onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur} value={validation.values.email}
                                                        invalid={
                                                            validation.touched.email &&
                                                                validation.errors.email
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid">  Please Enter your email </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <div className="mb-3 pb-2">
                                                    <Label htmlFor="exampleFormControlTextarea"
                                                        className="form-label">Address</Label>
                                                    {/* <textarea className="form-control"
                                                        id="exampleFormControlTextarea"
                                                        rows={3} defaultValue="Module No.6, Sixth Floor , Block A - Phase II, IIT Madras Research Park, Kanagam Road , Taramani, Chennai, Tamil Nadu 600113"></textarea> */}
                                                    <textarea className="form-control" id="address" rows={3}
                                                        onChange={validation.handleChange} onBlur={validation.handleBlur}
                                                        defaultValue={validation.values.address} >
                                                    </textarea>
                                                    {validation.touched.address && validation.errors.address ? (
                                                        <FormFeedback type="invalid">  Please Enter your address </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <div className="hstack gap-2 justify-content-end">
                                                    {/* <button type="button"
                                                        className="btn btn-brand-theme">Update</button> */}
                                                    <Button
                                                        type="submit"
                                                        disabled={error ? false : loading ? true : false} className="btn btn-brand-theme" >
                                                        {error ? null : loading ? (
                                                            <Spinner size="sm" className="me-2">
                                                                {" "}
                                                                Loading...{" "}
                                                            </Spinner>
                                                        ) : null}
                                                        Update
                                                    </Button>
                                                    <Link to="/profile"
                                                        className="btn btn-soft-danger">Cancel</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default EditProfile;