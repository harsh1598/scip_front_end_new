import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Button,
  UncontrolledTooltip,
  Progress,
  Form,
  Label,
  Input,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Tags from "./IntialCommitmentPages/Tags";
import CommitmentByOtherInvestorsAngelNetworks from "./CallForMoneyPages/CommitmentByOtherInvestorsAngelNetworks";
import CommitmentByOtherInvestorsAngelNetworksTbl from "./CallForMoneyPages/CommitmentByOtherInvestorsAngelNetworksTbl";
import InvestmentInstrument from "./CallForMoneyPages/InvestmentInstrument";
import InvestmentInstrumentTbl from "./CallForMoneyPages/InvestmentInstrumentTbl";
import CallForMoneyTbl from "./CallForMoneyPages/CallForMoneyTbl";
import TransactionDetails from "./CallForMoneyPages/TransactionDetails";

const CallForMoney = () => {
  const [modelName, setModelName] = useState("");

  const toggleModel = (name) => {
    setModelName(name);
  };

  return (
    <React.Fragment>
      <Row className="g-2">
        <Col md={3} className="border-box">
          <Card className="card-body mb-0">
            <div className="text-center">
              <h4 className="fs-15 fw-semibold mb-1">
                <span
                  className="counter-value"
                  data-target="Not Available"
                >
                  Not Available
                </span>
              </h4>
              <h5 className="text-muted fs-13 mb-0" id="tooltipTop8">
                Total Ask{" "}
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
              <h4 className="fs-15 fw-semibold mb-1">
                <span
                  className="counter-value"
                  data-target="Not Available"
                >
                  5,00,00,001 INR
                </span>
              </h4>
              <h5 className="text-muted fs-13 mb-0" id="tooltipTop9">
                SCIP Ask{" "}
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
              <h4 className="fs-15 fw-semibold mb-1">
                <span
                  className="counter-value"
                  data-target="Not Available"
                >
                  1,00,000 INR
                </span>
              </h4>
              <h5 className="text-muted fs-12 mb-0" id="tooltipTop10">
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
              <h4 className="fs-15 fw-semibold mb-1">
                <span
                  className="counter-value"
                  data-target="Not Available"
                >
                  1,11,111 INR
                </span>
              </h4>
              <h5 className="text-muted fs-13 mb-0" id="tooltipTop11">
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
              <h4 className="fs-16 fw-semibold mb-1">
                <span
                  className="counter-value"
                  data-target="Not Available"
                >
                  Not Available
                </span>
              </h4>
              <h5 className="text-muted fs-13 mb-0" id="tooltipTop11">
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
              <h4 className="fs-16 fw-semibold mb-1">
                <span
                  className="counter-value"
                  data-target="Not Available"
                >
                  100 INR
                </span>
              </h4>
              <h5 className="text-muted fs-12 mb-0" id="tooltipTop11">
                Commitment from other{" "}
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
                <h4 className="fs-16 fw-semibold mb-1">
                  <span
                    className="counter-value"
                    data-target="Not Available"
                  >
                    Seed
                  </span>
                </h4>
                <h5 className="text-muted fs-13 mb-0" id="tooltipTop11">
                  Round Of Investment{" "}
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
                <h4 className="fs-16 fw-semibold mb-1">
                  <span
                    className="counter-value"
                    data-target="Not Available"
                  >
                    Not Available
                  </span>
                </h4>
                <h5 className="text-muted fs-13 mb-0" id="tooltipTop11">
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
      </Row>
      <Row className="g-2 mt-2">
        <Col md={4} className="mt-0">
          <Card className="mb-2">
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2">
                Initial Commitment
              </h4>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={6} className="border-end">
                  <div className="flex-grow-1">
                    <h5 className="fs-14">Status</h5>
                    <div>
                      <Progress
                        value={15}
                        color="primary"
                        className="animated-progess custom-progress progress-label"
                      >
                        <div className="label">15%</div>
                      </Progress>
                      <div className="text-end">
                        <small>12,00,000 INR</small>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <h5 className="fs-14">Target Amount</h5>
                  <h3 className="fs-20 mb-0">5,00,00,001 INR</h3>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        <Col md={4} className="mt-0">
          <Card className="mb-1 mt-0">
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2">
                Final Commitment
              </h4>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={6} className="border-end">
                  <div className="flex-grow-1">
                    <h5 className="fs-14">Status</h5>
                    <div>
                      <Progress
                        value={95}
                        color="primary"
                        className="animated-progess custom-progress progress-label"
                      >
                        <div className="label">95%</div>{" "}
                      </Progress>
                      <div className="text-end">
                        <small>33,71,00,000 INR</small>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <h5 className="fs-14">Target Amount</h5>
                  <h3 className="fs-20 mb-0">5,00,00,001 INR</h3>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md={4} className="mt-0">
          <Card className="mb-1 mt-0">
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2">
                Call For Money
              </h4>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={6} className="border-end">
                  <div className="flex-grow-1">
                    <h5 className="fs-14">Status</h5>
                    <div>
                      <Progress
                        value={95}
                        color="primary"
                        className="animated-progess custom-progress progress-label"
                      >
                        <div className="label">95%</div>{" "}
                      </Progress>
                      <div className="text-end">
                        <small>33,71,00,000 INR</small>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <h5 className="fs-14">Target Amount</h5>
                  <h3 className="fs-20 mb-0">5,00,00,001 INR</h3>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/*
      <Row className="g-2 mt-2">
        <Col md={12} className="mt-0">
          <Card className="mb-1 mt-0">
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2">
                Final Commitment
              </h4>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={6} className="border-end">
                  <div className="flex-grow-1">
                    <h5 className="fs-14">Status</h5>
                    <div>
                      <Progress
                        value={95}
                        color="primary"
                        className="animated-progess custom-progress progress-label"
                      >
                        <div className="label">95%</div>{" "}
                      </Progress>
                      <div className="text-end">
                        <small>33,71,00,000 INR</small>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <h5 className="fs-14">Target Amount</h5>
                  <h3>5,00,00,001 INR</h3>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="g-2 mt-2">
        <Col md={12} className="mt-0">
          <Card className="mb-1 mt-0">
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2">
                Call For Money (efwef)
              </h4>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={6} className="border-end">
                  <div className="flex-grow-1">
                    <h5 className="fs-14">Status</h5>
                    <div>
                      <Progress
                        value={95}
                        color="primary"
                        className="animated-progess custom-progress progress-label"
                      >
                        <div className="label">95%</div>{" "}
                      </Progress>
                      <div className="text-end">
                        <small>33,71,00,000 INR</small>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <h5 className="fs-14">Target Amount</h5>
                  <h3>5,00,00,001 INR</h3>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
  */}
      <Row className="g-2 mt-0">
        <Col md={12} className="mt-0">
          <CallForMoneyTbl toggleModel={toggleModel} />
        </Col>
      </Row>
      <Row className="g-2 mt-0">
        <Col md={12} className="mt-0">
          <InvestmentInstrumentTbl toggleModel={toggleModel} />
        </Col>
      </Row>
      <Row className="g-2 mt-2">
        <Col md={12} className="mt-0">
          <CommitmentByOtherInvestorsAngelNetworksTbl toggleModel={toggleModel} />
        </Col>
      </Row>

      {/* Commitment Investors Modal */}
      <CommitmentByOtherInvestorsAngelNetworks
        show={modelName === "CommitmentByOtherInvestorsAngelNetworks" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      {/* Investment Instrument Modal */}
      <InvestmentInstrument
        show={modelName === "InvestmentInstrument" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      {/* Transaction Details Modal */}
      <TransactionDetails
        show={modelName === "TransactionDetails" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <Tags
        show={modelName === "Tags" ? true : false}
        onCloseClick={() => setModelName("")}
      />
    </React.Fragment>
  );
};

export default CallForMoney;
