import React, { useMemo , useState } from "react";
import { Col, Container, Row, CardHeader, Card, Input, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import TableContainer from "../../../Components/Common/TableContainer";

import AddClass from "./DealTermModal/AddClass";
import AddPercentage from "./DealTermModal/AddPercentage";
import AddColumn from "./DealTermModal/AddColumn";
import Edit from "./DealTermModal/Edit";
import Delete from "./DealTermModal/Delete";

const DealTerm = () => {

    document.title = `${ProjectName} | Deal Term`;

    const [modelName, setModelName] = useState("");

    const toggleModel = (name) => {
        setModelName(name);
    };

    const crmcontacts = [
        {
            id: 1,
            Class: "Class F",
            commitment: "1,200,000",
            softMinimumAmount: "0",
            finalMinimumAmount: "0",
            note:"Commitment period is 5 year",
            assigned:"ALL",
            carts:"5",
            testing: "34",
            Trewwe: "",
        },
        {
            id: 2,
            Class: "Class g",
            commitment: "1,200,000",
            softMinimumAmount: "0",
            finalMinimumAmount: "0",
            note:"Commitment period is 5 year",
            assigned:"ALL",
            carts:"5",
            testing: "",
            Trewwe: "",
        }
    ];

    crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });

    // Column
    const columns = useMemo(
        () => [
            {
                Header: "#",
                accessor: 'serial'
            },
            {
                Header: "Class",
                accessor: "class",
                filterable: false,
            },
            {
                Header: "Commitment",
                accessor: "commitment",
                filterable: false,
            },
            {
                Header: "Soft Minimum Amount",
                accessor: "softMinimumAmount",
                filterable: false,
            },
            {
                Header: "Final Minimum Amount",
                accessor: "finalMinimumAmount",
                filterable: false,
            },
            {
                Header: "Note",
                accessor: "note",
                filterable: false,
            },
            {
                Header: "Assigned",
                accessor: "assigned",
                filterable: false,
            },
            {
                Header: "Carts",
                filterable: false,
                Cell: (data) => (
                  <>
                    {
                        data.row.original.carts &&
                        <span>{data.row.original.carts} %</span>
                    }  
                  </>
                ),
            },
            {
                Header: "Testing",
                filterable: false,
                Cell: (data) => (
                  <>
                    {
                        data.row.original.testing &&
                        <span>{data.row.original.testing} %</span>
                    } 
                  </>
                ),
            },
            {
                Header: "Trewwe",
                accessor: "trewwe",
                filterable: false,
            },
            {
                Header: "Action",
                Cell: (cellProps) => {
                    // console.log(cellProps.row.original.type );
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
                                            <DropdownItem onClick={e => toggleModel('Edit')}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                            </DropdownItem>
                                            <DropdownItem onClick={e => toggleModel('Delete')} >
                                                <i className="ri-delete-bin-line  align-middle me-1"></i>Delete
                                            </DropdownItem>
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
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Deal Term" pageTitle="Deal Term" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center mb-2">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input
                                                    type="text"
                                                    className="form-control search"
                                                    placeholder="Class Name"
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-brand-theme" onClick={e => toggleModel('AddClass')}>
                                                    <i className="ri-add-line align-bottom me-1"></i> Add Class
                                                </button>
                                                <button type="button" className="btn btn-brand-theme" onClick={e => toggleModel('AddPercentage')}>
                                                    <i className="ri-add-line align-bottom me-1"></i> Add Percentage
                                                </button>
                                                <button type="button" className="btn btn-brand-theme" onClick={e => toggleModel('AddColumn')}>
                                                    <i className="ri-add-line align-bottom me-1"></i> Add Column
                                                </button>
                                            </div>
                                        </div>
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
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <AddClass 
                show={modelName === 'AddClass' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Edit
                show={modelName === 'Edit' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Delete
                show={modelName === 'Delete' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <AddPercentage 
                show={modelName === 'AddPercentage' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <AddColumn 
                show={modelName === 'AddColumn' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default DealTerm;
