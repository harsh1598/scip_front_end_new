import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const InvestmentInstrumentTbl = () => {
  // Default Accordion
  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");

  const toggleModel = (name) => {
    setModelName(name);
  };

  const [userApproveData, setApproveUserData] = useState({
    alert: false,
    id: "",
    status: "",
  });

  const [isTeamMember, setIsTeamMember] = useState(false);
  const toggleTeamMember = () => {
    setIsTeamMember(!isTeamMember);
  };

  const data = [
    {
      id: 1,
      instrument: "Equity",
      issuepriceperinstrument: "1 INR",
      totalnumberofInstruments: "100",
      totalValue: "10,000 INR",
    },
    {
      id: 2,
      instrument: "Equity",
      issuepriceperinstrument: "1 INR",
      totalnumberofInstruments: "100",
      totalValue: "10,000 INR",
    },
  ];

  return (
    <React.Fragment>
      <Row className="g-0 pt-2 align-items-center">
        <Col sm={6}>
          <h5>Investment Instrument</h5>
        </Col>
      </Row>
      <div className="table-responsive table-card mt-3 px-3">
        <table className="table align-middle table-nowrap table-striped-columns mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col">Instrument</th>
              <th scope="col">Issue Price Per Instrument</th>
              <th scope="col">Total Number of Instruments</th>
              <th scope="col">Total Value</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.instrument}</td>
                    <td>{item.issuepriceperinstrument}</td>
                    <td>{item.totalnumberofInstruments}</td>
                    <td>{item.totalValue}</td>
                    <td>
                      <Link to="#">View</Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default InvestmentInstrumentTbl;
