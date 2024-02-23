import React, { useState } from "react";
import { Col, Container, Row, CardHeader, Input, Card, CardBody } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import { Fragment } from "react";
import {
    BasicAreaCharts,
    BasicLineCharts
} from "./Charts/Charts";

import PerformanceTrackerFilter from "./PerformanceTrackerFilter";

const PerformanceTracker = () => {

    document.title = `${ProjectName} | Performance Tracker`;
    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggleModel = (name, data = {}) => {
        setModelName(name);
        setFormData({});
        if (data.id) {
            let editData = {
                id: data.id,
                code: data.code,
                period: data.period,
                reportTitle: data.reportTitle,
                document: data.document,
                type: data.type,
            }
            setFormData(editData);
        }
    };

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
    }

    var result = Object.keys(formData).map((key) => [key, formData[key]]);

    const data = [
        {
            id: 1,
            name: "Total Revenue",
            value: "39.00",
            type: 0
        },
        {
            id: 2,
            name: "Total Cost Trend",
            value: "23.08",
            type: 1
        },
        {
            id: 3,
            name: "Total Gross Margin",
            value: "27.00",
            type: 0
        },
        {
            id: 4,
            name: "Total Marketing Exp Revenu Rato",
            value: "7.69",
            type: 0
        },
        {
            id: 5,
            name: "Total Staffcost RevenueRatio",
            value: "28.21",
            type: 0
        },
        {
            id: 6,
            name: "Total CAC",
            value: "100",
            type: 0
        },
        {
            id: 7,
            name: "Total Asset Turnover",
            value: "0",
            type: 0
        },
        {
            id: 8,
            name: "Total Revenue Growth Rate",
            value: "46.15",
            type: 0
        },
        {
            id: 9,
            name: "Total Churn",
            value: "4.00",
            type: 0
        },
        {
            id: 10,
            name: "Total Churn Trend",
            value: "0.20",
            type: 1
        },
        {
            id: 11,
            name: "Total Staff Cost Revenue",
            value: "0.06",
            type: 0
        },
        {
            id: 12,
            name: "Total Conversion",
            value: "30.00",
            type: 0
        },
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Performance Tracker" pageTitle="Performance Tracker" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center mb-2">
                                        <Col sm={4}>
                                            {
                                                Object.values(formData).every(x => x === null || x === '') === false &&
                                                <Row>
                                                    <div className="filter-choices-input">
                                                        <div className="choices">
                                                            <div className="choices__inner">
                                                                <div className="choices__list choices__list--multiple">
                                                                    {result.map((item, index) => {
                                                                        if (item[0] && item[1]) {

                                                                            if (item[1].value) {
                                                                                return <div key={index} className="choices__item choices__item--selectable">{item[1].value} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                                                            } else {
                                                                                return <div key={index} className="choices__item choices__item--selectable">{item[1]} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                                                            }

                                                                        } else { return ''; }
                                                                    })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            }
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('PerformanceTrackerFilter')}>
                                                    <i className="ri-filter-2-line align-bottom me-1"></i>{" "}
                                                    Filters
                                                </button>
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
                    </Row>
                    <Row>
                        {
                            data && data.length && data.map((item, index) => {
                                return <Fragment key={index}>
                                    <Col xl={3} lg={6}>
                                        <Card className="ribbon-box right overflow-hidden">
                                            <CardBody className="text-center p-2">
                                                <p className="text-muted">{item.name}</p>
                                                <h3 className="mt-1 link-success">{item.type === 1 ? "-" : ""}{item.value}</h3>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Fragment>
                            })
                        }
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Sales and total cost to sales trends</h4>
                                </CardHeader>
                                <CardBody>
                                    <div>
                                        <BasicAreaCharts dataColors='["--vz-primary"]' />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Sales and gross margin trends</h4>
                                </CardHeader>
                                <CardBody>
                                    <div>
                                        <BasicLineCharts dataColors='["--vz-primary"]' />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <PerformanceTrackerFilter
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'PerformanceTrackerFilter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default PerformanceTracker;
