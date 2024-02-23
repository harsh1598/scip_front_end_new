import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col, Button, Card, CardHeader } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import WebService from "../../../utility/WebService";
import Loader from "../../../Components/Loader/Loader";
import TextEditor from "../../../Components/TextEditor/TextEditor";
import SimpleBar from "simplebar-react";
import CheckBoxMultiSelect from "../../../Components/CheckBoxMultiSelect/CheckBoxMultiSelect";

interface propData {
    show: boolean;
    onCloseClick: any;
    id: any;
    setId: any;
    getlist: any;
};

const EditEmail = (props: propData) => {

    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        watch,
        formState: { errors },
    } = useForm();

    const [showloader, setShowLoader] = useState(false);
    const [previousData, setpreviousData] = useState<any>(null);
    const [editorData, setEditorData] = useState<any>("");
    const [user, setUser] = useState<any>([]);

    useEffect(() => {
        if (props?.id) {
            getDetails();
            getList("");
        } else {
            onCloseBlade();
        }
    }, [props.id]);

    const onCloseBlade = () => {
        setValue('title', "");
        setValue('subject', "")
        setValue('description', "");
        props.onCloseClick();
    };

    const getDetails = () => {
        setShowLoader(true);
        // if (props?.id) {
        WebService.getAPI({
            action: "/email-details/" + props.id,
        }).then((res: any) => {
            if (res && res.result) {
                reset(res.result);
                setpreviousData(res.result.content);
                setUser(res.result.list)
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
        // }
    };

    const currentValue = (data: any) => {
        setEditorData(data)
    };

    const getList = (value: any) => {
        WebService.getAPI({
            action: `/user-combo?keyword=${value ? value : ""}`,
            body: null
        })
            .then((res: any) => {
                Object.entries(res.list).map(([item]: any, index: number) => {
                    res.list[item] && res.list[item].map((item1: any, key: any) => {
                        item1.isChecked = false;
                    })
                })
                setUser(res.list)
            })
            .catch((e) => {
            })
    }

    // "userId": ["2", "6" ,"75" , "661"]

    const onSave = (data: any) => {
        if (props.id) {
            let obj = {
                "id": props.id,
                "title": data.title,
                "content": editorData,
                "subject": data.subject,
                "description": data.description,
                "userId": data.description,

            };
            WebService.postAPI({
                action: "/update-email",
                body: obj,
                id: "addedit-email-submit-btn",
            }).then((res: any) => {
                if (res) {
                    toast.success(res.message);
                    props.onCloseClick();
                    props.setId();
                    props.getlist(1);
                    setEditorData("");
                    setpreviousData('')
                }
            }).catch((error: any) => {
                // setError(error);
            });
        }
    };

    return (
        <>
            <Loader show={showloader} />
            <Offcanvas
                direction="end"
                isOpen={props.show}
                id="offcanvasExample"
                toggle={props.onCloseClick}
                className="size-md"
            >
                <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                    {props.id ? "Edit Email" : ""}
                </OffcanvasHeader>
                <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                    <SimpleBar style={{ height: "84vh" }}>
                        <OffcanvasBody>
                            <Card className='dashboard-data'>
                                <CardHeader className="align-items-center bg-danger-subtle">
                                    <p className="btn-soft-info">Please do not change text which is in square bracket(s) and the link(s). for example - [SITENAME]</p>
                                </CardHeader>
                            </Card>
                            <Row>
                                <Col lg={12}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label"> Title</Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Title"
                                            autoComplete="off"
                                            {...register("title", {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <div>
                                        {errors.title && (
                                            <span className="text-danger">Please Enter Title.</span>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label"> Subject</Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                            autoComplete="off"
                                            {...register("subject", {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <div>
                                        {errors.subject && (
                                            <span className="text-danger">Please Enter Subject.</span>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label"> Description </Label>
                                        <textarea
                                            className="form-control"
                                            rows={3}
                                            placeholder="Please write here..."
                                            {...register("description", {
                                                required: true,
                                            })} >
                                        </textarea>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <Label className="form-label"> Send Bcc To </Label>
                                        <Controller
                                            control={control}
                                            name="userId"
                                            // rules={{ required: true }}
                                            render={({ field }) => (
                                                <CheckBoxMultiSelect
                                                    multiselectType="GROUP_SELECT"
                                                    placeholder="Select Users"
                                                    data={user}
                                                    keyword={(value: any) => getList(value)}
                                                    onChange={(data: any) => {
                                                        setUser({ ...data })
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label"> Content </Label>
                                        <TextEditor data={previousData} editedData={currentValue} type={"NORMAL"} />
                                    </div>
                                </Col>
                            </Row>
                        </OffcanvasBody>
                    </SimpleBar>
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                        <Button
                            type="submit"
                            id="addedit-email-submit-btn"
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
        </>

    );
};

export default EditEmail;
