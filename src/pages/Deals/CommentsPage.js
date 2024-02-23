import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { ProjectName } from "../../Components/constants/layout";
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Row,
    Button,
    Input,
    DropdownToggle,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Form,
    Collapse,
} from "reactstrap";

import SimpleBar from "simplebar-react";

import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CommentsPage = () => {

    document.title = `${ProjectName} | Comments`;

    const [isComments, setIsComments] = useState(false);
    const toggleComments = () => {
        setIsComments(!isComments);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Comments" pageTitle="Comments" location={"location"} />
                    <div className="w-100">
                        <Row className="g-2">
                            <Col md={12}>
                                <Card className="mb-1">
                                    <CardHeader className="align-items-center card-header">
                                        <h4 className="card-title card-title mb-0 me-2">
                                            Comments
                                        </h4>
                                    </CardHeader>
                                    <CardBody>
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
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mb-1">
                                    <CardHeader className="align-items-center card-header">
                                        <h4 className="card-title card-title mb-0 me-2">
                                            All Comment
                                        </h4>
                                    </CardHeader>
                                    <CardBody className="px-0">
                                        <SimpleBar
                                            autoHide={false}
                                            style={{ maxHeight: "580px" }}
                                            className="px-3"
                                        >
                                            <div className="d-flex align-items-center py-2">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img
                                                        src={avatar3}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div>
                                                        <h5 className="fs-14 mb-1">Smriti Misra</h5>
                                                        <p className="fs-12 text-muted mb-0">
                                                            17/06/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="m-0" />
                                            <div className="d-flex align-items-center py-2">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img
                                                        src={avatar4}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div>
                                                        <h5 className="fs-14 mb-1">Ash King</h5>
                                                        <p className="fs-12 text-muted mb-0">
                                                            17/06/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="m-0" />
                                            <div className="d-flex align-items-center py-2">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img
                                                        src={avatar5}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div>
                                                        <h5 className="fs-14 mb-1">Shobanaa Anand</h5>
                                                        <p className="fs-12 text-muted mb-0">
                                                            17/06/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="m-0" />
                                            <div className="d-flex align-items-center py-2 ">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img
                                                        src={avatar6}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div>
                                                        <h5 className="fs-14 mb-1">Esther James</h5>
                                                        <p className="fs-12 text-muted mb-0">
                                                            17/06/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="m-0" />
                                            <div className="d-flex align-items-center py-2">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img
                                                        src={avatar3}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div>
                                                        <h5 className="fs-14 mb-1">Esther James</h5>
                                                        <p className="fs-12 text-muted mb-0">
                                                            17/06/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="m-0" />
                                            <div className="d-flex align-items-center py-2">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img
                                                        src={avatar4}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div>
                                                        <h5 className="fs-14 mb-1">Esther James</h5>
                                                        <p className="fs-12 text-muted mb-0">
                                                            17/06/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="m-0" />
                                            <div className="d-flex align-items-center py-2">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img
                                                        src={avatar5}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div>
                                                        <h5 className="fs-14 mb-1">Esther James</h5>
                                                        <p className="fs-12 text-muted mb-0">
                                                            17/06/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="m-0" />
                                            <div className="d-flex align-items-center py-2">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img
                                                        src={avatar6}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div>
                                                        <h5 className="fs-14 mb-1">Esther James</h5>
                                                        <p className="fs-12 text-muted mb-0">
                                                            17/06/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="m-0" />
                                            <div className="d-flex align-items-center py-2">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img
                                                        src={avatar6}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div>
                                                        <h5 className="fs-14 mb-1">Esther James</h5>
                                                        <p className="fs-12 text-muted mb-0">
                                                            17/06/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="m-0" />
                                            <div className="d-flex align-items-center py-2">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img
                                                        src={avatar6}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div>
                                                        <h5 className="fs-14 mb-1">Esther James</h5>
                                                        <p className="fs-12 text-muted mb-0">
                                                            17/06/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="m-0" />
                                            <div className="d-flex align-items-center py-2">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img
                                                        src={avatar6}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div>
                                                        <h5 className="fs-14 mb-1">Esther James</h5>
                                                        <p className="fs-12 text-muted mb-0">
                                                            17/06/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SimpleBar>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={8} className="social-icons">
                                <Card className="mb-1">
                                    <CardHeader className="align-items-center d-flex">
                                        <h4 className="card-title mb-0 me-2">Watcon</h4>
                                    </CardHeader>
                                    <CardBody className="px-0">
                                        <SimpleBar
                                            autoHide={false}
                                            style={{ maxHeight: "580px" }}
                                            className="px-3"
                                        >
                                            <div className="align-items-center">
                                                <p className="mb-0">
                                                    Quisque nec turpis at urna dictum luctus.
                                                    Suspendisse convallis dignissim eros at volutpat.
                                                    In egestas mattis dui. Aliquam mattis dictum
                                                    aliquet. Nulla sapien mauris, eleifend et sem ac,
                                                    commodo dapibus odio.
                                                </p>
                                                <Row className="mt-2 mb-2">
                                                    <Col md={6} className="text-start">
                                                        <span className="pe-2 text-muted">
                                                            <i className="ri-alarm-line fs-16 align-middle"></i>{" "}
                                                            25/07/2023
                                                        </span>
                                                        <span className=" text-muted">08:13 AM</span>
                                                    </Col>
                                                    <Col md={6} className="text-end">
                                                        <span className="pe-2"><a href="javascript:void(0);" onClick={toggleComments}>
                                                            <i className="ri-pencil-line fs-14"></i></a>
                                                        </span>
                                                        <span className="pe-4">
                                                            <a href="javascript:void(0);"><i className="ri-delete-bin-line fs-14"></i></a>
                                                        </span>

                                                        <UncontrolledDropdown
                                                            direction="start"
                                                            className="eye-place"
                                                        >
                                                            <DropdownToggle
                                                                tag="a"
                                                                id="dropdownMenuLink2"
                                                                role="button"
                                                            >
                                                                <i className="ri-eye-line fs-14"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck11"
                                                                        defaultChecked
                                                                    />
                                                                    &nbsp; Investor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck12"
                                                                    />
                                                                    &nbsp; SME Advisor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck13"
                                                                    />
                                                                    &nbsp; Admin
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </Col>
                                                </Row>
                                                <hr />
                                            </div>
                                            <div className="align-items-center">
                                                <p className="mb-0">
                                                    Quisque nec turpis at urna dictum luctus.
                                                    Suspendisse convallis dignissim eros at volutpat.
                                                    In egestas mattis dui. Aliquam mattis dictum
                                                    aliquet. Nulla sapien mauris, eleifend et sem ac,
                                                    commodo dapibus odio.
                                                </p>
                                                <Row className="mt-2 mb-2">
                                                    <Col md={6} className="text-start">
                                                        <span className="pe-2 text-muted">
                                                            <i className="ri-alarm-line fs-16 align-middle"></i>{" "}
                                                            25/07/2023
                                                        </span>
                                                        <span className=" text-muted">08:13 AM</span>
                                                    </Col>
                                                    <Col md={6} className="text-end">
                                                        <span className="pe-2"><a href="javascript:void(0);" onClick={toggleComments}>
                                                            <i className="ri-pencil-line fs-14"></i></a>
                                                        </span>
                                                        <span className="pe-4">
                                                            <a href="javascript:void(0);"><i className="ri-delete-bin-line fs-14"></i></a>
                                                        </span>
                                                        <UncontrolledDropdown
                                                            direction="start"
                                                            className="eye-place"
                                                        >
                                                            <DropdownToggle
                                                                tag="a"
                                                                id="dropdownMenuLink2"
                                                                role="button"
                                                            >
                                                                <i className="ri-eye-line fs-14"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck11"
                                                                        defaultChecked
                                                                    />
                                                                    &nbsp; Investor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck12"
                                                                    />
                                                                    &nbsp; SME Advisor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck13"
                                                                    />
                                                                    &nbsp; Admin
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </Col>
                                                </Row>
                                                <hr />
                                            </div>
                                            <div className="align-items-center">
                                                <p className="mb-0">
                                                    Quisque nec turpis at urna dictum luctus.
                                                    Suspendisse convallis dignissim eros at volutpat.
                                                    In egestas mattis dui. Aliquam mattis dictum
                                                    aliquet. Nulla sapien mauris, eleifend et sem ac,
                                                    commodo dapibus odio.
                                                </p>
                                                <Row className="mt-2 mb-2">
                                                    <Col md={6} className="text-start">
                                                        <span className="pe-2 text-muted">
                                                            <i className="ri-alarm-line fs-16 align-middle"></i>{" "}
                                                            25/07/2023
                                                        </span>
                                                        <span className=" text-muted">08:13 AM</span>
                                                    </Col>
                                                    <Col md={6} className="text-end">
                                                        <span className="pe-2"><a href="javascript:void(0);" onClick={toggleComments}>
                                                            <i className="ri-pencil-line fs-14"></i></a>
                                                        </span>
                                                        <span className="pe-4">
                                                            <a href="javascript:void(0);"><i className="ri-delete-bin-line fs-14"></i></a>
                                                        </span>
                                                        <UncontrolledDropdown
                                                            direction="start"
                                                            className="eye-place"
                                                        >
                                                            <DropdownToggle
                                                                tag="a"
                                                                id="dropdownMenuLink2"
                                                                role="button"
                                                            >
                                                                <i className="ri-eye-line fs-14"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck11"
                                                                        defaultChecked
                                                                    />
                                                                    &nbsp; Investor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck12"
                                                                    />
                                                                    &nbsp; SME Advisor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck13"
                                                                    />
                                                                    &nbsp; Admin
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </Col>
                                                </Row>
                                                <hr />
                                            </div>
                                            <div className="align-items-center">
                                                <p className="mb-0">
                                                    Quisque nec turpis at urna dictum luctus.
                                                    Suspendisse convallis dignissim eros at volutpat.
                                                    In egestas mattis dui. Aliquam mattis dictum
                                                    aliquet. Nulla sapien mauris, eleifend et sem ac,
                                                    commodo dapibus odio.
                                                </p>
                                                <Row className="mt-2 mb-2">
                                                    <Col md={6} className="text-start">
                                                        <span className="pe-2 text-muted">
                                                            <i className="ri-alarm-line fs-16 align-middle"></i>{" "}
                                                            25/07/2023
                                                        </span>
                                                        <span className=" text-muted">08:13 AM</span>
                                                    </Col>
                                                    <Col md={6} className="text-end">
                                                        <span className="pe-2" onClick={toggleComments}>
                                                            <i className="ri-pencil-line fs-14"></i>
                                                        </span>
                                                        <span className="pe-4">
                                                            <i className="ri-delete-bin-line fs-14"></i>
                                                        </span>
                                                        {/*<span className="pe-2"><i className="ri-eye-line fs-14"></i></span>*/}
                                                        <UncontrolledDropdown
                                                            direction="start"
                                                            className="eye-place"
                                                        >
                                                            <DropdownToggle
                                                                tag="a"
                                                                id="dropdownMenuLink2"
                                                                role="button"
                                                            >
                                                                <i className="ri-eye-line fs-14"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck11"
                                                                        defaultChecked
                                                                    />
                                                                    &nbsp; Investor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck12"
                                                                    />
                                                                    &nbsp; SME Advisor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck13"
                                                                    />
                                                                    &nbsp; Admin
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <hr />
                                            <div className="align-items-center">
                                                <p className="mb-0">
                                                    Quisque nec turpis at urna dictum luctus.
                                                    Suspendisse convallis dignissim eros at volutpat.
                                                    In egestas mattis dui. Aliquam mattis dictum
                                                    aliquet. Nulla sapien mauris, eleifend et sem ac,
                                                    commodo dapibus odio.
                                                </p>
                                                <Row className="mt-2 mb-2">
                                                    <Col md={6} className="text-start">
                                                        <span className="pe-2 text-muted">
                                                            <i className="ri-alarm-line fs-16 align-middle"></i>{" "}
                                                            25/07/2023
                                                        </span>
                                                        <span className=" text-muted">08:13 AM</span>
                                                    </Col>
                                                    <Col md={6} className="text-end">
                                                        <span className="pe-2"><a href="javascript:void(0);" onClick={toggleComments}>
                                                            <i className="ri-pencil-line fs-14"></i></a>
                                                        </span>
                                                        <span className="pe-4">
                                                            <a href="javascript:void(0);"><i className="ri-delete-bin-line fs-14"></i></a>
                                                        </span>
                                                        <UncontrolledDropdown
                                                            direction="start"
                                                            className="eye-place"
                                                        >
                                                            <DropdownToggle
                                                                tag="a"
                                                                id="dropdownMenuLink2"
                                                                role="button"
                                                            >
                                                                <i className="ri-eye-line fs-14"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck11"
                                                                        defaultChecked
                                                                    />
                                                                    &nbsp; Investor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck12"
                                                                    />
                                                                    &nbsp; SME Advisor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck13"
                                                                    />
                                                                    &nbsp; Admin
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <hr />
                                            <div className="align-items-center">
                                                <p className="mb-0">
                                                    Quisque nec turpis at urna dictum luctus.
                                                    Suspendisse convallis dignissim eros at volutpat.
                                                    In egestas mattis dui. Aliquam mattis dictum
                                                    aliquet. Nulla sapien mauris, eleifend et sem ac,
                                                    commodo dapibus odio.
                                                </p>
                                                <Row className="mt-2 mb-2">
                                                    <Col md={6} className="text-start">
                                                        <span className="pe-2 text-muted">
                                                            <i className="ri-alarm-line fs-16 align-middle"></i>{" "}
                                                            25/07/2023
                                                        </span>
                                                        <span className=" text-muted">08:13 AM</span>
                                                    </Col>
                                                    <Col md={6} className="text-end">
                                                        <span className="pe-2"><a href="javascript:void(0);" onClick={toggleComments}>
                                                            <i className="ri-pencil-line fs-14"></i></a>
                                                        </span>
                                                        <span className="pe-4">
                                                            <a href="javascript:void(0);"><i className="ri-delete-bin-line fs-14"></i></a>
                                                        </span>
                                                        <UncontrolledDropdown
                                                            direction="start"
                                                            className="eye-place"
                                                        >
                                                            <DropdownToggle
                                                                tag="a"
                                                                id="dropdownMenuLink2"
                                                                role="button"
                                                            >
                                                                <i className="ri-eye-line fs-14"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck11"
                                                                        defaultChecked
                                                                    />
                                                                    &nbsp; Investor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck12"
                                                                    />
                                                                    &nbsp; SME Advisor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck13"
                                                                    />
                                                                    &nbsp; Admin
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <hr />
                                            <div className="align-items-center">
                                                <p className="mb-0">
                                                    Quisque nec turpis at urna dictum luctus.
                                                    Suspendisse convallis dignissim eros at volutpat.
                                                    In egestas mattis dui. Aliquam mattis dictum
                                                    aliquet. Nulla sapien mauris, eleifend et sem ac,
                                                    commodo dapibus odio.
                                                </p>
                                                <Row className="mt-2 mb-2">
                                                    <Col md={6} className="text-start">
                                                        <span className="pe-2 text-muted">
                                                            <i className="ri-alarm-line fs-16 align-middle"></i>{" "}
                                                            25/07/2023
                                                        </span>
                                                        <span className=" text-muted">08:13 AM</span>
                                                    </Col>
                                                    <Col md={6} className="text-end">
                                                        <span className="pe-2"><a href="javascript:void(0);" onClick={toggleComments}>
                                                            <i className="ri-pencil-line fs-14"></i></a>
                                                        </span>
                                                        <span className="pe-4">
                                                            <a href="javascript:void(0);"><i className="ri-delete-bin-line fs-14"></i></a>
                                                        </span>
                                                        <UncontrolledDropdown
                                                            direction="start"
                                                            className="eye-place"
                                                        >
                                                            <DropdownToggle
                                                                tag="a"
                                                                id="dropdownMenuLink2"
                                                                role="button"
                                                            >
                                                                <i className="ri-eye-line fs-14"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck11"
                                                                        defaultChecked
                                                                    />
                                                                    &nbsp; Investor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck12"
                                                                    />
                                                                    &nbsp; SME Advisor
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="formCheck13"
                                                                    />
                                                                    &nbsp; Admin
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </SimpleBar>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default CommentsPage;
