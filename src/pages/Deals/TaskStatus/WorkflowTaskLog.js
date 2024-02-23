import React from "react";
import {
    Alert,
    Button,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
} from "reactstrap";
const WorkflowTaskLog = ({ show, onCloseClick }) => {

    return (
        <Offcanvas
            isOpen={show}
            direction="end"
            toggle={onCloseClick}
            id="offcanvasCreateGroup"
            className="border-bottom size-md"
        >
            <OffcanvasHeader
                className="bg-light"
                toggle={onCloseClick}
                id="offcanvasRightLabel"
            >
                Workflow Task Log
            </OffcanvasHeader>
            <OffcanvasBody className="px-0 overflow-hidden">
                <div className="px-4">
                    <div className="table-responsive table-card">
                    <table className="table align-middle table-nowrap table-striped-columns mb-0">
                        <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th scope="col">Workflow</th>
                            <th scope="col">Milestone</th>
                            <th scope="col">Task</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Assigned To</th>
                            <th scope="col">Team</th>
                            <th scope="col">Status</th>
                            <th scope="col">Comment</th>
                            <th scope="col">Active</th>
                            <th scope="col">Rubric/Note</th>
                            <th scope="col">Rubric/Note Title</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Updated By</th>
                            <th scope="col">Updated Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td colSpan={15}>
                            <Alert color="info" className="text-center mb-0">
                                No Document Found.
                            </Alert>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </OffcanvasBody>
            <div className="offcanvas-foorter border p-3 text-center">
                <div className="hstack gap-2 justify-content-end">
                    <Button toggle={onCloseClick} className="btn btn-light">
                        Cancel
                    </Button>
                </div>
            </div>
        </Offcanvas>
    );

};

export default WorkflowTaskLog;
