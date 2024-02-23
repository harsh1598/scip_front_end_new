import React from "react";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import { Link } from "react-router-dom";
import pdf from "../../../assets/images/pdf.png";

const PDFCompare = () => {

    document.title = `${ProjectName} | PDF Result`;

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Diff Checker" pageTitle="Diff Checker" location={"/admin/menu"} />
                    <Row className="g-0 align-items-center mb-2">
                        <Col sm={6} lg={6}>
                            <div className="text-center">
                                <h6>PDF file 1 *</h6>
                            </div>
                            <Card className="p-2">
                                <CardBody className="text-center">
                                    <div className="mb-4">
                                        <img src={pdf} alt="" className="avatar-sm" style={{ width: "90px", height: "90px" }} />
                                    </div>
                                    <h5><Link className="mb-1 fs-13">Drop file to upload</Link></h5>
                                    <h5><Link className="mb-1 fs-13">The Maximum support file size is 20 mb</Link></h5>
                                    <h5><Link className="fs-13">Accecpted file type:pdf </Link></h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={6} lg={6}>
                            <div className="text-center">
                                <h6>PDF file 2 *</h6>
                            </div>
                            <Card className="p-2">
                                <CardBody className="text-center">
                                    <div className="mb-4">
                                        <img src={pdf} alt="" className="avatar-sm" style={{ width: "90px", height: "90px" }} />
                                    </div>
                                    <h5><Link className="mb-1 fs-13">Drop file to upload</Link></h5>
                                    <h5><Link className="mb-1 fs-13">The Maximum support file size is 20 mb</Link></h5>
                                    <h5><Link className="fs-13">Accecpted file type:pdf </Link></h5>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <div className="hstack gap-2 justify-content-center">
                        <button className="btn btn-success btn-md"> Find difference</button>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default PDFCompare;
