import React, { useState } from "react";
import classnames from "classnames";
import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Payment = () => {
  const toggleModel = (name) => {
    setModelName(name);
  };

  const [modelName, setModelName] = useState("");

  // Custom Tabs Bordered
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Payment"
            pageTitle="Syndicate"
            location="/payment"
          />
          <Row>
            <Col lg={12}>
              <Card id="leadsList">
                <CardBody>
                  <CardHeader className="px-0">
                    <Nav
                      tabs
                      className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0 nav nav-tabs"
                    >
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "1",
                          })}
                          onClick={() => {
                            toggleCustom("1");
                          }}
                        >
                          Entrepreneur
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "2",
                          })}
                          onClick={() => {
                            toggleCustom("2");
                          }}
                        >
                          Investor
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "3",
                          })}
                          onClick={() => {
                            toggleCustom("3");
                          }}
                        >
                          Syndicate
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: customActiveTab === "4",
                          })}
                          onClick={() => {
                            toggleCustom("4");
                          }}
                        >
                          SME Advisor
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </CardHeader>
                  <TabContent
                    activeTab={customActiveTab}
                    className="text-muted mt-3"
                  >
                    <TabPane tabId="1" id="home1">
                      <Container fluid>
                        <Row>
                          <Col lg={12}>
                            <div className="table-responsive table-card mt-2">
                              <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                <thead className="table-light">
                                  <tr>
                                    <th scope="col">Payment</th>
                                    <th scope="col">
                                      Amount Currently Charged
                                    </th>
                                    <th scope="col">Updated Date</th>
                                    <th scope="col" style={{ width: "150px" }}>
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td colSpan={4} className="text-center">
                                      <div
                                        class="alert alert-info"
                                        role="alert"
                                      >
                                        No Records Found.
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </TabPane>
                    <TabPane tabId="2">
                      <Container fluid>
                        <Row>
                          <Col lg={12}>
                            <div className="table-responsive table-card mt-2">
                              <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                <thead className="table-light">
                                  <tr>
                                    <th scope="col">Payment</th>
                                    <th scope="col">
                                      Amount Currently Charged
                                    </th>
                                    <th scope="col">Updated Date</th>
                                    <th scope="col" style={{ width: "150px" }}>
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td colSpan={4} className="text-center">
                                      <div
                                        class="alert alert-info"
                                        role="alert"
                                      >
                                        No Records Found.
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </TabPane>
                    <TabPane tabId="3">
                      <Container fluid>
                        <Row>
                          <Col lg={12}>
                            <div className="table-responsive table-card mt-2">
                              <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                <thead className="table-light">
                                  <tr>
                                    <th scope="col">Payment</th>
                                    <th scope="col">
                                      Amount Currently Charged
                                    </th>
                                    <th scope="col">Updated Date</th>
                                    <th scope="col" style={{ width: "150px" }}>
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td colSpan={4} className="text-center">
                                      <div
                                        class="alert alert-info"
                                        role="alert"
                                      >
                                        No Records Found.
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </TabPane>
                    <TabPane tabId="4">
                      <Container fluid>
                        <Row>
                          <Col lg={12}>
                            <div className="table-responsive table-card mt-2">
                              <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                <thead className="table-light">
                                  <tr>
                                    <th scope="col">Payment</th>
                                    <th scope="col">
                                      Amount Currently Charged
                                    </th>
                                    <th scope="col">Updated Date</th>
                                    <th scope="col" style={{ width: "150px" }}>
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td colSpan={4} className="text-center">
                                      <div
                                        class="alert alert-info"
                                        role="alert"
                                      >
                                        No Records Found.
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Payment;
