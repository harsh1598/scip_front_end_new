import React, { useState } from "react";
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

const StartDetailsTbl = () => {
  return (
    <React.Fragment>
      <Container fluid className="px-0">
        <Row className="profile-tabs">
          <Col lg={12} className="mb-3">
            <p>
              <small>
                After you complete each section, you will see three buttons -
                Save, Preview, and Next. Using the button Preview, you can see
                how investors will see your application. Save your application
                before Preview. You can edit the application after you preview
                it.
              </small>
            </p>
            <p>
              <small>
                You can edit the application at the end of each section, and you
                can edit the entire application again after you complete the
                fourth section before submitting the entire application.
              </small>
            </p>
            <p>
              <small>
                Even after submission, you will be able to edit your application
                information after the Network gives you access to your
                dashboard.
              </small>
            </p>
          </Col>

          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              Select Conditionanl Option
              <span className="error">*</span>
            </Label>
            <br />
            <Input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <span className="fs-14 ms-1">Yes</span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked
            />
            <span className="fs-14 ms-1">No</span>
          </Col>

          <Col lg={12} className="mb-3">
            <h5>Mentor Faculty</h5>
            <Label className="form-check-label">
              Is mentor available? If yes, then please add the mentor details.
              <span className="error">*</span>
            </Label>
            <br />
            <Input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <span className="fs-14 ms-1">Yes</span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
              defaultChecked
            />
            <span className="fs-14 ms-1">No</span>
          </Col>

          <Col lg={12} className="mb-3">
          <Label htmlFor="labelInput" className="form-label mb-0">
          Mentor Designation
                  <span className="error">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id=""
                  placholder=""
                />
          </Col>

          <Col lg={12} className="mb-3">
          <Label htmlFor="labelInput" className="form-label mb-0">
          Mentor Email
                  <span className="error">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id=""
                  placholder=""
                />
          </Col>

          <Col lg={12} className="mb-3">
          <Label htmlFor="labelInput" className="form-label mb-0">
          Mentor Phone number
                  <span className="error">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id=""
                  placholder=""
                />
          </Col>

          <Col lg={12} className="mb-3">
          <Label htmlFor="labelInput" className="form-label mb-0">
          Mentor LinkedIn URL 
                  <span className="error">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id=""
                  placholder="Acceptable format: http://www.google.com or https://www.google.com"
                />
          </Col>

          <Col lg={12} className="mb-3">
            <h5>Attachment</h5>
            <Label htmlFor="labelInput" className="form-label mb-0">
            If mentor is avaiable, please upload consent. * 
                    <span className="error">*</span>
                  </Label>
                  <br />
                  <small>Accepted file formats - .txt,.pdf,.doc,.excel,.ppt</small>
                  <div className="d-flex align-items-center form-control">
                  <div className='attachment-btn '>
                      <input type="file" className='input' />
                      <i className='ri ri-attachment-line icon' />
                  </div>
                  <span className=" text-black-50 ms-1">No File Selected.</span>
              </div>
            </Col>

          <Col lg={12} className="mb-3">
            <h5>Fundraising</h5>
            <Label className="form-check-label">
              Total investment in your startup.
              <span className="error">*</span>
            </Label>
            <br />
            <small>
              Please use the currency in which you intend to issue the
              investment instruments. Don't use $ if issue will be in Rupees.
              The selected currency will apply to all amount related questions.
            </small>
            <br />
            <Row className="mt-1">
              <Col md={3}>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option value="" selected="">
                    Select option
                  </option>
                  <option value="AED">AED</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                  <option value="SGD">SGD</option>
                  <option value="USD">USD</option>
                </select>
              </Col>
              <Col md={3}>
                <Input
                  className="form-control"
                  type="input"
                  value=""
                  id=""
                  placeholder="Amount"
                />
              </Col>
            </Row>
          </Col>

          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              Who did you raise it from? Identify own funds, friends and family,
              Seed/ angel group(s). Total funds raised should equal the
              investment above). Share names of seed/angel groups. Add valuation
              at which earlier rounds were raised.
              <span className="error">*</span>
            </Label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea5"
              rows="3"
            ></textarea>
            <div className="text-end">
              <small>350/350 characters</small>
            </div>
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              Any loans? If yes, please identify amount and source.
              <span className="error">*</span>
            </Label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea5"
              rows="3"
            ></textarea>
            <div className="text-end">
              <small>350/350 characters</small>
            </div>
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              What is your fund-raising target?
              <span className="error">*</span>
            </Label>
            <br />
            <small>
              Please use the currency in which you intend to issue the
              investment instruments. Don't use $ if issue will be in Rupees.
              The selected currency will apply to all amount related questions.
            </small>
            <Row className="mt-1">
              <Col md={3}>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option value="" selected="">
                    Select option
                  </option>
                  <option value="AED">AED</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                  <option value="SGD">SGD</option>
                  <option value="USD">USD</option>
                </select>
              </Col>
              <Col md={3}>
                <Input
                  className="form-control"
                  type="input"
                  value=""
                  id=""
                  placeholder="Amount"
                />
              </Col>
            </Row>
          </Col>

          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              Any written commitments for any portion of this funding on date of
              application?
              <span className="error">*</span>
            </Label>
            <br />
            <small>
              Please use the currency in which you intend to issue the
              investment instruments. Don't use $ if issue will be in Rupees.
              The selected currency will apply to all amount related questions.
            </small>
            <Row className="mt-1">
              <Col md={3}>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option value="" selected="">
                    Select option
                  </option>
                  <option value="AED">AED</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                  <option value="SGD">SGD</option>
                  <option value="USD">USD</option>
                </select>
              </Col>
              <Col md={3}>
                <Input
                  className="form-control"
                  type="input"
                  value=""
                  id=""
                  placeholder="Amount"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={12} className="text-left mb-3">
            <p>
              <small>
                Please note, In case of investment:
                <br />
                SCIP shall charge from the start-up a fee of Rs. 1,00,000/-
                against Business, Legal, Financial and Technical Due Diligence,
                Valuation Report (if required) and PR ,apart from a success fee
                (usually charged in 2% company equity) for facilitating the
                Investment round Unless mutually agreed between the parties, in
                writing and signed by any one Director of SCIP, the start-up
                shall be liable to pay a penalty of Rs.1,00,000/-, in case any
                of the following events occur:
              </small>
            </p>
            <p>
              <small>
                1. In case of any information provided by the start-up found to
                be false and incorrect;
                <br />
                2. If there is any change in the main terms related to valuation
                provided by the start-up after the pitch to investors
              </small>
            </p>
          </Col>

         {/* <Col lg={12} className="text-center mb-3">
            <button
              type="button"
              class="mx-2 btn btn-primary waves-effect waves-light"
            >
              <i className="ri-arrow-left-line align-bottom"></i> Back
            </button>

            <button
              type="button"
              class="mx-2 btn btn-info waves-effect waves-light"
            >
              Save As Draft
            </button>
            <button
              type="button"
              class="mx-2 btn btn-secondary waves-effect waves-light"
            >
              Preview
            </button>
            <button
              type="button"
              class="mx-2 btn btn-dark waves-effect waves-light"
            >
              Review
            </button>
            <button
              type="button"
              class="mx-2 btn btn-success waves-effect waves-light"
            >
              Submit
              <i className="ri-arrow-right-line align-bottom ml-2"></i>
            </button>
           </Col> */}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default StartDetailsTbl;
