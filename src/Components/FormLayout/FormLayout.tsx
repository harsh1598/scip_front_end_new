import { Button, Col, Label, Row } from "reactstrap";
import "./FormLayout.scss";
import React, { useState, useEffect, useRef } from "react";
import HelperService from "../../utility/HelperService";
import { Controller, useForm } from "react-hook-form";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import WebService from "../../utility/WebService";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import CustomDropdown from "../Select/CustomDropdown";
import MultiSelect from "../MultiSelect/MultiSelect";
import TextEditor from "../TextEditor/TextEditor";
import moment from "moment";
import "moment-timezone";

interface PropData {
  formSlug: string;
  addUrl: string;
  editUrl: string;
  formName?: any;
  detailObj?: any;
  id?: any;
  subId?: any;
  isClose: any;
  getlist?: any;
}

const FormLayout = (props: PropData) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const watchAllFields = watch();
  const [formData, setFormData] = useState<any>();
  const [date, setDate] = useState(null);
  const [col, setCol] = useState<any>(null);
  const [row, setRow] = useState<any>(null);
  const [formName, setFormName] = useState<any>();
  const [showLoader, setShowLoader] = useState<any>(false);
  const [showTimeZoneField, setShowTimeZoneField] = useState<any>(false);
  const [documentName, setDocumentName] = useState<any>();
  const [image, setImage] = useState<any>(null);
  const [imageFile, setImageFile] = useState<any>(null);
  const [timezoneSelected, setTimezoneSelected] = useState<any>(null);
  const [timezoneValue, setTimezoneValue] = useState<any>(null);
  const [timezone, setTimezone] = useState<any>([]);
  const showtimezone = useRef<any>();
  // const FormName: any = useSelector<RootState, addFormLayoutHeading>((state) => state.formLayoutHeading);
  console.log("props.formSlug", props.formSlug);
  useEffect(() => {
    if (props.detailObj) {
      reset(props.detailObj);
      if (props.detailObj && props?.detailObj?.timezoneformbuilderid) {
        setTimezoneSelected(props.detailObj.timezoneformbuilderid);
        getTimeZoneList(props.detailObj.timezoneformbuilderid);
      } else {
        getTimeZoneList();
      }
    } else {
      getTimeZoneList();
    }
    getDetail(props.detailObj);
  }, [props.detailObj, props.formSlug]);

  const getTimeZoneList = (timezoneformbuilderid?: any) => {
    WebService.getAPI({
      action: `/timezone-list`,
      body: null,
    })
      .then((res: any) => {
        var array: any = [];
        for (var i in res.list) {
          array.push({
            id: res.list[i].timezoneId,
            value: res.list[i].timezone,
          });
          if (timezoneformbuilderid) {
            if (timezoneformbuilderid == res.list[i].timezoneId) {
              showtimezone.current = res.list[i].timezone;
              setTimezoneValue(res.list[i].timezone);
            }
          }
        }
        setTimezone(array);
        setShowLoader(false);
        if (timezoneformbuilderid) {
          getDetail(props.detailObj);
        }
      })
      .catch((e) => { });
  };
  const getDetail = (details?: any) => {
    setShowLoader(true);
    WebService.getAPI({
      action: `/form-layout-slug-details/${props.formSlug}`,
    })
      .then((res: any) => {
        reset(res?.result?.formValues);
        props.formName(res?.result?.page_title);
        if (res?.result?.col_in_row == "1") {
          setCol(12);
          setRow(12);
        } else if (res?.result?.col_in_row == "2") {
          setCol(6);
          setRow(12);
        } else if (res?.result?.col_in_row == "3") {
          setCol(4);
          setRow(12);
        } else {
          setCol(12);
          setRow(12);
        }
        for (var i in res?.result?.form_fields) {
          if (
            props.id && res?.result?.form_fields[i].db_column == "user_work_type" && props.formSlug == 'tblusersadmin'
          ) {
            res?.result?.form_fields.splice(i, 1);
          }
          if (
            props.id && res?.result?.form_fields[i].db_column == "email" && props.formSlug == 'tblusersadmin'
          ) {
            res.result.form_fields[i].isDisable = true;
          }
          if (
            res?.result?.form_fields[i].control_type == "PASSWORD" && props.formSlug == 'tblusersadmin'
          ) {
            var index = Number(i) + Number(1);
            res.result.form_fields[i].title = 'Reset Password';
            res.result.form_fields[i].placeholder = 'Reset Password';
            var obj = {
              control_type: 'CONFIRM_PASSWORD',
              title: props.id ? 'Confirm Reset Password' : 'Confirm Password',
              type: res?.result?.form_fields[i].type,
              form_layout_id: res?.result?.form_fields[i].form_layout_id,
              db_column: res?.result?.form_fields[i].db_column + '_scip_confirm_password',
              is_requried: res?.result?.form_fields[i].is_requried,
              placeholder: props.id ? 'Confirm Reset ' + res?.result?.form_fields[i].title : 'Confirm ' + res?.result?.form_fields[i].title,
              max: res?.result?.form_fields[i].max,
              min: res?.result?.form_fields[i].min,
              validation_type: res?.result?.form_fields[i].validation_type,
              font_size: res?.result?.form_fields[i].font_size,
              font_family: res?.result?.form_fields[i].font_family,
              font_color: res?.result?.form_fields[i].font_color,
            };
            res?.result?.form_fields.splice(index, 0, obj);
          } else if (res?.result?.form_fields[i].control_type == "PASSWORD") {
            var index = Number(i) + Number(1);
            var obj = {
              control_type: 'CONFIRM_PASSWORD',
              title: 'Confirm Password',
              type: res?.result?.form_fields[i].type,
              form_layout_id: res?.result?.form_fields[i].form_layout_id,
              db_column: res?.result?.form_fields[i].db_column + '_scip_confirm_password',
              is_requried: res?.result?.form_fields[i].is_requried,
              placeholder: 'Confirm ' + res?.result?.form_fields[i].title,
              max: res?.result?.form_fields[i].max,
              min: res?.result?.form_fields[i].min,
              validation_type: res?.result?.form_fields[i].validation_type,
              font_size: res?.result?.form_fields[i].font_size,
              font_family: res?.result?.form_fields[i].font_family,
              font_color: res?.result?.form_fields[i].font_color,
            };
            res?.result?.form_fields.splice(index, 0, obj);
          }
        }
        for (var i in res?.result?.form_fields) {
          if (
            res?.result?.form_fields[i].control_type == "DATETIME" &&
            res?.result?.form_fields[i].is_timezone == true
          ) {
            setShowTimeZoneField(true);
          }
          if (res?.result?.form_fields[i].control_type == "SELECT") {
            res.result.form_fields[i].selected =
              details[`${res?.result?.form_fields[i].db_column}`];
          } else if (res?.result?.form_fields[i].control_type == "DOCUMENT") {
            res.result.form_fields[i].selected =
              details[`${res?.result?.form_fields[i].db_column}`];
          } else if (
            res?.result?.form_fields[i].control_type == "TEXT_EDITOR" &&
            details[`${res?.result?.form_fields[i].db_column}`]
          ) {
            res.result.form_fields[i][`${res?.result?.form_fields[i].db_column}`] =
              details[`${res?.result?.form_fields[i].db_column}`];
          } else if (
            res?.result?.form_fields[i].control_type == "DATETIME" &&
            details[`${res?.result?.form_fields[i].db_column}`]
          ) {
            var convert = details[`${res?.result?.form_fields[i].db_column}`];
            var convertTime = moment(convert, "YYYY-MM-DD HH:mm:ss")
              .utc()
              .local()
              .format("hh:mm a");
            var convertDate = moment(convert).format("YYYY-MM-DD");
            var finalDate = convertDate + " " + convertTime;
            res.result.form_fields[i].selected = finalDate;

            if (showtimezone.current) {
              var value = moment(finalDate)
                .format("DD-MM-YYYY hh:mm a");
              res.result.form_fields[i].converted =
                showtimezone.current + " | " + value;
            }
          } else if (
            res?.result?.form_fields[i].control_type == "DATE" &&
            details[`${res?.result?.form_fields[i].db_column}`]
          ) {
            res.result.form_fields[i].selected =
              details[`${res?.result?.form_fields[i].db_column}`];
          }
        }

        setFormData(res?.result);
        setShowLoader(false);
      })
      .catch((e) => {
        setShowLoader(false);
      });
  };
  console.log('formdata', formData);

  const onSave = (data: any) => {
    for (let key in data) {
      if (key.includes('_scip_confirm_password')) {
        delete data[key];
      }
    }
    let obj: any = {};
    obj = data;
    if (props.subId) {
      if (props.formSlug == "tblstage") {
        obj.workflowId = props.subId;
      } else if (props.formSlug == "tblsubstage") {
        obj.stageId = props.subId;
      } else if (props.formSlug == "tblcategory") {
        obj.parent_id = props.subId;
      } else if (props.formSlug == "tblkanbanstage") {
        obj.parentId = props.subId;
      } else if (props.formSlug == "tblapplicationsections") {
        obj.applicationId = props.subId;
      } else if (props.formSlug == "tblapplicationsubsections") {
        obj.sectionId = props.subId;
      } else if (props.formSlug == "tblapplicationquestion") {
        obj.subsection_id = props.subId;
      } else if (props.formSlug == "tblrubiccriteria") {
        obj.rubicId = props.subId;
      } else if (props.formSlug == "tbmstindustry") {
        obj.parentId = props.subId;
      } else if (props.formSlug == "tblusersadmin") {
        obj.parent_id = props.subId;
      }
    }
    for (var i in formData.form_fields) {
      if (formData.form_fields[i].control_type == "TEXT_EDITOR") {
        obj[`${formData.form_fields[i].db_column}`] =
          formData.form_fields[i][`${formData.form_fields[i].db_column}`];
      }
    }
    if (props.id) {
      obj.id = props.id;
      WebService.putAPI({
        action: props.editUrl,
        body: obj,
        id: "form-layout-submit-btn",
      })
        .then((res: any) => {
          props.isClose();
          toast.success(res.message);
          props.getlist();
        })
        .catch((error: any) => { });
    } else {
      WebService.postAPI({
        action: props.addUrl,
        body: obj,
        id: "form-layout-submit-btn",
      })
        .then((res: any) => {
          toast.success(res.message);
          props.isClose();
          props.getlist();
        })
        .catch((error: any) => { });
    }
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
  const onLoadImage = (e: any, db_column: any) => {
    const { files } = e.target;
    if (files && files[0]) {
      setDocumentName(files[0].name);

      setImage(files[0]);
      WebService.fileUploadAPI({
        action: `/comman-file-upload`,
        key: "image",
        file: files[0],
        body: {},
      })
        .then((res: any) => {
          if (res && res.file) {
            setValue(db_column, res.file);
            setImageFile(res.file);
          }
        })
        .catch((error: any) => { });
    }
    e.target.value = "";
  };

  const goBack = () => {
    props.isClose();
    // window.history.back();
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
  const currentValue = (e: any, index: any) => {
    for (var i in formData.form_fields) {
      if (i == index) {
        formData.form_fields[i][`${formData.form_fields[i].db_column}`] = e;
      }
    }

    setFormData({ ...formData });
  };
  return (
    <>
      {showLoader ? (
        <Loader show={showLoader} />
      ) : (
        <Row className="form-layout">
          <form
            onSubmit={handleSubmit(onSave)}
            className="d-flex flex-column justify-content-end">
            <Row className="" style={{ maxHeight: "80vh" }}>
              {showTimeZoneField == true && (
                <Row className="boxxxx">
                  <Col lg={3}>
                    <div className="ml-2">
                      <label className="label-12 mt-3">TimeZone: </label>
                    </div>
                  </Col>
                  <Col lg={9}>
                    <div className="mb-2 mt-2 ">
                      {/* <label className="label-12">TimeZone </label> */}
                      <Controller
                        control={control}
                        name="timezoneformbuilderid"
                        render={({ field }) => (
                          <CustomDropdown
                            options={timezone}
                            selected={timezoneSelected}
                            isSearchable={true}
                            placeholder="Timezone"
                            onChange={(data: any) => {
                              field.onChange(data.id);
                              setTimezoneSelected(data.id);
                              setTimezoneValue(data.value);
                              for (var i in formData.form_fields) {
                                if (
                                  formData.form_fields[i].control_type ==
                                  "DATETIME" &&
                                  watchAllFields[
                                  `${formData.form_fields[i].db_column}`
                                  ]
                                ) {
                                  var value = moment(
                                    watchAllFields[
                                    `${formData.form_fields[i].db_column}`
                                    ]
                                  )
                                    .tz(data.value)
                                    .format("DD-MM-YYYY hh:mm a");
                                  formData.form_fields[i].converted =
                                    data.value + " | " + value;
                                }
                              }
                            }}
                          />
                        )}
                      />
                      <div>
                        {errors.control_type && (
                          <span className="text-danger fs-12">
                            Please Select Field Type
                          </span>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              {formData &&
                formData?.form_fields?.length > 0 &&
                formData.form_fields.map((res: any, index: any) => {
                  return (
                    <Col lg={col}>
                      {res.control_type == "INPUT" &&
                        res.validation_type == "URL" && (
                          <Col lg={row}>
                            <div className="mt-2">
                              <Label
                                htmlFor="name-field"
                                className="form-label"
                                style={{
                                  fontSize: getFontSize(res.font_size),
                                  color: getColor(res.font_color),
                                }}>
                                {HelperService.getTitleCase(res.title)}{" "}
                                {res.is_requried == "Y" && (
                                  <span className="text-danger">*</span>
                                )}
                              </Label>
                              {res.help_text && (
                                <a title={res.help_text} className="mt-1">
                                  <i className="ri ri-question-fill "></i>
                                </a>
                              )}
                              <input
                                type="text"
                                className="form-control"
                                placeholder={res.placeholder}
                                onKeyPress={(e) =>
                                  HelperService.allowMaxValue(e, res.max)
                                }
                                {...register(res.db_column, {
                                  required:
                                    res.is_requried == "Y" ? true : false,
                                  pattern: RegExp(
                                    "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
                                  ),
                                })}
                              />
                            </div>
                            <div>
                              {errors[`${res.db_column}`] &&
                                !watchAllFields[`${res.db_column}`] && (
                                  <span className="text-danger fs-12">
                                    {" "}
                                    Please Enter{" "}
                                    {HelperService.getTitleCase(res.title)}.
                                  </span>
                                )}
                              {watchAllFields[`${res.db_column}`] &&
                                !HelperService.isValidurlPatternValidation(
                                  watchAllFields[`${res.db_column}`]
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
                                  fontSize: getFontSize(res.font_size),
                                  color: getColor(res.font_color),
                                }}>
                                {HelperService.getTitleCase(res.title)}{" "}
                                {res.is_requried == "Y" && (
                                  <span className="text-danger">*</span>
                                )}
                              </Label>
                              {res.help_text && (
                                <a title={res.help_text} className="mt-1">
                                  <i className="ri ri-question-fill "></i>
                                </a>
                              )}
                              <input
                                type="text"
                                className="form-control"
                                placeholder={res.placeholder}
                                disabled={res?.isDisable ? true : false}
                                onKeyPress={(e) =>
                                  HelperService.allowMaxValue(e, res.max)
                                }
                                {...register(res.db_column, {
                                  required:
                                    res.is_requried == "Y" ? true : false,
                                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                                })}
                              />
                            </div>
                            <div>
                              {errors[`${res.db_column}`] &&
                                !watchAllFields[`${res.db_column}`] && (
                                  <span className="text-danger fs-12">
                                    {" "}
                                    Please Enter{" "}
                                    {HelperService.getTitleCase(res.title)}.
                                  </span>
                                )}
                              {watchAllFields[`${res.db_column}`] &&
                                !HelperService.isValidEmail(
                                  watchAllFields[`${res.db_column}`]
                                ) ? (
                                <span className="text-danger fs-12">
                                  Please Enter Valid Email Address.
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          </Col>
                        )}
                      {res.control_type == "INPUT" && !res.validation_type && (
                        <Col lg={row}>
                          <div className="mt-2">
                            <Label
                              htmlFor="name-field"
                              className="form-label"
                              style={{
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                            </Label>
                            {res.help_text && (
                              <a title={res.help_text} className="mt-1">
                                <i className="ri ri-question-fill "></i>
                              </a>
                            )}
                            <input
                              type="text"
                              className="form-control"
                              placeholder={res.placeholder}
                              onKeyPress={(e) =>
                                HelperService.allowMaxValue(e, res.max)
                              }
                              {...register(res.db_column, {
                                required: res.is_requried == "Y" ? true : false,
                              })}
                            />
                          </div>
                          <div>
                            {errors[res.db_column] && (
                              <span className="text-danger fs-12">
                                {" "}
                                Please Enter{" "}
                                {HelperService.getTitleCase(res.title)}.
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
                              className="form-label"
                              style={{
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                              <span className="description italic">
                                (Max:{res.max} | Min:{res.min})
                              </span>
                            </Label>
                            {res.help_text && (
                              <a title={res.help_text} className="mt-1">
                                <i className="ri ri-question-fill "></i>
                              </a>
                            )}
                            <input
                              type="range"
                              max={res.max}
                              min={res.min}
                              step={res.interval}
                              className="form-control-new"
                              placeholder={res.placeholder}
                              {...register(res.db_column, {
                                required: res.is_requried == "Y" ? true : false,
                              })}
                            />
                            Value: {watchAllFields[`${res.db_column}`]}
                          </div>
                          <div>
                            {errors[res.db_column] && (
                              <span className="text-danger fs-12">
                                {" "}
                                Please Enter{" "}
                                {HelperService.getTitleCase(res.title)}.
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
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                              {res.help_text && (
                                <a title={res.help_text} className="mt-1">
                                  <i className="ri ri-question-fill "></i>
                                </a>
                              )}
                            </Label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={res.placeholder}
                              {...register(res.db_column, {
                                required: res.is_requried == "Y" ? true : false,
                              })}
                              onKeyPress={(e) =>
                                HelperService.allowOnlyNumericValue(e, res.max)
                              }
                            />
                          </div>
                          <div>
                            {errors[res.db_column] && (
                              <span className="text-danger fs-12">
                                {" "}
                                Please Enter{" "}
                                {HelperService.getTitleCase(res.title)}.
                              </span>
                            )}
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
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                              {res.help_text && (
                                <a title={res.help_text} className="mt-1">
                                  <i className="ri ri-question-fill "></i>
                                </a>
                              )}
                            </Label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={res.placeholder}
                              {...register(res.db_column, {
                                required: res.is_requried == "Y" ? true : false,
                              })}
                              onKeyPress={(e) =>
                                HelperService.allowDecimalValue(e)
                              }
                            />
                          </div>
                          <div>
                            {errors[res.db_column] && (
                              <span className="text-danger fs-12">
                                {" "}
                                Please Enter{" "}
                                {HelperService.getTitleCase(res.title)}.
                              </span>
                            )}
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
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                              {res.help_text && (
                                <a title={res.help_text} className="mt-1">
                                  <i className="ri ri-question-fill "></i>
                                </a>
                              )}
                            </Label>
                            <textarea
                              className="form-control"
                              placeholder={res.placeholder}
                              {...register(res.db_column, {
                                required: res.is_requried == "Y" ? true : false,
                              })}
                            />
                          </div>
                          <div>
                            {errors[res.db_column] && (
                              <span className="text-danger fs-12">
                                {" "}
                                Please Enter{" "}
                                {HelperService.getTitleCase(res.title)}.
                              </span>
                            )}
                          </div>
                        </Col>
                      )}
                      {res.control_type == "CHECKBOX" && (
                        <Col lg={row}>
                          <div className="mt-3">
                            <Label
                              htmlFor="name-field"
                              className="form-label"
                              style={{
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                              {res.help_text && (
                                <a title={res.help_text} className="mt-1">
                                  <i className="ri ri-question-fill "></i>
                                </a>
                              )}
                            </Label>
                            <input
                              type="checkbox"
                              value=""
                              {...register(res.db_column, {
                                required: res.is_requried == "Y" ? true : false,
                              })}
                            />
                          </div>
                          <div>
                            {errors[res.db_column] && (
                              <span className="text-danger fs-12">
                                {" "}
                                Please Check{" "}
                                {HelperService.getTitleCase(res.title)}.
                              </span>
                            )}
                          </div>
                        </Col>
                      )}
                      {res.control_type == "DATE" && (
                        <Col lg={row}>
                          <div className="mt-2">
                            <Label
                              htmlFor="name-field"
                              className="form-label"
                              style={{
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                              {res.help_text && (
                                <a title={res.help_text} className="mt-1">
                                  <i className="ri ri-question-fill "></i>
                                </a>
                              )}
                            </Label>
                            <Controller
                              control={control}
                              name={res.db_column}
                              rules={{
                                required: res.is_requried == "Y" ? true : false,
                              }}
                              render={({ field }) => (
                                <CustomDatePicker
                                  placeholderText={res.placeholder}
                                  selected={res.selected}
                                  format={res.display_format}
                                  onChange={(data: any) => {
                                    var formatted =
                                      moment(data).format("DD-MM-YYYY");
                                    field.onChange(formatted);
                                  }}
                                />
                              )}
                            />
                          </div>
                          <div>
                            {errors[res.db_column] && (
                              <span className="text-danger fs-12">
                                {" "}
                                Please Select{" "}
                                {HelperService.getTitleCase(res.title)}.
                              </span>
                            )}
                          </div>
                        </Col>
                      )}
                      {res.control_type == "DATETIME" && (
                        <Col lg={row}>
                          <div className="mt-2">
                            <Label
                              htmlFor="name-field"
                              className="form-label"
                              style={{
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                              {res.help_text && (
                                <a title={res.help_text} className="mt-1">
                                  <i className="ri ri-question-fill "></i>
                                </a>
                              )}
                            </Label>
                            <Controller
                              control={control}
                              name={res.db_column}
                              rules={{
                                required: res.is_requried == "Y" ? true : false,
                              }}
                              render={({ field }) => (
                                <CustomDatePicker
                                  type="DATETIME"
                                  selected={res.selected}
                                  format={res.display_format}
                                  timeformat={res.display_time_format}
                                  placeholderText={res.placeholder}
                                  onChange={(data: any) => {
                                    var formatted = moment(data).format(
                                      "YYYY-MM-DD HH:mm:ss"
                                    );
                                    field.onChange(formatted);
                                    if (timezoneValue) {
                                      for (var i in formData.form_fields) {
                                        if (
                                          formData.form_fields[i]
                                            .control_type == "DATETIME" &&
                                          i == index
                                        ) {
                                          var value = moment(data)
                                            // .tz(timezoneValue)
                                            .format("DD-MM-YYYY hh:mm a");
                                          res.converted =
                                            timezoneValue + " | " + value;
                                        }
                                      }
                                    }
                                  }}
                                />
                              )}
                            />
                            <span className="fs-12">{res.converted}</span>
                          </div>
                          <div>
                            {errors[res.db_column] && (
                              <span className="text-danger fs-12">
                                {" "}
                                Please Select{" "}
                                {HelperService.getTitleCase(res.title)}.
                              </span>
                            )}
                          </div>
                        </Col>
                      )}
                      {res.control_type == "SELECT" && (
                        <Col lg={row}>
                          <div className="mt-2">
                            <Label
                              htmlFor="name-field"
                              className="form-label"
                              style={{
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                              {res.help_text && (
                                <a title={res.help_text} className="mt-1">
                                  <i className="ri ri-question-fill "></i>
                                </a>
                              )}
                            </Label>
                            <Controller
                              control={control}
                              name={`${res.db_column}`}
                              rules={{
                                required: res.is_requried == "Y" ? true : false,
                              }}
                              render={({ field }) => (
                                <CustomDropdown
                                  options={
                                    res.options ? JSON.parse(res.options) : []
                                  }
                                  selected={res.selected}
                                  isSearchable={true}
                                  placeholder={res.placeholder}
                                  onChange={(data: any) => {
                                    field.onChange(data.id);
                                    res.selected = data.value;
                                  }}
                                />
                              )}
                            />
                            <div>
                              {errors[`${res.db_column}`] && (
                                <span className="text-danger fs-12">
                                  {" "}
                                  Please Select{" "}
                                  {HelperService.getTitleCase(res.title)}.
                                </span>
                              )}
                            </div>
                          </div>
                        </Col>
                      )}
                      {res.control_type == "MULTISELECT" && (
                        <Col lg={row}>
                          <div className="mt-2">
                            <Label
                              htmlFor="name-field"
                              className="form-label"
                              style={{
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                              {res.help_text && (
                                <a title={res.help_text} className="mt-1">
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
                                      ? JSON.parse(res.options).length
                                      : []
                                  }
                                  options={
                                    res.options ? JSON.parse(res.options) : []
                                  }
                                  selected={[]}
                                  placeholder={res.placeholder}
                                  onChange={(data: any) => { }}
                                />
                              )}
                            />
                          </div>
                          <div>
                            {errors[res.db_column] && (
                              <span className="text-danger fs-12">
                                {" "}
                                Please Select{" "}
                                {HelperService.getTitleCase(res.title)}.
                              </span>
                            )}
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
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                            </Label>
                            {res.help_text && (
                              <a title={res.help_text} className="mt-1">
                                <i className="ri ri-question-fill "></i>
                              </a>
                            )}
                            <input
                              type="color"
                              className="form-control"
                              placeholder={res.placeholder}
                              onKeyPress={(e) =>
                                HelperService.allowMaxValue(e, res.max)
                              }
                              {...register(res.db_column, {
                                required: res.is_requried == "Y" ? true : false,
                              })}
                            />
                          </div>
                          <div>
                            {errors[res.db_column] && (
                              <span className="text-danger fs-12">
                                {" "}
                                Please Enter{" "}
                                {HelperService.getTitleCase(res.title)}.
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
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                            </Label>
                            {res.help_text && (
                              <a title={res.help_text} className="mt-1">
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
                                    onLoadImage(e, res.db_column);
                                  }}
                                />
                                <i className="ri ri-attachment-line icon" />
                              </div>
                              {documentName ? (
                                documentName
                              ) : res.selected ? (
                                res.selected
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
                                {HelperService.getTitleCase(res.title)}.
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
                              style={{ fontSize: getFontSize(res.font_size), color: getColor(res.font_color), }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                            </Label>
                            {res.help_text && (
                              <a title={res.help_text} className="mt-1">
                                <i className="ri ri-question-fill "></i>
                              </a>
                            )}
                            <input
                              id="password"
                              type={res.input_type ? res.input_type : "password"}
                              className={`form-control ${errors[res.db_column] ? "is-invalid" : ""}`}
                              placeholder={res.placeholder}
                              {...register(res.db_column, {
                                required:
                                  res.is_requried == "Y" ? true : false,
                              })}
                              onKeyPress={(e) =>
                                HelperService.allowMaxValue(e, res.max)
                              }
                            />
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                              type="button"
                              style={{ marginTop: "31px" }}
                              onClick={() => updatePasswordType(index)}
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
                                {HelperService.getTitleCase(res.title)}.
                              </span>
                            )}
                          </div>

                        </Col>
                      )}
                      {res.control_type == "CONFIRM_PASSWORD" && (
                        <Col lg={row}>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <Label
                              htmlFor="name-field"
                              className="form-label"
                              style={{
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            {res.help_text && (
                              <a title={res.help_text} className="mt-1">
                                <i className="ri ri-question-fill "></i>
                              </a>
                            )}
                            <input
                              id="confirm_password"
                              type={res.input_type ? res.input_type : "password"}
                              className={`form-control ${errors[res.db_column] ? "is-invalid" : ""}`}
                              placeholder={res.placeholder}
                              {...register(res.db_column,
                                {
                                  required: res.is_requried == "Y" ? true : false,
                                  validate: (value: any) => value == getValues(res.db_column.replaceAll('_scip_confirm_password', ''))
                                })}
                              onKeyPress={(e) =>
                                HelperService.allowMaxValue(e, res.max)
                              }
                            />
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                              type="button"
                              style={{ marginTop: "31px" }}
                              onClick={() => updatePasswordType(index)}
                              id="confirm-password-addon">
                              {" "}
                              <i className="ri-eye-fill align-middle"></i>{" "}
                            </button>
                          </div>
                          <div>
                            {errors[res.db_column] &&

                              <span className="text-danger fs-12">
                                {" "}
                                Please Enter Correct Confirm Password.
                              </span>
                            }
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
                                fontSize: getFontSize(res.font_size),
                                color: getColor(res.font_color),
                              }}>
                              {HelperService.getTitleCase(res.title)}
                              {res.is_requried == "Y" && (
                                <span className="text-danger">*</span>
                              )}
                            </Label>
                            {res.help_text && (
                              <a title={res.help_text} className="mt-1">
                                <i className="ri ri-question-fill "></i>
                              </a>
                            )}
                            <Controller
                              control={control}
                              name={res.db_column}
                              render={({ field }) => (
                                <TextEditor
                                  data={res[`${res.db_column}`]}
                                  editedData={(e: any) => {
                                    field.onChange(e);
                                    currentValue(e, index);
                                  }}
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
                                {HelperService.getTitleCase(res.title)}.
                              </span>
                            )}
                          </div>
                        </Col>
                      )}
                      {res.description && (
                        <span className="description italic">
                          Hint : {res.description}
                        </span>
                      )}
                    </Col>
                  );
                })}

            </Row>
            <div className="offcanvas-footer  text-center hstack gap-2 justify-content-end">
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
          </form>
        </Row>
      )}
    </>
  );
};

export default FormLayout;
