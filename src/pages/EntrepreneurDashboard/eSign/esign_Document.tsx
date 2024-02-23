import React, { useState, useMemo } from "react";
import { Col, Container, Row, Card, CardBody, Input } from "reactstrap";

//Images
import profileBg from "../../../assets/images/profile-bg.jpg";

const esign_Document = () => {
  const data = [
    {
      id: 1,
      SrNo: "1",
      Title: "Test",
      DocumentId: "ypyM34D",
      Status: "Completed",
      UpdatedDate: "16/05/2021 05:23 PM",
    },
    {
      id: 2,
      SrNo: "2",
      Title: "Dov",
      DocumentId: "dxxYiUy",
      Status: "Pending",
      UpdatedDate: "16/05/2021 05:25 PM",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="eSign" pageTitle="eSign Document" />*/}
          <div className="profile-foreground position-relative">
            <div className="profile-wid-bg">
              <img src={profileBg} alt="" className="profile-wid-img" />
            </div>
          </div>
          <div className="mb-none profile-wrapper">
            <Row className="g-0">
              <Col>
                <h3 className="text-white mb-4">eSign Document</h3>
              </Col>
            </Row>
            <Card>
              <CardBody>
                <Row className="mb-3">
                  <Col lg={4}>
                    <div className="mb-2">
                      <div className="search-box">
                        <Input
                          type="text"
                          className="form-control search"
                          placeholder="Search"
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Card className="mb-1 g-2">
                      <CardBody>
                        <div className="table-responsive table-card">
                          <table className="table align-middle table-nowrap table-striped-columns mb-0">
                            <thead className="table-light">
                              <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Title</th>
                                <th scope="col">Document Id</th>
                                <th scope="col">Status</th>
                                <th scope="col">Updated Date</th>
                                <th scope="col">Action </th>
                              </tr>
                            </thead>
                            <tbody>
                              {data &&
                                data.length &&
                                data.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{item.SrNo}</td>
                                      <td>{item.Title} </td>
                                      <td>{item.DocumentId}</td>
                                      <td>
                                        <span
                                          className={
                                            item.Status === "Pending"
                                              ? "badge badge-soft-warning fs-12"
                                              : "badge badge-soft-success fs-12"
                                          }
                                        >
                                          {item.Status}
                                        </span>
                                      </td>
                                      <td>{item.UpdatedDate}</td>
                                      <td>&nbsp;</td>
                                      {/*<td className="social-icons">
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
                                                                                    <i className="ri-file-line fs-20 align-middle me-1"></i> .
                                                                </DropdownItem>

                                                                            </DropdownMenu>
                                                                        </UncontrolledDropdown>
                                                                    </li>
                                                                </ul>
                                                            </td> */}
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default esign_Document;
