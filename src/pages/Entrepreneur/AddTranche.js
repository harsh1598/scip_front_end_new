import React, { useState } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

const AddTranche = ({ show, onCloseClick }) => {

  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Tranche
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Tranche Name<span className='text-danger'>*</span></Label>
                <Input
                  name="name" id="customername-field" className="form-control"  placeholder="Enter Tranche name" type="text"
                  validate={{
                    required: { value: true },
                  }}
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Raising Amount<span className='text-danger'>*</span></Label>
                <Input
                  name="name" id="customername-field" className="form-control"  placeholder="Enter Raising Amount" type="text"
                  validate={{
                    required: { value: true },
                  }}
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Note  </Label>
                <textarea className="form-control"
                  id="note"
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

export default AddTranche;
