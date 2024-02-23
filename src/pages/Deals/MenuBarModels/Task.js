import React from "react";
import {
    Col,
    Label,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Row,
} from "reactstrap";
import Select from "react-select";

const Task = ({ show, onCloseClick }) => {

    const CompanyStatus = [
        { value: 'Investor', label: 'Yes' },
        { value: 'Investor', label: 'No' }
    ];

    const handleChange = (name, event, index = null) => {

    }

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick}
            className="size-sm">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Task
            </OffcanvasHeader>
            <OffcanvasBody >
                <Row>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="timezone" className="form-label">Status</Label>
                            <Select
                                isClearable={true}
                                placeholder="Select "
                                // isMulti
                                name="applicationstatus"
                                options={CompanyStatus}
                            />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3 ">
                            <Label htmlFor="note"
                                className="form-label">Comment</Label>
                            <textarea className="form-control"
                                id="note"
                                placeholder="Comment"
                                rows="3" defaultValue=""></textarea>
                        </div>
                    </Col>
                </Row>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default Task;
