import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  AccordionItem,
  Button,
  Accordion,
  AccordionBody,
  AccordionHeader,
  Row,
  Col,
} from "reactstrap";

const PreviewModal = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);

  const [open, setOpen] = useState("1");

  //Toggle Accordion
  const toggleAccordion = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-md"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Preview Detail
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Accordion
            className="custom-accordionwithicon-plus"
            open={open}
            toggle={toggleAccordion}
          >
            <AccordionItem>
              <AccordionHeader targetId="1">Account Details</AccordionHeader>
              <AccordionBody accordionId="1">
                <Row>
                  <Col md={12}>
                    <p className="text-muted fs-15">
                      Your first name?
                      <br />
                      <b>Kanika</b>
                    </p>

                    <p className="text-muted fs-15">
                      And your surname?
                      <br />
                      <b>Pawar</b>
                    </p>

                    <p className="text-muted fs-15">
                      Thanks, share an email address that we can use to reach
                      you.
                      <br />
                      <b>km@yopmail.com</b>
                    </p>

                    <p className="text-muted fs-15">
                      We use WhatsApp to send important messages. Please share
                      your WhatsApp number. <br />
                      <b>912312231223</b>
                    </p>

                    <p className="text-muted fs-15">
                      Share your primary mobile number.
                      <br />
                      <b>2312231223</b>
                    </p>

                    <p className="text-muted fs-15">
                      Share a second mobile number, if available.
                      <br />
                      To help manage our marketing campaigns, share with us how
                      you heard about us
                      <br />
                      <b>Ecosystem partners</b>
                    </p>
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                Start-up Organization
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <Row>
                  <Col md={12}>
                    <h5>Profile</h5>
                    <p className="text-muted fs-15">
                      Name of your company (as registered). If not registered,
                      name identified. <br />
                      <b>GPT Pvt Ltd</b>
                    </p>
                    <p className="text-muted fs-15">
                      Brand name of your product or service. If unbranded, the
                      brand name selected.
                      <br />
                      <b>Gola</b>
                    </p>

                    <p className="text-muted fs-15">
                      Where is your company operating from?
                      <br />
                      <b>gurgaon</b>
                    </p>
                    <p className="text-muted fs-15">
                      Select the industry to which your startup belongs.
                      <br />
                      <b>Professional, Scientific and Technical Services</b>
                    </p>

                    <p className="text-muted fs-15">
                      What sectors are your business in? (Choose up-to 3 max.)
                      <br />
                      <b>
                        Advertising, Analytics, Chemicals, Fintech, Health IT,
                        Insurance, Robotics, Security, Semiconductors, SMB
                        software, Space , Travel
                      </b>
                    </p>

                    <p className="text-muted fs-15">
                      How would you describe your business category.
                      <br />
                      <b>B2C</b>
                    </p>
                    <p className="text-muted fs-15">
                      What is your business? Choose one of the below.
                      <br />
                      <b>Product</b>
                    </p>
                    <p className="text-muted fs-15">
                      What is the current stage of your company? <br />
                      <b>Revenue</b>
                    </p>
                    <p className="text-muted fs-15">
                      What is your business founded date.
                      <br />
                      <b>05/07/2023</b>
                    </p>
                    <p className="text-muted fs-15">
                      Select the round of financing.
                      <br />
                      <b>Idea</b>
                    </p>
                    <h5>Social</h5>
                    <p className="text-muted fs-15">
                      Your company website
                      <br />
                      Your company Facebook link
                      <br />
                      Instagram Link
                      <br />
                      Twitter Link{" "}
                    </p>
                    <h5>Team</h5>
                    <p className="text-muted fs-15">
                      Your role in the startup. <br />
                      <b>fejf</b>
                    </p>
                    <p className="text-muted fs-15">
                      Your LinkedIn link
                      <br />
                      <b>https://devv2.scip.co/entrepreneur/profile_info</b>
                    </p>
                    <p className="text-muted fs-15">
                      Email
                      <br />
                      <b>km1@yopmail.com</b>
                    </p>
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                What are you creating
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <Row>
                  <Col md={12}>
                    <h5>Summary</h5>
                    <p className="text-muted fs-15">
                      Please describe your start-up in your own words. Try to do
                      this in one sentence. Best statements are tested using two
                      tests. An 8 or 9-year-old school student should be able to
                      understand it. It should focus more on what customers get
                      and less on what you do. Add a line about why you are
                      building the startup.
                    </p>
                    <p className="text-dark fs-15">
                     
                        Please describe your start-up in your own words. Try to
                        do this in one sentence. Best statements are tested
                        using two tests. An 8 or 9-year-old school student
                        should be able to understand it. It should focus more on
                        what customers get and less on what you do. Add a line
                        about why you are building the startupPlease describe
                        your start-up in your own
                      
                    </p>
                    <h5>Problem</h5>
                    <p className="text-muted fs-15">
                      Describe the important problem of customers you are
                      solving. Is it based on the personal experience of the
                      founders? Why do you believe customers will consider and
                      buy from you?
                    </p>
                    <p className="text-dark fs-15">
                      
                        Please describe your start-up in your own words. Try to
                        do this in one sentence. Best statements are tested
                        using two tests. An 8 or 9-year-old school student
                        should be able to understand it. It should focus more on
                        what customers get and less on what you do. Add a line
                        about why you are building the startupPlease describe
                        your start-up in your own
                      
                    </p>
                    <h5>Solution</h5>
                    <p className="text-muted fs-15">
                      The value of your solution to the customers targeted by
                      you. Why is your product/service necessary? Is it doing
                      something different/or doing differently? Is it a “need to
                      have”/ “nice to have?” Identify if possible, the basis of
                      your assessment. Any trials conducted?{" "}
                    </p>
                    <p className="text-dark fs-15">
                     
                        Please describe your start-up in your own words. Try to
                        do this in one sentence. Best statements are tested
                        using two tests. An 8 or 9-year-old school student
                        should be able to understand it. It should focus more on
                        what customers get and less on what you do. Add a line
                        about why you are building the startupPlease describe
                        your start-up in your own
                      
                    </p>
                    <h5>Market</h5>
                    <p className="text-muted fs-15">
                      What is the market opportunity? And why will it be big?
                      Total Addressable Market. Identify the immediate
                      opportunity targeted as a steppingstone to a larger
                      opportunity. Do you have an unfair advantage to sell to
                      this market?
                    </p>
                    <p className="text-dark fs-15">
                        Please describe your start-up in your own words. Try to
                        do this in one sentence. Best statements are tested
                        using two tests. An 8 or 9-year-old school student
                        should be able to understand it. It should focus more on
                        what customers get and less on what you do. Add a line
                        about why you are building the startupPlease describe
                        your start-up in your own
                      
                    </p>
                    <h5>Business Model</h5>
                    <p className="text-muted fs-15">
                      How do you make money (or plan to)? Who will pay (target
                      customer segment)? What are the estimated (or established)
                      margins? What are the costs of sale? What are the key
                      metrics you use (or intend to use) to manage the business?{" "}
                    </p>
                    <p className="text-dark fs-15">
                        Please describe your start-up in your own words. Try to
                        do this in one sentence. Best statements are tested
                        using two tests. An 8 or 9-year-old school student
                        should be able to understand it. It should focus more on
                        what customers get and less on what you do. Add a line
                        about why you are building the startupPlease describe
                        your start-up in your own
                      
                    </p>
                    <h5>Go-to-market</h5>
                    <p className="text-dark fs-15">
                      Describe your go-to-market plan.
                    </p>
                    <p className="fs-15">
                      <b>
                        Please describe your start-up in your own words. Try to
                        do this in one sentence. Best statements are tested
                        using two tests. An 8 or 9-year-old school student
                        should be able to understand it. It should focus more on
                        what customers get and less on what you do. Add a line
                        about why you are building the startupPlease describe
                        your start-up in your own
                      </b>
                    </p>
                    <h5>Traction</h5>
                    <p className="text-muted fs-15">
                      The traction metrics you use and the trend that make you
                      confident about growth?{" "}
                    </p>
                    <p className="text-dark fs-15">
                      
                        Please describe your start-up in your own words. Try to
                        do this in one sentence. Best statements are tested
                        using two tests. An 8 or 9-year-old school student
                        should be able to understand it. It should focus more on
                        what customers get and less on what you do. Add a line
                        about why you are building the startupPlease describe
                        your start-up in your own
                      
                    </p>
                    <h5>Timing</h5>
                    <p className="text-muted fs-15">
                      Why is now the right market timing (technology, trends,
                      economic tailwinds, consumer behaviour, etc.) for your
                      company to raise money?
                    </p>
                    <p className="text-dark fs-15">
                        Please describe your start-up in your own words. Try to
                        do this in one sentence. Best statements are tested
                        using two tests. An 8 or 9-year-old school student
                        should be able to understand it. It should focus more on
                        what customers get and less on what you do. Add a line
                        about why you are building the startupPlease describe
                        your start-up in your own
                      
                    </p>
                    <h5>Attachments</h5>
                    <p className="text-muted fs-15">
                      Please attach a pitch document{" "}
                      <small>Not available</small>
                    </p>
                    <p className="text-muted fs-15">
                      Three minute video pitch <small>Not available</small>
                    </p>
                    <p className="text-muted fs-15">
                      Cap table <small>Not available</small>
                    </p>
                    <p className="text-muted fs-15">
                      Financial projection of three years
                      <small>Not available</small>
                    </p>
                    <p className="text-muted fs-15">
                      Traction metrics <small>Not available</small>
                    </p>
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Start-up details</AccordionHeader>
              <AccordionBody accordionId="3">
                <Row>
                  <p className="text-muted fs-15">
                    Select Conditionanl Option
                    <br />
                    Expectations of pre-money valuation.
                    <br />
                    What challenges does your business face in the coming three
                    months?
                  </p>
                  <h5>Mentor Faculty</h5>
                  <p className="text-muted fs-15">
                    Is mentor available? If yes, then please add the mentor
                    details.
                    <br />
                    Mentor Designation
                    <br />
                    Mentor Email
                    <br />
                    Mentor Phone number
                    <br />
                    Mentor LinkedIn URL
                    <br />
                    If mentor is avaiable, please upload consent. Not available
                  </p>
                  <h5>Fundraising</h5>
                  <p className="text-muted fs-15">
                    Total investment in your startup.
                    <br />
                    Who did you raise it from? Identify own funds, friends and
                    family, Seed/ angel group(s). Total funds raised should
                    equal the investment above). Share names of seed/angel
                    groups. Add valuation at which earlier rounds were raised.
                    <br />
                    Any loans? If yes, please identify amount and source.
                    <br />
                    What is your fund-raising target?
                    <br />
                    Any written commitments for any portion of this funding on
                    date of application?
                  </p>
                </Row>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </OffcanvasBody>
       
      </form>
    </Offcanvas>
  );
};

export default PreviewModal;
