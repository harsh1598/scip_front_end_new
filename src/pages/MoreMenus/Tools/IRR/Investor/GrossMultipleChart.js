import React, { memo } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import {
    BasicAreaCharts,
    BasicLineCharts
} from "../../../Tools/PerformanceTracker/Charts/Charts";

const GrossMultipleChart = () => {


    return (
        <>
            <Card className='dashboard-data'>
                <CardHeader className="align-items-center ">
                    <Row className="g-0 align-items-center mb-0">
                        <Col sm={6}>
                            <h4 className="card-title flex-grow-1">Gross Multiple Investor</h4>
                        </Col>
                        <div className="col-sm-auto ms-auto">
                            <div className="hstack gap-2 flex-wrap">
                                {/* <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('Filter')}>
                                    <i className="ri-filter-2-line align-bottom me-1"></i>{" "}
                                    Filters
                                </button> */}
                            </div>
                        </div>
                    </Row>
                </CardHeader>
                    <CardBody>
                        <div>
                            <BasicAreaCharts dataColors='["--vz-primary"]' />
                        </div>
                    </CardBody>
            </Card>
        </>
    );
};

export default memo(GrossMultipleChart);
