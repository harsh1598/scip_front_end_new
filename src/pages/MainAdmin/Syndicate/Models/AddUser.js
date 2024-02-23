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

const AddUser = ({ show, onCloseClick, modelName, toggleModel }) => {
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
        Add User
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    First Name
                  </Label>
                  <Input
                    className="form-control"
                    type="input"
                    value=""
                    id=""
                    placeholder="First Name"
                  />
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Last Name
                  </Label>
                  <Input
                    className="form-control"
                    type="input"
                    value=""
                    id=""
                    placeholder="Last Name"
                  />
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Email ID
                  </Label>
                  <Input
                    className="form-control"
                    type="input"
                    value=""
                    id=""
                    placeholder="Email ID"
                  />
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Contact No.
                  </Label>
                  <Input
                    className="form-control"
                    type="input"
                    value=""
                    id=""
                    placeholder="Contact No."
                  />
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                  Designation
                  </Label>
                  <Input
                    className="form-control"
                    type="input"
                    value=""
                    id=""
                    placeholder="Designation "
                  />
                </Col>
                 <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Web Work Type
                  </Label>
                  <select className="form-select">
                    <option value="" selected="">Select Web Work Type</option>
                    <option value="incubation">Incubation</option>
                    <option value="incubation_investment">
                      Incubation Investment
                    </option>
                    <option value="investment">
                      Investment
                    </option>
                    <option value="default">Default</option>
                    <option value="debt">Debt</option>
                  </select>
                </Col>
                <Col lg={12} className="mb-3">
                <Label className="form-check-label">
                User Work Type
                </Label>
                <select className="form-select">
                <option value="" selected="">Select User Work Type</option>
                <option value="subuser">Subuser</option>
                <option value="intern">Intern</option>
                </select>
              </Col>
              <Col lg={12} className="mb-3">
              <Label className="form-check-label">
              Password
              </Label>
              <Input
                className="form-control"
                type="input"
                value=""
                id=""
                placeholder="Password "
              />
            </Col>
            <Col lg={12} className="mb-3">
            <Label className="form-check-label">
            Confirm Password
            </Label>
            <Input
              className="form-control"
              type="input"
              value=""
              id=""
              placeholder="Confirm Password "
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

export default AddUser;
