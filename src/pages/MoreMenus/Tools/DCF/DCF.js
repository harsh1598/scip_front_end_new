import React, { useState } from "react";
import { Col, Container, Row, CardHeader, Input, Card, CardBody, Table } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import DCFFilter from "./DCFFilter";
import DataInputAssumptionsTbl from "./DataInputAssumptionsTbl";
import DCFModelInputTbl from "./DCFModelInputTbl";
import DCFCashFlowTbl from "./DCFCashFlowTbl";
import IntrinsicValueTbl from "./IntrinsicValueTbl";
import MarketValueTbl from "./MarketValueTbl";
import RateOfReturnTbl from "./RateOfReturnTbl";
import MarkeValueVSIntrinsicValueTbl from "./MarkeValueVSIntrinsicValueTbl";

const DCF = () => {

    document.title = `${ProjectName} | visualization`;
    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggleModel = (name, data = {}) => {
        setModelName(name);
    };

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
    }

    var result = Object.keys(formData).map((key) => [key, formData[key]]);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="DCF" pageTitle="DCF" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center mb-0">
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
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('DCFFilter')}>
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
                        <Col sm={12} lg={12}>
                            <DataInputAssumptionsTbl />
                        </Col>
                        <Col sm={12} lg={12}>
                            <DCFModelInputTbl />
                        </Col>
                        <Col sm={12} lg={12}>
                            <DCFCashFlowTbl />
                        </Col>
                        <Col sm={12} lg={6}>
                            <IntrinsicValueTbl />
                        </Col>
                        <Col sm={12} lg={6}>
                            <MarketValueTbl />
                        </Col>
                        <Col sm={12} lg={6}>
                            <RateOfReturnTbl />
                        </Col>
                        <Col sm={12} lg={6}>
                            <MarkeValueVSIntrinsicValueTbl />
                        </Col>
                    </Row>
                </Container>
            </div>
            <DCFFilter
                formData={formData} setFormData={setFormData}
                show={modelName === 'DCFFilter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default DCF;
