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
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-xl">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Add Entrepreneur
      </OffcanvasHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Your first name? <span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control"  {...register("name", { required: true , maxLength: 20 })} /> 
                  {errors.name && errors.name.type === "required" && (
                    <span className="text-danger ms-1">This is required</span>
                  )}
                  {errors.name && errors.name.type === "maxLength" && (
                    <span className="text-danger ms-1">Max length exceeded</span>
                  )}
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">  And your surname? <span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control"  {...register("surname", { required: true })} />  {errors.surname && <span className="text-danger ms-1">This field is required</span>}
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Your Designation? <span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control"  {...register("surname", { required: true })} />  {errors.surname && <span className="text-danger ms-1">This field is required</span>}
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">  Share the name of the organization <span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control"  {...register("surname", { required: true })} />  {errors.surname && <span className="text-danger ms-1">This field is required</span>}
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> The type of organization<span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control"  {...register("surname", { required: true })} />  {errors.surname && <span className="text-danger ms-1">This field is required</span>}
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Thanks. A brief description of your organisation  <span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control"  {...register("surname", { required: true })} />  {errors.surname && <span className="text-danger ms-1">This field is required</span>}
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Please share a Web link of your organisation <span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control"  {...register("surname", { required: true })} />  {errors.surname && <span className="text-danger ms-1">This field is required</span>}
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Thanks, share an email address that we can use to reach you.  <span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control"  {...register("surname", { required: true })} />  {errors.surname && <span className="text-danger ms-1">This field is required</span>}
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">You need to set a password to use your dashboard. Set your password.<span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control"  {...register("surname", { required: true })} />  {errors.surname && <span className="text-danger ms-1">This field is required</span>}
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">Please confirm your password.<span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control"  {...register("surname", { required: true })} />  {errors.surname && <span className="text-danger ms-1">This field is required</span>}
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
