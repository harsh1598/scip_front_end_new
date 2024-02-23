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
  Card,
  Container,
  Input,
} from "reactstrap";

import { Link } from "react-router-dom";
import Select from "react-select";
import Dropzone from "react-dropzone";

// Import React FilePond
import { FilePond,  registerPlugin } from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FileUpload = ({ show, onCloseClick, modelName, toggleModel }) => {
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

    const [files, setFiles] = useState([]);
  const [selectedMulti, setselectedMulti] = useState(null);

  const [selectedFiles, setselectedFiles] = useState([]);
  function handleAcceptedFiles(files) {
    files.map((file) =>
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

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className=""
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        File Upload
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <Form>
              <Container fluid>
                <Row>
                  <Col lg={12} className="mt-4">
                  <Dropzone
                    onDrop={(acceptedFiles) => {
                      handleAcceptedFiles(acceptedFiles);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div className="dropzone dz-clickable">
                        <div
                          className="dz-message needsclick"
                          {...getRootProps() }
                        >
                          <div className="mb-3">
                            <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                          </div>
                          <p className="px-3">Drop files here to upload (max 5 files) <br />The maximum supported file size is 40 MB  <br /> Acceptable file type : pdf, odt, ods, odp, doc, docx, xls , xlsx , csv , ppt , pptx</p>
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

              </Container>
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

export default FileUpload;
