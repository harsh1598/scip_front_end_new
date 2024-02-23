import React, { useState } from "react";
import { Col, Row, Accordion, AccordionItem, Collapse } from "reactstrap";
import { ProjectName } from "../../Components/constants/layout";

//Images
import profileBg from "../../assets/images/profile-bg.jpg";
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import { projects, document } from "../../common/data";
import { Link, useNavigate } from "react-router-dom";


//import Components

import classnames from "classnames";

const InvestorProfileBar = ({ col3 }) => {
const navigate = useNavigate();

document.title = `${ProjectName} | Enterpreneur Dashboard`;

  const [modelName, setModelName] = useState("");
  const [dealData, setDealData] = useState({
    alert: false,
    id: "",
    status: "",
  });

  const toggleModel = (name) => {
    setModelName(name);
  };

  const [fillCol4, setfillCol4] = useState(false);
  const t_fillCol4 = () => {
    setfillCol4(!fillCol4);
  };
  let url = window.location.pathname;
  return (
    <React.Fragment>
      <div className="profile-foreground position-relative mx-n4 mt-n4">
        <div className="profile-wid-bg">
          <img src={profileBg} alt="" className="profile-wid-img" />
        </div>
      </div>

      <div className="mb-4 mb-lg-3 mb-none profile-wrapper mt55">
        
      { 
        (url == "/entrepreneur_dashboard" || url == "/entrepreneur_dashboard/company_information/aboutus" || url == "/entrepreneur_dashboard/evaluation/review" || url == "/entrepreneur_dashboard/evaluation/rubric" || url == "/entrepreneur_dashboard/initialcommitment" || url == "/deals/teaser") &&
        
        <Col lg={5}>
        <Row className="g-0">
          <Col lg={2} sm={2} className="col-2">
            <div className="ms-5 margin-none">
              <div className="avatar-sm">
                <img
                  src={avatar1}
                  alt="user-img"
                  className="img-thumbnail rounded-circle"
                />
              </div>
            </div>
          </Col>
           <Col lg={1} sm={1} className="col-2">
            <div className="p-2">
              <h3 className="text-white mb-1">
                <i
                  className="ri-pencil-line align-bottom pointer"
                  id="ChangeLogo"
                  onClick={(e) => toggleModel("ChangeLogo")}
                ></i>
              </h3>
            </div>
          </Col>
          <Col lg={1} sm={1} className="col-2">
          <div className="margin-none">
            <div className="avatar-sm">
              <img
                src={avatar1}
                alt="user-img"
                className="img-thumbnail rounded-circle"
              />
            </div>
          </div>
        </Col>
         <Col lg={3} sm={3} className="col-6">
          <div className="p-2">
            <h3 className="text-white mb-1">
              Watcon <span className="error">*</span>
              <i
                className="ri-pencil-line align-bottom ms-2 pointer"
                id="EditCompany"
                onClick={(e) => toggleModel("EditCompany")}
              ></i>
            </h3>
          </div>
        </Col>
        </Row>
        </Col>
      }
        

        {/* deals documents mobile menu start */}
        <div className="d-block d-sm-none">
        <ul className="horizontal-scroll-menu">
            <li>
              <Link
                to="/entrepreneur_dashboard"
                className="nav-link"
                data-key="t-analytics"
              >
                <i
                  className={
                    col3
                      ? "ri-home-4-line sub-icons"
                      : "ri-home-4-line col-lg-12 sub-icons"
                  }
                ></i>
                {col3 ? "" : "Home"}
              </Link>
            </li>
            <li>
              <Accordion
                className="custom-accordionwithicon accordion-flush accordion-fill-secondary"
                id="accordionFill2"
              >
                <AccordionItem>
                  <div className="accordion-header" id="accordionFill2Example1">
                    <a
                      className={classnames("accordion-button", {
                        collapsed: !fillCol4,
                      })}
                     
                      onClick={t_fillCol4}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="ri-profile-line sub-icons"></i>
                      {"Company Information"}
                    </a>
                  </div>
                  <Collapse
                    isOpen={fillCol4}
                    className="accordion-collapse white-bg"
                    id="accor_fill21"
                  >
                    <div className="accordion-body p-1">
                      <Link to="/entrepreneur_dashboard/company_information/aboutus">
                        <i className="ri-file-list-line sub-icons"></i>
                        {col3 ? "" : "About Us"}
                      </Link>
                    </div>
                    <div className="accordion-body p-1">
                      <Link to="/entrepreneur_dashboard/company_information/enteaser">
                        <i className="ri-computer-line sub-icons"></i>
                        {col3 ? "" : "Teaser"}
                      </Link>
                    </div>
                    <div className="accordion-body p-1">
                      <Link to="/entrepreneur_dashboard/company_information/startup_funding_proposal">
                        <i className="ri-money-dollar-circle-line sub-icons"></i>
                        {col3 ? "" : "Startup Funding Proposal"}
                      </Link>
                    </div>
                    <div className="accordion-body p-1">
                      <Link to="/entrepreneur_dashboard/company_information/campaign">
                        <i className="ri-computer-line sub-icons sub-icons"></i>
                        {col3 ? "" : "Campaign"}
                      </Link>
                    </div>
                    <div className="accordion-body p-1">
                      <Link to="/entrepreneur_dashboard/deal_documents/index">
                        <i className="ri-file-text-line sub-icons sub-icons"></i>
                        {col3 ? "" : "Deal Documents"}
                      </Link>
                    </div>
                    <div className="accordion-body p-1">
                      <Link to="/entrepreneur_dashboard/company_information/enfiling">
                        <i className="ri-survey-line sub-icons"></i>
                        {col3 ? "" : "Filing"}
                      </Link>
                    </div>
                    <div className="accordion-body p-1">
                      <Link to="/entrepreneur_dashboard/company_information/tab_section">
                        <i className="ri-share-box-line sub-icons"></i>
                        {col3 ? "" : "Tab Section"}
                      </Link>
                    </div>
                  </Collapse>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
              <Link
                to="/entrepreneur_dashboard/Calendar/index"
                className="nav-link"
                data-key=""
              >
                <i className="ri-file-copy-2-line sub-icons"></i>
                {col3 ? "" : "Calendar & Schedule"}
              </Link>
            </li>
            <li>
              <Link
                to="/entrepreneur_dashboard/eSign/esign_Document"
                className="nav-link"
                data-key=""
              >
                <i className="ri-thumb-up-line sub-icons"></i>
                {col3 ? "" : "eSign Docs"}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entrepreneur_dashboard/Zipzum/NewPage" className="nav-link" data-key="">
                <i className="ri-book-open-line sub-icons"></i>
                {col3 ? "" : "Zipzum"}
              </Link>
            </li>
            <li>
            <Link to="/entrepreneur_dashboard/events/Events" className="nav-link" data-key="">
                <i className="ri-calendar-2-line sub-icons"></i>
                {col3 ? "" : "Events"}
              </Link>
            </li>
            <li>
            <Link to="#" className="nav-link" data-key="">
                <i className="ri-calendar-2-line sub-icons"></i>
                {col3 ? "" : "Newsletter Email"}
              </Link>
            </li>
            <li>
            <Link to="/entrepreneur_dashboard/Resources/Resources" className="nav-link" data-key="">
                <i className="ri-calendar-2-line sub-icons"></i>
                {col3 ? "" : "Ecosystem"}
              </Link>
            </li>
            <li>
            <Link to="/entrepreneur_dashboard/Training/Training" className="nav-link" data-key="">
                <i className="ri-calendar-2-line sub-icons"></i>
                {col3 ? "" : "Training"}
              </Link>
            </li>
            <li>
            <Link to="/entrepreneur_dashboard/Mentors/Mentors" className="nav-link" data-key="">
                <i className="ri-calendar-2-line sub-icons"></i>
                {col3 ? "" : "Mentor"}
              </Link>
            </li>
          </ul>
        </div>
        {/* deals documents mobile menu end */}
      </div>

   
                   
    </React.Fragment>
  );
};
export default InvestorProfileBar;
