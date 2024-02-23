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

const ViewRubric = () => {
  document.title = "SCIP | View Rubric";

  const [min_max, setmin_max] = useState(70);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="View Rubric" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card className="mb-2">
                <CardHeader className="align-items-center card-header">
                  <h4 className="card-title card-title mb-0 me-2">
                    Evaluation
                  </h4>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-0">
                    <b>Note:</b> This Rubric Is Prepared For You To Score The
                    Deal Under Identified Criteria. Each Criteria Is Defined.
                    The Average Score Is Automatically Calculated. You May Add
                    Your Overall Comments About The Deal After Completion Of The
                    Ranking.
                  </p>
                </CardBody>
              </Card>
              <Card className="mb-2">
                <CardBody>
                  <Row className="align-items-center">
                    <Col lg={4} sm={4}>
                      <h6>
                        Founders (Scale : 1 to 10)
                        <i className="ri-information-line align-bottom fs-16 ms-1"></i>
                      </h6>

                      <Slider
                        value={min_max}
                        min={1}
                        max={10}
                        orientation="horizontal"
                        onChange={(value) => {
                          setmin_max(value);
                        }}
                      />
                      <div style={{ marginTop: "-10px" }}>
                        <span className="float-start badge rounded-pill border text-dark fs-11">
                          Min
                        </span>
                        <span className="float-end badge rounded-pill border text-dark fs-11">
                          Max
                        </span>
                      </div>
                    </Col>
                    <Col lg={8} sm={8}>
                      <div className="mb-3">
                        <Label
                          htmlFor="VertimeassageInput"
                          className="form-label"
                        >
                          Comment
                        </Label>
                        <textarea
                          className="form-control"
                          id="VertimeassageInput"
                          rows="3"
                          placeholder="Enter your Comment"
                        ></textarea>
                      </div>
                      <Button
                        type="button"
                        className="btn btn-brand-theme float-end"
                      >
                        Save
                        <i className="ri-save-3-line align-bottom ms-1"></i>
                      </Button>
                    </Col>
                  </Row>

                  <Row className="align-items-center">
                    <Col lg={4} sm={4}>
                      <h6>
                        Interaction With Entrepreneur (Scale : 1 to 10)
                        <i className="ri-information-line align-bottom fs-16 ms-1"></i>
                      </h6>

                      <Slider
                        value={min_max}
                        min={1}
                        max={10}
                        orientation="horizontal"
                        onChange={(value) => {
                          setmin_max(value);
                        }}
                      />
                      <div style={{ marginTop: "-10px" }}>
                        <span className="float-start badge rounded-pill border text-dark fs-11">
                          Min
                        </span>
                        <span className="float-end badge rounded-pill border text-dark fs-11">
                          Max
                        </span>
                      </div>
                    </Col>
                    <Col lg={8} sm={8}>
                      <div className="mb-3">
                        <Label
                          htmlFor="VertimeassageInput"
                          className="form-label"
                        >
                          Comment
                        </Label>
                        <textarea
                          className="form-control"
                          id="VertimeassageInput"
                          rows="3"
                          placeholder="Enter your Comment"
                        ></textarea>
                      </div>
                      <Button
                        type="button"
                        className="btn btn-brand-theme float-end"
                      >
                        Save
                        <i className="ri-save-3-line align-bottom ms-1"></i>
                      </Button>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col lg={4} sm={4}>
                      <select
                        className="form-select"
                        aria-label="Disabled select example"
                        disabled
                      >
                        <option>Total</option>
                        <option defaultValue="1" selected>
                          11
                        </option>
                        <option defaultValue="2">12</option>
                        <option defaultValue="3">13</option>
                      </select>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} sm={12}>
                      <div className="mb-3">
                        <Label
                          htmlFor="VertimeassageInput"
                          className="form-label"
                        >
                          Strength
                          <i className="ri-information-line align-bottom fs-16 ms-1"></i>
                        </Label>
                        <textarea
                          className="form-control"
                          id="VertimeassageInput"
                          rows="3"
                          placeholder="Enter your strength"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <Label
                          htmlFor="VertimeassageInput"
                          className="form-label"
                        >
                          Weakness
                          <i className="ri-information-line align-bottom fs-16 ms-1"></i>
                        </Label>
                        <textarea
                          className="form-control"
                          id="VertimeassageInput"
                          rows="3"
                          placeholder="Enter your weakness"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <Label
                          htmlFor="VertimeassageInput"
                          className="form-label"
                        >
                          Final Comment
                          <i className="ri-information-line align-bottom fs-16 ms-1"></i>
                        </Label>
                        <textarea
                          className="form-control"
                          id="VertimeassageInput"
                          rows="3"
                          placeholder="Enter your final comment"
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                  <div className="hstack gap-2 justify-content-end">
                  <button type="button" className="btn btn-light">
                    Save Draft
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

export default ViewRubric;
