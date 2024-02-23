import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Spinner,
  FormFeedback,
} from "reactstrap";

import avatar4 from "../../../../assets/images/users/avatar-4.jpg";

const AddSignatory = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);

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
        Authorized Signatory
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Row>
              <Col lg={12}>
                <div className="mb-3">
                  <Label htmlFor="" className="form-label">
                    Member's Name
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="firstnameInput"
                    placeholder="Member's Name"
                    defaultValue=""
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Label htmlFor="" className="form-label">
                    Member's Email
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="firstnameInput"
                    placeholder="Member's Email"
                    defaultValue=""
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Label htmlFor="" className="form-label">
                    Member's Phone
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="firstnameInput"
                    placeholder="Member's Phone"
                    defaultValue=""
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Label htmlFor="" className="form-label">
                    Document
                  </Label>
                  <Input
                    className="form-control"
                    id="formSizeDefault"
                    type="file"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Col lg={12}>
              <div className="hstack gap-2 justify-content-end">
                <Button type="button" className="btn btn-brand-theme">
                  Save
                </Button>

                <Button to="/profile" className="btn btn-light">
                  Cancel
                </Button>
              </div>
            </Col>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default AddSignatory;
