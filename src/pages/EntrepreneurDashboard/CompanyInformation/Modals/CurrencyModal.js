import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Col,
  Form,
  Label,
  Button,
} from "reactstrap";

const CurrencyModal = ({ show, onCloseClick, modelName, toggleModel }) => {
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

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Currency
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Col lg={12}>
                <Label className="form-check-label">Currency</Label>
                <select className="form-select mb-3">
                  <option>Select currency</option>
                  <option value="AED">AED</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR" selected="true">
                    INR
                  </option>
                  <option value="SGD">SGD</option>
                  <option value="USD">USD</option>
                </select>
              </Col>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button type="button" className="btn btn-brand-theme">
              Save
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default CurrencyModal;
