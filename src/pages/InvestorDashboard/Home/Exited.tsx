import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import MOICCurrency from "./Modals/MOICCurrency";

import {
  CardHeader,
  Card,
  Col,
  Container,
  Row,
  Input,
  DropdownItem, 
  DropdownMenu, 
  DropdownToggle, 
  UncontrolledDropdown,
  PaginationItem,
  Pagination,
  PaginationLink,
} from "reactstrap";

const data = [
  {
    id: 1,
    name: "ATS",
    dealpage: "View",
    amountinvested: "24,690 INR",
    ceo: "-",
    boid: "Abhay Deol/Damini Pallavi",
    moic: "-",
    currentvaluation: "-",
  },
  {
    id: 2,
    name: "Comix 1",
    dealpage: "View",
    amountinvested: "25,00,002.5 INR",
    ceo: "Pranav Pandey",
    boid: "NA",
    moic: "-",
    currentvaluation: "-",
  },
  {
    id: 3,
    name: "Croma",
    dealpage: "View",
    amountinvested: "25,00,004 INR",
    ceo: "-",
    boid: "NA",
    moic: "-",
    currentvaluation: "1,52,456 INR 05/04/2023",
  },
  {
    id: 4,
    name: "Dhara",
    dealpage: "View",
    amountinvested: "5,00,017.5 INR",
    ceo: "Ratana Shah",
    boid: "NA",
    moic: "-",
    currentvaluation: "-",
  },
  {
    id: 5,
    name: "Flip@top11",
    dealpage: "View",
    amountinvested: "2,00,023 INR",
    ceo: "-",
    boid: "NA",
    moic: "-",
    currentvaluation: "55,43,623 INR 03/06/1997",
  },
  {
    id: 6,
    name: "IC",
    dealpage: "View",
    amountinvested: "1,00,001 INR",
    ceo: "-",
    boid: "NA",
    moic: "5,000 INR",
    currentvaluation: "55,43,623 INR 03/06/1997",
  },
  {
    id: 7,
    name: "Innovapptive",
    dealpage: "View",
    amountinvested: "7,59,900 USD",
    ceo: "-",
    boid: "NA",
    moic: "-",
    currentvaluation: "55,43,623 INR 03/06/1997",
  },
  {
    id: 8,
    name: "MM",
    dealpage: "View",
    amountinvested: "1,00,00,000 INR",
    ceo: "-",
    boid: "Abhaya Kumar Shankar/Shobanaa Anand",
    moic: "-",
    currentvaluation: "55,43,623 INR 03/06/1997",
  },
  {
    id: 9,
    name: "Myntra",
    dealpage: "View",
    amountinvested: "1,15,02,000 INR",
    ceo: "Kunal Kappor",
    boid: "Bhanu Sahu/Chetan Kothawade",
    moic: "11,000 INR",
    currentvaluation: "55,43,623 INR 03/06/1997",
  },
];

const Exited = () => {
document.title = "SCIP | Invested";

// Default Accordion

  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");

const toggleModel = (name: any) => {
  setModelName(name);
};

  return (
    <>
      <React.Fragment>
        <div className="mb-none profile-wrapper">
          <Row>
            <Col>
              <h3 className="text-white mb-4">Exited Companies</h3>
            </Col>
          </Row>
        </div>
        <Container fluid>
        <Row>
          <Card className="p-2 pb-4">
            <CardHeader className="border-0 px-2">
              <Row className="g-0 align-items-center mb-0">
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
                    <button type="button" className="btn btn-brand-theme">
                      <i className="ri-download-2-line align-bottom me-1"></i>
                      Download
                    </button>
                  </div>
                </div>
              </Row>
            </CardHeader>

            <Row className="g-2 px-2">
              <Col md={3} className="border-box">
                <Card className="card-body mb-0">
                  <div className="text-center">
                    <h4 className="fs-15 fw-semibold mb-1">
                      <span
                        className="counter-value"
                        data-target="Not Available"
                      >
                        7,59,900 USD
                      </span>
                    </h4>
                    <h5 className="text-muted fs-13 mb-0">
                      Total in USD
                      <Link to="#" onClick={(e) => toggleModel("MOICCurrency")}>
                        <i className="ri-information-line fs-16 align-middle ms-1"></i>
                      </Link>
                    </h5>
                  </div>
                </Card>
              </Col>
              <Col md={3} className="border-box">
                <Card className="card-body mb-0">
                  <div className="text-center">
                    <h4 className="fs-15 fw-semibold mb-1">
                      <span
                        className="counter-value"
                        data-target="Not Available"
                      >
                        7,35,17,500 INR
                      </span>
                    </h4>
                    <h5 className="text-muted fs-13 mb-0">
                    Total MOIC In INR
                      <Link to="#">
                        <i className="ri-information-line fs-16 align-middle ms-1"></i>
                      </Link>
                    </h5>
                  </div>
                </Card>
              </Col>
              <Col md={3} className="border-box">
                <Card className="card-body mb-0">
                  <div className="text-center">
                    <h4 className="fs-15 fw-semibold mb-1">
                      <span
                        className="counter-value"
                        data-target="Not Available"
                      >
                        6
                      </span>
                    </h4>
                    <h5 className="text-muted fs-12 mb-0">
                    Investment Count 
                      <Link to="#">
                        <i className="ri-information-line fs-16 align-middle ms-1"></i>
                      </Link>
                    </h5>
                  </div>
                </Card>
              </Col>
             
            </Row>
            <div className="table-responsive table-card mt-3 px-4">
              <table className="table align-middle table-nowrap table-striped-columns mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Deal Page</th>
                    <th scope="col">Amount Invested</th>
                    <th scope="col">CEO</th>
                    <th scope="col">Board Observer/Investment Director</th>
                    <th scope="col">MOIC</th>
                    <th scope="col">Current Valuation/Date</th>
                    <th scope="col">Get in Touch</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.length &&
                    data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td><Link to="#" className="text-dark">{item.name}</Link></td>
                          <td><Link to="#" className="text-dark">{item.dealpage}</Link></td>
                          <td>{item.amountinvested}</td>
                          <td>{item.ceo}</td>
                          <td>{item.boid}</td>
                          <td>{item.moic}</td>
                          <td>{item.currentvaluation}</td>
                          <td className="social-icons">
                                                <ul className="list-inline hstack gap-2 mb-0">
                                                    <li className="list-inline-item">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                href="#"
                                                                className="btn btn-soft-secondary btn-sm dropdown"
                                                                tag="button"
                                                            >
                                                                <i className="ri-more-fill align-middle"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-end">
                                                                <DropdownItem>
                                                                    <i className="ri-group-line fs-20 align-middle me-1"></i> Deal Angel Group
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <i className="ri-message-2-line fs-20 align-middle me-1"></i> Messages
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <i className="ri-message-2-line fs-20 align-middle me-1"></i> Sale Holdings
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </li>
                                                </ul>
                                            </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="gridjs-footer mt-4 px-2">
                    <div className="gridjs-pagination">
                      <div className="gridjs-summary" title="Total Count">
                        Total Count : 1
                      </div>
                      <div className="gridjs-pages">
                        <Pagination
                          className="mb-0"
                          style={{ marginBottom: "0" }}
                        >
                          <PaginationItem>
                            <PaginationLink first href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#" previous />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink className="active" href="#">
                              1
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#" next />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink last href="#" />
                          </PaginationItem>
                        </Pagination>
                      </div>
                    </div>
            </div>
          </Card>
        </Row>
        </Container>

        <MOICCurrency
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "MOICCurrency" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      </React.Fragment>
    </>
  );
};

export default Exited;
