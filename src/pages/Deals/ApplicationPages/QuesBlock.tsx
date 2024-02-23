import React, { memo } from 'react';
import { Fragment } from 'react';
import { Card, CardBody, Col, Row } from "reactstrap";

interface propData {
    childData?:any
}

const QuesBlock = (props: propData) => {

    const data = [
        {
            title: "What makes team exceptional",
            desc: "At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.",
        },
        {
            title: "Problem being solved",
            desc: "At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.",
        },
        {
            title: "Solutions",
            desc: "At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.",
        },
        {
            title: "Market opportunity",
            desc: "At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.",
        },
        {
            title: "Business model",
            desc: "At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.",
        },
        {
            title: "Go to market",
            desc: "At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.",
        },
        {
            title: "Traction",
            desc: "At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.",
        },
    ]
    
    return (
        <>
              <Card className="mb-2">
                <CardBody>
                    <Row>
                        <Col lg={12}>
                            {
                                data.map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <h6>{item.title}</h6>
                                            <p className="text-muted">{item.desc}</p>
                                        </Fragment>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
};

export default memo(QuesBlock);
