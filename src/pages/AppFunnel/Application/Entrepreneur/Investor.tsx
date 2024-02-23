import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Col, Row, Input} from "reactstrap";
import Select from "react-select";

interface propData {
    show: boolean;
    onCloseClick: any;
  };

const Investor = (props: propData) => {

    const CompanyStageList = [
        { value: 'Investor', label: 'Book building' },
        { value: 'PE', label: 'Yet To be Funded' },
        { value: 'VC', label: 'Funded' }
    ];

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                Investor
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label"> Download Investors by </Label>
                                <Select
                                    isClearable={true}
                                    placeholder="Select "
                                    // isMulti
                                    name="applicationstatus"
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3 pb-2">
                                <Label htmlFor="note"
                                className="form-label">Functional Expertise
                                </Label>
                                <Select
                                    isClearable={true}
                                    placeholder=""
                                    isMulti
                                    name="applicationstatus"
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button type="submit" className="btn btn-brand-theme"onClick={props.onCloseClick}>
                        Apply
                    </button>
                    <button className="btn btn-light" onClick={props.onCloseClick} >
                        Clear Filter
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default Investor;
