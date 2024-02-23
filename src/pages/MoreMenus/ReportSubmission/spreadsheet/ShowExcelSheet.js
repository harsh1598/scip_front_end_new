import React from "react";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";

const ShowExcelSheet = () => {

    document.title = `${ProjectName} | View Reports`;
  
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="View Reports" pageTitle="View Reports" location={"/admin/menu"} />
                    <Row className="g-0 align-items-center mb-2">
                        <Col sm={12} lg={12}>
                            <Card className="p-2">
                                <CardBody className="text-center">
                                    
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ShowExcelSheet;
