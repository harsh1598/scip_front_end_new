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

const AddListFieldTable = (props: PropData) => {
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
  const [fieldTypeSelected, setFieldTypeSelected] = useState<any>([]);
  const [fieldType, setFieldType] = useState<any>([]);
  const [editindex, setEditIndex] = useState<any>(null);
  const [showLoader, setShowLoader] = useState<any>(false);
  useEffect(() => {
    var obj: any = {};
    reset(obj);
    setFieldSelected("resetsawin");
    setFieldTypeSelected("resetsawin");
    setEditIndex(null);
    getList();
  }, [props.isShow]);

  useEffect(() => {
    // setOptions([
    //   {
    //     id: "",
    //     value: "",
    //     hasValidate: false,
    //   },
    // ]);
    // getTableList();
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
    if (Finalobj.list_fields) {
      if (editindex) {
        for (var i in Finalobj.list_fields) {
          if (Number(editindex - 1) == Number(i)) {
            Finalobj.list_fields[i] = obj;
          }
        }
      } else {
        Finalobj.list_fields.push(obj);
      }

      setEditIndex(null);
      props.updatedData(Finalobj);
      onCloseModal();
      reset();
      setFieldSelected("resetsawin");
      setFieldTypeSelected("resetsawin");
      setEditIndex(null);
    } else {
      Finalobj.list_fields = [];
      Finalobj.list_fields.push(obj);
      setEditIndex(null);
      props.updatedData(Finalobj);
      onCloseModal();
      reset();
      setFieldSelected("resetsawin");
      setFieldTypeSelected("resetsawin");
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

  // const getTableList = () => {
  //   WebService.getAPI({
  //     action: `/all-table-list`,
  //     body: null,
  //   })
  //     .then((res: any) => {
  //       var array: any = [];
  //       for (var i in res.list) {
  //         array.push({
  //           id: res.list[i].Tables_in_scip,
  //           value: res.list[i].Tables_in_scip,
  //         });
  //       }
  //       setTableList(array);
  //     })
  //     .catch((e) => {});
  // };
  // const getTableFieldList = (table_name: any) => {
  //   var obj: any = {};
  //   obj.table_name = table_name;
  //   WebService.getAPI({
  //     action: `/all-table-coloumn`,
  //     body: obj,
  //   })
  //     .then((res: any) => {
  //       var array: any = [];
  //       for (var i in res.list) {
  //         array.push({
  //           id: res.list[i].Field,
  //           value: res.list[i].Field,
  //         });
  //       }
  //       setTableFields(array);
  //     })
  //     .catch((e) => {});
  // };
  const getList = () => {
    console.log("props?.data?", props.data);

    if (props?.data?.db_table) {
      WebService.getAPI({
        action: `/all-cutom-coloumn-list?table_name=${props?.data?.db_table}`,
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
              for (var j in props?.data?.list_fields) {
                if (
                  props.data.list_fields[j].db_column == res.list[i].column_name
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
      for (var i in props?.data?.list_fields) {
        if (index == i) {
          obj = props?.data?.list_fields[i];
          if (obj.is_requried == "Y") {
            obj.is_requried = true;
          } else {
            obj.is_requried = false;
          }
          if (obj.use_in_list == "Y") {
            obj.use_in_list = true;
          } else {
            obj.use_in_list = false;
          }
          setEditIndex(index + 1);
          reset(obj);
          setFieldSelected(obj?.db_column);
          setFieldTypeSelected(obj?.control_type);
          // const data = JSON.parse(obj?.options || []);
          // if (data) {
          //   setOptions([...data]);
          // }
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
    { id: "HH:MM", value: "13:00" },
    { id: "HH:MM:SS", value: "13:00:00" },
  ];
  // console.log("editindex", editindex);

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
          {editindex == null ? "Add" : "Edit"} List Fields
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
                <Col lg={12}>
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
                          // isDisable={editindex ? true : false}
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
                {/* <Col lg={6}>
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
                          // isDisable={editindex ? true : false}
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
                </Col> */}
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

export default AddListFieldTable;
