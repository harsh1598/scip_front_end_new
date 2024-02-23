import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Row,
  Col,
  Input,
} from "reactstrap";

const AddEdit = ({ show, onCloseClick }) => {

  const { register, handleSubmit, watch, formState: { errors }, } = useForm()

  const onSubmit = (data) => {
    // console.log(data)
  }

  // console.log(watch("name"))
  //  console.log(errors)

  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-md">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Add Entrepreneur
      </OffcanvasHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">  First Name <span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control" placeholder="Enter First name" {...register("name", { required: true , maxLength: 20 })} /> 
                  {errors.name && errors.name.type === "required" && (
                    <span className="text-danger ms-1">This is required</span>
                  )}
                  {errors.name && errors.name.type === "maxLength" && (
                    <span className="text-danger ms-1">Max length exceeded</span>
                  )}
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">  Last Name <span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control" placeholder=" Last Name" {...register("surname", { required: true })} />  {errors.surname && <span className="text-danger ms-1">This field is required</span>}
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">Email ID <span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control" placeholder="Enter Email ID" {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/ })} /> 
                  {errors.email && errors.email.type === "required" && (
                    <span className="text-danger ms-1">This is required</span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className="text-danger ms-1">Invalid email</span>
                  )}
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Phone Number <span className='text-danger'>*</span></Label>
                <input type="number" id="customername-field" className="form-control" placeholder="0123456789" {...register("number", { required: true , maxLength: 10})} />
                {errors.number && errors.number.type === "required" && (
                  <span className="text-danger ms-1">This is required</span>
                )}
                {errors.number && errors.number.type === "maxLength" && (
                  <span className="text-danger ms-1">Invalid Number</span>
                )}
              </div>
            </Col>
            <Col lg={12}>
              <div className="mt-3">
                <div className="form-check">
                    <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                    <Label className="form-check-label" htmlFor="">I certify that I am eligible to be an <Link to="#">Angel Investor</Link> and understand that investment opportunities facilitated by White Whale Advisors LLP may be illiquid and high risk in nature. * </Label>
                </div>
              </div>
              <div className="mt-3">
                <div className="form-check">
                    <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                    <Label className="form-check-label" htmlFor="">I accept/agree with the <Link to="#">Terms and Conditions </Link>("Membership Terms & Conditions") *  </Label>
                </div>
              </div>
            </Col>
          </Row>
        </OffcanvasBody>
        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
          <button type="submit" className="btn btn-brand-theme" >
            Submit
          </button>
          <button className="btn btn-light" onClick={onCloseClick}>
            Cancel
          </button>
        </div>
      </form>
    </Offcanvas>
  );
};

export default AddEdit;
