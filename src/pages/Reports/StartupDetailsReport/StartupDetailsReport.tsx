import React, { useState } from "react";
import { Card, CardBody, Col, Row } from 'reactstrap';
import StartupDetailsReportFilter from "./StartupDetailsReportFilter";

interface propData {
    acessMenu: any
};


const StartupDetailsReport = (props: propData) => {
    const [modelName, setModelName] = useState("");

    const toggle = (name: any) => {
        setModelName(name);
    };

    return (
        <React.Fragment>
            <div className="team-list list-view-filter">
                <Card className="team-box">
                    <CardBody className="px-4">
                        <Row className="align-items-center team-row">
                            <Col lg={4}>
                                <div className="team-profile-img ">
                                    <div className="team-content">
                                        <p className="fs-15 mb-1">Startup Details Report</p>
                                    </div>
                                </div>
                            </Col>
                            {props.acessMenu.is_export == 1 &&
                            <Col lg={2} className="col">
                                <div className="text-end">
                                    <button type="button" className="btn btn-soft-info" onClick={e => toggle('Filters')}>
                                        <i className="ri-filter-3-line align-bottom me-1"></i>
                                        {" "}Filters
                                    </button>
                                </div>
                            </Col>
}
                        </Row>
                    </CardBody>
                </Card>
            </div>
            <StartupDetailsReportFilter
                show={modelName === 'Filters' ? true : false}
                onCloseClick={() => setModelName("")}
                acessMenuData={props.acessMenu}
            />
        </React.Fragment>
    );
};

export default StartupDetailsReport;
