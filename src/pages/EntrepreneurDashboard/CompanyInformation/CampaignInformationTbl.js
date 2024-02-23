import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Input, UncontrolledTooltip } from "reactstrap";
import CurrencyModal from "./Modals/CurrencyModal";
import Notes from "./Modals/Notes";

const CampaignInformationTbl = () => {
  // Default Accordion
  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");

  const toggleModel = (name) => {
    setModelName(name);
  };

  const [isTeamMember, setIsTeamMember] = useState(false);
  const toggleTeamMember = () => {
    setIsTeamMember(!isTeamMember);
  };

  const data = [
    {
      id: 1,
      reportTitle: "Test URL",
      period: "Q2 2021 - 2022",
      date: "02/08/2023",
    },
  ];

  return (
    <React.Fragment>
      <Row className="g-0 pt-2 align-items-center">
        <Col sm={6}>
          <h5>Campaign Information</h5>
          <h6>Watcon Seed 2</h6>
        </Col>

        <div className="col-sm-auto ms-auto">
          <div className="d-flex hstack gap-2 flex-wrap">
            <button
              type="button"
              className="btn btn-brand-theme"
              id="CurrencyModal"
              onClick={(e) => toggleModel("CurrencyModal")}
            >
              Currency
            </button>
          </div>
        </div>
      </Row>

      <Row className="g-2 mt-2">
        <Col md={3} className="border-box">
          <Card className="card-body mb-0">
            <div className="text-center">
              <h4 class="fs-15 fw-seminormal mb-1">
                <span class="counter-value" data-target="Not Available">
                  Not Available
                </span>
              </h4>
              <h5 class="text-muted fs-13 mb-0" id="tooltipTop8">
                Total Ask &nbsp;
                <Link to="#">
                  <i className="ri-information-line fs-16 align-middle"></i>
                </Link>
                <UncontrolledTooltip placement="bottom" target="tooltipTop8">
                  This is what Entrepreneur is seeking in the current fund
                  raise. It includes Ask and Commitment from Co Investors
                </UncontrolledTooltip>
              </h5>
              <div className="iconPosition">
               <Link to="#" className="text-dark me-2"><i className="ri-edit-box-line align-bottom fs-16"></i></Link>
               <Link to="#" className="text-dark" id="Notes"
               onClick={(e) => toggleModel("Notes")}><i className="ri-chat-1-line align-bottom fs-16"></i></Link>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={3} className="border-box">
          <Card className="card-body mb-0">
            <div className="text-center">
              <h4 class="fs-15 fw-seminormal mb-1">
                <span class="counter-value" data-target="Not Available">
                  5,00,00,001 INR
                </span>
              </h4>
              <h5 class="text-muted fs-13 mb-0" id="tooltipTop9">
                SCIP Ask &nbsp;
                <Link to="#">
                  <i className="ri-information-line fs-16 align-middle"></i>
                </Link>
                <UncontrolledTooltip placement="bottom" target="tooltipTop9">
                  This is what the entrepreneur is seeking as in the Application
                  or total fund raise
                </UncontrolledTooltip>
              </h5>
              <div className="iconPosition">
              <Link to="#" className="text-dark me-2"><i className="ri-edit-box-line align-bottom fs-16"></i></Link>
              <Link to="#" className="text-dark" id="Notes"
              onClick={(e) => toggleModel("Notes")}><i className="ri-chat-1-line align-bottom fs-16"></i></Link>
             </div>
            </div>
          </Card>
        </Col>
        <Col md={3} className="border-box">
          <Card className="card-body mb-0">
            <div className="text-center">
              <h4 class="fs-15 fw-seminormal mb-1">
                <span class="counter-value" data-target="Not Available">
                  1,00,000 INR
                </span>
              </h4>
              <h5 class="text-muted fs-12 mb-0" id="tooltipTop10">
                Cash invested in business &nbsp;
                <Link to="#">
                  <i className="ri-information-line fs-16 align-middle"></i>
                </Link>
                <UncontrolledTooltip placement="bottom" target="tooltipTop10">
                  This is what the entrepreneur filled in application or
                  'negotiated'
                </UncontrolledTooltip>
              </h5>
              <div className="iconPosition">
              <Link to="#" className="text-dark me-2"><i className="ri-edit-box-line align-bottom fs-16"></i></Link>
              <Link to="#" className="text-dark" id="Notes"
              onClick={(e) => toggleModel("Notes")}><i className="ri-chat-1-line align-bottom fs-16"></i></Link>
             </div>
            </div>
          </Card>
        </Col>
        <Col md={3} className="border-box">
          <Card className="card-body mb-0">
            <div className="text-center">
              <h4 class="fs-15 fw-seminormal mb-1">
                <span class="counter-value" data-target="Not Available">
                  1,11,111 INR
                </span>
              </h4>
              <h5 class="text-muted fs-13 mb-0" id="tooltipTop11">
                Pre-money valuation &nbsp;
                <Link to="#">
                  <i className="ri-information-line fs-16 align-middle"></i>
                </Link>
                <UncontrolledTooltip placement="bottom" target="tooltipTop11">
                  This is what the entrepreneur filled in application or
                  'negotiated'
                </UncontrolledTooltip>
              </h5>
              <div className="iconPosition">
              <Link to="#" className="text-dark me-2"><i className="ri-edit-box-line align-bottom fs-16"></i></Link>
              <Link to="#" className="text-dark" id="Notes"
              onClick={(e) => toggleModel("Notes")}><i className="ri-chat-1-line align-bottom fs-16"></i></Link>
             </div>
            </div>
          </Card>
        </Col>
        <Col md={3} className="border-box">
          <Card className="card-body mb-0">
            <div className="text-center">
              <h4 class="fs-15 fw-seminormal mb-1">
                <span class="counter-value" data-target="Not Available">
                  Not Available
                </span>
              </h4>
              <h5 class="text-muted fs-13 mb-0" id="tooltipTop11">
                Post-money valuation &nbsp;
                <Link to="#">
                  <i className="ri-information-line fs-16 align-middle"></i>
                </Link>
                <UncontrolledTooltip placement="bottom" target="tooltipTop11">
                  This is what the entrepreneur filled in application or
                  'negotiated'
                </UncontrolledTooltip>
              </h5>
              <div className="iconPosition">
              <Link to="#" className="text-dark me-2"><i className="ri-edit-box-line align-bottom fs-16"></i></Link>
              <Link to="#" className="text-dark" id="Notes"
              onClick={(e) => toggleModel("Notes")}><i className="ri-chat-1-line align-bottom fs-16"></i></Link>
             </div>
            </div>
          </Card>
        </Col>
        <Col md={3} className="border-box">
          <Card className="card-body mb-0">
            <div className="text-center">
              <h4 class="fs-15 fw-seminormal mb-1">
                <span class="counter-value" data-target="Not Available">
                  100 INR
                </span>
              </h4>
              <h5 class="text-muted fs-12 mb-0" id="tooltipTop11">
                Commitment from other &nbsp;
                <Link to="#">
                  <i className="ri-information-line fs-16 align-middle"></i>
                </Link>
                <UncontrolledTooltip placement="bottom" target="tooltipTop11">
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
                  <span class="counter-value" data-target="Not Available">
                    Seed
                  </span>
                </h4>
                <h5 class="text-muted fs-13 mb-0" id="tooltipTop11">
                  Round Of Investment &nbsp;
                  <Link to="#">
                    <i className="ri-information-line fs-16 align-middle"></i>
                  </Link>
                  <UncontrolledTooltip placement="bottom" target="tooltipTop11">
                    Round Of Investment
                  </UncontrolledTooltip>
                </h5>
                <div className="iconPosition">
                <Link to="#" className="text-dark me-2"><i className="ri-edit-box-line align-bottom fs-16"></i></Link>
               </div>
              </div>
            </Card>
          </Col>
        </Col>
        <Col md={3} className="border-box">
          <Col className="g-2 mt-0">
            <Card className="card-body mb-0">
              <div className="text-center">
                <h4 class="fs-15 fw-seminormal mb-1">
                  <span class="counter-value" data-target="Not Available">
                    Not Available
                  </span>
                </h4>
                <h5 class="text-muted fs-13 mb-0" id="tooltipTop11">
                  Lead Investor &nbsp;
                  <Link to="#">
                    <i className="ri-information-line fs-16 align-middle"></i>
                  </Link>
                  <UncontrolledTooltip placement="bottom" target="tooltipTop11">
                    Lead Investor
                  </UncontrolledTooltip>
                </h5>
                <div className="iconPosition">
                <Link to="#" className="text-dark me-2"><i className="ri-edit-box-line align-bottom fs-16"></i></Link>
               </div>
              </div>
            </Card>
          </Col>
        </Col>
      </Row>

      <CurrencyModal
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "CurrencyModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <Notes
      modelName={modelName}
      toggleModel={toggleModel}
      show={modelName === "Notes" ? true : false}
      onCloseClick={() => setModelName("")}
    />

    </React.Fragment>
  );
};

export default CampaignInformationTbl;
