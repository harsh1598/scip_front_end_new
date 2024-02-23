import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { tileBoxes5 } from "../../../common/data/index";
import NewFolder from "./Modals/NewFolder";
import FileUpload from "./Modals/FileUpload";
import SelectFileFolder from "./Modals/SelectFileFolder";
import RecentActivity from "./Modals/RecentActivity";
import Rename from "./Modals/Rename";
import DeleteDocument from "./Modals/DeleteDocument";

import {
  CardHeader,
  Card,
  Col,
  CardBody,
  Container,
  Row,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Dropzone from "react-dropzone";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const DocumentRepository = () => {
  document.title = "SCIP | Document Repository";

  // Default Accordion

  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");
  const toggleModel = (name: any) => {
    setModelName(name);
  };

  const [selectedFiles, setselectedFiles] = useState<any[]>([]);
  const [files, setFiles] = useState<any[]>([]);


  function handleAcceptedFiles(files: any) {
    files.map((file: any) =>
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
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    //return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <>
    <React.Fragment>
      <div className="mb-none profile-wrapper">
        <Row>
          <Col>
            <h3 className="text-white mb-4">Documents</h3>
          </Col>
        </Row>
      </div>
      <Container fluid>
        <Row>
          <Card className="p-2 mb-2">
            <CardHeader className="border-0 px-2">
              <Row className="g-0 align-items-center">
                <Col sm={3}>
                  <div className="search-box">
                    <Input
                      type="text"
                      className="form-control search"
                      placeholder="Search"
                    />
                    <i className="ri-search-line search-icon"></i>
                  </div>
                </Col>
                <div className="col-sm-auto ms-auto">
                  <div className="d-flex hstack gap-2 flex-wrap">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        to="#"
                        className="btn btn-brand-theme dropdown"
                        tag="button"
                      >
                        Documents
                          <i className="ri-arrow-down-s-fill align-bottom"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <Link className="dropdown-item" to="#" onClick={(e) => toggleModel("NewFolder")}>
                          <i className="ri-add-line align-bottom me-2"></i> New
                            Folder
                          </Link>
                        <Link className="dropdown-item" to="#" onClick={(e) => toggleModel("FileUpload")}>
                          <i className="ri-upload-2-line align-bottom me-2"></i>
                          Upload Folder
                          </Link>
                        <Link className="dropdown-item" to="#" onClick={(e) => toggleModel("SelectFileFolder")}>
                          <i className="ri-folder-shared-line align-bottom me-2"></i>
                          Move
                          </Link>
                        <Link className="dropdown-item" to="#" onClick={(e) => toggleModel("SelectFileFolder")}>
                          <i className="ri-delete-bin-line align-bottom me-2"></i>
                          Delete
                          </Link>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn btn-soft-info"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-grid-fill align-bottom"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <li>
                          <DropdownItem>
                            <Link to="#">
                              <i className="ri-sd-card-line align-bottom me-1"></i>
                              List
                              </Link>
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem>
                            <Link to="#">
                              <i className="ri-file-list-line align-bottom me-1"></i>
                              Style
                              </Link>
                          </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn btn-soft-info"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-sort-desc align-bottom"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <li>
                          <DropdownItem>
                            <Link to="#">
                              <i className="ri-sd-card-line align-bottom me-1"></i>
                              Name
                              </Link>
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem>
                            <Link to="#">
                              <i className="ri-file-list-line align-bottom me-1"></i>
                              Modified
                              </Link>
                          </DropdownItem>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <div className="btn btn-soft-info" onClick={(e) => toggleModel("RecentActivity")}>
                      <i className="ri-information-line align-bottom"></i>
                    </div>
                  </div>
                </div>
              </Row>

              {/* Cards section */}
              <Row className="mt-4">
                {(tileBoxes5 || []).map((item, key) => (
                  <Col xl={3} ms={6} key={key}>
                    <Card className={"card-height-100 " + item.class}>
                      <CardBody>
                        <UncontrolledDropdown className="float-end">
                          <DropdownToggle
                            tag="a"
                            className="text-reset dropdown-btn"
                          >
                            <span className="text-muted fs-18">
                              <i className="mdi mdi-dots-vertical"></i>
                            </span>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem onClick={(e) => toggleModel("Rename")}>
                              <i className="ri-edit-box-line align-bottom me-2"></i>
                              Edit
                          </DropdownItem>
                            <DropdownItem>
                              <i className="ri-download-2-line align-bottom me-2"></i>
                              Download
                          </DropdownItem>
                            <DropdownItem onClick={(e) => toggleModel("DeleteDocument")}>
                              <i className="ri-delete-bin-line align-bottom me-2"></i>
                              Delete
                          </DropdownItem>
                            <DropdownItem>
                              <i className="ri-folder-shared-line align-bottom me-2"></i>
                              Move
                          </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <div className="mb-4 pb-2">
                          <img src={item.img} alt="" className="avatar-sm" />
                        </div>
                        <Link to="#!">
                          <h6 className="fs-15 fw-semibold">
                            {item.title}
                          </h6>
                        </Link>
                        <p className="text-muted mb-0">
                          {item.dates}
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
              <hr />
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
                      <p className="px-3">Drop files here to upload (max 5 files) <br/> The maximum supported file size is 20 MB <br/> Acceptable file type : txt, png, jpe, jpeg, jpg, gif, svg, mp3, mp4, pdf, odt, ods, odp, doc, docx, xls , xlsx , csv , ppt , pptx</p>
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
            </CardHeader>
          </Card>
         </Row>
        </Container>
      <NewFolder
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "NewFolder" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <FileUpload
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "FileUpload" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <SelectFileFolder
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "SelectFileFolder" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <RecentActivity
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "RecentActivity" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <Rename
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Rename" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <DeleteDocument
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "DeleteDocument" ? true : false}
        onCloseClick={() => setModelName("")}
      />

    </React.Fragment>
    </>
  );
};

export default DocumentRepository;
