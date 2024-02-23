import React, { useEffect, useState } from "react";
import DealsMenuBar from "./DealsMenuBar";
import ProfileBar from "./ProfileBar";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Collapse,
  Label,
  Progress,
} from "reactstrap";
import SwiperCore, { Autoplay } from "swiper";
import SimpleBar from "simplebar-react";

//Images
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import WebService from "../../utility/WebService";

const EvaluationRubric = () => {
  SwiperCore.use([Autoplay]);

  const [isAllRubric, setIsAllRubric] = useState(false);
  const [rubricData, setRubricData] = useState(false);

  const toggleAllRubric = () => {
    setIsAllRubric(!isAllRubric);
  };

  useEffect(() => {
    getCompanySummary();
  }, [])

  const getCompanySummary = () => {
    WebService.getAPI({
      action: `/company-summary`
    })
      .then(async (res: any) => {
        setRubricData(res);
      })
      .catch((e) => {
      });
  };


  return (
    <React.Fragment>
      <Row className="g-2">
        <Col md={4}>
          <Card className="mb-1">
            <CardHeader className="align-items-center card-header social-icons">
              <h4 className="card-title card-title mb-0 me-2 float-start">
                All Rubric{" "}
                <a href="javascript:void(0);">
                  <i className="ri-download-2-line fs-18"></i>
                </a>
              </h4>
              <span className="float-end">
                <a
                  href="javascript:void(0);"
                  onClick={toggleAllRubric}
                >
                  <i className="ri-numbers-line fs-18"></i>
                </a>
              </span>
            </CardHeader>
            <CardBody style={{ height: !rubricData ? '200px' : '100vh' }} className={!rubricData ? 'card-loader' : ''}>
              {rubricData &&
                <SimpleBar
                  autoHide={false}
                  style={{ maxHeight: "100vh" }}
                  className="px-3"
                >
                  <div className="d-flex align-items-center py-2">
                    <div className="avatar-xs flex-shrink-0 me-3">
                      <img
                        src={avatar3}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="fs-14 mb-1">Smriti Misra</h5>
                        <p className="fs-12 text-muted mb-0">
                          17/06/2022
                          <span className="badge rounded-pill bg-info fw-normal float-end">
                            Evaluation
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="d-flex align-items-center py-2">
                    <div className="avatar-xs flex-shrink-0 me-3">
                      <img
                        src={avatar4}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="fs-14 mb-1">Ash King</h5>
                        <p className="fs-12 text-muted mb-0">
                          17/06/2022
                          <span className="badge rounded-pill bg-info fw-normal float-end">
                            Evaluation
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="d-flex align-items-center py-2">
                    <div className="avatar-xs flex-shrink-0 me-3">
                      <img
                        src={avatar5}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="fs-14 mb-1">Shobanaa Anand</h5>
                        <p className="fs-12 text-muted mb-0">
                          17/06/2022
                          <span className="badge rounded-pill bg-info fw-normal float-end">
                            R@Weight(25-3)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="d-flex align-items-center py-2 ">
                    <div className="avatar-xs flex-shrink-0 me-3">
                      <img
                        src={avatar6}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="fs-14 mb-1">Esther James</h5>
                        <p className="fs-12 text-muted mb-0">
                          17/06/2022
                          <span className="badge rounded-pill bg-info fw-normal float-end">
                            R@Weight(25-3)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="d-flex align-items-center py-2">
                    <div className="avatar-xs flex-shrink-0 me-3">
                      <img
                        src={avatar3}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="fs-14 mb-1">Esther James</h5>
                        <p className="fs-12 text-muted mb-0">
                          17/06/2022
                          <span className="badge rounded-pill bg-info fw-normal float-end">
                            R@Weight(25-3)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="d-flex align-items-center py-2">
                    <div className="avatar-xs flex-shrink-0 me-3">
                      <img
                        src={avatar4}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="fs-14 mb-1">Esther James</h5>
                        <p className="fs-12 text-muted mb-0">
                          17/06/2022
                          <span className="badge rounded-pill bg-info fw-normal float-end">
                            Evaluation
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="d-flex align-items-center py-2">
                    <div className="avatar-xs flex-shrink-0 me-3">
                      <img
                        src={avatar5}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="fs-14 mb-1">Esther James</h5>
                        <p className="fs-12 text-muted mb-0">
                          17/06/2022
                          <span className="badge rounded-pill bg-info fw-normal float-end">
                            Evaluation
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="d-flex align-items-center py-2">
                    <div className="avatar-xs flex-shrink-0 me-3">
                      <img
                        src={avatar6}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="fs-14 mb-1">Esther James</h5>
                        <p className="fs-12 text-muted mb-0">
                          17/06/2022
                          <span className="badge rounded-pill bg-info fw-normal float-end">
                            Evaluation
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="d-flex align-items-center py-2">
                    <div className="avatar-xs flex-shrink-0 me-3">
                      <img
                        src={avatar3}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="fs-14 mb-1">Esther James</h5>
                        <p className="fs-12 text-muted mb-0">
                          17/06/2022
                          <span className="badge rounded-pill bg-info fw-normal float-end">
                            Evaluation
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <div className="d-flex align-items-center py-2">
                    <div className="avatar-xs flex-shrink-0 me-3">
                      <img
                        src={avatar4}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <h5 className="fs-14 mb-1">Esther James</h5>
                        <p className="fs-12 text-muted mb-0">
                          17/06/2022
                          <span className="badge rounded-pill bg-info fw-normal float-end">
                            Evaluation
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </SimpleBar>
              }
            </CardBody>
          </Card>
        </Col>
        <Col md={8} className="social-icons">
          <Card className="mb-1">
            <CardHeader className="align-items-center">
              <Row>
                <Col md={6} className="m15">
                  <div className="input-group">
                    <Label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Select Review:
                    </Label>
                    <select
                      className="form-select"
                      id="inputGroupSelect01"
                    >
                      <option defaultValue="1">Note1</option>
                      <option defaultValue="2">Note2</option>
                    </select>
                  </div>
                </Col>
                <Col md={6} className="m15">
                  <div className="input-group">
                    <Label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Filter By:
                    </Label>
                    <select
                      className="form-select"
                      id="inputGroupSelect01"
                    >
                      <option defaultValue="1">By User</option>
                      <option defaultValue="2">By Review</option>
                    </select>
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <CardHeader className="align-items-center">
              <h4 className="card-title mb-0 me-2 float-start">
                Adam Sons
              </h4>
              <div className="badge rounded-pill bg-info fw-normal float-end text-end">
                Evaluation
              </div>
            </CardHeader>
            <CardBody style={{ height: !rubricData ? '200px' : '100vh' }} className={!rubricData ? 'card-loader' : ''}>
              {rubricData &&
                <>
                  <Row>
                    <Col xs={3} md={3} className="border-end text-center col-6">
                      <small className="text-muted">Prepared By:</small>
                      <h6 className="fs-13 mb-1">Smriti Misra</h6>
                    </Col>
                    <Col xs={3} md={3} className="border-end text-center col-6">
                      <small className="text-muted">Due Date</small>
                      <h6 className="fs-13 mb-1">27/01/2023</h6>
                    </Col>
                    <Col xs={4} md={4} className="border-end text-center col-6">
                      <small className="text-muted">Completed Date</small>
                      <h6 className="fs-13 mb-1">06/01/2023</h6>
                    </Col>
                    <Col
                      xs={2}
                      md={2}
                      className="border-end text-center social-icons col-6"
                    >
                      <h6 className="fs-24 mb-1">
                        <a href="javascript:void(0);">
                          <i className="ri-download-2-line"></i>
                        </a>
                      </h6>
                    </Col>
                  </Row>
                  <div className="table-responsive table-card mt-4">
                    <SimpleBar
                      autoHide={false}
                      style={{ maxHeight: "100vh" }}
                      className="px-3"
                    >
                      <table className="table align-middle table-nowrap table-striped-columns mb-0">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">CATEGORIES</th>
                            <th scope="col">SCORE</th>
                            <th scope="col">SCORE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Founders</td>
                            <td>1</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td>Interaction With Entrepreneur</td>
                            <td>1</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td>Revenue Model</td>
                            <td>1</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td>Market Size</td>
                            <td>1</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td>Competition</td>
                            <td>1</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td>Differentiation</td>
                            <td>1</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td>Recent Funding In This Industry</td>
                            <td>1</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td>Traction</td>
                            <td>1</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td>Amount Invested And Deployment</td>
                            <td>1</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td>
                              Fund Requirement, Proposed Utilisation
                            </td>
                            <td>1</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td>Leadership Team</td>
                            <td>1</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Total Score</td>
                            <td>11</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Final Comment</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </SimpleBar>
                  </div>
                </>
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* All Rubric */}
      <Offcanvas
        isOpen={isAllRubric}
        direction="end"
        toggle={toggleAllRubric}
        id="offcanvasAllRubric"
        className="border-bottom size-xl"
      >
        <OffcanvasHeader
          className="bg-light"
          toggle={toggleAllRubric}
          id="offcanvasRightLabel"
        >
          All Rubric
        </OffcanvasHeader>
        <OffcanvasBody className="px-0 overflow-hidden rubricprogressbar">
          <SimpleBar style={{ height: "100vh" }}>
            <div className="px-3">
              <h4 className="card-title b-3">Evaluation</h4>

              <Row>
                <Col md={3}>
                  <label>Name</label>
                </Col>
                <Col md={5}>
                  <label>Weighted Average</label>
                </Col>
                <Col md={4}>
                  <label>Score</label>
                </Col>
              </Row>
              <hr className="mt-0" />
              <Row>
                <Col md={3}>
                  <label>Anil Koli</label>
                </Col>
                <Col md={5}>
                  <div>
                    <div className="live-preview">
                      <Progress
                        color="danger"
                        value={10}
                        className="custom-progress"
                      >

                        NA
                      </Progress>
                      <span className="barvalue">10</span>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <div className="live-preview">
                      <Progress
                        color="danger"
                        value={49}
                        className="custom-progress"
                      >

                        49
                      </Progress>
                      <span className="barvalue">110</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <label>Bharat Garg</label>
                </Col>
                <Col md={5}>
                  <div className="live-preview">
                    <Progress
                      color="warning"
                      value={10}
                      className="custom-progress"
                    >

                      NA
                    </Progress>
                    <span className="barvalue">10</span>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="live-preview">
                    <Progress
                      color="warning"
                      value={50}
                      className="custom-progress"
                    >50
                    </Progress>
                    <span className="barvalue">110</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <label>Shobanaa Anand</label>
                </Col>
                <Col md={5}>
                  <div className="live-preview">
                    <Progress
                      color="primary"
                      value={10}
                      className="custom-progress"
                    >

                      NA
                    </Progress>
                    <span className="barvalue">10</span>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="live-preview">
                    <Progress
                      color="primary"
                      value={11}
                      className="custom-progress"
                    >

                      11
                    </Progress>
                    <span className="barvalue">110</span>
                  </div>
                </Col>
              </Row>
              <hr className="my-2" />
              <h4 className="card-title mt-3 mb-3">Evaluation 1</h4>
              <Row>
                <Col md={3}>
                  <label>Name</label>
                </Col>
                <Col md={5}>
                  <label>Weighted Average</label>
                </Col>
                <Col md={4}>
                  <label>Score</label>
                </Col>
              </Row>
              <hr className="mt-0" />
              <Row>
                <Col md={3}>
                  <label>Smriti Misra</label>
                </Col>
                <Col md={5}>
                  <div>
                    <div className="live-preview">
                      <Progress
                        color="info"
                        value={10}
                        className="custom-progress"
                      >

                        NA
                      </Progress>
                      <span className="barvalue">10</span>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <div className="live-preview">
                      <Progress
                        color="info"
                        value={10}
                        className="custom-progress"
                      >

                        10
                      </Progress>
                      <span className="barvalue">20</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="gery-bg">
                <Col md={3}>
                  <label>Average (Score/Total)</label>
                </Col>
                <Col md={5}>
                  <div>
                    0 / 10
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    6.91 / 20
                  </div>
                </Col>
              </Row>
              <hr className="my-2" />
              <h4 className="card-title mt-3 mb-3">Evaluation 2</h4>
              <Row>
                <Col md={3}>
                  <label>Name</label>
                </Col>
                <Col md={5}>
                  <label>Weighted Average</label>
                </Col>
                <Col md={4}>
                  <label>Score</label>
                </Col>
              </Row>
              <hr className="mt-0" />
              <Row>
                <Col md={3}>
                  <label>Ash King</label>
                </Col>
                <Col md={5}>
                  <div>
                    <div className="live-preview">
                      <Progress
                        color="success"
                        value={10}
                        className="custom-progress"
                      >

                        NA
                      </Progress>
                      <span className="barvalue">10</span>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <div className="live-preview">
                      <Progress
                        color="success"
                        value={6}
                        className="custom-progress"
                      >

                        6
                      </Progress>
                      <span className="barvalue">10</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="gery-bg">
                <Col md={3}>
                  <label>Average (Score/Total)</label>
                </Col>
                <Col md={5}>
                  <div>
                    0 / 10
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    6 / 20
                  </div>
                </Col>
              </Row>
              <hr className="my-2" />
              <h4 className="card-title mt-3 mb-3">Evaluation 6</h4>
              <Row>
                <Col md={3}>
                  <label>Name</label>
                </Col>
                <Col md={5}>
                  <label>Weighted Average</label>
                </Col>
                <Col md={4}>
                  <label>Score</label>
                </Col>
              </Row>
              <hr className="mt-0" />
              <Row>
                <Col md={3}>
                  <label>
                    Shobanaa Anand
                  </label>
                </Col>
                <Col md={5}>
                  <div>
                    <div className="live-preview">
                      <Progress
                        color="danger"
                        value={3.00}
                        className="custom-progress"
                      >

                        5
                      </Progress>
                      <span className="barvalue">5</span>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <div className="live-preview">
                      <Progress
                        color="danger"
                        value={3}
                        className="custom-progress"
                      >

                        3
                      </Progress>
                      <span className="barvalue">5</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="gery-bg">
                <Col md={3}>
                  <label>Average (Score/Total)</label>
                </Col>
                <Col md={5}>
                  <div>
                    3 / 5
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    3 / 5
                  </div>
                </Col>
              </Row>
              <hr className="my-2" />
              <h4 className="card-title mt-3 mb-3">SSS – Proposals - Main Technical Committee Evaluation</h4>
              <Row>
                <Col md={3}>
                  <label>Name</label>
                </Col>
                <Col md={5}>
                  <label>Weighted Average</label>
                </Col>
                <Col md={4}>
                  <label>Score</label>
                </Col>
              </Row>
              <hr className="mt-0" />
              <Row>
                <Col md={3}>
                  <label>Smriti Misra</label>
                </Col>
                <Col md={5}>
                  <div>
                    <div className="live-preview">
                      <Progress
                        color="warning"
                        value={10}
                        className="custom-progress"
                      >

                        NA
                      </Progress>
                      <span className="barvalue">100</span>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <div className="live-preview">
                      <Progress
                        color="warning"
                        value={70}
                        className="custom-progress"
                      >

                        70
                      </Progress>
                      <span className="barvalue">70</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="gery-bg">
                <Col md={3}>
                  <label>Average (Score/Total)</label>
                </Col>
                <Col md={5}>
                  <div>
                    0 / 100
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    70 / 100
                  </div>
                </Col>
              </Row>
            </div>
          </SimpleBar>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Submit
            </button>
            <Button toggle={toggleAllRubric} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </Offcanvas>
    </React.Fragment>
  );
};

export default EvaluationRubric;
