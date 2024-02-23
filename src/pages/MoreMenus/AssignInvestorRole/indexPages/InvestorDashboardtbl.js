import React, { useMemo, useState } from "react";
import TableContainer from "../../../../Components/Common/TableContainer";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import AddEditInvestorDashboard from "./AddEditInvestorDashboard";

const Team = () => {

    const [profileData, setProfileData] = useState({ alert: false, id: "", status: "" });
    const [modelName, setModelName] = useState("");

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
            Title: "Lead Investor",
            Label: " Lead Investor",
            Type: "Interested",
        },
        {
            id: 1,
            type: 0,
            Title: "Lead Investor",
            Label: " Lead Investor",
            Type: "Interested",
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
                accessor: "Title",
                filterable: false,
            },
            {
                Header: "Label",
                accessor: "Label",
                filterable: false,
            },
            {
                Header: "Type",
                accessor: "Type",
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
                                            <DropdownItem onClick={e => toggleModel('AddEditInvestorDashboard')}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                            </DropdownItem>
                                            {
                                                cellProps.row.original.type === 0 ?
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
            <div>
                <div className="px-3">
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
            <AddEditInvestorDashboard 
                show={modelName === 'AddEditInvestorDashboard' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default Team;
