import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import {
  CardHeader,
  Card,
  Col,
  Container,
  Row,
  Input,
  PaginationItem,
  Pagination,
  PaginationLink,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
} from "reactstrap";

const data = [
  {
    id: 1,
    status: "Pending",
    paymentdescription: "Payment for membership",
    amount: "1 INR",
    duedate: "22/11/2023",
   },
   {
    id: 2,
    status: "Pending",
    paymentdescription: "Bill Pay",
    amount: "2 INR",
    duedate: "20/09/2023",
   },
   {
    id: 3,
    status: "Pending",
    paymentdescription: "Bill PayPayment for membership",
    amount: "59,000 INR",
    duedate: "20/09/2023",
   },
   {
    id: 4,
    status: "Pending",
    paymentdescription: "Payments Test",
    amount: "28,800 INR",
    duedate: "30/08/2023",
   },
];

const datapastpayment = [
  {
    id: 1,
    billingno: "1693895731101",
    transaction: "NA",
    email: "iu1@yopmail.com",
    amount: "95,000.55 INR",
    transactioninfo: "Mode: NA",
    paymentdate: "05/09/2023",
    status:"Success",
  },
  {
    id: 2,
    billingno: "1693895731101",
    transaction: "NA",
    email: "iu1@yopmail.com",
    amount: "95,000.55 INR",
    transactioninfo: "Mode: NA",
    paymentdate: "05/09/2023",
    status:"NA",
  },
  
];

const Payment = () => {
  document.title = "SCIP | Payment";

  // Default Accordion

  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");

  const toggleModel = (name: any) => {
    setModelName(name);
  };

  const [activityTab, setActivityTab] = useState("1");

  const toggleActivityTab = (tab: any) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  return (
    <>
      <React.Fragment>
        <div className="mb-none profile-wrapper">
          <Row>
            <Col>
              <h3 className="text-white mb-4">Payment</h3>
            </Col>
          </Row>
        </div>
        <Container fluid className="px-0">
          <Row>
            <Col lg={12}>
              <Card className="pt-2">
                <CardHeader className="align-items-center mobile-tabs">
                  <div className="flex-shrink-0 ml-auto">
                    <Nav
                      className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
                      role="tablist">
                      <NavItem>
                        <NavLink
                          to="#budget-tab"
                          className={classnames({
                            active: activityTab === "1",
                          })}
                          onClick={() => {
                            toggleActivityTab("1");
                          }}
                        >
                          Pending Payment
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to="#financial-tab"
                          className={classnames({
                            active: activityTab === "2",
                          })}
                          onClick={() => {
                            toggleActivityTab("2");
                          }}
                        >
                          Past Payment
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </CardHeader>
                <TabContent
                  activeTab={activityTab}
                  className="text-muted"
                  >
                  <TabPane tabId="1">
                    <div className="accordion accordion-flush">
                        <div className="table-responsive table-card px-3 py-3 mt-1">
                          <table className="table align-middle table-nowrap table-striped-columns mb-0">
                            <thead className="table-light">
                              <tr>
                                <th scope="col">Status</th>
                                <th scope="col">Payment Description</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data &&
                                data.length &&
                                data.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <td><span className="badge badge-soft-warning fs-12">{item.status}</span></td>
                                      <td>{item.paymentdescription}</td>
                                      <td>{item.amount}</td>
                                      <td>{item.duedate}</td>
                                      <td>
                                       <Link to="#"><i className="ri-error-warning-fill fs-20 align-bottom me-2"></i></Link> 
                                       <Link to="#"><span className="badge badge-soft-success fs-12">Make Payment</span></Link>
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                        <div className="gridjs-footer my-3 px-2 pt-0">
                          <div className="gridjs-pagination">
                            <div className="gridjs-summary" title="Total Count">
                              Total Count : 1
                            </div>
                            <div className="gridjs-pages">
                              <Pagination
                                className="mb-0 pt-0"
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
                      </div>
                    
                  </TabPane>
                  <TabPane tabId="2">
                    
                      <div className="accordion accordion-flush">
                      <div className="table-responsive table-card px-3 py-4">
                          <table className="table align-middle table-nowrap table-striped-columns">
                            <thead className="table-light">
                              <tr>
                                <th scope="col">Billing No.</th>
                                <th scope="col">Transaction No.</th>
                                <th scope="col">Email</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Transaction Info</th>
                                <th scope="col">Payment Date</th>
                                <th scope="col">Status</th>
                               </tr>
                            </thead>
                            <tbody>
                              {datapastpayment &&
                                datapastpayment.length &&
                                datapastpayment.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{item.billingno}</td>
                                      <td>{item.transaction}</td>
                                      <td>{item.email}</td>
                                      <td>{item.amount}</td>
                                      <td>{item.transactioninfo}</td>
                                      <td>{item.paymentdate}</td>
                                      <td><span className="badge badge-soft-success fs-12">{item.status}</span></td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    
                  </TabPane>

                </TabContent>
              </Card>
            </Col>
          </Row>
        </Container>
 
       </React.Fragment>
    </>
  );
};

export default Payment;
