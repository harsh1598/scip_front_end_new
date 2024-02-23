import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Col,
  Label,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from "reactstrap";
import CustomDropdown from "../../Components/Select/CustomDropdown";
import WebService from "../../utility/WebService";
import PlusIcon from "../../assets/images/plus.svg";
import Loader from "../../Components/Loader/Loader";
import HelperService from "../../utility/HelperService";

interface PropData {
  isShow: any;
  title: string;
  isClose: any;
  data: any;
  updatedData: any;
  onEdit: any;
}

const AddFieldTable = (props: PropData) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const watchAllFields = watch();
  const [fieldOption, setFieldOption] = useState<any>([]);
  const [fieldSelected, setFieldSelected] = useState<any>([]);
  const [tableFieldsValueSelected, setFieldValueSelected] = useState<any>([]);
  const [tableSelected, setTableSelected] = useState<any>([]);
  const [tableFieldsTitle, setFieldTitleSelected] = useState<any>([]);
  const [fieldTypeSelected, setFieldTypeSelected] = useState<any>([]);
  const [fieldType, setFieldType] = useState<any>([]);
  const [ValidationsTypeSelected, setValidationTypes] = useState<any>([]);
  const [selectTypeSelected, setSelectType] = useState<any>([]);
  const [editindex, setEditIndex] = useState<any>(null);
  const [dropDownSelected, setDropDownSelected] = useState<any>([]);
  const [options, setOptions] = useState<any[]>([]);
  const [tableList, setTableList] = useState<any[]>([]);
  const [tableFields, setTableFields] = useState<any[]>([]);
  const [dateformat, setDateFormat] = useState<any>([]);
  const [timeformat, setTimeFormat] = useState<any>([]);
  const [showLoader, setShowLoader] = useState<any>(false);
  useEffect(() => {
    var obj: any = {};
    reset(obj);
    setFieldSelected("resetsawin");
    setFieldTypeSelected("resetsawin");
    setSelectType("resetsawin");
    setFieldValueSelected("resetsawin");
    setTableSelected("resetsawin");
    setFieldTitleSelected("resetsawin");
    setDateFormat("resetsawin");
    setValidationTypes("resetsawin");
    setEditIndex(null);
    getList();
  }, [props.isShow]);

  useEffect(() => {
    setOptions([
      {
        id: "",
        value: "",
        hasValidate: false,
      },
    ]);
    getTableList();
  }, []);

  useEffect(() => {
    if (props.onEdit >= 0) {
      onEdit(props.onEdit);
    }
  }, [props.onEdit]);

  const onCloseModal = () => {
    props.isClose(!props.isShow);
    reset();
    setFieldSelected("resetsawin");
    setFieldTypeSelected("resetsawin");
    setSelectType("resetsawin");
    setFieldValueSelected("resetsawin");
    setTableSelected("resetsawin");
    setFieldTitleSelected("resetsawin");
    setDateFormat("resetsawin");
    setValidationTypes("resetsawin");
    setEditIndex(null);
  };

  const onAddFields = (data: any) => {
    var Finalobj: any = {};
    var obj: any = {};
    obj = data;
    Finalobj = props.data;
    // for (var i in fieldOption) {
    //   if (fieldOption[i].id == obj.db_column) {
    //     obj.title = fieldOption[i].value;
    //   }
    // }
    if (Finalobj.form_fields) {
      if (editindex) {
        for (var i in Finalobj.form_fields) {
          if (Number(editindex - 1) == Number(i)) {
            Finalobj.form_fields[i] = obj;
            if (options && options.length > 0) {
              Finalobj.form_fields[i].options = JSON.stringify(options);
            } else {
              Finalobj.form_fields[i].options = "";
            }
          }
        }
      } else {
        if (options && options.length > 0) {
          obj.options = JSON.stringify(options);
        } else {
          obj.options = "";
        }
        Finalobj.form_fields.push(obj);
      }

      setEditIndex(null);
      props.updatedData(Finalobj);
      onCloseModal();
      reset();
      setFieldSelected("resetsawin");
      setFieldTypeSelected("resetsawin");
      setSelectType("resetsawin");
      setFieldValueSelected("resetsawin");
      setTableSelected("resetsawin");
      setFieldTitleSelected("resetsawin");
      setDateFormat("resetsawin");
      setValidationTypes("resetsawin");
      setEditIndex(null);
    } else {
      Finalobj.list_fields.push(obj);
      setEditIndex(null);
      props.updatedData(Finalobj);
      onCloseModal();
      reset();
      setFieldSelected("resetsawin");
      setFieldTypeSelected("resetsawin");
      setSelectType("resetsawin");
      setFieldValueSelected("resetsawin");
      setTableSelected("resetsawin");
      setFieldTitleSelected("resetsawin");
      setDateFormat("resetsawin");
      setValidationTypes("resetsawin");
      setEditIndex(null);
    }
  };

  // const fieldType = [
  //   { id: "INPUT", value: "INPUT" },
  //   { id: "NUMERIC", value: "NUMERIC" },
  //   { id: "SELECT", value: "SELECT" },
  //   { id: "TEXT", value: "TEXT" },
  //   { id: "DATE", value: "DATE" },
  //   { id: "DATETIME", value: "DATETIME" },
  //   { id: "CHECKBOX", value: "CHECKBOX" },
  // ];

  const SelectTypes = [
    { id: "STATIC", value: "STATIC" },
    { id: "DYNAMIC", value: "DYNAMIC" },
  ];

  const SelectValidationTypes = [
    { id: "EMAIL", value: "EMAIL" },
    { id: "URL", value: "URL" },
  ];

  const getTableList = () => {
    WebService.getAPI({
      action: `/all-table-list`,
      body: null,
    })
      .then((res: any) => {
        var array: any = [];
        for (var i in res.list) {
          array.push({
            id: res.list[i].table_name,
            value: res.list[i].table_name,
          });
        }
        setTableList(array);
      })
      .catch((e) => {});
  };
  const getTableFieldList = (table_name: any) => {
    var obj: any = {};
    obj.table_name = table_name;
    WebService.getAPI({
      action: `/all-table-coloumn`,
      body: obj,
    })
      .then((res: any) => {
        var array: any = [];
        for (var i in res.list) {
          array.push({
            id: res.list[i].Field,
            value: res.list[i].Field,
          });
        }
        setTableFields(array);
      })
      .catch((e) => {});
  };
  const getList = () => {
    console.log("props?.data?", props.data);

    if (props?.data?.db_table) {
      WebService.getAPI({
        action: `/cutom-coloumn-list?table_name=${props?.data?.db_table}`,
        body: null,
      })
        .then((res: any) => {
          // db_column form formdata
          // column_name form res.list
          // props.data
          var array: any = [];

          for (var i in res.list) {
            if (editindex != null && editindex >= 0) {
              array.push({
                id: res.list[i].column_name,
                value:
                  res.list[i].dispaly_label +
                  "  (" +
                  res.list[i].new_data_type +
                  ")",
                value2: res.list[i].uuid,
              });
            } else {
              var count = 0;
              for (var j in props?.data?.form_fields) {
                if (
                  props.data.form_fields[j].db_column == res.list[i].column_name
                ) {
                  count = count + 1;
                }
              }
              if (count == 0) {
                array.push({
                  id: res.list[i].column_name,
                  value: res.list[i].dispaly_label,
                  code: res.list[i].new_data_type,
                  value2: res.list[i].uuid,
                });
              }
            }
          }
          setFieldOption(array);
        })
        .catch((e) => {});
    }
  };

  const onEdit = (index: any) => {
    if (index != null && index >= 0) {
      setShowLoader(true);
      var obj: any = {};
      for (var i in props?.data?.form_fields) {
        if (index == i) {
          obj = props?.data?.form_fields[i];
          if (obj.is_requried == "Y") {
            obj.is_requried = true;
          } else {
            obj.is_requried = false;
          }
          // if (obj.use_in_list == "Y") {
          //   obj.use_in_list = true;
          // } else {
          //   obj.use_in_list = false;
          // }
          setEditIndex(index + 1);
          reset(obj);
          setFieldSelected(obj?.db_column);
          setSelectType(obj?.nature);
          setTableSelected(obj?.select_source_table);
          setFieldValueSelected(obj?.source_id_name);
          setFieldTitleSelected(obj?.source_value_name);
          setValidationTypes(obj?.validation_type);
          setDateFormat(obj?.display_format);
          setTimeFormat(obj?.display_time_format);
          setFieldTypeSelected(obj?.control_type);
          const data = JSON.parse(obj?.options || []);
          if (data) {
            setOptions([...data]);
          }
          getFieldTypeList(obj?.uuid, obj?.control_type);
        }
      }
    }
  };
  const getFieldTypeList = (uuid: any, control_type?: any) => {
    setFieldType([]);
    var obj: any = {};
    obj.uuid = uuid;
    WebService.getAPI({
      action: `/field-list`,
      body: obj,
    })
      .then((res: any) => {
        var array: any = [];
        for (var i in res.list) {
          array.push({
            id: res.list[i].id,
            value: res.list[i].value,
          });
        }
        setFieldType(array);
        setShowLoader(false);
      })
      .catch((e) => {});
  };
  const dateformats = [
    { id: "MMM do yy", value: "Nov 30th 23" },
    { id: "MMMM do yyyy", value: "November 30th 2023" },
    { id: "yyyy/MM/dd", value: "YYYY/MM/DD" },
    { id: "dd/MM/yyyy", value: "DD/MM/2023" },
    { id: "MM/dd/yyyy", value: "MM/DD/YYYY" },
  ];

  const timeformats = [
    { id: "hh:mm aa", value: "6:51 PM" },
    { id: "hh:mm:ss aa", value: "6:52:21 PM" },
    { id: "HH:mm", value: "13:00" },
    { id: "HH:mm:ss", value: "13:00:00" },
  ];

  const addHousehold = () => {
    var isShowError = false;
    if (isShowError == false) {
      options.push({ option: "", hasValidate: false });
      setOptions([...options]);
    }
  };

  const deleteHousehold = (index: any) => {
    options.splice(index, 1);
    setOptions([...options]);
  };

  return (
    <>
      <Loader show={showLoader} />
      <Offcanvas
        isOpen={props.isShow}
        onHide={onCloseModal}
        toggle={props.isClose}
        direction="end"
        className="border-bottom size-md my-offcanvas">
        <OffcanvasHeader className="bg-light" id="offcanvasRightLabel">
          {" "}
          {editindex == null ? "Add" : "Edit"} Fields
        </OffcanvasHeader>
        <form
          onSubmit={handleSubmit(onAddFields)}
          className="d-flex flex-column justify-content-end">
          <OffcanvasBody className="px-0 overflow-hidden my-offcanvas-body">
            <div className="px-4">
              <Row>
                <Col lg={12}>
                  <div className="mb-2">
                    <label className="label">Field Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Field Title"
                      {...register("title", { required: true })}
                    />
                    <div>
                      {errors.title && (
                        <span className="text-danger fs-12">
                          Please Enter Field Title
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-2">
                    <label className="label">Field Label</label>
                    <Controller
                      control={control}
                      name="db_column"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomDropdown
                          options={fieldOption}
                          selected={fieldSelected}
                          isSearchable={true}
                          isDisable={editindex ? true : false}
                          placeholder="Select"
                          onChange={(data: any) => {
                            field.onChange(data.id);
                            setFieldSelected(data.id);
                            getFieldTypeList(data.value2);
                            setFieldTypeSelected("resetsawin");
                          }}
                        />
                      )}
                    />
                    <div>
                      {errors.db_column && (
                        <span className="text-danger fs-12">
                          Please Select Field Label
                        </span>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-2">
                    <label className="label">Field Type </label>
                    <Controller
                      control={control}
                      name="control_type"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomDropdown
                          options={fieldType}
                          selected={fieldTypeSelected}
                          isSearchable={true}
                          isDisable={editindex ? true : false}
                          placeholder="Field Type"
                          onChange={(data: any) => {
                            field.onChange(data.id);
                            setFieldTypeSelected(data.id);
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
                {watchAllFields.control_type == "SLIDER" && (
                  <>
                    {" "}
                    <Col lg={2}>
                      <div className="mt-2">
                        <label className="label">Min Value</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Min"
                          onKeyPress={(e) => HelperService.allowDecimalValue(e)}
                          {...register("min")}
                        />
                      </div>
                    </Col>
                    <Col lg={2}>
                      <div className="mt-2">
                        <label className="label">Max Value</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Max"
                          onKeyPress={(e) => HelperService.allowDecimalValue(e)}
                          {...register("max")}
                        />
                      </div>
                    </Col>
                    <Col lg={2}>
                      <div className="mt-2">
                        <label className="label">Interval</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Interval"
                          onKeyPress={(e) => HelperService.allowDecimalValue(e)}
                          {...register("interval")}
                        />
                      </div>
                    </Col>
                  </>
                )}

                {(watchAllFields.control_type == "NUMERIC" ||
                  watchAllFields.control_type == "INPUT") && (
                  <>
                    {" "}
                    <Col lg={6}>
                      <div className="mt-2">
                        <label className="label">Max Length</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Max"
                          onKeyPress={(e) => HelperService.allowDecimalValue(e)}
                          {...register("max")}
                        />
                      </div>
                    </Col>
                    {/* <Col lg={2}>
                      <div className="mt-2">
                        <label className="label">Max Value</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Max"
                          onKeyPress={(e) => HelperService.allowDecimalValue(e)}
                          {...register("max")}
                        />
                      </div>
                    </Col>
                    <Col lg={2}>
                      <div className="mt-2">
                        <label className="label">Interval</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Interval"
                          onKeyPress={(e) => HelperService.allowDecimalValue(e)}
                          {...register("interval")}
                        />
                      </div>
                    </Col> */}
                  </>
                )}

                {watchAllFields.control_type == "INPUT" ? (
                  <Col lg={6}>
                    <div className="mb-2">
                      <label className="label">Validation Type</label>
                      <Controller
                        control={control}
                        name="validation_type"
                        render={({ field }) => (
                          <CustomDropdown
                            options={SelectValidationTypes}
                            selected={ValidationsTypeSelected}
                            isSearchable={true}
                            placeholder="Select Validation"
                            onChange={(data: any) => {
                              field.onChange(data.id);
                              setValidationTypes(data.id);
                            }}
                          />
                        )}
                      />
                    </div>
                  </Col>
                ) : (
                  " "
                )}
                {watchAllFields.control_type == "SELECT" ? (
                  <Col lg={6}>
                    <div className="mb-2">
                      <label className="label">Select Nature</label>
                      <Controller
                        control={control}
                        name="nature"
                        render={({ field }) => (
                          <CustomDropdown
                            options={SelectTypes}
                            selected={selectTypeSelected}
                            isSearchable={true}
                            placeholder="Select Nature"
                            onChange={(data: any) => {
                              field.onChange(data.id);
                              setSelectType(data.id);
                            }}
                          />
                        )}
                      />
                    </div>
                  </Col>
                ) : (
                  " "
                )}

                {watchAllFields.control_type == "DATE" ||
                watchAllFields.control_type == "DATETIME" ? (
                  <Col lg={6}>
                    <div className="mb-2">
                      <label className="label">Date Format</label>
                      <Controller
                        control={control}
                        name="display_format"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <CustomDropdown
                            options={dateformats}
                            selected={dateformat}
                            isSearchable={true}
                            placeholder="Select Date Format"
                            onChange={(data: any) => {
                              field.onChange(data.id);
                              setDateFormat(data.id);
                            }}
                          />
                        )}
                      />
                        {errors.display_format && (
                        <span className="text-danger fs-12">
                          Please Select Date Format
                        </span>
                      )}
                    </div>
                  </Col>
                ) : (
                  " "
                )}
                {watchAllFields.control_type == "DATETIME" ? (
                  <Col lg={6}>
                    <div className="mb-2">
                      <label className="label">Time Format</label>
                      <Controller
                        control={control}
                        name="display_time_format"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <CustomDropdown
                            options={timeformats}
                            selected={timeformat}
                            isSearchable={true}
                            placeholder="Select Time Format"
                            onChange={(data: any) => {
                              field.onChange(data.id);
                              setTimeFormat(data.id);
                            }}
                          />
                        )}
                      />
                      {errors.display_time_format && (
                        <span className="text-danger fs-12">
                          Please Select Time Format
                        </span>
                      )}
                      <div></div>
                    </div>
                  </Col>
                ) : (
                  " "
                )}
                {watchAllFields.control_type == "DATETIME" ? (
                  <Col lg={6}>
                    <div className="mt-2">
                      <label className="label" style={{ display: "inherit" }}>
                        Display TimeZone ?
                      </label>
                      <input
                        type="checkbox"
                        value=""
                        {...register("is_timezone")}
                      />
                    </div>
                  </Col>
                ) : (
                  " "
                )}
                {watchAllFields.nature == "STATIC" ? (
                  <Col lg={12} className="mt-4">
                    <table className="table table-style-list border rounded-lg p-3">
                      <label className="label p-2">Add Select Options</label>
                      {options.length > 0 &&
                        options.map((res, index) => {
                          return (
                            <Row>
                              <Col lg={10} className=" mt-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={"Option " + Number(index + 1)}
                                  value={res.value}
                                  onChange={(e) => {
                                    options[index].id = e.target.value;
                                    options[index].value = e.target.value;
                                    setOptions([...options]);
                                  }}
                                />
                              </Col>

                              <Col lg={2} style={{ display: "flex" }}>
                                {index == options.length - 1 && (
                                  <a
                                    href="javascript:void(0)"
                                    className="action-btn">
                                    <img
                                      src={PlusIcon}
                                      alt=""
                                      className="inline ml- text-green-600"
                                      onClick={() => addHousehold()}
                                    />
                                  </a>
                                )}
                                {index < options.length - 1 && (
                                  <a
                                    onClick={() => deleteHousehold(index)}
                                    className="action-btn cursor-pointer">
                                    <i className="ri-delete-bin-2-line align-middle me-1"></i>
                                  </a>
                                )}
                              </Col>
                            </Row>
                          );
                        })}
                    </table>
                  </Col>
                ) : (
                  " "
                )}
                {watchAllFields.nature == "DYNAMIC" ? (
                  <Row className="mt-4">
                    <Col lg={12}>
                      <div className="mb-2">
                        <label className="label">Source Table</label>
                        <Controller
                          control={control}
                          name="select_source_table"
                          render={({ field }) => (
                            <CustomDropdown
                              options={tableList}
                              selected={tableSelected}
                              isSearchable={true}
                              placeholder="Select"
                              onChange={(data: any) => {
                                field.onChange(data.id);
                                setTableSelected(data.id);
                                getTableFieldList(data.id);
                              }}
                            />
                          )}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-2">
                        <label className="label">
                          Source Table Field Value{" "}
                        </label>
                        <Controller
                          control={control}
                          name="source_id_name"
                          render={({ field }) => (
                            <CustomDropdown
                              options={tableFields}
                              selected={tableFieldsValueSelected}
                              isSearchable={true}
                              placeholder="Select"
                              onChange={(data: any) => {
                                field.onChange(data.id);
                                setFieldValueSelected(data.id);
                              }}
                            />
                          )}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-2">
                        <label className="label">
                          Source Table Field Title
                        </label>
                        <Controller
                          control={control}
                          name="source_value_name"
                          render={({ field }) => (
                            <CustomDropdown
                              options={tableFields}
                              selected={tableFieldsTitle}
                              isSearchable={true}
                              placeholder="Select"
                              onChange={(data: any) => {
                                field.onChange(data.id);
                                setFieldTitleSelected(data.id);
                              }}
                            />
                          )}
                        />
                      </div>
                    </Col>
                  </Row>
                ) : (
                  " "
                )}
                <Col lg={6}>
                  <div className="mt-2">
                    <label className="label">Placeholder</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Placeholder"
                      {...register("placeholder")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-2">
                    <label className="label">Description</label>
                    <textarea
                      className="form-control"
                      placeholder="Description"
                      {...register("description")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-2">
                    <label className="label">Helper Text</label>
                    <textarea
                      className="form-control"
                      placeholder=" Helper Text"
                      {...register("help_text")}
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mt-2">
                    <label className="label" style={{ display: "inherit" }}>
                      Is Required?
                    </label>
                    <input
                      type="checkbox"
                      value=""
                      {...register("is_requried")}
                    />
                  </div>
                </Col>
                {/* <Col lg={3}>
                  <div className="mt-2">
                    <label className="label" style={{ display: "inherit" }}>
                      Use In List?
                    </label>
                    <input
                      type="checkbox"
                      value=""
                      {...register("use_in_list")}
                    />
                  </div>
                </Col> */}
                <Col lg={6}>
                  <div className="mt-2">
                    <label className="label">Font Size</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Font Size"
                      {...register("font_size")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mt-2">
                    <label className="label">Font Color</label>
                    <input
                      type="color"
                      className="form-control"
                      placeholder="Font Color"
                      {...register("font_color")}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </OffcanvasBody>
          <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
            <Button
              type="submit"
              id="addedit-workflow-imanagetemplate-submit-btn"
              color="primary"
              className="btn-brand-theme">
              Submit
            </Button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                onCloseModal();
              }}>
              Cancel
            </button>
          </div>
        </form>
      </Offcanvas>
    </>
  );
};

export default AddFieldTable;
