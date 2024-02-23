import React, { memo, useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Progress, Row} from "reactstrap";
import WebService from '../../../utility/WebService';

const InitialCommitmentStatus = () => {
    const [status, setStatus] = useState<any>()

    useEffect(() => {
        getCompanySummary();
    }, [])
    const getCompanySummary = () => {
        WebService.getAPI({
            action: `/company-summary`
        })
            .then(async (res: any) => {
                setStatus(res);
            })
            .catch((e) => {
            });
    };

    return (
        <>
            <Card className="mb-0 g-2">
                <CardHeader className="align-items-center card-header">
                    <h4 className="card-title card-title mb-0 me-2">
                        Initial Commitment
                    </h4>
                </CardHeader>
                <CardBody style={{ minHeight: !status ? '100px' : '89px' }} className={!status ? 'small-card-loader card-body mb-0' : 'card-body mb-0'}>
                    {status && 
                    <Row>
                        <Col md={6} className="border-end">
                            <div className="flex-grow-1">
                                <h5 className="fs-14">Status</h5>
                                <div>
                                    <Progress
                                        value={15}
                                        color="primary"
                                        className="animated-progess custom-progress progress-label"
                                        >
                                        <div className="label fs-11">15%</div>
                                    </Progress>
                                    <div className="text-end">
                                        <small>12,00,000 INR</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <h5 className="fs-14">Target Amount</h5>
                            <h3 className="fs-20">5,00,00,001 INR</h3>
                        </Col>
                    </Row>
                                    }
                </CardBody>
            </Card>
        </>
    );
};

export default memo(InitialCommitmentStatus);
