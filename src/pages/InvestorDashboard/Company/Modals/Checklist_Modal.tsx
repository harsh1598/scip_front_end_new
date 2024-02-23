import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Button,
  
} from "reactstrap";

import { useForm } from "react-hook-form";

interface propData {
  show: boolean;
  onCloseClick: any;
}

const ChecklistModal= (props: propData) => {
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
      CheckList
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
          <Row className="mb-2">
                            <Col xxl={9}>
                               <label>Screening by TCA advisor</label>
                              </Col>
                              <Col xxl={3}>
                               <div className="flex-shrink-0 float-end">
                                        <div className="form-check form-switch form-switch-right form-switch-md">
                                            <label className="form-label text-muted"></label>
                                            <input className="form-check-input code-switcher" type="checkbox" id="default-modal" />
                                        </div>
                                        <Link to="#">
                                          <i className="ri-chat-2-line align-bottom ms-2 text-muted fs-20"></i>
                                        </Link>
                                    </div>
                              </Col>
                              <Col lg={12} sm={12} style={{ display: "none",}}>
                                <textarea name="" value="" placeholder="" className="form-control" rows={2}></textarea>
                                <button className="btn btn-primary mt-2" type="button" id="btnAddChecklist">Submit</button>
                              </Col>
                            </Row>
                            <Row className="mb-2">
                            <Col xxl={9}>
                               <label>Schedule Advisor's call with entrepreneur</label>
                              </Col>
                              <Col xxl={3}>
                               <div className="flex-shrink-0 float-end">
                                        <div className="form-check form-switch form-switch-right form-switch-md">
                                            <label className="form-label text-muted"></label>
                                            <input className="form-check-input code-switcher" type="checkbox" id="default-modal" />
                                        </div>
                                        <Link to="#">
                                          <i className="ri-chat-2-line align-bottom ms-2 text-muted fs-20"></i>
                                        </Link>
                                    </div>
                              </Col>
                              <Col lg={12} sm={12} style={{ display: "none",}}>
                                <textarea name="" value="" placeholder="" className="form-control" rows={2}></textarea>
                                <button className="btn btn-primary mt-2" type="button" id="btnAddChecklist">Submit</button>
                              </Col>
                            </Row>
                            <Row className="mb-2">
                            <Col xxl={9}>
                               <label>Checklist 1</label>
                              </Col>
                              <Col xxl={3}>
                               <div className="flex-shrink-0 float-end">
                                        <div className="form-check form-switch form-switch-right form-switch-md">
                                            <label className="form-label text-muted"></label>
                                            <input className="form-check-input code-switcher" type="checkbox" id="default-modal" />
                                        </div>
                                        <Link to="#">
                                          <i className="ri-chat-2-line align-bottom ms-2 text-muted fs-20"></i>
                                        </Link>
                                    </div>
                              </Col>
                              <Col lg={12} sm={12} style={{ display: "none",}}>
                                <textarea name="" value="" placeholder="" className="form-control" rows={2}></textarea>
                                <button className="btn btn-primary mt-2" type="button" id="btnAddChecklist">Submit</button>
                              </Col>
                            </Row>
                           
                            <Row>
                            <Col xxl={12}>
                              <Button type="button" name="" className="btn btn-brand-theme"><i className="ri-add-fill align-bottom me-2"></i>Add Checklist</Button>
                              </Col>
                              <Col lg={12} sm={12} style={{ display: "none",}}>
                                <textarea name="" value="" placeholder="" className="form-control" rows={2}></textarea>
                                <button className="btn btn-primary mt-2" type="button" id="btnAddChecklist">Submit</button>
                              </Col>
                            </Row>
          </div>
        </OffcanvasBody>
        {/* <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div> */}
      </form>
    </Offcanvas>
  );
};

export default ChecklistModal;
