import React, { useMemo, useState, useCallback } from "react";
import { Col, Row, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip } from "reactstrap";
import TableContainer from "../../../../Components/Common/TableContainer";
import AddEdit from "./AddEdit";
import Filter from "./Filter";
import AddPreliminaryTask from "./AddPreliminaryTask";
import Approve from "./Approve";
import Archive from "./Archive";
import Profile from "./Profile";
import ProfileComment from "./ProfileComment";
import SweetAlert from 'react-bootstrap-sweetalert';
import DeactivateUser from "./DeactivateUser";
import InvestorModel from "./InvestorModel";
import ApplicationModel from "./ApplicationModel";

const crmcontacts = [
    {
        id: 1,
        name: "Ratna P",
        email: "Ratna89@yopmail.com",
        contact: "9865611464",
        Submission: "04/05/2023",
        Registration: "03/07/2023",
        CompanyName: "zvsvb",
        Category: "Adviser Individual",

    },
    {
        id: 2,
        name: "Sunil Baliram Chavan",
        email: "Sunil89@yopmail.com",
        contact: "9865611464",
        Submission: "04/05/2023",
        Registration: "03/07/2023",
        CompanyName: "vrh",
        Category: "Adviser Individual",
    },
    {
        id: 3,
        name: "Tahir Khan",
        email: "Tahir89@yopmail.com",
        contact: "9865611464",
        Submission: "04/05/2023",
        Registration: "03/07/2023",
        CompanyName: "vrh",
        Category: "Adviser Individual",
      
    }
];

