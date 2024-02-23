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
  UncontrolledTooltip,
} from "reactstrap";

const DealTermsClass = ({ show, onCloseClick }) => {

  const CompanyStageList = [
    { value: 'ClassA', label: 'Class A' },
    { value: 'ClassB', label: 'Class B' },
    { value: 'ClassC', label: 'Class C' },
    { value: 'ClassD', label: 'Class D' },
    { value: 'ClassE', label: 'Class E' },
    { value: 'Treewood', label: 'Treewood' }
  ];


  const handleChange = (name, event, index = null,) => {


  }

  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Deal Terms Class  <i className=" ri-information-fill  align-bottom" id="DealTermsClass"></i>
        <UncontrolledTooltip placement="bottom" target="DealTermsClass">
            Here select class and change percentage that reflect all entries that is have a same Champaign and Class.
        </UncontrolledTooltip>
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
              <div className="mb-3">
                <Label htmlFor="Rejection Reason" className="form-label">Class</Label>
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

export default DealTermsClass;
