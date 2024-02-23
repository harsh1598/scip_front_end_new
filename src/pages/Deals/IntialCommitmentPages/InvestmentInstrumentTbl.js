import React, { memo } from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "reactstrap";

const InvestmentInstrumentTbl = ({ toggleModel }) => {

    const data = [
        {
            id: 1,
            name: "Equity",
            price: "1",
            number: "100",
            value: "10,000",
        },
        {
            id: 2,
            name: "Equity",
            price: "1",
            number: "100",
            value: "10,000",
        },
    ];

    return (
        <>
            <Card className="mb-2 g-2">
                <CardHeader className="align-items-center card-header">
                    <h4 className="card-title card-title mb-0">
                        Investment Instrument
                    </h4>
                </CardHeader>
                <CardBody>
                    <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">Instrument</th>
                                    <th scope="col">Issue Price Per Instrument</th>
                                    <th scope="col">Total Number of Instruments</th>
                                    <th scope="col">Total Value</th>
                                    <th scope="col">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.length && data.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.price} INR </td>
                                            <td>{item.number}</td>
                                            <td>{item.value} INR</td>
                                            <td> 
                                                <Link onClick={(e) => toggleModel("InvestmentInstrument")} className="text-muted">
                                                <i className="ri-eye-line fs-16"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default memo(InvestmentInstrumentTbl);
