import React, { useState } from "react";
import { Col, Row, } from "reactstrap";

import Tags from "./IntialCommitmentPages/Tags";
import AddInitialCommitment from "./IntialCommitmentPages/AddInitialCommitment";
import EditInitialCommitment from "./IntialCommitmentPages/EditInitialCommitment";
import InvestmentInstrument from "./IntialCommitmentPages/InvestmentInstrument";
import CommitmentInvestors from "./IntialCommitmentPages/CommitmentInvestors";
import Addfamilymember from "./IntialCommitmentPages/Addfamilymember";
import CreateGroup from "./IntialCommitmentPages/CreateGroup";
import CommitmentTbl from "./IntialCommitmentPages/CommitmentTbl";
import InvestmentInstrumentTbl from "./IntialCommitmentPages/InvestmentInstrumentTbl";
import InitialCommitmentTbl from "./InitialCommitment/InitialCommitmentList";
import InitialCommitmentBox from "./InitialCommitment/InitialCommitmentStatus";
import TopBlocks from "./IntialCommitmentPages/TopBlocks";
import DeleteCommitment from "./finalCommitmentPages/DeleteCommitment";

const InitialCommitment = () => {

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
        <Col md={12}>
          <InitialCommitmentBox />
        </Col>
      </Row>
      <Row className="g-2 mt-0">
        <Col md={12}>
          <InitialCommitmentTbl toggleModel={toggleModel} />
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
      {/* Initial Commitment model */}

      <CreateGroup
        show={modelName === "CreateGroup" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <AddInitialCommitment
        show={modelName === "AddInitialCommitment" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <EditInitialCommitment
        show={modelName === "EditInitialCommitment" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <DeleteCommitment
        show={modelName === "DeleteCommitment" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <Addfamilymember
        show={modelName === "Addfamilymember" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <Tags
        show={modelName === "Tags" ? true : false}
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

    </React.Fragment>
  );
};

export default InitialCommitment;
