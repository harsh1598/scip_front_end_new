import React from "react";

import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Row,
  Col,
} from "reactstrap";

const AddDeaInfo = ({ show, onCloseClick }) => {

  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Add Deal Info
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
              <div className="mb-3">
                <Label htmlFor="note"
                  className="form-label">Line 1</Label>
                <textarea className="form-control"
                  id="note"
                  placeholder="Type Deal Info"
                  rows="3" defaultValue=""></textarea>
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-3 ">
                <Label htmlFor="note"
                  className="form-label">Line 2</Label>
                <textarea className="form-control"
                  id="note"
                  placeholder="Type Deal Info"
                  rows="3" defaultValue=""></textarea>
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-3 ">
                <Label htmlFor="note"
                  className="form-label">Line 3</Label>
                <textarea className="form-control"
                  id="note"
                  placeholder="Type Deal Info"
                  rows="3" defaultValue=""></textarea>
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

export default AddDeaInfo;
