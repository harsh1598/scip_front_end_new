import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Notes from "./Modals/Notes";

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
    srno: "1",
    task: "Application Review",
    requestedate: "29/06/2023",
    requesteby: "Smriti Misra",
    taskfor: "Guildford shd",
    status: "Pending",
  },
  {
    id: 2,
    srno: "2",
    task: "Presentation to initial commitments",
    requestedate: "29/06/2023",
    requesteby: "Smriti Misra",
    taskfor: "Planta",
    status: "Pending",
  },
  {
    id: 3,
    srno: "3",
    task: "Presentation to initial commitments",
    requestedate: "29/06/2023",
    requesteby: "Smriti Misra",
    taskfor: "TOCH",
    status: "Pending",
  },
  {
    id: 4,
    srno: "4",
    task: "Presentation to initial commitments",
    requestedate: "29/06/2023",
    requesteby: "Smriti Misra",
    taskfor: "FIDO",
    status: "Pending",
  },
  {
    id: 5,
    srno: "5",
    task: "Presentation to initial commitments",
    requestedate: "29/06/2023",
    requesteby: "Smriti Misra",
    taskfor: "Ren",
    status: "Pending",
  },
  {
    id: 6,
    srno: "6",
    task: "Investment",
    requestedate: "29/06/2023",
    requesteby: "Smriti Misra",
    taskfor: "Watcon",
    status: "Pending",
  },
  {
    id: 7,
    srno: "7",
    task: "Investment",
    requestedate: "29/06/2023",
    requesteby: "Smriti Misra",
    taskfor: "Del",
    status: "Pending",
  },
];

const datainvestor = [
  {
    id: 1,
    name: "Watcon",
    dealpage: "View",
    role: "Board Observer",
  },
  {
    id: 2,
    name: "Relox Data",
    dealpage: "View",
    role: "Investment Director",
   },
];

const MyTask = () => {
  document.title = "SCIP | MyTask";

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
              <h3 className="text-white mb-4">My Task</h3>
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
                          My Task
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
                          As on Investor
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
                        <Row className="p-3">
                          <Col lg={12}>
                            <div className="search-box">
                              <Input
                                type="text"
                                className="form-control search"
                                placeholder="Search"
                              />
                              <i className="ri-search-line search-icon"></i>
                            </div>
                          </Col>
                          <Col lg={12} className="pt-3">
                            <b>Note:</b> This tab gives you access to all tasks you will do on the platform. When you click on the ‘Task’ column two the task tabs will open. The titles of the tabs are self-explanatory. If you click on the task you will be taken to the Tab where all data is available to complete the task.
                          </Col>
                        </Row>
                        <div className="table-responsive table-card px-3 py-3">
                          <table className="table align-middle table-nowrap table-striped-columns mb-0">
                            <thead className="table-light">
                              <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Task</th>
                                <th scope="col">Requested By Date</th>
                                <th scope="col">Requested By</th>
                                <th scope="col">Task For</th>
                                <th scope="col">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data &&
                                data.length &&
                                data.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{item.srno}</td>
                                      <td><Link to="#" className="text-dark">{item.task}</Link></td>
                                      <td>{item.requestedate}</td>
                                      <td><Link to="#" className="text-dark">{item.requesteby}</Link></td>
                                      <td><Link to="#" className="text-dark">{item.taskfor}</Link></td>
                                      <td><span className="badge badge-soft-warning fs-12">{item.status}</span></td>
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
                                <th scope="col">Name</th>
                                <th scope="col">Deal Page</th>
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>
                               </tr>
                            </thead>
                            <tbody>
                              {datainvestor &&
                                datainvestor.length &&
                                datainvestor.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{item.name}</td>
                                      <td><Link to="">{item.dealpage}</Link></td>
                                      <td>{item.role}</td>
                                      <td><Link to="#" id="Notes"
                          onClick={(e) => toggleModel("Notes")}>
                                      <i className="ri-edit-box-line"></i>  
                                      </Link>
                                      </td>
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
 
        <Notes
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Notes" ? true : false}
        onCloseClick={() => setModelName("")}
      />


      </React.Fragment>
    </>
  );
};

export default MyTask;
