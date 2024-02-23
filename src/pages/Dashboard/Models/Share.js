import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import deals_under_evaluation from "../../../assets/images/deals_under_evaluation@3x.png";
import calendar1 from "../../../assets/images/calendar1@3x.png";
import initial_investment from "../../../assets/images/initial_investment@3x.png";
import final_investment from "../../../assets/images/final_investment@3x.png";
import call_for_money from "../../../assets/images/call_for_money@3x.png";
import { Link } from "react-router-dom";

const Share = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);

  const togglePopup = useCallback(() => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [isShow]);

  useEffect(() => {
    setIsShow(false);
  }, [modelName == "CreateSchedule"]);

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-md"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Deal Action (Moongoose)
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col xxl={4} md={6}>
              <Card
                className="card-animate bg-warning bg-gradient"
                onClick={(e) => toggleModel("Evaluation")}
                style={{ cursor: "pointer" }}
              >
                <CardBody className="p-3 text-center">
                  <div className="mx-auto avatar-md mb-3">
                    <img
                      src={deals_under_evaluation}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h6 className="text-white mb-0">Evaluation</h6>
                </CardBody>
              </Card>
            </Col>
            <Col xxl={4} md={6}>
              <Card
                className="card-animate bg-danger bg-gradient"
                onClick={() => {
                  setIsShow(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <CardBody className="p-3 text-center">
                  <div className="mx-auto avatar-md mb-3">
                    <img src={calendar1} alt="" className="img-fluid" />
                  </div>
                  <h6 className="text-white mb-0">Create Schedule</h6>
                </CardBody>
              </Card>
            </Col>
            <Col xxl={4} md={6}>
              <Card
                className="card-animate bg-info bg-gradient"
                onClick={(e) => toggleModel("InitialCommitment")}
                style={{ cursor: "pointer" }}
              >
                <CardBody className="p-3 text-center">
                  <div className="mx-auto avatar-md mb-3">
                    <img
                      src={initial_investment}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h6 className="text-white mb-0">Initial Commitment</h6>
                </CardBody>
              </Card>
            </Col>
            <Col xxl={4} md={6}>
              <Card
                className="card-animate bg-success bg-gradient"
                onClick={(e) => toggleModel("FinalCommitment")}
                style={{ cursor: "pointer" }}
              >
                <CardBody className="p-3 text-center">
                  <div className="mx-auto avatar-md mb-3">
                    <img src={final_investment} alt="" className="img-fluid" />
                  </div>
                  <h6 className="text-white mb-0">Final Commitment</h6>
                </CardBody>
              </Card>
            </Col>
            <Col xxl={4} md={6}>
              <Card
                className="card-animate bg-success bg-gradient"
                onClick={(e) => toggleModel("CallForMoney")}
                style={{ cursor: "pointer" }}
              >
                <CardBody className="p-3 text-center">
                  <div className="mx-auto avatar-md mb-3">
                    <img src={call_for_money} alt="" className="img-fluid" />
                  </div>
                  <h6 className="text-white mb-0">Call For Money</h6>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal id="showModal" isOpen={isShow} toggle={togglePopup} centered>
            <ModalHeader className="bg-soft-info p-3" toggle={togglePopup}>
              Create Schedule
            </ModalHeader>
            <ModalBody>
              <h5 className="mb-sm-0">
                <Link to="/calendar">Click here</Link> to schedule a meeting
                from Google Calendar.
              </h5>
              <br></br>
              <h5>
                <Link to="#" onClick={(e) => toggleModel("CreateSchedule")}>
                  Click here
                </Link>{" "}
                to schedule a meeting to open the deal on Web and App in the
                tile Forthcoming Presentation.{" "}
              </h5>
            </ModalBody>
          </Modal>
        </OffcanvasBody>
        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
          <button className="btn btn-light" onClick={onCloseClick}>
            Cancel
          </button>
        </div>
      </form>
    </Offcanvas>
  );
};

export default Share;
