import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Label, Progress } from "reactstrap";

const WhatCreatingTbl = () => {
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
          <div style={{ display: "none" }}>
            <Col lg={12} className="mb-3">
              <h5>Summary</h5>
              <Label className="form-label">
                Please describe your start-up in your own words. Try to do this
                in one sentence. Best statements are tested using two tests. An
                8 or 9-year-old school student should be able to understand it.
                It should focus more on what customers get and less on what you
                do. Add a line about why you are building the startup.{" "}
                <span>*</span>
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
              <h5>Problem</h5>
              <Label className="form-label">
                Describe the important problem of customers you are solving. Is
                it based on the personal experience of the founders? Why do you
                believe customers will consider and buy from you? <span>*</span>
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
              <h5>Solution</h5>
              <Label className="form-label">
                The value of your solution to the customers targeted by you. Why
                is your product/service necessary? Is it doing something
                different/or doing differently? Is it a “need to have”/ “nice to
                have?” Identify if possible, the basis of your assessment. Any
                trials conducted? <span>*</span>
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
              <h5>Market</h5>
              <Label className="form-label">
                What is the market opportunity? And why will it be big? Total
                Addressable Market. Identify the immediate opportunity targeted
                as a steppingstone to a larger opportunity. Do you have an
                unfair advantage to sell to this market? <span>*</span>
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
              <h5>Business Model</h5>
              <Label className="form-label">
                How do you make money (or plan to)? Who will pay (target
                customer segment)? What are the estimated (or established)
                margins? What are the costs of sale? What are the key metrics
                you use (or intend to use) to manage the business?{" "}
                <span>*</span>
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
              <h5>Go-to-market</h5>
              <Label className="form-label">
                Describe your go-to-market plan. <span>*</span>
              </Label>
              <div>
                <small>
                  Have you established (or estimated) cost of customer
                  acquisition (plans of reaching your prospects, converting them
                  into customers, and profitably satisfying their needs, either
                  with or without key partnerships). Have you established (or
                  estimated) margin structure of channels if used. Indicators
                  you will use to determine the effectiveness of sales and
                  marketing activities.
                </small>
              </div>
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
              <h5>Traction</h5>
              <Label className="form-label">
                The traction metrics you use and the trend that make you
                confident about growth? <span>*</span>
              </Label>
              <div>
                <small>
                  Describe traction metrics appropriate for your business e.g.
                  profitability, revenues, number of active users, number of
                  registered users, amount of engagement, partnerships/clients
                  achieved, amount of traffic generated and show how unit
                  economics, cost of customer acquisition and long-term customer
                  value are in sync.
                </small>
              </div>
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
              <h5>Timing</h5>
              <Label className="form-label">
                Why is now the right market timing (technology, trends, economic
                tailwinds, consumer behaviour, etc.) for your company to raise
                money? <span>*</span>
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
            <Col lg={12} className="text-center mt-4">
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
                class="mx-2 btn btn-success waves-effect waves-light"
              >
                Contiune{" "}
                <i className="ri-arrow-right-line align-bottom ml-2"></i>
              </button>
            </Col>
          </div>

          {/* 2ns step stsrt here */}
          <Col lg={12} className="mb-3">
            <h5>Attachments</h5>
            <Label className="form-label">
              Please attach a pitch document <span>*</span>
              <div>
                <small>
                  The well-prepared pitch document is self-explanatory and
                  should excite investors to shortlist a startup for
                  presentation. Accepted file formats -
                  .txt,.pdf,.doc,.excel,.ppt
                </small>
              </div>
            </Label>
            <div>
              <div class="btn uploadBtn btn-danger waves-effect waves-light me-3">
                <i className="ri-upload-2-line align-bottom me-1"></i> Upload
                File
                <input type="file" name="pitch_file" required />
              </div>
              <button
                type="button"
                class="btn btn-warning waves-effect waves-light"
              >
                <i className="ri-download-2-line align-bottom me-1"></i>
                Template
              </button>
            </div>
            <div className="live-preview mt-2">
              <Progress color="primary" value={25}>
               25%
              </Progress>
            </div>
          </Col>
          <hr />
          <Col lg={12} className="mb-3">
            <Label className="form-label">
              Three minute video pitch <span>*</span>
              <div>
                <small>
                  A video pitch is a unique opportunity to talk directly to
                  investors. The video pitch adds much more material to a
                  PowerPoint two dimensional pitch document. A video pitch can
                  be conversational, made by answering questions. Use the
                  recording version on Zoom. See this{" "}
                  <Link to="#">article</Link>. Accepted file formats - .mp4 &
                  the maximum supported file size is 10 MB
                </small>
              </div>
            </Label>
            <div className="mt-2">
            <div>
            <div class="btn uploadBtn btn-danger waves-effect waves-light me-3">
              <i className="ri-upload-2-line align-bottom me-1"></i> Upload
              File
              <input type="file" name="pitch_file" required />
            </div>
            <button
              type="button"
              class="btn btn-warning waves-effect waves-light"
            >
              <i className="ri-download-2-line align-bottom me-1"></i>
              Template
            </button>
            <Link to="#" className="fs-15 ms-3">
            See pre-recorded pitch videos.
          </Link>
          </div>
          <div className="live-preview mt-2">
            <Progress color="primary" value={50}>
             50%
            </Progress>
          </div>
             
            </div>
          </Col>
          <hr />
          <Col lg={12} className="mb-3">
            <Label className="form-label">
              Cap table <span>*</span>
              <div>
                <small>
                  A cap table is a percentages of equity ownership capital
                  (equity shares, preferred equity shares, warrants, and
                  convertible equity) and value of equity in each round of
                  investment by founders and other investors. If you don’t have
                  a cap table write a note on the file and upload. Accepted file
                  formats - .txt,.pdf,.doc,.excel,.ppt
                </small>
              </div>
            </Label>
            <div className="mt-2">
            <div>
            <div class="btn uploadBtn btn-danger waves-effect waves-light me-3">
              <i className="ri-upload-2-line align-bottom me-1"></i> Upload
              File
              <input type="file" name="pitch_file" required />
            </div>
            <button
              type="button"
              class="btn btn-warning waves-effect waves-light"
            >
              <i className="ri-download-2-line align-bottom me-1"></i>
              Template
            </button>
          </div>
          <div className="live-preview mt-2">
            <Progress color="primary" value={75}>
             75%
            </Progress>
          </div>
            </div>
          </Col>
          <hr />
          <Col lg={12} className="mb-3">
            <Label className="form-label">
              Financial projection of three years <span>*</span>
              <div>
                <small>
                  Accepted file formats - .txt,.pdf,.doc,.excel,.ppt
                </small>
              </div>
            </Label>
            <div className="mt-2">
            <div>
            <div class="btn uploadBtn btn-danger waves-effect waves-light me-3">
              <i className="ri-upload-2-line align-bottom me-1"></i> Upload
              File
              <input type="file" name="pitch_file" required />
            </div>
            <button
              type="button"
              class="btn btn-warning waves-effect waves-light"
            >
              <i className="ri-download-2-line align-bottom me-1"></i>
              Template
            </button>
          </div>
          <div className="live-preview mt-2">
            <Progress color="primary" value={90}>
             90%
            </Progress>
          </div>
            </div>
          </Col>
          <hr />
          <Col lg={12} className="mb-3">
            <Label className="form-label">
              Traction metrics <span>*</span>
              <div>
                <small>
                  The traction metrics relate to startups that have revenue and
                  have metrics. If you have no revenue, make a note on the file
                  upload it. If you have estimated some traction metrics as a
                  basis of revenue forecasts, you can share them. Accepted file
                  formats - .txt,.pdf,.doc,.excel,.ppt
                </small>
              </div>
            </Label>
            <div className="mt-2">
            <div>
            <div class="btn uploadBtn btn-danger waves-effect waves-light me-3">
              <i className="ri-upload-2-line align-bottom me-1"></i> Upload
              File
              <input type="file" name="pitch_file" required />
            </div>
            <button
              type="button"
              class="btn btn-warning waves-effect waves-light"
            >
              <i className="ri-download-2-line align-bottom me-1"></i>
              Template
            </button>
          </div>
          <div className="live-preview mt-2">
            <Progress color="primary" value={99}>
             99%
            </Progress>
          </div>
            </div>
          </Col>
          {/*  <Col lg={12} className="text-center mt-4">
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
              class="mx-2 btn btn-success waves-effect waves-light"
            >
              Contiune <i className="ri-arrow-right-line align-bottom ml-2"></i>
            </button>
                  </Col> */}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default WhatCreatingTbl;
