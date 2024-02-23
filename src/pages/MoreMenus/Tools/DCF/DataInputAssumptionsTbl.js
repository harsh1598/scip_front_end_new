import React, { memo } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import SimpleBar from 'simplebar-react';

const DataInputAssumptionsTbl = () => {

    return (
        <>
            <Card className='dashboard-data'>
                <CardHeader className="align-items-center bg-danger-subtle">
                    <h4 className="card-title flex-grow-1 text-center">Data Input Assumptions</h4>
                </CardHeader>
                <SimpleBar style={{ maxHeight: "500px" }} >
                    <CardBody>
                            <Table className="table table-bordered mb-0">
                                <tbody>
                                    <tr>
                                        <td className="fw-medium text-center"> Tax Rate  </td>
                                        <td className="fw-medium text-center">28%</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center"> Discount Rate </td>
                                        <td className="fw-medium text-center">12%</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center"> Perpetural Growth Rate  </td>
                                        <td className="fw-medium text-center">2%</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center"> EV/EBITDA Mulltiple </td>
                                        <td className="fw-medium text-center">7</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center"> Calculation date  </td>
                                        <td className="fw-medium text-center">30-06-2021</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center"> Fiscal Year End</td>
                                        <td className="fw-medium text-center">31-03-2022</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center"> Current Price </td>
                                        <td className="fw-medium text-center">25</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center"> Shares Outstanding</td>
                                        <td className="fw-medium text-center">20000</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center"> Debt </td>
                                        <td className="fw-medium text-center">30000</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center">Cash</td>
                                        <td className="fw-medium text-center"> 2,39,550.00</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium text-center">Capex</td>
                                        <td className="fw-medium text-center"> 15000</td>
                                    </tr>
                                </tbody>
                            </Table>
                    </CardBody>
                </SimpleBar>
            </Card>
        </>
    );
};

export default memo(DataInputAssumptionsTbl);
