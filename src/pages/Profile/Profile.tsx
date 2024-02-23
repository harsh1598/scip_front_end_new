import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap';
//Image
import profileBg from '../../assets/images/profile-bg.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';
import Logo from "../../assets/images/short-logo.svg"
import { ProjectName } from "../../Components/constants/layout";

const Profile = () => {

    // document.title = "Profile | Admin";
    document.title = `Profile | ${ProjectName}`;

    const [data, setData] = useState<any>({});

    useEffect(() => {
        const localdata = JSON.parse(localStorage.getItem("UserData") || "");
        setData(localdata);

    }, []);

    // console.log(data , "data")

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                            <img src={profileBg} alt="" className="profile-wid-img" />
                        </div>
                    </div>
                    <div className="pt-4 pb-lg-4 profile-wrapper">
                        <Row className="g-0">
                            <div className="col-auto col-md-auto col-12">
                                <div className="avatar-lg">
                                    <img src={avatar4} alt="user-img"
                                        className="img-thumbnail rounded-circle" />
                                </div>
                            </div>
                            <Col className=''>
                                <div className="px-4">
                                {/* Smriti Misra */}
                                    <h3 className="text-white mb-1">{data.first_name ? data.first_name :""} {data.last_name ? data.last_name :""}</h3>
                                    {/* <div className="me-2 text-white-50">
                                        <i className=" ri-mail-line me-1 text-white-75 fs-16 align-middle"></i> <a href="mailto:smisra24@gmail.com" className='text-white-50'>smisra24@gmail.com</a>
                                    </div> */}
                                    <div className="me-2 text-white-50">
                                        <i className=" ri-mail-line me-1 text-white-75 fs-16 align-middle"></i>
                                        <Link to={`mailto:${data.email ? data.email :""}`} className='text-white-50' style={{ color: '#FFF !important'}}>{data.email ? data.email :""}</Link>
                                    </div> 
                                    {/* <div className="me-2 text-white-50">
                                        <i className="ri-phone-line me-1 text-white-75 fs-16 align-middle"></i><a href="tel: 8587988504" className=' text-white-50'>8587988504</a> 
                                    </div> */}
                                <div className="me-2 text-white-50">
                                        <i className="ri-phone-line me-1 text-white-75 fs-16 align-middle"></i>
                                        <Link to={`tel:${data.phone ? data.phone :""}`} className='text-white-50' style={{ color: '#FFF !important'}}>{data.phone ? data.phone :""}</Link>
                                    </div>
                                    <div className="hstack text-white-50 gap-1">
                                        {/* <div>
                                            <i className="ri-building-line me-1 text-white-75 fs-16 align-middle"></i>
                                            Module No.6, Sixth Floor , Block A - Phase II, IIT Madras Research Park, Kanagam Road , Taramani, Chennai, Tamil Nadu 600113
                                        </div> */}
                                        <div>
                                            <i className="ri-building-line me-1 text-white-75 fs-16 align-middle" style={{ color: '#FFF !important'}}></i>{data.address ? data.address : ""}
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} className="col-lg-auto order-last order-lg-0">
                                <Link to="/edit-profile" className="btn btn-light"><i
                                    className="ri-edit-box-line align-bottom"></i> Edit Profile</Link>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <Row>
                                    <Col xxl={12}>
                                        <Card>
                                            <CardHeader className="align-items-center d-flex">
                                                <h4 className="card-title mb-0  me-2">Basic Information</h4>
                                            </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col lg={2}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">Company Logo</Label>
                                                            <div className=" ">
                                                                <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                                                    <img src={Logo}
                                                                        className="rounded avatar-xl img-thumbnail user-profile-image"
                                                                        alt="user-profile" />
                                                                    <div className="avatar-xs p-0 rounded profile-photo-edit">
                                                                        <Input id="profile-img-file-input" type="file"
                                                                            className="profile-img-file-input" />
                                                                        <Label htmlFor="profile-img-file-input"
                                                                            className="profile-photo-edit avatar-xs">
                                                                            <span className="avatar-title rounded-circle bg-brand text-white ms-3 mt-2">
                                                                                <i className="ri-pencil-line"></i>
                                                                            </span>
                                                                        </Label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="SyndicatenameInput" className="form-label">Syndicate name <span className='text-danger'>*</span></Label>
                                                            <Input type="text" className="form-control" id="SyndicatenameInput" defaultValue={data.user_type ? data.user_type : ""} disabled/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <Label htmlFor="CityInput" className="form-label">City <span className='text-danger'>*</span></Label>
                                                            <Input type="text" className="form-control" id="CityInput" defaultValue={data.city ? data.city.cityName : ""}  disabled/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                        <Row>
                                            <Col lg={12}>
                                                <Card>
                                                    <CardHeader className="align-items-center d-flex">
                                                        <h4 className="card-title mb-0  me-2">Signature</h4>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Row>
                                                            <Col md={10}>
                                                                <p className='mb-1'>Thanks & Regards,</p>
                                                                <p className='mb-0'>Anna Parker</p>
                                                                <p className='mb-0'>+91-XXXX-XXXX</p>
                                                                <p className='mb-0'>sm@yopmail.com</p>
                                                            </Col>
                                                            <Col md={2} className='text-end'>
                                                                <a href='javascript:void(0)' className='text-brand fs-5'><i className='ri ri-edit-fill'></i></a>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Profile;