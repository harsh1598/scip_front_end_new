import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  UncontrolledTooltip,
  Collapse,
  Accordion,
  AccordionItem,
  Input,
  Label,
} from "reactstrap";
import classnames from "classnames";
import { BorderedAccordionExample } from "../BaseUi/UiAccordion&Collapse/UiAccordion&CollapseCode";

const StartUpFundingProposal = () => {

  // Accordions Bordered
  const [borderCol1, setborderCol1] = useState(true);
  const [borderCol2, setborderCol2] = useState(false);
  const [borderCol3, setborderCol3] = useState(false);

  const t_borderCol1 = () => {
    setborderCol1(!borderCol1);
    setborderCol2(false);
    setborderCol3(false);
  };

  const t_borderCol2 = () => {
    setborderCol2(!borderCol2);
    setborderCol1(false);
    setborderCol3(false);
  };

  const t_borderCol3 = () => {
    setborderCol3(!borderCol3);
    setborderCol1(false);
    setborderCol2(false);
  };

  // Nesting Accordions
  const [nestingCol1, setnestingCol1] = useState(true);
  const [nestingCol2, setnestingCol2] = useState(false);
  const [nestingCol3, setnestingCol3] = useState(false);


  const t_nestingCol1 = () => {
      setnestingCol1(!nestingCol1);
      setnestingCol2(false);
      setnestingCol3(false);
  };

  const t_nestingCol2 = () => {
      setnestingCol2(!nestingCol2);
      setnestingCol1(false);
      setnestingCol3(false);
  };

  const t_nestingCol3 = () => {
      setnestingCol3(!nestingCol3);
      setnestingCol1(false);
      setnestingCol2(false);
  };

  // level First Nesting
  const [anestingCol1, setanestingCol1] = useState(true);
  const [anestingCol2, setanestingCol2] = useState(false);


  const t_anestingCol1 = () => {
      setanestingCol1(!anestingCol1);
      setanestingCol2(false);
  };

  const t_anestingCol2 = () => {
      setanestingCol2(!anestingCol2);
      setanestingCol1(false);
  };

  // level Second Nesting
  const [bnestingCol1, setbnestingCol1] = useState(false);


  const t_bnestingCol1 = () => {
      setbnestingCol1(!bnestingCol1);
  };

  return (
    <React.Fragment>
        <Row className="g-2">
          <Col md={12}>
            <Card className="mb-2">
              <CardBody>
                <h4 className="card-title card-title mb-0 me-2">
                  Start Up Funding Proposal
                </h4>
              </CardBody>
            </Card>
            <CardBody>
            <Accordion className="custom-accordionwithicon accordion-border-box" id="accordionnesting">
            <AccordionItem>
            <h2 className="accordion-header" id="accordionnestingExample1">
                <button
                    className={classnames("accordion-button", { collapsed: !nestingCol1 })} type="button" onClick={t_nestingCol1} style={{ cursor: "pointer" }} >
                    Collapse All
                </button>
            </h2>
            <Collapse isOpen={nestingCol1} className="accordion-collapse" id="accor_nestingExamplecollapse1" >
            <div className="accordion-body">
  {/* start */}
  <div className="live-preview accordion-section">
  <Accordion
    className="custom-accordionwithicon custom-accordion-border accordion-border-box accordion-success"
    id="accordionBordered"
  >
    <AccordionItem>
      <h2
        className="accordion-header"
        id="accordionborderedExample1"
      >
        <button
          className={classnames("accordion-button", {
            collapsed: !borderCol1,
          })}
          type="button"
          onClick={t_borderCol1}
          style={{ cursor: "pointer" }}
        >
          Basic Information
        </button>
      </h2>

      <Collapse
        isOpen={borderCol1}
        className="accordion-collapse"
        id="accor_borderedExamplecollapse1"
      >
        <div className="accordion-body">
          <Row>
            <Col lg={12}>
              <Card className="mb-2">
                <CardHeader className="align-items-center d-flex">
                  <div className="flex-grow-1">
                    <h4 className="card-title mb-0 fs-14">
                      Title of the Technology Proposed{" "}
                      <span className="error">*</span>
                    </h4>
                  </div>
                </CardHeader>

                <CardBody>
                  <p className="text-muted">
                    HTML highlight is used to mark or
                    highlight text that is of property,
                    relevance, or special interest to an
                    HTML document. here is the example
                    shown below.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg={12}>
              <Card className="mb-2">
                <CardHeader className="align-items-center d-flex">
                  <div className="flex-grow-1">
                  <UncontrolledTooltip placement="right" target="BroadCyber">
                  (Show The - Link Between Computational And Physical Elements By Means Of Intelligent Mechanisms, That Increase The Adaptability, Autonomy, Efficiency, Functionality, Reliability, Safety, And Usability Of Cyber-physical Systems. Where Is Value-added?)
                  </UncontrolledTooltip>
                    <h4 className="card-title mb-0 fs-14">
                      Broad Cyber Physical System
                      Area/Sector it Addresses{" "}
                      <span className="error">*</span>{" "}
                      <i className="ri-information-fill" id="BroadCyber"></i>
                    </h4>
                  </div>
                </CardHeader>

                <CardBody>
                  <p className="text-muted">
                    HTML highlight is used to mark or
                    highlight text that is of property,
                    relevance, or special interest to an
                    HTML document. here is the example
                    shown below.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg={12}>
              <Card className="mb-2">
                <CardHeader className="align-items-center d-flex">
                  <div className="flex-grow-1">
                  <UncontrolledTooltip placement="right" target="RelationtoSensor">
                  (Where Is The CPS Applied? CPS Include Smart Grid, Autonomous Automobile Systems, Medical Monitoring, Industrial Control Systems, Robotics Systems, And Automatic Pilot Avionics. Value Added In - (e.g., Collision Avoidance), Precision (e.g., Robotic Surger
                  </UncontrolledTooltip>
                    <h4 className="card-title mb-0 fs-14">
                      Relation to Sensor, Networking,
                      Actuators and Control Systems{" "}
                      <span className="error">*</span>{" "}
                      <i className="ri-information-fill " id="RelationtoSensor"></i>
                    </h4>
                  </div>
                </CardHeader>

                <CardBody>
                  <p className="text-muted">
                    HTML highlight is used to mark or
                    highlight text that is of property,
                    relevance, or special interest to an
                    HTML document. here is the example
                    shown below.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg={12}>
              <Card className="mb-2">
                <CardHeader className="align-items-center d-flex">
                  <div className="flex-grow-1">
                    <h4 className="card-title mb-0 fs-14">
                      Name of CTO/In-charge with
                      Designation{" "}
                      <span className="error">*</span>{" "}
                    </h4>
                  </div>
                </CardHeader>

                <CardBody>
                  <p className="text-muted">
                    HTML highlight is used to mark or
                    highlight text that is of property,
                    relevance, or special interest to an
                    HTML document. here is the example
                    shown below.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg={12}>
              <Card className="mb-2">
                <CardHeader className="align-items-center d-flex">
                  <div className="flex-grow-1">
                    <h4 className="card-title mb-0 fs-14">
                      Name of the Founding Directors with
                      Designation{" "}
                      <span className="error">*</span>{" "}
                    </h4>
                  </div>
                </CardHeader>

                <CardBody>
                  <p className="text-muted">
                    HTML highlight is used to mark or
                    highlight text that is of property,
                    relevance, or special interest to an
                    HTML document. here is the example
                    shown below.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg={12}>
              <Card className="mb-2">
                <CardHeader className="align-items-center d-flex">
                  <div className="flex-grow-1">
                    <h4 className="card-title mb-0 fs-14">
                      Brief biodata of the members of
                      Startup with specific details of
                      success in
                      licensing/commercialization of their
                      research ideas.{" "}
                      <span className="error">*</span>{" "}
                    </h4>
                  </div>
                </CardHeader>

                <CardBody>
                  <p className="text-muted">
                    HTML highlight is used to mark or
                    highlight text that is of property,
                    relevance, or special interest to an
                    HTML document. here is the example
                    shown below.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Collapse>
    </AccordionItem>
    <AccordionItem>
      <h2
        className="accordion-header"
        id="accordionborderedExample2"
      >
        <button
          className={classnames("accordion-button", {
            collapsed: !borderCol2,
          })}
          type="button"
          onClick={t_borderCol2}
          style={{ cursor: "pointer" }}
        >
          Novelty Information
        </button>
      </h2>

      <Collapse
        isOpen={borderCol2}
        className="accordion-collapse"
        id="accor_borderedExamplecollapse2"
      >
        <div className="accordion-body">
          <Row>
            <Col lg={12}>
              <Card className="mb-2">
                <CardHeader className="align-items-center d-flex">
                  <div className="flex-grow-1">
                    <h4 className="card-title mb-0 fs-14">
                      Is the Novelty check report
                      enclosed?{" "}
                      <span className="error">*</span>
                    </h4>
                  </div>
                </CardHeader>

                <CardBody>
                  <p className="text-muted mb-0">
                    <div className="form-check">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="formradiocolor2"
                        id="formradioRight6"
                        defaultChecked
                      />
                      <Label
                        className="form-check-label"
                        htmlFor="formradioRight6"
                      >
                        Yes
                      </Label>
                    </div>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg={12}>
              <Card className="mb-2">
                <CardHeader className="align-items-center d-flex">
                  <div className="flex-grow-1">
                    <h4 className="card-title mb-0 fs-14">
                      Is the “HAI Visit ICSR” report
                      enclosed?{" "}
                      <span className="error">*</span>
                    </h4>
                  </div>
                </CardHeader>

                <CardBody>
                  <p className="text-muted mb-0">
                    <div className="form-check">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="formradiocolor2"
                        id="formradioRight6"
                        defaultChecked
                      />
                      <Label
                        className="form-check-label"
                        htmlFor="formradioRight6"
                      >
                        No
                      </Label>
                    </div>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Collapse>
    </AccordionItem>
    <AccordionItem>
      <h2
        className="accordion-header"
        id="accordionborderedExample3"
      >
        <button
          className={classnames("accordion-button", {
            collapsed: !borderCol3,
          })}
          type="button"
          onClick={t_borderCol3}
          style={{ cursor: "pointer" }}
        >
          Proposed Technology
        </button>
      </h2>
      <Collapse
        isOpen={borderCol3}
        className="accordion-collapse"
        id="accor_borderedExamplecollapse3"
      >
        <div className="accordion-body">
          <Row>
            <Col lg={12}>
              <Card className="mb-2">
                <CardHeader className="align-items-center d-flex social-icons">
                  <div className="flex-grow-1">
                  <UncontrolledTooltip placement="right" target="FundingRequirements" >
                    Maximum Funding Of 50 Lakhs Will Be Provided For This Phase. The Funding For The Next Quarter Is Subject To Meeting The Milestones Of The Previous Quarter. Quarter-wise Progress Report As Per Annexure-1, Need To Be Provided 15 Days Before End Of The Quart
                  </UncontrolledTooltip>
                    <h4 className="card-title mb-0 fs-14">
                      Funding Requirements and Target
                      Contribution{" "}
                      <span className="error">*</span>
                      <i className="ri-information-fill me-2" id="FundingRequirements"></i>
                      <a href="javascript:void(0);">
                        <i className="ri-download-2-line fs-16" ></i>
                      </a>
                    </h4>
                  </div>
                </CardHeader>

                <CardBody>
                  <p className="text-muted">
                    Post application 27042023.docx
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Collapse>
    </AccordionItem>
  </Accordion>
</div>

<div className="d-none code-view">
  <pre
    className="language-markup"
    style={{ height: "275px" }}
  >
    <code>
      <BorderedAccordionExample />
    </code>
  </pre>
</div>
  {/* end */}
            </div>
            </Collapse>
            </AccordionItem>
            </Accordion>

             
            </CardBody>
          </Col>
        </Row>
    </React.Fragment>
  );
};

export default StartUpFundingProposal;
