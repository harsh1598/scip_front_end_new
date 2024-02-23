import React, { useState } from "react";
import { Col, Row, UncontrolledTooltip, Button, Accordion, AccordionItem, Collapse, Modal, ModalBody, ModalHeader } from "reactstrap";
import { ProjectName } from "../../Components/constants/layout";

//Images
import profileBg from "../../assets/images/profile-bg.jpg";
import sciplogo from "../../assets/images/users/scip-logo.png";
// import avatar1 from "../../assets/images/users/avatar-1.jpg";
import { projects, document } from "../../common/data";
import ContactInfo from "./MenuBarModels/ContactInfo";
import Share from "./MenuBarModels/Share";
import Evaluation from "./MenuBarModels/Evaluation";
import InitialCommitment from "./MenuBarModels/InitialCommitment";
import FinalCommitment from "./MenuBarModels/FinalCommitment";
import CallForMoney from "./MenuBarModels/CallForMoney";
import CreateSchedule from "./MenuBarModels/CreateSchedule";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link, useNavigate } from "react-router-dom";
import Action from "./MenuBarModels/Action";
import PostIt from "./MenuBarModels/PostIt";
import Task from "./MenuBarModels/Task";
import FinalCommitmentModal from "./MenuBarModels/FinalCommitmentModal";
import InitialCommitmentModal from "./MenuBarModels/InitialCommitmentModal";


//import Components

import classnames from "classnames";

