
import { useForm } from "react-hook-form";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Row,
  Col,
} from "reactstrap";

interface propData {
  show: boolean;
  onCloseClick: any;
};

const AddEdit = (props: propData) => {

  const { register, handleSubmit, watch, formState: { errors }, } = useForm()

  const onSubmit = (data:any) => {
    // console.log(data)
  }

  // console.log(watch("name"))
  //  console.log(errors)

  return (
    <Offcanvas direction="end" isOpen={props.show} id="offcanvasExample" toggle={props.onCloseClick} className="size-md">
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
        Add Entrepreneur
      </OffcanvasHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Entrepreneur's first name? <span className='text-danger'>*</span></Label>
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
                <Label htmlFor="name-field" className="form-label"> Entrepreneur's surname? <span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control" placeholder="Enter Surname" {...register("surname", { required: true })} />  {errors.surname && <span className="text-danger ms-1">This field is required</span>}
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label"> Share Entrepreneur's email address.<span className='text-danger'>*</span></Label>
                <input type="text" id="customername-field" className="form-control" placeholder="Enter Email Address" {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/ })} /> 
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
                <Label htmlFor="name-field" className="form-label"> Entrepreneur's primary mobile number. <span className='text-danger'>*</span></Label>
                <input type="number" id="customername-field" className="form-control" placeholder="0123456789" {...register("number", { required: true , maxLength: 10})} />
                {errors.number && errors.number.type === "required" && (
                  <span className="text-danger ms-1">This is required</span>
                )}
                {errors.number && errors.number.type === "maxLength" && (
                  <span className="text-danger ms-1">Invalid Number</span>
                )}
              </div>
            </Col>
          </Row>
        </OffcanvasBody>
        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
          <button type="submit" className="btn btn-brand-theme" >
            Submit
          </button>
          <button className="btn btn-light" onClick={props.onCloseClick}>
            Cancel
          </button>
        </div>
      </form>
    </Offcanvas>
  );
};

export default AddEdit;
