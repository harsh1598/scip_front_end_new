import React, { useState, useMemo } from "react";
import { Col, Container, Row, CardHeader, Input, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import TableContainer from "../../../../Components/Common/TableContainer";
import SweetAlert from "react-bootstrap-sweetalert";
import AddEditFilingReport from "./AddEditFilingReport";

const FilingReport = () => {

    document.title = `${ProjectName} | Filing Report`;
    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});
    const [status, setStatus] = useState({ alert: false, id: "", status: "" });

    const toggleModel = (name, data = {}) => {
        setModelName(name);
        setFormData({});
        if (data.id) {
            let editData = {
                id: data.id,
                code: data.code,
                period: data.period,
                reportTitle: data.reportTitle,
                document: data.document,
                type: data.type,
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
            code: "RPT0030",
            period:"June 2022 - 2023",
            reportTitle:"abc",
            document: "",
            type:0
        },
        {
            id: 2,
            code: "RPT0030",
            period:"June 2022 - 2023",
            reportTitle:"abc",
            document: "",
            type:1
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
                Header: "Code",
                accessor: "code",
                filterable: false,
            },
            {
                Header: "Period",
                accessor: "period",
                filterable: false,
            },
            {
                Header: "Filing Report Title ",
                accessor: "reportTitle",
                filterable: false,
            },
            {
                Header: "Document",
                accessor: "document",
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
                                            <DropdownItem onClick={e => toggleModel('AddEditFiling', data)}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                            </DropdownItem>
                                            {
                                                allData.row.original.type === 0 ?
                                                <>
                                                    <DropdownItem onClick={e => setStatus({ alert: true, id: 1, status: 1 })}>
                                                        <i className="ri-checkbox-circle-line align-middle me-1"></i>Deactive Filing Folder
                                                    </DropdownItem>
                                                </>

                                                :
                                                <>
                                                    <DropdownItem onClick={e => setStatus({ alert: true, id: 1, status: 1 })}>
                                                        <i className="ri-close-circle-line align-middle me-1"></i>Active Filing Folder
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
                    <BreadCrumb title="Filing Report" pageTitle="Filing Report" location={"/admin/menu"} />
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
                                                    placeholder="Title"
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
                                                    onClick={e => toggleModel('AddEditFiling')}
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
            <AddEditFilingReport
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'AddEditFiling' ? true : false}
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

export default FilingReport;
