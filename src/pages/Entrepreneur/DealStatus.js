import React from "react";
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

const DealStatus = ({ show, onCloseClick }) => {
    const CompanyStageList = [
        { value: 'Investor', label: 'Book building' },
        { value: 'PE', label: 'Yet To be Funded' },
        { value: 'VC', label: 'Funded' }
    ];
  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
       Deal Status
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
        <Row>
          <Col lg={12}>
              <div className="mb-3">
                  <Label htmlFor="timezone" className="form-label"> Select Deal status <span className='text-danger'>*</span>   </Label>
                  <Select
                      isClearable={true}
                      placeholder="Select  "
                      // isMulti
                      name="applicationstatus"
                      options={CompanyStageList}
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

export default DealStatus;
