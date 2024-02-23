import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Row, Input } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import classnames from "classnames";
import SimpleBar from "simplebar-react";

//Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";

const SearchResults = () => {

document.title = "Search Results | SCIP";
  
return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <BreadCrumb title="Search Results" pageTitle="Pages" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className="border-0">
                  <Row className="justify-content-center mb-4">
                    <Col lg={6}>
                      <Row className="g-2">
                        <Col>
                          <div className="position-relative mb-3">
                            <Input
                              type="text"
                              className="form-control form-control-lg bg-light border-light"
                              placeholder="Search for articles..."
                              defaultValue=""
                            />
                            <Link
                              to="#"
                              className="btn btn-link link-success btn-lg position-absolute end-0 top-0"
                            >
                              <i className="ri-mic-fill"></i>
                            </Link>
                          </div>
                        </Col>
                        <div className="col-auto">
                          <button
                            type="submit"
                            className="btn btn-info btn-lg waves-effect waves-light"
                          >
                            <i className="mdi mdi-magnify me-1"></i> Search
                          </button>
                        </div>
                      </Row>
                    </Col>
                    <Col lg={12}>
                      <h5 className="fs-15 text-center mb-0">
                        Showing results for
                        <span className="text-primary fw-medium fst-italic ms-1">
                          SCIP
                        </span>
                       </h5>
                    </Col>
                  </Row>
                  <SimpleBar style={{ height: "600px", overflowX: 'hidden', }}>
                  <Row>
                  <Col lg={8} sm={10} className="mx-auto">
                    <div className="card mb-3">
                      <div className="card-body">
                        <a
                          className="d-flex align-items-center"
                          data-bs-toggle="collapse"
                          href="#leadDiscovered1"
                          role="button"
                          aria-expanded="false"
                          aria-controls="leadDiscovered1"
                        >
                          <div className="flex-shrink-0">
                            <i className="ri-feedback-line text-muted fs-24"></i>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="fs-14 mb-1">Overview</h6>
                            <p className="text-muted mb-0">
                              All you need to know Digify and our free 7-day trial.
                            </p>
                            <p className="text-muted mb-0">
                              <img
                                src={avatar1}
                                alt=""
                                className="img-fluid rounded-circle me-2"
                                width={20}
                                height={20}
                              />
                              By Smriti Sharma &nbsp;| &nbsp; 9 articles
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <a
                          className="d-flex align-items-center"
                          data-bs-toggle="collapse"
                          href="#leadDiscovered1"
                          role="button"
                          aria-expanded="false"
                          aria-controls="leadDiscovered1"
                        >
                          <div className="flex-shrink-0">
                          <i className="ri-send-plane-line text-muted fs-24"></i>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="fs-14 mb-1">Document Security</h6>
                            <p className="text-muted mb-0">
                              All you need to know Digify and our free 7-day trial.
                            </p>
                            <p className="text-muted mb-0">
                              <img
                                src={avatar1}
                                alt=""
                                className="img-fluid rounded-circle me-2"
                                width={20}
                                height={20}
                              />
                              By Smriti Sharma &nbsp;| &nbsp; 9 articles
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <a
                          className="d-flex align-items-center"
                          data-bs-toggle="collapse"
                          href="#leadDiscovered1"
                          role="button"
                          aria-expanded="false"
                          aria-controls="leadDiscovered1"
                        >
                          <div className="flex-shrink-0">
                          <i className="ri-database-2-line text-muted fs-24"></i>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="fs-14 mb-1">Data Rooms</h6>
                            <p className="text-muted mb-0">
                              All you need to know Digify and our free 7-day trial.
                            </p>
                            <p className="text-muted mb-0">
                              <img
                                src={avatar1}
                                alt=""
                                className="img-fluid rounded-circle me-2"
                                width={20}
                                height={20}
                              />
                              By Smriti Sharma &nbsp;| &nbsp; 9 articles
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="card mb-3">
                    <div className="card-body">
                      <a
                        className="d-flex align-items-center"
                        data-bs-toggle="collapse"
                        href="#leadDiscovered1"
                        role="button"
                        aria-expanded="false"
                        aria-controls="leadDiscovered1"
                      >
                        <div className="flex-shrink-0">
                          <i className="ri-feedback-line text-muted fs-24"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="fs-14 mb-1">Overview</h6>
                          <p className="text-muted mb-0">
                            All you need to know Digify and our free 7-day trial.
                          </p>
                          <p className="text-muted mb-0">
                            <img
                              src={avatar1}
                              alt=""
                              className="img-fluid rounded-circle me-2"
                              width={20}
                              height={20}
                            />
                            By Smriti Sharma &nbsp;| &nbsp; 9 articles
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a
                        className="d-flex align-items-center"
                        data-bs-toggle="collapse"
                        href="#leadDiscovered1"
                        role="button"
                        aria-expanded="false"
                        aria-controls="leadDiscovered1"
                      >
                        <div className="flex-shrink-0">
                        <i className="ri-send-plane-line text-muted fs-24"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="fs-14 mb-1">Document Security</h6>
                          <p className="text-muted mb-0">
                            All you need to know Digify and our free 7-day trial.
                          </p>
                          <p className="text-muted mb-0">
                            <img
                              src={avatar1}
                              alt=""
                              className="img-fluid rounded-circle me-2"
                              width={20}
                              height={20}
                            />
                            By Smriti Sharma &nbsp;| &nbsp; 9 articles
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a
                        className="d-flex align-items-center"
                        data-bs-toggle="collapse"
                        href="#leadDiscovered1"
                        role="button"
                        aria-expanded="false"
                        aria-controls="leadDiscovered1"
                      >
                        <div className="flex-shrink-0">
                        <i className="ri-database-2-line text-muted fs-24"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="fs-14 mb-1">Data Rooms</h6>
                          <p className="text-muted mb-0">
                            All you need to know Digify and our free 7-day trial.
                          </p>
                          <p className="text-muted mb-0">
                            <img
                              src={avatar1}
                              alt=""
                              className="img-fluid rounded-circle me-2"
                              width={20}
                              height={20}
                            />
                            By Smriti Sharma &nbsp;| &nbsp; 9 articles
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  </Col>
                  </Row>
                 </SimpleBar>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchResults;
