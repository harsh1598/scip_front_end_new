import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import * as moment from "moment";
import Select from "react-select";

const AddFilingReport = ({ show, onCloseClick, formData, setFormData }) => {

    const handleChange = (name, event, index=null)=>{   

        let form = {...formData};

        if(index === 'multi'){
            
            if(name==='date'){
                form[name] = moment(event.toString()).format('DD/MM/YYYY');
            }else{
                form[name] = event;
            }
    
        }else{
          form[name] = event.target.value;
        }
        
        setFormData({...formData, ...form});
  
    }

    const CompanyStageList = [
        { value: 'Executivecouncil', label: 'Executive council' },
        { value: 'Family', label: 'Family' },
        { value: 'Founding', label: 'Founding' },
        { value: 'Individual ', label: 'Individual ' },
        { value: 'Institutional ', label: 'Institutional' },
        { value: 'Lifetime ', label: 'Lifetime ' }
    ];

    const Types = [
        {
            name: "Existing",
            checked: true,
            id:1
        },
        {
            name: "New",
            checked: false,
            id:2
        },
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
                Add Filing Report
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    {
                                        Types.map((val,ind) => {
                                            return <> <div className="form-check form-check-inline" key={ind}>
                                                    <input className="form-check-input" type="radio" id="inlineCheckbox2" value={val.name} checked ={(formData.Type && val.name === formData.Type)?true:false} onChange={ e => handleChange('Type',e )}/>
                                                    <label className="form-check-label" htmlFor="inlineCheckbox2">{val.name}</label>
                                                </div>
                                            </>
                                        })
                                    }
                                </div>
                            </Col>
                            {
                                formData.Type === "Existing" ?
                                <>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Label htmlFor="timezone" className="form-label">Filing Report</Label>
                                            <Select
                                                isClearable={true}
                                                // isMulti
                                                name="file"
                                                value={formData.file?formData.file:[]}
                                                onChange={e=>handleChange("file", e, 'multi')}
                                                options={CompanyStageList}
                                            />
                                        </div>
                                    </Col>
                                </>
                                :
                                <>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Label htmlFor="timezone" className="form-label">Filing Report Title </Label>
                                            <Select
                                                isClearable={true}
                                                // isMulti
                                                name="reportType"
                                                value={formData.reportType?formData.reportType:[]}
                                                onChange={e=>handleChange("reportType", e, 'multi')}
                                                options={CompanyStageList}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Label htmlFor="timezone" className="form-label">Filing Report Type</Label>
                                            <Select
                                                isClearable={true}
                                                // isMulti
                                                name="reportFormat"
                                                value={formData.reportFormat?formData.reportFormat:[]}
                                                onChange={e=>handleChange("reportFormat", e, 'multi')}
                                                options={CompanyStageList}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Label htmlFor="timezone" className="form-label">Filing Report Duration</Label>
                                            <Select
                                                isClearable={true}
                                                // isMulti
                                                name="reportFormat"
                                                value={formData.reportFormat?formData.reportFormat:[]}
                                                onChange={e=>handleChange("reportFormat", e, 'multi')}
                                                options={CompanyStageList}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Label htmlFor="timezone" className="form-label">Financial Year</Label>
                                            <Flatpickr
                                                className="form-control date-picker-icon"
                                                // id="datepicker-publish-input"
                                                name="date"
                                                placeholder="Select a date"
                                                value={formData.date?formData.date:[]}
                                                onChange={e => handleChange('date',e,'multi' )}
                                                options={{
                                                    mode: "single",
                                                    dateFormat: "d-m-Y"
                                                }}
                                            />
                                        </div>
                                    </Col>
                                </>
                            }
                        </Row>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme "
                        onClick={onCloseClick}
                    >
                        Submit
                    </button>
                    <button
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

export default AddFilingReport;
