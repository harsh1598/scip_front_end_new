import React, { useMemo, useState } from "react";
import { Col, Row, Input, UncontrolledDropdown, DropdownToggle, UncontrolledTooltip, DropdownMenu, DropdownItem } from "reactstrap";
import TableContainer from "../../../../Components/Common/TableContainer";
import Filter from "./Filter";
import Profile from "./Profile";
import ProfileComment from "./ProfileComment";
import Completed from "./Completed";
import EditWorkFlow from "./EditWorkFlow";
import AssignTask from "./AssignTask";
import { Link } from "react-router-dom";

const crmcontacts = [
    {
        id: 1,
        TaskFor: "nitshi firm pvt limited - nitshi@21",
        Milestone: "Application review",
        Task: "Application by Investor",
        DueDate: " 30/06/2023",
        AssignedBy: "Smriti Misra",
        Status: "1"
    },
    {
        id: 2,
        TaskFor: "frbh - bfheb",
        Milestone: "Application review",
        Task: "Application by Investor",
        DueDate: " 30/06/2023",
        AssignedBy: "Smriti Misra",
        Status: "0"
    },
];

const SME = () => {

    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggleModel = (name) => {
        setModelName(name);
    };

    const submit = () => {
        // console.log(profileData)
    }

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
                Header: "Task For",
                accessor: "TaskFor",
                filterable: false,
            },
            {
                Header: "Milestone",
                accessor: "Milestone",
                filterable: false,
            },
            {
                Header: "Task",
                accessor: "Task",
                filterable: false,
            },
            {
                Header: "Due Date",
                accessor: "DueDate",
                filterable: false,
            },
            {
                Header: "AssignedBy",
                accessor: "AssignedBy",
                filterable: false,
            },
            {
                Header: "Status",
                accessor: "Status",
                filterable: false,
                Cell: (contact) => (
                    <>
                        {/* bg-soft-success , bg-soft-primary */}
                        {/* <span className={contact.row.original.Status === "0" ? "btn btn-success btn-sm me-1" : "btn btn-primary btn-sm me-1"}>{contact.row.original.Status === "0" ? "COMPLETED" : "PENDING"}</span> */}
                        <span className={contact.row.original.Status === "0" ? "badge badge-soft-success fs-12" : "badge badge-soft-danger fs-12"}>{contact.row.original.Status === "0" ? "COMPLETED" : "PENDING"}</span>
                    </>
                ),
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
                                                <Link className="text-body" to="#" onClick={e => toggleModel('Profile')}>
                                                    <i className="ri-user-line align-middle me-1"></i>Profile
                                                </Link>
                                            </DropdownItem >
                                            <DropdownItem>
                                                <Link className="text-body" to="#" >
                                                    <i className="ri-share-box-line align-middle me-1"></i>View the Deal Summary page
                                                </Link>
                                            </DropdownItem>

                                            {
                                                cellProps.row.original.Status === "1" ?
                                                    <>
                                                        <DropdownItem onClick={e => toggleModel('Completed')}>
                                                            <i className="ri-checkbox-line align-middle me-1"></i>Make Complete
                                                        </DropdownItem>
                                                    </>
                                                    :
                                                    <>
                                                        <DropdownItem onClick={e => toggleModel('EditWorkFlow')}>
                                                            <i className="ri-edit-box-line align-middle me-1"></i>Edit Task
                                                        </DropdownItem>
                                                    </>
                                            }
                                            <DropdownItem onClick={e => toggleModel('AssignTask')}>
                                                <i className="ri-menu-line align-middle me-1"></i>Assign Task
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </li>
                                {/* <li className="list-inline-item">
                                    <UncontrolledDropdown>

                                        <UncontrolledTooltip placement="bottom" target="Profile">Profile</UncontrolledTooltip>
                                        <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="Profile" onClick={e => toggleModel('Profile')}>
                                            <i className="ri-user-line align-middle"></i>
                                        </DropdownToggle>

                                        <UncontrolledTooltip placement="bottom" target="Deal">
                                            View the Deal Summary page
                                        </UncontrolledTooltip>
                                        <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="Deal" >
                                            <i className=" ri-share-box-line  align-middle"></i>
                                        </DropdownToggle>
                                        {
                                            cellProps.row.original.Status === "1" ?
                                            <>
                                                <UncontrolledTooltip placement="bottom" target="Completed">
                                                Make Completed
                                                </UncontrolledTooltip>
                                                <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="Completed" onClick={e => toggleModel('Completed')}>
                                                    <i className="ri-checkbox-line  align-middle"></i>
                                                </DropdownToggle>

                                                <UncontrolledTooltip placement="bottom" target="edit">
                                                    Edit Task
                                                </UncontrolledTooltip>
                                                <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="edit" onClick={e => toggleModel('EditWorkFlow')}>
                                                    <i className="ri-edit-box-line align-middle"></i>
                                                </DropdownToggle>
                                            </>
                                            :
                                            <>
                                                <UncontrolledTooltip placement="bottom" target="AssignTask">
                                                    Assign Task
                                                </UncontrolledTooltip>
                                                <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="AssignTask" onClick={e => toggleModel('AssignTask')}>
                                                    <i className="ri-menu-line align-middle"></i>
                                                </DropdownToggle>
                                            </>
                                        }


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
            <Row>
                <Col lg={4}>
                    <div className="mb-2">
                        <div className="search-box">
                            <Input type="text" className="form-control search"
                                placeholder="Search" />
                            <i className="ri-search-line search-icon"></i>
                        </div>
                    </div>
                </Col>
                <div className="col-sm-auto ms-auto">
                    <div className="hstack gap-2 flex-wrap">
                        <button type="button" className="btn btn-soft-info"
                            onClick={e => toggleModel('Filter')} >
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
            <Filter
                formData={formData} setFormData={setFormData}
                show={modelName === 'Filter' ? true : false}
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
            <Completed
                show={modelName === 'Completed' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <EditWorkFlow
                show={modelName === 'EditWorkFlow' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <AssignTask
                show={modelName === 'AssignTask' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default SME;
