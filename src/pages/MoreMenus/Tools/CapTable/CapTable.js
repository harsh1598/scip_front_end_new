import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import Select from "react-select";

const CapTable = () => {

    document.title = `${ProjectName} | visualization`;

    const CompanyStageList = [
        { value: 'Beta', label: 'Beta' },
        { value: 'Concept', label: 'Concept' },
        { value: 'Idea', label: 'Idea' },
        { value: 'PreRevenue ', label: 'Pre Revenue ' },
        { value: 'Revenue ', label: 'Revenue' },
        { value: 'All ', label: 'All ' }
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Analytics" pageTitle="Analytics" location={"/admin/menu"} />

                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <Card>
                                <CardBody>
                                    <div className="text-center">
                                        <Row className="justify-content-center mt-2">
                                            <Col lg={12}>
                                                <div className="mb-2">
                                                    <Select
                                                        isClearable={true}
                                                        // isMulti
                                                        name="profile"
                                                        // value={formData.profile?formData.profile:[]}
                                                        // onChange={e=>handleChange("profile", e, 'multi')}
                                                        options={CompanyStageList}
                                                    />
                                                </div>
                                                <div>
                                                    <Select
                                                        isClearable={true}
                                                        // isMulti
                                                        name="profile"
                                                        // value={formData.profile?formData.profile:[]}
                                                        // onChange={e=>handleChange("profile", e, 'multi')}
                                                        options={CompanyStageList}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center mt-3">
                                            <Col sm={7} xs={8}>
                                                <div className="mb-2">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary w-100"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    ><i className="ri-file-excel-line align-bottom me-1"></i>{" "}
                                                        Download Sample CSV
                                                    </button>
                                                </div>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary w-100"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    ><i className="ri-file-excel-line align-bottom me-1"></i>{" "}
                                                        Download or Import
                                                    </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default CapTable;
