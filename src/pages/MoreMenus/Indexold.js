import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { ProjectName } from "../../Components/constants/layout";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

const Indexold = () => {

    document.title = `${ProjectName} | More Menus`;

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="More Menus" pageTitle="More Menus" />
                    {/* show to mam */}
                    {/* <Row>
                        <Col xl={4} lg={6}>
                            <Card className="card-height-60">
                                <CardHeader className="align-items-center">
                                    <h4 className="card-title mb-0 flex-grow-1">Logs</h4>
                                </CardHeader>
                                <SimpleBar style={{ height: "50px" }}>
                                    <p className="text-muted p-2">(Add/edit tasks in investment workflow ASDfsA edfa ASDFA asdfd )</p>
                                </SimpleBar>
                                <CardBody style={{ height: "100px" }}>
                                    <div className="position-relative d-inline-block">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <UncontrolledTooltip placement="bottom" target="edit">Edit</UncontrolledTooltip>
                                                <Link
                                                    to="#"
                                                    id="edit"
                                                    className="avatar-title bg-soft-success text-success fs-15 rounded" 
                                                >
                                                    <i className="ri-phone-line"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item avatar-xs mb-1">
                                            <UncontrolledTooltip placement="bottom" target="edit1">SzxZ</UncontrolledTooltip>
                                                <Link
                                                    to="#"
                                                    id="edit1"
                                                    className="avatar-title bg-soft-danger text-danger fs-15 rounded"
                                                >
                                                    <i className="ri-mail-line"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-success text-success fs-15 rounded"
                                                >
                                                    <i className="ri-phone-line"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-danger text-danger fs-15 rounded"
                                                >
                                                    <i className="ri-mail-line"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-success text-success fs-15 rounded"
                                                >
                                                    <i className="ri-phone-line"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-danger text-danger fs-15 rounded"
                                                >
                                                    <i className="ri-mail-line"></i>
                                                </Link>
                                            </li> 
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-success text-success fs-15 rounded"
                                                >
                                                    <i className="ri-phone-line"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-danger text-danger fs-15 rounded"
                                                >
                                                    <i className="ri-mail-line"></i>
                                                </Link>
                                            </li> 
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-success text-success fs-15 rounded"
                                                >
                                                    <i className="ri-phone-line"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-danger text-danger fs-15 rounded"
                                                >
                                                    <i className="ri-mail-line"></i>
                                                </Link>
                                            </li>     
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-success text-success fs-15 rounded"
                                                >
                                                    <i className="ri-phone-line"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-danger text-danger fs-15 rounded"
                                                >
                                                    <i className="ri-mail-line"></i>
                                                </Link>
                                            </li>   
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={4} lg={6}>
                            <Card className="card-height-60">
                                <CardHeader className="align-items-center">
                                    <h4 className="card-title mb-0 flex-grow-1">Logs</h4>
                                </CardHeader>
                                <SimpleBar style={{ height: "50px" }}>
                                    <p className="text-muted p-2">(Add/edit tasks in investment workflow ASDfsA edfa ASDFA asdfd )</p>
                                </SimpleBar>
                                <CardBody style={{ height: "100px" }}>
                                    <div className="position-relative d-inline-block">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-success text-success fs-15 rounded"
                                                >
                                                    <i className="ri-phone-line"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-danger text-danger fs-15 rounded"
                                                >
                                                    <i className="ri-mail-line"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-success text-success fs-15 rounded"
                                                >
                                                    <i className="ri-phone-line"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item avatar-xs mb-1">
                                                <Link
                                                    to="#"
                                                    className="avatar-title bg-soft-danger text-danger fs-15 rounded"
                                                >
                                                    <i className="ri-mail-line"></i>
                                                </Link>
                                            </li> 
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row> */}
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Indexold;
