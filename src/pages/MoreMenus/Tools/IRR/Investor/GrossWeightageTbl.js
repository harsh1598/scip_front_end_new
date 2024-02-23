import React, { memo } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import SimpleBar from 'simplebar-react';

const GrossWeightageTbl = () => {

    const data = [
        {
            id: 1,
            type: "Portfolio NIRR",
            Investment: "90,000",
            Amount: "6,080,889,840",
            Portfolio: "0",
            Multiple: "67565.44267",
        },
    ];

    return (
        <>
            <Card className='dashboard-data'>
                <CardHeader className="align-items-center ">
                    <Row className="g-0 align-items-center mb-0">
                        <Col sm={6}>
                            <h4 className="card-title flex-grow-1">Gross Weightage Investor</h4>
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
                        <SimpleBar>
                            <Table  bordered size="sm">
                                <thead>
                                    <tr>
                                        <th scope="col">S.NO.</th>
                                        <th scope="col">Type Of IRR</th>
                                        <th scope="col">Investment</th>
                                        <th scope="col">Distribution Amount</th>
                                        <th scope="col">IRR Portfolio</th>
                                        <th scope="col">Multiple Portfolio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data && data.length && data.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{item.type}</td>
                                                <td>{item.Investment}</td>
                                                <td>{item.Amount}</td>
                                                <td>{item.Portfolio}</td>
                                                <td>{item.Multiple}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                        </SimpleBar>
               
                    </CardBody>
            </Card>
        </>
    );
};

export default memo(GrossWeightageTbl);
