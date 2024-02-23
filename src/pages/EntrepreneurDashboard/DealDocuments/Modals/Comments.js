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
} from "reactstrap";

import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import SimpleBar from "simplebar-react";

const Comments = ({ show, onCloseClick, modelName, toggleModel }) => {
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
        Comment
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <form action="" className="d-flex flex-column justify-content-end h-100">
              <OffcanvasBody className="px-0">
                <SimpleBar
                  autoHide={false}
                  style={{ maxHeight: "600px" }}
                  className=""
                >
                  <Row>
                    <Col md={2} className="mx-auto">
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
                    <Col md={10} className="">
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
                    <Col md={2} className="mx-auto">
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
                    <Col md={10} className="">
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
                    <Col md={2} className="mx-auto">
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
                    <Col md={10} className="">
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
                <Row className="">
                  <hr />
                  {/* <div className="mb-3">
              <Input
                type="password"
                className="form-control"
                placeholder="Type your subject here..."
              />
            </div> */}
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Type your comment here..."
                    ></textarea>
                  </div>
                  <div className="text-end">
                    <button
                      type="submit"
                      className="btn btn-brand-theme"
                      onClick={onCloseClick}
                    >
                      Send <i className="ri-send-plane-2-fill align-bottom"></i>
                    </button>
                  </div>
                </Row>
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

      </form>
    </Offcanvas>
  );
};

export default Comments;
