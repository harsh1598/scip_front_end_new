import React from "react";
import { useState } from "react";
import { Card, CardBody, Col, Row, UncontrolledTooltip } from "reactstrap";

const PaymentGateway = () => {

    const [formData, setFormData] = useState({});

    const handleChange = (name, event, index=null)=>{   

        let form = {...formData};

        if(index === 'multi'){

            form[name] = event;
            
        }else{
          form[name] = event.target.value;
        }
        
        setFormData({...formData, ...form});
  
    }

    const Types = [
        {
            name: "Active",
            checked: true,
            id:1
        },
        {
            name: "Deactive",
            checked: false,
            id:2
        },
    ];
    
    return (
        <React.Fragment>
            <Row>
                <Col xl={4} lg={6}>
                    <Card>
                        <CardBody>
                            <div className="p-3 mt-n3 mx-n3 bg-soft-secondary rounded-top">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="mb-0 fs-15">CC Avenue</h5>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <UncontrolledTooltip placement="right" target="Avenue" >
                                           CC Avenue
                                        </UncontrolledTooltip>
                                        <div className="d-flex gap-1 align-items-center my-n2">
                                            <i className="ri-information-fill align-bottom fs-15" id="Avenue"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
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
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={4} lg={6}>
                    <Card>
                        <CardBody>
                            <div className="p-3 mt-n3 mx-n3 bg-soft-secondary rounded-top">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="mb-0 fs-15">Razor Pay </h5>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <UncontrolledTooltip placement="right" target="RazorPay" >
                                            Razor Pay 
                                        </UncontrolledTooltip>
                                        <div className="d-flex gap-1 align-items-center my-n2">
                                            <i className="ri-information-fill align-bottom fs-15" id="RazorPay"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
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
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default PaymentGateway;
