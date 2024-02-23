import React, { useEffect, useRef, useState } from "react";
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
import PlusIcon from "../../assets/images/plus.svg";
import WebService from "../../utility/WebService";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import HelperService from "../../utility/HelperService";
import { Controller, useForm } from "react-hook-form";
import CustomDatePicker from "../../Components/CustomDatePicker/CustomDatePicker";
import toast from "react-hot-toast";
import Loader from "../../Components/Loader/Loader";
import AddFieldTable from "./AddFieldTable";
import AddListFieldTable from "./AddListFieldTable";
import MultiSelect from "../../Components/MultiSelect/MultiSelect";
import dragIcon from "../../assets/drag-icon.png";
import CustomDropdown from "../../Components/Select/CustomDropdown";
import { Display } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { changeSidebarVisibility, screenType } from "../../store/actions";
import TextEditor from "../../Components/TextEditor/TextEditor";
const AddLayout = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const watchAllFields = watch();
  const [formData, setFormData] = useState<any>();
  const [date, setDate] = useState(null);
  const [datetime, setDateTime] = useState(null);
  const [editindex, setEditIndex] = useState<any>(null);
  const [selectedColRow, setSelectedColRow] = useState<any>("1");
  const [loading, setLoading] = useState<any>(false);
  const [showLoader, setShowLoader] = useState<any>(false);
  const [isShowAddFieldTable, setIsShowAddFieldTable] = useState(false);
  const [isShowAddListFieldTable, setIsShowAddListFieldTable] = useState(false);
  const [col, setCol] = useState<any>(null);
  const [row, setRow] = useState<any>(null);
  const [documentName, setDocumentName] = useState<any>();
  const [image, setImage] = useState<any>(null);
  let { uuid } = useParams();
  const formDetails = useRef<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    var div = document.getElementById("topnav-hamburger-icon");
    if (div) {
      div.click();
    }

    getDetail();
  }, []);

  const onSave = (data: any) => {
    var obj: any = {};
    obj = formData;
    obj.page_title = data.page_title;
    obj.success_message = data.success_message;
    obj.col_in_row = selectedColRow;
    setLoading(true);
    WebService.putAPI({
      action: `/edit-form-layout`,
      body: obj,
      id: "form-layout-submit-btn",
    })
      .then((res: any) => {
        toast.success(res.message);
        goBack();
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const getDetail = () => {
    setShowLoader(true);
    WebService.getAPI({
      action: `/form-layout-details/${uuid}`,
    })
      .then((res: any) => {
        reset(res?.result);
        formDetails.current = res.result;
        setFormData(res?.result);
        if (res?.result?.col_in_row == "1") {
          setCol(12);
          setRow(6);
          setSelectedColRow("1");
        } else if (res?.result?.col_in_row == "2") {
          setCol(6);
          setRow(12);
          setSelectedColRow("2");
        } else if (res?.result?.col_in_row == "3") {
          setCol(4);
          setRow(12);
          setSelectedColRow("3");
        } else {
          setCol(12);
          setRow(6);
          setSelectedColRow("1");
        }

        setShowLoader(false);
      })
      .catch((e) => {
        setShowLoader(false);
      });
  };

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

  const updatePasswordType = (index: any) => {
    for (var i in formData.form_fields) {
      if (i == index) {
        if (formData.form_fields[i].input_type) {
          if (formData.form_fields[i].input_type == "text") {
            formData.form_fields[i].input_type = "password";
          } else if (formData.form_fields[i].input_type == "password") {
            formData.form_fields[i].input_type = "text";
          }
        } else {
          formData.form_fields[i].input_type = "text";
        }
      }
    }
    setFormData({ ...formData });
  };
  const onListDelete = (index: any) => {
    formData.list_fields.splice(index, 1);
    setFormData({ ...formData });
  };

  const goBack = () => {
    var div = document.getElementById("topnav-hamburger-icon");
    if (div) {
      div.click();
    }
    window.history.back();
  };

  const closeAddFieldTable = () => {
    setEditIndex(null);
    setIsShowAddFieldTable(false);
  };
  const closeAddListFieldTable = () => {
    setEditIndex(null);
    setIsShowAddListFieldTable(false);
  };
  const updatedData = (data: any) => {
    setFormData({ ...data });
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
  const onLoadImage = (e: any) => {
    const { files } = e.target;
    if (files && files[0]) {
      setDocumentName(files[0].name);
      // setValue("logo", files[0].name);
      setImage(files[0]);
    }
    e.target.value = "";
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

  return (
    <>
      {isShowAddFieldTable && (
        <AddFieldTable
          isShow={isShowAddFieldTable}
          title="Contacts"
          isClose={closeAddFieldTable}
          data={formDetails.current}
          updatedData={updatedData}
          onEdit={editindex}
        />
      )}
      {isShowAddListFieldTable && (
        <AddListFieldTable
          isShow={isShowAddListFieldTable}
          title="Contacts"
          isClose={closeAddListFieldTable}
          data={formDetails.current}
          updatedData={updatedData}
          onEdit={editindex}
        />
      )}
      {showLoader ? (
        <Loader show={showLoader} />
      ) : (
        <div className="page-content">
          <React.Fragment>
            <Container fluid>
              <form
                onSubmit={handleSubmit(onSave)}
                className="d-flex flex-column justify-content-end">
                <Row>
                  <Col lg={3}>
                    <Card id="leadsList">
                      <CardHeader className="border-0">
                        <h5>FORM LAYOUT</h5>
                        <Col lg={12}>
                          <div className="mb-2">
                            <Label htmlFor="name-field" className="form-label">
                              Column in row
                            </Label>
                            <Controller
                              control={control}
                              name="col_in_row"
                              render={({ field }) => (
                                <CustomDropdown
                                  options={[
                                    { id: "1", value: "1" },
                                    { id: "2", value: "2" },
                                    { id: "3", value: "3" },
                                  ]}
                                  selected={selectedColRow}
                                  isSearchable={true}
                                  placeholder={"Coloumn in row"}
                                  onChange={(data: any) => {
                                    setSelectedColRow(data.id);
                                    if (data.id == 1) {
                                      setCol(12);
                                      setRow(6);
                                    } else if (data.id == 2) {
                                      setCol(6);
                                      setRow(12);
                                    } else if (data.id == 3) {
                                      setCol(4);
                                      setRow(12);
                                    }
                                  }}
                                />
                              )}
                            />
                          </div>
                        </Col>
                        <div>
                          <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="cards1">
                              {(provided: any) => (
                                <div
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}>
                                  {formData &&
                                    formData?.form_fields?.length > 0 &&
                                    formData.form_fields.map(
                                      (res: any, index: any) => {
                                        return (
                                          <Draggable
                                            key={"draggableId_" + index}
                                            draggableId={"draggableId_" + index}
                                            index={index}>
                                            {(provided: any) => (
                                              <div
                                                className="call-group justify-center box"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                <Col lg={8}>
                                                  <Label
                                                    htmlFor="name-field"
                                                    className="form-label">
                                                    {HelperService.getTitleCase(
                                                      res.title
                                                    )}{" "}
                                                  </Label>
                                                </Col>
                                                <Col lg={4}>
                                                  <li className="list-inline-item">
                                                    <UncontrolledDropdown>
                                                      <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                                                        <i className="ri-more-fill align-middle"></i>
                                                      </DropdownToggle>
                                                      <DropdownMenu className="dropdown-menu-end">
                                                        <DropdownItem>
                                                          <a
                                                            className="text-body"
                                                            onClick={() =>
                                                              onEdit(index)
                                                            }>
                                                            <i className="ri-edit-box-line align-middle me-1"></i>
                                                            Edit
                                                          </a>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                          <a
                                                            className="text-body"
                                                            onClick={() =>
                                                              onDelete(index)
                                                            }>
                                                            <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                                            Delete
                                                          </a>
                                                        </DropdownItem>
                                                      </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                  </li>
                                                  <span>
                                                    <img src={dragIcon} />
                                                  </span>
                                                </Col>
                                              </div>
                                            )}
                                          </Draggable>
                                        );
                                      }
                                    )}
                                </div>
                              )}
                            </Droppable>
                          </DragDropContext>

                          <Col
                            lg={12}
                            className="justify-center mt-5 Add-field-dynamic-new mt-5 cursor-pointer"
                            onClick={() => setIsShowAddFieldTable(true)}>
                            <img src={PlusIcon} alt="" /> &nbsp;
                            <span className="text-center">
                              Add a field to this form
                            </span>
                          </Col>
                        </div>
                      </CardHeader>
                    </Card>
                  </Col>
                  <Col lg={6}>
                    <Card id="leadsList">
                      <CardHeader className="border-0">
                        <h5>{uuid ? "Edit Form Layout" : "Add Form Layout"}</h5>
                        <Row>
                          <Col
                            lg={12}
                            className="mt-3 justify-center formlayout-box ">
                            <Col lg={6} className="mt-3">
                              <Label
                                htmlFor="name-field"
                                className="form-label justify-center">
                                Form Title
                              </Label>
                              <input
                                type="text"
                                className="form-control text-center"
                                placeholder="Page Title"
                                {...register("page_title")}
                              />
                            </Col>
                          </Col>
                          {/* <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="cards">
                              {(provided: any) => (
                                <ul
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}>
                                 
                                </ul>
                              )}
                            </Droppable>
                          </DragDropContext> */}
                          <Row className="">
                            {formData &&
                              formData?.form_fields?.length > 0 &&
                              formData.form_fields.map(
                                (res: any, index: any) => {
                                  return (
                                    <Col lg={col}>
                                      <div className="call-group justify-center">
                                        {/* <Row> */}
                                        {res.control_type == "INPUT" &&
                                          res.validation_type == "URL" && (
                                            <Col lg={row}>
                                              <div className="mt-2">
                                                <Label
                                                  htmlFor="name-field"
                                                  className="form-label"
                                                  style={{
                                                    fontSize: getFontSize(
                                                      res.font_size
                                                    ),
                                                    color: getColor(
                                                      res.font_color
                                                    ),
                                                  }}>
                                                  {HelperService.getTitleCase(
                                                    res.title
                                                  )}
                                                  {res.is_requried == "Y" && (
                                                    <span className="text-danger">
                                                      *
                                                    </span>
                                                  )}
                                                </Label>
                                                {res.help_text && (
                                                  <a
                                                    title={res.help_text}
                                                    className="mt-1">
                                                    <i className="ri ri-question-fill "></i>
                                                  </a>
                                                )}
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder={res.placeholder}
                                                  {...register(res.db_column, {
                                                    pattern:
                                                      /^((http|https):\/\/.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,15}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/g,
                                                  })}
                                                />
                                              </div>
                                              <div>
                                                {errors[`${res.db_column}`] &&
                                                  !watchAllFields[
                                                    `${res.db_column}`
                                                  ] && (
                                                    <span className="text-danger fs-12">
                                                      {" "}
                                                      Please Enter{" "}
                                                      {HelperService.getTitleCase(
                                                        res.title
                                                      )}
                                                      .
                                                    </span>
                                                  )}
                                                {watchAllFields[
                                                  `${res.db_column}`
                                                ] &&
                                                !HelperService.isValidurlPatternValidation(
                                                  watchAllFields[
                                                    `${res.db_column}`
                                                  ]
                                                ) ? (
                                                  <span className="text-danger fs-12">
                                                    Please Enter Valid Url.
                                                  </span>
                                                ) : (
                                                  ""
                                                )}
                                              </div>
                                            </Col>
                                          )}
                                        {res.control_type == "INPUT" &&
                                          res.validation_type == "EMAIL" && (
                                            <Col lg={row}>
                                              <div className="mt-2">
                                                <Label
                                                  htmlFor="name-field"
                                                  className="form-label"
                                                  style={{
                                                    fontSize: getFontSize(
                                                      res.font_size
                                                    ),
                                                    color: getColor(
                                                      res.font_color
                                                    ),
                                                  }}>
                                                  {HelperService.getTitleCase(
                                                    res.title
                                                  )}
                                                  {res.is_requried == "Y" && (
                                                    <span className="text-danger">
                                                      *
                                                    </span>
                                                  )}
                                                </Label>
                                                {res.help_text && (
                                                  <a
                                                    title={res.help_text}
                                                    className="mt-1">
                                                    <i className="ri ri-question-fill "></i>
                                                  </a>
                                                )}
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder={res.placeholder}
                                                  {...register(res.db_column, {
                                                    pattern:
                                                      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                                                  })}
                                                />
                                              </div>
                                              <div>
                                                {errors[`${res.db_column}`] &&
                                                  !watchAllFields[
                                                    `${res.db_column}`
                                                  ] && (
                                                    <span className="text-danger fs-12">
                                                      {" "}
                                                      Please Enter{" "}
                                                      {HelperService.getTitleCase(
                                                        res.title
                                                      )}
                                                      .
                                                    </span>
                                                  )}
                                                {watchAllFields[
                                                  `${res.db_column}`
                                                ] &&
                                                !HelperService.isValidEmail(
                                                  watchAllFields[
                                                    `${res.db_column}`
                                                  ]
                                                ) ? (
                                                  <span className="text-danger fs-12">
                                                    Please Enter Valid Email
                                                    Address.
                                                  </span>
                                                ) : (
                                                  ""
                                                )}
                                              </div>
                                            </Col>
                                          )}
                                        {res.control_type == "INPUT" &&
                                          !res.validation_type && (
                                            <Col lg={row}>
                                              <div className="mt-2">
                                                <Label
                                                  htmlFor="name-field"
                                                  className="form-label"
                                                  style={{
                                                    fontSize: getFontSize(
                                                      res.font_size
                                                    ),
                                                    color: getColor(
                                                      res.font_color
                                                    ),
                                                  }}>
                                                  {HelperService.getTitleCase(
                                                    res.title
                                                  )}
                                                  {res.is_requried == "Y" && (
                                                    <span className="text-danger">
                                                      *
                                                    </span>
                                                  )}
                                                </Label>
                                                {res.help_text && (
                                                  <a
                                                    title={res.help_text}
                                                    className="mt-1">
                                                    <i className="ri ri-question-fill "></i>
                                                  </a>
                                                )}
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder={res.placeholder}
                                                  {...register(
                                                    res.db_column,
                                                    {}
                                                  )}
                                                  onKeyPress={(e) =>
                                                    HelperService.allowMaxValue(
                                                      e,
                                                      res.max
                                                    )
                                                  }
                                                />
                                              </div>
                                              <div>
                                                {errors[res.db_column] && (
                                                  <span className="text-danger fs-12">
                                                    {" "}
                                                    Please Enter{" "}
                                                    {HelperService.getTitleCase(
                                                      res.title
                                                    )}
                                                    .
                                                  </span>
                                                )}
                                              </div>
                                            </Col>
                                          )}
                                        {res.control_type == "SLIDER" && (
                                          <Col lg={row}>
                                            <div className="mt-2">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label">
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}{" "}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                                <span className="description italic">
                                                  (Max:{res.max} | Min:{res.min}
                                                  )
                                                </span>
                                              </Label>
                                              {res.help_text && (
                                                <a
                                                  title={res.help_text}
                                                  className="mt-1">
                                                  <i className="ri ri-question-fill "></i>
                                                </a>
                                              )}
                                              <input
                                                type="range"
                                                className="form-control-new"
                                                placeholder={res.placeholder}
                                                max={res.max}
                                                min={res.min}
                                                step={res.interval}
                                                {...register(res.db_column, {
                                                  required:
                                                    res.is_requried == "Y"
                                                      ? true
                                                      : false,
                                                })}
                                              />
                                              Value:{" "}
                                              {
                                                watchAllFields[
                                                  `${res.db_column}`
                                                ]
                                              }
                                            </div>
                                            <div>
                                              {errors[res.db_column] && (
                                                <span className="text-danger fs-12">
                                                  {" "}
                                                  Please Enter{" "}
                                                  {HelperService.getTitleCase(
                                                    res.title
                                                  )}
                                                  .
                                                </span>
                                              )}
                                            </div>
                                          </Col>
                                        )}
                                        {res.control_type == "NUMERIC" && (
                                          <Col lg={row}>
                                            <div className="mt-2">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label"
                                                style={{
                                                  fontSize: getFontSize(
                                                    res.font_size
                                                  ),
                                                  color: getColor(
                                                    res.font_color
                                                  ),
                                                }}>
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}{" "}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                                {res.help_text && (
                                                  <a
                                                    title={res.help_text}
                                                    className="mt-1">
                                                    <i className="ri ri-question-fill "></i>
                                                  </a>
                                                )}
                                              </Label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder={res.placeholder}
                                                onKeyPress={(e) =>
                                                  HelperService.allowOnlyNumericValue(
                                                    e,
                                                    res.max
                                                  )
                                                }
                                              />
                                            </div>
                                          </Col>
                                        )}
                                        {res.control_type == "DOUBLE" && (
                                          <Col lg={row}>
                                            <div className="mt-2">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label"
                                                style={{
                                                  fontSize: getFontSize(
                                                    res.font_size
                                                  ),
                                                  color: getColor(
                                                    res.font_color
                                                  ),
                                                }}>
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}{" "}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                                {res.help_text && (
                                                  <a
                                                    title={res.help_text}
                                                    className="mt-1">
                                                    <i className="ri ri-question-fill "></i>
                                                  </a>
                                                )}
                                              </Label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder={res.placeholder}
                                                onKeyPress={(e) =>
                                                  HelperService.allowDecimalValue(
                                                    e
                                                  )
                                                }
                                              />
                                            </div>
                                          </Col>
                                        )}
                                        {res.control_type == "TEXT" && (
                                          <Col lg={row}>
                                            <div className="mt-2">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label"
                                                style={{
                                                  fontSize: getFontSize(
                                                    res.font_size
                                                  ),
                                                  color: getColor(
                                                    res.font_color
                                                  ),
                                                }}>
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}{" "}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                                {res.help_text && (
                                                  <a
                                                    title={res.help_text}
                                                    className="mt-1">
                                                    <i className="ri ri-question-fill "></i>
                                                  </a>
                                                )}
                                              </Label>
                                              <textarea
                                                className="form-control"
                                                placeholder={res.placeholder}
                                              />
                                            </div>
                                          </Col>
                                        )}
                                        {res.control_type == "CHECKBOX" && (
                                          <Col lg={row}>
                                            <div className="mt-5">
                                              <input type="checkbox" value="" />
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label p-2">
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}{" "}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                                {res.help_text && (
                                                  <a
                                                    title={res.help_text}
                                                    className="mt-1">
                                                    <i className="ri ri-question-fill "></i>
                                                  </a>
                                                )}
                                              </Label>
                                            </div>
                                          </Col>
                                        )}
                                        {res.control_type == "DATE" && (
                                          <Col lg={row}>
                                            <div className="mt-2">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label">
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}{" "}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                                {res.help_text && (
                                                  <a
                                                    title={res.help_text}
                                                    className="mt-1">
                                                    <i className="ri ri-question-fill "></i>
                                                  </a>
                                                )}
                                              </Label>
                                              <Controller
                                                control={control}
                                                name="date"
                                                render={({ field }) => (
                                                  <CustomDatePicker
                                                    format={res.display_format}
                                                    placeholderText={
                                                      res.placeholder
                                                    }
                                                    selected={date}
                                                    onChange={(data: any) => {
                                                      field.onChange(data);
                                                    }}
                                                  />
                                                )}
                                              />
                                            </div>
                                          </Col>
                                        )}
                                        {res.control_type == "DATETIME" && (
                                          <Col lg={row}>
                                            <div className="mt-2">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label">
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}{" "}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                                {res.help_text && (
                                                  <a
                                                    title={res.help_text}
                                                    className="mt-1">
                                                    <i className="ri ri-question-fill "></i>
                                                  </a>
                                                )}
                                              </Label>
                                              <Controller
                                                control={control}
                                                name="datetime"
                                                render={({ field }) => (
                                                  <CustomDatePicker
                                                    type="DATETIME"
                                                    format={res.display_format}
                                                    timeformat={
                                                      res.display_time_format
                                                    }
                                                    placeholderText={
                                                      res.placeholder
                                                    }
                                                    selected={datetime}
                                                    onChange={(data: any) => {
                                                      field.onChange(data);
                                                    }}
                                                  />
                                                )}
                                              />
                                            </div>
                                          </Col>
                                        )}
                                        {res.control_type == "SELECT" && (
                                          <Col lg={row}>
                                            <div className="mb-2">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label">
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}{" "}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                                {res.help_text && (
                                                  <a
                                                    title={res.help_text}
                                                    className="mt-1">
                                                    <i className="ri ri-question-fill "></i>
                                                  </a>
                                                )}
                                              </Label>
                                              <Controller
                                                control={control}
                                                name="msg_company_id"
                                                render={({ field }) => (
                                                  <CustomDropdown
                                                    options={
                                                      res.options
                                                        ? JSON.parse(
                                                            res.options
                                                          )
                                                        : []
                                                    }
                                                    selected={[]}
                                                    isSearchable={true}
                                                    placeholder={
                                                      res.placeholder
                                                    }
                                                    onChange={(data: any) => {}}
                                                  />
                                                )}
                                              />
                                            </div>
                                          </Col>
                                        )}
                                        {res.control_type == "MULTISELECT" && (
                                          <Col lg={row}>
                                            <div className="mb-2">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label">
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}{" "}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                                {res.help_text && (
                                                  <a
                                                    title={res.help_text}
                                                    className="mt-1">
                                                    <i className="ri ri-question-fill "></i>
                                                  </a>
                                                )}
                                              </Label>
                                              <Controller
                                                control={control}
                                                name="columns"
                                                render={({ field }) => (
                                                  <MultiSelect
                                                    selectLimit={
                                                      res.options
                                                        ? JSON.parse(
                                                            res.options
                                                          ).length
                                                        : []
                                                    }
                                                    options={
                                                      res.options
                                                        ? JSON.parse(
                                                            res.options
                                                          )
                                                        : []
                                                    }
                                                    selected={[]}
                                                    placeholder={
                                                      res.placeholder
                                                    }
                                                    onChange={(data: any) => {}}
                                                  />
                                                )}
                                              />
                                            </div>
                                          </Col>
                                        )}
                                        {res.control_type == "COLOR_PICKER" && (
                                          <Col lg={row}>
                                            <div className="mt-2">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label"
                                                style={{
                                                  fontSize: getFontSize(
                                                    res.font_size
                                                  ),
                                                  color: getColor(
                                                    res.font_color
                                                  ),
                                                }}>
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                              </Label>
                                              {res.help_text && (
                                                <a
                                                  title={res.help_text}
                                                  className="mt-1">
                                                  <i className="ri ri-question-fill "></i>
                                                </a>
                                              )}
                                              <input
                                                type="color"
                                                className="form-control"
                                                placeholder={res.placeholder}
                                                {...register(res.db_column, {})}
                                                onKeyPress={(e) =>
                                                  HelperService.allowMaxValue(
                                                    e,
                                                    res.max
                                                  )
                                                }
                                              />
                                            </div>
                                            <div>
                                              {errors[res.db_column] && (
                                                <span className="text-danger fs-12">
                                                  {" "}
                                                  Please Enter{" "}
                                                  {HelperService.getTitleCase(
                                                    res.title
                                                  )}
                                                  .
                                                </span>
                                              )}
                                            </div>
                                          </Col>
                                        )}
                                        {res.control_type == "DOCUMENT" && (
                                          <Col lg={row}>
                                            <div className="mt-2">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label"
                                                style={{
                                                  fontSize: getFontSize(
                                                    res.font_size
                                                  ),
                                                  color: getColor(
                                                    res.font_color
                                                  ),
                                                }}>
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                              </Label>
                                              {res.help_text && (
                                                <a
                                                  title={res.help_text}
                                                  className="mt-1">
                                                  <i className="ri ri-question-fill "></i>
                                                </a>
                                              )}
                                              <div className="d-flex align-items-center form-control">
                                                <div className="attachment-btn ">
                                                  <input
                                                    id="upload_device"
                                                    type="file"
                                                    className="input"
                                                    onChange={(e: any) => {
                                                      onLoadImage(e);
                                                    }}
                                                  />
                                                  <i className="ri ri-attachment-line icon" />
                                                </div>
                                                {documentName ? (
                                                  documentName
                                                ) : (
                                                  <span className=" text-black-50 ms-1">
                                                    {res.placeholder}
                                                  </span>
                                                )}
                                              </div>
                                            </div>
                                            <div>
                                              {errors[res.db_column] && (
                                                <span className="text-danger fs-12">
                                                  {" "}
                                                  Please Enter{" "}
                                                  {HelperService.getTitleCase(
                                                    res.title
                                                  )}
                                                  .
                                                </span>
                                              )}
                                            </div>
                                          </Col>
                                        )}
                                        {res.control_type == "PASSWORD" && (
                                          <Col lg={row}>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label"
                                                style={{
                                                  fontSize: getFontSize(
                                                    res.font_size
                                                  ),
                                                  color: getColor(
                                                    res.font_color
                                                  ),
                                                }}>
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                              </Label>
                                              {res.help_text && (
                                                <a
                                                  title={res.help_text}
                                                  className="mt-1">
                                                  <i className="ri ri-question-fill "></i>
                                                </a>
                                              )}
                                              <input
                                                type={
                                                  res.input_type
                                                    ? res.input_type
                                                    : "password"
                                                }
                                                className="form-control"
                                                placeholder={res.placeholder}
                                                {...register(res.db_column, {})}
                                                onKeyPress={(e) =>
                                                  HelperService.allowMaxValue(
                                                    e,
                                                    res.max
                                                  )
                                                }
                                              />
                                              <button
                                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                                type="button"
                                                style={{ marginTop: "31px" }}
                                                onClick={() =>
                                                  updatePasswordType(index)
                                                }
                                                id="password-addon">
                                                {" "}
                                                <i className="ri-eye-fill align-middle"></i>{" "}
                                              </button>
                                            </div>
                                            <div>
                                              {errors[res.db_column] && (
                                                <span className="text-danger fs-12">
                                                  {" "}
                                                  Please Enter{" "}
                                                  {HelperService.getTitleCase(
                                                    res.title
                                                  )}
                                                  .
                                                </span>
                                              )}
                                            </div>
                                          </Col>
                                        )}
                                             {res.control_type == "TEXT_EDITOR" && (
                                          <Col lg={row}>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                              <Label
                                                htmlFor="name-field"
                                                className="form-label"
                                                style={{
                                                  fontSize: getFontSize(
                                                    res.font_size
                                                  ),
                                                  color: getColor(
                                                    res.font_color
                                                  ),
                                                }}>
                                                {HelperService.getTitleCase(
                                                  res.title
                                                )}
                                                {res.is_requried == "Y" && (
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                )}
                                              </Label>
                                              {res.help_text && (
                                                <a
                                                  title={res.help_text}
                                                  className="mt-1">
                                                  <i className="ri ri-question-fill "></i>
                                                </a>
                                              )}
                                              {/* <input
                                                type={
                                                  res.input_type
                                                    ? res.input_type
                                                    : "password"
                                                }
                                                className="form-control"
                                                placeholder={res.placeholder}
                                                {...register(res.db_column, {})}
                                                onKeyPress={(e) =>
                                                  HelperService.allowMaxValue(
                                                    e,
                                                    res.max
                                                  )
                                                }
                                              /> */}
                                              <Controller
                                                control={control}
                                                name={res.db_column}
                                                render={({ field }) => (
                                                  <TextEditor
                                                    data={""}
                                                    editedData={""}
                                                    type={"NORMAL"}
                                                  />
                                                )}
                                              />
                                            </div>
                                            <div>
                                              {errors[res.db_column] && (
                                                <span className="text-danger fs-12">
                                                  {" "}
                                                  Please Enter{" "}
                                                  {HelperService.getTitleCase(
                                                    res.title
                                                  )}
                                                  .
                                                </span>
                                              )}
                                            </div>
                                          </Col>
                                        )}
                                      </div>
                                      {res.description && (
                                        <span
                                          style={{
                                            justifyContent: "center",
                                            display: "flex",
                                          }}
                                          className="description italic">
                                          Hint : {res.description}
                                        </span>
                                      )}
                                    </Col>
                                  );
                                }
                              )}
                          </Row>
                          {/* <Col lg={12} className="justify-center mt-5">
                            <div
                              className=" Add-field-dynamic mt-5 cursor-pointer"
                              onClick={() => setIsShowAddFieldTable(true)}>
                              <img src={PlusIcon} alt="" /> &nbsp;
                              <span className="text-center">
                                Add a field to this table
                              </span>
                            </div>
                          </Col> */}
                          <Col
                            lg={12}
                            className="justify-center formlayout-box mt-5">
                            <Col lg={6}>
                              <div>
                                <Label
                                  htmlFor="name-field"
                                  className="form-label justify-center">
                                  Show This Message
                                </Label>
                                <textarea
                                  className="form-control text-center"
                                  placeholder="Show This Message"
                                  {...register("success_message")}
                                />
                              </div>
                            </Col>
                          </Col>
                        </Row>
                      </CardHeader>
                      <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                        <Button
                          type="submit"
                          id="form-layout-submit-btn"
                          color="primary"
                          className="btn-brand-theme cursor-pointer">
                          Submit
                        </Button>
                        <button
                          type="button"
                          className="btn btn-light cursor-pointer"
                          onClick={() => {
                            goBack();
                          }}>
                          Cancel
                        </button>
                      </div>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card id="leadsList">
                      <CardHeader className="border-0">
                        <h5>List Layout</h5>
                        <div>
                          <DragDropContext onDragEnd={onDragListEnd}>
                            <Droppable droppableId="cards">
                              {(provided: any) => (
                                <div
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}>
                                  {formData &&
                                    formData?.list_fields?.length > 0 &&
                                    formData.list_fields.map(
                                      (res: any, index: any) => {
                                        return (
                                          <Draggable
                                            key={"draggablId_" + index}
                                            draggableId={"draggablId_" + index}
                                            index={index}>
                                            {(provided: any) => (
                                              <div
                                                className="call-group justify-center box"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                <Col lg={8}>
                                                  <Label
                                                    htmlFor="name-field"
                                                    className="form-label">
                                                    {HelperService.getTitleCase(
                                                      res.title
                                                    )}{" "}
                                                    {res.is_requried == "Y" && (
                                                      <span className="text-danger">
                                                        *
                                                      </span>
                                                    )}
                                                  </Label>
                                                </Col>
                                                <Col lg={4}>
                                                  <li className="list-inline-item">
                                                    <UncontrolledDropdown>
                                                      <DropdownToggle className="btn btn-soft-secondary btn-sm dropdown">
                                                        <i className="ri-more-fill align-middle"></i>
                                                      </DropdownToggle>
                                                      <DropdownMenu className="dropdown-menu-end">
                                                        <DropdownItem>
                                                          <a
                                                            className="text-body"
                                                            onClick={() =>
                                                              onListEdit(index)
                                                            }>
                                                            <i className="ri-edit-box-line align-middle me-1"></i>
                                                            Edit
                                                          </a>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                          <a
                                                            className="text-body"
                                                            onClick={() =>
                                                              onListDelete(
                                                                index
                                                              )
                                                            }>
                                                            <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                                            Delete
                                                          </a>
                                                        </DropdownItem>
                                                      </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                  </li>
                                                  <span>
                                                    <img src={dragIcon} />
                                                  </span>
                                                </Col>
                                              </div>
                                            )}
                                          </Draggable>
                                        );
                                      }
                                    )}
                                </div>
                              )}
                            </Droppable>
                          </DragDropContext>

                          <Col
                            lg={12}
                            className="justify-center mt-5 Add-field-dynamic-new mt-5 cursor-pointer"
                            onClick={() => setIsShowAddListFieldTable(true)}>
                            <img src={PlusIcon} alt="" /> &nbsp;
                            <span className="text-center">
                              Add a field to this list
                            </span>
                          </Col>
                        </div>
                      </CardHeader>
                    </Card>
                  </Col>
                </Row>
              </form>
            </Container>
            <div></div>
          </React.Fragment>
        </div>
      )}
    </>
  );
};

export default AddLayout;
