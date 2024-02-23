import React, { memo, useEffect, useState } from 'react';
import WebService from '../../../utility/WebService';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Input,
    Row,
} from "reactstrap";
import TaskStatusTbl from './TaskStatusInvestmentTbl';
import HelperService from '../../../utility/HelperService';
import TaskStatusInvestmentTbl from './TaskStatusInvestmentTbl';
import InformationAwaitedViewMore from './InformationAwaitedViewMore';

interface propdata {
    section: any;
    childData: any
}

const TaskStatusCard = (props: propdata) => {
    const [taskStatus, setTaskStatus] = useState<any>()
    const [modelName, setModelName] = useState("");
    const [isShowInformationAwaited, setIsShowInformation] = useState(false);
    const [viewMoreId, setViewMoreId] = useState<any>();


    useEffect(() => {
        getList();
    }, [])

    const getList = () => {
        var obj: any = {}
        obj.workflowTaskId = '2403'
        WebService.getAPI({
            action: `/task-status-card-data`,
            body: obj
        })
            .then((res: any) => {
                setTaskStatus(res.result);
                setViewMoreId(res?.result?.workflowTaskId)
            })
            .catch((e) => {
            });
    };


    const toggleModel = (name: any) => {
        setModelName(name);
    };

    const closeInformationAwaited = () => {
        setIsShowInformation(false);
    }

    return (
        <>
            {isShowInformationAwaited &&
                <InformationAwaitedViewMore
                    show={isShowInformationAwaited}
                    onCloseClick={closeInformationAwaited}
                    workFlowId={viewMoreId}
                />
            }

      
            <Col lg={12}>
                {props.section == 'ASSIGNED_TO' &&
                    <Col className="border-box mt-3" >
                        <Card style={{ height: !taskStatus ? '90px' : '73px' }} className={!taskStatus ? 'small-card-loader card-body mb-0 ml-2' : 'card-body mb-0 ml-2'}>
                            {taskStatus &&
                                <div className="text-center border-box ">
                                    <h4 className="fs-15 fw-seminormal mb-1">
                                        <span
                                            className="counter-value"
                                            data-target="Assigned to"
                                        >
                                            Assigned to{" "}
                                            <a href="javascript:void(0)">{taskStatus?.assigned_to?.name}</a>
                                        </span>
                                    </h4>
                                    <h5 className="text-muted fs-13 mb-0">Team SCIP</h5>
                                </div>
                            }
                        </Card>
                    </Col>
                }
                {props.section == 'CURRENT_STAGE' &&
                    <Col >
                        <Col className="border-box  mt-3" >
                            <Card style={{ height: !taskStatus ? '90px' : '73px' }} className={!taskStatus ? 'small-card-loader card-body mb-0' : 'card-body mb-0'}>
                                {taskStatus &&
                                    <div className="text-center">
                                        <h4 className="fs-15 fw-seminormal mb-1">
                                            <span
                                                className="counter-value"
                                                data-target="Current Stage"
                                            >
                                                Current Stage
                                            </span>
                                        </h4>
                                        <h5 className="text-muted fs-13 mb-0">
                                            {taskStatus?.current_stage?.substage_title}
                                        </h5>
                                    </div>
                                }
                            </Card>
                        </Col>
                    </Col>
                }
                {props.section == 'DATE_OF_ASSIGNMENT' &&
                    <Col >
                        <Col className="border-box  mt-3">
                            <Card style={{ height: !taskStatus ? '90px' : '73px' }} className={!taskStatus ? 'small-card-loader card-body mb-0 ' : 'card-body mb-0 '}>
                                {taskStatus &&
                                    <div className="text-center">
                                        <h4 className="fs-15 fw-seminormal mb-1">
                                            <span
                                                className="counter-value"
                                                data-target="Date of Assignment"
                                            >
                                                Date of Assignment
                                            </span>
                                        </h4>
                                        <h5 className="text-muted fs-12 mb-0"> {HelperService.getOrderDateFormat(taskStatus?.current_stage?.added_date)}</h5>
                                    </div>
                                }
                            </Card>
                        </Col>
                    </Col>
                }
                {props.section == 'NO_OF_DAYS_SINCE_ASSIGNMENT' &&
                    <Col >
                        <Col className="border-box  mt-3">
                            <Card style={{ height: !taskStatus ? '90px' : '73px' }} className={!taskStatus ? 'small-card-loader card-body mb-0 ' : 'card-body mb-0 '}>
                                {taskStatus &&
                                    <div className="text-center">
                                        <h4 className="fs-15 fw-seminormal mb-1">
                                            <span
                                                className="counter-value"
                                                data-target="No of Days Since Assignment"
                                            >
                                                No of Days Since Assignment
                                            </span>
                                        </h4>
                                        <h5 className="text-muted fs-13 mb-0">
                                            Planned - {taskStatus?.planned} Days | Actual - {taskStatus?.actual} Days
                                        </h5>
                                    </div>
                                }
                            </Card>
                        </Col>
                    </Col>
                }
                {props.section == 'INFORMATION_AWAITED_NEXT_SECTION' &&
                    <Col >

                        <Col className="border-box  mt-3">
                            <Card style={{ height: !taskStatus ? '90px' : '73px' }} className={!taskStatus ? 'small-card-loader card-body mb-0 ' : 'card-body mb-0 '}>
                                {taskStatus &&
                                    <div className="text-center">
                                        <h4 className="fs-15 fw-seminormal mb-1">
                                            <span
                                                className="counter-value"
                                                data-target="Information Awaited / Next Action"
                                            >
                                                Information Awaited / Next Action
                                            </span>
                                        </h4>
                                        <h5 className="text-muted fs-13 mb-0">
                                            <a href="javascript:void(0)" onClick={() => setIsShowInformation(true)}>View More</a>
                                        </h5>
                                    </div>
                                }
                            </Card>
                        </Col>
                    </Col>
                }
                <Row className="g-2 mt-1" >
                    {props.section == 'INVESTMENT_TASK_LIST' &&
                        <Col style={{ paddingLeft: "12px" }}>
                            <TaskStatusInvestmentTbl toggleModel={toggleModel} />
                        </Col>
                    }
                </Row>

            </Col >









            {/* <Col md={4} className="border-box">
                <Card className="card-body mb-0">
                    <div className="text-center">
                        <h4 className="fs-15 fw-seminormal mb-1">
                            <span
                                className="counter-value"
                                data-target="Assigned to"
                            >
                                Assigned to{" "}
                                <a href="javascript:void(0)">Aditya Reddy</a>
                            </span>
                        </h4>
                        <h5 className="text-muted fs-13 mb-0">Team SCIP</h5>
                    </div>
                </Card>
            </Col>
            <Col md={4} className="border-box">
                <Card className="card-body mb-0">
                    <div className="text-center">
                        <h4 className="fs-15 fw-seminormal mb-1">
                            <span
                                className="counter-value"
                                data-target="Current Stage"
                            >
                                Current Stage
                            </span>
                        </h4>
                        <h5 className="text-muted fs-13 mb-0">
                            Appoint Investment Director
                        </h5>
                    </div>
                </Card>
            </Col>
            <Col md={4} className="border-box">
                <Card className="card-body mb-0">
                    <div className="text-center">
                        <h4 className="fs-15 fw-seminormal mb-1">
                            <span
                                className="counter-value"
                                data-target="Date of Assignment"
                            >
                                Date of Assignment
                            </span>
                        </h4>
                        <h5 className="text-muted fs-12 mb-0">01/08/2023</h5>
                    </div>
                </Card>
            </Col>
            <Col md={6} className="border-box">
                <Card className="card-body mb-0">
                    <div className="text-center">
                        <h4 className="fs-15 fw-seminormal mb-1">
                            <span
                                className="counter-value"
                                data-target="No of Days Since Assignment"
                            >
                                No of Days Since Assignment
                            </span>
                        </h4>
                        <h5 className="text-muted fs-13 mb-0">
                            Planned - 30 Days | Actual - 22 Days
                        </h5>
                    </div>
                </Card>
            </Col>
            <Col md={6} className="border-box">
                <Card className="card-body mb-0">
                    <div className="text-center">
                        <h4 className="fs-15 fw-seminormal mb-1">
                            <span
                                className="counter-value"
                                data-target="Information Awaited / Next Action"
                            >
                                Information Awaited / Next Action
                            </span>
                        </h4>
                        <h5 className="text-muted fs-13 mb-0">
                            <a href="javascript:void(0)">View More</a>
                        </h5>
                    </div>
                </Card>
            </Col> */}
        </>
    );
};

export default memo(TaskStatusCard);
