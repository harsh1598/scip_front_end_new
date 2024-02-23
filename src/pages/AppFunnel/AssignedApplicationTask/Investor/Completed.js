import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Col, Row, Input} from "reactstrap";
import Select from "react-select";
const Completed = ({ show, onCloseClick }) => {

    const CompanyStageList = [
        { value: 'Investor', label: 'Book building' },
        { value: 'PE', label: 'Yet To be Funded' },
        { value: 'VC', label: 'Funded' }
    ];

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Complete the Task
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label"> Status </Label>
                                <Select
                                    isClearable={true}
                                    placeholder="Select Status "
                                    // isMulti
                                    name="applicationstatus"
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3 pb-2">
                                <Label htmlFor="note"
                                className="form-label">Comment</Label>
                                <textarea className="form-control"
                                id="note" placeholder="Comment"
                                rows="3" defaultValue=""></textarea>
                            </div>
                        </Col>
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button type="submit" className="btn btn-brand-theme"onClick={onCloseClick}>
                        Apply
                    </button>
                    <button className="btn btn-light" onClick={onCloseClick} >
                        Clear Filter
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default Completed;
