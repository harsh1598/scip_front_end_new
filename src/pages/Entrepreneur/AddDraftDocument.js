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

const AddDraftDocument = ({ show, onCloseClick }) => {

  return (
   
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
    <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
    Add Draft Document
   </OffcanvasHeader>
   <OffcanvasBody className="px-0 overflow-hidden">
     <div className="px-4">
       <Row>
       <Col lg={12}>
       <div className="mb-3">
             <Label htmlFor="formSizeDefault" className="form-label">
             Document Title <span>*</span>
             </Label>
             <Input
               className="form-control"
               id=""
               type="text"
             />
           </div>
       </Col>
         <Col lg={12}>
           <div className="mb-3">
             <Label htmlFor="formSizeDefault" className="form-label">
               Membership Agreement
             </Label>
             <Input
               className="form-control"
               id="formSizeDefault"
               type="file"
             />
           </div>
           <div className="text-end">
             <button type="button" className="btn btn-brand-theme">
               Upload
             </button>
           </div>
         </Col>
       </Row>
     </div>
   </OffcanvasBody>
   <div className="offcanvas-foorter border p-3 text-center">
     <div className="hstack gap-2 justify-content-end">
       <button type="button" className="btn btn-brand-theme" onClick={onCloseClick}>
         Save
       </button>
       <Button onClick={onCloseClick} className="btn btn-light">
         Cancel
       </Button>
     </div>
   </div>
 </Offcanvas>
  );
};

export default AddDraftDocument;
