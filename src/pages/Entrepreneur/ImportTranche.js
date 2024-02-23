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

const ImportTranche = ({ show, onCloseClick }) => { 

  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Import Tranche Commitment Details
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">Prepared by<span className='text-danger'>*</span></Label>
                <Input
                  name="name" id="customername-field" className="form-control"  placeholder="Enter Prepared by" type="text"
                  validate={{
                    required: { value: true },
                  }}
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Checked by<span className='text-danger'>*</span></Label>
                <Input
                  name="name" id="customername-field" className="form-control"  placeholder="Enter checked by" type="text"
                  validate={{
                    required: { value: true },
                  }}
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Select File <span className='text-danger'>*</span>  </Label>
                <div className="d-flex align-items-center form-control">
                    <div className='attachment-btn '>
                            <input type="file" className='input' />
                            <i className='ri ri-attachment-line icon' />
                        </div>
                        <span className=" text-black-50 ms-1">filename.doc</span>
                    </div> 
                </div>
            </Col>
            <Col lg={12}>
                <p className="text-black-50 ms-1">CSV file should be in the specified format :</p>
                <p className="text-black-50 ms-1"><Link>Click here</Link> to download the CSV format</p>
                <p className="text-black-50 ms-1">After downloading the file, add the tranche amounts and upload the file.</p>
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

export default ImportTranche;
