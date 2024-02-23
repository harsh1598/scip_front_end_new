import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, CardHeader, Input, Card, UncontrolledDropdown, UncontrolledTooltip, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import TableContainer from "../../../Components/Common/TableContainer";
import AddTeam from "./AddTeam";
import EditTeam from "./EditTeam";
import SweetAlert from "react-bootstrap-sweetalert";

const Team = () => {

    document.title = `${ProjectName} | Team`;
    const [modelName, setModelName] = useState("");
    const [profileData, setProfileData] = useState({ alert: false, id: "", status: "" });

    const toggleModel = (name) => {
        setModelName(name);
    };

    const submit = () => {
        // console.log(profileData)
    }

    const crmcontacts = [
        {
            id: 1,
            type: 1,
            Title: "Portfolio call - Spicestory",
        },
        {
            id: 2,
            type: 0,
            Title: "g102",
        },
        {
            id: 3,
            type: 0,
            Title: "team akram",
        },
        {
            id: 4,
            type: 1,
            Title: "tag7890",
        },
        {
            id: 5,
            type: 1,
            Title: "team5678",
        }
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
                Header: " Team Title",
                accessor: "Title",
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
                                            <DropdownItem onClick={e => toggleModel('EditTeam')}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit Team
                                            </DropdownItem>
                                            {
                                                cellProps.row.original.type === 0 ?
                                                <>
                                                    <DropdownItem onClick={e => setProfileData({ alert: true, id: 1, status: 1 })}>
                                                        <i className="ri-checkbox-circle-line align-middle me-1"></i>Deactive Team
                                                    </DropdownItem>
                                                </>

                                                :
                                                <>
                                                    <DropdownItem onClick={e => setProfileData({ alert: true, id: 1, status: 1 })}>
                                                        <i className="ri-close-circle-line align-middle me-1"></i>Active Team
                                                    </DropdownItem>
                                                </>
                                            }
                                            <DropdownItem>
                                                <Link className="text-body" tag="button" id="Team" to="/admin/TeamMember">
                                                    <i className="ri-team-line align-middle me-1"></i>Team Member
                                                </Link>
                                            </DropdownItem>

                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </li>
                                {/* <li className="list-inline-item">
                                    <UncontrolledDropdown>
                                        <UncontrolledTooltip placement="bottom" target="Edit">Edit</UncontrolledTooltip>
                                        <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-1" tag="button" id="Edit" onClick={e => toggleModel('EditTeam')}>
                                            <i className="ri-edit-box-line align-middle"></i>
                                        </DropdownToggle>
                                        {
                                            cellProps.row.original.type === 0 ?
                                                <>
                                                    <UncontrolledTooltip placement="bottom" target="Deactive"> Deactive Team</UncontrolledTooltip>
                                                    <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-1" tag="button" id="Deactive" onClick={e => setProfileData({ alert: true, id: 1, status: 1 })}>
                                                        <i className="ri-checkbox-circle-line align-middle"></i>
                                                    </DropdownToggle>
                                                </>
                                                :
                                                <>
                                                    <UncontrolledTooltip placement="bottom" target="Active"> Active Team</UncontrolledTooltip>
                                                    <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-1" tag="button" id="Active" onClick={e => setProfileData({ alert: true, id: 1, status: 0 })}>
                                                        <i className=" ri-close-circle-line align-middle"></i>
                                                    </DropdownToggle>

                                                </>
                                        }
                                        <UncontrolledTooltip placement="bottom" target="Team"> Team Member</UncontrolledTooltip>
                                        <Link className="btn btn-soft-secondary btn-md dropdown me-1" tag="button" id="Team" to="/admin/menu/TeamMember">
                                            <i className="ri-team-line align-middle"></i>
                                        </Link>
                                    </UncontrolledDropdown>
                                </li> */}
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
                    <BreadCrumb title="Team" pageTitle="Team" location={"/admin/menu"} />
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
                                                    onClick={e => toggleModel('AddTeam')}
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
            <AddTeam
                show={modelName === 'AddTeam' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <EditTeam
                show={modelName === 'EditTeam' ? true : false}
                onCloseClick={() => setModelName("")}
            />
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
        </React.Fragment>
    );
};

export default Team;
