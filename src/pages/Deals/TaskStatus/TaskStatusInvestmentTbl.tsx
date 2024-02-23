import React, { useEffect, useState } from "react";
import { CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../Components/Grid/Grid";
import WebService from "../../../utility/WebService";
import TaskStatusTaskInfo from "./TaskStatusTaskInfo";

interface propdata {
    toggleModel: any
}

const headers: GridHeader[] = [
    {
        title: "Milestone",
        classTitle: "text-start",
    },
    {
        title: "Task",
        classTitle: "text-start",
    },
    {
        title: "Due Date",
        classTitle: "text-start",
    },
    {
        title: "Assigned To",
        classTitle: "text-start",
    },
    {
        title: "Assigned Date",
        classTitle: "text-start",
    },
    {
        title: "Status",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const TaskStatusInvestmentTbl = (props: propdata) => {
    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [isShowTaskStatusInfo, setIsShowTaskStatusInfo] = useState(false);
    const [workflowTaskId, setWorkFlowTaskId] = useState<any>();

    useEffect(() => {
        getlist(1);
    }, []);

    const onchange = (currentPage: number) => {
        getlist(currentPage)
    };

    const getlist = (page?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj.offset = page - 1;
        obj.workflowTaskId = 2403;
        WebService.getAPI({
            action: `/task-status-list-data`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: res.list[i].stage_title });
                    columns.push({ value: res.list[i].substage_title });
                    columns.push({ value: res.list[i].due_date });
                    columns.push({ value: res.list[i].assigned_to });
                    columns.push({ value: res.list[i].added_date });
                    columns.push({ value: isshowallEditable({ status: res.list[i].status }) });
                    columns.push({ value: actionList(res.list[i]) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    const isshowallEditable = (data: any) => {
        return (
            <>
                <span className={data.status === "PENDING" ? "badge badge-soft-warning fs-12" : "badge badge-soft-success fs-12"} >{data.status}</span>
            </>
        );
    };

    const actionList = (data: any) => {
        console.log("data", data);
        
        return (
            <>
                <ul className="list-inline  gap-2 mb-0">
                    <li className="list-inline-item">
                        <UncontrolledDropdown>
                            <DropdownToggle
                                className="btn btn-soft-secondary btn-sm dropdown"
                                tag="button"
                            >
                                <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem onClick={(e) => props.toggleModel("DocumentTracking")}>
                                    <i className="ri-file-line fs-20 align-middle me-1"></i>Document Tracking
                                </DropdownItem>
                                {data.status == "COMPLETED" && 
                                <DropdownItem onClick={(e) => props.toggleModel("DueDetails")} >
                                    <i className="ri-information-fill fs-20 align-middle me-1"></i>Due Details
                                </DropdownItem>
                                }
                                {/* {data.is_workflow_checklist > 0 &&  */}
                                <DropdownItem onClick={(e) => onClickTaskIfo(data.workflowTaskId)}>
                                    <i className="ri-chat-check-line fs-20 align-middle me-1"></i>Task Info
                                </DropdownItem>
                                {/* } */}
                                <DropdownItem onClick={(e) => props.toggleModel("WorkflowTaskLog")}>
                                    <i className="ri-history-fill fs-20 align-middle me-1"></i>Workflow Task Log
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const onClickTaskIfo = (id: any) => {
        setIsShowTaskStatusInfo(true);
        setWorkFlowTaskId(id)
    };


  const closeTaskStatusInfo = () => {
    setWorkFlowTaskId('')
    setIsShowTaskStatusInfo(false);
    }



    return (
        <>
              {isShowTaskStatusInfo &&
                <TaskStatusTaskInfo
                    show={isShowTaskStatusInfo}
                    onCloseClick={closeTaskStatusInfo}
                    workFlowId={workflowTaskId}
                />
            }
            <Card className="mb-1 g-2">
                <CardHeader className="align-items-center card-header">
                    <h4 className="card-title card-title mb-0 me-2">Investment Tasks</h4>
                </CardHeader>
                <div className="px-3 mt-3">
                    <div className="table-card">
                        <Grid
                            headers={headers}
                            rows={rows}
                            count={totalCount}
                            errorMessage={"No Data Found"}
                            ShowLoader={showloader}
                            class2={true}
                            onPageChange={onchange} />
                    </div>
                </div>
            </Card>
        </>
    );
};

export default TaskStatusInvestmentTbl;
