import React, { Fragment, useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  CardHeader,
  Card,
  Input,
  Button,
  Spinner,
  FormFeedback,
  Label,
} from "reactstrap";
import { ProjectName } from "../../Components/constants/layout";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import WebService from "../../utility/WebService";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import MultiSelect from "../../Components/MultiSelect/MultiSelect";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useFormik } from "formik";
import Loader from "../../Components/Loader/Loader";

const EditRole = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  document.title = `${ProjectName} | Permission List`;
  let { id } = useParams();
  const history = useNavigate();
  const [roleList, setRoleList] = useState<any[]>([]);
  const [handleAccordion, setHandleAccordion] = useState<any>("0");
  const [error, setError] = useState<any>(false);
  const [isSubscribed, setIsSubscribed] = useState<any>(false);
  const [showLoader, setShowLoader] = useState(false)

  const [validations, setValidations] = useState<any>({
    title: Yup.string().required("Please Enter Role Name"),
  });
  var token: any = localStorage.getItem("token1");
  var UserData: any = localStorage.getItem("UserData1");
  useEffect(() => {
    if (id) {
      getDetail();
    } else {
      getlist();
    }
  }, []);


  const handleChange = () => {
    setIsSubscribed(!isSubscribed);
    UncheckAll();
  };

  const getlist = (page?: any) => {
    WebService.getAPI({
      action: `/menu-list`,
    })
      .then((res: any) => {
        if (res && res.result) {
          setRoleList(res.result);
        }
      })
      .catch((error: any) => { });
  };

  // const submit = (e: any) => {
  //     e.preventDefault();
  //     if (rolename.trim() === "") {
  //         setError(true);
  //     } else {
  //         if (id) {
  //             let data = { id: id, title: rolename, access: roleList };
  //             WebService.postAPI({
  //                 action: "/edit-role",
  //                 body: data
  //             }).then((res: any) => {
  //                 if (res && res.result) {
  //                     toast.success(res.message);
  //                     setLoading(false);
  //                     history('/role')
  //                 }
  //             }).catch((error: any) => {
  //                 setError(error);
  //                 setLoading(false);
  //             });
  //         } else {
  //             let data = { title: rolename, access: roleList };
  //             WebService.postAPI({
  //                 action: "/add-role",
  //                 body: data
  //             }).then((res: any) => {
  //                 if (res && res.result) {
  //                     toast.success(res.message);
  //                     setLoading(false);
  //                     history('/role')
  //                 }
  //             }).catch((error: any) => {
  //                 setError(error);
  //                 setLoading(false);
  //             });
  //         }
  //     }
  // };

  const getDetail = () => {
    setShowLoader(true)
    WebService.getAPI({
      action: `/role-details/` + id,
    })
      .then((res: any) => {
        if (res && res.result) {
          validation.setFieldValue("title", res.name);
          setRoleList(res.result);
        }
        setShowLoader(false)
      })
      .catch((error: any) => {
        setShowLoader(false)
       });
  };

  // const toggleAccordion = () => setHandleAccordion((prevState:any) => !prevState);

  const getValueChecked = (key: any, i1: any, i2?: any, i3?: any) => {
    if (key && i1 >= 0 && i2 >= 0 && i3 >= 0) {
      for (var i in roleList) {
        if (i == i1) {
          for (var j in roleList[i1].sub_items) {
            if (j == i2) {
              for (var k in roleList[i1].sub_items[j].sub_items2) {
                if (k == i3) {
                  roleList[i1].sub_items[j].sub_items2[k][key] =
                    !roleList[i1].sub_items[j].sub_items2[k][key];
                }
              }
            }
          }
        }
      }
      setRoleList([...roleList]);
    } else if (key && i1 >= 0 && i2 >= 0) {
      for (var i in roleList) {
        if (i == i1) {
          for (var j in roleList[i1].sub_items) {
            if (j == i2) {
              roleList[i1].sub_items[j][key] = !roleList[i1].sub_items[j][key];
            }
          }
        }
      }
      setRoleList([...roleList]);
    } else if (key && i1 >= 0) {
      for (var i in roleList) {
        if (i == i1) {
          roleList[i][key] = !roleList[i][key];
        }
      }
      setRoleList([...roleList]);
    }
  };

  const validation = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object(validations),
    onSubmit: (values, { resetForm }) => {
      if (id) {
        let data = { id: id, title: values.title, access: roleList };
        WebService.postAPI({
          action: "/edit-role",
          body: data,
          id: "role-index-submit-btn",
        })
          .then((res: any) => {
            if (window.location.pathname == "/admin-role/permission/" + id) {
              localStorage.removeItem("tenantId");
              localStorage.removeItem("api_base_url");
              localStorage.setItem("token", token);
              localStorage.setItem("UserData", UserData);
              localStorage.removeItem("token1");
              localStorage.removeItem("UserData1");
              history("/manage-tenants");
            } else if (window.location.pathname == "/sub-user-role/permission/" + id) {
              history(-1);
            } else if (res && res.result) {
              toast.success(res.message);
              resetForm();
              history("/role");
            }
          })
          .catch((error: any) => {
            setError(error);
          });
      } else {
        let data = { title: values.title, access: roleList };
        WebService.postAPI({
          action: "/add-role",
          body: data,
          id: "role-index-submit-btn",
        })
          .then((res: any) => {
            if (window.location.pathname == "/admin-role/permission") {
              localStorage.removeItem("tenantId");
              localStorage.removeItem("api_base_url");
              localStorage.setItem("token", token);
              localStorage.setItem("UserData", UserData);
              localStorage.removeItem("token1");
              localStorage.removeItem("UserData1");
              history("/manage-tenants");
            } else if (window.location.pathname == "/sub-user-role/permission") {
              history(-1);
            } else if (res && res.result) {
              toast.success(res.message);
              resetForm();
              history("/role");
            }
          })
          .catch((error: any) => {
            setError(error);
          });
      }
    },
  });

  const UncheckAll = () => {
    for (var i in roleList) {
      if (roleList[i].is_view != null) {
        roleList[i].is_view = !roleList[i].is_view;
      }
      if (roleList[i].is_delete != null) {
        roleList[i].is_delete = !roleList[i].is_delete;
      }
      if (roleList[i].is_add != null) {
        roleList[i].is_add = !roleList[i].is_add;
      }
      if (roleList[i].is_edit != null) {
        roleList[i].is_edit = !roleList[i].is_edit;
      }
      if (roleList[i].is_export != null) {
        roleList[i].is_export = !roleList[i].is_export;
      }
      if (roleList[i].is_opt_export != null) {
        roleList[i].is_opt_export = !roleList[i].is_opt_export;
      }
      if (roleList[i].sel_display_columns) {
        roleList[i].sel_display_columns = '';
      }
      if (roleList[i].sel_action_button) {
        roleList[i].sel_action_button = '';
      }
      for (var j in roleList[i].sub_items) {
        if (roleList[i].sub_items[j].is_view != null) {
          roleList[i].sub_items[j].is_view = !roleList[i].sub_items[j].is_view;
        }
        if (roleList[i].sub_items[j].is_delete != null) {
          roleList[i].sub_items[j].is_delete = !roleList[i].sub_items[j].is_delete;
        }
        if (roleList[i].sub_items[j].is_add != null) {
          roleList[i].sub_items[j].is_add = !roleList[i].sub_items[j].is_add;
        }
        if (roleList[i].sub_items[j].is_edit != null) {
          roleList[i].sub_items[j].is_edit = !roleList[i].sub_items[j].is_edit;
        }
        if (roleList[i].sub_items[j].is_export != null) {
          roleList[i].sub_items[j].is_export = !roleList[i].sub_items[j].is_export;
        }
        if (roleList[i].sub_items[j].is_opt_export != null) {
          roleList[i].sub_items[j].is_opt_export = !roleList[i].sub_items[j].is_opt_export;
        }
        if (roleList[i].sub_items[j].sel_display_columns) {
          roleList[i].sub_items[j].sel_display_columns = '';
        }
        if (roleList[i].sub_items[j].sel_action_button) {
          roleList[i].sub_items[j].sel_action_button = '';
        }
        for (var k in roleList[i].sub_items[j].sub_items2) {
          if (roleList[i].sub_items[j].sub_items2[k].is_view != null) {
            roleList[i].sub_items[j].sub_items2[k].is_view = !roleList[i].sub_items[j].sub_items2[k].is_view;
          }
          if (roleList[i].sub_items[j].sub_items2[k].is_delete != null) {
            roleList[i].sub_items[j].sub_items2[k].is_delete = !roleList[i].sub_items[j].sub_items2[k].is_delete;
          }
          if (roleList[i].sub_items[j].sub_items2[k].is_add != null) {
            roleList[i].sub_items[j].sub_items2[k].is_add = !roleList[i].sub_items[j].sub_items2[k].is_add;
          }
          if (roleList[i].sub_items[j].sub_items2[k].is_edit != null) {
            roleList[i].sub_items[j].sub_items2[k].is_edit = !roleList[i].sub_items[j].sub_items2[k].is_edit;
          }
          if (roleList[i].sub_items[j].sub_items2[k].is_export != null) {
            roleList[i].sub_items[j].sub_items2[k].is_export = !roleList[i].sub_items[j].sub_items2[k].is_export;
          }
          if (roleList[i].sub_items[j].sub_items2[k].is_opt_export != null) {
            roleList[i].sub_items[j].sub_items2[k].is_opt_export = !roleList[i].sub_items[j].sub_items2[k].is_opt_export;
          }
          if (roleList[i].sub_items[j].sub_items2[k].sel_display_columns) {
            roleList[i].sub_items[j].sub_items2[k].sel_display_columns = '';
          }
          if (roleList[i].sub_items[j].sub_items2[k].sel_action_button) {
            roleList[i].sub_items[j].sub_items2[k].sel_action_button = '';
          }

        }
      }
    }
    setRoleList([...roleList])
  }

  return (
    <>
 <Loader show={showLoader} />
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Permission List"
            pageTitle="Permission List"
            location={"/role"}
          />
          <Row>
            <Col lg={12}>
              <Card id="leadsList">
                <CardHeader className="border-0">
                  <form
                    onSubmit={(e) => {
                      validation.handleSubmit();
                      e.preventDefault();
                      return false;
                    }}
                    className="d-flex flex-column justify-content-end h-100">
                    <Row className="mb-4">
                      <Col lg={3}>
                        <Input
                          name="title"
                          id="customername-field"
                          className="form-control"
                          placeholder="Enter Role Name"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.title || ""}
                          invalid={
                            validation.touched.title && validation.errors.title
                              ? true
                              : false
                          }
                        />
                        {validation.touched.title && validation.errors.title ? (
                          <FormFeedback type="invalid">
                            {validation.errors.title}
                          </FormFeedback>
                        ) : null}
                      </Col>
                      <Col lg={3}>
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            name="title"
                            id="customername-field-new"
                            onChange={handleChange}
                          />
                          <Label className="form-check-label" htmlFor="">
                          {isSubscribed ? 'UnCheck All' : 'Check All'}
                          </Label>
                        </div>
                        {/* <Input
                          name="title"
                          id="customername-field-new"
                          // className="form-control"
                          placeholder="Enter Role Name"
                          value={isSubscribed}
                          onChange={handleChange}
                          className="form-check-input"
                        // onBlur={validation.handleBlur}
                        // value={validation.values.title || ""}
                        // invalid={
                        //   validation.touched.title && validation.errors.title
                        //     ? true
                        //     : false
                        // }
                        />
                        <label htmlFor="">{isSubscribed ? 'UnCheck All' : 'Check All'}</label> */}
                      </Col>
                    </Row>
                    <div className="px-3 mb-3">
                      <div className="table-responsive table-card">
                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Permissions List</th>
                              <th scope="col">Create</th>
                              <th scope="col">Read</th>
                              <th scope="col">Update</th>
                              <th scope="col">Delete</th>
                              <th scope="col">Export</th>
                              <th scope="col">Export With OTP</th>
                              <th scope="col">Table Columns</th>
                              <th scope="col">Action Button</th>
                            </tr>
                          </thead>
                          <tbody>
                            {roleList &&
                              roleList.length > 0 &&
                              roleList.map((item: any, index) => {
                                let temp = handleAccordion.split("_");
                                // console.log('item', item)
                                return (
                                  <>
                                    {item.sub_items &&
                                      item.sub_items.length > 0 ? (
                                      <Fragment key={index}>
                                        <tr style={{ background: "#f7f7f7" }}>
                                          <td colSpan={1}>
                                            <Link
                                              to="#"
                                              onClick={(e) => {
                                                setHandleAccordion(`${index}`);
                                              }}>
                                              <i
                                                className={
                                                  handleAccordion == `${index}`
                                                    ? "ri-subtract-line align-bottom me-2"
                                                    : "ri-add-line align-bottom me-2"
                                                }></i>
                                              {item.label}
                                            </Link>
                                          </td>
                                          <td>
                                            {" "}
                                            {item.is_add != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_add}
                                                id="formCheck1"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_add",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item.is_view != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_view}
                                                id="formCheck2"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_view",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item.is_edit != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_edit}
                                                id="formCheck3"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_edit",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item.is_delete != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_delete}
                                                id="formCheck4"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_delete",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item.is_export != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_export}
                                                id="formCheck5"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_export",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item.is_opt_export != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_opt_export}
                                                id="formCheck6"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_opt_export",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>

                                          <td>
                                            {" "}
                                            {item?.display_columns &&
                                              item.display_columns.length >
                                              0 && (
                                                <div>
                                                  <Controller
                                                    control={control}
                                                    name="columns"
                                                    render={({ field }) => (
                                                      <MultiSelect
                                                        selectLimit={
                                                          item.display_columns
                                                            .length
                                                        }
                                                        options={
                                                          item.display_columns
                                                        }
                                                        selected={
                                                          item.sel_display_columns
                                                            ? item.sel_display_columns
                                                            : []
                                                        }
                                                        placeholder="Select Columns"
                                                        onChange={(
                                                          data: any
                                                        ) => {
                                                          roleList[
                                                            index
                                                          ].sel_display_columns =
                                                            data.map(
                                                              (item: any) => {
                                                                field.onChange(
                                                                  item.id
                                                                );
                                                                return item.id;
                                                              }
                                                            );
                                                          setRoleList([
                                                            ...roleList,
                                                          ]);
                                                        }}
                                                      />
                                                    )}
                                                  />
                                                </div>
                                              )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item?.action_button &&
                                              item.action_button.length > 0 && (
                                                <div>
                                                  <Controller
                                                    control={control}
                                                    name="actionbtn"
                                                    render={({ field }) => (
                                                      <MultiSelect
                                                        selectLimit={
                                                          item.action_button
                                                            .length
                                                        }
                                                        options={
                                                          item.action_button
                                                        }
                                                        selected={
                                                          item.sel_action_button
                                                            ? item.sel_action_button
                                                            : []
                                                        }
                                                        placeholder="Select Action Btn"
                                                        onChange={(
                                                          data: any
                                                        ) => {
                                                          roleList[
                                                            index
                                                          ].sel_action_button =
                                                            data.map(
                                                              (item: any) => {
                                                                field.onChange(
                                                                  item.id
                                                                );
                                                                return item.id;
                                                              }
                                                            );
                                                          setRoleList([
                                                            ...roleList,
                                                          ]);
                                                        }}
                                                      />
                                                    )}
                                                  />
                                                </div>
                                              )}
                                          </td>
                                        </tr>
                                        {temp.length > 0 &&
                                          temp[0] == index &&
                                          item.sub_items.map(
                                            (ite: any, i: number) => {
                                              return (
                                                <>
                                                  {ite.sub_items2 &&
                                                    ite.sub_items2.length > 0 ? (
                                                    <Fragment key={i}>
                                                      <tr
                                                        style={{
                                                          background: "#f7f7f7",
                                                        }}>
                                                        <td colSpan={1}>
                                                          <Link
                                                            to="#"
                                                            onClick={(e) => {
                                                              setHandleAccordion(
                                                                `${index}_${i}`
                                                              );
                                                            }}>
                                                            <i
                                                              className={
                                                                handleAccordion ==
                                                                  `${index}_${i}`
                                                                  ? "ri-subtract-line align-bottom me-2"
                                                                  : "ri-add-line align-bottom me-2"
                                                              }></i>
                                                            {ite.label}
                                                          </Link>
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_add !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_add
                                                                }
                                                                id="formCheck1"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_add",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_view !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_view
                                                                }
                                                                id="formCheck2"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_view",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_edit !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_edit
                                                                }
                                                                id="formCheck3"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_edit",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_delete !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_delete
                                                                }
                                                                id="formCheck4"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_delete",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_export !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_export
                                                                }
                                                                id="formCheck5"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_export",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_opt_export !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_opt_export
                                                                }
                                                                id="formCheck6"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_opt_export",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite?.display_columns &&
                                                            ite.display_columns
                                                              .length > 0 && (
                                                              <div>
                                                                <Controller
                                                                  control={
                                                                    control
                                                                  }
                                                                  name="columns"
                                                                  render={({
                                                                    field,
                                                                  }) => (
                                                                    <MultiSelect
                                                                      selectLimit={
                                                                        ite
                                                                          .display_columns
                                                                          .length
                                                                      }
                                                                      options={
                                                                        ite.display_columns
                                                                      }
                                                                      selected={
                                                                        ite.sel_display_columns
                                                                          ? ite.sel_display_columns
                                                                          : []
                                                                      }
                                                                      placeholder="Select Columns"
                                                                      onChange={(
                                                                        data: any
                                                                      ) => {
                                                                        roleList[
                                                                          index
                                                                        ].sub_items[
                                                                          i
                                                                        ].sel_display_columns =
                                                                          data.map(
                                                                            (
                                                                              item: any
                                                                            ) => {
                                                                              field.onChange(
                                                                                item.id
                                                                              );
                                                                              return item.id;
                                                                            }
                                                                          );
                                                                        setRoleList(
                                                                          [
                                                                            ...roleList,
                                                                          ]
                                                                        );
                                                                      }}
                                                                    />
                                                                  )}
                                                                />
                                                              </div>
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite?.action_button &&
                                                            ite.action_button
                                                              .length > 0 && (
                                                              <div>
                                                                <Controller
                                                                  control={
                                                                    control
                                                                  }
                                                                  name="actionbtn"
                                                                  render={({
                                                                    field,
                                                                  }) => (
                                                                    <MultiSelect
                                                                      selectLimit={
                                                                        ite
                                                                          .action_button
                                                                          .length
                                                                      }
                                                                      options={
                                                                        ite.action_button
                                                                      }
                                                                      selected={
                                                                        ite.sel_action_button
                                                                          ? ite.sel_action_button
                                                                          : []
                                                                      }
                                                                      placeholder="Select Action Btn"
                                                                      onChange={(
                                                                        data: any
                                                                      ) => {
                                                                        roleList[
                                                                          index
                                                                        ].sub_items[
                                                                          i
                                                                        ].sel_action_button =
                                                                          data.map(
                                                                            (
                                                                              item: any
                                                                            ) => {
                                                                              field.onChange(
                                                                                item.id
                                                                              );
                                                                              return item.id;
                                                                            }
                                                                          );
                                                                        setRoleList(
                                                                          [
                                                                            ...roleList,
                                                                          ]
                                                                        );
                                                                      }}
                                                                    />
                                                                  )}
                                                                />
                                                              </div>
                                                            )}
                                                        </td>
                                                      </tr>
                                                      {temp.length >= 1 &&
                                                        temp[1] == i &&
                                                        ite.sub_items2.map(
                                                          (
                                                            res: any,
                                                            j: number
                                                          ) => {
                                                            return (
                                                              <>
                                                                {
                                                                  <Fragment
                                                                    key={j}>
                                                                    <tr>
                                                                      <td>
                                                                        {
                                                                          res.label
                                                                        }
                                                                      </td>
                                                                      <td>
                                                                        {" "}
                                                                        {res.is_add !=
                                                                          null && (
                                                                            <Input
                                                                              className="form-check-input"
                                                                              type="checkbox"
                                                                              checked={
                                                                                res.is_add
                                                                              }
                                                                              id="formCheck1"
                                                                              onChange={() =>
                                                                                getValueChecked(
                                                                                  "is_add",
                                                                                  index,
                                                                                  i,
                                                                                  j
                                                                                )
                                                                              }
                                                                            />
                                                                          )}
                                                                      </td>
                                                                      <td>
                                                                        {" "}
                                                                        {res.is_view !=
                                                                          null && (
                                                                            <Input
                                                                              className="form-check-input"
                                                                              type="checkbox"
                                                                              checked={
                                                                                res.is_view
                                                                              }
                                                                              id="formCheck2"
                                                                              onChange={() =>
                                                                                getValueChecked(
                                                                                  "is_view",
                                                                                  index,
                                                                                  i,
                                                                                  j
                                                                                )
                                                                              }
                                                                            />
                                                                          )}
                                                                      </td>
                                                                      <td>
                                                                        {" "}
                                                                        {res.is_edit !=
                                                                          null && (
                                                                            <Input
                                                                              className="form-check-input"
                                                                              type="checkbox"
                                                                              checked={
                                                                                res.is_edit
                                                                              }
                                                                              id="formCheck3"
                                                                              onChange={() =>
                                                                                getValueChecked(
                                                                                  "is_edit",
                                                                                  index,
                                                                                  i,
                                                                                  j
                                                                                )
                                                                              }
                                                                            />
                                                                          )}
                                                                      </td>
                                                                      <td>
                                                                        {" "}
                                                                        {res.is_delete !=
                                                                          null && (
                                                                            <Input
                                                                              className="form-check-input"
                                                                              type="checkbox"
                                                                              checked={
                                                                                res.is_delete
                                                                              }
                                                                              id="formCheck4"
                                                                              onChange={() =>
                                                                                getValueChecked(
                                                                                  "is_delete",
                                                                                  index,
                                                                                  i,
                                                                                  j
                                                                                )
                                                                              }
                                                                            />
                                                                          )}
                                                                      </td>
                                                                      <td>
                                                                        {" "}
                                                                        {res.is_export !=
                                                                          null && (
                                                                            <Input
                                                                              className="form-check-input"
                                                                              type="checkbox"
                                                                              checked={
                                                                                res.is_export
                                                                              }
                                                                              id="formCheck5"
                                                                              onChange={() =>
                                                                                getValueChecked(
                                                                                  "is_export",
                                                                                  index,
                                                                                  i,
                                                                                  j
                                                                                )
                                                                              }
                                                                            />
                                                                          )}
                                                                      </td>
                                                                      <td>
                                                                        {" "}
                                                                        {res.is_opt_export !=
                                                                          null && (
                                                                            <Input
                                                                              className="form-check-input"
                                                                              type="checkbox"
                                                                              checked={
                                                                                res.is_opt_export
                                                                              }
                                                                              id="formCheck6"
                                                                              onChange={() =>
                                                                                getValueChecked(
                                                                                  "is_opt_export",
                                                                                  index,
                                                                                  i,
                                                                                  j
                                                                                )
                                                                              }
                                                                            />
                                                                          )}
                                                                      </td>
                                                                      <td>
                                                                        {" "}
                                                                        {res?.display_columns &&
                                                                          res
                                                                            .display_columns
                                                                            .length >
                                                                          0 && (
                                                                            <div>
                                                                              <Controller
                                                                                control={
                                                                                  control
                                                                                }
                                                                                name="columns"
                                                                                render={({
                                                                                  field,
                                                                                }) => (
                                                                                  <MultiSelect
                                                                                    selectLimit={
                                                                                      res
                                                                                        .display_columns
                                                                                        .length
                                                                                    }
                                                                                    options={
                                                                                      res.display_columns
                                                                                    }
                                                                                    selected={
                                                                                      res.sel_display_columns
                                                                                        ? res.sel_display_columns
                                                                                        : []
                                                                                    }
                                                                                    placeholder="Select Columns"
                                                                                    onChange={(
                                                                                      data: any
                                                                                    ) => {
                                                                                      roleList[
                                                                                        index
                                                                                      ].sub_items[
                                                                                        i
                                                                                      ].sub_items2[
                                                                                        j
                                                                                      ].sel_display_columns =
                                                                                        data.map(
                                                                                          (
                                                                                            item: any
                                                                                          ) => {
                                                                                            field.onChange(
                                                                                              item.id
                                                                                            );
                                                                                            return item.id;
                                                                                          }
                                                                                        );
                                                                                      setRoleList(
                                                                                        [
                                                                                          ...roleList,
                                                                                        ]
                                                                                      );
                                                                                    }}
                                                                                  />
                                                                                )}
                                                                              />
                                                                            </div>
                                                                          )}
                                                                      </td>
                                                                      <td>
                                                                        {" "}
                                                                        {res?.action_button &&
                                                                          res
                                                                            .action_button
                                                                            .length >
                                                                          0 && (
                                                                            <div>
                                                                              <Controller
                                                                                control={
                                                                                  control
                                                                                }
                                                                                name="actionbtn"
                                                                                render={({
                                                                                  field,
                                                                                }) => (
                                                                                  <MultiSelect
                                                                                    selectLimit={
                                                                                      res
                                                                                        .action_button
                                                                                        .length
                                                                                    }
                                                                                    options={
                                                                                      res.action_button
                                                                                    }
                                                                                    selected={
                                                                                      res.sel_action_button
                                                                                        ? res.sel_action_button
                                                                                        : []
                                                                                    }
                                                                                    placeholder="Select Action Btn"
                                                                                    onChange={(
                                                                                      data: any
                                                                                    ) => {
                                                                                      roleList[
                                                                                        index
                                                                                      ].sub_items[
                                                                                        i
                                                                                      ].sub_items2[
                                                                                        j
                                                                                      ].sel_action_button =
                                                                                        data.map(
                                                                                          (
                                                                                            item: any
                                                                                          ) => {
                                                                                            field.onChange(
                                                                                              item.id
                                                                                            );
                                                                                            return item.id;
                                                                                          }
                                                                                        );
                                                                                      setRoleList(
                                                                                        [
                                                                                          ...roleList,
                                                                                        ]
                                                                                      );
                                                                                    }}
                                                                                  />
                                                                                )}
                                                                              />
                                                                            </div>
                                                                          )}
                                                                      </td>
                                                                    </tr>
                                                                  </Fragment>
                                                                }
                                                              </>
                                                            );
                                                          }
                                                        )}
                                                    </Fragment>
                                                  ) : (
                                                    <Fragment key={i}>
                                                      <tr>
                                                        <td>{ite.label}</td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_add !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_add
                                                                }
                                                                id="formCheck1"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_add",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_view !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_view
                                                                }
                                                                id="formCheck2"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_view",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_edit !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_edit
                                                                }
                                                                id="formCheck3"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_edit",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_delete !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_delete
                                                                }
                                                                id="formCheck4"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_delete",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_export !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_export
                                                                }
                                                                id="formCheck5"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_export",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite.is_opt_export !=
                                                            null && (
                                                              <Input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                checked={
                                                                  ite.is_opt_export
                                                                }
                                                                id="formCheck6"
                                                                onChange={() =>
                                                                  getValueChecked(
                                                                    "is_opt_export",
                                                                    index,
                                                                    i
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite?.display_columns &&
                                                            ite.display_columns
                                                              .length > 0 && (
                                                              <div>
                                                                <Controller
                                                                  control={
                                                                    control
                                                                  }
                                                                  name="columns"
                                                                  render={({
                                                                    field,
                                                                  }) => (
                                                                    <MultiSelect
                                                                      selectLimit={
                                                                        ite
                                                                          .display_columns
                                                                          .length
                                                                      }
                                                                      options={
                                                                        ite.display_columns
                                                                      }
                                                                      selected={
                                                                        ite.sel_display_columns
                                                                          ? ite.sel_display_columns
                                                                          : []
                                                                      }
                                                                      placeholder="Select Columns"
                                                                      onChange={(
                                                                        data: any
                                                                      ) => {
                                                                        roleList[
                                                                          index
                                                                        ].sub_items[
                                                                          i
                                                                        ].sel_display_columns =
                                                                          data.map(
                                                                            (
                                                                              item: any
                                                                            ) => {
                                                                              field.onChange(
                                                                                item.id
                                                                              );
                                                                              return item.id;
                                                                            }
                                                                          );
                                                                        setRoleList(
                                                                          [
                                                                            ...roleList,
                                                                          ]
                                                                        );
                                                                      }}
                                                                    />
                                                                  )}
                                                                />
                                                              </div>
                                                            )}
                                                        </td>
                                                        <td>
                                                          {" "}
                                                          {ite?.action_button &&
                                                            ite.action_button
                                                              .length > 0 && (
                                                              <div>
                                                                <Controller
                                                                  control={
                                                                    control
                                                                  }
                                                                  name="actionbtn"
                                                                  render={({
                                                                    field,
                                                                  }) => (
                                                                    <MultiSelect
                                                                      selectLimit={
                                                                        ite
                                                                          .action_button
                                                                          .length
                                                                      }
                                                                      options={
                                                                        ite.action_button
                                                                      }
                                                                      selected={
                                                                        ite.sel_action_button
                                                                          ? ite.sel_action_button
                                                                          : []
                                                                      }
                                                                      placeholder="Select Action Btn"
                                                                      onChange={(
                                                                        data: any
                                                                      ) => {
                                                                        roleList[
                                                                          index
                                                                        ].sub_items[
                                                                          i
                                                                        ].sel_action_button =
                                                                          data.map(
                                                                            (
                                                                              item: any
                                                                            ) => {
                                                                              field.onChange(
                                                                                item.id
                                                                              );
                                                                              return item.id;
                                                                            }
                                                                          );
                                                                        setRoleList(
                                                                          [
                                                                            ...roleList,
                                                                          ]
                                                                        );
                                                                      }}
                                                                    />
                                                                  )}
                                                                />
                                                              </div>
                                                            )}
                                                        </td>
                                                      </tr>
                                                    </Fragment>
                                                  )}
                                                </>
                                              );
                                            }
                                          )}
                                      </Fragment>
                                    ) : (
                                      <Fragment key={index}>
                                        <tr>
                                          <td>{item.label}</td>
                                          <td>
                                            {" "}
                                            {item.is_add != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_add}
                                                id="formCheck1"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_add",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item.is_view != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_view}
                                                id="formCheck2"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_view",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item.is_edit != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_edit}
                                                id="formCheck3"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_edit",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item.is_delete != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_delete}
                                                id="formCheck4"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_delete",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item.is_export != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_export}
                                                id="formCheck5"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_export",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item.is_opt_export != null && (
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={item.is_opt_export}
                                                id="formCheck6"
                                                onChange={() =>
                                                  getValueChecked(
                                                    "is_opt_export",
                                                    index
                                                  )
                                                }
                                              />
                                            )}
                                          </td>
                                          <td>
                                            {item?.display_columns &&
                                              item.display_columns.length >
                                              0 && (
                                                <div>
                                                  <Controller
                                                    control={control}
                                                    name="columns"
                                                    render={({ field }) => (
                                                      <MultiSelect
                                                        selectLimit={
                                                          item.display_columns
                                                            .length
                                                        }
                                                        options={
                                                          item.display_columns
                                                        }
                                                        selected={
                                                          item.sel_display_columns
                                                            ? item.sel_display_columns
                                                            : []
                                                        }
                                                        placeholder="Select Columns"
                                                        onChange={(
                                                          data: any
                                                        ) => {
                                                          roleList[
                                                            index
                                                          ].sel_display_columns =
                                                            data.map(
                                                              (item: any) => {
                                                                field.onChange(
                                                                  item.id
                                                                );
                                                                return item.id;
                                                              }
                                                            );
                                                          setRoleList([
                                                            ...roleList,
                                                          ]);
                                                        }}
                                                      />
                                                    )}
                                                  />
                                                </div>
                                              )}
                                          </td>
                                          <td>
                                            {" "}
                                            {item?.action_button &&
                                              item.action_button.length > 0 && (
                                                <div>
                                                  <Controller
                                                    control={control}
                                                    name="actionbtn"
                                                    render={({ field }) => (
                                                      <MultiSelect
                                                        selectLimit={
                                                          item.action_button
                                                            .length
                                                        }
                                                        options={
                                                          item.action_button
                                                        }
                                                        selected={
                                                          item.sel_action_button
                                                            ? item.sel_action_button
                                                            : []
                                                        }
                                                        placeholder="Select Action Btn"
                                                        onChange={(
                                                          data: any
                                                        ) => {
                                                          roleList[
                                                            index
                                                          ].sel_action_button =
                                                            data.map(
                                                              (item: any) => {
                                                                field.onChange(
                                                                  item.id
                                                                );
                                                                return item.id;
                                                              }
                                                            );
                                                          setRoleList([
                                                            ...roleList,
                                                          ]);
                                                        }}
                                                      />
                                                    )}
                                                  />
                                                </div>
                                              )}
                                          </td>
                                        </tr>
                                      </Fragment>
                                    )}
                                  </>
                                );
                              })}
                          </tbody>
                        </table>
                        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                          <Button
                            type="submit"
                            id="role-index-submit-btn"
                            disabled={error ? true : false}
                            color="primary"
                            className="btn-brand-theme">
                            Submit
                          </Button>
                          {/* <button type="button" className="btn btn-light">
                                                        Cancel
                                                    </button> */}
                        </div>
                        {/* </form> */}
                      </div>
                    </div>
                  </form>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
    </>
  );
};

export default EditRole;
