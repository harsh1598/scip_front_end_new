import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Card, CardBody , UncontrolledTooltip } from "reactstrap";

const DealFilters = () => {

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

    const data = [
        {
            title: "Filter Status",
            iconshow: "Yes",
            iconid: "visibility",
            iconMsg: "Set Deal filter menu visibility status",
            types: [
                {
                    name: "Active",
                    checked: true,
                    id: 1
                },
                {
                    name: "Deactive",
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
                    <h3 className="mb-0 fs-15">Manage Deal Filters</h3>
                </CardBody>
            </Card>
            {
                data.map((item, index) => {
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

export default DealFilters;
