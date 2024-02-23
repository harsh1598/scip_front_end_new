import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
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
} from "reactstrap";

import { useForm } from "react-hook-form";

interface propData {
  show: boolean;
  onCloseClick: any;
}

const PriorityModal = (props: propData) => {
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
    className="border-bottom size-sm"
  >
    <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
    Priority
    </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
          <Row>
                    <Col lg={12} className="mb-3">
                    <span className="bg-info warning-box">Low</span>
                    </Col>
                    <Col lg={12} className="mb-3">
                      <span className="bg-warning warning-box">Medium</span>
                    </Col>
                    <Col lg={12} className="mb-3">
                    <span className="bg-danger warning-box">High</span>
                    </Col>
                    <Col lg={12} className="mb-3">
                    <span className="bg-light warning-box text-dark">Other</span>
                    </Col>
                    <Col lg={12} className="text-center">
                    <Link to="#" className="text-muted fs-14"><i className="ri-pencil-fill align-bottom me-2"></i> Edit Label</Link>
                    </Col>
                   </Row>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default PriorityModal;
