import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Row, Col, FormFeedback, Button, Spinner, UncontrolledTooltip } from "reactstrap";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import WebService from "../../../utility/WebService";
import HelperService from "../../../utility/HelperService";
import Select from "react-select";

interface propData {
    show: boolean;
    onCloseClick: any;
    formData: any;
    setFormData: any;
    getlist: any;
    substageId?: any;
};

const AddEditChecklist = (props: propData) => {

    const [error, setError] = useState<any>(false);
    const [langaugedata, setLanguageData] = useState<any>([]);
    const [thirdpartylist, setThirdpartyList] = useState<any>([]);
    const [validations, setValidations] = useState<any>({
        view_checklist_to: Yup.array().required("Please Select option"),
        thirdparty_role_id: Yup.array().required("Please Select option"),
    });

    useEffect(() => {
        props.show && getlanguagelist();
    }, [props.show, props.formData?.language_data]);

    useEffect(() => {
        getthirdpartylist();
    }, []);

    useEffect(() => {
        if (props.formData?.checklistId) {
            if (props.formData?.view_checklist_to) {
                var arr = props.formData?.view_checklist_to;
                props.formData.view_checklist_to = [];
                for (var i in arr) {
                    for (var j in checklistdata) {
                        if (checklistdata[j].value == arr[i].value) {
                            props.formData?.view_checklist_to.push(
                                { value: arr[i].value, label: checklistdata[j].label })
                        }

                    }
                }
            }
            if (props.formData?.thirdparty_role_id) {
                var arr = props.formData?.thirdparty_role_id;
                props.formData.thirdparty_role_id = [];
                for (var i in arr) {
                    for (var j in thirdpartylist) {
                        if (thirdpartylist[j].value == arr[i].value) {
                            props.formData?.thirdparty_role_id.push(
                                { value: arr[i].value, label: thirdpartylist[j].label })
                        }

                    }
                }
            }
            validation.setFieldValue("view_checklist_to", props.formData?.view_checklist_to);
            validation.setFieldValue("thirdparty_role_id", props.formData?.thirdparty_role_id);
        }
    }, [props.formData]);

    const validation = useFormik({
        initialValues: {
            language_data: [],
            view_checklist_to: [],
            thirdparty_role_id: [],
        },
        validationSchema: Yup.object(validations),

        onSubmit: (values, { resetForm }) => {
            // console.log(values, "values")
            let isError: boolean = false;
            setLanguageData(langaugedata.map((item: any) => {
                if (!item.title) {
                    isError = true;
                    item.isError = 1;
                    return { ...item }
                } else {
                    return item
                }
            }));
            if (isError) {
                return;
            }
            const localdata = JSON.parse(localStorage.getItem("UserData") || "");
            if (props.formData?.checklistId) {
                let finaltemp: any = values.thirdparty_role_id;
                if (values.thirdparty_role_id && values.thirdparty_role_id.length > 0) {
                    let temp: any = [];
                    for (var i in finaltemp) {
                        temp.push(finaltemp[i].value)
                    }
                    finaltemp = [];
                    finaltemp = temp.toString()
                }
                let finaltemp2: any = values.view_checklist_to;
                if (values.view_checklist_to && values.view_checklist_to.length > 0) {
                    let temp2: any = [];

                    for (var i in finaltemp2) {
                        temp2.push(finaltemp2[i].value)
                    }
                    finaltemp2 = [];
                    finaltemp2 = temp2.toString()
                }
                let data = {
                    "checklistId": props.formData.checklistId,
                    "language_data": langaugedata,
                    "userid": localdata.userId,
                    "substageId": props.substageId,
                    "view_checklist_to": finaltemp,
                    "thirdparty_role_id": finaltemp2
                };
                WebService.postAPI({
                    action: "/edit-workflow-checklist",
                    body: data,
                    id: "addedit-workflow-checklist-submit-btn",
                }).then((res: any) => {
                    if (res && res.result) {
                        toast.success(res.message);
                        props.onCloseClick();
                        resetForm();
                        props.setFormData();
                        props.getlist(1);
                    }
                }).catch((error: any) => {
                    setError(error);
                });
            } else {

                let finaltemp: any = values.view_checklist_to;
                if (values.view_checklist_to && values.view_checklist_to.length > 0) {
                    let temp2: any = [];

                    for (var i in finaltemp) {
                        temp2.push(finaltemp[i].value)
                    }
                    finaltemp = [];
                    finaltemp = temp2.toString()
                }

                let finaltemp2: any = values.thirdparty_role_id;
                if (values.thirdparty_role_id && values.thirdparty_role_id.length > 0) {
                    let temp: any = [];
                    for (var i in finaltemp2) {
                        temp.push(finaltemp2[i].value)
                    }
                    finaltemp2 = [];
                    finaltemp2 = temp.toString()
                }
                let data = {
                    "language_data": langaugedata,
                    "userid": localdata.userId,
                    "substageId": props.substageId,
                    "type": "default",
                    "view_checklist_to": finaltemp,
                    "thirdparty_role_id": finaltemp2
                };
                WebService.postAPI({
                    action: "/add-workflow-checklist",
                    body: data,
                    id: "addedit-workflow-checklist-submit-btn",
                }).then((res: any) => {
                    if (res && res.result) {
                        toast.success(res.message);
                        props.onCloseClick();
                        resetForm();
                        props.setFormData();
                        props.getlist(1);
                    }
                }).catch((error: any) => {
                    setError(error);
                });
            }
        },
    });

    const onCloseBlade = () => {
        validation.resetForm();
        props.onCloseClick();
    };

    const getlanguagelist = (page?: any) => {
        WebService.getAPI({
            action: `/language-list`,
        }).then((res: any) => {
            if (res && res.result) {
                for (let i in res.result) {
                    res.result[i][`title`] = "";
                    res.result[i][`isError`] = 0;
                }
                if (props.formData?.language_data && props.formData?.language_data.length > 0) {
                    for (let j in props.formData?.language_data) {
                        res.result[j].title = props.formData?.language_data[j].title;

                    }
                }
                setLanguageData(res.result);
            }
        }).catch((error: any) => {

        });
    };

    const handleLanguageFileds = () => {
        setLanguageData(langaugedata.map((item: any) => {
            if (!item.title) {
                item.isError = 1;
                return { ...item }
            } else {
                return item
            }
        }));
    };

    const getthirdpartylist = (page?: any) => {
        WebService.getAPI({
            action: `/thirdparty-list`,
        }).then((res: any) => {
            if (res && res.list) {
                let arr: any = [];
                for (var i in res.list) {
                    arr.push({ value: res.list[i].roleId, label: res.list[i].role_name },)
                }
                setThirdpartyList(arr);
            }
        }).catch((error: any) => {

        });
    };

    const checklistdata: any = [
        { value: "syndicate", label: "Admin" },
        { value: "investor", label: "Investor" },
        { value: "thirdparty", label: "Sme Advisor" },
    ]

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {props.formData && props.formData.checklistId ? "Edit Checklist" : "Add Checklist"}
            </OffcanvasHeader>
            <form onSubmit={(e) => {
                validation.handleSubmit();
                handleLanguageFileds();
                e.preventDefault();
                return false;
            }} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            {
                                langaugedata.map((item: any, ind: any) => {
                                    return (
                                        <>
                                            <div className="mb-2">
                                                <Label htmlFor="name-field" className="form-label"> Title ({item.name ? HelperService.getTitleCase(item.name) : ''})</Label>
                                                <Input
                                                    id="customername-field"
                                                    className="form-control"
                                                    placeholder="Enter Title"
                                                    type="text"
                                                    onChange={(e: any) => { langaugedata[ind].isError = 1; langaugedata[ind].title = e.target.value; setLanguageData([...langaugedata]) }}
                                                    onBlur={() => { langaugedata[ind].isError = 1; setLanguageData([...langaugedata]) }}
                                                    value={item.title || ""}
                                                    invalid={
                                                        item.isError == 1 &&
                                                            !item.title
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {item.isError == 1 && !item.title ? (
                                                    <FormFeedback type="invalid"> Please Enter Title</FormFeedback>
                                                ) : null}
                                            </div>
                                        </>
                                    )
                                })}
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Checklist can be viewed by
                                </Label>
                                <Select
                                    isMulti
                                    options={checklistdata}
                                    name="view_checklist_to"
                                    onChange={(e: any) => {
                                        validation.setFieldValue("view_checklist_to", e);
                                        console.log(e);
                                    }
                                    }
                                    value={validation.values.view_checklist_to || []}
                                    onBlur={() => { !validation.values.view_checklist_to && validation.setFieldError("view_checklist_to", "Please Select option") }}
                                />
                                {!validation.values.view_checklist_to && validation.errors.view_checklist_to ? (
                                    <span className="text-danger fs-11">
                                        {validation.errors.view_checklist_to}
                                    </span>
                                ) : null}
                            </div>
                        </Col>
                        {
                            validation.values.view_checklist_to && validation.values.view_checklist_to.length > 0 && validation.values.view_checklist_to.map((item: any) => {
                                return (<>
                                    {
                                        item.value == "thirdparty" &&
                                        <Col lg={12}>
                                            <div className="mb-2">
                                                <Label htmlFor="name-field" className="form-label">
                                                    Select SME advisor who can view the checklist
                                                </Label>
                                                <Select
                                                    isMulti
                                                    options={thirdpartylist}
                                                    name="thirdparty_role_id"
                                                    onChange={(e: any) => validation.setFieldValue("thirdparty_role_id", e)}
                                                    value={validation.values.thirdparty_role_id || []}
                                                    onBlur={() => { !validation.values.thirdparty_role_id && validation.setFieldError("thirdparty_role_id", "Please Select option") }}
                                                />
                                                {!validation.values.thirdparty_role_id && validation.errors.thirdparty_role_id ? (
                                                    <span className="text-danger fs-11">
                                                        {validation.errors.thirdparty_role_id}
                                                    </span>
                                                ) : null}
                                            </div>
                                        </Col>
                                    }
                                </>)
                            })
                        }
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <Button
                        type="submit"
                        id="addedit-workflow-checklist-submit-btn"
                        disabled={error ? true : false}
                        color="primary" className="btn-brand-theme"
                    >
                        Submit
                    </Button>
                    <button type="button" className="btn btn-light" onClick={() => onCloseBlade()}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas >
    );
};

export default AddEditChecklist;
