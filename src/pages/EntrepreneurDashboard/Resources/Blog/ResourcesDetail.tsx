import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { newsFeed } from '../../../../common/data';

import img1 from "../../../assets/images/small/img-1.jpg";
import img2 from "../../../assets/images/small/img-2.jpg";
import img3 from "../../../assets/images/small/img-3.jpg";
import img6 from "../../../assets/images/small/img-6.jpg";

import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  } from "reactstrap";

import BreadCrumb from "../../../../Components/Common/BreadCrumb";

//Images
import profileBg from "../../../../assets/images/profile-bg.jpg";

const ResourcesDetail = () => {
const [activityTab, setActivityTab] = useState("1");

  const toggleActivityTab = (tab: any) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };


return (
   
   <React.Fragment>
   <div className="page-content">
   <Container fluid>
  {/* <BreadCrumb title="Resources" pageTitle="Resources" /> */}
  <div className="profile-foreground position-relative">
        <div className="profile-wid-bg">
          <img src={profileBg} alt="" className="profile-wid-img" />
        </div>
      </div>
      <div className="mb-none profile-wrapper">
        <Row className="g-0">
          <Col>
              <h3 className="text-white mb-4">
              Resources
              </h3>
           </Col>
        </Row>
        </div>
        <Row className="g-2">
        <Col md={12}>
          <Card className="mb-1">
            <CardHeader>
             <h1 className="fw-normal fs-24">The First Step of Raising Capital — Getting Noticed</h1>
             <p className="text-muted fs-15 fw-normal"><b className="fw-normal">Date:</b> 20/11/2020   <i className="mdi mdi-circle-medium align-middle mx-1"></i>  <b className="fw-normal">Category:</b> Business </p>
             <p className="text-muted">I classify leadership behavior into two metaphor - ‘harem’ and ‘chemical.’ Harem is private space traditionally understood as serving the purposes of maintaining the modesty, privilege, and protection of women. Harem style of leaders accumulate team members whom they indoctrinate, enforcing beliefs that business works in a certain way and then want them to work using their mindset. </p>
             <p className="text-muted">A chemical reaction leads to the transformation of chemical substances, yielding products, which are different from the initial reactants.</p>
             <p className="text-muted">Chemical leaders believe that they need to learn new ways of thinking and doing because current business models need reinvention. They create teams with members having different viewpoints, that ‘chemically’ interact with each other, creating new ways of managing in a rapidly (digitally) disrupting world.</p>
             <p className="text-muted">Chemical leaders disrupt their organizations from within using controlled ‘chemistry’ of different views. I emphasize ‘controlled chemistry experiments’ that doesn’t destabilize the organization.</p>
             <p className="text-muted">Continuity of organizations require validation of ideas through experimentation with customers. Beliefs can no longer be the basis of decision making. Entrepreneurs and customers are disrupting every business model. And 5G data speeds will accelerate disruption of all value chains. </p>
             <p className="text-center">
              <img src="https://www.frontiersin.org/files/Articles/427884/fphy-07-00011-HTML/image_m/fphy-07-00011-g001.jpg" alt="" className="img-fluid"  />
             </p>
             <h5>Importance of taking time to express your ideas clearly</h5>
             <p className="text-muted">So, what does it takes to get noticed? The questions of the pitch deck/application are usually similar. I use pitch deck and application interchangeably because it is usually the first thing investors look at.</p>

             <p className="text-muted">From the perspective of an analyst evaluating an application, it is easy to identify a bad application. But some good applications also get rejected, an application where a promising concept is poorly described and does not create a ‘picture’ in the mind of a reviewer/investor.</p>

             <p className="text-muted">It is important for a founder to spend time crafting a good application.</p>

             <p className="text-muted">Visualize the sequence of application questions as creating a painting, one brushstroke at a time. The final picture becomes visible at the end. But the interest in each brushstroke as the image comes to life has to be consciously created. The goal of an entrepreneur is to create a vivid image in the mind of the investor. Vivid here implies clarity (simple), sharpness (easy to decipher), and graphic (granular details).</p>

             <p className="text-muted">This is the job of an entrepreneur. Often tricky because entrepreneurs are too close to their business and their business value seems ‘obvious’ to them. The belief then is that it should be obvious to everybody.</p>

             <p className="text-muted">Not so. Investors see so many pitches, are experienced, and respond spontaneously to information they read, very much like a sportsperson in a match.</p>

             <p className="text-muted">Entrepreneurs must believe that investors are searching for the next big opportunity. They are positive people. Their questions attempt to confirm the value of the opportunity, quite unlike a project appraisal in a corporate setting. Risk is inherent in their choice-making.</p>
           
             <h5>Start-up</h5>
<p className="text-muted">The first question, “Please describe your start-up in your own words.” This is the hook that should grab the reader. It should entice the person to start searching for answers in the application to discover reasons to support the idea expressed. The focus of this statement is not the product or service you make/deliver. The statement is written from a customer’s perspective and is created from the value that a customer realizes/experience. Highlight what you are planning to win.</p>

<p className="text-muted">By the time you finish, the reader should interpret the scale of the startup using the data presented. Help the reader realize the opportunity. Too big and dramatic the opening remark, inadvertently, the reader begins to search for flawed logic in the following information.</p>

<p className="text-muted">You must communicate the message in the first sentence using simple language that a 7 to an 8-year-old child can understand. The question to test the opening statement are — is it precise, concise, and straightforward. This could be a 5 to 8-word sentence on the landing page of a website that should draw a person to browse.</p>

<p className="text-muted">In the painting metaphor, the description is the framing of the opportunity. Best done without jargon, without exaggeration. A simple description is always better.</p>

<h5>Team</h5>

<p className="text-muted">The founding team drives new business creation and is a significant influence on the arduous journey of a start-up. Entrepreneurs are exceptional people. It is necessary to describe what each team member has created, done, and learned. Be specific. Tangibility is a firm brush stroke!</p>

<p className="text-muted">Think and discover what your founding team has done that makes them invaluable to the startup’s journey ahead. Describe the value, knowledge, and experience of the founding team that will contribute to technology, product development, go-to-market, and business growth.</p>

<p className="text-muted">Be candid about gaps, if any. Demonstrate that you are reflective and self-aware.</p>

<p className="text-muted">If investors like entrepreneurs as persons, they will want to meet them.</p>

<h5>Problem and solution</h5>

<p className="text-muted">Communicate the insight that triggered discovery/identification of the problem, which then motivated you to develop the solution. Ideas are often discovered during execution jointly with customers. This is also when the scale of the opportunity becomes visible, is corroborated.</p>

<p className="text-muted">This is where the unique insight that underpins the idea is made explicit, the next hook. Insights that are embedded in the customer experience.</p>

<p className="text-muted">This is where the value proposition becomes obvious.</p>

<p className="text-muted">This segment must be bullet-proof. Entrepreneurs must demonstrate that they have thought deeply about all the potential weaknesses of their assumptions. Be candid about the issues that you foresee and how you intend to test and validate the assumptions.</p>

<h5>Business Model — what it is and what it is not</h5>

<p className="text-muted">The term ‘Business Model’ can mean different things to different people. It is not the business model canvas.</p>

<p className="text-muted">A business model describes how an organization creates, delivers, and captures value. To create value is to do something unique (a startup’s own) and different (differentiation in creating and positioning) that cannot or is difficult to copy. What will enable a startup to sustain its competitive edge? To deliver value requires an articulation of an ability to evoke interest in customers, convert interest to a cognitive commitment to analyze the offer versus competing offers, and then convert and serve. To capture value is more than pricing. In the development of a startup, value extraction is often qualitative. This is especially true in a digital world where a startup first acquires sticky customers before capturing value.</p>

<p className="text-muted">The response to the business model question gives investors an insight into the nature of the investment opportunity. They can visualize where the startup is on the development trajectory, know whether it is an investment opportunity, to establish the basics of the business (product development and customer acceptance) or growth (scaling).</p>
            </CardHeader>
          </Card>
        </Col>
      </Row>
 </Container>
 </div>
</React.Fragment>

    );
};

export default ResourcesDetail;
