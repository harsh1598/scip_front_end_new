import React, { memo } from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

const FinalCommitmentTbl = ({ toggleModel }) => {

    const data = [
        {
            id: 1,
            name: "Shobanaa Anand",
            Investmentname: "SD Investment Management Services LLP",
            amount: "10,00,000 ",
            date: "26/09/2022 05:58 PM",
            addedby: "Smriti Misra",
        },
        {
            id: 2,
            name: "Abhaya Kumar Shankar",
            Investmentname: "Puniju",
            amount: "20,00,000 ",
            date: "23/09/2022 11:52 AM",
            addedby: "Smriti Misra",
        },
    ];

    return (
        <>
            <Card className="mb-0 g-2">
                <CardHeader className="align-items-center card-header">
                    <h4 className="card-title card-title mb-0 float-start">
                        Final Commitment
                    </h4>
                    <div className="float-end drop-box">
                        <Link to="#" onClick={(e) => toggleModel("AddFinalCommitment")}>
                            <i className="ri-add-box-line fs-16 me-2"></i>
                        </Link>
                        <UncontrolledDropdown>
                            <DropdownToggle
                                type="button"
                                className="btn btn-sm dropdown"
                                tag="button"
                            >
                                <a href='javascript:void(0);'> <i
                                    className="ri-layout-grid-fill fs-16"

                                ></i></a>

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
                                <li onClick={(e) => toggleModel("CreateGroup")}>
                                    <DropdownItem>
                                        <i className="ri-group-line text-muted me-2 fs-16 align-bottom"></i>
                                        Create Group
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
                                    <th scope="col">Date</th>
                                    <th scope="col">Added By</th>
                                    <th scope="col" style={{ width: "150px" }}>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.length && data.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.Investmentname}  </td>
                                            <td>{item.amount} INR</td>
                                            <td>{item.date}</td>
                                            <td>{item.addedby}</td>
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
                                                                <DropdownItem onClick={e => toggleModel('EditFinalCommitment')}>
                                                                    <i className="ri-pencil-line align-middle me-1"></i>Edit Final Commitment
                                                                </DropdownItem>
                                                                <DropdownItem onClick={e => toggleModel('DeleteCommitment')}>
                                                                    <i className="ri-delete-bin-line align-middle me-1"></i>Delete Commitment
                                                                </DropdownItem>
                                                                <DropdownItem onClick={e => toggleModel('Tags')}>
                                                                    <i className="ri-price-tag-3-line align-middle me-1"></i>Tags
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

export default memo(FinalCommitmentTbl);
