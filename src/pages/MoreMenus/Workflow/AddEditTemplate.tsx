import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col, Button, Input } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import WebService from "../../../utility/WebService";
import HelperService from "../../../utility/HelperService";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import SimpleBar from "simplebar-react";
import Preview from "../../../assets/images/preview.png";
import TextEditor from "../../../Components/TextEditor/TextEditor";
import {useNavigate } from 'react-router-dom';

interface propData {
    show: boolean;
    onCloseClick: any;
    formData: any;
    setFormData: any;
    getlist: any;
    subStageId?: any;
    stageId?: any;
};

const AddEditChecklist = (props: propData) => {
    const [error, setError] = useState<any>(false);
    const [langaugedata, setLanguageData] = useState<any>([]);
    const [type, setType] = useState<any>([]);
    const [isdefault, setIsDefault] = useState<any>([]);
    const [documentName, setDocumentName] = useState<any>();
    const [image, setImage] = useState<any>({});
    const [previousData, setpreviousData] = useState("");
    const [editorData, setEditorData] = useState<any>()
    const history = useNavigate();

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
        if (props.formData?.id) {
            setType(props.formData.type.split(","));
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
        if (props.formData?.id) {
            let objdata = {
                "id": props.formData.id,
                "language_data": langaugedata,
                "userid": localdata.userId,
                "stageId": props.stageId,
                "subStageId": props.subStageId,
                "type": type,
                "content":editorData,
                "no_of_days":data.no_of_days, 
                "frequency":data.frequency,
                "is_default":isdefault, 
                "added_by  ":localdata.userId, 
            };
            WebService.postAPI({
                action: "/edit-workflow-imanagetemplate",
                body: objdata,
                id: "addedit-workflow-imanagetemplate-submit-btn",
            }).then((res: any) => {
                if (res && res.result) {
                    if (documentName) {
                        uploadlogo(res.result.id);
                    } else {
                        toast.success(res.message);
                        props.onCloseClick();
                        props.setFormData();
                        props.getlist(1);
                        // history(`/admin/workflow/template/${props.subStageId}/${props.stageId}`);
                    }
                }
            }).catch((error: any) => {
                setError(error);
            });
        } else {
            let objdata = {
                "language_data": langaugedata,
                "userid": localdata.userId,
                "stageId": props.stageId,
                "subStageId": props.subStageId,
                "type": type,
                "content":editorData,
                "no_of_days":data.no_of_days, 
                "frequency":data.frequency,
                "is_default":isdefault, 
                "added_by":localdata.userId, 
            };
            WebService.postAPI({
                action: "/add-workflow-imanagetemplate",
                body: objdata,
                id: "addedit-workflow-imanagetemplate-submit-btn",
            }).then((res: any) => {
                if (res && res.result.id) {
                    if (documentName) {
                        uploadlogo(res.result.id);
                    } else {
                        toast.success(res.message);
                        props.onCloseClick();
                        props.setFormData();
                        props.getlist(1);
                        // history(`admin/workflow/template/${props.subStageId}/${props.stageId}`);
                    }
                }
            }).catch((error: any) => {
                setError(error);
            });
        }
    };


    const uploadlogo = (id: any) => {

        WebService.fileUploadAPI({
            action: `/imanagetemplate-image-upload`,
            key: 'attachment',
            file: documentName,
            body: {
                id: id
            },
        }).then((res: any) => {

            if (res && res.url) {
                toast.success(res.message);
                // history(`/admin/workflow/template/${props.subStageId}/${props.stageId}`);
                props.onCloseClick();
                props.setFormData();
                props.getlist(1);
            }
        }).catch((error: any) => {
            console.log(error , "error")
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

    const onLoadImage = (event: any) => {
        const { files } = event.target;
        if (files && files[0]) {
            setDocumentName(files[0]);
            setImage(URL.createObjectURL(files[0]));
        }
        event.target.value = '';
    };

    const currentValue = (data: any) => {
        setEditorData(data)
        // setpreviousData(data);
    };

    const typedata: any = [
        { id: "imanage", value: "iManage" },
        { id: "email_to_user", value: "Task related email to assigned user" },
        { id: "reminder_to_user", value: "Send reminder to assigned user" },
        { id: "email_to_startup", value: "Task related email to Startup" },
        { id: "reminder_to_startup", value: "Send reminder to Startup" },
    ]

    const defaultdata: any = [
        { id: "Y", value: "YES" },
        { id: "N", value: "NO" },
    ]

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-md"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {props.formData && props.formData.id ? "Edit Template" : "Add Template"}
            </OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)}>
                <SimpleBar autoHide={false} style={{ maxHeight: "720px" }}>
                    <OffcanvasBody>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Work Type <span className='text-danger'>*</span>
                                    </Label>
                                    <Controller
                                        control={control}
                                        name="type"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                // isDisable={id ? true : false}
                                                selected={type}
                                                isSearchable={true}
                                                options={typedata}
                                                placeholder="Select Type"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setType(data.id);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.type && (
                                            <span className="text-danger fs-12">Please Select Type</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {
                                langaugedata.map((item: any, ind: any) => {
                                    return (
                                        <>

                                            <Col lg={12}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> Title ({item.name ? HelperService.getTitleCase(item.name) : ''}) <span className='text-danger'>*</span> </Label>
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
                                            </Col >
                                            <Col lg={12}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> Subject ({item.name ? HelperService.getTitleCase(item.name) : ''}) <span className='text-danger'>*</span> </Label>
                                                    <input
                                                        id="customername-field"
                                                        className="form-control"
                                                        placeholder="Enter subject"
                                                        type="text"
                                                        value={item.subject}
                                                        {...register("subject", {
                                                            required: true,
                                                        })}
                                                        onChange={(e: any) => { langaugedata[ind].isError = 1; langaugedata[ind].subject = e.target.value; setLanguageData([...langaugedata]) }}
                                                    />
                                                    <div>
                                                        {errors.subject && (
                                                            <span className="text-danger fs-12"> Please Enter subject</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </Col >
                                        </>

                                    )

                                })
                            }
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label className="form-label">Agenda <span className='text-danger'>*</span> </Label>
                                    {/* content */}
                                    <TextEditor data={previousData} editedData={currentValue} type={"NORMAL"} />
                                </div>
                            </Col>
                        </Row>
                        {
                            (type === "reminder_to_user" || type === "reminder_to_startup") &&
                            <Row>
                                <Col lg={12}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Set Reminder No of Days <span className='text-danger'>*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="No of Days"
                                            autoComplete="off"
                                            {...register("no_of_days", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.no_of_days && (
                                                <Label
                                                    title={"Please Enter No of Days."}
                                                    modeError={true}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Set Reminder Frequency <span className='text-danger'>*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Frequency"
                                            autoComplete="off"
                                            {...register("frequency", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.frequency && (
                                                <Label
                                                    title={"Please Enter Frequency."}
                                                    modeError={true}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        }
                        <Row>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Set Default <span className='text-danger'>*</span>
                                    </Label>
                                    <Controller
                                        control={control}
                                        name="is_default"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                // isDisable={id ? true : false}
                                                selected={isdefault}
                                                isSearchable={true}
                                                options={defaultdata}
                                                placeholder="Select .."
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setIsDefault(data.id);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.is_default && (
                                            <span className="text-danger fs-12">Please Select Option</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            {
                                (type === "imanage") &&
                                <Col sm={12}>
                                    <Row>
                                        <Col xs="12" lg="5">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Select File</label>
                                            <p className='userimgp mt-2' >In PNG, JPG and JEPG format size should be less then 2MB</p>
                                        </Col>
                                        <Col xs="12" lg="5">
                                            <div className="upload-btn-wrapper">
                                                <button className="btn1">Upload Photo</button>

                                                <Input id="exampleFile" name="file" type="file"
                                                    onChange={(e: any) => {
                                                        onLoadImage(e)
                                                    }
                                                    }
                                                />
                                            </div>
                                        </Col>
                                        <Col xs="12" lg="2">
                                            <img src={Preview} className="mt-4" alt="Preview" style={{ width: "100%" }} />
                                        </Col>
                                    </Row>
                                </Col>
                            }

                        </Row>
                    </OffcanvasBody>
                </SimpleBar>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <Button
                        type="submit"
                        id="addedit-workflow-imanagetemplate-submit-btn"
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
