import React from "react";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import { Col, Container, Row } from "reactstrap";

import Syndicate from "./Syndicate";
import Entrepreneur from "./Entrepreneur";
import Investor from "./Investor";

const ToolsSettings = () => {

    document.title = `${ProjectName} | Tools Settings`;

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Tools Settings" pageTitle="Tools Settings" location={true} />
                    <Row>
                        <Col xl={4} lg={4}>
                            <Syndicate />
                        </Col>
                        <Col xl={4} lg={4}>
                            <Entrepreneur />
                        </Col>
                        <Col xl={4} lg={4}>
                            <Investor />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ToolsSettings;
