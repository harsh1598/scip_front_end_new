import React, { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Col, Row, Container, Card, CardBody } from "reactstrap";

const FeedbackCommentArchive = () => {
  const [isUploadFile, setIsUploadFile] = useState(false);
  const toggleUploadFile = () => {
    setIsUploadFile(!isUploadFile);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Feedback/Comment Archive"
            pageTitle="Entrepreneur"
            location="/entrepreneur"
          />
          <Card>
            <CardBody>
              <Row>
                <Col lg={12}>
                  <h5 className="pb-4">Feedback/Response Archive</h5>
                  <div className="table-responsive table-card">
                    <table className="table align-middle table-nowrap table-striped-columns mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">Company & Campaign Name</th>
                          <th scope="col">Document</th>
                          <th scope="col">Feedback/Response</th>
                          <th scope="col">From</th>
                          <td>Added Date</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={5}>
                            <div
                              class="alert alert-info text-center mb-0"
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
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Row>
                <Col lg={12}>
                  <h5 className="pb-4">Comment/Response Archive</h5>
                  <div className="table-responsive table-card">
                    <table className="table align-middle table-nowrap table-striped-columns mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">Company & Campaign Name</th>
                          <th scope="col">Document</th>
                          <th scope="col">Comment/Response</th>
                          <th scope="col">From</th>
                          <td>Added Date</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={5}>
                            <div
                              class="alert alert-info text-center mb-0"
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
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FeedbackCommentArchive;
