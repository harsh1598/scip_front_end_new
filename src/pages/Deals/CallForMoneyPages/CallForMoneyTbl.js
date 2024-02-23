import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

const CallForMoneyTbl = ({ toggleModel }) => {

    const data = [
        {
            id: 1,
            investorName: "Abhaya Kumar Shankar",
            investmentName: "Abhaya Kumar Priya Jayaprada Shankar",
            amount: "30,00,00,000",
            date: "02/08/2023 11:44 AM (IST)",
            transactionDate: "02/08/2023 (IST)",
            addedBy: "Smriti Misra",
        }
    ];

    return (
        <>
            <Card className="mb-2 g-2">
                <CardHeader className="align-items-center card-header">
                    <h4 className="card-title card-title mb-0">
                        Call For Money
                    </h4>
                    <div className="float-end drop-box">
                        <UncontrolledDropdown>
                            <DropdownToggle
                                type="button"
                                className="btn btn-sm fs-16 text-muted dropdown"
                                tag="button"
                            >
                                <i className="ri-layout-grid-fill fs-16"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <li>
                                    <DropdownItem>
                                        <i className="ri-file-word-line text-muted me-2 fs-16 align-bottom"></i>
                                        Word Document
                                    </DropdownItem>
                                </li>
                                <li>
                                    <DropdownItem>
                                        <i className="ri-download-2-line text-muted me-2 fs-16 align-bottom"></i>
                                        Download
                                    </DropdownItem>
                                </li>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">Investor Name</th>
                                    <th scope="col">Investment in the name of</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Updated Date</th>
                                    <th scope="col">Transaction Date </th>
                                    <th scope="col">Added By</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.length && data.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.investorName}</td>
                                            <td>{item.investmentName}</td>
                                            <td>{item.amount}INR</td>
                                            <td>{item.date}</td>
                                            <td>{item.transactionDate}</td>
                                            <td>{item.addedBy}</td>
                                            <td className="social-icons">
                                                <ul className="list-inline hstack gap-2 mb-0">
                                                    <li className="list-inline-item">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                href="#"
                                                                className="btn btn-soft-secondary btn-sm dropdown"
                                                                tag="button"
                                                            >
                                                                <i className="ri-more-fill align-middle"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-end">
                                                                <DropdownItem onClick={e => toggleModel('Tags')}>
                                                                    <i className="ri-price-tag-3-line fs-20 align-middle me-1"></i>Tags
                                                                </DropdownItem>
                                                                <DropdownItem onClick={(e) => toggleModel("TransactionDetails")}>
                                                                    <i className="ri-money-dollar-box-line fs-20 align-middle me-1"></i>Transaction Details
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </li>
                                                </ul>
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

export default memo(CallForMoneyTbl);
