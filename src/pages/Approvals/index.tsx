import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { ProjectName } from "../../Components/constants/layout";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Tab from "./Tab";

const Approvals = () => {
  // document.title = "Approvals | Velzon - React Admin & Dashboard Template";
  document.title = `${ProjectName} | Approvals `;

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            {...{ title: "Approvals", pageTitle: "Approvals", location: "" }}
          />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Tab/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Approvals;
