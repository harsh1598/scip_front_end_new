import React from "react";
import {  Offcanvas,  OffcanvasHeader,  OffcanvasBody,  Label,  Row, Col, } from "reactstrap";
import Flatpickr from "react-flatpickr";
import * as moment from "moment";

const InvestmentCommitteeFilter = ({ show, onCloseClick, formData, setFormData }) => {

    const handleChange = (name, event, index=null)=>{   

        let form = {...formData};

        if(index === 'multi'){
            
            if(name==='date'){

                let Date= event;
                let DateCount =  Object.values(Date); 
                if(DateCount.length > 1){
                    let date1 = moment(DateCount[0].toString()).format('DD/MM/YYYY');
                    let date2 = moment(DateCount[1].toString()).format('DD/MM/YYYY');
                    let finalDate = {"StartDate":date1 , "EndDate":date2};
                    form[name] = finalDate;
                }else{
                    form[name] = moment(Date.toString()).format('DD/MM/YYYY');
                }

            }else{
                form[name] = event.target.value;
            }
         
        }else{
          form[name] = event.value;
        }
        
        setFormData({...formData, ...form});
  
    }

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Investment Committee Filters
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
                                    <Label htmlFor="timezone" className="form-label">Date </Label>
                                    <Flatpickr
                                        className="form-control date-picker-icon"
                                        name="date"
                                        placeholder="Select a date"
                                        // value={new Date()}
                                        
                                        onChange={e => handleChange('date',e,'multi' )}
                                        options={{
                                            mode: "range",
                                            dateFormat: "d-m-Y",
                                            allowInput:true
                                        }}
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

export default InvestmentCommitteeFilter;
