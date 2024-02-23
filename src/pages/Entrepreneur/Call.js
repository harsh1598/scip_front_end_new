import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Offcanvas,
    OffcanvasBody,
} from "reactstrap";

import Img9 from "../../assets/images/small/img-9.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";

const Call = ({ show, onCloseClick }) => {

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            toggle={onCloseClick}
            //   className="size-sm"
            className="offcanvas-end border-0"
        >
            <OffcanvasBody className="offcanvas-body profile-offcanvas p-0">
                <div className="team-cover">
                    <img src={Img9} alt="" className="img-fluid" />
                </div>
                <div className="p-1 pb-4 pt-0">
                    <div className="team-settings">
                        <div className="row g-0">
                            <div className="col">
                                <div className="btn nav-btn">
                                    <Button
                                        onClick={onCloseClick}
                                        color=""
                                        className="btn-close btn-close-white"
                                    ></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3 text-center">

                    <img
                        src={avatar2}
                        alt=""
                        className="avatar-lg img-thumbnail rounded-circle mx-auto profile-img" />
                    <div className="mt-3">
                        <h5 className="fs-16 mb-1">
                            <Link to="#" className="text-brand username">
                                Posco
                            </Link>
                        </h5>
                        <p className="text-muted">
                            Posco
                        </p>
                    </div>
                </div>
                <div className="border-top border-top-dashed p-3">
                    <h5 className="fs-15 mb-3">Personal Details</h5>
                    <div className="mb-3">
                        <p className="text-muted text-uppercase fw-medium fs-12 mb-1">
                           <i className=" ri-phone-line fs-6 align-middle" /> Number
                            
                        </p>
                        <h6>+91 8956346432</h6>
                    </div>
                    <div className="mb-3">
                        <p className="text-muted text-uppercase fw-medium fs-12 mb-1">
                           <i className="  ri-whatsapp-line fs-6 align-middle" />Whatsapp Number
                            
                        </p>
                        <h6>+91 8956346432</h6>
                    </div>
                    <div className="mb-3">
                        <p className="text-muted text-uppercase fw-medium fs-12 mb-1">
                        <i className=" ri-mail-line fs-6 align-middle" /> Email
                        </p>
                        <h6>lisaparker@gmail.com</h6>
                    </div>
                </div>
            </OffcanvasBody>

        </Offcanvas>
    );
};

export default Call;
