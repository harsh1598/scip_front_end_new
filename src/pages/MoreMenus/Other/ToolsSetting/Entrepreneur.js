import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Card, CardBody , UncontrolledTooltip } from "reactstrap";

const Entrepreneur = () => {

    const [formData, setFormData] = useState({});

    const handleChange = (name, event, index = null) => {

        let form = { ...formData };

        if (index === 'multi') {

            form[name] = event;

        } else {
            form[name] = event.target.value;
        }

        setFormData({ ...formData, ...form });

    }

    const EntrepreneurData = [
        {
            title: "IRR Page View Type",
            iconshow: "Yes",
            iconid: "IRRPage",
            iconMsg: "Please choose Entrepreneur irr page view type",
            types: [
                {
                    name: "Raw Data",
                    checked: true,
                    id: 1
                },
                {
                    name: "Angel Data",
                    checked: false,
                    id: 2
                },
            ]
        },
        {
            title: "IRR angel network data",
            iconshow: "No",
            iconid: "",
            iconMsg: "",
            types: [
                {
                    name: "Show",
                    checked: true,
                    id: 1
                },
                {
                    name: "Hide",
                    checked: false,
                    id: 2
                },
            ]
        },
        {
            title: "IRR investor data",
            iconshow: "No",
            iconid: "",
            iconMsg: "",
            types: [
                {
                    name: "Show",
                    checked: true,
                    id: 1
                },
                {
                    name: "Hide",
                    checked: false,
                    id: 2
                },
            ]
        },
    ]
    
    return (
        <React.Fragment>
            <Card className="static-toggle bg-warning-subtle">
                <CardBody to="#" className="bg-soft-warning ">
                    <h3 className="mb-0 fs-15 text-center">Entrepreneur</h3>
                </CardBody>
            </Card>
            {
                EntrepreneurData.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-0 fs-15">{item.title} </h5>
                                        </div>
                                        {
                                            item.iconshow === "Yes" &&

                                            <div className="flex-shrink-0">
                                                <UncontrolledTooltip placement="right" target={item.iconid} >
                                                    {item.iconMsg}
                                                </UncontrolledTooltip>
                                                <div className="d-flex gap-1 align-items-center my-n2">
                                                    <i className="ri-information-fill align-bottom fs-15" id={item.iconid}></i>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                    <div className="py-2">
                                        {
                                            item.types.map((val, ind) => {
                                                return <> <div className="form-check form-check-inline" key={ind}>
                                                    <input className="form-check-input" type="radio" id="inlineCheckbox2" value={val.name} checked={(formData.Type && val.name === formData.Type) ? true : false} onChange={e => handleChange('Type', e)} />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox2">{val.name}</label>
                                                </div>
                                                </>
                                            })
                                        }
                                    </div>
                                </CardBody>
                            </Card>
                        </Fragment>
                    )
                })
            }
        </React.Fragment>
    );
};

export default Entrepreneur;
