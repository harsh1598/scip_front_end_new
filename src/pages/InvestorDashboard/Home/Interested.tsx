import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import AmountsCurrency from "./Modals/AmountsCurrency";

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
    name: "Adam Sons",
    dealpage: "View",
    amountinvested: "2,000 INR",
    ceo: "Kushal Mehta",
    leadinvestor: "Abhaya Kumar Shankar",
    status: "Book building",
    requiredaction: "-",
  },
  {
    id: 2,
    name: "Blacklist",
    dealpage: "View",
    amountinvested: "1,00,00,051 INR",
    ceo: "Pranay J",
    leadinvestor: "NA",
    status: "Book building",
    requiredaction: "-",
  },
  {
    id: 3,
    name: "Delta",
    dealpage: "View",
    amountinvested: "1,00,00,000 INR",
    ceo: "--",
    leadinvestor: "Farah Khan",
    status: "Book building",
    requiredaction: "-",
  },
];

const Interested = () => {
  document.title = "SCIP | Interested";

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
              <h3 className="text-white mb-4">Interested Companies</h3>
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
                          Initial Commitment
                        </span>
                      </h4>
                      <h5 className="text-muted fs-13 mb-0">
                         1,16,29,59,73,015 INR
                        <Link
                          to="#"
                          onClick={(e) => toggleModel("AmountsCurrency")}
                        >
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
                          Final Commitment
                        </span>
                      </h4>
                      <h5 className="text-muted fs-13 mb-0">
                          1,00,14,78,98,960 INR
                        <Link to="#"
                          onClick={(e) => toggleModel("AmountsCurrency")}>
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
                      <th scope="col">Name of the Investment</th>
                      <th scope="col">Deal Page</th>
                      <th scope="col">Amount Invested</th>
                      <th scope="col">CEO</th>
                      <th scope="col">Lead Investor</th>
                      <th scope="col">Status</th>
                      <th scope="col">Required Action</th>
                      <th scope="col">Get in Touch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.length &&
                      data.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <Link to="#" className="text-dark">
                                {item.name}
                              </Link>
                            </td>
                            <td>
                              <Link to="#" className="text-dark">
                                {item.dealpage}
                              </Link>
                            </td>
                            <td>{item.amountinvested}</td>
                            <td>{item.ceo}</td>
                            <td>{item.leadinvestor}</td>
                            <td>{item.status  }</td>
                            <td>{item.requiredaction}</td>
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
                                        <i className="ri-group-line fs-20 align-middle me-1"></i>{" "}
                                        Deal Angel Group
                                      </DropdownItem>
                                      <DropdownItem>
                                        <i className="ri-message-2-line fs-20 align-middle me-1"></i>{" "}
                                        Messages
                                      </DropdownItem>
                                      <DropdownItem>
                                        <i className="ri-message-2-line fs-20 align-middle me-1"></i>{" "}
                                        Sale Holdings
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
                    <Pagination className="mb-0" style={{ marginBottom: "0" }}>
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
        <AmountsCurrency
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "AmountsCurrency" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      </React.Fragment>
    </>
  );
};

export default Interested;
