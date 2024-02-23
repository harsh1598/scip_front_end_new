import React, { useState } from "react";
import { Col, Row } from "reactstrap";

import Tags from "./IntialCommitmentPages/Tags";
import AddFinalCommitment from "./finalCommitmentPages/AddFinalCommitment";
import InvestmentInstrument from "./IntialCommitmentPages/InvestmentInstrument";
import CommitmentInvestors from "./IntialCommitmentPages/CommitmentInvestors";
import CreateGroup from "./IntialCommitmentPages/CreateGroup";
import CommitmentTbl from "./IntialCommitmentPages/CommitmentTbl";
import InvestmentInstrumentTbl from "./IntialCommitmentPages/InvestmentInstrumentTbl";
import InitialCommitmentBox from "./InitialCommitment/InitialCommitmentStatus";
import TopBlocks from "./IntialCommitmentPages/TopBlocks";
import FinalCommitmentBox from "./IntialCommitmentPages/FinalCommitmentBox";
import FinalCommitmentTbl from "./finalCommitmentPages/FinalCommitmentTbl";
import EditFinalCommitment from "./finalCommitmentPages/EditFinalCommitment";
import DeleteCommitment from "./finalCommitmentPages/DeleteCommitment";
import AngelNetwork from "./finalCommitmentPages/AngelNetwork";
import Investor from "./finalCommitmentPages/Investor";

const FinalCommitment = () => {
const [modelName, setModelName] = useState("");
const toggleModel = (name) => {
    setModelName(name);
  };

  return (
    <React.Fragment>
      <Row className="g-2">
        <TopBlocks />
      </Row>
      <Row className="g-2 mt-0">
        <Col md={6}>
          <InitialCommitmentBox />
        </Col>
        <Col md={6}>
          <FinalCommitmentBox />
        </Col>
      </Row>
     {/* <Row className="g-2 mt-0">
        <Col md={6}>
          <FinalCommitmentBox />
        </Col>
      </Row> */}
      <Row className="g-2 mt-0">
        <Col md={12}>
          <FinalCommitmentTbl toggleModel={toggleModel} />
        </Col>
      </Row>
      <Row className="g-2 mt-0">
        <Col md={12}>
          <InvestmentInstrumentTbl toggleModel={toggleModel} />
        </Col>
      </Row>
      <Row className="g-2 mt-0">
        <Col md={12}>
          <CommitmentTbl toggleModel={toggleModel} />
        </Col>
      </Row>

      {/* Final Commitment model */}

      <CreateGroup
        show={modelName === "CreateGroup" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <AddFinalCommitment
        show={modelName === "AddFinalCommitment" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <EditFinalCommitment
        show={modelName === "EditFinalCommitment" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <Tags
        show={modelName === "Tags" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <DeleteCommitment
        show={modelName === "DeleteCommitment" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      {/* Investment Instrument model */}
      <InvestmentInstrument
        show={modelName === "InvestmentInstrument" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      {/* Commitment by Other Investors/Angel Networks model */}
      <CommitmentInvestors
        show={modelName === "CommitmentInvestors" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <Row className="g-2 mt-0">
      <Col lg={6} sm={6}>
       {/* Angel Network */}
       <AngelNetwork
       show={modelName === "AngelNetwork" ? true : false}
       onCloseClick={() => setModelName("")}
      />
      </Col>
      <Col lg={6} sm={6}>
      {/* Angel Network */}
      <Investor
        show={modelName === "Investor" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      </Col>
      </Row>

      </React.Fragment>
  );
};

export default FinalCommitment;
