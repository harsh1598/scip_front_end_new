import React from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

const ActiveInActive = ({ show, onCloseClick }) => {

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Active / InActive
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
         <Row>
          <Col lg={12}>
            <div className="mb-3 pb-2">
                <Label htmlFor="note"
                  className="form-label">Reason</Label>
                  <textarea className="form-control"
                  id="note"
                  // placeholder="Please write your message here..." 
                  rows="3" defaultValue=""></textarea>
            </div>
            <div className="mt-3">
              <div className="form-check">
                  <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                  <Label className="form-check-label" htmlFor="auth-remember-check">Send notification to the User  </Label>
              </div>
            </div>
            <div className="mt-1">
              <p>Note :- Please select the check box to send an email . </p>
            </div>
            
          </Col>
         </Row>
        </OffcanvasBody>
        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
        <button
            type="submit"
            className="btn btn-brand-theme  "
            onClick={onCloseClick}
          >
            Submit
          </button>
          <button
            className="btn btn-light  "
            onClick={onCloseClick}
          >
            Cancel
          </button>
         
        </div>
      </form>
    </Offcanvas>
  );
};

export default ActiveInActive;
