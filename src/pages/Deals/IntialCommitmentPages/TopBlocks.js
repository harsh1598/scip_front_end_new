import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, UncontrolledTooltip, Form, Label } from "reactstrap";

const TopBlocks = () => {

    return (
        <>
           <Card className="card-body mb-0 mx-1">
           <Form>
           <Row>
           <Col md={6}>
           <div className="mb-2">
           <Label>Website</Label>
           <input type='text' name='' value='https://www.google.com/' placeholder='https://www.google.com/' className='form-control opacity-25'  />
           </div>
           <div className="mb-2">
           <Label>Founding Date</Label>
           <input type='text' name='' value='Jan 2024' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Location</Label>
           <input type='text' name='' value='USA' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Activity</Label>
           <input type='text' name='' value='Aerospace' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>BtoC, BtoB..</Label>
           <input type='text' name='' value='B2B' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Tax ID</Label>
           <input type='text' name='' value='123-987-990' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Keywords</Label>
           <input type='text' name='' value='' placeholder='Please pick an option' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Number of Co-founders</Label>
           <input type='text' name='' value='USA' placeholder='Please input amount' className='form-control opacity-50' />
           </div>
           </Col>
           <Col md={6}>
           <div className="mb-2">
           <Label>Amount next fundraising</Label>
           <input type='text' name='' value='2.3B' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Valuation Pre-money</Label>
           <input type='text' name='' value='25B' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Amount to commit</Label>
           <input type='text' name='' value='1.50B' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Currency</Label>
           <input type='text' name='' value='USD' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Timing</Label>
           <input type='text' name='' value='05/12/2023' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Round</Label>
           <input type='text' name='' value='Pre IPO' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Doc Link</Label>
           <input type='text' name='' value='https://www.google.com/' placeholder='' className='form-control opacity-50' />
           </div>
           <div className="mb-2">
           <Label>Last Funding round</Label>
           <input type='text' name='' value='12/12/2023' placeholder='' className='form-control opacity-50' />
           </div>
           </Col>
           </Row>
           </Form>
           </Card>
          
            <Col md={3} className="border-box">
                <Card className="card-body mb-0">
                    <div className="text-center">
                        <h4 class="fs-15 fw-seminormal mb-1">
                            <span
                                class="counter-value"
                                data-target="Not Available"
                            >
                                Not Available
                            </span>
                        </h4>
                        <h5 class="text-muted fs-13 mb-0" id="tooltipTop8">
                            Total Ask
                            <Link to="#">
                                <i className="ri-information-line fs-16 align-middle"></i>
                            </Link>
                            <UncontrolledTooltip
                                placement="bottom"
                                target="tooltipTop8"
                            >
                                This is what Entrepreneur is seeking in the
                                current fund raise. It includes Ask and Commitment
                                from Co Investors
                            </UncontrolledTooltip>
                        </h5>
                    </div>
                </Card>
            </Col>
            <Col md={3} className="border-box">
                <Card className="card-body mb-0">
                    <div className="text-center">
                        <h4 class="fs-15 fw-seminormal mb-1">
                            <span
                                class="counter-value"
                                data-target="Not Available"
                            >
                                5,00,00,001 INR
                            </span>
                        </h4>
                        <h5 class="text-muted fs-13 mb-0" id="tooltipTop9">
                            SCIP Ask
                            <Link to="#">
                                <i className="ri-information-line fs-16 align-middle"></i>
                            </Link>
                            <UncontrolledTooltip
                                placement="bottom"
                                target="tooltipTop9"
                            >
                                This is what the entrepreneur is seeking as in the
                                Application or total fund raise
                            </UncontrolledTooltip>
                        </h5>
                    </div>
                </Card>
            </Col>
            <Col md={3} className="border-box">
                <Card className="card-body mb-0">
                    <div className="text-center">
                        <h4 class="fs-15 fw-seminormal mb-1">
                            <span
                                class="counter-value"
                                data-target="Not Available"
                            >
                                1,00,000 INR
                            </span>
                        </h4>
                        <h5 class="text-muted fs-12 mb-0" id="tooltipTop10">
                            Cash invested in business{" "}
                            <Link to="#">
                                <i className="ri-information-line fs-16 align-middle"></i>
                            </Link>
                            <UncontrolledTooltip
                                placement="bottom"
                                target="tooltipTop10"
                            >
                                This is what the entrepreneur filled in
                                application or 'negotiated'
                            </UncontrolledTooltip>
                        </h5>
                    </div>
                </Card>
            </Col>
            <Col md={3} className="border-box">
                <Card className="card-body mb-0">
                    <div className="text-center">
                        <h4 class="fs-15 fw-seminormal mb-1">
                            <span
                                class="counter-value"
                                data-target="Not Available"
                            >
                                1,11,111 INR
                            </span>
                        </h4>
                        <h5 class="text-muted fs-13 mb-0" id="tooltipTop11">
                            Pre-money valuation{" "}
                            <Link to="#">
                                <i className="ri-information-line fs-16 align-middle"></i>
                            </Link>
                            <UncontrolledTooltip
                                placement="bottom"
                                target="tooltipTop11"
                            >
                                This is what the entrepreneur filled in
                                application or 'negotiated'
                            </UncontrolledTooltip>
                        </h5>
                    </div>
                </Card>
            </Col>
            <Col md={3} className="border-box">
                <Card className="card-body mb-0">
                    <div className="text-center">
                        <h4 class="fs-15 fw-seminormal mb-1">
                            <span
                                class="counter-value"
                                data-target="Not Available"
                            >
                                Not Available
                            </span>
                        </h4>
                        <h5 class="text-muted fs-13 mb-0" id="tooltipTop11">
                            Post-money valuation{" "}
                            <Link to="#">
                                <i className="ri-information-line fs-16 align-middle"></i>
                            </Link>
                            <UncontrolledTooltip
                                placement="bottom"
                                target="tooltipTop11"
                            >
                                This is what the entrepreneur filled in
                                application or 'negotiated'
                            </UncontrolledTooltip>
                        </h5>
                    </div>
                </Card>
            </Col>
            <Col md={3} className="border-box">
                <Card className="card-body mb-0">
                    <div className="text-center">
                        <h4 class="fs-15 fw-seminormal mb-1">
                            <span
                                class="counter-value"
                                data-target="Not Available"
                            >
                                100 INR
                            </span>
                        </h4>
                        <h5 class="text-muted fs-12 mb-0" id="tooltipTop11">
                            Commitment from other
                            <Link to="#">
                                <i className="ri-information-line fs-16 align-middle"></i>
                            </Link>
                            <UncontrolledTooltip
                                placement="bottom"
                                target="tooltipTop11"
                            >
                                Commitment from otherInvestor/Angel networks
                            </UncontrolledTooltip>
                        </h5>
                    </div>
                </Card>
            </Col>
            <Col md={3} className="border-box">
                <Col className="g-2 mt-0">
                    <Card className="card-body mb-0">
                        <div className="text-center">
                            <h4 class="fs-15 fw-seminormal mb-1">
                                <span
                                    class="counter-value"
                                    data-target="Not Available"
                                >
                                    Seed
                                </span>
                            </h4>
                            <h5 class="text-muted fs-13 mb-0" id="tooltipTop11">
                                Round Of Investment
                                <Link to="#">
                                    <i className="ri-information-line fs-16 align-middle"></i>
                                </Link>
                                <UncontrolledTooltip
                                    placement="bottom"
                                    target="tooltipTop11"
                                >
                                    Round Of Investment
                                </UncontrolledTooltip>
                            </h5>
                        </div>
                    </Card>
                </Col>
            </Col>
            <Col md={3} className="border-box">
                <Col className="g-2 mt-0">
                    <Card className="card-body mb-0">
                        <div className="text-center">
                            <h4 class="fs-15 fw-seminormal mb-1">
                                <span
                                    class="counter-value"
                                    data-target="Not Available"
                                >
                                    Not Available
                                </span>
                            </h4>
                            <h5 class="text-muted fs-13 mb-0" id="tooltipTop11">
                                Lead Investor{" "}
                                <Link to="#">
                                    <i className="ri-information-line fs-16 align-middle"></i>
                                </Link>
                                <UncontrolledTooltip
                                    placement="bottom"
                                    target="tooltipTop11"
                                >
                                    Lead Investor
                                </UncontrolledTooltip>
                            </h5>
                        </div>
                    </Card>
                </Col>
            </Col>
        </>
    );
};

export default memo(TopBlocks);
