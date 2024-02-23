import React, { useState } from "react";
import { Row, } from "reactstrap";
import { Link } from "react-router-dom";
// Images

import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import AddFilingReport from "./Modals/AddFilingReport";

const ArchivedFilingsTbl = () => {
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

  const data = [
    {
      id: 1,
      filingTitle: "Budget vs Actual",
      reportTitle: "Test 1 doc",
      period: "Q2 2021 - 2022",
      date: "02/08/2023",
    },
  ];

  return (
    <React.Fragment>
      <Row className="g-0 pt-2 align-items-center">
        <div className="col-sm-auto ms-auto">
          <div className="d-flex hstack gap-2 flex-wrap">
          <button type="button" className="btn btn-brand-theme" id="AddFilingReport"
          onClick={(e) => toggleModel("AddFilingReport")}>
            Upload Document
          </button>
          </div>
        </div>
      </Row>
      <div className="table-responsive table-card mt-3 px-3">
        <table className="table align-middle table-nowrap table-striped-columns mb-0">
          <thead className="table-light">
            <tr>
            <th scope="col">Filing Title</th>
            <th scope="col">Report Title</th>
            <th scope="col">Period</th>
            <th scope="col">Added Date / By</th>
            <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.filingTitle}</td>
                    <td>{item.reportTitle}</td>
                    <td>{item.period}</td>
                    <td>
                      {item.date}
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a
                            href="javascript: void(0);"
                            class="d-inline-block"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Stine Nielsen"
                          >
                            <img
                              src={avatar1}
                              alt=""
                              className="rounded-circle avatar-xxs"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a
                            href="javascript: void(0);"
                            class="d-inline-block"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Jansh Brown"
                          >
                            <img
                              src={avatar2}
                              alt=""
                              className="rounded-circle avatar-xxs"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a
                            href="javascript: void(0);"
                            class="d-inline-block"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Dan Gibson"
                          >
                            <img
                              src={avatar3}
                              alt=""
                              className="rounded-circle avatar-xxs"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);">
                            <div class="avatar-xxs">
                              <span class="avatar-title rounded-circle bg-info text-white">
                                5
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="social-icons">
                     <Link to="#"><i className=" ri-checkbox-line align-bottom fs-22"></i></Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <AddFilingReport
      modelName={modelName}
      toggleModel={toggleModel}
      show={modelName === "AddFilingReport" ? true : false}
      onCloseClick={() => setModelName("")}
    />

    </React.Fragment>
  );
};

export default ArchivedFilingsTbl;
