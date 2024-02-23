import React, { useState } from "react";
import {
  Col,
  Row,
  Input,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

import Filters from "./Modals/Filters";
import CommentTestURL from "./Modals/CommentTestURL";
import UploadFilingReportFile from "./Modals/UploadFilingReportFile";
import ReportVideo from "./Modals/ReportVideo";
import SweetAlert from 'react-bootstrap-sweetalert';

// Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";

const AIIFllingsTbl = () => {
  // Default Accordion
  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");

  const toggleModel = (name) => {
    setModelName(name);
  };

  const submit = () => {
    // console.log(profileData)
}

  const [userApproveData, setApproveUserData] = useState({ alert: false, id: "", status: "" });

  const [isTeamMember, setIsTeamMember] = useState(false);
  const toggleTeamMember = () => {
    setIsTeamMember(!isTeamMember);
  };

  const data = [
    {
      id: 1,
      filingTitle: "Performance",
      reportTitle: "Test URL",
      period: "Q2 2021 - 2022",
      date: "02/08/2023 ",
    },
    {
      id: 2,
      filingTitle: "Performance",
      reportTitle: "Test URL",
      period: "Q4 2021 - 2022",
      date: "02/08/2023",
    },
    {
      id: 3,
      filingTitle: "Budget vs Actual",
      reportTitle: "Test URL",
      period: "Q2 2021 - 2022",
      date: "02/08/2023",
    },
    {
      id: 4,
      filingTitle: "Presentation",
      reportTitle: "Test URL",
      period: "Q2 2021 - 2022",
      date: "02/08/2023",
    },
    {
      id: 5,
      filingTitle: "Presentation",
      reportTitle: "Test URL",
      period: "Q2 2021 - 2022",
      date: "02/08/2023",
    },
    {
      id: 6,
      filingTitle: "Presentation",
      reportTitle: "Test URL",
      period: "Q2 2021 - 2022",
      date: "02/08/2023",
    },
  ];

  return (
    <React.Fragment>
      <Row className="g-0 pt-2 align-items-center">
        <Col sm={3}>
          <div className="search-box">
            <Input
              type="text"
              className="form-control search"
              placeholder="Filing Title / Report Title / Added By"
            />
            <i className="ri-search-line search-icon"></i>
          </div>
        </Col>
        <div className="col-sm-auto ms-auto">
          <div className="d-flex hstack gap-2 flex-wrap">
            <button type="button" className="btn btn-brand-theme">
              All Filling
            </button>

            <button
              type="button"
              className="btn btn-soft-info"
              id="Filters"
              onClick={(e) => toggleModel("Filters")}
            >
              <i className="ri-filter-3-line align-bottom me-1"></i>
              Filters
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
                              <DropdownItem>
                                <i className="ri-edit-box-line fs-20 align-middle me-1"></i>
                                View
                              </DropdownItem>
                              <DropdownItem id="CommentTestURL"
                              onClick={(e) => toggleModel("CommentTestURL")}>
                                <i className="ri-chat-1-line fs-20 align-middle me-1"></i>
                                Comment
                              </DropdownItem>
                              <DropdownItem id="UploadFilingReportFile"
                              onClick={(e) => toggleModel("UploadFilingReportFile")}>
                                <i className=" ri-upload-2-line fs-20 align-middle me-1"></i>
                                Upload
                              </DropdownItem>
                              <DropdownItem id="UploadFilingReportFile"
                              onClick={(e) => toggleModel("UploadFilingReportFile")}>
                                <i className="ri-pencil-line fs-20 align-middle me-1"></i>
                                Edit
                              </DropdownItem>
                              <DropdownItem onClick={e => setApproveUserData({ alert: true, id: 1, status: 0 })}>
                                <i className="ri-delete-bin-line fs-20 align-middle me-1"></i>
                                Delete
                              </DropdownItem>
                              <DropdownItem>
                                <i className=" ri-download-2-line fs-20 align-middle me-1"></i>
                                Download
                              </DropdownItem>
                              <DropdownItem id="ReportVideo"
                              onClick={(e) => toggleModel("ReportVideo")}>
                              <i className="ri-video-line fs-20 align-middle me-1"></i>
                              Video
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

      <Filters
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Filters" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <CommentTestURL
      modelName={modelName}
      toggleModel={toggleModel}
      show={modelName === "CommentTestURL" ? true : false}
      onCloseClick={() => setModelName("")}
    />

    <UploadFilingReportFile
      modelName={modelName}
      toggleModel={toggleModel}
      show={modelName === "UploadFilingReportFile" ? true : false}
      onCloseClick={() => setModelName("")}
    />

    <ReportVideo
    modelName={modelName}
    toggleModel={toggleModel}
    show={modelName === "ReportVideo" ? true : false}
    onCloseClick={() => setModelName("")}
  />

  <SweetAlert
  custom
  show={userApproveData.alert}
  btnSize="md"
  showCancel
  showProfile
  // showCloseButton
  confirmBtnText="Ok"
  cancelBtnText="Cancel"
  confirmBtnBsStyle="success"
  cancelBtnBsStyle="danger"
  onConfirm={submit}
  onCancel={e => setApproveUserData({ alert: false, id: "", status: "" })}
> Are you sure you want to delete this record?
</SweetAlert>

    </React.Fragment>
  );
};

export default AIIFllingsTbl;
