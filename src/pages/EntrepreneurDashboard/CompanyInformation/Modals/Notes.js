import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Textarea,
} from "reactstrap";

import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import SimpleBar from "simplebar-react";

const Notes = ({ show, onCloseClick, modelName, toggleModel }) => {
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
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Notes - Total Ask
      </OffcanvasHeader>

      <OffcanvasBody className="px-0 overflow-hidden">
        <div className="px-2">
          <form
            action=""
            className="d-flex flex-column justify-content-end h-100"
          >
            <OffcanvasBody className="px-0">
              <SimpleBar
                autoHide={false}
                style={{ maxHeight: "60 0px", overflowX: "hidden" }}
                className=""
              >
                <Row>
                  <Col md={3} className="mx-auto">
                    <div className="avatar-sm">
                      <img
                        src={avatar3}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <h5 className="fs-12 mt-1 fw-normal text-center">
                      Smriti Misra
                    </h5>
                  </Col>
                  <Col md={9} className="">
                    <h5 className="fs-14 mb-1">Subject:</h5>
                    <p className="fs-13 text-muted mb-2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <p className="fs-13 text-muted fw-light">
                      <i className="ri-alarm-line fs-16 align-middle"></i>{" "}
                      25/07/2023 08:13 AM
                    </p>
                  </Col>
                  <hr />
                  <Col md={3} className="mx-auto">
                    <div className="avatar-sm">
                      <img
                        src={avatar3}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <h5 className="fs-12 mt-1 fw-normal text-center">
                      Smriti Misra
                    </h5>
                  </Col>
                  <Col md={9} className="">
                    <h5 className="fs-14 mb-1">Subject:</h5>
                    <p className="fs-13 text-muted mb-2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <p className="fs-13 text-muted fw-light">
                      <i className="ri-alarm-line fs-16 align-middle"></i>{" "}
                      25/07/2023 08:13 AM
                    </p>
                  </Col>
                  <hr />
                  <Col md={3} className="mx-auto">
                    <div className="avatar-sm">
                      <img
                        src={avatar3}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <h5 className="fs-12 mt-1 fw-normal text-center">
                      Smriti Misra
                    </h5>
                  </Col>
                  <Col md={9} className="">
                    <h5 className="fs-14 mb-1">Subject:</h5>
                    <p className="fs-13 text-muted mb-2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <p className="fs-13 text-muted fw-light">
                      <i className="ri-alarm-line fs-16 align-middle"></i>{" "}
                      25/07/2023 08:13 AM
                    </p>
                  </Col>
                </Row>
              </SimpleBar>

              <hr />

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <div className="text-end">
                <button
                  className="btn btn-brand-theme me-3"
                  onClick={onCloseClick}
                >
                  <i className="ri-attachment-2"></i>
                </button>
                <button
                  type="submit"
                  className="btn btn-brand-theme"
                  onClick={onCloseClick}
                >
                  Send <i class="ri-send-plane-2-fill align-bottom"></i>
                </button>
              </div>
            </OffcanvasBody>
            {/*  <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
            <button type="submit" className="btn btn-brand-theme" onClick={onCloseClick}>
              Submit
            </button>
            <button className="btn btn-light" onClick={onCloseClick}>
              Cancel
            </button>
          </div> */}
          </form>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default Notes;
