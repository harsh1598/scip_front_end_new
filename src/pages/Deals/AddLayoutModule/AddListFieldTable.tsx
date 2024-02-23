import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { className } from "gridjs";

import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  Button,
  Label,
  Input,
  
} from "reactstrap";

import { useForm } from "react-hook-form";

interface propData {
  show: boolean;
  onCloseClick: any;
}

const AddListFieldTable = (props: propData) => {
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
    className="border-bottom size-md"
  >
    <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
    Edit List Fields
    </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12} sm={12} className="mb-3">
                  <Label>Field Title</Label>
                  <Input type="text" name="" value="" placeholder="Field title" className="form-control" />
                </Col>
                <Col lg={12} sm={12} className="mb-3">
                  <Label>Field Label</Label>
                  <select className="form-control">
                    <option value="1">Select Field Lable</option>
                  </select>
                </Col>
              </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
          <Button type="submit" className="btn btn-brand-theme">Submit</Button>
          <Button className="btn btn-light">Cancel</Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default AddListFieldTable;
