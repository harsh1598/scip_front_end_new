import React, { useState } from "react";
import { Card, CardHeader, Col, Row } from "reactstrap";
import Filter from "./AngelNetworkModal/Filter";
import IRRPortfolioTbl from "./AngelNetworkModal/IRRPortfolioTbl";
import IRRChart from "./AngelNetworkModal/IRRChart";
import GrossIrrTbl from "./AngelNetworkModal/GrossIrrTbl";
import GrossWeightageTbl from "./AngelNetworkModal/GrossWeightageTbl";
import GrossIRRChart from "./AngelNetworkModal/GrossIRRChart";
import GrossMultipleChart from "./AngelNetworkModal/GrossMultipleChart";

const AngelNetwork = () => {

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
            <Card className=''>
                {/* bg-danger-subtle */}
                <CardHeader className="align-items-center ">
                    <Row className="g-0 align-items-center mb-0">
                        <Col sm={4}>
                            <h4 className="card-title flex-grow-1">Angel Network</h4>
                        </Col>
                        <div className="col-sm-auto ms-auto">
                            <div className="hstack gap-2 flex-wrap">
                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('Filter')}>
                                    <i className="ri-filter-2-line align-bottom me-1"></i>{" "}
                                    Filters
                                </button>
                            </div>
                        </div>
                    </Row>
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
                </CardHeader>
            </Card>
            <IRRPortfolioTbl />
            <IRRChart />
            <GrossIrrTbl />
            <GrossWeightageTbl />
            <GrossIRRChart />
            <GrossMultipleChart />
            <Filter
                formData={formData} setFormData={setFormData}
                show={modelName === 'Filter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default AngelNetwork;
