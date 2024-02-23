import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Input, UncontrolledTooltip } from "reactstrap";
import ElevatorpitchModal from "./Modals/ElevatorpitchModal";

const ElevatorPitchTbl = () => {
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

  return (
    <React.Fragment>
      <Row className="g-0 pt-2 align-items-center">
        <Col sm={6}>
          <h5>Elevator Pitch</h5>
        </Col>
        <div className="col-sm-auto ms-auto">
          <div className="d-flex hstack gap-2 flex-wrap">
            <button
              type="button"
              className="btn btn-brand-theme"
              id="ElevatorpitchModal"
              onClick={(e) => toggleModel("ElevatorpitchModal")}
            >
              <i className="ri-add-line align-bottom me-1"></i> Add
            </button>
          </div>
        </div>
      </Row>

      <Row>
        <Col xs={3} md={3}>
          <div className="ratio ratio-16x9">
            <iframe
              className="rounded"
              src="https://scipbucket.s3.ap-south-1.amazonaws.com/uploads/docx_video/3/VDO_10346585929_3_40171865.mp4"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col xs={3} md={3}>
          <div className="ratio ratio-16x9">
            <iframe
              className="rounded"
              src="https://scipbucket.s3.ap-south-1.amazonaws.com/uploads/docx_video/3/VDO_10346585929_3_40171865.mp4"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>

      <ElevatorpitchModal
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "ElevatorpitchModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />
    </React.Fragment>
  );
};

export default ElevatorPitchTbl;
