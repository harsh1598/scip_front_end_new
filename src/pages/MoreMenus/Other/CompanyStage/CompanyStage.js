import React, { useState, useMemo } from "react";
import { Col, Container, Row, CardHeader, Input, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import TableContainer from "../../../../Components/Common/TableContainer";
import SweetAlert from "react-bootstrap-sweetalert";
import AddEditCompanyStage from "./AddEditCompanyStage";

const CompanyStage = () => {

    document.title = `${ProjectName} | Company Stage`;
    const [modelName, setModelName] = useState("");
    const [data, setData] = useState({});
    const [status, setStatus] = useState({ alert: false, id: "", status: "" });

    const toggleModel = (name, data = {}) => {
        setModelName(name);
        setData({});
        if (data.id) {
            let editData = {
                id: data.id,
                code: data.code,
                name: data.name,
                type: data.type,
            }
            setData(editData);
        }
    };

    const submit = () => {
        // console.log(profileData)
    }

    const crmcontacts = [
        {
            id: 1,
            code: "CS001",
            name: "Idea",
            companyStage: "Existing SME",
            type: 0
        },
        {
            id: 2,
            code: "CS002",
            name: "Concept",
            companyStage: "Existing SME",
            type: 1
        },
        {
            id: 3,
            code: "CS003",
            name: "Beta",
            companyStage: "Existing SME",
            type: 0
        },
        {
            id: 4,
            code: " CS004",
            name: "Pre-Revenue",
            companyStage: "Existing SME",
            type: 1
        },
        {
            id: 5,
            code: "CS005",
            name: "Revenue",
            companyStage: "Existing SME",
            type: 0
        },
        {
            id: 6,
            code: "CS006",
            name: "Prototype",
            companyStage: "Existing SME",
            type: 0
        },
    ];

    crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });

    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "#",
                accessor: 'serial'
            },
            {
                Header: "Stage Code",
                accessor: "code",
                filterable: false,
            },
            {
                Header: "Stage Name",
                accessor: "name",
                filterable: false,
            }, 	
            {
                Header: "Equal's Company Stage",
                accessor: "companyStage",
                filterable: false,
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
                                            <DropdownItem onClick={e => toggleModel('AddEditCompanyStage', data)}>
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
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Company Stage" pageTitle="Company Stage" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center mb-0">
                                        {/* <Col sm={4}>
                                            <div className="search-box">
                                                <Input
                                                    type="text"
                                                    className="form-control search"
                                                    placeholder="Source"
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col> */}
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button
                                                    type="button"
                                                    className="btn btn-brand-theme"
                                                    id="create-btn"
                                                    onClick={e => toggleModel('AddEditCompanyStage')}
                                                >
                                                    <i className="ri-add-line align-bottom me-1"></i> Add
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
            <AddEditCompanyStage
                data={data}
                setData={setData}
                show={modelName === 'AddEditCompanyStage' ? true : false}
                onCloseClick={() => setModelName("")}
            />
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

export default CompanyStage;
