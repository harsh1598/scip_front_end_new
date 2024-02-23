import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  CardHeader,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Input,
  ListGroup,
  ListGroupItem,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

//Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";

import EditLink from "./Modals/EditLink";
import Comments from "./Modals/Comments";
import Move from "./Modals/Move";
import UploadDocuments from "./Modals/UploadDocuments";
import AddLink from "./Modals/AddLink";

const InvestmentDocuments = () => {
  document.title = "SCIP | Investment Documents";

  // Default Accordion
  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");

  const toggleModel = (name: any) => {
    setModelName(name);
  };

  return (
    <>
      <React.Fragment>
        <Row>
          <Col lg={12} className="ms-auto text-end">
            <Card className="mb-2">
              <CardBody>
                <Button
                  type="button"
                  className="btn btn-brand-theme me-2"
                  onClick={(e) => toggleModel("Move")}
                >
                  {" "}
                  Move{" "}
                </Button>
                <Button
                  type="button"
                  className="btn btn-brand-theme me-2"
                  onClick={(e) => toggleModel("UploadDocuments")}
                >
                  {" "}
                  Upload File{" "}
                </Button>
                <Button
                  type="button"
                  className="btn btn-brand-theme"
                  onClick={(e) => toggleModel("AddLink")}
                >
                  {" "}
                  Add Link{" "}
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Card>
              <CardHeader className="align-items-center card-header">
                <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                  <Input
                    className="form-check-input align-bottom me-2"
                    type="checkbox"
                    id="formCheck1"
                  />
                  Standard Document
                </h4>
                <ul className="list-inline hstack gap-2 mb-0 float-end">
                  <li className="list-inline-item">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        href="#"
                        className="btn btn-soft-secondary btn-sm dropdown"
                        tag="button"
                      >
                        <i className="ri-more-line align-middle"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>
                          <i className="ri-download-2-line fs-20 align-middle me-1"></i>{" "}
                          Download
                        </DropdownItem>
                        <DropdownItem>
                          <i className="ri-link-m fs-20 align-middle me-1"></i>{" "}
                          View Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("EditLink")}>
                          <i className="ri-edit-box-line fs-20 align-middle me-1"></i>{" "}
                          Edit Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("Comments")}>
                          <i className="ri-chat-1-line fs-20 align-middle me-1"></i>{" "}
                          Comments
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </CardHeader>
              <CardBody className="py-0">
                <ListGroup className="list mb-0" flush>
                  <ListGroupItem data-id="01" className="px-0">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div>
                          <img
                            className="avatar-xs rounded-circle"
                            alt=""
                            src={avatar1}
                          />
                        </div>
                      </div>

                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="contact-name fs-13 mb-1">
                          <Link to="#" className="link text-dark">
                            Jonny Stromberg
                          </Link>
                        </h5>
                        <p className="contact-born text-muted mb-0">
                          New updates for ABC Theme
                        </p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="social-icons">
                          <div className="fs-11 text-muted">
                            {" "}
                            <i className="ri-time-line align-bottom"></i>{" "}
                            04/06/2021 <br /> <small>Final (Version 1)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <CardHeader className="align-items-center card-header">
                <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                  <Input
                    className="form-check-input align-bottom me-2"
                    type="checkbox"
                    id="formCheck1"
                  />
                  CMP_DOCX_9115610743.docx{" "}
                </h4>
                <ul className="list-inline hstack gap-2 mb-0 float-end">
                  <li className="list-inline-item">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        href="#"
                        className="btn btn-soft-secondary btn-sm dropdown"
                        tag="button"
                      >
                        <i className="ri-more-line align-middle"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>
                          <i className="ri-download-2-line fs-20 align-middle me-1"></i>{" "}
                          Download
                        </DropdownItem>
                        <DropdownItem>
                          <i className="ri-link-m fs-20 align-middle me-1"></i>{" "}
                          View Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("EditLink")}>
                          <i className="ri-edit-box-line fs-20 align-middle me-1"></i>{" "}
                          Edit Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("Comments")}>
                          <i className="ri-chat-1-line fs-20 align-middle me-1"></i>{" "}
                          Comments
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </CardHeader>
              <CardBody className="py-0">
                <ListGroup className="list mb-0" flush>
                  <ListGroupItem data-id="01" className="px-0">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div>
                          <img
                            className="avatar-xs rounded-circle"
                            alt=""
                            src={avatar1}
                          />
                        </div>
                      </div>

                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="contact-name fs-13 mb-1">
                          <Link to="#" className="link text-dark">
                            Jonny Stromberg
                          </Link>
                        </h5>
                        <p className="contact-born text-muted mb-0">
                          New updates for ABC Theme
                        </p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="social-icons">
                          <div className="fs-11 text-muted">
                            {" "}
                            <i className="ri-time-line align-bottom"></i>{" "}
                            04/06/2021 <br /> <small>Final (Version 1)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <CardHeader className="align-items-center card-header">
                <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                  <Input
                    className="form-check-input align-bottom me-2"
                    type="checkbox"
                    id="formCheck1"
                  />
                  Dummyd
                </h4>
                <ul className="list-inline hstack gap-2 mb-0 float-end">
                  <li className="list-inline-item">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        href="#"
                        className="btn btn-soft-secondary btn-sm dropdown"
                        tag="button"
                      >
                        <i className="ri-more-line align-middle"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>
                          <i className="ri-download-2-line fs-20 align-middle me-1"></i>{" "}
                          Download
                        </DropdownItem>
                        <DropdownItem>
                          <i className="ri-link-m fs-20 align-middle me-1"></i>{" "}
                          View Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("EditLink")}>
                          <i className="ri-edit-box-line fs-20 align-middle me-1"></i>{" "}
                          Edit Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("Comments")}>
                          <i className="ri-chat-1-line fs-20 align-middle me-1"></i>{" "}
                          Comments
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </CardHeader>
              <CardBody className="py-0">
                <ListGroup className="list mb-0" flush>
                  <ListGroupItem data-id="01" className="px-0">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div>
                          <img
                            className="avatar-xs rounded-circle"
                            alt=""
                            src={avatar1}
                          />
                        </div>
                      </div>

                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="contact-name fs-13 mb-1">
                          <Link to="#" className="link text-dark">
                            Jonny Stromberg
                          </Link>
                        </h5>
                        <p className="contact-born text-muted mb-0">
                          New updates for ABC Theme
                        </p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="social-icons">
                          <div className="fs-11 text-muted">
                            {" "}
                            <i className="ri-time-line align-bottom"></i>{" "}
                            04/06/2021 <br /> <small>Final (Version 1)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <CardHeader className="align-items-center card-header">
                <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                  <Input
                    className="form-check-input align-bottom me-2"
                    type="checkbox"
                    id="formCheck1"
                  />
                  Watermark
                </h4>
                <ul className="list-inline hstack gap-2 mb-0 float-end">
                  <li className="list-inline-item">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        href="#"
                        className="btn btn-soft-secondary btn-sm dropdown"
                        tag="button"
                      >
                        <i className="ri-more-line align-middle"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>
                          <i className="ri-download-2-line fs-20 align-middle me-1"></i>{" "}
                          Download
                        </DropdownItem>
                        <DropdownItem>
                          <i className="ri-link-m fs-20 align-middle me-1"></i>{" "}
                          View Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("EditLink")}>
                          <i className="ri-edit-box-line fs-20 align-middle me-1"></i>{" "}
                          Edit Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("Comments")}>
                          <i className="ri-chat-1-line fs-20 align-middle me-1"></i>{" "}
                          Comments
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </CardHeader>
              <CardBody className="py-0">
                <ListGroup className="list mb-0" flush>
                  <ListGroupItem data-id="01" className="px-0">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div>
                          <img
                            className="avatar-xs rounded-circle"
                            alt=""
                            src={avatar1}
                          />
                        </div>
                      </div>

                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="contact-name fs-13 mb-1">
                          <Link to="#" className="link text-dark">
                            Jonny Stromberg
                          </Link>
                        </h5>
                        <p className="contact-born text-muted mb-0">
                          New updates for ABC Theme
                        </p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="social-icons">
                          <div className="fs-11 text-muted">
                            {" "}
                            <i className="ri-time-line align-bottom"></i>{" "}
                            04/06/2021 <br /> <small>Final (Version 1)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <CardHeader className="align-items-center card-header">
                <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                  <Input
                    className="form-check-input align-bottom me-2"
                    type="checkbox"
                    id="formCheck1"
                  />
                  Installation{" "}
                </h4>
                <ul className="list-inline hstack gap-2 mb-0 float-end">
                  <li className="list-inline-item">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        href="#"
                        className="btn btn-soft-secondary btn-sm dropdown"
                        tag="button"
                      >
                        <i className="ri-more-line align-middle"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>
                          <i className="ri-download-2-line fs-20 align-middle me-1"></i>{" "}
                          Download
                        </DropdownItem>
                        <DropdownItem>
                          <i className="ri-link-m fs-20 align-middle me-1"></i>{" "}
                          View Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("EditLink")}>
                          <i className="ri-edit-box-line fs-20 align-middle me-1"></i>{" "}
                          Edit Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("Comments")}>
                          <i className="ri-chat-1-line fs-20 align-middle me-1"></i>{" "}
                          Comments
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </CardHeader>
              <CardBody className="py-0">
                <ListGroup className="list mb-0" flush>
                  <ListGroupItem data-id="01" className="px-0">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div>
                          <img
                            className="avatar-xs rounded-circle"
                            alt=""
                            src={avatar1}
                          />
                        </div>
                      </div>

                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="contact-name fs-13 mb-1">
                          <Link to="#" className="link text-dark">
                            Jonny Stromberg
                          </Link>
                        </h5>
                        <p className="contact-born text-muted mb-0">
                          New updates for ABC Theme
                        </p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="social-icons">
                          <div className="fs-11 text-muted">
                            {" "}
                            <i className="ri-time-line align-bottom"></i>{" "}
                            04/06/2021 <br /> <small>Final (Version 1)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <CardHeader className="align-items-center card-header">
                <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                  <Input
                    className="form-check-input align-bottom me-2"
                    type="checkbox"
                    id="formCheck1"
                  />
                  SAMPLE_FILE_010704471{" "}
                </h4>
                <ul className="list-inline hstack gap-2 mb-0 float-end">
                  <li className="list-inline-item">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        href="#"
                        className="btn btn-soft-secondary btn-sm dropdown"
                        tag="button"
                      >
                        <i className="ri-more-line align-middle"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>
                          <i className="ri-download-2-line fs-20 align-middle me-1"></i>{" "}
                          Download
                        </DropdownItem>
                        <DropdownItem>
                          <i className="ri-link-m fs-20 align-middle me-1"></i>{" "}
                          View Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("EditLink")}>
                          <i className="ri-edit-box-line fs-20 align-middle me-1"></i>{" "}
                          Edit Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("Comments")}>
                          <i className="ri-chat-1-line fs-20 align-middle me-1"></i>{" "}
                          Comments
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </CardHeader>
              <CardBody className="py-0">
                <ListGroup className="list mb-0" flush>
                  <ListGroupItem data-id="01" className="px-0">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div>
                          <img
                            className="avatar-xs rounded-circle"
                            alt=""
                            src={avatar1}
                          />
                        </div>
                      </div>

                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="contact-name fs-13 mb-1">
                          <Link to="#" className="link text-dark">
                            Jonny Stromberg
                          </Link>
                        </h5>
                        <p className="contact-born text-muted mb-0">
                          New updates for ABC Theme
                        </p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="social-icons">
                          <div className="fs-11 text-muted">
                            {" "}
                            <i className="ri-time-line align-bottom"></i>{" "}
                            04/06/2021 <br /> <small>Final (Version 1)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <CardHeader className="align-items-center card-header">
                <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                  <Input
                    className="form-check-input align-bottom me-2"
                    type="checkbox"
                    id="formCheck1"
                  />
                  Pitch Document{" "}
                </h4>
                <ul className="list-inline hstack gap-2 mb-0 float-end">
                  <li className="list-inline-item">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        href="#"
                        className="btn btn-soft-secondary btn-sm dropdown"
                        tag="button"
                      >
                        <i className="ri-more-line align-middle"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>
                          <i className="ri-download-2-line fs-20 align-middle me-1"></i>{" "}
                          Download
                        </DropdownItem>
                        <DropdownItem>
                          <i className="ri-link-m fs-20 align-middle me-1"></i>{" "}
                          View Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("EditLink")}>
                          <i className="ri-edit-box-line fs-20 align-middle me-1"></i>{" "}
                          Edit Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("Comments")}>
                          <i className="ri-chat-1-line fs-20 align-middle me-1"></i>{" "}
                          Comments
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </CardHeader>
              <CardBody className="py-0">
                <ListGroup className="list mb-0" flush>
                  <ListGroupItem data-id="01" className="px-0">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div>
                          <img
                            className="avatar-xs rounded-circle"
                            alt=""
                            src={avatar1}
                          />
                        </div>
                      </div>

                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="contact-name fs-13 mb-1">
                          <Link to="#" className="link text-dark">
                            Jonny Stromberg
                          </Link>
                        </h5>
                        <p className="contact-born text-muted mb-0">
                          New updates for ABC Theme
                        </p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="social-icons">
                          <div className="fs-11 text-muted">
                            {" "}
                            <i className="ri-time-line align-bottom"></i>{" "}
                            04/06/2021 <br /> <small>Final (Version 1)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <CardHeader className="align-items-center card-header">
                <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                  <Input
                    className="form-check-input align-bottom me-2"
                    type="checkbox"
                    id="formCheck1"
                  />
                  Termsheet{" "}
                </h4>
                <ul className="list-inline hstack gap-2 mb-0 float-end">
                  <li className="list-inline-item">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        href="#"
                        className="btn btn-soft-secondary btn-sm dropdown"
                        tag="button"
                      >
                        <i className="ri-more-line align-middle"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>
                          <i className="ri-download-2-line fs-20 align-middle me-1"></i>{" "}
                          Download
                        </DropdownItem>
                        <DropdownItem>
                          <i className="ri-link-m fs-20 align-middle me-1"></i>{" "}
                          View Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("EditLink")}>
                          <i className="ri-edit-box-line fs-20 align-middle me-1"></i>{" "}
                          Edit Link
                        </DropdownItem>
                        <DropdownItem onClick={(e) => toggleModel("Comments")}>
                          <i className="ri-chat-1-line fs-20 align-middle me-1"></i>{" "}
                          Comments
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </CardHeader>
              <CardBody className="py-0">
                <ListGroup className="list mb-0" flush>
                  <ListGroupItem data-id="01" className="px-0">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div>
                          <img
                            className="avatar-xs rounded-circle"
                            alt=""
                            src={avatar1}
                          />
                        </div>
                      </div>

                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="contact-name fs-13 mb-1">
                          <Link to="#" className="link text-dark">
                            Smriti Misra
                          </Link>
                        </h5>
                        <p className="contact-born text-muted mb-0">
                          New updates for ABC Theme
                        </p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="social-icons">
                          <div className="fs-11 text-muted">
                            {" "}
                            <i className="ri-time-line align-bottom"></i>{" "}
                            04/06/2021 <br /> <small>Final (Version 1)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Comments
          modelName={modelName}
          toggleModel={toggleModel}
          show={modelName === "Comments" ? true : false}
          onCloseClick={() => setModelName("")}
        />

        <EditLink
          modelName={modelName}
          toggleModel={toggleModel}
          show={modelName === "EditLink" ? true : false}
          onCloseClick={() => setModelName("")}
        />

        <Move
          modelName={modelName}
          toggleModel={toggleModel}
          show={modelName === "Move" ? true : false}
          onCloseClick={() => setModelName("")}
        />

        <UploadDocuments
          modelName={modelName}
          toggleModel={toggleModel}
          show={modelName === "UploadDocuments" ? true : false}
          onCloseClick={() => setModelName("")}
        />

        <AddLink
          modelName={modelName}
          toggleModel={toggleModel}
          show={modelName === "AddLink" ? true : false}
          onCloseClick={() => setModelName("")}
        />
      </React.Fragment>
    </>
  );
};

export default InvestmentDocuments;
