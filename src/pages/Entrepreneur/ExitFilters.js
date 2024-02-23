import React, { useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,

} from "reactstrap";

import Select from "react-select";
import * as moment from "moment";

const ExitFilters = ({ show, onCloseClick, formData, setFormData }) => {

    const handleChange = (name, event, index=null)=>{   

        let form = {...formData};

        if(index === 'multi'){
            
            if(name==='date'){
                form[name] = moment(event.toString()).format('DD/MM/YYYY');
            }else{
                form[name] = event;
            }
         
        }else{
          form[name] = event.value;
        }
        
        setFormData({...formData, ...form});
  
    }

    const CompanyStageList = [
        { value: 'Mitesh Kulkarni ', label: 'Mitesh Kulkarni ' }
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
                Exit Information Filters
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <div>
                        <Label
                            htmlFor="leads-tags"
                            className="form-label text-muted text-uppercase fw-semibold mb-3"
                        > Filters
                        </Label>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Select Investor</Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="companyStage"
                                        value={formData.companyStage ? formData.companyStage : []}
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
                        type="submit"
                        className="btn btn-brand-theme  "
                        onClick={onCloseClick}
                    >
                        Apply
                    </button>
                    <button
                        className="btn btn-light  "
                        onClick={onCloseClick}
                    >
                        Clear Filter
                    </button>

                </div>
            </form>
        </Offcanvas>
    );
};

export default ExitFilters;
