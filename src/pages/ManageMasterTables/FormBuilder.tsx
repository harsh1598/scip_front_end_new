import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { ProjectName } from "../../Components/constants/layout";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import FormBuildersTab from "./FormBuildersTab";

const FormBuilder = () => {
  document.title = `${ProjectName} | Form Builder `;

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
        <BreadCrumb title="Form Buildersad" pageTitle="Form Builder" location={"/admin/menu"} />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <FormBuildersTab/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormBuilder;
