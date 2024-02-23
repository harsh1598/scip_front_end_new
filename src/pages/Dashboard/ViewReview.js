import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardHeader,
  Label,
  Button,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const ViewReview = () => {
  document.title = "SCIP | View Review";

  const [min_max, setmin_max] = useState(70);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="View Review" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card className="mb-2">
                <CardHeader className="align-items-center card-header">
                  <h4 className="card-title card-title mb-0 me-2">
                  Notes
                  </h4>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-0">
                    <b>Note:</b> You have been requested to add the following note about this deal.
                  </p>
                </CardBody>
              </Card>
              <Card className="mb-2">
                <CardBody>
                  <Row>
                    <Col lg={12} sm={12}>
                      <div className="mb-3">
                        <Label
                          htmlFor="VertimeassageInput"
                          className="form-label"
                        >
                        Nature Of Business 
                          <i className="ri-information-line align-bottom fs-16 ms-1"></i>
                        </Label>
                        <textarea
                          className="form-control"
                          id="VertimeassageInput"
                          rows="3"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <Label
                          htmlFor="VertimeassageInput"
                          className="form-label"
                        >
                        Revenue Model
                          <i className="ri-information-line align-bottom fs-16 ms-1"></i>
                        </Label>
                        <textarea
                          className="form-control"
                          id="VertimeassageInput"
                          rows="3"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <Label
                          htmlFor="VertimeassageInput"
                          className="form-label"
                        >
                        Traction
                          <i className="ri-information-line align-bottom fs-16 ms-1"></i>
                        </Label>
                        <textarea
                          className="form-control"
                          id="VertimeassageInput"
                          rows="3"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                      <Label
                        htmlFor="VertimeassageInput"
                        className="form-label"
                      >
                      Marks(1-100)
                        <i className="ri-information-line align-bottom fs-16 ms-1"></i>
                      </Label>
                      <textarea
                        className="form-control"
                        id="VertimeassageInput"
                        rows="3"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                    <Label
                      htmlFor="VertimeassageInput"
                      className="form-label"
                    >
                    Rating
                      <i className="ri-information-line align-bottom fs-16 ms-1"></i>
                    </Label>
                    <textarea
                      className="form-control"
                      id="VertimeassageInput"
                      rows="3"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                    </Col>
                  </Row>
                  <Row>
                  <div className="hstack gap-2 justify-content-end">
                  <button type="button" className="btn btn-light">
                    Save
                  </button>
                  <Button className="btn btn-brand-theme">
                    Submit
                  </Button>
                </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ViewReview;
