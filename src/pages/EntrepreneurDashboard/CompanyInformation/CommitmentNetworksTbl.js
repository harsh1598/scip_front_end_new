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

import CommitmentNetworksModal from "./Modals/CommitmentNetworksModal"
import SweetAlert from 'react-bootstrap-sweetalert';

const CommitmentNetworksTbl = () => {
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

  const submit = () => {
    // console.log(profileData)
}

  const data = [
    {
      id: 1,
      nameNetwork: "Test",
      amount: "100 INR",
      date: "09/11/2022",
    },
    {
      id: 2,
      nameNetwork: "Test",
      amount: "100 INR",
      date: "09/11/2022",
    },
  ];

  return (
    <React.Fragment>
      <Row className="g-0 pt-2 align-items-center">
        <Col sm={6}>
          <h5>Commitment by Other Investors/Angel Networks</h5>
        </Col>
        <div className="col-sm-auto ms-auto">
          <div className="d-flex hstack gap-2 flex-wrap">
            <button type="button" className="btn btn-brand-theme" id="CommitmentNetworksModal"
            onClick={(e) => toggleModel("CommitmentNetworksModal")}>
              <i className="ri-add-line align-bottom me-1"></i> Add
            </button>
          </div>
        </div>
      </Row>
      <div className="table-responsive table-card mt-3 px-3">
        <table className="table align-middle table-nowrap table-striped-columns mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col">Name of the investor/network</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Note</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.nameNetwork}</td>
                    <td>{item.amount}</td>
                    <td>{item.date}</td>
                    <td>
                      <Link to="#">View</Link>
                    </td>
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
                              <DropdownItem id="CommitmentNetworksModal"
                              onClick={(e) => toggleModel("CommitmentNetworksModal")}>
                                <i className="ri-pencil-line fs-20 align-middle me-1"></i>
                                Edit
                              </DropdownItem>
                              <DropdownItem onClick={e => setApproveUserData({ alert: true, id: 1, status: 0 })}
                              >
                                <i className="ri-delete-bin-line fs-20 align-middle me-1"></i>
                                Delete
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

    <CommitmentNetworksModal
    modelName={modelName}
    toggleModel={toggleModel}
    show={modelName === "CommitmentNetworksModal" ? true : false}
    onCloseClick={() => setModelName("")}
  />

  <SweetAlert
  custom
  show={userApproveData.alert}
  btnSize="md"
  showCancel
  showProfile
  confirmBtnText="Ok"
  cancelBtnText="Cancel"
  confirmBtnBsStyle="success"
  cancelBtnBsStyle="danger"
  onConfirm={submit}
  onCancel={e => setApproveUserData({ alert: false, id: "", status: "" })}
> By clicking on yes you confirm to delete this commitment
</SweetAlert>

    </React.Fragment>
  );
};

export default CommitmentNetworksTbl;
