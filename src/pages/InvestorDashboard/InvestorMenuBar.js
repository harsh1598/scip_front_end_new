import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectName } from "../../Components/constants/layout";

import { Card, CardBody, Accordion, AccordionItem, Collapse } from "reactstrap";
import classnames from "classnames";

//import Components

const InvestorMenuBar = ({ col3 }) => {
  document.title = `${ProjectName} | Investor Dashboard`;

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
                            style={{ color: "#6d7080", cursor: "pointer" }}
                            className={classnames("accordion-button", {
                              collapsed: !fillCol4,
                            })}
                            type="button"
                            onClick={t_fillCol4}
                          >
                            <i className="ri-home-4-line sub-icons"></i>
                            {col3 ? "" : "Home"}
                          </button>
                        </h2>
                        <Collapse
                          isOpen={fillCol4}
                          className="accordion-collapse"
                          id="accor_fill21"
                        >
                          <div className="accordion-body p-0 pb-3">
                            <Link to="/investor_dashboard/home/invested">
                              <i className="ri-message-3-line sub-icons"></i>
                              {col3 ? "" : "My Portfolio"}
                            </Link>
                          </div>
                          <div className="accordion-body p-0 pb-3">
                            <Link to="/investor_dashboard/home/interested">
                              <i className="ri-star-line sub-icons"></i>
                              {col3 ? "" : "Interested Companies"}
                            </Link>
                          </div>
                          <div className="accordion-body p-0 pb-3">
                            <Link to="/investor_dashboard/home/partia-exit">
                              <i className="ri-edit-box-line sub-icons"></i>
                              {col3 ? "" : "Partial Exited Companies"}
                            </Link>
                          </div>
                          <div className="accordion-body p-0 pb-3">
                            <Link to="/investor_dashboard/home/exited">
                              <i className="ri-edit-box-line sub-icons"></i>
                              {col3 ? "" : "Exited Companies"}
                            </Link>
                          </div>
                          <div className="accordion-body p-0 pb-3">
                          <Link to="/investor_dashboard/document-repository/document-repository">
                            <i className="ri-edit-box-line sub-icons"></i>
                            {col3 ? "" : "Documents"}
                          </Link>
                        </div>
                        </Collapse>
                      </AccordionItem>
                    </Accordion>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/investor_dashboard/workflow/mytask"
                      className="nav-link"
                      data-key=""
                    >
                      <i className="ri-file-copy-2-line sub-icons"></i>
                      {col3 ? "" : "My Task"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/investor_dashboard/calendar/index"
                      className="nav-link"
                      data-key=""
                    >
                      <i className="ri-calendar-line sub-icons"></i>
                      {col3 ? "" : "Calendar & Schedule"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/investor_dashboard/directpayment/payment"
                      className="nav-link"
                      data-key=""
                    >
                      <i className="ri-book-open-line sub-icons"></i>
                      {col3 ? "" : "Payment"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link" data-key="">
                      <i className="ri-calendar-2-line sub-icons"></i>
                      {col3 ? "" : "From Builder"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link" data-key="">
                      <i className="ri-mail-send-line sub-icons"></i>
                      {col3 ? "" : "IRR"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="investor_dashboard/Zipzum/NewPage" className="nav-link" data-key="">
                      <i className="ri-apps-line sub-icons"></i>
                      {col3 ? "" : "Zipzum"}
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
export default InvestorMenuBar;
