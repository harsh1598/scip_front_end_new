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

const PostPresentation = ({ show, onCloseClick }) => {

  return (
   
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
    <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
    Post Presentation
   </OffcanvasHeader>
   <OffcanvasBody className="px-0 overflow-hidden">
     <div className="px-4">
       <Row>
       <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                  Presentation Attendance
                  </Label>
                  <div className="input-group">
                  {/*<Label className="input-group-text" htmlFor="inputGroupFile01">Upload</Label>*/}
                  <Input type="file" className="form-control" id="inputGroupFile01" />
                 </div>
                 <div className="text-muted fs-12 pt-2">CSV file should be in the specified format :<br/>
                 Click here to download the CSV format</div>
                </Col>
                <Col lg={12} className="mb-3">
                <Label className="form-check-label">
                Discussion During Presentation
                </Label>
                <textarea class="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
              </Col>
       </Row>
     </div>
   </OffcanvasBody>
   <div className="offcanvas-foorter border p-3 text-center">
     <div className="hstack gap-2 justify-content-end">
       <Button type="button" className="btn btn-brand-theme" onClick={onCloseClick}>
         Submit
       </Button>
       <Button onClick={onCloseClick} className="btn btn-light">
         Cancel
       </Button>
     </div>
   </div>
 </Offcanvas>
  );
};

export default PostPresentation;
