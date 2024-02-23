import React, { useMemo, useState, useCallback } from "react";
import { Col, Row, Input, UncontrolledTooltip, Container, Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import TableContainer from "../../../Components/Common/TableContainer";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import AddWorkflowTask from "./AddWorkflowTask";
import WorkflowTaskFilter from "./WorkflowTaskFilter";
import SweetAlert from "react-bootstrap-sweetalert";
import EditWorkflowTask from "./EditWorkflowTask";
import TaskInfo from "./TaskInfo";
import WorkflowTaskLog from "./WorkflowTaskLog";
import TaskStatusTaskInfo from "../../Deals/TaskStatus/TaskStatusTaskInfo";

const crmcontacts = [
    {
        id: 1,
        Milestone: "Terms of investment",
        Task: "Due diligence",
        dueDate: "04/05/2023",
        assignedBy: "Smriti Misra",
        Team: "",
        assignedTo: "Balrama Nair",
        CompanyName: "a(b)",
        Status :"PENDING"
    },
    {
        id: 2,
        Milestone: "(1) Screening to deep dive",
        Task: "1.2) Evaluation by Deal Committee",
        dueDate: "04/05/2023",
        assignedBy: "Smriti Misra",
        Team: "",
        assignedTo: "Donna Snider",
        CompanyName: "MIKE PVT LTD (MIKE PVT LTD)",
        Status : "PENDING"
    },
    {
        id: 3,
        Milestone: "(1) Screening to deep dive",
        Task: "(1.1) Readiness for Deal review",
        dueDate: "04/05/2023",
        assignedBy: "Donna Snider",
        Team: "",
        assignedTo: "Smriti Misra",
        CompanyName: "MIKE PVT LTD (MIKE PVT LTD)",
        Status : "COMPLETED"
    }
];

const WorkflowTask = () => {

    const [formData, setFormData] = useState({});
    const [modelName, setModelName] = useState("");
    const [isShowDeleteButton, setIsShowDeleteButton] = useState(false);
    const [deleteData, setDeleteData] = useState({ alert: false, id: "", status: "" });

    const toggleModel = (name) => {
        setModelName(name);
    };

    // Checked All
    const checkedAll = useCallback(() => {
        const checkall = document.getElementById("checkBoxAll");
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
        ele.length > 0 ? setIsShowDeleteButton(true) : setIsShowDeleteButton(false);
        let data = []
        for (let i in ele) {
            let row = ele[i];
            if (row.value != undefined) {
                data.push({ id: parseInt(row.value) })
            }
        }
    };

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
    }

    const submit = () => {
        // console.log(accountData)
    }

    crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });
    var result = Object.keys(formData).map((key) => [key, formData[key]]);

    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: <div className="form-check"><input type="checkbox" id="checkBoxAll" className="form-check-input" onClick={() => checkedAll()} /></div>,
                Cell: (cellProps) => {
                    return <div className="form-check">
                        <Input type="checkbox" className="leadsCheckBox form-check-input" value={cellProps.row.original.id} onChange={() => exportData()} />
                    </div>
                },
                id: '#',
            },
            {
                Header: "#",
                accessor: 'serial'
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
                accessor: "dueDate",
                filterable: false,
            },
            {
                Header: "Assigned By",
                accessor: "assignedBy",
                filterable: false,
            },
            {
                Header: "Team",
                accessor: "Team",
                filterable: false,
            },
            {
                Header: "Assigned To",
                accessor: "assignedTo",
                filterable: false,
            },
            {
                Header: "Company Name",
                accessor: "CompanyName",
                filterable: false,
            },
            {
                Header: "Status",
                accessor: "Status",
                filterable: false,
                Cell: (data) => (
                    <>
                        {/*  
                        className={data.row.original.Status === "COMPLETED" ? "btn btn-success btn-sm" : "btn btn-primary btn-sm"}
                        
                        className={data.row.original.Status === "COMPLETED" ? "badge badge bg-success" : "badge bg-primary"}*/}
            
                        <span className={data.row.original.Status === "COMPLETED" ? "badge badge-soft-success fs-12" : "badge badge-soft-danger fs-12"} >{data.row.original.Status}</span>
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
                                            <DropdownItem  onClick={e => setDeleteData({ alert: true, id: 1, status: 1 })}>
                                                <i className="ri-delete-bin-6-line align-middle me-1"></i>Delete Task
                                            </DropdownItem>
                                            <DropdownItem onClick={e => toggleModel('EditWorkflowTask')}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit Task
                                            </DropdownItem>
                                            <DropdownItem onClick={e => toggleModel('TaskInfo')}>
                                                <i className="ri-eye-line align-middle me-1"></i>View Info
                                            </DropdownItem>
                                            <DropdownItem onClick={e => toggleModel('WorkflowTaskLog')}>
                                                <i className="ri-history-fill align-middle me-1"></i>Task Edit Log
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </li>
                                {/* <li className="list-inline-item">
                                    <UncontrolledDropdown>

                                        <UncontrolledTooltip placement="bottom" target="DeleteTask">Delete Task</UncontrolledTooltip>
                                        <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="DeleteTask"  onClick={e => setDeleteData({ alert: true, id: 1, status: 1 })}>
                                            <i className="ri-delete-bin-6-line  align-middle"></i>
                                        </DropdownToggle>  

                                        <UncontrolledTooltip placement="bottom" target="EditTask">Edit Task</UncontrolledTooltip>
                                        <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="EditTask" onClick={e => toggleModel('EditWorkflowTask')}>
                                            <i className="ri-edit-box-line align-middle"></i>
                                        </DropdownToggle>

                                        <UncontrolledTooltip placement="bottom" target="ViewInfo">View Info</UncontrolledTooltip>
                                        <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="ViewInfo" onClick={e => toggleModel('TaskInfo')}>
                                            <i className="ri-eye-line align-middle"></i>
                                        </DropdownToggle>

                                        <UncontrolledTooltip placement="bottom" target="TaskLog">Task Edit Log</UncontrolledTooltip>
                                        <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="TaskLog" onClick={e => toggleModel('WorkflowTaskLog')}>
                                            <i className="ri-history-fill align-middle"></i>
                                        </DropdownToggle>

                                    </UncontrolledDropdown>
                                </li> */}
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
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Workflow Task" pageTitle="Workflow Task" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
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
                                                <button type="button" className="btn btn-brand-theme"
                                                    onClick={e => toggleModel('AddWorkflowTask')} >
                                                    <i className="ri-add-line align-bottom me-1"></i> Add
                                                </button>
                                                <button type="button" className="btn btn-soft-info"
                                                    onClick={e => toggleModel('WorkflowTaskFilter')} >
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
                                    {
                                        isShowDeleteButton &&
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <UncontrolledTooltip placement="bottom" target="Delete" >
                                                    Delete selected Task
                                                </UncontrolledTooltip>
                                                <button type="button" className="btn btn-soft-danger" id="Delete"
                                                    onClick={e => setDeleteData({ alert: true, id: 1, status: 1 })}>
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
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <SweetAlert
                custom
                show={deleteData.alert}
                btnSize="md"
                showCancel
                showProfile
                showCloseButton
                confirmBtnText="Yes"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={submit}
                onCancel={e => setDeleteData({ alert: false, id: "", status: "" })}
            >
                Are you sure you want to do this action?
            </SweetAlert>
            <AddWorkflowTask 
                show={modelName === 'AddWorkflowTask' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <EditWorkflowTask
                show={modelName === 'EditWorkflowTask' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <TaskStatusTaskInfo
               show={modelName === 'TaskInfo' ? true : false}
               onCloseClick={() => setModelName("")}
            />
            <WorkflowTaskLog
                show={modelName === 'WorkflowTaskLog' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <WorkflowTaskFilter
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'WorkflowTaskFilter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default WorkflowTask;
