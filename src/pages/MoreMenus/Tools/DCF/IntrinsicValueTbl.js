import React, { memo } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import SimpleBar from 'simplebar-react';

const IntrinsicValueTbl = () => {

    return (
        <>
            <Card className='dashboard-data'>
                <CardHeader className="align-items-center bg-danger-subtle">
                    <h4 className="card-title flex-grow-1 text-center">Intrinsic Value</h4>
                </CardHeader>
                <SimpleBar style={{ maxHeight: "500px" }} >
                    <CardBody>
                            <Table className="table table-bordered mb-0">
                                <tbody>
                                    <tr>
                                        <td className="fw-medium text-center"> Enterprise Value</td>
                                        <td className="fw-medium text-center">(111,247,007,655,023)</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center">Plus: Cash</td>
                                        <td className="fw-medium text-center">239,550</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center"> Less: Debt</td>
                                        <td className="fw-medium text-center">30,000</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center">Equity Value </td>
                                        <td className="fw-medium text-center">(111,247,007,445,473) </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center">Equity Value/Share</td>
                                        <td className="fw-medium text-center">-5,562,350,372 </td>
                                    </tr>
                                </tbody>
                            </Table>
                    </CardBody>
                </SimpleBar>
            </Card>
        </>
    );
};

export default memo(IntrinsicValueTbl);
