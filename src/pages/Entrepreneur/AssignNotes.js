import React from "react";
import { useState } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Row,
  Col,
  Input,
  Button,
} from "reactstrap";

const AssignNotes = ({ show, onCloseClick }) => {

  return (
   
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
    <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
    Assign Notes
   </OffcanvasHeader>
   <OffcanvasBody className="px-0 overflow-hidden">
     <div className="px-4">
       <Row>
       <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                  Notes
                  </Label>
                  <select className="form-select">
                  <option value="" selected>Select Notes</option>
                  <option value="1">Recommendation note</option>
                  <option value="2">Exit note</option> 
                  </select>
                </Col>
       </Row>
     </div>
   </OffcanvasBody>
   <div className="offcanvas-foorter border p-3 text-center">
     <div className="hstack gap-2 justify-content-end">
       <button type="button" className="btn btn-brand-theme" onClick={onCloseClick}>
         Submit
       </button>
       <Button onClick={onCloseClick} className="btn btn-light">
         Cancel
       </Button>
     </div>
   </div>
 </Offcanvas>
  );
};

export default AssignNotes;
