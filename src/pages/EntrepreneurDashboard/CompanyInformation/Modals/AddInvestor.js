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

import avatar1 from "../../../../assets/images/users/avatar-1.jpg";

const AddInvestor = ({ show, onCloseClick, modelName, toggleModel }) => {
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
      Add Previous Investor
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12}>
                  <Label className="form-check-label">
                  Investor Name <span className="error">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Member Name"
                    value=""
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Investor Photo</Label>
                  <div className="avatar-md">
                    <img
                      src={avatar1}
                      alt="user-img"
                      className="img-thumbnail rounded-circle"
                    />
                  </div>
                </Col>
                <Col lg={12} className="mt-2 mb-3">
                  <Input className="form-control" type="file" id="formFile" />
                </Col>
                <Col lg={12}>
                <Label className="form-check-label">
                Investor Website
                </Label>
                <Input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Acceptable format: http://www.google.com or https://www.google.com"
                  value=""
                />
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

export default AddInvestor;
