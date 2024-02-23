import React, { memo } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import SimpleBar from 'simplebar-react';

const RateOfReturnTbl = () => {

    return (
        <>
            <Card className='dashboard-data'>
                <CardHeader className="align-items-center bg-danger-subtle">
                    <h4 className="card-title flex-grow-1 text-center">Rate Of Return</h4>
                </CardHeader>
                <SimpleBar style={{ maxHeight: "500px" }} >
                    <CardBody>
                            <Table className="table table-bordered mb-0">
                                <tbody>
                                    <tr>
                                        <td className="fw-medium text-center"> Target Price Upside</td>
                                        <td className="fw-medium text-center">-22249401589%</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center">Internal Rate of Return (IRR)</td>
                                        <td className="fw-medium text-center">#VALUE!</td>
                                    </tr>
                                </tbody>
                            </Table>
                    </CardBody>
                </SimpleBar>
            </Card>
        </>
    );
};

export default memo(RateOfReturnTbl);
