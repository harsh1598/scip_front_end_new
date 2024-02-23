import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Input,
  Form,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";

const EditInfo = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(false);
  }, [modelName == "CreateSchedule"]);

  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Edit Info
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    First Name <span className="error">*</span>
                  </Label>
                  <Input
                    className="form-control"
                    type="input"
                    value="Smriti"
                    id=""
                    placeholder=""
                  />
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Last Name <span className="error">*</span>
                  </Label>
                  <Input
                    className="form-control"
                    type="input"
                    value="Misra"
                    id=""
                    placeholder=""
                  />
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Email <span className="error">*</span>
                  </Label>
                  <Input
                    className="form-control"
                    type="input"
                    
                    id=""
                    placeholder=""
                  />
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Address <span className="error">*</span>
                  </Label>
                  <textarea
                    class="form-control"
                    id=""
                    rows="2"
                    value="Module No.6, Sixth Floor , Block A - Phase II, IIT Madras Research Park, Kanagam Road , Taramani, Chennai, Tamil Nadu 600113"
                  ></textarea>
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Phone Number <span className="error">*</span>
                  </Label>
                  <Input
                    className="form-control"
                    type="input"
                    value="8587988504"
                    id=""
                    placeholder=""
                  />
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Web Work Type <span className="error">*</span>
                  </Label>
                  <select className="form-select">
                    <option value="">Select Web Work Type</option>
                    <option value="incubation">Incubation</option>
                    <option value="incubation_investment">
                      Incubation Investment
                    </option>
                    <option value="investment" selected="">
                      Investment
                    </option>
                    <option value="default">Default</option>
                    <option value="debt">Debt</option>
                  </select>
                </Col>

                <Col lg={12} className="mb-3" onClick={handleClick}>
                  <Link href="#" className="fs-15">
                    <i className="ri-lock-line align-bottom me-1"></i> Change
                    Password
                  </Link>

                  {isShown && (
                    <div className="mt-2">
                    <Form>
                    <Row>
                      <Col lg={12} className="mb-3">
                        <Label className="form-check-label">
                        Password <span className="error">*</span>
                        </Label>
                        <Input
                          className="form-control"
                          type="input"
                          value=""
                          id=""
                          placeholder="Password"
                        />
                      </Col>
                      <Col lg={12} className="mb-3">
                        <Label className="form-check-label">
                        Confirm Password <span className="error">*</span>
                        </Label>
                        <Input
                          className="form-control"
                          type="input"
                          value=""
                          id=""
                          placeholder="Confirm Password"
                        />
                      </Col>
                      </Row>
                      </Form>
                    </div>
                  )}

                  {isShown && <Box />}
                </Col>
              </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Save
            </button>
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );

  function Box() {}
};

export default EditInfo;
