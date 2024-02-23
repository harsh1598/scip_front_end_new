import React, { useMemo } from "react";
import { Col, Container, Row, CardHeader, Card, Input, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import TableContainer from "../../../Components/Common/TableContainer";
import ContributionFilter from "./ContributionAgreementModal/ContributionFilter";

import { useState } from "react";
import AddEditContribution from "./ContributionAgreementModal/AddEditContribution";
import Import from "./ContributionAgreementModal/Import";

const ContributionAgreement = () => {

    document.title = `${ProjectName} | Contribution Agreement`;

    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggleModel = (name) => {
        setModelName(name);
    };
    const crmcontacts = [
        // {
        //     id: 1,
        //     name: "Adam Smith",
        //     agreementAmount: "Registration",
        //     agreement: "CC Avenue",
        //     signDate: "1,000",
        //     expiryDate: "312010285908",
        //     note:"",
        //     status:"",
        //     modifieddate: "08/02/2020",
        // }
    ];

    crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
    }
    
    var result = Object.keys(formData).map((key) => [key, formData[key]]);

    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "#",
                accessor: 'serial'
            },
            {
                Header: "Name",
                accessor: "name",
                filterable: false,
            },
            {
                Header: "Agreement Amount",
                accessor: "agreementAmount",
                filterable: false,
            },
            {
                Header: "Agreement",
                accessor: "agreement",
                filterable: false,
            },
            {
                Header: "Sign Date",
                accessor: "signDate",
                filterable: false,
            },
            {
                Header: "Expiry Date",
                accessor: "expiryDate",
                filterable: false,
            },
            {
                Header: "Note",
                accessor: "note",
                filterable: false,
            },
            {
                Header: "Status",
                accessor: "date",
                filterable: false,
            },
            {
                Header: "Modified Date",
                accessor: "modifieddate",
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
                                            <DropdownItem >
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit
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
                    <BreadCrumb title="Contribution Agreement" pageTitle="Contribution Agreement" location={"/admin/menu"} />
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
                                                    placeholder="Search"
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('ContributionFilter')}>
                                                    <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                                                    Filters
                                                </button>
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                        // className="btn btn-soft-info btn-icon fs-14"
                                                        className="btn btn-soft-secondary dropdown"
                                                        type="button"
                                                        id="dropdownMenuButton1"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="ri-settings-4-line"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu
                                                    >
                                                        <li>
                                                            <DropdownItem onClick={e => toggleModel('AddEditContribution')}>
                                                                <i className="ri-add-fill   align-bottom me-1"></i>Add
                                                            </DropdownItem>
                                                        </li>
                                                        <li>
                                                            <DropdownItem>
                                                                <i className="ri-upload-2-fill  align-bottom me-1"></i>Export
                                                            </DropdownItem>
                                                        </li>
                                                        <li>
                                                            <DropdownItem onClick={e => toggleModel('Import')}>
                                                                <i className="ri-download-2-line  align-bottom me-1"></i>Import
                                                            </DropdownItem>
                                                        </li>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                    </Row>
                                    {
                                        Object.values(formData).every(x => x === null || x === '') === false &&
                                        <Row>
                                            <div className="filter-choices-input mt-2">
                                                <div className="choices">
                                                    <div className="choices__inner">
                                                        <div className="choices__list choices__list--multiple">
                                                            {result.map((item, index) => {
                                                                if (item[0] && item[1]) {

                                                                    if (item[1].value) {
                                                                        return <div key={index} className="choices__item choices__item--selectable">{item[1].value} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                                                    } else {
                                                                        return <div key={index} className="choices__item choices__item--selectable">{item[1]} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                                                    }

                                                                } else { return ''; }
                                                            })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    }
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
            <ContributionFilter 
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'ContributionFilter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <AddEditContribution 
                show={modelName === 'AddEditContribution' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Import 
                show={modelName === 'Import' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default ContributionAgreement;
