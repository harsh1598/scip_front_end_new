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

const AddEditInvestor = (props: propData) => {

  const { register, handleSubmit, watch, formState: { errors }, } = useForm()

  const onSubmit = (data: any) => {
  }

  return (
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

export default AddEditInvestor;
