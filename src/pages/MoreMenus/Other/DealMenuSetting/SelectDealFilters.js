import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import SimpleBar from "simplebar-react";

const data = [
    {
        id: 1,
        name: "Snapshot",
    },
    {
        id: 2,
        name: "Dashboard",
    },
    {
        id: 3,
        name: "My Portfolio",
    },
    {
        id: 4,
        name: "Intersted Companies",
    },
    {
        id: 5,
        name: "Partial Exited Companies",
    },
    {
        id: 6,
        name: "Exited Companies",
    },
    {
        id: 7,
        name: "Under Evaluation",
    },
]


const Entrepreneur = () => {

    const [dealList, setDealList] = useState([]);

    const handleClick = (item) => {
        setDealList([
            ...dealList,
            { id: item.name, name: item.name }
        ]);
    }

    const handleRemoveClick = (index) => {

        let list = [...dealList];
        list.splice(index, 1);
        setDealList(list);

    };

    // console.log(dealList);

    return (
        <React.Fragment>
            <Card className="static-toggle bg-warning-subtle">
                <CardHeader className="bg-soft-warning ">
                    <h3 className="mb-0 fs-15">Select Deal Filters</h3>
                </CardHeader>
            </Card>
            <Row>
                <Col xl={5} lg={5}>
                    <Card className="static-toggle bg-warning-subtle">
                        <CardHeader className="bg-soft-warning ">
                            <h3 className="mb-0 fs-15">Selectable items</h3>
                        </CardHeader>
                        <SimpleBar autoHide={false} style={{ height: "28vh" }}>
                            <CardBody>
                                <div class="list-group">
                                    {
                                        data.map((item, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    <button type="button" class="list-group-item list-group-item-action " aria-current="true" onClick={e => handleClick(item)} >{item.name}</button>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </CardBody>
                        </SimpleBar>
                    </Card>
                </Col>
                <Col xl={2} lg={2}>
                    <div className="text-center" style={{ marginTop: "16vh" }}>
                        <i className="ri-arrow-left-right-line  align-bottom fs-20" ></i>
                    </div>
                </Col>
                <Col xl={5} lg={5}>
                    <Card className="static-toggle bg-warning-subtle">
                        <CardHeader className="bg-soft-warning ">
                            <h3 className="mb-0 fs-15">Selected items</h3>
                        </CardHeader>
                        <SimpleBar autoHide={false} style={{ height: "28vh" }}>
                            <CardBody>
                                <div class="list-group">
                                    {
                                        dealList.length > 0 && dealList.map((item, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    <button type="button" class="list-group-item list-group-item-action " aria-current="true" onClick={e => handleRemoveClick(index)} >{item.name}</button>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </CardBody>
                        </SimpleBar>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Entrepreneur;
