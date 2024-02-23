import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Col,
  Form,
  Label,
  Button,
} from "reactstrap";

import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const SingleOptions = [
  { value: "AI", label: "AI" },
  { value: "AR/VR", label: "AR/VR" },
  { value: "Blockchain", label: "Blockchain" },
  { value: "Analytics", label: "Analytics" },
];

const CommentTestURL = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);
  const [selectedMulti, setselectedMulti] = useState(null);
  const togglePopup = useCallback(() => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [isShow]);

  useEffect(() => {
    setIsShow(false);
  }, [modelName == "CreateSchedule"]);

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Comment on Test URL
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Col lg={12} className="mb-3">
                <Label className="form-check-label">
                Write Your Comment
                  <span className="error">*</span>
                </Label>
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Hello from CKEditor 5!</p>"
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                />
              </Col>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Send
            </button>
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default CommentTestURL;
