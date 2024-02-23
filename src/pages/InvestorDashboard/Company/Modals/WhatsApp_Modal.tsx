import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { className } from "gridjs";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  Label,
  Button,
  Card,
  Container,
  Input,
  CardBody,
} from "reactstrap";

import { useForm } from "react-hook-form";

interface propData {
  show: boolean;
  onCloseClick: any;
}

const WhatsAppModal = (props: propData) => {
const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onCloseModal = () => {
    reset();
    props.onCloseClick();
  };

  const [tagsData, setTagsData] = useState({ columns: "" });
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const radioList = [
    { value: "userCode", label: "User Code" },
    { value: "userName", label: "User Name" },
    { value: "companyBrand", label: "Company / Brand" },
    { value: "companyStage ", label: "Company Stage " },
  ];

  useEffect(() => {
    if (radioList.length === tagsData.columns.length) {
      setIsCheckAll(true);
    }
  }, [radioList.length, tagsData.columns.length]);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  // const formhandler = (e, field, type = "") => {
  //   let data = { ...tagsData };

  //   if (e.target.checked) {
  //     if (type === "all") {
  //       let value = [];
  //       for (let i in radioList) {
  //         let row = radioList[i];
  //         value.push(row.value);
  //       }
  //       data.columns = value;
  //       setIsCheckAll(true);
  //     } else {
  //       if (!data[field: any]) {
  //         data[field: any] = [];
  //       }
  //       data[field].push(e.target.value);
  //     }
  //   } else {
  //     if (type === "all") {
  //       data.columns = "";
  //       setIsCheckAll(false);
  //     } else {
  //       var index = data[field: any].indexOf(e.target.value);
  //       if (index !== -1) {
  //         data[field].splice(index, 1);
  //       }
  //       setIsCheckAll(false);
  //     }
  //   }
  //   setTagsData(data);
  // };

  const CompanyStageList = [
    { value: "Ash King", label: "Ash King" },
    { value: "Smriti Sharma", label: "Smriti Sharma" },
    { value: "Test Account", label: "Test Account" },
  ];

  return (
    <Offcanvas
      isOpen={props.show}
      onHide={onCloseModal}
      toggle={props.onCloseClick}
      direction="end"
      className="border-bottom size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
        WhatsApp
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <Form>
              <Row>
                <Col lg={12} sm={12} className="mb-3">
                  <label>Select User</label>
                  <select className="form-select" aria-label="Default select">
                    <option>Select User</option>
                    <option>Admin </option>
                    <option value="1">Entrepreneur</option>
                    <option value="2">Investor</option>
                    <option value="3">SME Advisor</option>
                    <option value="4">Message Groups</option>
                    <option value="5">Team</option>
                  </select>
                </Col>
                <Col lg={12} sm={12}>
                  <div className="mb-3">
                    <Label htmlFor="timezone" className="form-label">
                      To Whom <span className="text-danger">*</span>
                    </Label>
                    <div>
                      <div className="d-flex align-items-start">
                        <button
                          type="button"
                          className="btn btn-soft-info btn-label d-grid col-12 right ms-auto "
                          onClick={() => {
                            toggleDropdown();
                          }}
                        >
                          <i className="ri-arrow-down-s-fill label-icon align-middle fs-16 ms-2"></i>
                          <span
                            style={{ alignItems: "start", display: "flex" }}
                          >
                            {tagsData.columns.length
                              ? tagsData.columns.length + " Selected"
                              : " Select User"}
                          </span>
                        </button>
                      </div>
                      {dropdownOpen && (
                        <>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col lg={12}>
                                  <div>
                                    <Input
                                      name="search"
                                      id="customername-field"
                                      className="form-control"
                                      placeholder="Enter Keywords"
                                      type="text"
                                      validate={{ required: { value: true } }}
                                    />
                                  </div>
                                </Col>

                                <Col lg={12}>
                                  <div className="mb-3">
                                    <div className="form-check">
                                      <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="columns"
                                        id="columns" // Value={item.value}
                                        // onChange={(e) =>
                                        //   formhandler(e, "columnsall", "all")
                                        // }
                                        checked={isCheckAll}
                                      />
                                      <Label
                                        className="form-check-label"
                                        htmlFor="auth-remember-check"
                                      >
                                        Check All{" "}
                                      </Label>
                                    </div>
                                  </div>
                                </Col>

                                <Col lg={12}>
                                  <div className="border-top p-2">
                                    {radioList.map((item, key) => {
                                      let check =
                                        tagsData.columns &&
                                        tagsData.columns.length &&
                                        tagsData.columns.includes(item.value)
                                          ? true
                                          : false;
                                      // console.log(check)
                                      return (
                                        <Col lg={12} key={key}>
                                          <div className="form-check">
                                            <Input
                                              className="form-check-input"
                                              type="checkbox"
                                              name="columns"
                                              id="columns"
                                              Value={item.value}
                                              // onChange={(e) =>
                                              //   formhandler(
                                              //     e,
                                              //     "columns",
                                              //     "checkbox"
                                              //   )
                                              // }
                                              checked={check}
                                            />
                                            <Label
                                              className="form-check-label"
                                              htmlFor={item.label}
                                            >
                                              {item.label}
                                            </Label>
                                          </div>
                                        </Col>
                                      );
                                    })}
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </>
                      )}
                    </div>
                  </div>
                </Col>

                <Col lg={12} sm={12} className="mb-3">
                  <label>
                    WhatsApp Template
                    <i className="ri-information-fill fs-15 align-bottom"></i>
                  </label>
                  <div className="ps-add">
                    <Link to="/investor_dashboard/Imanage/whatsapptemplate">
                      <span className="add-btns">
                        <i className="ri-add-line align-bottom"></i> Add
                      </span>
                    </Link>
                  </div>
                  <select className="form-select" aria-label="Default select">
                    <option>Select Template</option>
                    <option>SCIP </option>
                    <option value="1">Initial Commitment</option>
                    <option value="2">Final Commitment</option>
                    <option value="3">Investment Opportunity</option>
                    <option value="4">Angel Meeting</option>
                    <option value="5">Deep Dive Call</option>
                  </select>
                </Col>
                <Col lg={12} sm={12} className="mb-3">
                  <label>Deal Link</label>
                  <select className="form-select" aria-label="Default select">
                    <option>Select Deal URL</option>
                    <option value="comments">Comments</option>
                    <option value="application">Application</option>
                    <option value="review">Review</option>
                    <option value="rubrics">Rubric</option>
                    <option value="email">Emails</option>
                    <option value="teaser">Teaser</option>
                    <option value="pitch_mom">Pitch Video</option>
                    <option value="initial_commitment">
                      Initial Commitment
                    </option>
                    <option value="final_commitment">Final Commitment</option>
                    <option value="investment_document">Documents</option>
                    <option value="esign_document">eSign Documents</option>
                    <option value="filling">Reports</option>
                    <option value="lead_angel">Lead</option>
                    <option value="task_status">Task Status</option>
                    <option value="startup_funding_proposal">
                      Startup Funding Proposal
                    </option>
                    <option value="sharepoint_document">Document</option>
                  </select>
                </Col>
                <Col lg={12} sm={12} className="mb-3">
                  <Link
                    to="#"
                    className="ri-chat-history-line text-muted fs-22 me-2 align-bottom"
                  ></Link>
                  <Link
                    to="#"
                    className="ri-send-plane-fill text-muted fs-22 me-2 align-bottom"
                  ></Link>
                </Col>
              </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default WhatsAppModal;
