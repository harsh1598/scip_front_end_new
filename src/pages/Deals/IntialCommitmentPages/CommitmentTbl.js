import React, { memo } from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "reactstrap";

const CommitmentTbl = ({ toggleModel }) => {

    const data = [
        {
            id: 1,
            name: "Test",
            amount: "100",
            date: "09/11/2022",
        },
        {
            id: 2,
            name: "Test",
            amount: "100",
            date: "09/11/2022",
        },
    ];

    return (
        <>
            <Card className="mb-2 g-2">
                <CardHeader className="align-items-center card-header">
                    <h4 className="card-title card-title mb-0">
                        Commitment by Other Investors/Angel Networks
                    </h4>
                </CardHeader>
                <CardBody>
                    <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">  Name of the investor/network </th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.length && data.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.amount} INR</td>
                                            <td>{item.date}</td>
                                            <td> 
                                                <Link  to="#"  onClick={(e) => toggleModel("CommitmentInvestors")} className='text-muted'>
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

export default memo(CommitmentTbl);
