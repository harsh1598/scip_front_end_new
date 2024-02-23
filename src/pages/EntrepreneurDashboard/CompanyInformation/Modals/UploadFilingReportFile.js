import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  Label,
  Button,
  Input,
} from "reactstrap";

const UploadFilingReportFile = ({
  show,
  onCloseClick,
  modelName,
  toggleModel,
}) => {
  const [isShow, setIsShow] = useState(false);
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

  const [selectedFiles, setselectedFiles] = useState([]);
  const [files, setFiles] = useState([]);

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Upload Filing Report File
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
              <Col lg={12}>
              <Label className="form-check-label">Report Title</Label>
               <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder=""
                    value="Test URL"
                  />
            </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Upload option</Label>
                  <select className="form-select mb-3">
                    <option value="1">Select option</option>
                    <option value="2">File</option>
                    <option value="3" selected="true">
                      URL
                    </option>
                  </select>
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Filing Report Url</Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder=""
                    value="https://www.youtube.com/"
                  />
                </Col>
              </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Save
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

export default UploadFilingReportFile;
