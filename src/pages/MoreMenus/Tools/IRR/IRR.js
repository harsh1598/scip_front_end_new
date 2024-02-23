import React from "react";
import { Card, CardHeader, Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import AngelNetwork from "./AngelNetwork";
import Investor from "./Investor";

const IRR = () => {

    document.title = `${ProjectName} | visualization`;
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="IRR" pageTitle="IRR" location={"/admin/menu"} />
                    {/* dashboard-data*/}
                    <Row>
                    <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center mb-0">
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                           
                                                <button type="button" className="btn btn-soft-info">
                                                    <i className="ri-file-excel-line align-bottom me-1"></i>{" "}
                                                    Export
                                                </button>
                                                <button type="button" className="btn btn-soft-info">
                                                    <i className="ri-file-excel-line align-bottom me-1"></i>{" "}
                                                    Import
                                                </button>
                                            </div>
                                        </div>
                                    </Row>
                                </CardHeader>
                            </Card>
                        </Col>
                        <Col sm={12} lg={6}>
                            <AngelNetwork />
                        </Col>
                        <Col sm={12} lg={6}>
                            <Investor />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default IRR;
