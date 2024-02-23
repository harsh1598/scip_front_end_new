import React from "react";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import { Col, Container, Row } from "reactstrap";
import Color from "./Color";
import Colortbl from "./Colortbl";
import { useState } from "react";


const ThemeCustomization = () => {

    document.title = `${ProjectName} | Theme Customization Setting`;
    const [data, setData] = useState({});

    const toggleModel = (name, data = {}) => {
        setData({});
        if (data.id) {
            let editData = {
                id: data.id,
                order: data.order,
                color: data.color,
                updateddate: data.updateddate,
                status: data.status,
            }
            setData(editData);
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Theme Customization Setting" pageTitle="Theme Customization Setting" location={true} />
                    <Row>
                        <Col xl={4} lg={4}>
                            <Color data={data}  setData={setData} />
                        </Col>
                        <Col xl={8} lg={8}>
                            <Colortbl data={data}  setData={setData}  toggleModel={toggleModel}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ThemeCustomization;
