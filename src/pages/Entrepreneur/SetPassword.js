import React, { useState } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Input,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const SetPassword = ({ show, onCloseClick }) => {

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Set Password
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
         <Row>
         <Col lg={12}>
            <div className="mb-2">
              <UncontrolledTooltip placement="right" target="Password" >
                  Password must be a minimum of 6 characters long containing at least one letter, one number and one of following special character [@$!%*#?&]
                </UncontrolledTooltip>
              <Label  htmlFor="name-field" className="form-label"> Password <i className="ri-information-fill align-bottom "  id="Password"></i></Label>
              <Input
                name="password" id="customername-field" className="form-control" 
                placeholder="Enter Password"  type="password"
                validate={{
                  required: { value: true },
                }}
              />
            </div>
            <div className="mt-3">
              <div className="form-check">
                  <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                  <Label className="form-check-label" htmlFor="auth-remember-check">Send notification to the User </Label>
              </div>
            </div>
            <div className="mt-3">
              <p>Note – Please select the check box to send an email with the temporary password and instructions to set a new password. </p>
            </div>
          </Col>
         </Row>
        </OffcanvasBody>
        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
          <button type="submit" className="btn btn-brand-theme" onClick={onCloseClick}>
            Submit
          </button>
          <button className="btn btn-light" onClick={onCloseClick}>
            Cancel
          </button>
        </div>
      </form>
    </Offcanvas>
  );
};

export default SetPassword;
