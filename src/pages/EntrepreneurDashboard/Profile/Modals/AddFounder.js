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

const AddFounder = ({ show, onCloseClick, modelName, toggleModel }) => {
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
        Add Founder or Co-Founder Detail
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12}>
                  <Label className="form-check-label">
                    First Name <span className="error">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder="First name"
                    value=""
                  />
                </Col>
                <Col lg={12}>
                <Label className="form-check-label">
                  Last Name <span className="error">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Last name"
                  value=""
                />
              </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Email <span className="error">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Email"
                    value=""
                  />
                </Col>
                <Col lg={12}>
                <Label className="form-check-label">
                  Password <span className="error">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Password"
                  value=""
                />
              </Col>
              <Col lg={12}>
              <Label className="form-check-label">
                Confirm Password <span className="error">*</span>
              </Label>
              <Input
                type="text"
                className="form-control mb-3"
                placeholder="Confirm Password"
                value=""
              />
            </Col>
            <Col lg={12}>
            <Label className="form-check-label">
              Phone Number <span className="error">*</span>
            </Label>
            <Input
              type="text"
              className="form-control mb-3"
              placeholder="Phone Number"
              value=""
            />
          </Col>
          <Col lg={12}>
          <Label className="form-check-label">
            Job Title <span className="error">*</span>
          </Label>
          <Input
            type="text"
            className="form-control mb-3"
            placeholder="Job Title"
            value=""
          />
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
};

export default AddFounder;
