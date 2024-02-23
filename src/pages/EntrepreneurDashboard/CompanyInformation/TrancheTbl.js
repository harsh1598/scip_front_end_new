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

import Tranche from "./Modals/Tranche";

const TrancheTbl = () => {
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
      trancheName: "Test",
      raisingamount: "100 INR",
      date: "09/11/2022",
      status: "Pending",
    },
    {
      id: 2,
      trancheName: "Test",
      raisingamount: "100 INR",
      date: "09/11/2022",
      status: "Pending",
    },
  ];

  return (
    <React.Fragment>
      <Row className="g-0 pt-2 align-items-center">
        <Col sm={6}>
          <h5>Tranche</h5>
        </Col>
      </Row>
      <div className="table-responsive table-card mt-2 px-3">
        <table className="table align-middle table-nowrap table-striped-columns mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col">Tranche Name</th>
              <th scope="col">Raising Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.trancheName}</td>
                    <td>{item.raisingamount}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td className="social-icons">
                      <ul className="list-inline hstack gap-2 mb-0">
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              href="#"
                              className="btn btn-soft-secondary btn-sm dropdown"
                              tag="button"
                            >
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem id="Tranche"
                              onClick={(e) => toggleModel("Tranche")}>
                                <i className="ri-pencil-line fs-20 align-middle me-1"></i>
                                Edit
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <Tranche
      modelName={modelName}
      toggleModel={toggleModel}
      show={modelName === "Tranche" ? true : false}
      onCloseClick={() => setModelName("")}
    />

    </React.Fragment>
  );
};

export default TrancheTbl;
