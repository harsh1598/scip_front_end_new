import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  TabContent,
  Accordion,
  AccordionItem,
  Collapse,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Input,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Flatpickr from "react-flatpickr";
import Select from "react-select";

import CompanyBasicInformation from "./Modals/CompanyBasicInformation";
import EditInvestment from "./Modals/EditInvestment";
import EditCompanyDetails from "./Modals/EditCompanyDetails";
import EditCompanySummary from "./Modals/EditCompanySummary";
import CommanModal from "./Modals/CommanModal";
import UploadDocuments from "./Modals/UploadDocuments";
import UploadDocumentsAbout from "./Modals/UploadDocumentsAbout";
import TeaserModal from "./Modals/TeaserModal";
import AddTeamMemberModal from "./Modals/AddTeamMemberModal";
import AddBoardDirector from "./Modals/AddBoardDirector";
import AddAdvisor from "./Modals/AddAdvisor";
import AddInvestor from "./Modals/AddInvestor";

//Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import AddTeamMember from "../../MoreMenus/Team/AddTeamMember";

const AboutUs = () => {
  document.title = "SCIP | About Us";

  // Default Accordion
  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");

  // Accordions with Icons
  const [iconCol1, seticonCol1] = useState(true);
  const [iconCol2, seticonCol2] = useState(false);
  const [iconCol3, seticonCol3] = useState(false);

  // Accordions with Plus Icon
  const [plusiconCol1, setplusiconCol1] = useState(true);
  const [plusiconCol2, setplusiconCol2] = useState(false);
  const [plusiconCol3, setplusiconCol3] = useState(false);

  const t_plusiconCol1 = () => {
    setplusiconCol1(!plusiconCol1);
    setplusiconCol2(false);
    setplusiconCol3(false);
  };

  const t_plusiconCol2 = () => {
    setplusiconCol2(!plusiconCol2);
    setplusiconCol1(false);
    setplusiconCol3(false);
  };

  const t_plusiconCol3 = () => {
    setplusiconCol3(!plusiconCol3);
    setplusiconCol1(false);
    setplusiconCol2(false);
  };

  const toggleModel = (name) => {
    setModelName(name);
  };

  const [isTeamMember, setIsTeamMember] = useState(false);
  const toggleTeamMember = () => {
    setIsTeamMember(!isTeamMember);
  };

  const [activeTab, setActiveTab] = useState("1");
  const [activityTab, setActivityTab] = useState("1");

  const { screenType } = useSelector((state) => ({
    screenType: state.Layout.screenType,
  }));

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

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  const SingleOptions = [
    { value: "One", label: "One" },
    { value: "Two", label: "Two" },
    { value: "Three", label: "Three" },
    { value: "Four", label: "Four" },
  ];

  const [selectedMulti, setselectedMulti] = useState(null);

  return (
    <React.Fragment>
      <Row className="g-2">
        <Col lg={9}>
          <Card className="mb-2">
            <CardBody>
              <Accordion
                className="custom-accordionwithicon-plus"
                id="accordionWithplusicon"
              >
                <AccordionItem>
                  <h2
                    className="accordion-header"
                    id="accordionwithouticonExample1"
                  >
                    <button
                      className={classnames("accordion-button fs-18", {
                        collapsed: !plusiconCol1,
                      })}
                      type="button"
                      onClick={t_plusiconCol1}
                      style={{ cursor: "pointer" }}
                    >
                      About Us
                        </button>
                  </h2>

                  <Collapse
                    isOpen={plusiconCol1}
                    className="accordion-collapse"
                    id="accor_plusExamplecollapse1"
                  >
                    <div className="accordion-body">
                      <div
                        class="card-header align-items-center px-0 py-0 mb-3"
                        style={{ borderBottom: "0" }}
                      >
                      <Row>
                      <Col lg={6} sm={6}>
                      <h4 class="card-title mb-2 fs-15">
                          Company Summary
                        </h4>
                      </Col>
                      <Col lg={6} sm={6} className="text-end left-style">
                      <Link to="#">
                            https://www.mentoria.com/about-us
                              </Link>
                          <i
                            className="ri-pencil-line align-bottom ms-2 fs-16 pointer"
                            id="EditCompanySummary"
                            onClick={(e) =>
                              toggleModel("EditCompanySummary")
                            }
                          ></i>
                      </Col>
                      </Row>
                      </div>
                      <p className="text-muted">
                        We at Mentoria are a unique and holistic career
                            discovery platform, enabling students to discover
                            themselves and the careers they will truly enjoy and
                            excel at and.. Read More
                          </p>
                      
                      <Card className="mb-2">
                        <CardBody>
                          <CardHeader className="align-items-center mobile-tabs pt-2">
                            <div className="flex-shrink-0 ml-auto">
                            <Nav
                            tabs
                            className="justify-content-start nav-tabs-custom rounded card-header-tabs pt-2"
                            role="tablist"
                          >
                                <NavItem>
                                  <NavLink
                                    to="#team-tab"
                                    className={classnames({
                                      active: activityTab === "1",
                                    })}
                                    onClick={() => {
                                      toggleActivityTab("1");
                                    }}
                                  >
                                    Team <i className="ri-add-circle-fill align-bottom" id="AddTeamMemberModal"
                                    onClick={(e) => toggleModel("AddTeamMemberModal")}></i>
                                      </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    to="#director-tab"
                                    className={classnames({
                                      active: activityTab === "2",
                                    })}
                                    onClick={() => {
                                      toggleActivityTab("2");
                                    }}
                                  >
                                    Board of Director <i className="ri-add-circle-fill align-bottom" id="AddTeamMemberModal"
                                    onClick={(e) => toggleModel("AddBoardDirector")}></i>
                                      </NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                  <NavLink
                                    to="#advisor-tab"
                                    className={classnames({
                                      active: activityTab === "3",
                                    })}
                                    onClick={() => {
                                      toggleActivityTab("3");
                                    }}
                                  >
                                    Advisor <i className="ri-add-circle-fill align-bottom" id="AddAdvisor"
                                    onClick={(e) => toggleModel("AddAdvisor")}></i>
                                      </NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                  <NavLink
                                    to="#investor-tab"
                                    className={classnames({
                                      active: activityTab === "4",
                                    })}
                                    onClick={() => {
                                      toggleActivityTab("4");
                                    }}
                                  >
                                    Other Investor <i className="ri-add-circle-fill align-bottom" id="AddInvestor"
                                    onClick={(e) => toggleModel("AddInvestor")}></i>
                                      </NavLink>
                                </NavItem>
                              </Nav>
                            </div>
                          </CardHeader>
                          <Container fluid className="width98 mt-3">
                            <TabContent
                              activeTab={activityTab}
                              className="text-muted"
                            >
                              <TabPane tabId="1">
                                <div className="profile-timeline">
                                  <div
                                    className="accordion accordion-flush"
                                    id="teamExample"
                                  >
                                    <div className="d-flex justify-content-end gap-2 mb-2 navigation-pos">
                                      <div className="slider-button-prev">
                                        <div className="avatar-title fs-18 rounded px-1">
                                          <i className="ri-arrow-left-s-line"></i>
                                        </div>
                                      </div>
                                      <div className="slider-button-next">
                                        <div className="avatar-title fs-18 rounded px-1">
                                          <i className="ri-arrow-right-s-line"></i>
                                        </div>
                                      </div>
                                    </div>
                                    <Swiper
                                      className="project-swiper"
                                      slidesPerView={5}
                                      spaceBetween={20}
                                      autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                      }}
                                      pagination={{ clickable: true }}
                                    >
                                      <div className="swiper-wrapper">
                                        <SwiperSlide>
                                          <Card className="profile-project-card shadow-none profile-project-success mb-0">
                                            <CardBody className="pt-2 px-2 pb-0">
                                              <div className="d-flex">
                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                  <img
                                                    src={avatar1}
                                                    alt=""
                                                    className="img-fluid rounded-circle avatar-xs float-start me-2 social-icons"
                                                  />
                                                  <h5 className="fs-14 text-truncate mb-0">
                                                    <span>Anand Kumar</span>
                                                    <a
                                                      href="javascript:void(0);"
                                                      onClick={
                                                        toggleTeamMember
                                                      }
                                                    >
                                                      <i class="ri-pencil-line fs-16 float-end"></i>
                                                    </a>
                                                  </h5>
                                                  <p className="text-muted text-truncate mb-0">
                                                    CEO <br />
                                                    <a
                                                      href="javascript:void(0);"
                                                      class="text-brand fs-4"
                                                    >
                                                      <i class="ri-linkedin-box-fill linkedin-font"></i>
                                                    </a>
                                                  </p>
                                                </div>
                                              </div>
                                            </CardBody>
                                          </Card>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                          <Card className="profile-project-card shadow-none profile-project-danger mb-0">
                                            <CardBody className="pt-2 px-2 pb-0">
                                              <div className="d-flex">
                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                  <img
                                                    src={avatar1}
                                                    alt=""
                                                    className="img-fluid rounded-circle avatar-xs float-start me-2 social-icons"
                                                  />
                                                  <h5 className="fs-14 text-truncate mb-0">
                                                    <span>
                                                      Smriti Sharam
                                                        </span>
                                                    <a
                                                      href="javascript:void(0);"
                                                      onClick={
                                                        toggleTeamMember
                                                      }
                                                    >
                                                      <i class="ri-pencil-line fs-16 float-end"></i>
                                                    </a>
                                                  </h5>
                                                  <p className="text-muted text-truncate mb-0">
                                                    Project Manager <br />
                                                    <a
                                                      href="javascript:void(0);"
                                                      class="text-brand fs-4"
                                                    >
                                                      <i class="ri-linkedin-box-fill linkedin-font"></i>
                                                    </a>
                                                  </p>
                                                </div>
                                              </div>
                                            </CardBody>
                                          </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                          <Card className="profile-project-card shadow-none profile-project-info mb-0">
                                            <CardBody className="pt-2 px-2 pb-0">
                                              <div className="d-flex">
                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                  <img
                                                    src={avatar1}
                                                    alt=""
                                                    className="img-fluid rounded-circle avatar-xs float-start me-2 social-icons"
                                                  />
                                                  <h5 className="fs-14 text-truncate mb-0">
                                                    <span>
                                                      Pranav Pandey
                                                        </span>
                                                    <a
                                                      href="javascript:void(0);"
                                                      onClick={
                                                        toggleTeamMember
                                                      }
                                                    >
                                                      <i class="ri-pencil-line fs-16 float-end"></i>
                                                    </a>
                                                  </h5>
                                                  <p className="text-muted text-truncate mb-0">
                                                    CTO <br />
                                                    <a
                                                      href="javascript:void(0);"
                                                      class="text-brand fs-4"
                                                    >
                                                      <i class="ri-linkedin-box-fill linkedin-font"></i>
                                                    </a>
                                                  </p>
                                                </div>
                                              </div>
                                            </CardBody>
                                          </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                          <Card className="profile-project-card shadow-none profile-project-danger mb-0">
                                            <CardBody className="pt-2 px-2 pb-0">
                                              <div className="d-flex">
                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                  <img
                                                    src={avatar1}
                                                    alt=""
                                                    className="img-fluid rounded-circle avatar-xs float-start me-2 social-icons"
                                                  />
                                                  <h5 className="fs-14 text-truncate mb-0">
                                                    <span>Gopal</span>
                                                    <a
                                                      href="javascript:void(0);"
                                                      onClick={
                                                        toggleTeamMember
                                                      }
                                                    >
                                                      <i class="ri-pencil-line fs-16 float-end"></i>
                                                    </a>
                                                  </h5>
                                                  <p className="text-muted text-truncate mb-0">
                                                    TYO <br />
                                                    <a
                                                      href="javascript:void(0);"
                                                      class="text-brand fs-4"
                                                    >
                                                      <i class="ri-linkedin-box-fill linkedin-font"></i>
                                                    </a>
                                                  </p>
                                                </div>
                                              </div>
                                            </CardBody>
                                          </Card>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                          <Card className="profile-project-card shadow-none profile-project-warning mb-0">
                                            <CardBody className="pt-2 px-2 pb-0">
                                              <div className="d-flex">
                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                  <img
                                                    src={avatar1}
                                                    alt=""
                                                    className="img-fluid rounded-circle avatar-xs float-start me-2 social-icons"
                                                  />
                                                  <h5 className="fs-14 text-truncate mb-1">
                                                    <span>Savitri</span>
                                                    <a
                                                      href="javascript:void(0);"
                                                      onClick={
                                                        toggleTeamMember
                                                      }
                                                    >
                                                      <i class="ri-pencil-line fs-16 float-end"></i>
                                                    </a>
                                                  </h5>
                                                  <p className="text-muted text-truncate mb-0">
                                                    CFO <br />
                                                    <a
                                                      href="javascript:void(0);"
                                                      class="text-brand fs-4"
                                                    >
                                                      <i class="ri-linkedin-box-fill linkedin-font"></i>
                                                    </a>
                                                  </p>
                                                </div>
                                              </div>
                                            </CardBody>
                                          </Card>
                                        </SwiperSlide>
                                      </div>
                                    </Swiper>
                                  </div>
                                </div>
                              </TabPane>
                              <TabPane tabId="2">
                                <div className="profile-timeline">
                                  <div
                                    className="accordion accordion-flush"
                                    id="directorExample"
                                  >
                                    Director coming soon...
                                      </div>
                                </div>
                              </TabPane>
                              <TabPane tabId="3">
                                <div className="profile-timeline">
                                  <div
                                    className="accordion accordion-flush"
                                    id="advisorExample"
                                  >
                                    Advisor coming soon...
                                      </div>
                                </div>
                              </TabPane>
                              <TabPane tabId="4">
                                <div className="profile-timeline">
                                  <div
                                    className="accordion accordion-flush"
                                    id="investorExample"
                                  >
                                    Investor coming soon...
                                      </div>
                                </div>
                              </TabPane>
                            </TabContent>
                          </Container>
                        </CardBody>
                      </Card>
                     
                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          What makes team exceptional
                            </h4>
                        <div class="flex-shrink-0">
                          <i
                            className="ri-pencil-line align-bottom ms-2 fs-16 pointer"
                            id="CommanModal"
                            onClick={(e) => toggleModel("CommanModal")}
                          ></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>

                      <p className="text-muted">
                        In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without
                            relying on meaningful content. Lorem ipsum may be
                            used as a placeholder before final copy is
                            available.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Solution
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Our 4 steps, enable students to discover themselves,
                            understand their interests/personality/abilities
                            (through psychometrics and counselling), and
                            discover their future worlds (through our platform
                            of 750+ careers) to make informed career decisions..
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Market opportunity
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Class 8 to 12 students/parents by leveraging
                            partnerships with schools, corporates and B2C
                            marketing. The decision of this segment was
                            primarily because of the career decisions they need
                            to make at this age:
                            streams/subjects/courses/colleges.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Business model
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        We charge between 1899-4500 depending on their age,
                            which gives them access to the Mentoria Solution.
                            Users pay us through our website, we partner with
                            corporates who sponsor this for their employees'
                            children through corporate packages, and schools
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Go to market
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without
                            relying on meaningful content. Lorem ipsum may be
                            used as a placeholder before final copy is
                            available..
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Traction
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without
                            relying on meaningful content. Lorem ipsum may be
                            used as a placeholder before final copy is
                            available.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Timing
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without
                            relying on meaningful content. Lorem ipsum may be
                            used as a placeholder before final copy is
                            available.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Previous Funding Amount and Valuation
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Promoters
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Exit Options
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Competitive Landscape And Advantage
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          IP If any
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Financial Details
                            </h4>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <div class="border-end col-md-3 col-xl-3">
                            <div class="text-center">
                              <h4 class="fs-20 fw-seminormal mb-1 green-clr">
                                <span
                                  class="counter-value"
                                  data-target="50,000"
                                >
                                  50,000 &nbsp;
                                    </span>
                                INR
                                    <Link to="to">
                                  <i className="ri-pencil-line align-bottom ms-2 fs-16 text-dark"></i>
                                </Link>
                              </h4>
                              <h5 class="text-muted text-uppercase fs-12 ellipsis-text">
                                Revenue of the Previous Year
                                    <i
                                  class="ri-information-line align-bottom fs-14 ms-2"
                                  id="tooltipTopfs1"
                                ></i>
                              </h5>
                            </div>
                          </div>
                          <div class="border-end col-md-3 col-xl-3">
                            <div class="text-center">
                              <h4 class="fs-20 fw-seminormal mb-1 green-clr">
                                <span
                                  class="counter-value"
                                  data-target="50,000"
                                >
                                  50,000 &nbsp;
                                    </span>
                                INR
                                    <Link to="to">
                                  <i className="ri-pencil-line align-bottom ms-2 fs-16 text-dark"></i>
                                </Link>
                              </h4>
                              <h5 class="text-muted text-uppercase fs-12 ellipsis-text">
                                Revenue of the Previous Year
                                    <i
                                  class="ri-information-line align-bottom fs-14 ms-2"
                                  id="tooltipTopfs1"
                                ></i>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />

                      <span class="badge rounded-pill border border-info text-info fs-12 fw-normal me-3 m10">
                        <Link to="#" className="me-2 pb-1 inline-block">
                          Pitch File
                              <i className="ri-download-2-line align-bottom ms-2"></i>
                        </Link>
                        <Link
                          to="#"
                          id="UploadDocumentsAbout"
                          onClick={(e) =>
                            toggleModel("UploadDocumentsAbout")
                          }
                        >
                          <i className="ri-pencil-line border-left"></i>
                        </Link>
                      </span>
                      <span class="badge rounded-pill border border-info text-info fs-12 fw-normal me-3 m10">
                        <Link to="#" className="me-2 pb-1 inline-block">
                          Cap Table
                              <i className=" ri-download-2-line align-bottom ms-2"></i>
                        </Link>
                        <Link to="#">
                          <i className="ri-pencil-line border-left"></i>
                        </Link>
                      </span>
                      <span class="badge rounded-pill border border-info text-info fs-12 fw-normal me-3 m10">
                        <Link to="#" className="me-2 pb-1 inline-block">
                          Financial Projection
                              <i className=" ri-download-2-line align-bottom ms-2"></i>
                        </Link>
                        <Link to="#">
                          <i className="ri-pencil-line border-left"></i>
                        </Link>
                      </span>
                      <span class="badge rounded-pill border border-info text-info fs-12 fw-normal me-3 m10">
                        <Link to="#" className="me-2 pb-1 inline-block">
                          Traction Metrics
                              <i className=" ri-download-2-line align-bottom ms-2"></i>
                        </Link>
                        <Link to="#">
                          <i className="ri-pencil-line border-left"></i>
                        </Link>
                      </span>
                      <span class="badge rounded-pill border border-info text-info fs-12 fw-normal me-3 m10">
                        <Link to="#" className="me-2 pb-1 inline-block">
                          Info Doc
                              <i className=" ri-download-2-line align-bottom ms-2"></i>
                        </Link>
                        <Link to="#">
                          <i className="ri-pencil-line border-left"></i>
                        </Link>
                      </span>
                      <hr />
                      <h5 className="mt-3">Mentor</h5>
                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-2"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Text
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <input
                          type="password"
                          class="form-control"
                          id=""
                          placeholder="Text"
                        ></input>
                      </div>
                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          TextArea
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <CKEditor
                          editor={ClassicEditor}
                          data="<p>Hello from CKEditor 5!</p>"
                          onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                          }}
                        />
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Team member role
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <input
                          type="password"
                          class="form-control"
                          id=""
                          placeholder="Team member role"
                        ></input>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Text file
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <div className="input-group">
                          <Input
                            type="file"
                            className="form-control"
                            id="inputGroupFile01"
                          />
                          <br />
                        </div>
                        <small className="error">
                          Accepts only .txt, .png, .jpe, .jpeg, .jpg, .gif,
                              .svg, .mp3, .mp4, .pdf, .odt, .ods, .odp, .doc,
                              .docx, .xls , .xlsx , .csv , .ppt , .pptx files.
                            </small>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Total investment in your startup
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <input
                          type="password"
                          class="form-control"
                          id=""
                          placeholder="Total investment in your startup"
                        ></input>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Aadhaar Card
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <div className="input-group">
                          <Input
                            type="file"
                            className="form-control"
                            id="inputGroupFile01"
                          />
                          <br />
                        </div>
                        <small className="error">
                          Accepts only .txt, .png, .jpe, .jpeg, .jpg, .gif,
                              .svg, .mp3, .mp4, .pdf, .odt, .ods, .odp, .doc,
                              .docx, .xls , .xlsx , .csv , .ppt , .pptx files.
                            </small>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Your domain of expertise and interest will help
                              support and mentor entrepreneurs who come to us.
                              Please share your domain of expertise.
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <CKEditor
                          editor={ClassicEditor}
                          data="<p>Hello from CKEditor 5!</p>"
                          onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                          }}
                        />
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          What is your fund
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <input
                          type="password"
                          class="form-control"
                          id=""
                          placeholder="What is your fund"
                        ></input>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Checkbox
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <Row>
                        <Col class="form-check mb-2" lg={2} md={2}>
                          <Input
                            class="form-check-input me-1"
                            type="checkbox"
                            id="formCheck1"
                          />
                          <label class="form-check-label" for="formCheck1">
                            CSE
                              </label>
                        </Col>
                        <Col class="form-check mb-2" lg={2} md={2}>
                          <Input
                            class="form-check-input me-1"
                            type="checkbox"
                            id="formCheck2"
                          />
                          <label class="form-check-label" for="formCheck2">
                            RDMS
                              </label>
                        </Col>
                        <Col class="form-check mb-2" lg={2} md={2}>
                          <Input
                            class="form-check-input me-1"
                            type="checkbox"
                            id="formCheck3"
                          />
                          <label class="form-check-label" for="formCheck3">
                            OS
                              </label>
                        </Col>
                        <Col class="form-check mb-2" lg={2} md={2}>
                          <Input
                            class="form-check-input me-1"
                            type="checkbox"
                            id="formCheck4"
                          />
                          <label class="form-check-label" for="formCheck4">
                            CN
                              </label>
                        </Col>
                        <Col class="form-check mb-2" lg={2} md={2}>
                          <Input
                            class="form-check-input me-1"
                            type="checkbox"
                            id="formCheck5"
                          />
                          <label class="form-check-label" for="formCheck5">
                            M2
                              </label>
                        </Col>
                      </Row>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Dropdown
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <select
                          class="form-select mb-3"
                          aria-label="Default select example"
                        >
                          <option selected="">Select </option>
                          <option value="1">HTML</option>
                          <option value="2">PHP</option>
                          <option value="3">Java</option>
                        </select>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Mentor URL
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <input
                          type="password"
                          class="form-control"
                          id=""
                          placeholder="https://devv2.scip.co/entrepreneur/company_information"
                        ></input>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Mentor Email
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <input
                          type="password"
                          class="form-control"
                          id=""
                          placeholder="Enter Mentor Email"
                        ></input>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Mentor Application Date
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <Flatpickr
                          className="form-control date-picker-icon"
                          options={{
                            dateFormat: "d M, Y",
                          }}
                        />
                      </div>
                      <hr />
                      <h5 className="mt-3">Funding Proposal </h5>
                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Name
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <input
                          type="password"
                          class="form-control"
                          id=""
                          placeholder="Name"
                        ></input>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Designeation
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <input
                          type="password"
                          class="form-control"
                          id=""
                          placeholder="Designeation"
                        ></input>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Radio
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <div class="form-check mb-2">
                          <Input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Yes
                              </label>
                        </div>
                        <div class="form-check">
                          <Input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked=""
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            No
                              </label>
                        </div>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Checkbox
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <div class="form-check mb-2">
                          <Input
                            class="form-check-input me-1"
                            type="checkbox"
                            id="formCheck6"
                          />
                          <label class="form-check-label" for="formCheck6">
                            Yes
                              </label>
                        </div>
                        <div class="form-check">
                          <Input
                            class="form-check-input me-1"
                            type="checkbox"
                            id="formCheck7"
                          />
                          <label class="form-check-label" for="formCheck7">
                            No
                              </label>
                        </div>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Are there any legal cases pending against you in
                              the official/personal capacity?
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <div class="form-check mb-2">
                          <Input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Yes
                              </label>
                        </div>
                        <div class="form-check">
                          <Input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked=""
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            No
                              </label>
                        </div>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          What is your fund
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <input
                          type="password"
                          class="form-control"
                          id=""
                          placeholder="What is your fund"
                        ></input>
                      </div>

                      <div
                        class="card-header align-items-center d-flex px-0 py-0 mt-3"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Select values
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-pencil-line align-bottom ms-2 fs-16"></i>
                          <i className="ri-file-copy-line align-bottom ms-2 fs-16"></i>
                          <i
                            className="ri-check-line align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                          <i
                            className=" ri-close-fill align-bottom ms-2 fs-16"
                            style={{ display: "none" }}
                          ></i>
                        </div>
                      </div>
                      <div>
                        <Select
                          value={selectedMulti}
                          isMulti={true}
                          onChange={() => {
                            handleMulti();
                          }}
                          options={SingleOptions}
                        />
                      </div>

                      {/* */}
                    </div>
                  </Collapse>
                </AccordionItem>

                <AccordionItem>
                  <h2
                    className="accordion-header"
                    id="accordionwithplusExample2"
                  >
                    <button
                      className={classnames("accordion-button fs-18", {
                        collapsed: !plusiconCol2,
                      })}
                      type="button"
                      onClick={t_plusiconCol2}
                      style={{ cursor: "pointer" }}
                    >
                      Teaser
                        </button>
                  </h2>

                  <Collapse
                    isOpen={plusiconCol2}
                    className="accordion-collapse"
                    id="accor_plusExamplecollapse2"
                  >
                    <div className="accordion-body">
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Your company’s customer pitch
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer" id="TeaserModal"
                            onClick={(e) => toggleModel("TeaserModal")}></i>
                        </div>
                      </div>
                      <ul className="UI-list">
                        <li>
                          Health Sutra products are positioned as “Desi way
                              to stay fit”.
                            </li>
                      </ul>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Traction and other performance metrics
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Health Sutra currently has - 2 SKUs in Ready to Eat
                            (RTE), 4 SKUs in the Ready to Cook (RTC), and 10
                            SKUs in staples category. Types of products include
                            flakes, rawa (Semolina), porridge and pops
                            (equivalent of popcorn with millets). The staples
                            category currently contributes to about 85% of the
                            revenues (with a margin of 40% on revenues) of the
                            company and is projected to remain as the major
                            revenue driver for the company. Currently, the
                            company has production lines set up for flaking,
                            semolina making and popping. The products are
                            manufactured in batches, for eg: the raw material
                            batch size for production of ragi flakes is 150 kgs.
                            Although the total processing capacity is 700
                            Kg/day, the company currently operates at a capacity
                            utilization of 45% given the limited space for
                            storing finished inventory
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Business Overview
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Founded in 2013 and based out of Hyderabad,
                            Fountainhead Foods Pvt Ltd manufactures and markets
                            healthy food products under the brand Health Sutra.
                            The company currently has a product portfolio of 16
                            SKUs across Jowar, Bajra, Ragi (made from indigenous
                            grain: millets) and Barley. The Company currently
                            works with 2 super stockists catering to more than
                            500 stores (Spencer’s, Organic and Ayurveda product
                            stores etc.) across A.P & Telangana.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Elevator pitch
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        The company offers naturally healthy food products
                            that are tasty, affordable and help fight lifestyle
                            diseases.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Industry Overview
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        As per Euromonitor International report on “Health
                            and Wellness in India”, health and wellness is one
                            of the fastest growing sectors in India and was
                            estimated at INR 72,000 Cr. in 2015. Naturally
                            Healthy Packaged Goods (NHPG) sector is growing at
                            26% CAGR and is estimated at INR 25000 Crores in
                            2015. This sector is dominated by few regional
                            players and other big FMCG companies, but limited to
                            only a few categories
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Business Model
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Company works closely with premier research
                            institutes such as IIMR, ANGRAU and CFTRI and has
                            access to the technologies currently being developed
                            at these institutes. Health Sutra products are
                            packaged and distributed to the end consumer through
                            a conventional supply chain (Super Stockists,
                            Wholesalers & Retailers) and online super markets
                            (Big Basket). The Company currently works with 2
                            super stockists catering to more than 500 stores
                            (Spencer’s, Organic and Ayurveda product stores
                            etc.) across A.P & Telangana.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Impact of COVID on demand, near-term & long-term
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">coming soon</p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Services / Products/ Technology
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        The company currently has three product categories
                            and product portfolio of 16 SKUs across Jowar,
                            Bajra, Ragi (made from indigenous grain: millets)
                            and Barley. Health Sutra products are positioned as
                            “Desi way to stay fit”. They are healthier
                            alternatives to mainstream products by virtue of
                            being manufactured from healthier ingredients and
                            are offered at similar or slightly lower price
                            points. Health Sutra products will be targeted
                            category wise. Staples will be targeted to middle
                            income households where brand loyalty is high. RTC
                            products will be targeted to health conscious
                            working class in the age group of 25-35.
                          </p>
                      <div className="table-responsive">
                        <table
                          className="table table-bordered"
                          cellspacing="1"
                          cellpadding="1"
                          border="1"
                        >
                          <Col style={{ width: "50%" }} />
                          <Col style={{ width: "50%" }} />
                          <tbody>
                            <tr>
                              <td>Particular</td>
                              <td>X</td>
                            </tr>
                            <tr>
                              <td>No of Products Sold (in Lakhs)</td>
                              <td>7</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Customer pain point
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Lack of naturally healthy food products that are
                            tasty, affordable and help fight lifestyle diseases.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Revenue Model/ Go-to-market strategy
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        The staples category currently contributes to about
                            85% of the revenues (with a margin of 40% on
                            revenues) of the company and is projected to remain
                            as the major revenue driver for the company.
                          </p>
                      <hr />

                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Customer existing in the pipeline
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        The company has established backward linkages with
                            dryland farmers and farmer cooperatives in
                            Ananthapur District, Andhra Pradesh (A.P). Company
                            works closely with premier research institutes such
                            as IIMR, ANGRAU and CFTRI and has access to the
                            technologies currently being developed at these
                            institutes.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Competition/ USP
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Key competitors: Regional Brands, ITC, Britannia &
                            MTR Differentiators: ? Products, Price, Package
                            Size, Options - The Company manufactures innovative
                            products that are similar to mainstream products but
                            made with indigenous grains. - Health Sutra products
                            are affordable when compared to a similar product
                            from a company like Kellogg’s or MTR. - Health Sutra
                            offers multiple options to the consumers within the
                            same category (eg: Flakes: Ragi flakes, Jowar flakes
                            , Bajra flakes etc.) and across categories (RTC:
                            Jowar porridge, Jowar rawa/idly etc) ? Technology
                            and Category Focus: - The technology used by the
                            company is at par with the technology currently
                            being developed in the large research institutions;
                            Company is an early adopter and has a 3-4 year head
                            start before these technologies are picked by larger
                            FMCG players. - FMCG majors in NHPG segment are
                            limited to only a few categories. Eg: Britannia
                            sells only high fiber biscuits (Bakery product). No
                            presence in RTC category.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Team
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Key competitors: Regional Brands, ITC, Britannia &
                            MTR Differentiators: ? Products, Price, Package
                            Size, Options - The Company manufactures innovative
                            products that are similar to mainstream products but
                            made with indigenous grains. - Health Sutra products
                            are affordable when compared to a similar product
                            from a company like Kellogg’s or MTR. - Health Sutra
                            offers multiple options to the consumers within the
                            same category (eg: Flakes: Ragi flakes, Jowar flakes
                            , Bajra flakes etc.) and across categories (RTC:
                            Jowar porridge, Jowar rawa/idly etc) ? Technology
                            and Category Focus: - The technology used by the
                            company is at par with the technology currently
                            being developed in the large research institutions;
                            Company is an early adopter and has a 3-4 year head
                            start before these technologies are picked by larger
                            FMCG players. - FMCG majors in NHPG segment are
                            limited to only a few categories. Eg: Britannia
                            sells only high fiber biscuits (Bakery product). No
                            presence in RTC category.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Team
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Key competitors: Regional Brands, ITC, Britannia &
                            MTR Differentiators: ? Products, Price, Package
                            Size, Options - The Company manufactures innovative
                            products that are similar to mainstream products but
                            made with indigenous grains. - Health Sutra products
                            are affordable when compared to a similar product
                            from a company like Kellogg’s or MTR. - Health Sutra
                            offers multiple options to the consumers within the
                            same category (eg: Flakes: Ragi flakes, Jowar flakes
                            , Bajra flakes etc.) and across categories (RTC:
                            Jowar porridge, Jowar rawa/idly etc) ? Technology
                            and Category Focus: - The technology used by the
                            company is at par with the technology currently
                            being developed in the large research institutions;
                            Company is an early adopter and has a 3-4 year head
                            start before these technologies are picked by larger
                            FMCG players. - FMCG majors in NHPG segment are
                            limited to only a few categories. Eg: Britannia
                            sells only high fiber biscuits (Bakery product). No
                            presence in RTC category.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Advisors
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Maheedhar N V – B.Tech (Civil), IIT Delhi, 2009 -
                            Senior BD & Budgeting engineer at Keller Ground
                            Engineering India Pvt. Ltd. Sravanthi B– Manager –
                            B.Tech (Food Sci & Tech), M.Sc. (Food Tech), ANGRAU,
                            Hyderabad - BD at Millet Processing and Incubation
                            Center, ANGRAU, Hyderabad.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Financials
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <div className="table-responsive mt-2">
                        <table
                          className="table table-bordered"
                          cellspacing="1"
                          cellpadding="1"
                          border="1"
                        >
                          <Col style={{ width: "50%" }} />
                          <Col style={{ width: "50%" }} />
                          <tbody>
                            <tr>
                              <th>Particular</th>
                              <th>FY19</th>
                              <th>FY 20 (P)</th>
                              <th>FY 21 (P)</th>
                            </tr>
                            <tr>
                              <td>No of Products Sold (in Lakhs)</td>
                              <td>7</td>
                              <td>15</td>
                              <td>30</td>
                            </tr>
                            <tr>
                              <td>No of Stores Placed</td>
                              <td>20</td>
                              <td>40</td>
                              <td>60</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Key Assumptions
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        *The Current (May ’16) gross burn is ~INR 4.3 lakhs
                            and net burn is ~INR 60,000
                            <br />
                        ** The projected average gross burn is ~INR 17 lakhs
                            (monthly)
                          </p>
                      <hr />

                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Roadmap
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Increase plant capacity form 3,500 to 5,500 sft.
                            Increase Ready to Eat (RTE) SKUs to 10 and Ready to
                            Cook (RTC) SKUs to 15 in staples category.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Shareholding pattern
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table
                          className="table table-bordered mb-0"
                          cellspacing="1"
                          cellpadding="1"
                          border="1"
                        >
                          <Col style={{ width: "50%" }} />
                          <Col style={{ width: "50%" }} />
                          <tbody>
                            <tr>
                              <th>Name</th>
                              <th>% shareholding</th>
                            </tr>
                            <tr>
                              <td>Anand Kumar</td>
                              <td>60</td>
                            </tr>
                            <tr>
                              <td>Sushil</td>
                              <td>31</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Funding history
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Bootstraped - Rs 89 Lakhs
                            <br />
                        Entrepreneurs have not taken any salary. Investment
                            has been in developing product and taking to market.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Ask & Fund Utilization
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Ask - INR 3 crores. Of the INR 3 crores, Company is
                            looking to raise INR 1 crore through grants.
                            Accordingly, HA has an opportunity to invest INR 2
                            crores. Company is looking to dilute 10 to 15% for
                            the INR 2 crore fundraise and is open to
                            discussions. Utilization: To be utilized over the
                            next 18 months across Manufacturing, Market
                            Development and sales, Cap-Ex, Clinical Studies,
                            Regulatory and registration costs, Human Resources.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Ask & Fund Utilization
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        Ask - INR 3 crores. Of the INR 3 crores, Company is
                            looking to raise INR 1 crore through grants.
                            Accordingly, HA has an opportunity to invest INR 2
                            crores. Company is looking to dilute 10 to 15% for
                            the INR 2 crore fundraise and is open to
                            discussions. Utilization: To be utilized over the
                            next 18 months across Manufacturing, Market
                            Development and sales, Cap-Ex, Clinical Studies,
                            Regulatory and registration costs, Human Resources.
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Exit Strategy
                            </h4>
                        <div class="flex-shrink-0">
                          <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                          <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                        </div>
                      </div>
                      <p className="text-muted">
                        The market opportunity is niche. However, within
                            three years the company can be an acquisition
                            opportunity for ...........
                          </p>
                      <hr />
                      <div
                        class="card-header align-items-center d-flex px-0 py-0"
                        style={{ borderBottom: "0" }}
                      >
                        <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-14">
                          Teaser Documents
                            </h4>
                      </div>
                      <p className="text-muted">
                        <span class="badge rounded-pill border border-info text-info fs-12 fw-normal me-3">
                          <Link to="#" className="me-2">
                            Presentation_template{" "}
                            <i className=" ri-download-2-line align-bottom"></i>
                          </Link>
                          <Link to="#">
                            <i className="ri-link border-left"></i>
                          </Link>
                        </span>

                        <span class="badge rounded-pill border border-info text-info fs-12 fw-normal me-3">
                          <Link to="#" className="me-2">
                            Homversity_Pitch_deck{" "}
                            <i className=" ri-download-2-line align-bottom"></i>
                          </Link>
                          <Link to="#">
                            <i className="ri-link border-left"></i>
                          </Link>
                        </span>

                        <span class="badge rounded-pill border border-info text-info fs-12 fw-normal me-3">
                          <Link to="#" className="me-2">
                            Report from API{" "}
                            <i className=" ri-download-2-line align-bottom"></i>
                          </Link>
                          <Link to="#">
                            <i className="ri-link border-left"></i>
                          </Link>
                        </span>
                      </p>

                      <div
                        id="UploadDocuments"
                        onClick={(e) => toggleModel("UploadDocuments")}
                        class="btn uploadBtn btn-warning waves-effect waves-light mt-2"
                        align="center"
                      >
                        Upload Document
                          </div>
                    </div>
                  </Collapse>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className="mb-2">
            <CardBody>
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}>
                <h4 class="card-title mb-0 flex-grow-1 px-0 py-0 fs-15">
                  Video
                </h4>
              </div>
              <hr />
              <div class="ratio ratio-16x9">
                <iframe
                  class="rounded"
                  src="https://scipbucket.s3.ap-south-1.amazonaws.com/uploads/docx_video/601/PexelsVideos_10192573914_8066457601_1561450981_041836880_015849912_20133929348_010185050_8013286357_10179266676_029992586_8017423129_601_26887550.mp4"
                  title="YouTube video"
                  allowfullscreen=""
                ></iframe>
              </div>
            </CardBody>
          </Card>
          <Card className="mb-2">
            <CardBody>
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title flex-grow-1 px-0 py-0 fs-15">
                  Company Basic Information
                    </h4>
                <div
                  class="flex-shrink-0"
                  id="CompanyBasicInformation"
                  onClick={(e) => toggleModel("CompanyBasicInformation")}
                >
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <hr />
              <div>
                <h6 className="mb-0">Stage</h6>
                <div className="text-muted">Pre-Revenue</div>
                <hr />
                <h6 className="mb-0">Product/Service</h6>
                <div className="text-muted">Service</div>
                <hr />
                <h6 className="mb-0">Industry</h6>
                <div className="text-muted">
                  Administrative and support service
                    </div>
                <hr />
                <h6 className="mb-0">Business Category</h6>
                <div className="text-muted">B2B2C</div>
                <hr />
                <h6 className="mb-0">Sector</h6>
                <div className="text-muted">
                  AI, Analytics, AR/VR, Blockchain
                    </div>
              </div>
            </CardBody>
          </Card>
          <Card className="mb-2">
            <CardBody>
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title flex-grow-1 px-0 py-0 fs-15">
                  Investment
                    </h4>
                <div
                  class="flex-shrink-0"
                  id="EditInvestment"
                  onClick={(e) => toggleModel("EditInvestment")}
                >
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <hr />
              <div>
                <h6 className="mb-0">Seeking</h6>
                <div className="text-muted">5,00,00,001 INR</div>
                <hr />
                <h6 className="mb-0">Cash Invested</h6>
                <div className="text-muted">1,00,000 INR</div>
                <hr />
                <h6 className="mb-0">Pre Money Valuation</h6>
                <div className="text-muted">1,11,111 INR</div>
              </div>
            </CardBody>
          </Card>
          <Card className="mb-2">
            <CardBody>
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Company Details
                    </h4>
                <div
                  class="flex-shrink-0"
                  id="EditCompanyDetails"
                  onClick={(e) => toggleModel("EditCompanyDetails")}
                >
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <hr />
              <div>
                <h6 className="mb-0">Registered Name</h6>
                <div className="text-muted">Survya Co</div>
                <hr />
                <h6 className="mb-0">Company Structure</h6>
                <div className="text-muted">Private limited</div>
                <hr />
                <h6 className="mb-0">Operational Headquarters</h6>
                <div className="text-muted">Mumbai</div>
                <hr />
                <h6 className="mb-0">Registered Office</h6>
                <div className="text-muted">
                  45/47, 1st Main Rd, Adyar, Chennai, Tamil Nadu 600020
                    </div>
                <hr />
                <h6 className="mb-0">Founded Date</h6>
                <div className="text-muted">19/10/2019</div>
                <hr />
                <h6 className="mb-0">No of Employee</h6>
                <div className="text-muted">15</div>
                <hr />
                <h6 className="mb-0">Social Media Tag</h6>
                <div class="d-flex pt-2 social-icons">
                  <Link class="avatar-xs d-block me-2" href="#">
                    <span class="avatar-title rounded-circle fs-16 text-bg-light facebook">
                      <i class="ri-facebook-fill facebook-clr"></i>
                    </span>
                  </Link>
                  <Link class="avatar-xs d-block me-2" href="#">
                    <span class="avatar-title rounded-circle fs-16 text-bg-light twitter">
                      <i class="ri-twitter-fill"></i>
                    </span>
                  </Link>
                  <Link class="avatar-xs d-block me-2" href="#">
                    <span class="avatar-title rounded-circle fs-16 text-bg-light linkedin">
                      <i class="ri-linkedin-fill"></i>
                    </span>
                  </Link>
                  <Link class="avatar-xs d-block" href="#">
                    <span class="avatar-title rounded-circle fs-16 text-bg-light instagram">
                      <i class="ri-instagram-fill"></i>
                    </span>
                  </Link>
                </div>
                <hr />
                <h6 className="mb-0">PR Announcement</h6>
                <div className="text-muted">
                  <Link to="#">
                    View Link <i className=" ri-external-link-line "></i>
                  </Link>
                </div>
                <hr />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

     <CompanyBasicInformation
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "CompanyBasicInformation" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditInvestment
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditInvestment" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditCompanyDetails
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditCompanyDetails" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditCompanySummary
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditCompanySummary" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <CommanModal
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "CommanModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <UploadDocuments
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "UploadDocuments" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <UploadDocumentsAbout
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "UploadDocumentsAbout" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <TeaserModal
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "TeaserModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <AddTeamMemberModal
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "AddTeamMemberModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <AddBoardDirector
      modelName={modelName}
      toggleModel={toggleModel}
      show={modelName === "AddBoardDirector" ? true : false}
      onCloseClick={() => setModelName("")}
    />

    <AddAdvisor
    modelName={modelName}
    toggleModel={toggleModel}
    show={modelName === "AddAdvisor" ? true : false}
    onCloseClick={() => setModelName("")}
  />

  <AddInvestor
    modelName={modelName}
    toggleModel={toggleModel}
    show={modelName === "AddInvestor" ? true : false}
    onCloseClick={() => setModelName("")}
  />

    </React.Fragment>
  );
};

export default AboutUs;