const SME = () => {

    const [modelName, setModelName] = useState("");
    const [isExportButton, setIsExportButton] = useState(false);
    const [userApproveData, setApproveUserData] = useState({ alert: false, id: "", status: "" });

    const toggleModel = (name) => {
        setModelName(name);
    };

    const submit = () => {
        // console.log(profileData)
    }

    // Checked All
    const checkedAll = useCallback(() => {
        const checkall = document.getElementById("checkBoxAllSME");
        const ele = document.querySelectorAll(".leadsCheckBox");
        if (checkall.checked) {
            ele.forEach((ele) => {
                ele.checked = true;
            });
        } else {
            ele.forEach((ele) => {
                ele.checked = false;
            });
        }
        exportData();
    }, []);

    const exportData = () => {
        const ele = document.querySelectorAll(".leadsCheckBox:checked");
        ele.length > 0 ? setIsExportButton(true) : setIsExportButton(false);
        let data = []
        for (let i in ele) {
            let row = ele[i];
            if (row.value != undefined) {
                data.push({ id: parseInt(row.value) })
            }
        }
    };

    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: <div className="form-check"><input type="checkbox" id="checkBoxAllSME" className="form-check-input" onClick={() => checkedAll()} /></div>,
                Cell: (cellProps) => {
                    return <div className="form-check">
                        <Input type="checkbox" className="leadsCheckBox form-check-input" value={cellProps.row.original.id} onChange={() => exportData()} />
                    </div>
                },
                id: '#',
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
                Header: "Contact",
                accessor: "contact",
                filterable: false,
            },
            {
                Header: "Submission",
                accessor: "Submission",
                filterable: false,
            },
            {
                Header: "Registration",
                accessor: "Registration",
                filterable: false,
            },
            {
                Header: "Company Name",
                accessor: "CompanyName",
                filterable: false,
            },
            {
                Header: "Category",
                accessor: "Category",
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
                                            className="btn btn-soft-secondary btn-sm dropdown"
                                            tag="button"
                                        >
                                            <i className="ri-more-fill align-middle"></i>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-end">
                                            <DropdownItem  onClick={e => toggleModel('Profile')} >
                                                <i className="ri-user-line align-middle me-1"></i>Profile
                                            </DropdownItem>
                                            <DropdownItem >
                                                <i className="ri-mail-line align-middle me-1"></i>Message
                                            </DropdownItem>
                                            <DropdownItem  onClick={e => toggleModel('ApplicationModel')}>
                                                <i className=" ri-edit-box-line align-middle me-1"></i>Application
                                            </DropdownItem>
                                            <DropdownItem   onClick={e => setApproveUserData({ alert: true, id: 1, status: 0 })}>
                                                <i className="ri-checkbox-circle-line align-middle me-1"></i>Approve user account
                                            </DropdownItem>
                                            <DropdownItem  onClick={e => toggleModel('DeactivateUser')} >
                                                <i className="ri-archive-fill align-middle me-1"></i>Archive user account
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
        [checkedAll]
    );
  
    return (
        <React.Fragment>
            <Row>
                <Col lg={4}>
                    <div className="mb-2">
                        <div className="search-box">
                            <Input type="text" className="form-control search"
                                placeholder="User Name/Email" />
                            <i className="ri-search-line search-icon"></i>
                        </div>
                    </div>
                </Col>
                <div className="col-sm-auto ms-auto">
                    <div className="hstack gap-2 flex-wrap">
                        <button type="button" className="btn btn-brand-theme"
                            onClick={e => toggleModel('AddEdit')} >
                            <i className="ri-add-line align-bottom me-1"></i> Add
                        </button>
                        <button type="button" className="btn btn-soft-info"
                            onClick={e => toggleModel('Filter')} >
                            <i className="ri-filter-2-line align-bottom me-1"></i>{" "}
                            Filters
                        </button>
                        <button type="button" className="btn btn-soft-info">
                            <i className="mdi mdi-export  align-bottom me-1"></i>{" "}
                            Export
                        </button>
                    </div>
                </div>
            </Row>
            {
                isExportButton &&
                <div className="col-sm-auto ms-auto">
                    <div className="hstack gap-2 flex-wrap">
                        <UncontrolledTooltip placement="bottom" target="Assign" >
                            Assign Work to selected users
                        </UncontrolledTooltip>
                        <button type="button" className="btn btn-soft-secondary" id="Assign"
                            onClick={e => toggleModel('AddPreliminaryTask')}>
                            <i className="ri-add-box-line align-bottom"></i>
                        </button>
                        <UncontrolledTooltip placement="bottom" target="Approve" >
                            Approve selected users account
                        </UncontrolledTooltip>
                        <button type="button" className="btn btn-soft-secondary" id="Approve"
                            onClick={e => toggleModel('Approve')}>
                            <i className=" ri-checkbox-circle-line align-bottom"></i>
                        </button>
                        <UncontrolledTooltip placement="bottom" target="Archive" >
                            Archive selected users account
                        </UncontrolledTooltip>
                        <button type="button" className="btn btn-soft-secondary" id="Archive"
                            onClick={e => toggleModel('Archive')}>
                            <i className=" ri-archive-fill align-bottom"></i>
                        </button>
                    </div>
                </div>

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
            <AddEdit 
                show={modelName === 'AddEdit' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Filter 
                show={modelName === 'Filter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <AddPreliminaryTask c 
                show={modelName === 'AddPreliminaryTask' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Approve 
                show={modelName === 'Approve' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Archive 
                show={modelName === 'Archive' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Profile 
                toggleModel={toggleModel}
                show={modelName === 'Profile' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <ProfileComment
                show={modelName === 'ProfileComment' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <SweetAlert
                custom
                show={userApproveData.alert}
                btnSize="md"
                showCancel
                showProfile
                // showCloseButton
                confirmBtnText="Yes"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={submit}
                onCancel={e => setApproveUserData({ alert: false, id: "", status: "" })}
            >
               Email not verified yet, please contact user to verify email.
            </SweetAlert>
            <DeactivateUser 
                show={modelName === 'DeactivateUser' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            {/* <InvestorModel
                show={modelName === 'SME' ? true : false}
                onCloseClick={() => setModelName("")}
            /> */}
            <ApplicationModel
                show={modelName === 'ApplicationModel' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default SME;
