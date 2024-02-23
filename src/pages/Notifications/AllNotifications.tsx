import React, { useState } from "react";
import BreadCrumb from '../../Components/Common/BreadCrumb';
import { Button, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
 

// images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";


const AllNotifications = () => {
  document.title = "SCIP | Notifications";

  const [rightColumn, setRightColumn] = useState(false);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="All Notifications" pageTitle="Notifications" />
          <Card>
            <CardHeader>
              <h4 className="card-title mb-0">ALl Notificatons</h4>
            </CardHeader>

            <CardBody>

              <div id="contact-existing-list">

                <SimpleBar className="mx-n3">
                  <ListGroup className="list mb-0" flush>
                    <ListGroupItem data-id="01">
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0 me-3">
                          <div>
                            <img className="avatar-xs rounded-circle" alt="" src={avatar1} />
                          </div>
                        </div>

                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Jonny Stromberg</Link></h5>
                          <p className="contact-born text-muted mb-0">New updates for ABC Theme</p>
                        </div>

                        <div className="flex-shrink-0 ms-2">
                          <div className="fs-11 text-muted">17/07/2023 07:42 PM</div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem data-id="02">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div>
                            <img className="avatar-xs rounded-circle" alt="" src={avatar2} />
                          </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Jonas Arnklint</Link></h5>
                          <p className="contact-born text-muted mb-0">Bug Report - abc theme</p>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                          <div className="fs-11 text-muted">17/07/2023 06:04 PM</div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem data-id="03">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div>
                            <img className="avatar-xs rounded-circle" alt="" src={avatar3} />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Martina Elm</Link></h5>
                          <p className="contact-born text-muted mb-0">Startup Funding Proposal has been added by saanty shah-Shanti.Furms Dear An That The Growth Of OTT Platfo Not Be Wrong To Say T</p>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                          <div className="fs-11 text-muted">03/07/2023 12:52 PM</div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem data-id="04">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div>
                            <img className="avatar-xs rounded-circle" alt="" src={avatar4} />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Gustaf Lindqvist</Link></h5>
                          <p className="contact-born text-muted mb-0">Rubric review added by raw shaw for Beta#23. Click on the link to view deal page. Click here to view</p>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                          <div className="fs-11 text-muted">26/06/2023 01:01 PM</div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem data-id="04">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div>
                            <img className="avatar-xs rounded-circle" alt="" src={avatar4} />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Gustaf Lindqvist</Link></h5>
                          <p className="contact-born text-muted mb-0">Startup Funding Proposal has been added by Flintop Hauf-Fliptoe Pvt Ltd</p>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                          <div className="fs-11 text-muted">26/06/2023 01:01 PM</div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem data-id="04">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div>
                            <img className="avatar-xs rounded-circle" alt="" src={avatar4} />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Gustaf Lindqvist</Link></h5>
                          <p className="contact-born text-muted mb-0">Startup Funding Proposal has been added by pentaguun fice-Pentagun-firm</p>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                          <div className="fs-11 text-muted">26/06/2023 01:01 PM</div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem data-id="04">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div>
                            <img className="avatar-xs rounded-circle" alt="" src={avatar4} />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Gustaf Lindqvist</Link></h5>
                          <p className="contact-born text-muted mb-0">Deal comment updated by Smriti Misra for Gitco. Click on the link to view deal page. Click here to view</p>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                          <div className="fs-11 text-muted">26/06/2023 01:01 PM</div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem data-id="02">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div>
                            <img className="avatar-xs rounded-circle" alt="" src={avatar2} />
                          </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="contact-name fs-13 mb-1"><Link to="#" className="link text-dark">Jonas Arnklint</Link></h5>
                          <p className="contact-born text-muted mb-0">Bug Report - abc theme</p>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                          <div className="fs-11 text-muted">17/07/2023 06:04 PM</div>
                        </div>
                      </div>
                    </ListGroupItem>

                  </ListGroup>
                </SimpleBar>
              </div>
            </CardBody>
          </Card>

          <div className="d-flex justify-content-end">
            <Pagination>
              <PaginationItem>
                <PaginationLink
                  first
                  href="#"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  previous
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="active" href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
             
              <PaginationItem>
                <PaginationLink
                  href="#"
                  next
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  last
                />
              </PaginationItem>
            </Pagination>
          </div>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default AllNotifications;
