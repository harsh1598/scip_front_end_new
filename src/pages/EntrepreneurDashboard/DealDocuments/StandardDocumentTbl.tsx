import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, CardHeader, Card, CardBody, Col, Container, Row, Input, ListGroup, ListGroupItem, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

//Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";

const StandardDocument = () => {

document.title = "SCIP | Standard Document";

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
        <Col lg={6}>
          <Card>
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                Standard Document</h4>
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
                        <i className="ri-download-2-line fs-20 align-middle me-1"></i> Download
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
                        <img className="avatar-xs rounded-circle" alt="" src={avatar1} />
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Jonny Stromberg</Link></h5>
                      <p className="contact-born text-muted mb-0">New updates for ABC Theme</p>
                    </div>

                    <div className="flex-shrink-0 ms-2">
                      <div className="social-icons">
                        <div className="fs-11 text-muted"> <i className="ri-time-line align-bottom"></i> 04/06/2021 <br /> <small>Final (Version 1)</small></div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <Row className="mt-2">
                    <Col md={9}><Input className="form-control align-bottom" type="text" placeholder="Enter Commnet" style={{ height: '35px', }} /></Col>
                    <Col md={3} className="mt10"><Button type="button" class="btn btn-success" style={{ height: '35px', lineHeight: '18px', }}> Comment </Button></Col>
                  </Row>
                  <hr />
                  <div className="text-reset notification-item d-block py-1 dropdown-item active">
                    <div className="d-flex">
                      <div className="flex-shrink-0 avatar-xs me-3">
                        <img src={avatar2} className="rounded-circle img-fluid" alt="user-pic" />
                      </div>
                      <div className="flex-grow-1 text-muted">
                        {/*<h6 className="mb-1 fs-14">Angela Bernier</h6>*/}
                        <p className="mb-0">Answered to your comment on the cash flow forecast's graph.</p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="fs-11 text-muted">
                          <i className="mdi mdi-clock-outline"></i> Smriti Misra | 2:45 PM
                                                                </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="text-reset notification-item d-block py-1 dropdown-item active">
                    <div className="d-flex">
                      <div className="flex-shrink-0 avatar-xs me-3">
                        <img src={avatar2} className="rounded-circle img-fluid" alt="user-pic" />
                      </div>
                      <div className="flex-grow-1 text-muted">
                        {/*<h6 className="mb-1 fs-14">Angela Bernier</h6>*/}
                        <p className="mb-0">Answered to your comment on the cash flow forecast's graph.</p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="fs-11 text-muted">
                          <i className="mdi mdi-clock-outline"></i> Smriti Misra | 2:45 PM
                                                                </div>
                      </div>
                    </div>
                  </div>

                </ListGroupItem>
              </ListGroup>
            </CardBody>

          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2 float-start pt-1">

                CMP_DOCX_9115610743.docx </h4>
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
                        <i className="ri-download-2-line fs-20 align-middle me-1"></i> Download
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
                        <img className="avatar-xs rounded-circle" alt="" src={avatar1} />
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Jonny Stromberg</Link></h5>
                      <p className="contact-born text-muted mb-0">New updates for ABC Theme</p>
                    </div>

                    <div className="flex-shrink-0 ms-2">
                      <div className="social-icons">
                        <div className="fs-11 text-muted"> <i className="ri-time-line align-bottom"></i> 04/06/2021 <br /> <small>Final (Version 1)</small></div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
              <hr />
                  <Row className="mt-2">
                    <Col md={9}><Input className="form-control align-bottom" type="text" placeholder="Enter Commnet" style={{ height: '35px', }} /></Col>
                    <Col md={3} className="mt10"><Button type="button" class="btn btn-success" style={{ height: '35px', lineHeight: '18px', }}> Comment </Button></Col>
                  </Row>
                  <hr />
                  <div className="text-reset notification-item d-block py-1 dropdown-item active">
                    <div className="d-flex">
                      <div className="flex-shrink-0 avatar-xs me-3">
                        <img src={avatar2} className="rounded-circle img-fluid" alt="user-pic" />
                      </div>
                      <div className="flex-grow-1 text-muted">
                        {/*<h6 className="mb-1 fs-14">Angela Bernier</h6>*/}
                        <p className="mb-0">Answered to your comment on the cash flow forecast's graph.</p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="fs-11 text-muted">
                          <i className="mdi mdi-clock-outline"></i> Smriti Misra | 2:45 PM
                                                                </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="text-reset notification-item d-block py-1 dropdown-item active">
                    <div className="d-flex">
                      <div className="flex-shrink-0 avatar-xs me-3">
                        <img src={avatar2} className="rounded-circle img-fluid" alt="user-pic" />
                      </div>
                      <div className="flex-grow-1 text-muted">
                        {/*<h6 className="mb-1 fs-14">Angela Bernier</h6>*/}
                        <p className="mb-0">Answered to your comment on the cash flow forecast's graph.</p>
                      </div>

                      <div className="flex-shrink-0 ms-2">
                        <div className="fs-11 text-muted">
                          <i className="mdi mdi-clock-outline"></i> Smriti Misra | 2:45 PM
                                                                </div>
                      </div>
                    </div>
                  </div>
            </CardBody>

          </Card>
        </Col>
        <Col xxl={6}>
          <Card>
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                Dummyd</h4>
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
                        <i className="ri-download-2-line fs-20 align-middle me-1"></i> Download
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
                        <img className="avatar-xs rounded-circle" alt="" src={avatar1} />
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Jonny Stromberg</Link></h5>
                      <p className="contact-born text-muted mb-0">New updates for ABC Theme</p>
                    </div>

                    <div className="flex-shrink-0 ms-2">
                      <div className="social-icons">
                        <div className="fs-11 text-muted"> <i className="ri-time-line align-bottom"></i> 04/06/2021 <br /> <small>Final (Version 1)</small></div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </CardBody>

          </Card>
        </Col>
        <Col xxl={6}>
          <Card>
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                Watermark</h4>
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
                        <i className="ri-download-2-line fs-20 align-middle me-1"></i> Download
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
                        <img className="avatar-xs rounded-circle" alt="" src={avatar1} />
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Jonny Stromberg</Link></h5>
                      <p className="contact-born text-muted mb-0">New updates for ABC Theme</p>
                    </div>

                    <div className="flex-shrink-0 ms-2">
                      <div className="social-icons">
                        <div className="fs-11 text-muted"> <i className="ri-time-line align-bottom"></i> 04/06/2021 <br /> <small>Final (Version 1)</small></div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col xxl={6}>
          <Card>
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                Installation </h4>
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
                        <i className="ri-download-2-line fs-20 align-middle me-1"></i> Download
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
                        <img className="avatar-xs rounded-circle" alt="" src={avatar1} />
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Jonny Stromberg</Link></h5>
                      <p className="contact-born text-muted mb-0">New updates for ABC Theme</p>
                    </div>

                    <div className="flex-shrink-0 ms-2">
                      <div className="social-icons">
                        <div className="fs-11 text-muted"> <i className="ri-time-line align-bottom"></i> 04/06/2021 <br /> <small>Final (Version 1)</small></div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </CardBody>

          </Card>
        </Col>
        <Col xxl={6}>
          <Card>
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                SAMPLE_FILE_010704471  </h4>
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
                        <i className="ri-download-2-line fs-20 align-middle me-1"></i> Download
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
                        <img className="avatar-xs rounded-circle" alt="" src={avatar1} />
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Jonny Stromberg</Link></h5>
                      <p className="contact-born text-muted mb-0">New updates for ABC Theme</p>
                    </div>

                    <div className="flex-shrink-0 ms-2">
                      <div className="social-icons">
                        <div className="fs-11 text-muted"> <i className="ri-time-line align-bottom"></i> 04/06/2021 <br /> <small>Final (Version 1)</small></div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </CardBody>

          </Card>
        </Col>
        <Col xxl={6}>
          <Card>
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                Pitch Document </h4>
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
                        <i className="ri-download-2-line fs-20 align-middle me-1"></i> Download
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
                        <img className="avatar-xs rounded-circle" alt="" src={avatar1} />
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Jonny Stromberg</Link></h5>
                      <p className="contact-born text-muted mb-0">New updates for ABC Theme</p>
                    </div>

                    <div className="flex-shrink-0 ms-2">
                      <div className="social-icons">
                        <div className="fs-11 text-muted"> <i className="ri-time-line align-bottom"></i> 04/06/2021 <br /> <small>Final (Version 1)</small></div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </CardBody>

          </Card>
        </Col>
        <Col xxl={6}>
          <Card>
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2 float-start pt-1">
                Termsheet </h4>
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
                        <i className="ri-download-2-line fs-20 align-middle me-1"></i> Download
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
                        <img className="avatar-xs rounded-circle" alt="" src={avatar1} />
                      </div>
                    </div>

                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Smriti Misra</Link></h5>
                      <p className="contact-born text-muted mb-0">New updates for ABC Theme</p>
                    </div>

                    <div className="flex-shrink-0 ms-2">
                      <div className="social-icons">
                        <div className="fs-11 text-muted"> <i className="ri-time-line align-bottom"></i> 04/06/2021 <br /> <small>Final (Version 1)</small></div>
                      </div>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
     </React.Fragment>
    </>
  );
};

export default StandardDocument;