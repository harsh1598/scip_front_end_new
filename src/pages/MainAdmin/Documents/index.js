import React, { useState } from "react";
import { 
  Card, 
  CardBody, 
  Col, 
  Container, 
  Row,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Tab from "./Tab";

const MainAdmin = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Documents" pageTitle="Documents" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Tab />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MainAdmin;
