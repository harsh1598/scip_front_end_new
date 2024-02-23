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
import Select from "react-select";

const SingleOptions = [
  { value: "Smriti", label: "Smriti" },
  { value: "Scip", label: "Scip" },
  { value: "Dinesh", label: "Dinesh" },
];

const EditTask = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);
  const [selectedMulti, setselectedMulti] = useState(null);
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

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Edit Task
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
                    <option value="2" selected>
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
                    <option value="" selected>
                      Track CS
                    </option>
                    <option value="">Share Allotment</option>
                  </select>
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Task Title <span className="error">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Track CS"
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Priority <span className="error">*</span>
                  </Label>
                  <select className="form-select mb-3">
                    <option value="">Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium" selected>
                      Medium
                    </option>
                    <option value="low">Low</option>
                  </select>
                </Col>
                <Col lg={12} className="mb-3">
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
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">Assigned To</Label>
                  <select className="form-select" disabled>
                    <option value="">Select</option>
                    <option value="rubric" selected>
                      Assigned To Users
                    </option>
                    <option value="note">Assigned To Guest</option>
                  </select>
                </Col>

                <Col lg={12}>
                  <Label className="form-check-label">Assigned To Users</Label>
                  <Select
                    value={selectedMulti}
                    isMulti={true}
                    onChange={() => {
                      handleMulti();
                    }}
                    options={SingleOptions}
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

export default EditTask;
