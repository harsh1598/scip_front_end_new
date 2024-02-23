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

const AddWorkflows = ({ show, onCloseClick, modelName, toggleModel }) => {
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
        Add Workflow Task
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
      <OffcanvasBody className="px-0 overflow-hidden">
      
        <div className="px-4">
          <Form>
            <Row>
              <Col lg={12}>
                <Label className="form-check-label">
                  Workflow <span className="error">*</span>
                </Label>
                <select className="form-select mb-3">
                  <option value="1" selected="true">
                    Select Workflow
                  </option>
                  <option value="2">(1) Investment Pipeline</option>
                  <option value="3">
                    3) Application Pipeline -Investor
                  </option>
                  <option value="4">
                    Application Pipeline -SME advisor
                  </option>
                  <option value="5">Application Pipeline -Startup</option>
                </select>
              </Col>
              <Col lg={12}>
                <Label className="form-check-label">
                  Milestone <span className="error">*</span>
                </Label>
                <select className="form-select mb-3">
                  <option value="">Select Milestone</option>
                  <option value="2">(1) Screening to deep dive</option>
                  <option value="3">
                    Presentation to initial commitments
                  </option>
                  <option value="4">Terms of investment</option>
                  <option value="5">Investment</option>
                  <option value="6">Post investment monitoring</option>
                </select>
              </Col>
              <Col lg={12}>
                <Label className="form-check-label">
                  Task <span className="error">*</span>
                </Label>
                <select className="form-select mb-3">
                  <option value="">Select Task</option>
                  <option value="2">(1.1) Readiness for Deal review</option>
                  <option value="3">
                    1.2) Evaluation by Deal Committee
                  </option>
                  <option value="4">Readiness for Deal presentation</option>
                </select>
              </Col>
              <Col lg={12}>
                <Label className="form-check-label">
                  Company <span className="error">*</span>
                </Label>
                <Input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Company"
                />
              </Col>
              <Col lg={12}>
                <Label className="form-check-label">
                  Assigned To <span className="error">*</span>
                </Label>
                <select className="form-select mb-3">
                  <option value="">Select</option>
                  <option value="user">Assigned To Users</option>
                  <option value="team">Assigned To Team</option>
                </select>
              </Col>
              <Col lg={12}>
                <Label className="form-check-label">Rubric/Note</Label>
                <select className="form-select mb-3">
                  <option value="">Select</option>
                  <option value="rubric">Rubric</option>
                  <option value="note">Note</option>
                </select>
              </Col>
              <Col lg={12}>
                <Label className="form-check-label">
                  Due Date <span className="error">*</span>
                </Label>
                <Flatpickr
                  className="form-control date-picker-icon"
                  options={{
                    dateFormat: "d M, Y",
                  }}
                />
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

export default AddWorkflows;
