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

import Flatpickr from "react-flatpickr";

const EditCompanyDetails = ({ show, onCloseClick, modelName, toggleModel }) => {
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
        Edit Company Details
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12}>
                  <Label className="form-check-label">Registered Name</Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder=""
                    value="Survya Co"
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Registered Office</Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder=""
                    value="45/47, 1st Main Rd, Adyar, Chennai, Tamil Nadu 600020"
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Company Founded</Label>
                  <Flatpickr
                    className="form-control date-picker-icon"
                    options={{
                      dateFormat: "d M, Y",
                    }}
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Company Structure</Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder=""
                    value="Private limited"
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Operational Headquarters
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder=""
                    value="Mumbai"
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">No of Employee</Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder=""
                    value="15"
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Facebook Link</Label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1" style={{height: "40px"}}>
                    <i class="ri-facebook-fill facebook-clr"></i>
                    </span>
                    <Input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value="https://www.facebook.com/mymentoria/"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                <Label className="form-check-label">Twitter Link</Label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1" style={{height: "40px"}}>
                  <i class="ri-twitter-fill"></i>
                  </span>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value="https://twitter.com/mymentoria?lang=endd"
                  />
                </div>
              </Col>
              <Col lg={12}>
              <Label className="form-check-label">Linkedin Link</Label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1" style={{height: "40px"}}>
                <i class="ri-linkedin-fill"></i>
                </span>
                <Input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value="https://www.watconln.com"
                />
              </div>
            </Col>
            <Col lg={12}>
            <Label className="form-check-label">Instagram Link</Label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1" style={{height: "40px"}}>
              <i class="ri-instagram-fill"></i>
              </span>
              <Input
                type="text"
                className="form-control mb-3"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="https://www.instagram.com/mymentoria/?hl=en"
              />
            </div>
          </Col>
              </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Submit
            </button>
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default EditCompanyDetails;
