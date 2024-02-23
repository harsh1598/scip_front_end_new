import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Col,
  Button,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const AuthorizedSignatory = ({
  show,
  onCloseClick,
  modelName,
  toggleModel,
}) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
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
      className="size-xl"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Authorized Signatory  <Button className="btn btn-info waves-effect waves-light btn-brand-theme me-3" onClick={(e) =>
          toggleModel("AddSignatory")
        }><i className="ri-add-line align-bottom"></i> Add</Button>
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="overflow-hidden">
          <div className="px-4">
            <div className="table-card">
              <div className="table-responsive table-card">
                <table className="table align-middle table-nowrap table-striped-columns mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Document</th>
                      <th scope="col">Updated Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Smriti</td>
                      <td>smriti@yomail.com</td>
                      <td>8954745213</td>
                      <td>--</td>
                      <td>18/04/2022</td>
                      <td>
                        <ul className="list-inline hstack gap-2 mb-0">
                          <li className="list-inline-item">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn btn-soft-secondary btn-sm dropdown"
                               >
                                <i className="ri-more-fill align-middle"></i>
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem
                                  onClick={(e) =>
                                    toggleModel("")
                                  }
                                >
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </DropdownItem>
                                <DropdownItem
                                  onClick={(e) =>
                                    toggleModel("")
                                  }
                                >
                                  <i className="ri-delete-bin-line align-middle me-1"></i>
                                  Delete
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                    <td>Smriti</td>
                    <td>smriti@yomail.com</td>
                    <td>8954745213</td>
                    <td>--</td>
                    <td>18/04/2022</td>
                    <td>
                      <ul className="list-inline hstack gap-2 mb-0">
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn btn-soft-secondary btn-sm dropdown"
                             >
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem
                                onClick={(e) =>
                                  toggleModel("")
                                }
                              >
                                <i className="ri-edit-box-line align-middle me-1"></i>
                                Edit
                              </DropdownItem>
                              <DropdownItem
                                onClick={(e) =>
                                  toggleModel("")
                                }
                              >
                                <i className="ri-delete-bin-line align-middle me-1"></i>
                                Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Col lg={12}>
              <div className="hstack gap-2 justify-content-end">
                <Button type="button" className="btn btn-brand-theme">
                  Update
                </Button>
                <Link to="/profile" className="btn btn-soft-danger">
                  Cancel
                </Link>
              </div>
            </Col>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default AuthorizedSignatory;
