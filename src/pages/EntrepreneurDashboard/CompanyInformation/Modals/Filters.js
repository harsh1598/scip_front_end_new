import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Label,
  Input,
  Select,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const Filters = ({ show, onCloseClick, modelName, toggleModel }) => {
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
        <OffcanvasBody className="pt-3">
          <Row>
            <Col lg={12}>
            <Label>Filing</Label>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
              <option value="1" selected="true">
              Select Filing
                </option>
                <option value="1" selected="true">
                Budget vs Actual
                </option>
                <option value="2">
                Key Milestones
              </option>
              <option value="3">
              Performance
            </option>
            <option value="4">
            Presentation
          </option>
              </select>
            </Col>
          
          </Row>

          
        </OffcanvasBody>
        
      </form>
    </Offcanvas>
  );
};

export default Filters;
