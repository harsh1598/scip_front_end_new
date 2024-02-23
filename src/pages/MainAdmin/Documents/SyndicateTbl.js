import React, { useState } from "react";
import {
  Col,
  Row,
  Container,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Button,
  Label,
  Form,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const data = [
  {
    documentname: "Membership Agreement",
    updatedate: "13/07/2020",
  },
];

const SyndicateTbl = () => {
  const [isUploadFile, setIsUploadFile] = useState(false);
  const toggleUploadFile = () => {
    setIsUploadFile(!isUploadFile);
  };
  const {  quillRef } = useQuill();

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className="table-responsive table-card mt-2">
              <table className="table align-middle table-nowrap table-striped-columns mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Document Name</th>
                    <th scope="col">Update Date</th>
                    <th scope="col" style={{ width: "150px" }}>
                    Action
                  </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.length &&
                    data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.documentname}</td>
                          <td>{item.updatedate}</td>
                          <td className="social-icons">
                          <div className="btn-dots">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn btn-soft-secondary btn-sm"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                              <i className="ri-more-fill align-middle"></i>
                              </DropdownToggle>
                              <DropdownMenu>
                                <li>
                                  <DropdownItem className="px-2" onClick={toggleUploadFile}>
                                    <i className="ri-download-2-line align-bottom me-2"></i>
                                    Update New Content
                                  </DropdownItem>
                                </li>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                        </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Upload File */}
      <Offcanvas
        isOpen={isUploadFile}
        direction="end"
        toggle={toggleUploadFile}
        id="offcanvasUploadFile"
        className="border-bottom"
      >
        <OffcanvasHeader
          className="bg-light"
          toggle={toggleUploadFile}
          id="offcanvasRightLabel"
        >
          Upload File
        </OffcanvasHeader>
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Row>
              <Col lg={12}>
              <div className="mb-3">
              <Label htmlFor="formSizeDefault" className="form-label">
                    Membership Agreement
                  </Label>
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
              </Col>
            </Row>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Save
            </button>
            <Button toggle={toggleUploadFile} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </Offcanvas>
    </React.Fragment>
  );
};

export default SyndicateTbl;
