import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  Label,
  Button,
} from "reactstrap";
import Flatpickr from "react-flatpickr";

const SyndicateFilters = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);

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

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Filters
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Select Date <span className="error">*</span>
                  </Label>
                  <Flatpickr
                    className="form-control"
                    placeholder=""
                    options={{
                      dateFormat: "d M, Y",
                    }}
                  />
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Select City <span className="error">*</span>
                  </Label>
                  <select className="form-select">
                    <option value="2">Select City</option>
                    <option value="">Select City</option>
                    <option value="4">Ahmedabad</option>
                    <option value="54">Ahmednagar</option>
                    <option value="44">Ajmer</option>
                    <option value="55">Aurangabad</option>
                    <option value="10">Ballari</option>
                    <option value="11">Bangalore</option>
                    <option value="12">Bangalore Plus</option>
                    <option value="45">Beawar</option>
                    <option value="13">Belgaum</option>
                    <option value="5">Bhavnagar</option>
                    <option value="46">Bhilwara</option>
                    <option value="19">Bhopal</option>
                    <option value="14">Bijapur</option>
                    <option value="47">Bikaner</option>
                    <option value="64">Chennai</option>
                    <option value="56">Chinchwad-Pimpri</option>
                    <option value="48">Chittorgarh</option>
                    <option value="65">Coimbatore</option>
                    <option value="15">Davangere</option>
                  </select>
                </Col>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">
                    Source Of Contact <span className="error">*</span>
                  </Label>
                  <select className="form-select">
                    <option value="">Source Of Contact</option>
                    <option value="8">Business Expert </option>
                    <option value="1">Networking Event </option>
                    <option value="2">Newspaper </option>
                    <option value="3">Pitch Event </option>
                    <option value="4">Publication - Book </option>
                    <option value="5">Publication - Magazine </option>
                    <option value="6">Radio </option>
                    <option value="7">Search Engine </option>
                    <option value="9">Television - Cable </option>
                    <option value="10">Television - Free to air </option>
                    <option value="11">Trader Plus </option>
                    <option value="12">Wealth Creator </option>
                    <option value="13">Website - other </option>
                    <option value="14">Website - social media </option>
                    <option value="15">Website - Youtube </option>
                  </select>
                </Col>
              </Row>
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

export default SyndicateFilters;
