import React, { useMemo, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Input} from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import TableContainer from "../../../../Components/Common/TableContainer";
import { Link } from "react-router-dom";
import KanbanTaskFilter from "./KanbanTaskFilter";
import SweetAlert from "react-bootstrap-sweetalert";
import CompleteTask from "./CompleteTask";
import EditkanbanTask from "./EditkanbanTask";

const KanbanTask = () => {

    document.title = `${ProjectName} | Kanban`;
    const [archiveData, setArchiveData] = useState({ alert: false, id: "", status: "" });
    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggleModel = (name) => {
        setModelName(name);
    };

    const submit = () => {
        // console.log(profileData)
    }

    const crmcontacts = [
        {
            id: 1,
            milestone: "Post Investment monitoring",
            title: "Track CS",
            user: "gayathri verma",
            assigned: "GA",
            createddate: "08/02/2020",
            dueDate: "08/02/2020",
            priority: "MEDIUM",
            status: "PENDING"
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
                Header: "Milestone",
                accessor: "milestone",
                filterable: false,
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
                Header: "Assigned",
                accessor: "assigned",
                filterable: false,
                Cell: (data) => {
                    let assigned = data.row.original.assigned;
                    return (
                        <>
                            <span className="badge bg-success rounded-pill fs-12">{assigned}</span>
                        </>
                    )
                },
            },
            {
                Header: "Created Date",
                accessor: "createddate",
                filterable: false,
            },
            {
                Header: "Due Date",
                accessor: "dueDate",
                filterable: false,
            },
            {
                Header: "Priority",
                accessor: "priority",
                filterable: false,
                Cell: (data) => {
                    let priority = data.row.original.priority;
                    return (
                        <>
                            <span className={priority === "MEDIUM" ? "badge badge-soft-warning fs-12" : ""}>{priority}</span>
                        </>
                    )
                },
            },
            {
                Header: "Status",
                accessor: "status",
                filterable: false,
                Cell: (data) => {
                    let status = data.row.original.status;
                    return (
                        <>
                            <span className={status === "PENDING" ? "badge badge-soft-primary fs-12" : "badge badge-soft-success fs-12"}>{status}</span>
                        </>
                    )
                },
            },
            {
                Header: "Action",
                Cell: (cellProps) => {
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
                                            <DropdownItem onClick={e => setArchiveData({ alert: true, id: 1, status: 1 })} >
                                                <i className="ri-archive-line   align-middle me-1"></i>Archive Task
                                            </DropdownItem>
                                            <DropdownItem onClick={e => toggleModel('CompleteTask')}>
                                                <i className="ri-checkbox-line align-middle text-warning me-1"></i>Complete Task
                                            </DropdownItem>
                                            <DropdownItem onClick={e => toggleModel('EditkanbanTask')}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit Task
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link className="text-body" tag="button" id="Team" to="/admin/kanban/taskLog">
                                                    <i className="ri-history-line align-middle me-1"></i>Task Log
                                                </Link>
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
                    <BreadCrumb title="Kanban Task" pageTitle="Kanban Task" location={"/admin/menu"} />
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
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('KanbanTaskFilter')}>
                                                    <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
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
            <KanbanTaskFilter
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'KanbanTaskFilter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <CompleteTask 
                show={modelName === 'CompleteTask' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <EditkanbanTask
                show={modelName === 'EditkanbanTask' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <SweetAlert
                custom
                show={archiveData.alert}
                btnSize="md"
                showCancel
                showProfile
                showCloseButton
                confirmBtnText="Yes"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={submit}
                onCancel={e => setArchiveData({ alert: false, id: "", status: "" })}
            >
                Are you sure you want to do this action?
            </SweetAlert>
        </React.Fragment>
    );
};

export default KanbanTask;
