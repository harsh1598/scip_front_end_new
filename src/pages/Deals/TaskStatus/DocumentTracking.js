import React from "react";
import {
    Alert,
    Button,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
} from "reactstrap";
const DocumentTracking = ({ show, onCloseClick }) => {

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
                Document Tracking
            </OffcanvasHeader>
            <OffcanvasBody className="px-0 overflow-hidden">
                <div className="px-4">
                    <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">Document</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Added By</th>
                                    <th scope="col">Added Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={4}>
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

export default DocumentTracking;
