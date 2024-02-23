import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Row,
  Col,
  Button,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import WebService from "../../utility/WebService";
import Grid, {
  GridColumn,
  GridHeader,
  GridRow,
} from "../../Components/Grid/Grid";
import CustomDropdown from "../../Components/Select/CustomDropdown";

interface propData {
  show: boolean;
  onCloseClick: any;
  formData: any;
  setFormData: any;
  getlist: any;
  Title: any;
}
const headers: GridHeader[] = [
  {
    title: "Column Name",
    classTitle: "text-start",
  },
  {
    title: "Data Type",
    classTitle: "text-start",
  },
  {
    title: "Data Type Length",
    classTitle: "text-start",
  },
  {
    title: "Display Label",
    classTitle: "text-start",
  },
  {
    title: "Action",
    class: "text-center",
  },
];

const EditManageMasterTable = (props: propData) => {
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
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);
  const [showloader, setShowLoader] = useState(false);
  const [formData, setFormData] = useState<any>();
  const [totalCount, setTotalCount] = useState<any>(0);
  const [rows, setRows] = useState<GridRow[]>([]);
  const [type, setType] = useState<any>([]);

  useEffect(() => {
    getlist();
  }, [props.show]);

  const getlist = () => {
    setShowLoader(true);
    let rows: GridRow[] = [];
    const res: any = {};
    let obj: any = {};
    obj.table_name = props.Title;
    obj.is_edit = "ALL";
    WebService.getAPI({
      action: `/cutom-coloumn-list`,
      body: obj,
    })
      .then((res: any) => {
        if (res && res.list) {
          setTotalCount(res.count);
          setShowLoader(false);
          for (var i in res.list) {
            let columns: GridColumn[] = [];
            // columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
            columns.push({ value: res.list[i].column_name });
            columns.push({ value: res.list[i].new_data_type });
            columns.push({
              value:
                res.list[i].new_data_type == "Text"
                  ? res.list[i].data_type_length
                  : "",
            });
            columns.push({ value: res.list[i].dispaly_label });
            columns.push({ value: actionList(res.list[i].id, res.list[i]) });
            rows.push({ data: columns });
          }
          setRows([...rows]);
        }
      })
      .catch((error: any) => {
        setShowLoader(false);
      });
  };

  const actionList = (id: any, data: any) => {
    return (
      <>
        {data.is_edit == true && (
          <>
            <a title="Edit" onClick={() => onClickEdit(data)}>
              <i className="ri-edit-box-line align-middle me-1"></i>
            </a>
            <a title="Delete" onClick={() => onDelete(id)}>
              <i className="ri-delete-bin-2-line align-middle me-1 text-danger"></i>
            </a>
          </>
        )}
      </>
    );
  };

  const onClickEdit = (data: any) => {
    reset(data);
    setType(data.new_data_type);
  };

  const onDelete = (id: any) => {
    WebService.deleteAPI({
      action: `/delete-cutom-coloumn/` + id,
      id: "role-list-submit-btn",
    })
      .then((res: any) => {
        if (res) {
          toast.success(res.message);
          getlist();
        }
      })
      .catch((error: any) => {});
  };

  const onSave = (data: any) => {
    data.table_name = props.Title;
    setLoading(true);
    WebService.postAPI({
      action: data.uuid ? `/edit-cutom-coloumn` : `/add-cutom-coloumn`,
      body: data,
    })
      .then((res: any) => {
        toast.success(res.message);
        reset();
        setType("resetsawin");
        getlist();
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const onCloseBlade = () => {
    // validation.resetForm();
    props.onCloseClick();
  };

  const dataType: any = [
    { id: "Text", value: "Text" },
    { id: "Select", value: "Select" },
    { id: "MultiSelect", value: "MultiSelect" },
    { id: "Password", value: "Password" },
    { id: "Attachment", value: "Attachment" },
    { id: "Longtext", value: "Longtext" },
    { id: "TextEditor", value: "TextEditor" },
    { id: "Checkbox", value: "Checkbox" },
    { id: "Date", value: "Date" },
    { id: "DateTime", value: "DateTime" },
    { id: "Number", value: "Number" },
    { id: "Decimal", value: "Decimal" },
    { id: "Slider", value: "Slider" },
    { id: "ColorPicker", value: "ColorPicker" },
  ];

  const resetForm = () => {
    reset();
    setValue("uuid", "");
    setValue("column_name", "");
    setValue("dispaly_label", "");
    setType("resetsawin");
  };

  return (
    <Offcanvas
      direction="end"
      isOpen={props.show}
      id="offcanvasExample"
      toggle={props.onCloseClick}
      className="size-md">
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
        {props.Title + " " + "Table"}
      </OffcanvasHeader>
      <form
        onSubmit={handleSubmit(onSave)}
        className="d-flex flex-column justify-content-end h-100">
        {/* <SimpleBar autoHide={false} style={{ maxHeight: "720px" }}> */}
        <OffcanvasBody>
          <Row>
            <div className="mb-2 display-none">
              <Label htmlFor="name-field" className="form-label">
                Column Name<span className="text-danger">*</span>
              </Label>
              <input
                type="text"
                className="form-control"
                placeholder="Column Name"
                autoComplete="off"
                {...register("uuid")}
              />
            </div>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">
                  Column Name<span className="text-danger">*</span>
                </Label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Column Name"
                  autoComplete="off"
                  {...register("column_name", {
                    required: true,
                  })}
                />
                <div>
                  {errors.column_name && (
                    <span className="text-danger fs-12">
                      {" "}
                      Please Enter Column Name.
                    </span>
                  )}
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">
                  Display Label<span className="text-danger">*</span>
                </Label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Display Label"
                  autoComplete="off"
                  {...register("dispaly_label", {
                    required: true,
                  })}
                />
                <div>
                  {errors.dispaly_label && (
                    <span className="text-danger fs-12">
                      {" "}
                      Please Enter Display Label.
                    </span>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">
                  Data Type <span className="text-danger">*</span>
                </Label>
                <Controller
                  control={control}
                  name="data_type"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <CustomDropdown
                      options={dataType}
                      selected={type}
                      isSearchable={true}
                      placeholder="Select Data Type"
                      onChange={(data: any) => {
                        field.onChange(data.id);
                        setType(data.id);
                      }}
                    />
                  )}
                />
                <div>
                  {errors.data_type && (
                    <span className="text-danger fs-12">
                      Please Select Data Type
                    </span>
                  )}
                </div>
              </div>
            </Col>
            {watchAllFields.new_data_type == "Text" ? (
              <Col lg={6}>
                <div className="mb-2">
                  <Label htmlFor="name-field" className="form-label">
                    Data Type Length<span className="text-danger">*</span>
                  </Label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Data Type Length"
                    autoComplete="off"
                    {...register("data_type_length", {
                      required: true,
                    })}
                  />
                  <div>
                    {errors.data_type_length && (
                      <span className="text-danger fs-12">
                        {" "}
                        Please Enter Data Type Length.
                      </span>
                    )}
                  </div>
                </div>
              </Col>
            ) : (
              " "
            )}
          </Row>
          <Row>
            <Col lg={10}>
              <div className="text-end mt-2">
                <Button
                  type="button"
                  id="team-submit-btn"
                  disabled={error ? true : false}
                  color="primary"
                  className="btn-danger"
                  onClick={() => resetForm()}>
                  Reset Form
                </Button>
              </div>
            </Col>
            <Col lg={2}>
              <div className="text-end mt-2">
                <Button
                  type="submit"
                  id="team-submit-btn"
                  disabled={error ? true : false}
                  color="primary"
                  className="btn-brand-theme">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={12}>
              <>
                <div className="px-3 mt-3">
                  <div className="table-card master-table-height">
                    <Grid
                      headers={headers}
                      rows={rows}
                      count={totalCount}
                      // perPageItem={5}
                      errorMessage={"No Data Found"}
                      ShowLoader={showloader}
                      onPageChange={onchange}
                    />
                  </div>
                </div>
              </>
            </Col>
          </Row>
        </OffcanvasBody>
      </form>

      {/* </SimpleBar> */}
      <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => onCloseBlade()}>
          Cancel
        </button>
      </div>
    </Offcanvas>
  );
};

export default EditManageMasterTable;
