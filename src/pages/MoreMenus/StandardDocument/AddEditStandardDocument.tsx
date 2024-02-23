import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col, Button, Input } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import WebService from "../../../utility/WebService";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import Preview from "../../../assets/images/preview.png";
import Loader from "../../../Components/Loader/Loader";

interface propData {
    show: boolean;
    onCloseClick: any;
    id: any;
    setId: any;
    setUserType: any
    // getlist: any;
};

const AddEditStandardDocument = (props: propData) => {

    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const [showloader, setShowLoader] = useState(false);
    const [type, setType] = useState<any>([]);
    const [roleType, setRoleType] = useState<any>([]);
    const [roleTypeList, setRoleTypeList] = useState<any>([]);
    const [documentName, setDocumentName] = useState<any>();
    const [image, setImage] = useState<any>();

    const onCloseBlade = () => {
        setValue('doc_title' , "");
        setValue('doc_desc' , "")
        setType("");
        setDocumentName("");
        props.onCloseClick();
    };

    useEffect(() => {
        if(type === "thirdparty"){
            getThirdpartyList();
        }

    }, [type === "thirdparty"]);
    
    useEffect(() => {
        if(props?.id){
            getDetails();
        }else{
            onCloseBlade();
        }
    }, [props.id]);

    const getDetails = () => {
        setShowLoader(true);
        if (props?.id) {
            WebService.getAPI({
                action: "/standard-document-details/" + props.id,
            }).then((res: any) => {
                if (res && res.result) {
                    reset(res.result);
                    setType(res.result.user_type);
                    setRoleType(res.result.role_type);
                    setDocumentName({ name: res.result.doc_file });
                }
                setShowLoader(false);
            }).catch((error: any) => {
                setShowLoader(false);
            });
        }
    };

    const onSave = (data: any) => {
        if (props.id) {
            let obj = {
                "docId": props.id,
                "doc_title": data.doc_title,
                "doc_desc": data.doc_desc,
                "user_type": type,
                "role_type": type == "thirdparty" ? roleType : 0,
            };
            WebService.postAPI({
                action: "/edit-standard-document",
                body: obj,
                id: "addedit-contact-Directory-submit-btn",
            }).then((res: any) => {
                if (res && res.docId) {
                    if (documentName) {
                        uploadlogo(res.docId);
                    } else {
                        toast.success(res.message);
                        props.onCloseClick();
                        props.setId();
                        props.setUserType(type);
                    }
                }
            }).catch((error: any) => {
                // setError(error);
            });
        } else {
            let obj = {
                "doc_title": data.doc_title,
                "doc_desc": data.doc_desc,
                "user_type": type,
                "role_type": type == "thirdparty" ? roleType : 0,
            };
            WebService.postAPI({
                action: "/add-standard-document",
                body: obj,
                id: "addedit-Document-submit-btn",
            }).then((res: any) => {
                if (res && res.docId) {
                    if (documentName) {
                        uploadlogo(res.docId);
                    } else {
                        toast.success(res.message);
                        props.onCloseClick();
                        props.setId();
                        props.setUserType(type);
                    }
                }
            }).catch((error: any) => {
                // setError(error);
            });
        }
    };

    const typedata: any = [
        { id: "entrepreneur", value: "Entrepreneurs" },
        { id: "investor", value: "Investors" },
        { id: "thirdparty", value: "SME Advisors" },
    ]

    const getThirdpartyList = (page?: any) => {
        WebService.getAPI({
            action: `/third-party-role-list`,
        }).then((res: any) => {
            if (res && res.result) {
                let rolelist = [];
                for (let i in res.result) {
                    rolelist.push({ id: res.result[i].roleId, value: res.result[i].role_name })
                }
                setRoleTypeList(rolelist);
            }
        }).catch((error: any) => {

        });
    };

    const uploadlogo = (id: any) => {

        WebService.fileUploadAPI({
            action: `/standard-document-docfile-upload`,
            key: 'doc_file',
            file: documentName,
            body: {
                docId: id
            },
        }).then((res: any) => {
            if (res && res.url) {
                toast.success(res.message);
                props.onCloseClick();
                props.setId();
                props.setUserType(type);
                // setImage(res.url);
            }
        }).catch((error: any) => {
            // console.log(error, "error")
        });
    };

    const onLoadImage = (event: any) => {
        const { files } = event.target;
        if (
            files[0].type.toLowerCase() != "text/plain" &&
            files[0].type.toLowerCase() != "iapplication/msword" &&
            files[0].type.toLowerCase() != "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
            files[0].type.toLowerCase() != "application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" &&
            files[0].type.toLowerCase() != "application/vnd.ms-powerpoint" &&
            files[0].type.toLowerCase() != "application/vnd.openxmlformats-officedocument.presentationml.presentation" &&
            files[0].type.toLowerCase() != "application/octet-stream" &&
            files[0].type.toLowerCase() != "application/zip" &&
            files[0].type.toLowerCase() != "application/vnd.oasis.opendocument.text" &&
            files[0].type.toLowerCase() != "application/vnd.ms-office" &&
            files[0].type.toLowerCase() != "text/rtf" &&
            files[0].type.toLowerCase() != "application/vnd.oasis.opendocument.presentation" &&
            files[0].type.toLowerCase() != "application/vnd.oasis.opendocument.spreadsheet" &&
            files[0].type.toLowerCase() != "application/pdf"
        ) {
            alert("Invalid file format, Accept only text,pdf,doc,docx,xls,xlsx,ppt and pptx files.");
            return;
        }
        if (files && files[0]) {
            setDocumentName(files[0]);
            setImage(URL.createObjectURL(files[0]));
        }
        event.target.value = '';
    };

    return (
        <>
        <Loader show={showloader} />
           <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {props.id ? "Edit Standard Documents" : "Add Standard Documents"}
            </OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    User Type<span className='text-danger'>*</span>
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
                                            placeholder="Select User Type"
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
                        {
                            (type === "thirdparty") &&
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Role <span className='text-danger'>*</span>
                                    </Label>
                                    <Controller
                                        control={control}
                                        name="roleType"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                // isDisable={id ? true : false}
                                                selected={roleType}
                                                isSearchable={true}
                                                options={roleTypeList}
                                                placeholder="Select Role"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setRoleType(data.id);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.roleType && (
                                            <span className="text-danger fs-12">Please Select Role</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                        }
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label"> Title <span className='text-danger'>*</span></Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title"
                                    autoComplete="off"
                                    {...register("doc_title", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div>
                                {errors.doc_title && (
                                    <span className="text-danger">Please Enter Title.</span>
                                )}
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label"> Description <span className='text-danger'>*</span></Label>
                                <textarea
                                    className="form-control"
                                    rows={3}
                                    placeholder="Please write here..."
                                    {...register("doc_desc", {
                                        required: true,
                                    })} >
                                </textarea>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label"> Upload Document <span className='text-danger'>*</span></Label>
                                <div className="d-flex align-items-center form-control">
                                    <div className='attachment-btn '>
                                        {/* <input type="file" className='input' /> */}
                                        <Input className='input' id="exampleFile" name="file" type="file"
                                            onChange={(e: any) => {
                                                onLoadImage(e)
                                            }
                                            }
                                        />
                                        <i className='ri ri-attachment-line icon' />
                                    </div>
                                    <span className="text-black-50 ms-1 text-truncate">{documentName ? documentName.name : "No File Selected."}</span>
                                </div>
                            </div>
                        </Col>
                        {/* <Col xs="12" lg="2">
                            <img src={image ? image : Preview} className="mt-4" alt="Preview" style={{ width: "300%" }} />
                        </Col> */}
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <Button
                        type="submit"
                        id="addedit-Document-submit-btn"
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

export default AddEditStandardDocument;