const ProfileBar = ({ col3 }) => {
  const navigate = useNavigate();
  // document.title = "Profile | Velzon - React Admin & Dashboard Template";
  document.title = `${ProjectName} | Deals`;

  const [modelName, setModelName] = useState("");
  const [dealData, setDealData] = useState({
    alert: false,
    id: "",
    status: "",
  });

  const toggleModel = (name) => {
    setModelName(name);
  };

  const [fillCol4, setfillCol4] = useState(false);
  const t_fillCol4 = () => {
        setfillCol4(!fillCol4);
  };

  const submit = () => {
    // console.log(profileData)
  };

  const [modal_center, setmodal_center] = useState(false);
        function tog_center() {
        setmodal_center(!modal_center);
    }

  return (
    <React.Fragment>
      <div className="profile-foreground position-relative mx-n4 mt-n4">
        <div className="profile-wid-bg">
          <img src={profileBg} alt="" className="profile-wid-img" />
        </div>
      </div>
      <div
        className="pt-3 mb-4 mb-lg-3 mb-none profile-wrapper"
        style={{ position: "relative" }}
      >
        <Row className="g-0 ms-5 margin-none">
          <div className="col-auto">
            <div className="avatar-sm">
              <img
                src={sciplogo}
                alt="user-img"
                className="img-thumbnail rounded-circle"
              />
            </div>
          </div>

          <Col>
            <div className="p-2">
              <h3 className="text-white mb-1">Anna Adame</h3>
            </div>
          </Col>

          <Col
            xs={12}
            className="col-lg-auto order-last order-lg-0 small-icons">
            <Row className="text text-white-50 text-center">
              <div className="d-flex flex-wrap gap-2 button-bg-none">

              <Button
                  color="light"
                  id="Abc"
                  onClick={() => tog_center()}
                >
                  <i className=" ri-external-link-line"></i>
                  <br />
                </Button>
                <UncontrolledTooltip placement="bottom" target="Abc">
                  Menu Info
                </UncontrolledTooltip>
             
                <Button
                  color="light"
                  id="ContactInfo"
                  onClick={(e) => toggleModel("ContactInfo")}
                >
                  <i className="ri-mail-send-line"></i>
                  <br />
                </Button>
                <UncontrolledTooltip placement="bottom" target="ContactInfo">
                  Contact Info
                </UncontrolledTooltip>

                <Button
                  color="light"
                  id="Share"
                  onClick={(e) => toggleModel("Share")}
                >
                  <i className="ri-share-line"></i>
                </Button>
                <UncontrolledTooltip placement="bottom" target="Share">
                  Open The Deal on Top
                </UncontrolledTooltip>

                <Button
                  color="light"
                  id="Deal"
                  onClick={(e) =>
                    setDealData({ alert: true, id: 1, status: 0 })
                  }
                >
                  <i className="ri-links-fill"></i>
                </Button>
                <UncontrolledTooltip placement="bottom" target="Deal">
                  Copy to clipboard Investor's Deal Page
                </UncontrolledTooltip>

                <Button
                  color="light"
                  id="Message"
                  onClick={(e) => navigate("/deals/message")}
                >
                  <i className="ri-message-line"></i>
                </Button>
                <UncontrolledTooltip placement="bottom" target="Message">
                  Message
                </UncontrolledTooltip>

                <Button
                  color="light"
                  id="Comments"
                  onClick={(e) => navigate("/deals/comments")}
                >
                  <i className="ri-message-3-line"></i>
                </Button>
                <UncontrolledTooltip placement="bottom" target="Comments">
                  Comment
                </UncontrolledTooltip>

                <Button
                  color="light"
                  id="Task"
                  onClick={(e) => toggleModel("Task")}
                >
                  <i className="ri-todo-line"></i>
                </Button>
                <UncontrolledTooltip placement="bottom" target="Task">
                  Task
                </UncontrolledTooltip>

                <Button
                  color="light"
                  id="Action"
                  onClick={(e) => toggleModel("Action")}
                >
                  <i className="ri-thumb-up-line"></i>
                  <br />
                </Button>
                <UncontrolledTooltip placement="bottom" target="Action">
                  Action
                </UncontrolledTooltip>

                <Button
                  color="light"
                  id="PostIt"
                  onClick={(e) => toggleModel("PostIt")}
                >
                  <i className="ri-file-copy-2-line"></i>
                </Button>
                <UncontrolledTooltip placement="bottom" target="PostIt">
                  Add Information Awaited Next and Action to be Taken
                </UncontrolledTooltip>

                <Button
                color="light"
                id="InitialCom"
                onClick={(e) => toggleModel("InitialCommitmentModal")}
              >
                <i className="ri-arrow-right-circle-line"></i>
              </Button>
              <UncontrolledTooltip placement="bottom" target="InitialCom">
              Initial Commitment
              </UncontrolledTooltip>
 
              <Button
              color="light"
              id="FinalCom"
              onClick={(e) => toggleModel("FinalCommitmentModal")}
            >
              <i className="ri-arrow-right-circle-line"></i>
            </Button>
            <UncontrolledTooltip placement="bottom" target="FinalCom">
              Final Commitment
            </UncontrolledTooltip>

            <Button
            color="light"
            id="Like"
            onClick={(e) => toggleModel("LikeModal")}
          >
            <i className="ri-heart-line"></i>
          </Button>
          <UncontrolledTooltip placement="bottom" target="Like">
            Like
          </UncontrolledTooltip>

            </div>
            </Row>
          </Col>
        </Row>

        {/* deals mobile menu start */}
        <div className="d-block d-sm-none">
        <ul className="horizontal-scroll-menu">
          <li>
            <Link
              to="/deals/application"
              className="nav-link"
              data-key="t-analytics"
            >
              <i
                className={
                  col3
                    ? "ri-newspaper-line sub-icons"
                    : "ri-newspaper-line col-lg-12 sub-icons"
                }
              ></i>
              {col3 ? "" : "Application"}
            </Link>
          </li>
          <li>
            <Accordion
              className="custom-accordionwithicon accordion-flush accordion-fill-secondary"
              id="accordionFill3"
            >
              <AccordionItem>
                <div className="accordion-header" id="accordionFill2Example2">
                  <a
                    className={classnames("accordion-button", {
                      collapsed: !fillCol4,
                    })}
                    onClick={t_fillCol4}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="ri-file-edit-line sub-icons"></i>
                    {col3 ? "" : "Evaluation"}
                  </a>
                </div>
                <Collapse
                  isOpen={fillCol4}
                  className="accordion-collapse white-bg"
                  id="accor_fill22"
                >
                  <div className="accordion-body p-1">
                    <Link to="/deals/evaluation/comments">
                      <i className="ri-message-3-line sub-icons"></i>
                      {col3 ? "" : "Comments"}
                    </Link>
                  </div>
                  <div className="accordion-body p-1">
                    <Link to="/deals/evaluation/review">
                      <i className="ri-star-line sub-icons"></i>
                      {col3 ? "" : "Review"}
                    </Link>
                  </div>
                  <div className="accordion-body p-1">
                    <Link to="/deals/evaluation/rubric">
                      <i className="ri-edit-box-line sub-icons"></i>
                      {col3 ? "" : "Rubric"}
                    </Link>
                  </div>
                </Collapse>
              </AccordionItem>
            </Accordion>
           </li> 
          <li>
            <Link
              to="/deals/teaser"
              className="nav-link"
              data-key="t-analytics"
            >
              <i className="ri-computer-line sub-icons"></i>
              {col3 ? "" : "Teaser"}
            </Link>
          </li>
          <li>
            <Link
              to="/deals/initialcommitment"
              className="nav-link"
              data-key="t-analytics"
            >
              <i className="ri-thumb-up-line sub-icons"></i>
              {col3 ? "" : "Initial Commitment"}&nbsp;
              {!col3 && (
                <>
                  <i className="ri-checkbox-circle-fill align-bottom"></i>
                </>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/deals/finalcommitment"
              className="nav-link"
              data-key="t-analytics"
            >
              <i className="ri-thumb-up-line sub-icons"></i>
              {col3 ? "" : "Final Commitment"}&nbsp;
              {!col3 && (
                <>
                  <i className="ri-checkbox-circle-fill align-bottom"></i>
                </>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/deals/callformoney"
              className="nav-link"
              data-key="t-analytics"
            >
              <i className="ri-money-dollar-circle-line sub-icons"></i>
              {col3 ? "" : "Call For Money"}&nbsp;
              {!col3 && (
                <>
                  <i className="ri-checkbox-circle-fill align-bottom"></i>
                </>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/deals/documents"
              className="nav-link"
              data-key="t-analytics"
            >
              <i className="ri-file-text-line sub-icons"></i>
              {col3 ? "" : "Documents"}
            </Link>
          </li>
          <li>
            <Link
              to="/deals/dealsreports"
              className="nav-link"
              data-key="t-analytics"
            >
              <i className="ri-file-chart-line sub-icons"></i>
              {col3 ? "" : "Reports"}
            </Link>
          </li>
          <li>
            <Link
              to="/deals/pastcampaign"
              className="nav-link"
              data-key="t-analytics"
            >
              <i className="ri-computer-line sub-icons"></i>
              {col3 ? "" : "Past Campaign"}
            </Link>
          </li>
          <li className="">
            <Link to="/deals/lead" className="nav-link" data-key="t-analytics">
              <i className="ri-team-line sub-icons"></i>
              {col3 ? "" : "Lead"}
            </Link>
          </li>
          <li>
            <Link
              to="/deals/taskstatus"
              className="nav-link"
              data-key="t-analytics"
            >
              <i className="ri-task-line sub-icons"></i>
              {col3 ? "" : "Task Status"}
            </Link>
          </li>
          <li>
            <Link
              to="/deals/startupfundingproposal"
              className="nav-link"
              data-key="t-analytics"
            >
              <i className="ri-money-dollar-circle-line sub-icons"></i>
              {col3 ? "" : "Startup Funding Proposal"}
            </Link>
          </li>
        </ul>
        </div>
        {/* deals mobile menu end */}
        
      </div>

      <ContactInfo
        show={modelName === "ContactInfo" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      
      <Share
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Share" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <Evaluation
        show={modelName === "Evaluation" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <InitialCommitment
        show={modelName === "InitialCommitment" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <FinalCommitment
        show={modelName === "FinalCommitment" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <CallForMoney
        show={modelName === "CallForMoney" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <CreateSchedule
        show={modelName === "CreateSchedule" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <SweetAlert
        custom
        show={dealData.alert}
        btnSize="md"
        showProfile
        showCloseButton
        confirmBtnBsStyle="primary"
        cancelBtnBsStyle="success"
        title=""
        onConfirm={submit}
        onCancel={(e) => setDealData({ alert: false, id: "", status: "" })}
      >
        <h6> Deal Page - Comments Link Copied.</h6>
        {window.location.href}
      </SweetAlert>
      <Action
        show={modelName === "Action" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <PostIt
        show={modelName === "PostIt" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <Task
        show={modelName === "Task" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <FinalCommitmentModal
        show={modelName === "FinalCommitmentModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      
      <InitialCommitmentModal
      show={modelName === "InitialCommitmentModal" ? true : false}
      onCloseClick={() => setModelName("")}
    />


    <Modal
    isOpen={modal_center}
    toggle={() => {
        tog_center();
    }}
    centered
>
    {/* <ModalHeader className="modal-title" /> */}

    <ModalBody className="text-center">
        <div>
            <p className="text-muted mb-4">Access curated business intelligence specific to your industry to did descision making</p>
            <div className="hstack gap-2 justify-content-center">
                <Link to="#" className="btn btn-danger">Cancel</Link>
                <Button color="light" onClick={() => setmodal_center(false)}>Next</Button>
            </div>
        </div>
    </ModalBody>
</Modal>

    </React.Fragment>
  );
};
export default ProfileBar;
