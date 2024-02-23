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

const CommanModal = ({ show, onCloseClick, modelName, toggleModel }) => {
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
      Edit Company Application
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12}>
                  <Label className="form-check-label">
                  What makes team exceptional <span className="error">*</span>
                  </Label>
                  <textarea className="form-control" id="exampleFormControlTextarea5" rows="3" value="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."></textarea>
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

export default CommanModal;
