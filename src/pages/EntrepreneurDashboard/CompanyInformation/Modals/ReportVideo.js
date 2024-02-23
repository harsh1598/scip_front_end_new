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
      Report Video
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
              <Col lg={12}>
              <div className="ratio ratio-16x9">
                                <iframe
                                    className="rounded"
                                    src="https://scipbucket.s3.ap-south-1.amazonaws.com/uploads/docx_video/3/VDO_10346585929_3_40171865.mp4"
                                    title="YouTube video"
                                    allowFullScreen
                                ></iframe>
                            </div>
            </Col>
            </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
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
