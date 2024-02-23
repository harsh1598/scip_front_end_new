import React, { Fragment } from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
const DueDetails = ({ show, onCloseClick }) => {

    let data = [
        {
            AssignedDate:"05/08/2022",
            DueDate:"31/08/2022",
            CompletedDate:"05/08/2022",
            Noofdays:"1"
        },
    ]

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
                {" "}
                Due Details
            </OffcanvasHeader>
            <OffcanvasBody className="px-0 overflow-hidden">
                <div className="px-4">
                    <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">Assigned Date</th>
                                    <th scope="col">Due Date</th>
                                    <th scope="col">Completed Date</th>
                                    <th scope="col">No of days took to complete the task</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.length && data.map((item, index) => {
                                        return <Fragment key={index}>
                                            <tr>
                                                <td>{item.AssignedDate}</td>
                                                <td>{item.DueDate}</td>
                                                <td>{item.CompletedDate}</td>
                                                <td>{item.Noofdays} Days</td>
                                            </tr>
                                        </Fragment>
                                    })
                                }
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

export default DueDetails;
