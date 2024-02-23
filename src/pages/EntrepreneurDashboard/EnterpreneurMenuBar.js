import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectName } from "../../Components/constants/layout";

import { Card, CardBody, Accordion, AccordionItem, Collapse } from "reactstrap";
import classnames from "classnames";

//import Components

const EnterpreneurMenuBar = ({ col3 }) => {
  document.title = `${ProjectName} | Enterpreneur Dashboard`;

  const [fillCol4, setfillCol4] = useState(false);

  const t_fillCol4 = () => {
    setfillCol4(!fillCol4);
  };

  console.log("aSGDKL");

  return (
    <React.Fragment>
      <CardBody className="d-none d-sm-block">
        <div className="live-preview enterpreneurDSH">
          <div>
            <Card className="deal-left-bar">
              <CardBody className="px-2">
                <ul className="deals-left-menu nav nav-sm flex-column">
                  <li className="nav-item">
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
                  <li className="nav-item">
                    <Accordion
                      className="custom-accordionwithicon accordion-flush accordion-fill-secondary"
                      id="accordionFill2"
                    >
                      <AccordionItem>
                        <h2
                          className="accordion-header"
                          id="accordionFill2Example1"
                        >
                          <button
                            className={classnames("accordion-button", {
                              collapsed: !fillCol4,
                            })}
                            type="button"
                            onClick={t_fillCol4}
                            style={{ cursor: "pointer", color: "#6d7080", }}
                          >
                            <i className="ri-profile-line sub-icons"></i>
                            {col3 ? "" : "Company Information"}
                          </button>
                        </h2>
                        <Collapse
                          isOpen={fillCol4}
                          className="accordion-collapse"
                          id="accor_fill21"
                        >
                          <div className="accordion-body p-0 pb-3">
                            <Link to="/entrepreneur_dashboard/company_information/aboutus">
                              <i className="ri-file-list-line sub-icons"></i>
                              {col3 ? "" : "About Us"}
                            </Link>
                          </div>
                          <div className="accordion-body p-0 pb-3">
                            <Link to="/entrepreneur_dashboard/company_information/enteaser">
                              <i className="ri-computer-line sub-icons"></i>
                              {col3 ? "" : "Teaser"}
                            </Link>
                          </div>
                          <div className="accordion-body p-0 pb-3">
                            <Link to="/entrepreneur_dashboard/company_information/startup_funding_proposal">
                              <i className="ri-money-dollar-circle-line sub-icons"></i>
                              {col3 ? "" : "Startup Funding Proposal"}
                            </Link>
                          </div>
                          <div className="accordion-body p-0 pb-3">
                            <Link to="/entrepreneur_dashboard/company_information/campaign">
                              <i className="ri-computer-line sub-icons sub-icons"></i>
                              {col3 ? "" : "Campaign"}
                            </Link>
                          </div>
                          <div className="accordion-body p-0 pb-3">
                            <Link to="/entrepreneur_dashboard/deal_documents/index">
                              <i className="ri-file-text-line sub-icons sub-icons"></i>
                              {col3 ? "" : "Deal Documents"}
                            </Link>
                          </div>
                          <div className="accordion-body p-0 pb-3">
                            <Link to="/entrepreneur_dashboard/company_information/enfiling">
                              <i className="ri-survey-line sub-icons"></i>
                              {col3 ? "" : "Filing"}
                            </Link>
                          </div>
                          <div className="accordion-body p-0 pb-3">
                            <Link to="/entrepreneur_dashboard/company_information/tab_section">
                              <i className="ri-share-box-line sub-icons"></i>
                              {col3 ? "" : "Tab Section"}
                            </Link>
                          </div>
                        </Collapse>
                      </AccordionItem>
                    </Accordion>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/entrepreneur_dashboard/Calendar/index"
                      className="nav-link"
                      data-key=""
                    >
                      <i className="ri-file-copy-2-line sub-icons"></i>
                      {col3 ? "" : "Calendar & Schedule"}
                    </Link>
                  </li>
                  <li className="nav-item">
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
                  <li className="nav-item">
                    <Link to="/entrepreneur_dashboard/events/Events" className="nav-link" data-key="">
                      <i className="ri-calendar-2-line sub-icons"></i>
                      {col3 ? "" : "Events"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link" data-key="">
                      <i className="ri-mail-send-line sub-icons"></i>
                      {col3 ? "" : "Newsletter Email"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/entrepreneur_dashboard/Resources/Resources" className="nav-link" data-key="">
                      <i className="ri-apps-line sub-icons"></i>
                      {col3 ? "" : "Ecosystem"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/entrepreneur_dashboard/Training/Training" className="nav-link" data-key="">
                      <i className=" ri-suitcase-line sub-icons"></i>
                      {col3 ? "" : "Training"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/entrepreneur_dashboard/Mentors/Mentors" className="nav-link" data-key="">
                      <i className="ri-group-line sub-icons"></i>
                      {col3 ? "" : "Mentor"}
                    </Link>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </CardBody>
    </React.Fragment>
  );
};
export default EnterpreneurMenuBar;
