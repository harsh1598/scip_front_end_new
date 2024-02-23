import React, { useState } from "react";
import {
    Row,
    Container,
} from "reactstrap";
import ThankYouImg from "../../../../src/assets/images/thanks-you.svg"
import Logo from "../../../assets/images/scip-logo.svg";
import { useNavigate } from "react-router-dom";

const EmailThankYou = () => {
    const history = useNavigate();

      setTimeout(() => {
        history('/login')
    },5000)

    return (
        <React.Fragment>
            <div className="auth-page-content">
                <div className="text-center  mb-4 text-white-50 heading">
                    <div className="heading2">
                        <img src={Logo} alt="" height="40" className="mt-3" />
                    </div>
                </div>
                <div className="page-content p-0">
                    <Container fluid>
                        <Row style={{ marginTop: "80px" }}>
                            <div >
                                <img src={ThankYouImg} width={110} className="ThankyouImg" />
                                <h2 className="mt-3 text-center">Thank you!!</h2>
                                <p className="mt-2 thankYouText text-center" >Your account will be activated shortly !!</p>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EmailThankYou;
