import React, { useState, useCallback, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Table,
} from "reactstrap";

import { useForm } from "react-hook-form";

// Images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";

interface propData {
  show: boolean;
  onCloseClick: any;
}

const ProfileModal = (props: propData) => {
const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onCloseModal = () => {
    reset();
    props.onCloseClick();
  };

  return (
    <Offcanvas
      isOpen={props.show}
      onHide={onCloseModal}
      toggle={props.onCloseClick}
      direction="end"
      className="border-bottom"
    >
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
        Profile
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <Row>
              <div className="text-center">
                <div className="avatar-lg mx-auto">
                  <img
                    src={avatar1}
                    alt="user-img"
                    className="img-thumbnail rounded-circle"
                  />
                </div>
                <h4 className="text-dark mb-1">Anna Adame</h4>
                <p className="text-dark-75">Owner & Founder</p>
              </div>

              {/*  <h5 className="card-title mb-3">Info</h5> */}
              <hr />
              <div className="table-responsive">
                <Table className="table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th className="ps-0 py-1" scope="row">
                        Full Name :
                      </th>
                      <td className="text-muted py-1">Anna Adame</td>
                    </tr>
                    <tr>
                      <th className="ps-0 py-1" scope="row">
                        Mobile :
                      </th>
                      <td className="text-muted py-1">+(1) 987 6543</td>
                    </tr>
                    <tr>
                      <th className="ps-0 py-1" scope="row">
                        E-mail :
                      </th>
                      <td className="text-muted py-1">daveadame@velzon.com</td>
                    </tr>
                    <tr>
                      <th className="ps-0 py-1" scope="row">
                        Location :
                      </th>
                      <td className="text-muted py-1">
                        California, United States
                      </td>
                    </tr>
                    <tr>
                      <th className="ps-0 py-1" scope="row">
                        Portfolio :
                      </th>
                      <td className="text-muted py-1">
                        <div className="d-flex flex-wrap gap-2">
                          <div>
                            <Link to="#" className="avatar-xs d-block">
                              <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                                <i className="ri-github-fill"></i>
                              </span>
                            </Link>
                          </div>
                          <div>
                            <Link to="#" className="avatar-xs d-block">
                              <span className="avatar-title rounded-circle fs-16 bg-primary">
                                <i className="ri-global-fill"></i>
                              </span>
                            </Link>
                          </div>
                          <div>
                            <Link to="#" className="avatar-xs d-block">
                              <span className="avatar-title rounded-circle fs-16 bg-success">
                                <i className="ri-dribbble-fill"></i>
                              </span>
                            </Link>
                          </div>
                          <div>
                            <Link to="#" className="avatar-xs d-block">
                              <span className="avatar-title rounded-circle fs-16 bg-danger">
                                <i className="ri-pinterest-fill"></i>
                              </span>
                            </Link>
                          </div>
                          <div>
                            <Link to="#" className="avatar-xs d-block">
                              <span className="avatar-title rounded-circle fs-16 bg-primary">
                                <i className="ri-linkedin-box-fill "></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
          </div>
        </OffcanvasBody>
        {/* <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div> */}
      </form>
    </Offcanvas>
  );
};

export default ProfileModal;
