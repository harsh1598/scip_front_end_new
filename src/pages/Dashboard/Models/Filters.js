import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Label,
  Input,
  Select,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const Filters = ({ show, onCloseClick, modelName, toggleModel }) => {
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
        Filters
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="pt-3">
          <Row>
            <Col lg={12}>
              <div className="text-end pb-2"><a href="javascript:void(0);" className="text-danger round-danger">Reset Filters</a></div>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option value="1" selected="true">
                  (1) Investment Pipeline
                </option>
              </select>
            </Col>
            <Col lg={12}>
              <h6>Table Columns</h6>
            </Col>
          </Row>

          <div
            className="p-3"
            style={{ backgroundColor: "#dff0fa", borderRadius: "5px" }}
          >
            <div className="form-check mb-2">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck1"
              />
              <Label className="form-check-label" htmlFor="formCheck1">
                Company/Campaign
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck2"
                defaultChecked
              />{" "}
              /
              <Label className="form-check-label" htmlFor="formCheck2">
                Task
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck3"
                defaultChecked
              />{" "}
              /
              <Label className="form-check-label" htmlFor="formCheck3">
                Milestone
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck4"
                defaultChecked
              />{" "}
              /
              <Label className="form-check-label" htmlFor="formCheck4">
                Assigned To
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck5"
                defaultChecked
              />{" "}
              /
              <Label className="form-check-label" htmlFor="formCheck5">
                Due Date
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck6"
                defaultChecked
              />{" "}
              /
              <Label className="form-check-label" htmlFor="formCheck6">
                Nomenclature Code
              </Label>
            </div>
          </div>
        </OffcanvasBody>
        {/*<div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
          <button className="btn btn-light" onClick={onCloseClick}>
            Cancel
  </button> 
        </div>*/}
      </form>
    </Offcanvas>
  );
};

export default Filters;
