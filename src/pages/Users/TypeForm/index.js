import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ParticlesAuth from "../../../pages/AuthenticationInner/ParticlesAuth";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
} from "reactstrap";
import { Fragment } from "react";

const TypeForm = () => {
  document.title = "TypeForm | SCIP";

  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (ind) => {
    setActiveTab(ind + 1);
  };

  const backTab = (ind) => {
    setActiveTab(ind - 1);
  };

  const Completed = () => {
    setActiveTab(0);
  };

  const Question = [
    {
      id: 1,
      Question: "What is your name",
    },
    {
      id: 2,
      Question: "What is your first name"
    },
    {
      id: 3,
      Question: "What is last name"
    },
    {
      id: 4,
      Question: "What is your birth of date!"
    },
    {
      id: 5,
      Question: "What is mobile number"
    },
  ];

  console.log(activeTab)
  
  return (
    <React.Fragment>
    <ParticlesAuth>
    <div className="auth-page-content">
      <div className="page-content">
        <Container className="typeform">
          <Row>
            <Col xl={12} md={12}>
             
                <div style={{height: "100vh", }}>
                  {
                    Question.map((item, ind) => {
                      return (
                        activeTab === ind &&
                        <Fragment key={ind}>
                           <div style={{ position: "absolute", top: "50%", width: "98%" }}>
                          <div className="mb-3">
                            <h5 htmlFor="name-field" className="form-label">Question {ind + 1} :- {item.Question} </h5>
                            <Input
                              name="title" id="customername-field" className="form-control border_None"
                              placeholder="Type here" type="text"
                              validate={{
                                required: { value: true },
                              }}
                            />
                          </div>
                          <div className="offcanvas-footer text-center hstack gap-2 justify-content-start">
                            {
                              Question.length-1 === activeTab ?
                                <>

                                  <button type="submit" className="btn btn-brand-theme"
                                    onClick={() => { Completed() }}>
                                    Submit
                                  </button>
                                  
                                </>
                                :
                                <>
                                  <button type="submit" className="btn btn-brand-theme"
                                    onClick={() => { toggleTab(ind) }}>
                                    OK
                                  </button>

                                  <button type="submit" className="btn btn-secondary">
                                  Preview
                                </button>
                                 
                                </>
                                
                            }

                            {
                              ind > 0 &&
                              <button type="submit" className="btn btn-brand-theme btn-info"
                                onClick={() => { backTab(activeTab) }}>
                                Back
                              </button>
                              
                            }

                          </div>
                          </div>
                        </Fragment>
                      )
                    })
                  }
                </div>
              
            </Col>
          </Row>
        </Container>
      </div>
      </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default TypeForm;