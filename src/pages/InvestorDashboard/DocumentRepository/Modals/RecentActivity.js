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
  Card,
  Container,
  Input,
} from "reactstrap";

import { Link } from "react-router-dom";
import Select from "react-select";

const RecentActivity  = ({ show, onCloseClick, modelName, toggleModel }) => {
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
      className=""
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Recent Activity
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <Form>
              <Container fluid>
                <Row>
                  <Col lg={12}>
                    coming soon
                  </Col>
                </Row>

              </Container>
            </Form>
          </div>
        </OffcanvasBody>
       {/* <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button type="button" className="btn btn-brand-theme">
              Save
            </Button>
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div> */}
      </form>
    </Offcanvas>
  );
};

export default RecentActivity;
