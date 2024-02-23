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

const ContributionFilter = ({ show, onCloseClick, formData, setFormData }) => {

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
        { value: 'Active', label: 'Active' },
        { value: 'InActive', label: 'InActive' },
        { value: 'Deleted', label: 'Deleted' },
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
                                        <Label htmlFor="timezone" className="form-label">Status </Label>
                                        <Select
                                            isClearable={true}
                                            // isMulti
                                            name="profile"
                                            value={formData.profile?formData.profile:[]}
                                            onChange={e=>handleChange("profile", e, 'multi')}
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

export default ContributionFilter;
