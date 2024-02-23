import React, { useState } from "react";

//Import Breadcrumb
import BreadCrumb from "../../Components/Common/BreadCrumb";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

import {
  Container,
  Form,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Label,
  Input,
  Progress,
} from "reactstrap";

import classnames from "classnames";
import Select from "react-select";

const InvestorSignup = () => {
  const [activeTab, setactiveTab] = useState(1);
  const [passedSteps, setPassedSteps] = useState([1]);

  const SingleOptions = [
    { value: "Sourcing Deals", label: "Sourcing Deals" },
    { value: "Screening Deals", label: "Screening Deals" },
    { value: "Due Diligence", label: "Due Diligence" },
    {
      value: "Leading Deals (Lead Investor)",
      label: "Leading Deals (Lead Investor)",
    },
    { value: "Mentoring", label: "Mentoring" },
  ];

  const [selectedMulti, setselectedMulti] = useState(null);

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
  }

  document.title = "Investor Signup | SCIP";

  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <div className="page-content">
            <Container fluid>
              {/*}   <BreadCrumb title="Checkout" pageTitle="Ecommerce" />*/}

              <Row>
                <Col xl="12">
                  <Card>
                    <CardBody className="checkout-tab">
                      <Form action="#">
                        <div className="step-arrow-nav mt-n3 mx-n3 mb-3">
                          <Nav
                            className="nav-pills nav-justified custom-nav"
                            role="tablist"
                          >
                            <NavItem role="presentation">
                              <NavLink
                                href="#"
                                className={classnames(
                                  {
                                    active: activeTab === 1,
                                    done: activeTab <= 4 && activeTab >= 0,
                                  },
                                  "p-3 fs-15"
                                )}
                                onClick={() => {
                                  toggleTab(1);
                                }}
                              >
                                <i className="ri-user-2-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                                Account Details
                              </NavLink>
                            </NavItem>
                            <NavItem role="presentation">
                              <NavLink
                                href="#"
                                className={classnames(
                                  {
                                    active: activeTab === 2,
                                    done: activeTab <= 4 && activeTab > 1,
                                  },
                                  "p-3 fs-15"
                                )}
                                onClick={() => {
                                  toggleTab(2);
                                }}
                              >
                                <i className="ri-truck-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                                Work Details
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </div>

                        <TabContent activeTab={activeTab}>
                          <TabPane
                            tabId={1}
                            id="pills-bill-info"
                            className="profile-tabs"
                          >
                            <h5 className="text-center my-3 mt-3">
                              Welcome to SCIP.
                            </h5>
                            <Form>
                              <Row>
                                <Col lg={6} md={6} className="mb-3">
                                  <Label
                                    htmlFor="labelInput"
                                    className="form-label mb-0"
                                  >
                                    Your first name?
                                    <span className="error">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placholder=""
                                  />
                                </Col>
                                <Col lg={6} md={6} className="mb-3">
                                  <Label
                                    htmlFor="labelInput"
                                    className="form-label mb-0"
                                  >
                                    And your surname?
                                    <span className="error">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placholder=""
                                  />
                                </Col>
                                <Col lg={12} md={12} className="mb-3">
                                  <Label
                                    htmlFor="labelInput"
                                    className="form-label mb-0"
                                  >
                                    Thanks, share an email address that we can
                                    use to reach you.
                                    <span className="error">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placholder=""
                                  />
                                </Col>
                                <Col lg={12} md={12} className="mb-3">
                                  <Label
                                    htmlFor="labelInput"
                                    className="form-label mb-0"
                                  >
                                    Set your password. You need to set a
                                    password to use your investment dashboard.
                                    Set your password.
                                    <span className="error">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placholder=""
                                  />
                                </Col>
                                <Col lg={6} md={6} className="mb-3">
                                  <Label
                                    htmlFor="labelInput"
                                    className="form-label mb-0"
                                  >
                                    Please confirm your password.
                                    <span className="error">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placholder=""
                                  />
                                </Col>
                                <Col lg={6} md={6} className="mb-3">
                                  <Label
                                    htmlFor="labelInput"
                                    className="form-label mb-0"
                                  >
                                    Please share your primary mobile number. We
                                    use this carefully.
                                    <span className="error">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placholder=""
                                  />
                                </Col>
                              </Row>
                            </Form>
                            <div className="d-flex align-items-start gap-3 mt-3">
                              <button
                                type="button"
                                className="btn btn-success btn-label right ms-auto nexttab"
                                onClick={() => {
                                  toggleTab(activeTab + 1);
                                }}
                              >
                                <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                Next
                              </button>
                            </div>
                          </TabPane>

                          <TabPane tabId={2}>
                            <Row className="profile-tabs">
                              <Col lg={12} className="mb-3">
                                <p>
                                  <small>
                                    After you complete each section, you will
                                    see three buttons - Save, Preview, and Next.
                                    Using the button Preview, you can see how
                                    investors will see your application. Save
                                    your application before Preview. You can
                                    edit the application after you preview it.
                                  </small>
                                </p>
                                <p>
                                  <small>
                                    You can edit the application at the end of
                                    each section, and you can edit the entire
                                    application again after you complete the
                                    fourth section before submitting the entire
                                    application.
                                  </small>
                                </p>
                                <p>
                                  <small>
                                    Even after submission, you will be able to
                                    edit your application information after the
                                    Network gives you access to your dashboard.
                                  </small>
                                </p>
                              </Col>
                              <Form>
                                <Row>
                                  <Col lg={6} md={6} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Company/Firm/Organization/Trust/Society
                                      Name
                                      <span className="error">*</span>
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id=""
                                      placholder=""
                                    />
                                  </Col>
                                  <Col lg={6} md={6} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Your Designation?
                                      <span className="error">*</span>
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id=""
                                      placholder=""
                                    />
                                  </Col>
                                  <Col lg={6} md={6} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Business Activities Undertaken
                                      <span className="error">*</span>
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id=""
                                      placholder=""
                                    />
                                  </Col>
                                  <Col lg={6} md={6} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Please share your office address
                                      <span className="error">*</span>
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id=""
                                      placholder=""
                                    />
                                  </Col>
                                  <Col lg={6} md={6} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      PAN Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id=""
                                      placholder=""
                                    />
                                  </Col>
                                  <Col lg={6} md={6} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Passport Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id=""
                                      placholder=""
                                    />
                                  </Col>
                                  <Col lg={12} md={12} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Linkedin Link
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id=""
                                      placholder=""
                                    />
                                  </Col>
                                  <Col lg={12} md={12} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Please share with us your profile, how you
                                      would like to be known in the angel and
                                      startup community?
                                    </Label>
                                    <textarea
                                      className="form-control"
                                      id="exampleFormControlTextarea5"
                                      rows="3"
                                    ></textarea>
                                    <div className="text-end">
                                      <small>350/350 characters</small>
                                    </div>
                                  </Col>
                                  <Col lg={12} md={12} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Are you a member at any other angel
                                      investment network or venture catalyst?
                                      (Tick as appropriate)
                                      <span className="error">*</span>
                                    </Label>
                                    <Row>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck1"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck1"
                                          >
                                            ah! Ventures
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck2"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck2"
                                          >
                                            AngelList India
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck3"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck3"
                                          >
                                            BITS Spark
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck4"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck4"
                                          >
                                            Calcutta Angels Network
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck5"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck5"
                                          >
                                            Chandigarh Angels Network
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck6"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck6"
                                          >
                                            CIO Angel Network
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck7"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck7"
                                          >
                                            Indian Angel Network
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck8"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck8"
                                          >
                                            Indian Angel Network
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Investor angle
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Jito Angel Network
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Lead Angels Network
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            LetsVenture
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Mumbai Angels Network
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Stanford Angels
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            The Bengaluru Angels
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            The Chennai Angels
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Venture Catalysts
                                          </Label>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col lg={12} md={12} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Industry/Domain Expertise (select as
                                      appropriate)
                                      <span className="error">*</span>
                                    </Label>
                                    <Row>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck1"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck1"
                                          >
                                            Accommodation and Food Services
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck2"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck2"
                                          >
                                            Administrative and support service
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck3"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck3"
                                          >
                                            Agriculture, Forestry, Fishing &
                                            Hunting
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck4"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck4"
                                          >
                                            Arts, Entertainment and Recreation
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck5"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck5"
                                          >
                                            Biotechnology
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck6"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck6"
                                          >
                                            Construction
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck7"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck7"
                                          >
                                            Education
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck8"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck8"
                                          >
                                            Electricity, gas, steam and air
                                            conditioning supply
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Finance and Insurance
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Health Care and Social Assistance
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Information and Communication
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Manufacturing
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Other Services
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Professional, Scientific and
                                            Technical Services
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Public administration and defence;
                                            compulsory social security
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Real Estate
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Transportation and Storage
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Water supply, sewerage, waste
                                            management, remediation activities
                                          </Label>
                                        </div>
                                      </Col>
                                      <Col md={3} lg={3}>
                                        <div className="form-check">
                                          <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck9"
                                          />
                                          <Label
                                            className="form-check-label"
                                            htmlFor="formCheck9"
                                          >
                                            Wholesale and Retail Trade, repair
                                            of motor vehicles and motorcycles
                                          </Label>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                                <Col lg={12} md={12} className="mb-3">
                                  <Label
                                    htmlFor="choices-multiple-default"
                                    className="form-label mb-0"
                                  >
                                    How are you interested in getting involved
                                    with SCIP? (Tick as appropriate)
                                    <span className="error">*</span>
                                  </Label>
                                  <Select
                                    value={selectedMulti}
                                    isMulti={true}
                                    onChange={() => {
                                      handleMulti();
                                    }}
                                    options={SingleOptions}
                                  />
                                </Col>
                                <Col lg={12} md={12} className="mb-3">
                                  <Label
                                    htmlFor="labelInput"
                                    className="form-label mb-0"
                                  >
                                    Your domains of professional expertise and
                                    interest. We request members to lead
                                    analysis of investments, mentor
                                    Entrepreneurs and serve as Board Observers.
                                    <span className="error">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placholder=""
                                  />
                                </Col>
                                <Col lg={12} md={12} className="mb-3">
                                  <Label
                                    htmlFor="labelInput"
                                    className="form-label mb-0"
                                  >
                                    And finally, please tell us why you want to
                                    join our network?
                                  </Label>
                                  <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea5"
                                    rows="3"
                                  ></textarea>
                                  <div className="text-end">
                                    <small>350/350 characters</small>
                                  </div>
                                </Col>
                                <Row>
                                  <Col lg={6} md={6} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      How much capital do you expect to invest
                                      per year?
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id=""
                                      placholder=""
                                    />
                                  </Col>
                                  <Col lg={6} md={6} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Are there any legal cases pending against
                                      you in the official/personal capacity?
                                    </Label>
                                    <br />
                                    <Input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDisabled"
                                      id="flexRadioDisabled"
                                    />
                                    &nbsp;
                                    <Label
                                      className="form-check-label"
                                      htmlFor=""
                                    >
                                      Yes
                                    </Label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDisabled"
                                      id=""
                                    />
                                    &nbsp;
                                    <Label
                                      className="form-check-label"
                                      htmlFor=""
                                    >
                                      No
                                    </Label>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg={6} md={6} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Enclosure 1 - Self Attested Profile
                                    </Label>
                                    <br />
                                    <div class="btn uploadBtn btn-danger waves-effect waves-light me-3">
                                      <i className="ri-upload-2-line align-bottom me-1"></i>{" "}
                                      Upload File
                                      <input
                                        type="file"
                                        name="pitch_file"
                                        required
                                      />
                                    </div>
                                    <div className="live-preview mt-2">
                                      <Progress color="primary" value={25}>
                                        25%
                                      </Progress>
                                    </div>
                                  </Col>
                                  <Col lg={6} md={6} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Enclosure 2 - Picture
                                    </Label>
                                    <br />
                                    <div class="btn uploadBtn btn-danger waves-effect waves-light me-3">
                                      <i className="ri-upload-2-line align-bottom me-1"></i>{" "}
                                      Upload File
                                      <input
                                        type="file"
                                        name="pitch_file"
                                        required
                                      />
                                    </div>
                                    <div className="live-preview mt-2">
                                      <Progress color="primary" value={25}>
                                        25%
                                      </Progress>
                                    </div>
                                  </Col>
                                  <Col lg={6} md={6} className="mb-3">
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label mb-0"
                                    >
                                      Select Subscription{" "}
                                      <span className="error">*</span>
                                    </Label>
                                    <br />
                                    <select
                                      className="form-select mb-3"
                                      aria-label="Default select example"
                                    >
                                      <option>Select Option</option>
                                      <option value="1">
                                        {" "}
                                        1 Year Membership (Rs 59,000.03){" "}
                                      </option>
                                      <option value="4">
                                        {" "}
                                        10 days Membership (Rs 1.00){" "}
                                      </option>
                                      <option value="2">
                                        {" "}
                                        2 Year Membership (Rs 95,000.55){" "}
                                      </option>
                                      <option value="3">
                                        {" "}
                                        3 Year Membership (Rs 1,18,000.91){" "}
                                      </option>
                                    </select>
                                  </Col>
                                </Row>
                              </Form>
                            </Row>
                            <div md={12} className="text-center mt-4">
                              <button
                                type="button"
                                className="btn btn-light btn-label previestab"
                                onClick={() => {
                                  toggleTab(activeTab - 1);
                                }}
                              >
                                <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                                Back
                              </button>
                              <button
                                type="button"
                                class="ms-3 me-3 btn btn-info waves-effect waves-light"
                              >
                                Save As Draft
                              </button>
                              <button
                                type="button"
                                className="btn btn-success btn-label right ms-auto nexttab"
                                onClick={() => {
                                  toggleTab(activeTab + 1);
                                }}
                              >
                                <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                Submit
                              </button>
                            </div>
                          </TabPane>
                        </TabContent>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default InvestorSignup;
