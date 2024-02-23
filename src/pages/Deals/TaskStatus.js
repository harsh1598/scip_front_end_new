import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import SimpleBar from "simplebar-react";
import TaskStatusTbl from "./TaskStatus/TaskStatusInvestmentTbl";
import DocumentTracking from "./TaskStatus/DocumentTracking";
import WorkflowTaskLog from "./TaskStatus/WorkflowTaskLog";
import TaskInfo from "./TaskStatus/TaskStatusTaskInfo";
import DueDetails from "./TaskStatus/DueDetails";
import TaskStatusCard from "./TaskStatus/TaskStatusCard";
import TaskStatusTaskInfo from "./TaskStatus/TaskStatusTaskInfo";

const TaskStatus = () => {
  const [modelName, setModelName] = useState("");
  const toggleModel = (name) => {
    setModelName(name);
  };

  return (
    <React.Fragment>
      <Row className="g-2">
        <TaskStatusCard />
      </Row>
      <Row className="g-2 mt-1">
        <Col lg={12}>
          <TaskStatusTbl toggleModel={toggleModel} />
        </Col>
      </Row>

      {/* Document Tracking Modal */}
      <DocumentTracking
        show={modelName === "DocumentTracking" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      {/* Due Details Modal */}
      <DueDetails
        show={modelName === "DueDetails" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      {/* Task Info Modal */}
      <TaskStatusTaskInfo
        show={modelName === "TaskInfo" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      {/* Workflow Task Log Modal */}
      <WorkflowTaskLog
        show={modelName === "WorkflowTaskLog" ? true : false}
        onCloseClick={() => setModelName("")}
      />
    </React.Fragment>
  );
};

export default TaskStatus;
