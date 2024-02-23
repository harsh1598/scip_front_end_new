import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from '../Components/Common/BreadCrumb';
import Speedmeeter from "../assets/images/speed.png";
 

const CheckSpeed = () => {
  document.title ="SCIP | Internet Speed";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
        <BreadCrumb title="Dashboard" pageTitle="Internet Speed" />
          <div className="text-center">
            <img src={Speedmeeter} className="img-fluid" />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CheckSpeed;
