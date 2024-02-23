import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const CampaignStatusTbl = () => {
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
      campaignId: "#2",
      startDate: "25/09/2022 ",
      endDate: "25/12/2022 ",
    },
  ];

  return (
    <React.Fragment>
      <Row className="g-0 pt-2 align-items-center">
        <Col sm={6}>
          <h5>Campaign Status</h5>
        </Col>
      </Row>
      <div className="table-responsive table-card mt-2 px-3">
        <table className="table align-middle table-nowrap table-striped-columns mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col">Campaign</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.campaignId}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default CampaignStatusTbl;
