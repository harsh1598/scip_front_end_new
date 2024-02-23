import React, { useState, useCallback, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Input,
  Col,
  Button,
  Form,
} from "reactstrap";

import { useForm } from "react-hook-form";

// Images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";

interface propData {
  show: boolean;
  onCloseClick: any;
}

const DescriptionModal = (props: propData) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onCloseModal = () => {
    reset();
    props.onCloseClick();
  };

  return (
    <Offcanvas
      isOpen={props.show}
      onHide={onCloseModal}
      toggle={props.onCloseClick}
      direction="end"
      className="border-bottom"
    >
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
        Title / Description
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <Form>
              <Row>
                <Col lg={12} md={12} className="mb-3">
                  <label>Title</label>
                  <Input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Enter title"
                  />
                </Col>
                <Col lg={12} md={12} className="mb-3">
                  <label>Description</label>
                  <textarea
                    placeholder="Enter description"
                    className="form-control"
                    id=""
                  ></textarea>
                </Col>
              </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button className="btn btn-brand-theme">Submit</Button>
            <Button className="btn btn-light">Cancel</Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default DescriptionModal;
