import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
} from "reactstrap";
import Select from "react-select";

const DashboardStepFilter = ({ show, onCloseClick, formData, setFormData }) => {

    const handleChange = (name, event, index=null)=>{   

        let form = {...formData};

        if(index === 'multi'){
            form[name] = event;
        }else{
          form[name] = event.value;
        }
        
        setFormData({...formData, ...form});
  
    }

    const CompanyStageList = [
        { value: 'Beta', label: 'Beta' },
        { value: 'Concept', label: 'Concept' },
        { value: 'Idea', label: 'Idea' },
        { value: 'PreRevenue ', label: 'Pre Revenue ' },
        { value: 'Revenue ', label: 'Revenue' },
        { value: 'All ', label: 'All ' }
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
             Filters
            </OffcanvasHeader>
            {/*  h-100 */}
                <form action="" className="d-flex flex-column justify-content-end h-100">
                    <OffcanvasBody >
                        <div>
                            <Row>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">User </Label>
                                        <Select
                                            isClearable={true}
                                            // isMulti
                                            name="user"
                                            value={formData.user?formData.user:[]}
                                            onChange={e=>handleChange("user", e, 'multi')}
                                            options={CompanyStageList}
                                        />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Label htmlFor="timezone" className="form-label">Company Stage </Label>
                                        <Select
                                            isClearable={true}
                                            // isMulti
                                            name="companyStage"
                                            value={formData.companyStage?formData.companyStage:[]}
                                            onChange={e=>handleChange("companyStage", e, 'multi')}
                                            options={CompanyStageList}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="button"
                        className="btn btn-brand-theme  "
                        onClick={onCloseClick}
                    >
                        Submit
                    </button>
                    <button
                         type="button"
                        className="btn btn-light  "
                        onClick={onCloseClick}
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </Offcanvas>
    );
};

export default DashboardStepFilter;
