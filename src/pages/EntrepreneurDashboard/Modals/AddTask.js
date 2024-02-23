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

const AddTask = ({ show, onCloseClick, modelName, toggleModel }) => {
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
        Add Task
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Milestone <span className="error">*</span>
                  </Label>
                  <select className="form-select mb-3">
                    <option value="">Select Milestone</option>
                    <option value="1">Screening</option>
                    <option value="2">
                      Presentation to Initial Commitment
                    </option>
                    <option value="3">Terms of Investment</option>
                    <option value="4">Investment</option>
                    <option value="5">Post Investment monitoring</option>
                  </select>
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Task <span className="error">*</span>
                  </Label>
                  <select className="form-select mb-3">
                    <option value="">Select Task</option>
                  </select>
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Task Title <span className="error">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder=""
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Priority <span className="error">*</span>
                  </Label>
                  <select className="form-select mb-3">
                    <option value="">Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Due Dat <span className="error">*</span>
                  </Label>
                  <Flatpickr
                    className="form-control"
                    options={{
                      dateFormat: "d M, Y",
                    }}
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Assigned To</Label>
                  <select className="form-select">
                    <option value="">Select</option>
                    <option value="rubric">Assigned To Users</option>
                    <option value="note">Assigned To Guest</option>
                  </select>
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

export default AddTask;
