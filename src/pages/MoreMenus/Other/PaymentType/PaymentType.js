import React, { useMemo } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Input } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import TableContainer from "../../../../Components/Common/TableContainer";
import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import AddEditPaymentType from "./AddEditPaymentType";

const PaymentType = () => {

    document.title = `${ProjectName} | Payment Type`;
    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});
    const [profileData, setProfileData] = useState({ alert: false, id: "", status: "" });

    const toggleModel = (name, data = {}) => {
        setModelName(name);
        setFormData({});
        if (data.id) {
            let editData = {
                id: data.id,
                title: data.title,
                user: data.user,
                date: data.date,
                desc:data.desc
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
            title: "Registration",
            desc:"",
            user: "Entrepreneur",
            date: "16/08/2023 03:34",
            type: 0
        },
        {
            id: 2,
            title: "Annual",
            desc:"",
            user: "Entrepreneur",
            date: "16/08/2023 03:34",
            type: 0
        },
        {
            id: 3,
            title: "Sharing",
            desc:"",
            user: "Entrepreneur",
            date: "16/08/2023 03:34",
            type: 1
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
                Header: "Title",
                accessor: "title",
                filterable: false,
            },
            {
                Header: "User",
                accessor: "user",
                filterable: false,
            },
            {
                Header: "Date",
                accessor: "date",
                filterable: false,
            },
            {
                Header: "Action",
                Cell: (allData) => {
                    let data = allData.row.original;
                    return (
                        <>
                            <ul className="list-inline hstack gap-2 mb-0 ">
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
                                            <DropdownItem onClick={e => toggleModel('AddEditPaymentType', data)}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                            </DropdownItem>
                                            {
                                                allData.row.original.type === 0 ?
                                                    <>
                                                        <DropdownItem onClick={e => setProfileData({ alert: true, id: 1, status: 1 })}>
                                                            <i className="ri-checkbox-circle-line align-middle me-1"></i>Deactive
                                                        </DropdownItem>
                                                    </>

                                                    :
                                                    <>
                                                        <DropdownItem onClick={e => setProfileData({ alert: true, id: 1, status: 1 })}>
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
                    <BreadCrumb title="Payment Type" pageTitle="Payment Type" location={"/admin/menu"} />
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
                                            <div className="d-flex hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-brand-theme" onClick={e => toggleModel('AddEditPaymentType')}>
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
            <SweetAlert
                custom
                show={profileData.alert}
                btnSize="md"
                showCancel
                showProfile
                showCloseButton
                confirmBtnText="Yes"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={submit}
                onCancel={e => setProfileData({ alert: false, id: "", status: "" })}
            >
                Are you sure you want to do this action?
            </SweetAlert>
            <AddEditPaymentType
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'AddEditPaymentType' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default PaymentType;
