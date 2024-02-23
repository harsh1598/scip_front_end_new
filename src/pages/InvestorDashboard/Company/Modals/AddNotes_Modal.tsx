import React, { useState, useCallback, useEffect } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Button } from "reactstrap";

import { useForm } from "react-hook-form";

interface propData {
  show: boolean;
  onCloseClick: any;
}

const AddNotesModal = (props: propData) => {
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
        Add Note
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <div className="mt-2">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea5"
                placeholder="Add notes here..."
                style={{ height: "100px",}}
              ></textarea>
              {/* <div className="hstack gap-2 justify-content-center mt-3">
                            <Link to="#" className="btn btn-success">Submit</Link>
                    </div> */}
            </div>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button type="submit" className="btn btn-brand-theme">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default AddNotesModal;
