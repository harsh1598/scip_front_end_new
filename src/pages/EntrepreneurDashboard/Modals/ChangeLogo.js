import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  Card,
  Button,
  Label,
} from "reactstrap";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ChangeLogo = ({ show, onCloseClick, modelName, toggleModel }) => {
const [isShow, setIsShow] = useState(false);

const [selectedFiles, setselectedFiles] = useState([]);
const [files, setFiles] = useState([]);

function handleAcceptedFiles(files) {
  files.map(file =>
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    })
  );
  setselectedFiles(files);
}

/**
 * Formats the size
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

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
      Change Logo
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="p-0 overflow-hidden">
        <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12}>
                <Label className="form-check-label mb-2">
                 Upload Photo
                </Label>
                <Dropzone
                onDrop={acceptedFiles => {
                  handleAcceptedFiles(acceptedFiles);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div className="dropzone dz-clickable">
                    <div
                      className="dz-message needsclick"
                      {...getRootProps()}
                    >
                      <div className="mb-3">
                        <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                      </div>
                      <h6>The maximum size per file is 50 MB.</h6>
                    </div>
                  </div>
                )}
              </Dropzone>
              <div className="list-unstyled mb-0" id="file-previews">
                {selectedFiles.map((f, i) => {
                  return (
                    <Card
                      className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                      key={i + "-file"}
                    >
                      <div className="p-2">
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              data-dz-thumbnail=""
                              height="80"
                              className="avatar-sm rounded bg-light"
                              alt={f.name}
                              src={f.preview}
                            />
                          </Col>
                          <Col>
                            <Link
                              to="#"
                              className="text-muted font-weight-bold"
                            >
                              {f.name}
                            </Link>
                            <p className="mb-0">
                              <strong>{f.formattedSize}</strong>
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  );
                })}
              </div>
                </Col>
              </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Submit
            </button>
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
        </OffcanvasBody>
        
      </form>
    </Offcanvas>
  );
};

export default ChangeLogo;
