import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Label, Input, Progress, Row, Form, Table, } from 'reactstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

//Images
import profileBg from '../../../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../../../assets/images/users/avatar-1.jpg';

const Index = () => {
SwiperCore.use([Autoplay]);

const [activeTab, setActiveTab] = useState('1');
const [activityTab, setActivityTab] = useState('1');

document.title = "Profile | Velzon - React Admin & Dashboard Template";



return (
  <React.Fragment>
  <div className="page-content">
      <Container fluid>
          <div className="profile-foreground position-relative mx-n4 mt-n4">
              <div className="profile-wid-bg">
                  <img src={profileBg} alt="" className="profile-wid-img" />
              </div>
          </div>
          <div className="pt-4 mb-4 mb-lg-3 pb-lg-4 profile-wrapper">
              <Row className="g-4">
                  <div className="col-auto">
                      <div className="avatar-lg">
                          <img src={avatar1} alt="user-img"
                              className="img-thumbnail rounded-circle" />
                      </div>
                  </div>

                  <Col>
                      <div className="p-2">
                          <h3 className="text-white mb-1">Marcus Svensson</h3>
                          <p className="text-white">Founder @ GrowthMentor <i className="mdi mdi-circle-medium align-middle mx-1"></i> Experience :13 +</p>
                          <div className="hstack text-white gap-1">
                              <div className="me-2"><i
                                  className="ri-map-pin-user-line me-1 text-white fs-17 align-middle"></i>California,
                                  United States</div>
                              <div><i
                                  className="ri-building-line me-1 text-white fs-17 align-middle"></i>Themesbrand
                              </div>
                          </div>
                      </div>
                  </Col>

                  <Col xs={12} className="col-lg-auto order-last order-lg-0">
                      <Row className="text text-white-50 text-center">
                          <Col lg={6} xs={4}>
                              <div className="p-2">
                                  <h4 className="text-white mb-1">24.3K</h4>
                                  <p className="fs-14 mb-0">Followers</p>
                              </div>
                          </Col>
                          <Col lg={6} xs={4}>
                              <div className="p-2">
                                  <h4 className="text-white mb-1">1.3K</h4>
                                  <p className="fs-14 mb-0">Following</p>
                              </div>
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </div>

          <Row>
              <Col lg={12}>
                  <div>
                    <Row>
                                  <Col xxl={3}>
                                      <Card>
                                          <CardBody>
                                              <h5 className="card-title mb-5">Complete Your Profile</h5>
                                              <Progress value={30} color="danger" className="animated-progess custom-progress progress-label" ><div className="label">30%</div> </Progress>
                                          </CardBody>
                                      </Card>

                                      <Card>
                                          <CardBody>
                                              <h5 className="card-title mb-3">Info</h5>
                                              <div className="table-responsive">
                                                  <Table className="table-borderless mb-0">
                                                      <tbody>
                                                          <tr>
                                                              <th className="ps-0" scope="row">Full Name :</th>
                                                              <td className="text-muted">Marcus Svensson</td>
                                                          </tr>
                                                          <tr>
                                                              <th className="ps-0" scope="row">Mobile :</th>
                                                              <td className="text-muted">+(1) 987 6543</td>
                                                          </tr>
                                                          <tr>
                                                              <th className="ps-0" scope="row">E-mail :</th>
                                                              <td className="text-muted">marcus@growthmentor.com</td>
                                                          </tr>
                                                          <tr>
                                                              <th className="ps-0" scope="row">Location :</th>
                                                              <td className="text-muted">California, United States
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <th className="ps-0" scope="row">Joining Date</th>
                                                              <td className="text-muted">24 Nov 2021</td>
                                                          </tr>
                                                      </tbody>
                                                  </Table>
                                              </div>
                                          </CardBody>
                                      </Card>

                                      <Card>
                                          <CardBody>
                                              <h5 className="card-title mb-4">Portfolio</h5>
                                              <div className="d-flex flex-wrap gap-2 social-icons">
                                                  <div>
                                                      <Link to="#" className="avatar-xs d-block">
                                                          <span
                                                              className="avatar-title rounded-circle fs-16 text-bg-light facebook">
                                                              <i className="ri-facebook-fill"></i>
                                                          </span>
                                                      </Link>
                                                  </div>
                                                  <div>
                                                      <Link to="#" className="avatar-xs d-block">
                                                          <span
                                                              className="avatar-title rounded-circle fs-16 text-bg-light twitter">
                                                              <i className="ri-twitter-line "></i>
                                                          </span>
                                                      </Link>
                                                  </div>
                                                  <div>
                                                      <Link to="#" className="avatar-xs d-block">
                                                          <span
                                                              className="avatar-title rounded-circle fs-16 text-bg-light linkedin">
                                                              <i className="ri-linkedin-fill "></i>
                                                          </span>
                                                      </Link>
                                                  </div>
                                              </div>
                                          </CardBody>
                                      </Card>
                                 </Col>
                                  <Col xxl={9}>
                                      <Card>
                                          <CardBody>
                                              <h5 className="card-title mb-3">About</h5>
                                              <p className='text-muted'>Hi I'm Marcus Svensson, As VP of Growth at EuroVPS, I had to make a LOT of decisions, daily. This got exhausting, especially if I had multiple good ideas on how to do something, but wasn't sure which to choose. Moments like these inspired me to build GrowthMentor. Does this resonate? If so, I'd love to try and help you.</p>
                                              <p className='text-muted'>Currently working as Head of Growth at Albacross, started as the only person in our growth team to manage 5 people, from few users to over 20.000+ today. Know my fair share of growth marketing in SaaS, especially for SME....</p>
                                              <Row>
                                                  <Col xs={6} md={4}>
                                                      <div className="d-flex mt-4">
                                                          <div
                                                              className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                              <div
                                                                  className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                  <i className="ri-user-2-fill"></i>
                                                              </div>
                                                          </div>
                                                          <div className="flex-grow-1 overflow-hidden">
                                                              <p className="mb-1">Designation :</p>
                                                              <h6 className="text-truncate mb-0">Founder @ GrowthMentor</h6>
                                                          </div>
                                                      </div>
                                                  </Col>

                                                  <Col xs={6} md={4}>
                                                      <div className="d-flex mt-4">
                                                          <div
                                                              className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                              <div
                                                                  className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                  <i className="ri-global-line"></i>
                                                              </div>
                                                          </div>
                                                          <div className="flex-grow-1 overflow-hidden">
                                                              <p className="mb-1">Website :</p>
                                                              <Link to="#" className="fw-semibold">www.velzon.com</Link>
                                                          </div>
                                                      </div>
                                                  </Col>
                                              </Row>
                                          </CardBody>
                                      </Card>

                                    
                                      <Row>
                                        <Col lg={6}>
                                        <Card>
                                          <CardBody>
                                              <h5 className="card-title mb-3">Address</h5>
                                              <h6>Dr. Manoj Nakra</h6>
                                              <p className='text-muted fs-14'>SmartGlobal Solutions and Services FZ LLE PO Box 4422, Creative Zone, Fujairah, UAE</p>
                                              <p className='text-muted fs-14'>SmartGlobal Solutions and Services, D 210 Defence Colony, New Delhi India 110024</p>
                                              <p className='text-muted fs-14'>Mob: +91-8287345999 (India) /+971-50-5517895 (UAE)</p>
                                              <p className='text-muted fs-14'>Email: manoj@smartglobalme.com </p>
                                          </CardBody>
                                      </Card>
                                        </Col>
                                        <Col lg={6}>
                                        <Card>
                                          <CardBody>
                                              <h5 className="card-title mb-3">Contact Us</h5>
                                            <Form>
                                            <Row>
                                                <Col col={12} md={12}>
                                                <div className='mb-3'>
                                                    <Label htmlFor="labelInput" className="form-label mb-1">Name <span className='error'>*</span></Label>
                                                    <Input type="password" className="form-control" id="labelInput" placeholder='Name' />
                                                </div>
                                                </Col>
                                                <Col col={12} md={12}>
                                                <div className='mb-3'>
                                                    <Label htmlFor="labelInput" className="form-label mb-1">Email <span className='error'>*</span></Label>
                                                    <Input type="password" className="form-control" id="labelInput" placeholder='Email' />
                                                </div>
                                                </Col>
                                                <Col col={12} md={12}>
                                                <div className='mb-3'>
                                                    <Label htmlFor="labelInput" className="form-label mb-1">Phone <span className='error'>*</span></Label>
                                                    <Input type="password" className="form-control" id="labelInput" placeholder='Phone' />
                                                </div>
                                                </Col>
                                                <Col col={12} md={12}>
                                                <div className='mb-3'>
                                                    <Label htmlFor="exampleFormControlTextarea5" className="form-label mb-1">Description <span className='error'>*</span></Label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea5"></textarea>
                                                </div>
                                                </Col>
                                                <Col col={12} md={12}>
                                                <div>
                                                <button type="submit" className="btn btn-brand-theme">Submit</button>
                                                </div>
                                                </Col>
                                            </Row>
                                           </Form>
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

export default Index;
