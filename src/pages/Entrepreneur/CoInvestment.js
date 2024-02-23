import React, { useState } from "react";
import Select from "react-select";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

const CoInvestment = ({ show, onCloseClick }) => {

  const handleChange = (name, event, index = null,) => {



  }

  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Add Co Investment
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Name <span className='text-danger'>*</span></Label>
                <Input
                  name="name" id="customername-field" className="form-control"  placeholder="Name" type="text"
                  validate={{
                    required: { value: true },
                  }}
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Email <span className='text-danger'>*</span></Label>
                <Input
                  name="email" id="customername-field" className="form-control"  placeholder="Email" type="text"
                  validate={{
                    required: { value: true },
                  }}
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-3 pb-2">
                <Label htmlFor="note"
                  className="form-label">Message  <span className='text-danger'>*</span></Label>
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

export default CoInvestment;
