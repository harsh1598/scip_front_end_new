import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Container,
  Input,
  Button,
  Label,
  Form,
  Card,
  CardBody,
} from "reactstrap";

const AccountDetailTbl = () => {
  return (
    <React.Fragment>
      <Container fluid className="px-0">
        <Row className="profile-tabs">
        <Col lg={12} className="text-center my-3">
        <h5>Welcome to SCIP.</h5>
        <p>Our application takes 15 minutes to complete if all the information required is prepared and ready before you start filling the forms. Prepare for applying using the downloadable file that lists questions that need answering. All items of the application need answering. A pitch deck is required with the application. For guidance, use the downloadable draft pitch deck template. It will help you to communicate salient aspects of your business. </p>
        <p>
        <span><Link to="#">Application</Link> | </span>
        <span><Link to="#">Pitch Document</Link> | </span>
        <span><Link to="#">Information Document </Link></span>
        </p>
        </Col>
          <Col lg={12}>
            <Form>
            <div className="mb-3">
                <Label htmlFor="labelInput" className="form-label mb-0">
                Your first name <span className="error">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id=""
                  placholder=""
                />
              </div>
              <div className="mb-3">
              <Label htmlFor="labelInput" className="form-label mb-0">
              And your surname? <span className="error">*</span>
              </Label>
              <Input
                type="text"
                className="form-control"
                id=""
                placholder=""
              />
            </div>
            <div className="mb-3">
            <Label htmlFor="labelInput" className="form-label mb-0">
            Thanks, share an email address that we can use to reach you. <span className="error">*</span>
            </Label>
            <Input
              type="text"
              className="form-control"
              id=""
              placholder=""
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="labelInput" className="form-label mb-0">
            You need to set a password to securely access the platform. Please set your password. <span className="error">*</span>
            </Label>
            <Input
              type="text"
              className="form-control"
              id=""
              placholder=""
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="labelInput" className="form-label mb-0">
            Please confirm your password.  <span className="error">*</span>
            </Label>
            <Input
              type="text"
              className="form-control"
              id=""
              placholder=""
            />
          </div>
          <div className="mb-3">
          <Label className="form-label mb-0">
          To secure your account, select two security questions using the drop-down menu and add your answers. First security question. <span className="error">*</span>
          </Label>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option value="" >Select Question</option>
            <option value="17"> What city were you born in? </option>
            <option value="18"> What is your Favorite color? </option>
            <option value="37"> In what town was your first job? </option>
            <option value="38"> What is your Mother maiden name? </option>
          </select>
          <Input type="text" className="form-control" id="" />
        </div>
        <div className="mb-3">
        <Label className="form-label mb-0">
        Second security question. <span className="error">*</span>
        </Label>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option value="">Select Question</option>
          <option value="17"> What city were you born in? </option>
          <option value="18"> What is your Favorite color? </option>
          <option value="37"> In what town was your first job? </option>
          <option value="38"> What is your Mother maiden name? </option>
        </select>
        <Input type="text" className="form-control" id="" />
      </div>
              <div className="mb-3">
                <Label htmlFor="labelInput" className="form-label mb-0">
                  We use WhatsApp to send important messages. Please share your
                  WhatsApp number <span className="error">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id=""
                  placholder="08123456789"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="labelInput" className="form-label mb-0">
                  Share your primary mobile number.{" "}
                  <span className="error">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id=""
                  placholder="08123456789"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="labelInput" className="form-label mb-0">
                  Share a second mobile number, if available.{" "}
                  <span className="error">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id=""
                  placholder="08123456789"
                />
              </div>
              <div className="mb-3">
                <Label className="form-label mb-0">
                  To help manage our marketing campaigns, share with us how you
                  heard about us <span className="error">*</span>
                </Label>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option value="">Select option</option>
                  <option value="5"> Co - investment </option>
                  <option value="4"> Ecosystem partners </option>
                  <option value="3"> Marketing - Activities </option>
                  <option value="2"> Marketing - Organic </option>
                  <option value="1"> Members </option>
                  <option value="6"> Other sources </option>
                </select>
                <Input type="text" className="form-control" id="" />
              </div>
              <div className="mb-3">
              <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck2"
                defaultChecked
              />
              <Label className="form-check-label" htmlFor="formCheck2">
              <Link to="/terms-conditions">I accept terms and conditions <span className="error">*</span> </Link>
              </Label>
            </div>
            </div>
            </Form>
          </Col>
        </Row>
      </Container>
      
    </React.Fragment>
  );
};

export default AccountDetailTbl;
