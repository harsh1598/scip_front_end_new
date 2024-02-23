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

const Rejection = ({ show, onCloseClick }) => {

  const CompanyStageList = [
    { value: 'Beta', label: 'Beta' },
    { value: 'Concept', label: 'Concept' },
    { value: 'Idea', label: 'Idea' },
    { value: 'PreRevenue', label: 'Pre Revenue' },
    { value: 'Revenue', label: 'Revenue' },
    { value: 'All', label: 'All' }
  ];


  const handleChange = (name, event, index = null,) => {

  }

  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Rejection
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
              <div className="mb-3">
                <Label htmlFor="Rejection Reason" className="form-label">Rejection Reason</Label>
                <Select
                  isClearable={true}
                  // isMulti
                  // value={formData.profle ? formData.profle : []}
                  onChange={(e) => {
                    handleChange("profle", e, 'multi');
                  }}
                  options={CompanyStageList}
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-3 pb-2">
                <Label htmlFor="note"
                  className="form-label">Message</Label>
                <textarea className="form-control"
                  id="note"
                  rows="3" defaultValue=""></textarea>
              </div>
              <div className="mt-3">
                <div className="form-check">
                  <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                  <Label className="form-check-label" htmlFor="auth-remember-check">Standard Email - Preview Email </Label>
                </div>
              </div>
              <div className="mt-1">
                <span><b>Note :-</b>  Please select the check box to send an email . </span><br></br>
                <span><b>Please Note :-</b> If the campaign is rejected, Enterpreneur Will be <b>deactivated.</b>
                  All pending <b>tasks</b> related to this deal will be closed . The <b>deal</b> will not be visiable to investor on mobile App and the web platform. </span>
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

export default Rejection;
