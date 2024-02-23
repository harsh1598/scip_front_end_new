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
  Textarea,
} from "reactstrap";

const EditCompany = ({ show, onCloseClick, modelName, toggleModel }) => {
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
        Commitment by Other Investors/Angel Networks
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Name of the investor/network{" "}
                    <span className="error">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder=""
                    value=""
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Amount <span className="error">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder=""
                    value=""
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Note</Label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea5"
                    rows="3"
                  ></textarea>
                </Col>
              </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Save
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

export default EditCompany;
