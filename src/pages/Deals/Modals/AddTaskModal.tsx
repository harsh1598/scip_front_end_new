import React, { useState, useCallback, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Select from "react-select";
import Flatpickr from "react-flatpickr";

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

interface propData {
  show: boolean;
  onCloseClick: any;
}

const AddTask = (props: propData) => {
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
        Add Task
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <Form>
              <Row>
                <Col lg={12} md={12} className="mb-3">
                  <label>
                    Milestone
                    <span className="error">*</span>
                  </label>
                  <select className="form-control">
                    <option value="1">Select Milestone</option>
                    <option value="2">Post Investment monitoring</option>
                    <option value="3">Terms of Investment</option>
                    <option value="4">Investment</option>
                    <option value="5">Screening</option>
                  </select>
                </Col>
                <Col lg={12} md={12} className="mb-3">
                  <label>Task</label>
                  <select className="form-control">
                    <option value="1">Select Task</option>
                    <option value="2">Task One</option>
                    <option value="3">Task Two</option>
                  </select>
                </Col>
                <Col lg={12} md={12} className="mb-3">
                  <label>
                    Task Title <span className="error">*</span>
                  </label>
                  <Input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Enter title"
                  />
                </Col>
                <Col lg={12} md={12} className="mb-3">
                  <label>
                    Priority
                    <span className="error">*</span>
                  </label>
                  <select className="form-control">
                    <option value="1">Select Priority</option>
                    <option value="2">High</option>
                    <option value="3">Medium</option>
                    <option value="3">Low</option>
                  </select>
                </Col>
                <Col lg={12} md={12} className="mb-3">
                  <label>Due Date</label>
                  <Flatpickr placeholder="Select date"
                          className="form-control fs-14"
                          options={{
                            dateFormat: "Y-m-d",
                            //defaultDate: ["2022-01-20"],
                          }}
                        />
                </Col>
                <Col lg={12} md={12} className="mb-3">
                  <label>
                    Assigned To
                    <span className="error">*</span>
                  </label>
                  <select className="form-control">
                    <option value="1">Select</option>
                    <option value="2">Assigned To Users</option>
                    <option value="3">Assigned To Guest</option>
                  </select>
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

export default AddTask;
