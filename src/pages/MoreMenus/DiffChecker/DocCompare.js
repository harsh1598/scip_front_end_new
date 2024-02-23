import React, { useState } from "react";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import { Link } from "react-router-dom";
import doc from "../../../assets/images/doc.png";

const DocCompare = () => {

    document.title = `${ProjectName} | PDF Result`;
    const [show, setShow] = useState(false);

    const showButton = () => {
        setShow(true);
    };

    const hideButton = () => {
        setShow(false);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Diff Checker" pageTitle="Diff Checker" location={"/admin/menu"} />
                    <Row className="g-0 align-items-center mb-2">
                        <Col sm={6} lg={6}>
                            <div className="text-center">
                                <h6>Doc file 1 * {''}
                                    {
                                        show === true ?
                                            <>
                                                <button className="btn btn-primary btn-sm" onClick={e => hideButton()}>upload Doc File</button>
                                            </>
                                            :
                                            <>
                                                <button className="btn btn-primary btn-sm" onClick={e => showButton()}>Copy text</button>
                                            </>
                                    }

                                </h6>
                            </div>
                            {
                                show === true ?
                                    <>
                                        <Card className="p-2">
                                            <CardBody className="text-center">
                                                <textarea className="form-control"
                                                    id="note" placeholder=""
                                                    rows="5" defaultValue=""></textarea>
                                            </CardBody>
                                        </Card>
                                    </>
                                    :
                                    <>
                                        <Card className="p-2">
                                            <CardBody className="text-center">
                                                <div className="mb-4">
                                                    <img src={doc} alt="" className="avatar-sm" style={{ width: "90px", height: "90px" }} />
                                                </div>
                                                <h5><Link className="mb-1 fs-13">Drop file to upload</Link></h5>
                                                <h5><Link className="mb-1 fs-13">The Maximum support file size is 20 mb</Link></h5>
                                                <h5><Link className="fs-13">Accecpted file type:pdf </Link></h5>
                                            </CardBody>
                                        </Card>
                                    </>
                            }

                        </Col>
                        <Col sm={6} lg={6}>
                            <div className="text-center">
                                <h6>Doc file 1 * {''}
                                    {
                                        show === true ?
                                            <>
                                                <button className="btn btn-primary btn-sm" onClick={e => hideButton()}>upload Doc File</button>
                                            </>
                                            :
                                            <>
                                                <button className="btn btn-primary btn-sm" onClick={e => showButton()}>Copy text</button>
                                            </>
                                    }

                                </h6>
                            </div>
                            {
                                show === true ?
                                    <>
                                        <Card className="p-2">
                                            <CardBody className="text-center">
                                                <textarea className="form-control"
                                                    id="note" placeholder=""
                                                    rows="5" defaultValue=""></textarea>
                                            </CardBody>
                                        </Card>
                                    </>
                                    :
                                    <>
                                        <Card className="p-2">
                                            <CardBody className="text-center">
                                                <div className="mb-4">
                                                    <img src={doc} alt="" className="avatar-sm" style={{ width: "90px", height: "90px" }} />
                                                </div>
                                                <h5><Link className="mb-1 fs-13">Drop file to upload</Link></h5>
                                                <h5><Link className="mb-1 fs-13">The Maximum support file size is 20 mb</Link></h5>
                                                <h5><Link className="fs-13">Accecpted file type:pdf </Link></h5>
                                            </CardBody>
                                        </Card>
                                    </>
                            }

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

export default DocCompare;
