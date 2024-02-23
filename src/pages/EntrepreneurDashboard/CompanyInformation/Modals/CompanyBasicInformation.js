import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

import Select from "react-select";
import Flatpickr from "react-flatpickr";

const SingleOptions = [
  { value: "AI", label: "AI" },
  { value: "AR/VR", label: "AR/VR" },
  { value: "Blockchain", label: "Blockchain" },
  { value: "Analytics", label: "Analytics" },
];

const CompanyBasicInformation = ({
  show,
  onCloseClick,
  modelName,
  toggleModel,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [selectedMulti, setselectedMulti] = useState(null);
  const togglePopup = useCallback(() => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [isShow]);

  useEffect(() => {
    setIsShow(false);
  }, [modelName == "CreateSchedule"]);

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Edit Company Basic Informat
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Col lg={12}>
                <Label className="form-check-label">Company Stage</Label>
                <select className="form-select mb-3">
                  <option value="">Select Company Stage</option>
                  <option value="1">Idea</option>
                  <option value="2">Concept</option>
                  <option value="3">Beta</option>
                  <option value="4" selected="true">
                    Pre-Revenue
                  </option>
                  <option value="5">Revenue</option>
                </select>
              </Col>
              <Col lg={12}>
                <Label className="form-check-label">Product/Service</Label>
                <select className="form-select mb-3">
                  <option value="">Select</option>
                  <option value="1">Service</option>
                  <option value="2">Product</option>
                </select>
              </Col>
              <Col lg={12}>
                <Label className="form-check-label">Industry</Label>
                <select className="form-select mb-3">
                  <option value="">Select Industry</option>
                  <option value="9">Accommodation and Food Services</option>
                  <option value="14" selected="true">
                    Administrative and support service{" "}
                  </option>
                  <option value="1">
                    Agriculture, Forestry, Fishing &amp; Hunting
                  </option>
                  <option value="18">Arts, Entertainment and Recreation</option>
                  <option value="20">Biotechnology</option>
                  <option value="6">Construction</option>
                  <option value="16">Education</option>
                  <option value="4">
                    Electricity, gas, steam and air conditioning supply
                  </option>
                  <option value="11">Finance and Insurance</option>
                  <option value="17">Health Care and Social Assistance</option>
                  <option value="10">Information and Communication</option>
                  <option value="3">Manufacturing</option>
                  <option value="19">Other Services</option>
                  <option value="13">
                    Professional, Scientific and Technical Services
                  </option>
                  <option value="15">
                    Public administration and defence; compulsory social
                    security
                  </option>
                  <option value="12">Real Estate</option>
                  <option value="8">Transportation and Storage</option>
                  <option value="5">
                    Water supply, sewerage, waste management, remediation
                    activities
                  </option>
                  <option value="7">
                    Wholesale and Retail Trade, repair of motor vehicles and
                    motorcycles
                  </option>
                </select>
              </Col>
              <Col lg={12}>
                <Label className="form-check-label">Business Category</Label>
                <select className="form-select mb-3">
                  <option value="">Select Business Category</option>
                  <option value="1">B2B</option>
                  <option value="2" selected="true">
                    B2B2C
                  </option>
                  <option value="3">B2C</option>
                  <option value="4">Other</option>
                </select>
              </Col>
              <Col lg={12}>
                <Label className="form-check-label">Sector</Label>
                <Select
                  value={selectedMulti}
                  isMulti={true}
                  onChange={() => {
                    handleMulti();
                  }}
                  options={SingleOptions}
                />
              </Col>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Submit
            </button>
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default CompanyBasicInformation;
