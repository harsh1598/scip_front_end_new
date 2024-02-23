import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col, FormFeedback, Button } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import WebService from "../../../utility/WebService";
import HelperService from "../../../utility/HelperService";
import MultiSelect from "../../../Components/MultiSelect/MultiSelect";
import { closingDeals } from "../../../common/data";

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
    const [usertype, setUserType] = useState<any>([]);
    const [thirdpartylist, setThirdpartyList] = useState<any>([]);
    const [role, setRole] = useState<any[]>([]);

    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        watch,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        props.show && getlanguagelist();
    }, [props.show, props.formData?.language_data]);

    useEffect(() => {
        getthirdpartylist();
    }, []);

    useEffect(() => {
        if (props.formData?.checklistId) {
            setUserType(props.formData.view_checklist_to.split(","));
            setRole(props.formData.thirdparty_role_id.split(","));
        }
    }, [props.formData]);

    const onCloseBlade = () => {
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

    const onSave = (data: any) => {
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
            let data = {
                "checklistId": props.formData.checklistId,
                "language_data": langaugedata,
                "userid": localdata.userId,
                "substageId": props.substageId,
                "view_checklist_to": usertype.toString(),
                "thirdparty_role_id": role.toString()
            };
            WebService.postAPI({
                action: "/edit-workflow-checklist",
                body: data,
                id: "addedit-workflow-checklist-submit-btn",
            }).then((res: any) => {
                if (res && res.result) {
                    toast.success(res.message);
                    props.onCloseClick();
                    props.setFormData();
                    props.getlist(1);
                }
            }).catch((error: any) => {
                setError(error);
            });
        } else {
            let data = {
                "language_data": langaugedata,
                "userid": localdata.userId,
                "substageId": props.substageId,
                "type": "default",
                "view_checklist_to": usertype.toString(),
                "thirdparty_role_id": role.toString()
            };
            WebService.postAPI({
                action: "/add-workflow-checklist",
                body: data,
                id: "addedit-workflow-checklist-submit-btn",
            }).then((res: any) => {
                if (res && res.result) {
                    toast.success(res.message);
                    props.onCloseClick();
                    props.setFormData();
                    props.getlist(1);
                }
            }).catch((error: any) => {
                setError(error);
            });
        }
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
                    arr.push({ id: res.list[i].roleId, value: res.list[i].role_name },)
                }
                setThirdpartyList(arr);
            }
        }).catch((error: any) => {

        });
    };

    const checklistdata: any = [
        { id: "syndicate", value: "Admin" },
        { id: "investor", value: "Investor" },
        { id: "thirdparty", value: "Sme Advisor" },
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
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            {
                                langaugedata.map((item: any, ind: any) => {
                                    return (
                                        <>
                                            <div className="mb-2">
                                                <Label htmlFor="name-field" className="form-label"> Title ({item.name ? HelperService.getTitleCase(item.name) : ''})</Label>
                                                <input
                                                    id="customername-field"
                                                    className="form-control"
                                                    placeholder="Enter Title"
                                                    type="text"
                                                    value={item.title}
                                                    {...register("title", {
                                                        required: true,
                                                    })}
                                                    onChange={(e: any) => { langaugedata[ind].isError = 1; langaugedata[ind].title = e.target.value; setLanguageData([...langaugedata]) }}
                                                />
                                                <div>
                                                    {errors.title && (
                                                        <span className="text-danger fs-12"> Please Enter Title</span>
                                                    )}
                                                </div>
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
                                <Controller
                                    control={control}
                                    name="view_checklist_to"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <MultiSelect
                                            selectLimit={checklistdata.length}
                                            options={checklistdata}
                                            selected={usertype}
                                            placeholder="Select user Type"
                                            onChange={(data: any) => {
                                                if (data) {
                                                    let temp: any = data.map((item: any) => {
                                                        field.onChange(item.id);
                                                        return item.id;
                                                    });
                                                    setUserType(temp);
                                                }
                                            }}
                                        />
                                    )}
                                />
                                <div>
                                    {errors.view_checklist_to && (
                                        <span className="text-danger fs-12">Please Select user Type</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                        {
                            usertype && usertype.length > 0 && usertype.map((item: any) => {
                                return (<>
                                    {
                                        item == "thirdparty" &&
                                        <Col lg={12}>
                                            <div className="mb-2">
                                                <Label htmlFor="name-field" className="form-label">
                                                    Select SME advisor who can view the checklist
                                                </Label>
                                                <Controller
                                                    control={control}
                                                    name="thirdparty_role_id"
                                                    rules={{ required: true }}
                                                    render={({ field }) => (
                                                        <MultiSelect
                                                            selectLimit={thirdpartylist.length}
                                                            options={thirdpartylist}
                                                            selected={role}
                                                            placeholder="Select Role"
                                                            onChange={(data: any) => {
                                                                if (data) {
                                                                    let temp: any = data.map((item: any) => {
                                                                        field.onChange(item.id);
                                                                        return item.id;
                                                                    });
                                                                    setRole(temp);
                                                                }
                                                            }}
                                                        />
                                                    )}
                                                />
                                                <div>
                                                    {errors.thirdparty_role_id && (
                                                        <span className="text-danger fs-12">Please Select Role</span>
                                                    )}
                                                </div>
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
