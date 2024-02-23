import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Button,
  Card,
  CardHeader,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Label,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import PlusIcon from "../../../assets/images/plus.svg";
import dragIcon from "../../../assets/drag-icon.png";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import HelperService from "../../../utility/HelperService";

import { useForm } from "react-hook-form";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import AddFieldTableModal from "./AddFieldTable";
import AddListFieldTableModal from "./AddListFieldTable";


import Flatpickr from "react-flatpickr";

const AddLayout = () => {
  const [col3, setcol3] = useState(true);
  const t_col3 = () => {
    setcol3(!col3);
  };

  const [activeTab, setActiveTab] = useState("1");
  const [activityTab, setActivityTab] = useState("1");

  const toggleTab = (tab: any) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const toggleActivityTab = (tab: any) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  const [formData, setFormData] = useState<any>();
  const [editindex, setEditIndex] = useState<any>(null);
  const [selectedColRow, setSelectedColRow] = useState<any>("1");
  const [loading, setLoading] = useState<any>(false);
  const [showLoader, setShowLoader] = useState<any>(false);
  const [isShowAddFieldTable, setIsShowAddFieldTable] = useState(false);
  const [isShowAddListFieldTable, setIsShowAddListFieldTable] = useState(false);

  const onEdit = (index: any) => {
    setEditIndex(index);
    setIsShowAddFieldTable(true);
  };
  const onListEdit = (index: any) => {
    setEditIndex(index);
    setIsShowAddListFieldTable(true);
  };

  const onDelete = (index: any) => {
    formData.form_fields.splice(index, 1);
    setFormData({ ...formData });
  };
  const onListDelete = (index: any) => {
    formData.list_fields.splice(index, 1);
    setFormData({ ...formData });
  };

  const onDragEnd = (result: any) => {
    var Finalobj: any = {};
    Finalobj = formData;
    if (!result.destination) return;
    const items = Array.from(Finalobj.form_fields);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    formData.form_fields = items;
    setFormData({ ...formData });
  };

  const onDragListEnd = (result: any) => {
    var Finalobj: any = {};
    Finalobj = formData;
    if (!result.destination) return;
    const items = Array.from(Finalobj.list_fields);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    formData.list_fields = items;
    setFormData({ ...formData });
  };

  const getFontSize = (size: any) => {
    if (size) {
      return size + "px";
    } else {
      return "";
    }
  };
  const getColor = (color: any) => {
    if (color) {
      return color;
    } else {
      return "";
    }
  };

  const [selectedFiles, setselectedFiles] = useState([]);
  const [files, setFiles] = useState([]);

  // function handleAcceptedFiles(files: any) {
  //   files.map(file => Object.assign(file, {
  //       preview: URL.createObjectURL(file),
  //       formattedSize: formatBytes(file.size),
  //     })
  //   );
  //   setselectedFiles(files);
  //   }

  /**
   * Formats the size
   */
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Add Field Table Modal
  const [isShowAddFieldTableModal, setIsShowAddFieldTableModal] = useState(false);
  const closeAddFieldTableModal = () => {
    setIsShowAddFieldTableModal(false);
  };

  // Add List Field Table Modal
  const [isShowAddListFieldTableModal, setIsShowAddListFieldTableModal] = useState(false);
  const closeAddListFieldTableModal = () => {
    setIsShowAddListFieldTableModal(false);
  };

  const onCloseModal = () => {
    reset();
    setIsShowAddFieldTableModal(false);
    setIsShowAddListFieldTableModal(false);
  };
  
  return (
    <div className="page-content">
      <React.Fragment>

      <AddFieldTableModal
        show={isShowAddFieldTableModal}
        onCloseClick={onCloseModal}
      />

      <AddListFieldTableModal
        show={isShowAddListFieldTableModal}
        onCloseClick={onCloseModal}
      />
        <Container fluid>
          <form className="d-flex flex-column justify-content-end">
            <Row className="h-100">
              <Col lg={3}>
                <Card id="leadsList">
                  <CardHeader className="border-0">
                    <h5>Form Layout</h5>
                    <Col lg={12}>
                      <div className="mb-2">
                        <Label htmlFor="name-field" className="form-label">
                          Column in row
                        </Label>
                        <select className="form-control">
                          <option value="1">Select Coloumn in row</option>
                          <option value="2">1</option>
                          <option value="3">2</option>
                          <option value="4">3</option>
                        </select>
                      </div>
                    </Col>
                    {/* company summary */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Company Summary
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#" onClick={() => {
                                    setIsShowAddFieldTableModal(true);
                                  }}>
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Website */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Website
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Video */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Video
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Teams */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Team
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Infomation */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Information
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Documents */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Documents
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Financial Details */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Financial Details
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Company Details */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Company Details
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Add field */}
                    <Col
                      lg={12}
                      className="justify-center Add-field-dynamic-new mt-3 cursor-pointer"
                      onClick={() => setIsShowAddFieldTable(true)}
                    >
                      <img src={PlusIcon} alt="" /> &nbsp;
                      <span className="text-center">
                        Add a field to this form
                      </span>
                    </Col>
                  </CardHeader>
                </Card>
              </Col>
              <Col lg={6}>
                <Card id="leadsList">
                  <CardHeader className="border-0">
                    <h5>Edit Form Layout</h5>
                  </CardHeader>
                  {/* company summary */}
                  <Row className="px-4">
                    <Col lg={12} className="justify-center formlayout-box mb-3">
                      <Col lg={12} className="mt-3">
                        <Label
                          htmlFor="name-field"
                          className="form-label justify-center"
                        >
                          Company Summary
                        </Label>
                        <textarea
                          name=""
                          id=""
                          className="form-control"
                          rows={4}
                          placeholder="Enter summary"
                        ></textarea>
                      </Col>
                    </Col>
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                      <Button
                        type="submit"
                        id="form-layout-submit-btn"
                        color="primary"
                        className="btn-brand-theme cursor-pointer"
                      >
                        Submit
                      </Button>
                      <button
                        type="button"
                        className="btn btn-light cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </Row>
                  {/* Website */}
                  <Row className="px-4">
                    <Col lg={12} className="justify-center formlayout-box mb-3">
                      <Col lg={12} className="mt-3">
                        <Label
                          htmlFor="name-field"
                          className="form-label justify-center"
                        >
                          Website URL
                        </Label>
                        <input
                          type="text"
                          name=""
                          value=""
                          placeholder="Enter website url"
                          className="form-control"
                        />
                      </Col>
                    </Col>
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                      <Button
                        type="submit"
                        id="form-layout-submit-btn"
                        color="primary"
                        className="btn-brand-theme cursor-pointer"
                      >
                        Submit
                      </Button>
                      <button
                        type="button"
                        className="btn btn-light cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </Row>
                  {/* Video */}
                  <Row className="px-4">
                    <Col lg={12} className="justify-center formlayout-box mb-3">
                      <Col lg={12} className="mt-3">
                        <Label
                          htmlFor="name-field"
                          className="form-label justify-center"
                        >
                          Video / Image
                        </Label>
                        <FilePond
                          files={files}
                          //onupdatefiles={setFiles}
                          allowMultiple={true}
                          maxFiles={3}
                          name="files"
                          className="filepond filepond-input-multiple"
                        />
                      </Col>
                    </Col>
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                      <Button
                        type="submit"
                        id="form-layout-submit-btn"
                        color="primary"
                        className="btn-brand-theme cursor-pointer"
                      >
                        Submit
                      </Button>
                      <button
                        type="button"
                        className="btn btn-light cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </Row>
                  {/* Teams */}
                  <Row className="px-4">
                    <Col lg={12} className="formlayout-box mb-3">
                      <Row>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Name
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter user name"
                          />
                        </Col>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Founder
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter founder name"
                          />
                        </Col>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Description
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter description"
                          />
                        </Col>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Linkedin URL
                          </Label>
                          <input
                            type="url"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter linkedin URL"
                          />
                        </Col>
                      </Row>
                    </Col>
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                      <Button
                        type="submit"
                        id="form-layout-submit-btn"
                        color="primary"
                        className="btn-brand-theme cursor-pointer"
                      >
                        Submit
                      </Button>
                      <button
                        type="button"
                        className="btn btn-light cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </Row>
                  {/* Informations */}
                  <Row className="px-4">
                    <Col lg={12} className="formlayout-box mb-3">
                      <Row>
                        <Col lg={12} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Title
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter title"
                          />
                        </Col>
                        <Col lg={12} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Description
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter description"
                          />
                        </Col>
                      </Row>
                    </Col>
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                      <Button
                        type="submit"
                        id="form-layout-submit-btn"
                        color="primary"
                        className="btn-brand-theme cursor-pointer"
                      >
                        Submit
                      </Button>
                      <button
                        type="button"
                        className="btn btn-light cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </Row>
                  {/* Documents */}
                  <Row className="px-4">coming soon</Row>
                  {/* Informations */}
                  <Row className="px-4">
                    <Col lg={12} className="formlayout-box mb-3">
                      <Row>
                        <Col lg={12} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Financial Value (INR)
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </Col>
                        <Col lg={12} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Financial Description
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter financial description"
                          />
                        </Col>
                      </Row>
                    </Col>
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                      <Button
                        type="submit"
                        id="form-layout-submit-btn"
                        color="primary"
                        className="btn-brand-theme cursor-pointer"
                      >
                        Submit
                      </Button>
                      <button
                        type="button"
                        className="btn btn-light cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </Row>
                  {/* Company Details */}
                  <Row className="px-4">
                    <Col lg={12} className="formlayout-box mb-3">
                      <Row>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Registered Name
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </Col>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Registered Office
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </Col>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Operational
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </Col>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Headquarters
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </Col>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Founded Date
                          </Label>
                          <Flatpickr
                            className="form-control text-center fs-14"
                            options={{
                              dateFormat: "Y-m-d",
                              defaultDate: ["2022-01-20"],
                            }}
                          />
                        </Col>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Social Media Tag
                          </Label>
                          <input
                            type="url"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter urls"
                          />
                        </Col>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            Company Structure
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </Col>
                        <Col lg={6} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            No of Employee
                          </Label>
                          <input
                            type="text"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </Col>
                        <Col lg={12} className="mt-3">
                          <Label
                            htmlFor="name-field"
                            className="form-label justify-center"
                          >
                            PR Announcement
                          </Label>
                          <input
                            type="link"
                            name=""
                            value=""
                            className="form-control"
                            placeholder="Enter link"
                          />
                        </Col>
                      </Row>
                    </Col>
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                      <Button
                        type="submit"
                        id="form-layout-submit-btn"
                        color="primary"
                        className="btn-brand-theme cursor-pointer"
                      >
                        Submit
                      </Button>
                      <button
                        type="button"
                        className="btn btn-light cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </Row>
                </Card>
              </Col>
              <Col lg={3}>
                <Card id="leadsList">
                  <CardHeader className="border-0">
                    <h5>List Layout</h5>
                    {/* Company URL */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Company Summary
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#" onClick={() => {
                                    setIsShowAddListFieldTableModal(true);
                                  }}>
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Website */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Website
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Video */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Video
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Team */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Team
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Information */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Information
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Documents */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Documents
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Financial Details */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Financial Details
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Company Details */}
                    <div className="call-group justify-center box">
                      <Col md={9} className="my-auto">
                        <Label
                          htmlFor="name-field"
                          className="form-label my-auto"
                        >
                          Company Details
                        </Label>
                      </Col>
                      <Col md={3}>
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-edit-box-line align-middle me-1"></i>
                                  Edit
                                </Link>
                              </DropdownItem>
                              <DropdownItem>
                                <Link to="#" className="text-body">
                                  <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  Delete
                                </Link>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                        <span>
                          <img src={dragIcon} />
                        </span>
                      </Col>
                    </div>
                    {/* Add field */}
                    <Col
                      lg={12}
                      className="justify-center Add-field-dynamic-new mt-3 cursor-pointer"
                      onClick={() => setIsShowAddFieldTable(true)}
                    >
                      <img src={PlusIcon} alt="" /> &nbsp;
                      <span className="text-center">
                        Add a field to this form
                      </span>
                    </Col>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </form>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default AddLayout;
