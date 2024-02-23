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

const AddBoardDirector = ({ show, onCloseClick, modelName, toggleModel }) => {
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
      Add Board Of Director
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Member Name <span className="error">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Member Name"
                    value=""
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Member Role <span className="error">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Member Role"
                    value=""
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Linkedin Url
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Linkedin Url"
                    value=""
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Member Photo</Label>
                  <div className="avatar-md">
                    <img
                      src={avatar1}
                      alt="user-img"
                      className="img-thumbnail rounded-circle"
                    />
                  </div>
                </Col>
                <Col lg={12} className="mt-2">
                  <Input className="form-control" type="file" id="formFile" />
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

export default AddBoardDirector;
