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
  Collapse,
  Label,
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
import WebService from "../../utility/WebService";

const EvaluationReview = () => {
  const [reviewData, setReviewData] = useState(false);

  useEffect(() => {
    getCompanySummary();
  }, [])

  const getCompanySummary = () => {
    WebService.getAPI({
      action: `/company-summary`
    })
      .then(async (res: any) => {
        setReviewData(res);
      })
      .catch((e) => {
      });
  };

  SwiperCore.use([Autoplay]);
  return (
    <React.Fragment>
      <Row className="g-2">
        <Col md={4}>
          <Card className="mb-1">
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 me-2">
                All Review
              </h4>
            </CardHeader>
            <CardBody style={{ height: !reviewData ? '200px' : '100vh' }} className={!reviewData ? 'card-loader' : 'px-0'}>
              {reviewData &&
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
                            Note
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
                            Note
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
                            Note
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
                            Note
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
                            Note
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
                            Note
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
                            Note
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
                            Note
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
                            Note
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
                            Note
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
                Note
              </div>
            </CardHeader>
            <CardBody style={{ height: !reviewData ? '200px' : '100vh' }} className={!reviewData ? 'card-loader' : 'pl-2'}>
              {reviewData &&
                <>
                  <Row>
                    <Col xs={4} md={4} className="border-end text-center">
                      <small className="text-muted">Prepared By:</small>
                      <h6 className="fs-13 mb-1">Smriti Misra</h6>
                    </Col>
                    <Col xs={4} md={4} className="border-end text-center">
                      <small className="text-muted">Due Date</small>
                      <h6 className="fs-13 mb-1">27/01/2023</h6>
                    </Col>
                    <Col xs={4} md={4} className="border-end text-center">
                      <small className="text-muted">Completed Date</small>
                      <h6 className="fs-13 mb-1">06/01/2023</h6>
                    </Col>
                  </Row><hr /><Row>
                    <Col lg={12}>
                      <h6>Nature Of Business</h6>
                      <p className="text-muted">
                        At Website Name, accessible at Website.com
                      </p>
                      <hr />
                      <h6>Revenue Model</h6>
                      <p className="text-muted">
                        Website Name and how we use it.
                      </p>
                      <hr />
                      <h6>Traction</h6>
                      <p className="text-muted">
                        This Privacy Policy document contains types of
                        information.
                      </p>
                      <hr />
                      <h6>Marks(1-100) </h6>
                      <p className="text-muted">
                        Website Name and how we use it.
                      </p>
                      <hr />
                      <h6>Rating</h6>
                      <p className="text-muted">
                        At Website Name, accessible at Website.com.
                      </p>
                      <hr />
                    </Col>
                  </Row>
                </>
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default EvaluationReview;
