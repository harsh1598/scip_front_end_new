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

const AddDealLabel = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
      Add Deal Label
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                  Label Title
                  </Label>
                  <Input
                    className="form-control"
                    type="input"
                    value=""
                    id=""
                    placeholder="Label Title"
                  />
                </Col>
                 <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                  Label Type
                  </Label>
                  <select className="form-select">
                    <option value="" selected="">Select Type</option>
                    <option value="single">Single</option>
                    <option value="multiple">Multiple</option>
                  </select>
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

export default AddDealLabel;
