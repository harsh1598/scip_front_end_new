import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Form,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
} from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SimpleBar from "simplebar-react";

//Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";

const Comments = ({ show, onCloseClick, modelName, toggleModel }) => {
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

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Moongoose Comment
      </OffcanvasHeader>
      <div className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <SimpleBar style={{ height: "460px" }}>
            <div className="d-flex">
              <div className="avatar-sm flex-shrink-0 me-3">
                <img
                  src={avatar1}
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="flex-grow-1">
                <h5 className="fs-14 mb-0">Smriti Misra</h5>
                <div className="fs-12 text-muted">SCIP</div>
                <div className="fs-12 text-muted">06/09/2023 01:50 PM</div>
              </div>
              <div className="flex-grow-1 text-end">
                <Link to="#">
                  <i className="ri-pencil-line fs-14 me-2"></i>
                </Link>
                <Link to="#">
                  <i className="ri-delete-bin-line fs-14"></i>
                  <div></div>
                </Link>
              </div>
            </div>
            <hr />
            <div className="d-flex">
              <div className="avatar-sm flex-shrink-0 me-3">
                <img
                  src={avatar1}
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="flex-grow-1">
                <h5 className="fs-14 mb-0">Smriti Misra</h5>
                <div className="fs-12 text-muted">SCIP</div>
                <div className="fs-12 text-muted">06/09/2023 01:50 PM</div>
              </div>
              <div className="flex-grow-1 text-end">
                <Link to="#">
                  <i className="ri-pencil-line fs-14 me-2"></i>
                </Link>
                <Link to="#">
                  <i className="ri-delete-bin-line fs-14"></i>
                  <div></div>
                </Link>
              </div>
            </div>
            <hr />
            <div className="d-flex">
              <div className="avatar-sm flex-shrink-0 me-3">
                <img
                  src={avatar1}
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="flex-grow-1">
                <h5 className="fs-14 mb-0">Smriti Misra</h5>
                <div className="fs-12 text-muted">SCIP</div>
                <div className="fs-12 text-muted">06/09/2023 01:50 PM</div>
              </div>
              <div className="flex-grow-1 text-end">
                <Link to="#">
                  <i className="ri-pencil-line fs-14 me-2"></i>
                </Link>
                <Link to="#">
                  <i className="ri-delete-bin-line fs-14"></i>
                  <div></div>
                </Link>
              </div>
            </div>
            <hr />
            <div className="d-flex">
              <div className="avatar-sm flex-shrink-0 me-3">
                <img
                  src={avatar1}
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="flex-grow-1">
                <h5 className="fs-14 mb-0">Smriti Misra</h5>
                <div className="fs-12 text-muted">SCIP</div>
                <div className="fs-12 text-muted">06/09/2023 01:50 PM</div>
              </div>
              <div className="flex-grow-1 text-end">
                <Link to="#">
                  <i className="ri-pencil-line fs-14 me-2"></i>
                </Link>
                <Link to="#">
                  <i className="ri-delete-bin-line fs-14"></i>
                  <div></div>
                </Link>
              </div>
            </div>
            <hr />
            <div className="d-flex">
              <div className="avatar-sm flex-shrink-0 me-3">
                <img
                  src={avatar1}
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="flex-grow-1">
                <h5 className="fs-14 mb-0">Smriti Misra</h5>
                <div className="fs-12 text-muted">SCIP</div>
                <div className="fs-12 text-muted">06/09/2023 01:50 PM</div>
              </div>
              <div className="flex-grow-1 text-end">
                <Link to="#">
                  <i className="ri-pencil-line fs-14 me-2"></i>
                </Link>
                <Link to="#">
                  <i className="ri-delete-bin-line fs-14"></i>
                  <div></div>
                </Link>
              </div>
            </div>
            <hr />
            <div className="d-flex">
              <div className="avatar-sm flex-shrink-0 me-3">
                <img
                  src={avatar1}
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="flex-grow-1">
                <h5 className="fs-14 mb-0">Smriti Misra</h5>
                <div className="fs-12 text-muted">SCIP</div>
                <div className="fs-12 text-muted">06/09/2023 01:50 PM</div>
              </div>
              <div className="flex-grow-1 text-end">
                <Link to="#">
                  <i className="ri-pencil-line fs-14 me-2"></i>
                </Link>
                <Link to="#">
                  <i className="ri-delete-bin-line fs-14"></i>
                  <div></div>
                </Link>
              </div>
            </div>
            <hr />
            <div className="d-flex">
              <div className="avatar-sm flex-shrink-0 me-3">
                <img
                  src={avatar1}
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="flex-grow-1">
                <h5 className="fs-14 mb-0">Smriti Misra</h5>
                <div className="fs-12 text-muted">SCIP</div>
                <div className="fs-12 text-muted">06/09/2023 01:50 PM</div>
              </div>
              <div className="flex-grow-1 text-end">
                <Link to="#">
                  <i className="ri-pencil-line fs-14 me-2"></i>
                </Link>
                <Link to="#">
                  <i className="ri-delete-bin-line fs-14"></i>
                  <div></div>
                </Link>
              </div>
            </div>
          </SimpleBar>
          <Form
            method="post"
            style={{
              position: "absolute",
              bottom: "100px",
              width: "90%",
              right: "auto",
              left: "auto",
            }}
          >
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                // console.log({ event, editor, data });
              }}
            />
          </Form>
        </OffcanvasBody>
        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
          <button
            type="submit"
            className="btn btn-brand-theme"
            onClick={onCloseClick}
          >
            <i className="ri-send-plane-fill fs-14"></i>
          </button>
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn btn-brand-theme"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ri-eye-line fs-14 align-bottom"></i>
            </DropdownToggle>
            <DropdownMenu>
              <li>
                <DropdownItem>
                  <div className="form-check mb-2">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck1"
                    />
                    <Label className="form-check-label" htmlFor="formCheck1">
                      Admin
                    </Label>
                  </div>
                </DropdownItem>
              </li>
              <li>
                <DropdownItem>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck2"
                      defaultChecked
                    />{" "}
                    <Label className="form-check-label" htmlFor="formCheck2">
                      Investor
                    </Label>
                  </div>
                </DropdownItem>
              </li>
              <li>
                <DropdownItem>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck3"
                    />{" "}
                     <Label className="form-check-label" htmlFor="formCheck3">
                      SME Advisor
                    </Label>
                  </div>
                </DropdownItem>
              </li>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </Offcanvas>
  );
};

export default Comments;
