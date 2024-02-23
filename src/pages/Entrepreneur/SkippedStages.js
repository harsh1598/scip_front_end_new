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

const SkippedStages = ({ show, onCloseClick }) => {

  return (
   
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-md">
    <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
    Skipped Stages
   </OffcanvasHeader>
   <OffcanvasBody className="px-0 overflow-hidden">
     <div className="px-4">
     <Row>
     <Col lg={12}>
       <div className="table-responsive table-card mt-2">
         <table className="table align-middle table-nowrap table-striped-columns mb-0">
           <thead className="table-light">
             <tr>
               <th scope="col">Added By</th>
               <th scope="col">Comment</th>
               <th scope="col">Skipped Stages</th>
               <th scope="col">Added Date</th>
             </tr>
           </thead>
           <tbody>
            <tr>
            <td colSpan={4}>
            <div class="alert alert-info text-center" role="alert">
            No Records Found.
           </div>
            </td>
            </tr>
           </tbody>
         </table>
       </div>
     </Col>
    </Row>
     </div>
   </OffcanvasBody>
   {/*<div className="offcanvas-foorter border p-3 text-center">
     <div className="hstack gap-2 justify-content-end">
       <Button type="button" className="btn btn-brand-theme" onClick={onCloseClick}>
         Submit
       </Button>
       <Button onClick={onCloseClick} className="btn btn-light">
         Cancel
       </Button>
     </div>
  </div> */}
 </Offcanvas>
  );
};

export default SkippedStages;
