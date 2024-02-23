import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Button,
  Form,
} from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditPageModal = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);
  
useEffect(() => {
    setIsShow(false);
  }, [modelName == "CreateSchedule"]);

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        &nbsp;
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="p-0 overflow-hidden">
          <div className="px-4 mt-3">
            
            <Form method="post">
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                
              }}
              onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
              }}
            />
          </Form>
            
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button type="button" className="btn btn-brand-theme">
              Save
            </Button>
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
        
      </form>
    </Offcanvas>
  );
};

export default EditPageModal;
