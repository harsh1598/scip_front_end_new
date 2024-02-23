import React, { useState } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
} from "reactstrap";

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface propData {
  show: boolean;
  onCloseClick: any;
};

const ProfileComment = (props: propData) => {
  return (
    <Offcanvas
      direction="end"
      isOpen={props.show}
      id="offcanvasExample"
      toggle={props.onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
        Profile Comment
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
         <Row>
          <Col lg={12}>
            {/* <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={(editor:any) => {
                    // You can store the "editor" and use when it is needed.

                }}
                onChange={(event:any, editor:any) => {
                    const data = editor.getData();
                    // console.log({ event, editor, data });
                }}
            /> */}
        
          </Col>
         </Row>
         
        </OffcanvasBody>
        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
        <button
            type="submit"
            className="btn btn-brand-theme  "
            onClick={props.onCloseClick}
          >
            Submit
          </button>
          <button
            className="btn btn-light  "
            onClick={props.onCloseClick}
          >
            Cancel
          </button>
         
        </div>
      </form>
    </Offcanvas>
  );
};

export default ProfileComment;
