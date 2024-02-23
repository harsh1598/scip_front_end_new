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
const SingleOptions = [
  { value: 'Abhaya Kumar Shankar', label: 'Abhaya Kumar Shankar' },
  { value: 'Aimy Joe', label: 'Aimy Joe' },
  { value: 'Alok Sahu', label: 'Alok Sahu' },
  { value: 'Chandran Krishnan', label: 'Chandran Krishnan' }
];

const EditLink = ({ show, onCloseClick, modelName, toggleModel }) => {
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
        Comment
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>

                <Col lg={12}>
                  <Label className="form-check-label">
                    Title <span className="error">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder="link 1"
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Link <span className="error">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder="https://devv2.scip.co/admin/dashboard"
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Link <span className="error">*</span>
                  </Label>
                  <Select
                    value={selectedMulti}
                    isMulti={true}
                    onChange={() => {
                      handleMulti();
                    }}
                    options={SingleOptions}
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

export default EditLink;
