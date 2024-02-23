import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Input,
  CardHeader,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Flatpickr from "react-flatpickr";
import Select from "react-select";

import CompanyBasicInformation from "./Modals/CompanyBasicInformation";
import EditInvestment from "./Modals/EditInvestment";
import EditCompanyDetails from "./Modals/EditCompanyDetails";
import EditCompanySummary from "./Modals/EditCompanySummary";
import CommanModal from "./Modals/CommanModal";
import UploadDocuments from "./Modals/UploadDocuments";
import UploadDocumentsAbout from "./Modals/UploadDocumentsAbout";
import EditCompany from "./Modals/EditCompany";
import TeaserModal from "./Modals/TeaserModal";
import TeaserTitle from "./Modals/TeaserTitle";

const TabSection = () => {
  document.title = "SCIP | Tab Section";

  // Default Accordion
  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");

  // Accordions with Icons
  const [iconCol1, seticonCol1] = useState(true);
  const [iconCol2, seticonCol2] = useState(false);
  const [iconCol3, seticonCol3] = useState(false);

  // Accordions with Plus Icon
  const [plusiconCol1, setplusiconCol1] = useState(true);
  const [plusiconCol2, setplusiconCol2] = useState(false);
  const [plusiconCol3, setplusiconCol3] = useState(false);

  const t_plusiconCol1 = () => {
    setplusiconCol1(!plusiconCol1);
    setplusiconCol2(false);
    setplusiconCol3(false);
  };

  const t_plusiconCol2 = () => {
    setplusiconCol2(!plusiconCol2);
    setplusiconCol1(false);
    setplusiconCol3(false);
  };

  const t_plusiconCol3 = () => {
    setplusiconCol3(!plusiconCol3);
    setplusiconCol1(false);
    setplusiconCol2(false);
  };

  const toggleModel = (name) => {
    setModelName(name);
  };

  const [isTeamMember, setIsTeamMember] = useState(false);
  const toggleTeamMember = () => {
    setIsTeamMember(!isTeamMember);
  };

  const [activeTab, setActiveTab] = useState("1");
  const [activityTab, setActivityTab] = useState("1");

  const { screenType } = useSelector((state) => ({
    screenType: state.Layout.screenType,
  }));

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const toggleActivityTab = (tab) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  const SingleOptions = [
    { value: "One", label: "One" },
    { value: "Two", label: "Two" },
    { value: "Three", label: "Three" },
    { value: "Four", label: "Four" },
  ];

  const [selectedMulti, setselectedMulti] = useState(null);

  return (
    <React.Fragment>
      <Row>
        <Col xxl={12}>
          <Card className="mb-2">
            <CardHeader className="py-3">
              <h5 className="mb-0">Tab Section</h5>
            </CardHeader>

            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1 pb-2">
                Guidelines to fill the Proposal.
                <br />
                <p className="text-muted mb-0">
                  Please note that fields marked with a star (*) are mandatory.
                  Each section has a SAVE button. Please click SUBMIT button
                  after entering all the details. Please note that the Proposal
                  will not be editable once submitted.
                </p>
              </h4>
              <div class="flex-shrink-0">
                <div class="form-check form-switch form-switch-right form-switch-md">
                  <Link
                    to="#"
                    className="text-dark fs-18"
                    id="TeaserTitle"
                    onClick={(e) => toggleModel("TeaserTitle")}
                  >
                    <i className="ri-download-2-line aling-bottom"></i>
                  </Link>
                </div>
              </div>
            </div>
            <CardBody>
              <div className="title-box">
                <h5 class="card-title">
                  Tab Name
                  <span className="error">*</span>
                  <span className="float-end">
                    <Link to="#" className="text-dark">
                      <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className="ri-check-line align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className=" ri-close-fill align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                  </span>
                </h5>
                <div className="inner-box">
                  <Input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="Text"
                  />
                </div>
              </div>

              <div className="title-box">
                <h5 class="card-title">
                  Tab Summary
                  <span className="error">*</span>
                  <span className="float-end">
                    <Link to="#" className="text-dark">
                      <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className="ri-check-line align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className=" ri-close-fill align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                  </span>
                </h5>
                <div className="inner-box">
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                  />
                </div>
              </div>

              <div className="title-box">
                <h5 class="card-title">
                  Is Useful
                  <span className="error">*</span>
                  <span className="float-end">
                    <Link to="#" className="text-dark">
                      <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className="ri-check-line align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className=" ri-close-fill align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                  </span>
                </h5>
                <div className="inner-box">
                  <div class="form-check mb-2">
                    <Input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <Input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked=""
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="title-box">
                <h5 class="card-title">
                  Tab File
                  <span className="error">*</span>
                  <span className="float-end">
                    <Link to="#" className="text-dark">
                      <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className="ri-check-line align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className=" ri-close-fill align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                  </span>
                </h5>
                <div className="inner-box">
                  <div className="input-group">
                    <Input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                    />
                    <br />
                  </div>
                  <small className="error">
                    Accepts only .txt, .png, .jpe, .jpeg, .jpg, .gif, .svg,
                    .mp3, .mp4, .pdf, .odt, .ods, .odp, .doc, .docx, .xls ,
                    .xlsx , .csv , .ppt , .pptx files.
                  </small>
                </div>
              </div>

              <div className="title-box">
                <h5 class="card-title">
                  Tab Select
                  <span className="error">*</span>
                  <span className="float-end">
                    <Link to="#" className="text-dark">
                      <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className="ri-check-line align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className=" ri-close-fill align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                  </span>
                </h5>
                <div className="inner-box">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Select </option>
                    <option value="1">HTML</option>
                    <option value="2">PHP</option>
                    <option value="3">Java</option>
                  </select>
                </div>
              </div>

              <div className="title-box">
                <h5 class="card-title">
                  Tab Multiselect
                  <span className="error">*</span>
                  <span className="float-end">
                    <Link to="#" className="text-dark">
                      <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className="ri-check-line align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className=" ri-close-fill align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                  </span>
                </h5>
                <div className="inner-box">
                  <Select
                    value={selectedMulti}
                    isMulti={true}
                    onChange={() => {
                      handleMulti();
                    }}
                    options={SingleOptions}
                  />
                </div>
              </div>

              <div className="title-box">
                <h5 class="card-title">
                  Tab Checkbox
                  <span className="error">*</span>
                  <span className="float-end">
                    <Link to="#" className="text-dark">
                      <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className="ri-check-line align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className=" ri-close-fill align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                  </span>
                </h5>
                <div className="inner-box">
                  <Row>
                    <Col class="form-check mb-2" lg={2} md={2}>
                      <Input
                        class="form-check-input me-1"
                        type="checkbox"
                        id="formCheck1"
                      />{" "}
                      &nbsp;
                      <label class="form-check-label" for="formCheck1">
                        CSE
                      </label>
                    </Col>
                    <Col class="form-check mb-2" lg={2} md={2}>
                      <Input
                        class="form-check-input me-1"
                        type="checkbox"
                        id="formCheck2"
                      />
                      <label class="form-check-label" for="formCheck2">
                        RDMS
                      </label>
                    </Col>
                    <Col class="form-check mb-2" lg={2} md={2}>
                      <Input
                        class="form-check-input me-1"
                        type="checkbox"
                        id="formCheck3"
                      />
                      &nbsp;
                      <label class="form-check-label" for="formCheck3">
                        OS
                      </label>
                    </Col>
                    <Col class="form-check mb-2" lg={2} md={2}>
                      <Input
                        class="form-check-input me-1"
                        type="checkbox"
                        id="formCheck4"
                      />
                      &nbsp;
                      <label class="form-check-label" for="formCheck4">
                        CN
                      </label>
                    </Col>
                    <Col class="form-check mb-2" lg={2} md={2}>
                      <Input
                        class="form-check-input me-1"
                        type="checkbox"
                        id="formCheck5"
                      />
                      &nbsp;
                      <label class="form-check-label" for="formCheck5">
                        M2
                      </label>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="title-box">
                <h5 class="card-title">
                  Tab Date
                  <span className="error">*</span>
                  <span className="float-end">
                    <Link to="#" className="text-dark">
                      <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className="ri-check-line align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className=" ri-close-fill align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                  </span>
                </h5>
                <div className="inner-box">
                  <Flatpickr
                    className="form-control date-picker-icon"
                    options={{
                      dateFormat: "d M, Y",
                    }}
                  />
                </div>
              </div>
              <div className="title-box">
                <h5 class="card-title">
                  Tab URL
                  <span className="error">*</span>
                  <span className="float-end">
                    <Link to="#" className="text-dark">
                      <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className="ri-check-line align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className=" ri-close-fill align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                  </span>
                </h5>
                <div className="inner-box">
                  <input
                    type="password"
                    class="form-control"
                    id=""
                    placeholder="URL"
                  ></input>
                </div>
              </div>

              <div className="title-box">
                <h5 class="card-title">
                  Tab Email
                  <span className="error">*</span>
                  <span className="float-end">
                    <Link to="#" className="text-dark">
                      <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className="ri-check-line align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                    <Link to="#" className="text-dark">
                      <i
                        className=" ri-close-fill align-bottom ms-2 fs-16"
                        style={{ display: "none" }}
                      ></i>
                    </Link>
                  </span>
                </h5>
                <div className="inner-box">
                  <input
                    type="password"
                    class="form-control"
                    id=""
                    placeholder="Enter Mentor Email"
                  ></input>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <CompanyBasicInformation
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "CompanyBasicInformation" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditInvestment
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditInvestment" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditCompanyDetails
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditCompanyDetails" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditCompanySummary
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditCompanySummary" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <CommanModal
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "CommanModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <UploadDocuments
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "UploadDocuments" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <UploadDocumentsAbout
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "UploadDocumentsAbout" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditCompany
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditCompany" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <TeaserModal
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "TeaserModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <TeaserTitle
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "TeaserTitle" ? true : false}
        onCloseClick={() => setModelName("")}
      />
    </React.Fragment>
  );
};

export default TabSection;
