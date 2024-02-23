import React from "react";
import { useForm } from "react-hook-form";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";
import SignupFormLayout from "../../Components/SignupFormLayout/SignupFormLayout";

interface propData {
  show: any;
  onCloseClick: any;
  type: any;
  encodedId: any;
}

const AddEditEntrepreneur = (props: propData) => {

  const { register, handleSubmit, watch, formState: { errors }, } = useForm()

  const onSubmit = (data: any) => {
    // console.log(data)
  }

  // console.log(watch("name"))
  //  console.log(errors)

  return (
    // <Offcanvas direction="end" isOpen={props.show} id="offcanvasExample" toggle={props.onCloseClick} className="size-xl">
    //   <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
    //     Add Entrepreneur
    //   </OffcanvasHeader>
    //   <div className="d-flex flex-column justify-content-end h-100">
    //     <OffcanvasBody>
    //     {/* <div className="harsh">
    //       <SignupFormLayout
    //         type={props.type}
    //         encodedId={props.encodedId}
    //       />
    //     </div> */}
    //     </OffcanvasBody>
    //     <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
    //       <button type="submit" className="btn btn-brand-theme" >
    //         Submit
    //       </button>
    //       <button className="btn btn-light" onClick={props.onCloseClick}>
    //         Cancel
    //       </button>
    //     </div>
    //   </div>
    // </Offcanvas>

    <Offcanvas
      direction="end"
      isOpen={props.show}
      id="offcanvasExample"
      toggle={props.onCloseClick}
      className="size-xl my-offcanvas-new">
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
        {/* {(props.formData && props.formData.question_id ? "Edit " : "Add ") +
          formName} */}
      </OffcanvasHeader>
      <OffcanvasBody className="my-offcanvas-body" style={{ width: '100%' }}>
        <SignupFormLayout
          type={props.type}
          encodedId={props.encodedId}
        />
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default AddEditEntrepreneur;
