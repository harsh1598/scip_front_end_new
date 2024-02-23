import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { className } from "gridjs";
//import { CKEditor } from "@ckeditor/ckeditor5-react";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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

const EmailModal = (props: propData) => {
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
  //       if (!data[field]) {
  //         data[field] = [];
  //       }
  //       data[field].push(e.target.value);
  //     }
  //   } else {
  //     if (type === "all") {
  //       data.columns = "";
  //       setIsCheckAll(false);
  //     } else {
  //       var index = data[field].indexOf(e.target.value);
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
      className="border-bottom"
    >
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
      Email / Message / Notification
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <Form>
              <Row>
                <Col lg={12} sm={12} className="mb-3">
                  <label>Select</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="email1"
                    />
                    <label className="form-check-label">Email</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="message1"
                      //checked=""
                    />
                    <label className="form-check-label">Message</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="notification1"
                      //checked=""
                    />
                    <label className="form-check-label">Notification</label>
                  </div>
                </Col>
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
                  <label>CC</label>
                  <input
                    type="text"
                    name=""
                    value=""
                    placeholder="CC"
                    className="form-control"
                  />
                </Col>
                <Col lg={12} sm={12} className="mb-3">
                  <label>Content</label>
                  {/* <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={(editor: any) => {
                      // You can store the "editor" and use when it is needed.
                    }}
                    onChange={(event: any, editor: any) => {
                      const data = editor.getData();
                      // console.log({ event, editor, data });
                    }}
                  /> */}
                </Col>
                <Col lg={12} sm={12} className="mb-3">
                  <Link
                    to="#"
                    className="ri-file-list-line text-muted fs-22 me-2 align-bottom"
                  ></Link>
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
            <Button
              type="submit"
              className="btn btn-brand-theme">
              Submit
            </Button>
            <Button className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default EmailModal;
