import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import Flatpickr from "react-flatpickr";

const AddExitInformation = ({ show, onCloseClick }) => {

  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Add Exit Details
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
        <Row>
            <Col lg={12}>
                <div className="mb-2">
                    <Label htmlFor="name-field" className="form-label">Sale Consideration <span className='text-danger'>*</span></Label>
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">INR</span>
                        <Input type="text" class="form-control" placeholder="Sale Consideration" aria-label="Username" aria-describedby="basic-addon1" 
                        validate={{
                            required: { value: true },
                        }} 
                        />
                    </div>
                </div>
            </Col>
            <Col lg={12}>
                <div className="mb-2">
                    <Label htmlFor="name-field" className="form-label">Investment Retained Amount <span className='text-danger'>*</span></Label>
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">INR</span>
                        <Input type="text" class="form-control" placeholder="Investment Retained Amount" aria-label="Username" aria-describedby="basic-addon1" 
                        validate={{
                            required: { value: true },
                        }} 
                        />
                    </div>
                </div>
            </Col>
            <Col lg={12}>
                <div className="mb-2">
                    <Label htmlFor="name-field" className="form-label">Instrument Retained <span className='text-danger'>*</span></Label>
                    <Input type="text" class="form-control" placeholder="Instrument Retained" aria-label="Username" aria-describedby="basic-addon1" 
                    validate={{
                        required: { value: true },
                    }} 
                    />
                </div>
            </Col>
            <Col lg={12}>
                <div className="mb-2">
                    <Label htmlFor="name-field" className="form-label">Exit Date<span className='text-danger'>*</span></Label>
                    <Flatpickr
                        className="form-control date-picker-icon"
                        // id="datepicker-publish-input"
                        name="date"
                        placeholder="Exit Date"
                        readOnly
                        // value={formData.date?formData.date:[]}
                        // onChange={e => handleChange('date',e,'multi' )}
                        options={{
                            mode: "single",
                            dateFormat: "d-m-Y"
                        }}
                    />
                </div>
            </Col>
            <Col lg={12}>
                <div className="mb-2">
                    <Label htmlFor="name-field" className="form-label">Closure Date<span className='text-danger'>*</span></Label>
                    <Flatpickr
                        className="form-control date-picker-icon"
                        // id="datepicker-publish-input"
                        name="date"
                        placeholder="Closure Date"
                        readOnly
                        // value={formData.date?formData.date:[]}
                        // onChange={e => handleChange('date',e,'multi' )}
                        options={{
                            mode: "single",
                            dateFormat: "d-m-Y"
                        }}
                    />
                </div>
            </Col>
            <Col lg={12}>
                <div className="mb-2">
                    <Label htmlFor="name-field" className="form-label">Investment Information <span className='text-danger'>*</span></Label>
                    <Input type="text" class="form-control" placeholder="Investment Information" aria-label="Username" aria-describedby="basic-addon1" 
                    validate={{
                        required: { value: true },
                    }} 
                    />
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

export default AddExitInformation;
