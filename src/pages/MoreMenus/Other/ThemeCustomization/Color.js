import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Card, CardBody, CardHeader, Input, Label, UncontrolledTooltip } from "reactstrap";

const Color = ({ data , setData }) => {

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

    const Statusdata = [
        {
            title: "Status",
            iconshow: "Yes",
            iconid: "Status",
            iconMsg: "Visibility status",
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
                <CardHeader to="#" className="bg-soft-warning ">
                    <h3 className="mb-0 fs-15">{data.id ? "Edit Chart Color":"Add New Color"}</h3>
                </CardHeader>
                <CardBody>
                    <div className="mb-3">
                        <Label htmlFor="name-field" className="form-label">Color Name</Label>
                        <Input
                            name="title" id="customername-field"
                            className="form-control" placeholder="Name "
                            value={data.title ? data.title : ""} type="text"
                            validate={{
                                required: { value: true },
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <Label htmlFor="name-field" className="form-label">Color Code <span className="text-danger">*</span></Label>
                        <Input
                            name="color" id="customername-field"
                            className="form-control" placeholder="Menu Title "
                            value={data.color ? data.color : ""} type="text"
                            validate={{
                                required: { value: true },
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <Label htmlFor="name-field" className="form-label">Order/Sequence <span className="text-danger">*</span></Label>
                        <Input
                            name="order" id="customername-field"
                            className="form-control" placeholder="Color order "
                            value={data.order ? data.order : ""} type="text"
                            validate={{
                                required: { value: true },
                            }}
                        />
                    </div>
                    <div className="mb-3 offcanvas-footer border-top border-bottom p-3">
                        {
                            Statusdata.map((item, index) => {
                                return (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                    <div className="col-sm-auto ms-auto">
                        <div className="hstack gap-2 flex-wrap">
                            <button
                                type="button"
                                className="btn btn-success"
                                id="create-btn"
                            >
                                {data.id ? "Update":" Add "}
                            </button>
                        </div>
                    </div>
                </CardBody>
            </Card>

        </React.Fragment>
    );
};

export default Color;
