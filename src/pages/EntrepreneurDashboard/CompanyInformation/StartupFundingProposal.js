import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row, Input, CardHeader } from "reactstrap";
import TeaserTitle from "./Modals/TeaserTitle";

//Images
import profileBg from "../../../assets/images/profile-bg.jpg";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import graph from "../../../assets/images/graph.jpg";

const StartupFundingProposal = () => {
  document.title = "SCIP | Startup Funding Proposal";

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

  const [activeTab, setActiveTab] = useState("1");

  return (
    <React.Fragment>

      <Row>
        <Col xxl={12}>
          <Card className="mb-2">
          <CardHeader className="py-3">
          <h5 className="mb-0">Startup Funding Proposal</h5>
          </CardHeader>

            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1 pb-2">
                Guidelines to fill the Proposal.
                <br />
                <p className="text-muted mb-0 pt-2">
                  Please note that fields marked with a star (*) are
                      mandatory. Each section has a SAVE button. Please click
                      SUBMIT button after entering all the details. Please note
                      that the Proposal will not be editable once submitted.
                    </p>
              </h4>
              <div class="flex-shrink-0">
                <div class="form-check form-switch form-switch-right form-switch-md">
                  <Link
                    to="#"
                    className="text-dark fs-18"
                    id="TeaserTitle"
                    onClick={(e) => toggleModel("TeaserTitle")}
                  >
                    <i className="ri-download-2-line aling-bottom"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div class="card-header">
              <h5 className="">Basic Information</h5>
              <div className="title-box">
                <h5 class="card-title">
                  Title of the Technology Proposed
                      <span className="error">*</span>
                </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Broad Cyber Physical System Area/Sector it Addresses
                      <span className="error">*</span>
                  <i className="ri-information-fill aling-bottom"></i>
                </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Relation to Sensor, Networking, Actuators and Control
                      Systems
                      <span className="error">*</span>
                  <i className="ri-information-fill aling-bottom"></i>
                </h5>
                <div className="inner-box">
                  <img src={graph} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Name of CTO/In-charge with Designation
                    </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Name of the Founding Directors with Designation
                    </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Brief biodata of the members of Startup with specific
                      details of success in licensing/commercialization of their
                      research ideas.
                    </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
            </div>

            <div class="card-header">
              <h5 className="">Novelty Information</h5>
              <div className="title-box">
                <h5 class="card-title">
                  Is the Novelty check report enclosed?
                      <span className="error">*</span>
                </h5>
                <div className="inner-box">
                  <div class="form-check mb-2">
                    <Input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Yes
                        </label>
                  </div>
                  <div class="form-check">
                    <Input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked=""
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      No
                        </label>
                  </div>
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Is the “HAI Visit ICSR” report enclosed?
                      <span className="error">*</span>
                </h5>
                <div className="inner-box">
                  <div class="form-check mb-2">
                    <Input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <Input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      checked=""
                    />
                    <label class="form-check-label" for="flexRadioDefault4">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-header">
              <h5 className="">Proposed Technology</h5>
              <div className="title-box">
                <h5 class="card-title">
                  Brief description of the technology
                      <span className="error">*</span>
                </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                  </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Survey of already existing similar technologies
                      <span className="error">*</span>
                </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Unique selling point of proposed technology
                      <span className="error">*</span>
                </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Products that could potentially use the technology
                      <span className="error">*</span>
                </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
            </div>

            <div class="card-header">
              <h5 className="">If such products do not exist in market, then</h5>
              <div className="title-box">
                <h5 class="card-title">
                  Technical and Financial benefits got by adopting the proposed technology over existing ones
                      <span className="error">*</span>
                </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                  </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Challenges and Risks of changing to the proposed technology
                      <span className="error">*</span>
                </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                  </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Projected Market potential for the same over next 5 years
                      <span className="error">*</span>
                </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                  </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
            </div>

            <div class="card-header">
              <h5 className="">Detailed description of steps to be taken to showcase proposed technology as a product along with quarterly timelines</h5>
              <div className="title-box">
                <h5 class="card-title">
                  Total Duration
                      <span className="error">*</span>
                </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Funding Requirements and Target Contribution
                      <span className="error">*</span> <i className="ri-information-fill aling-bottom me-2"></i>
                  <Link to="" className="text-dark"><i className="ri-download-2-line aling-bottom"></i></Link>
                </h5>
                <div className="inner-box">
                  <div className="text-muted">
                    <i className="ri-download-2-line aling-bottom me-2"></i> Post application 27042023.docx
                      </div>
                  <Input
                    type="hidden"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>

            </div>
          </Card>
        </Col>
      </Row>

      <TeaserTitle
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "TeaserTitle" ? true : false}
        onCloseClick={() => setModelName("")}
      />
    </React.Fragment>
  );
};

export default StartupFundingProposal;
