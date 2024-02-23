import React, { useMemo } from "react";
import { Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardBody, Row, Col, Input } from "reactstrap";
import TableContainer from "../../../../Components/Common/TableContainer";
import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

const Colortbl = ({ data , setData , toggleModel}) => {

    const [status, setStatus] = useState({ alert: false, id: "", status: "" });

    const submit = () => {
        // console.log(profileData)
    }

    const crmcontacts = [
        {
            id: 1,
            order: "1.00",
            color: "#213653",
            status: "Active",
            updateddate: " 08/01/2020",
            type: 0
        },
        {
            id: 1,
            order: "2.00",
            color: "#D1D1D1",
            status: "Active",
            updateddate: " 08/01/2020",
            type: 0
        },
    ];

    crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });

    // Column
    const columns = useMemo(
        () => [
            {
                Header: "Order",
                accessor: "order",
                filterable: false,
            },
            {
                Header: "Color",
                accessor: "color",
                Cell: (data) => {
                    return (
                        <>
                            <span className={ "badge btn fs-12"} style={{background:data.row.original.color}}>{data.row.original.color}</span>
                        </>
                    )
                },
            },
            {
                Header: "Updated date",
                accessor: "updateddate",
                filterable: false,
            },
            {
                Header: "Status",
                filterable: false,
                Cell: (data) => {
                    return (
                        <>
                            <span className={data.row.original.status === "Active" ? "badge badge-soft-success fs-12" : "badge badge-soft-danger fs-12"}>{data.row.original.status}</span>
                        </>
                    )
                },
            },
            {
                Header: "Action",
                Cell: (allData) => {
                    let data = allData.row.original;
                    return (
                        <>
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
                                            <DropdownItem onClick={e => toggleModel('AddEditApplication', data)}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                            </DropdownItem>
                                            {
                                                allData.row.original.type === 0 ?
                                                    <>
                                                        <DropdownItem onClick={e => setStatus({ alert: true, id: 1, status: 1 })}>
                                                            <i className="ri-checkbox-circle-line align-middle me-1"></i>Deactive
                                                        </DropdownItem>
                                                    </>

                                                    :
                                                    <>
                                                        <DropdownItem onClick={e => setStatus({ alert: true, id: 1, status: 1 })}>
                                                            <i className="ri-close-circle-line align-middle me-1"></i>Active
                                                        </DropdownItem>
                                                    </>
                                            }
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </li>
                            </ul>
                        </>
                    );
                },
            },
        ],

    );

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <Row className="g-0 align-items-center mb-0">
                        <Col sm={4}>
                            <div className="search-box">
                                <Input
                                    type="text"
                                    className="form-control search"
                                    placeholder="Search"
                                />
                                <i className="ri-search-line search-icon"></i>
                            </div>
                        </Col>
                    </Row>
                    <div className="px-3 mt-3">
                        {
                            crmcontacts.length ?
                                <>
                                    <TableContainer
                                        columns={columns}
                                        data={(crmcontacts || [])}
                                        dataCount={crmcontacts.length}
                                        isAddUserList={false}
                                        customPageSize={8}
                                        className="custom-header-css"
                                        divClass="table-responsive table-card mb-3"
                                        tableClass="align-middle table-nowrap"
                                        theadClass="table-light"
                                        isContactsFilter={true}
                                    />
                                </>
                                :
                                (<div className="py-4 text-center">
                                    <div>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/msoeawqm.json"
                                            trigger="loop"
                                            colors="primary:#405189,secondary:#0ab39c"
                                            style={{ width: "72px", height: "72px" }}
                                        ></lord-icon>
                                    </div>

                                    <div className="mt-4">
                                        <h5>Sorry! No Result Found</h5>
                                    </div>
                                </div>)
                        }
                    </div>
                </CardBody>
            </Card>
            <SweetAlert
                custom
                show={status.alert}
                btnSize="md"
                showCancel
                showProfile
                showCloseButton
                confirmBtnText="Yes"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={submit}
                onCancel={e => setStatus({ alert: false, id: "", status: "" })}
            >
                Are you sure you want to do this action?
            </SweetAlert>
        </React.Fragment>
    );
};

export default Colortbl;
