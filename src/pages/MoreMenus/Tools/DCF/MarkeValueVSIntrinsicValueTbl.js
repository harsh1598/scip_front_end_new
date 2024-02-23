import React, { memo } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import SimpleBar from 'simplebar-react';

const MarkeValueVSIntrinsicValueTbl = () => {

    return (
        <>
            <Card className='dashboard-data'>
                <CardHeader className="align-items-center bg-danger-subtle">
                    <h4 className="card-title flex-grow-1 text-center">Market Value vs Intrinsic Value</h4>
                </CardHeader>
                <SimpleBar style={{ maxHeight: "500px" }} >
                    <CardBody>
                            <Table className="table table-bordered mb-0">
                                <tbody>
                                    <tr>
                                        <td className="fw-medium text-center"> Market Value </td>
                                        <td className="fw-medium text-center">25.00</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center">Upside</td>
                                        <td className="fw-medium text-center">-5,562,350,397.27</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center">Intrinsic Value</td>
                                        <td className="fw-medium text-center">-5,562,350,372.27</td>
                                    </tr>
                                </tbody>
                            </Table>
                    </CardBody>
                </SimpleBar>
            </Card>
        </>
    );
};

export default memo(MarkeValueVSIntrinsicValueTbl);
