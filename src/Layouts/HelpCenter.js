import React from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

//Images
import avatar1 from "../assets/images/users/avatar-1.jpg";

const HelpCenter = ({ show, onCloseClick }) => {
  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-md"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Help Center
      </OffcanvasHeader>

      <OffcanvasBody>
      <Row>
          <Col lg={12} className="mb-2">
          <h6>Advice and answers from the SCIP team</h6>
          </Col>
    </Row>
        <Row>
          <Col lg={12} className="mb-3">
            <div className="search-box">
              <Input
                type="text"
                className="form-control search"
                placeholder="Search"
              />
              <i className="ri-search-line search-icon"></i>
            </div>
          </Col>
        </Row>
        <SimpleBar style={{ height: "300px", overflowX: 'hidden', }}>
        <Row>
          <Col lg={12}>
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
      </OffcanvasBody>
      <div className="offcanvas-footer border-top p-3 text-center">
        {/*  <button
                        type="submit"
                        className="btn btn-brand-theme  "
                        onClick={onCloseClick}
                    >
                        Submit
                    </button>
                    <button className="btn btn-light" onClick={onCloseClick}>
                        Cancel
                    </button>

    */}
        <Row>
          <Col lg={4}>
            <Link to="#" className="fs-13 text-muted">
              <i className="ri-phone-line fs-22"></i>
              <br />
              Book Call With Sales
            </Link>
          </Col>
          <Col lg={4}>
            <Link to="#" className="fs-13 text-muted">
              <i className="ri-headphone-line fs-22"></i>
              <br />
              Contact Support
            </Link>
          </Col>
          <Col lg={4}>
            <Link to="#" className="fs-13 text-muted">
              <i className="ri-calendar-2-line fs-22"></i>
              <br />
              Help Center
            </Link>
          </Col>
        </Row>
      </div>
    </Offcanvas>
  );
};

export default HelpCenter;
