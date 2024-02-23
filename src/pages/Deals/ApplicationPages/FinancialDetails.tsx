import React, { memo, useEffect, useState } from 'react';
import { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Row, UncontrolledTooltip } from "reactstrap";
import WebService from '../../../utility/WebService';

interface propdata {
    childData?: any
}

const FinancialDetails = (props: propdata) => {
    const [financialDetails, setFinancialDetails] = useState<any>()

    useEffect(() => {
        getCompanySummary();
    }, [])
    const getCompanySummary = () => {
        WebService.getAPI({
            action: `/company-summary`
        })
            .then(async (res: any) => {
                setFinancialDetails(res);
            })
            .catch((e) => {
            });
    };

    const data = [
        {
            amount: "50,000",
            desc: "Revenue of the Previous Year",
            id: "icon"
        },
        {
            amount: "50,000",
            desc: "Revenue of the Previous Year",
            id: "icon"
        },
        {
            amount: "50,000",
            desc: "Revenue of the Previous Year",
            id: "icon"
        },
        {
            amount: "50,000",
            desc: "Revenue of the Previous Year",
            id: "icon"
        }
    ]

    return (
        <>
            <Card className="">
                <CardHeader className='align-items-center'>
                    <h4 className="card-title mb-0"> {props.childData.name} </h4>
                </CardHeader>
                <CardBody style={{ height: !financialDetails ? '90px' : '90px' }} className={!financialDetails ? 'small-card-loader ' : 'align-items-center'}>
                    {financialDetails &&
                        <Row>
                            {
                                data.map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <Col xl={3} md={3} className="border-end">
                                                <div className="text-center">
                                                    <h4 className="fs-20 fw-seminormal mb-1 green-clr">
                                                        <span className="counter-value" data-target="50,000">
                                                            {item.amount}
                                                        </span>{" "}INR
                                                    </h4>
                                                    <h5 className="text-muted text-uppercase fs-12 ellipsis-text">{item.desc}{" "}
                                                        <i className="ri-information-line fs-14" id={item.id}></i>
                                                        <UncontrolledTooltip placement="bottom" target={item.id}>{" "}{item.desc}
                                                        </UncontrolledTooltip>
                                                    </h5>
                                                </div>
                                            </Col>
                                        </Fragment>
                                    )
                                })
                            }
                        </Row>
                    }
                </CardBody>
            </Card>
        </>
    );
};

export default memo(FinancialDetails);
