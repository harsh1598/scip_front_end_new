import React, { useState, useMemo } from "react";
import { Col, Container, Row, CardHeader, Input, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import TableContainer from "../../../../Components/Common/TableContainer";
import AddEditEsignDocument from "./AddEditEsignDocument";
import EsignDocumentFilter from "./EsignDocumentFilter";

const EsignDocument = () => {

    document.title = `${ProjectName} | eSign Document`;
    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggleModel = (name, data = {}) => {
        setModelName(name);
        setFormData({});
        if (data.id) {
            let editData = {
                id: data.id,
                title: data.code,
                name: data.code,
                email: data.code,
                expiryDate: data.code,
                documentId: data.code,
                status: data.code,
                updatedDate: data.code,
            }
            setFormData(editData);
        }
    };

    const submit = () => {
        // console.log(profileData)
    }

    const crmcontacts = [
        {
            id: 1,
            title: "Leegality Document 07",
            name: "Ritu Sharma",
            email: "ritu@yopmail.com",
            expiryDate: "17/05/2020 11:59 ",
            documentId: "XC439g1",
            status: "Completed",
            updatedDate: "07/05/2020 12:21",
        },
        {
            id: 1,
            title: "Leegality Document 07",
            name: "Ritu Sharma",
            email: "ritu@yopmail.com",
            expiryDate: "17/05/2020 11:59 ",
            documentId: "XC439g1",
            status: "Completed",
            updatedDate: "07/05/2020 12:21",
        },
        {
            id: 1,
            title: "Leegality Document 07",
            name: "Ritu Sharma",
            email: "ritu@yopmail.com",
            expiryDate: "17/05/2020 11:59 ",
            documentId: "XC439g1",
            status: "Completed",
            updatedDate: "07/05/2020 12:21",
        },
        {
            id: 1,
            title: "Leegality Document 07",
            name: "Ritu Sharma",
            email: "ritu@yopmail.com",
            expiryDate: "17/05/2020 11:59 ",
            documentId: "XC439g1",
            status: "Completed",
            updatedDate: "07/05/2020 12:21",
        },
        {
            id: 1,
            title: "Leegality Document 07",
            name: "Ritu Sharma",
            email: "ritu@yopmail.com",
            expiryDate: "17/05/2020 11:59 ",
            documentId: "XC439g1",
            status: "Completed",
            updatedDate: "07/05/2020 12:21",
        },
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
                Header: "Title",
                accessor: "title",
                filterable: false,
            },
            {
                Header: "Name",
                accessor: "name",
                filterable: false,
            },
            {
                Header: "Email",
                accessor: "email",
                filterable: false,
            },
            {
                Header: "Expiry Date",
                accessor: 'expiryDate'
            },
            {
                Header: "Document Id",
                accessor: "documentId",
                filterable: false,
            },
            {
                Header: "Status",
                accessor: "status",
                filterable: false,
            },
            {
                Header: "Updated Date",
                accessor: "updatedDate",
                filterable: false,
            },
            {
                Header: "Action",
                Cell: (data) => {
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
                                            <DropdownItem onClick={e => toggleModel('AddEditEsignDocument')}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit task
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
                    <BreadCrumb title="eSign Document" pageTitle="eSign Document" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center">
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
                                                <button
                                                    type="button"
                                                    className="btn btn-brand-theme"
                                                    id="create-btn"
                                                    onClick={e => toggleModel('AddEditEsignDocument')}
                                                >
                                                    <i className="ri-add-line align-bottom me-1"></i> Add
                                                </button>
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('EsignDocumentFilter')}>
                                                    <i className="ri-filter-2-line align-bottom me-1"></i>{" "}
                                                    Filters
                                                </button>
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
            <AddEditEsignDocument
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'AddEditEsignDocument' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <EsignDocumentFilter 
                formData={formData}  setFormData={setFormData}
                show={modelName === 'EsignDocumentFilter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default EsignDocument;
