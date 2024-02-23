import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Alert,
  Input,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

//Images
import folder from "../../assets/images/folder.png";
import zip from "../../assets/images/zip.png";
import doc from "../../assets/images/doc.png";
import ppt from "../../assets/images/ppt.png";
import excel from "../../assets/images/xls.png";
import pdf from "../../assets/images/pdf.png";
import mp4 from "../../assets/images/mp4.png";
import gif from "../../assets/images/gif.png";
import png from "../../assets/images/png.png";
import jpg from "../../assets/images/jpg.png";
import link from "../../assets/images/link.png";

const Documents = () => {

  const [col3, setcol3] = useState(true);
  const t_col3 = () => {
    setcol3(!col3);
  };

  const [activeTab, setActiveTab] = useState("1");
  const [activityTab, setActivityTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const toggleActivityTab = (tab) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  return (
    <React.Fragment>

    

      <Row>
        <Col md={12}>
          <Card className="mb-2">
            <CardBody>
              <h4 className="card-title card-title mb-3">
                Investment Documents
              </h4>
              
              <Row className="g-0 align-items-center">
              <Col sm={4}>
                  <div className="search-box">
                      <Input
                          type="text"
                          className="form-control search"
                          placeholder="Search"
                      />
                      <i className="ri-search-line search-icon"></i>
                  </div>
              </Col>
              <div className="col-sm-auto ms-auto">
                  <div className="hstack gap-2 flex-wrap">
                      <button type="button" className="btn btn-soft-info">
                          <i className="ri-filter-3-line align-bottom me-1"></i>
                          Filters
                      </button>
                  </div>
              </div>
          </Row>
            </CardBody>
          </Card>
          <CardBody>
            <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-1">
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img
                        src={folder}
                        alt=""
                        className=""
                        style={{width:"45px", height:"45px",}}
                      />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={zip}
                    alt=""
                    className=""
                    style={{width:"45px", height:"45px",}}
                  />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={doc}
                    alt=""
                    className=""
                    style={{width:"45px", height:"45px",}}
                  />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={ppt}
                    alt=""
                    className=""
                    style={{width:"45px", height:"45px",}}
                  />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={excel}
                    alt=""
                    className=""
                    style={{width:"45px", height:"45px",}}
                   />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-2">
            <CardBody>
              <h4 className="card-title card-title mb-0">
                DD Reports
              </h4>
            </CardBody>
          </Card>
          <CardBody className="px-0">
            <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-1">
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={pdf}
                    alt=""
                    className=""
                    style={{width:"50px", height:"50px",}}
                   />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={mp4}
                    alt=""
                    className=""
                    style={{width:"50px", height:"50px",}}
                   />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={gif}
                    alt=""
                    className=""
                    style={{width:"50px", height:"50px",}}
                   />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={png}
                    alt=""
                    className=""
                    style={{width:"50px", height:"50px",}}
                   />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <a href="javascript:void(0);" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </a>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={jpg}
                    alt=""
                    className=""
                    style={{width:"50px", height:"50px",}}
                   />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Col>
      </Row>
      <Row className="g-2">
        <Col md={12}>
          <Card className="mb-2">
            <CardBody>
              <h4 className="card-title card-title mb-0">
                Funds Diligence
              </h4>
            </CardBody>
          </Card>
          <CardBody className="px-0">
            <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-1">
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={link}
                    alt=""
                    className=""
                    style={{width:"45px", height:"45px",}}
                   />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={png}
                    alt=""
                    className=""
                    style={{width:"45px", height:"45px",}}
                  />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={mp4}
                    alt=""
                    className=""
                    style={{width:"45px", height:"45px",}}
                  />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={folder}
                    alt=""
                    className=""
                    style={{width:"45px", height:"45px",}}
                  />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="card-body mb-2">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                    <img
                    src={zip}
                    alt=""
                    className=""
                    style={{width:"45px", height:"45px",}}
                  />
                    </div>
                    <div className="flex-grow-1 ms-2 social-icons">
                      <h5 className="card-title mb-1">
                        Smriti Misra
                        <Link to="#" className="text-muted">
                          <i className="ri-download-2-line fs-20 float-end"></i>
                        </Link>
                      </h5>
                      <p className="text-muted mb-0">Digital</p>
                      <p className="card-text text-muted">
                        18/08/2023
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Col>
      </Row>
      <Row className="g-2">
        <Col md={12}>
          <Card className="mb-1">
            <CardHeader
              className="align-items-center"
              style={{ borderBottom: "0" }}
            >
              <h4 className="card-title card-title mb-0">
                Archive Video
              </h4>
            </CardHeader>
            <CardHeader className="align-items-center d-flex">
              <div className="flex-shrink-0 ml-auto">
                <Nav
                  className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      to="#initial-tab"
                      className={classnames({
                        active: activityTab === "1",
                      })}
                      onClick={() => {
                        toggleActivityTab("1");
                      }}
                    >
                      Initial Screening
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#ddreview-tab"
                      className={classnames({
                        active: activityTab === "2",
                      })}
                      onClick={() => {
                        toggleActivityTab("2");
                      }}
                    >
                      DD Review
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink
                      to="#pitching-tab"
                      className={classnames({
                        active: activityTab === "3",
                      })}
                      onClick={() => {
                        toggleActivityTab("3");
                      }}
                    >
                      Pitching
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink
                      to="#SME-tab"
                      className={classnames({
                        active: activityTab === "4",
                      })}
                      onClick={() => {
                        toggleActivityTab("4");
                      }}
                    >
                      SME Advisor
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink
                      to="#SME-tab"
                      className={classnames({
                        active: activityTab === "5",
                      })}
                      onClick={() => {
                        toggleActivityTab("5");
                      }}
                    >
                      Reporting
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink
                      to="#SME-tab"
                      className={classnames({
                        active: activityTab === "6",
                      })}
                      onClick={() => {
                        toggleActivityTab("6");
                      }}
                    >
                      Screening
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink
                      to="#SME-tab"
                      className={classnames({
                        active: activityTab === "7",
                      })}
                      onClick={() => {
                        toggleActivityTab("7");
                      }}
                    >
                      Others
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </CardHeader>
            <CardBody>
              <TabContent
                activeTab={activityTab}
                className="text-muted"
              >
                <TabPane tabId="1">
                  <div className="profile-timeline">
                    <div
                      className="accordion accordion-flush"
                      id="1"
                    >
                      <Row>
                        <Col>dad</Col>
                      </Row>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="profile-timeline">
                    <div
                      className="accordion accordion-flush"
                      id="2"
                    >
                      <Alert color="info" className="text-center">
                        No Document Found.
                      </Alert>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div className="profile-timeline">
                    <div
                      className="accordion accordion-flush"
                      id="3"
                    >
                      <Alert color="info" className="text-center">
                        No Document Found.
                      </Alert>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="4">
                  <div className="profile-timeline">
                    <div
                      className="accordion accordion-flush"
                      id="4"
                    >
                      <Alert color="info" className="text-center">
                        No Document Found.
                      </Alert>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="5">
                  <div className="profile-timeline">
                    <div
                      className="accordion accordion-flush"
                      id="5"
                    >
                      coming soon...
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="6">
                  <div className="profile-timeline">
                    <div
                      className="accordion accordion-flush"
                      id="6"
                    >
                      <Alert color="info" className="text-center">
                        No Document Found.
                      </Alert>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="7">
                  <div className="profile-timeline">
                    <div
                      className="accordion accordion-flush"
                      id="7"
                    >
                      <Alert color="info" className="text-center">
                        No Document Found.
                      </Alert>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Documents;
