import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Import Breadcrumb
import "react-circular-progressbar/dist/styles.css";
import checked from "../../assets/images/checked.png";
import Logo from "../../assets/images/scip-logo.svg";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Label,
    Progress,
    Input,
} from "reactstrap";
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import classnames from "classnames";
import moment from "moment";
import toast from "react-hot-toast";
import ThankYouImg from "../../../../src/assets/images/thanks-you.svg"
import { Controller, useForm } from "react-hook-form";
import WebService from "../../utility/WebService";
import HelperService from "../../utility/HelperService";
import CustomDropdown from "../Select/CustomDropdown";
import MultiSelect from "../MultiSelect/MultiSelect";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import PreviewModal from "../../pages/Users/ProfileInfo/Modals/PreviewModal";
import ParticlesAuth from "../../pages/AuthenticationInner/ParticlesAuth";
import Loader from "../Loader/Loader";
import axios from 'axios';
import { ProgressBar } from "react-toastify/dist/components";
import Draft from "../../../src/assets/images/Draft.svg"


interface propData {
    type: any;
    encodedId: any;
}

const SignupFormLayout = (props: propData) => {
    const {
        reset,
        register,
        control,
        handleSubmit,
        getValues,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const watchAllFields = watch();
    const [activeTab, setactiveTab] = useState<any>(0);
    const [section, setSection] = useState<any>(0);
    const [percentage, setPercentage] = useState<any>(0);
    const [subSection, setSubSection] = useState<any>(0);
    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState<any>([]);
    const [termsandConditions, setTermsandConditions] = useState<any>(true);
    const [documentName, setDocumentName] = useState<any>();
    const [image, setImage] = useState<any>([]);
    const [loading, setLoading] = useState(false)
    const [thankYouPage, setThankYouPage] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    const history = useNavigate();

    useEffect(() => {
        getList();
    }, []);

    const toggleTab = (tab: any) => {
        reset();
        setSection(tab);
        setactiveTab(tab);
        // getList();
    };

    const getList = () => {
        setShowLoader(true)
        var obj: any = {};
        obj.type = props.type;
        obj.encodedId = props.encodedId;
        WebService.postAPI({
            action: "/common-signup-formbuilder",
            body: obj
        })
            .then((res: any) => {
                var total_section = 100 / res.result.applicationsections.length;
                if (res.showNextSectionId == 0) {
                    setPercentage(Number(total_section) * Number(res.result.applicationsections.length))
                    setSection(res.result.applicationsections.length)
                }
                for (var i in res.result.applicationsections) {
                    if (res.showNextSectionId == res.result.applicationsections[i].sectionId) {
                        setPercentage(Number(total_section) * Number(i))
                        setSection(i)
                        setactiveTab(i)
                        for (var j in res.result.applicationsections[i].application_sub_sections) {
                            if (res.showNextSubSectionId == res.result.applicationsections[i].application_sub_sections[j].subsectionId) {
                                setSubSection(j)
                            }
                        }
                    }
                }
                for (var i in res.result.applicationsections) {
                    for (var j in res.result.applicationsections[i].application_sub_sections) {
                        for (var k in res.result.applicationsections[i].application_sub_sections[j].application_sub_sections_question) {
                            if (res.result.applicationsections[i].application_sub_sections[j].application_sub_sections_question[k].parentId == 0) {
                                res.result.applicationsections[i].application_sub_sections[j].application_sub_sections_question[k].isShowQuestion = true
                            }
                            for (var l in res.result.applicationsections[i].application_sub_sections[j].application_sub_sections_question[k].application_sub_sections_question_options) {
                                if (res.result.applicationsections[i].application_sub_sections[j].application_sub_sections_question[k].input_type == "radio") {
                                    res.result.applicationsections[i].application_sub_sections[j].application_sub_sections_question[k].application_sub_sections_question_options[l].isChecked = false;
                                }
                                if (
                                    res.result.applicationsections[i].application_sub_sections[j].application_sub_sections_question[k].input_type == "checkbox"
                                ) {
                                    res.result.applicationsections[i].application_sub_sections[j].application_sub_sections_question[k].application_sub_sections_question_options[l].isChecked = false;
                                }
                                if (
                                    res.result.applicationsections[i].application_sub_sections[j].application_sub_sections_question[k].input_type == "multiselect"
                                ) {
                                    res.result.applicationsections[i].application_sub_sections[j].application_sub_sections_question[k].application_sub_sections_question_options[l].isChecked = false;
                                }
                            }
                        }
                    }
                }
                setFormData(res.result.applicationsections);

                setShowLoader(false)
            })
            .catch((error: any) => {
                setShowLoader(false)
            });
    };

    const onSave = () => {
        var obj: any = {}
        obj.signupForm = formData;
        for (var i in formData) {
            if (section == i) {
                setSection(i)
                obj.sectionId = formData[i].sectionId
                for (var j in formData[i].application_sub_sections) {
                    if (subSection == j) {
                        obj.subsectionId = formData[i].application_sub_sections[j].subsectionId
                    }
                }
            }
        }
        if (obj.sectionId && obj.subsectionId) {
            setLoading(true);
            WebService.postAPI({
                action: `/signup`,
                body: obj,
            })
                .then((res: any) => {
                    if (res.isDoEmailValidation) {
                        history('/admin/thank-you')
                    } else if (res.showNextSectionId == 0) {
                        history('/dashboard')
                    } else {
                        var total_section = 100 / formData.length;
                        if (res.showNextSectionId == 0) {
                            setPercentage(Number(total_section) * Number(formData.length))
                            setSection(formData.length)
                        }
                        for (var i in formData) {
                            if (res.showNextSectionId == formData[i].sectionId) {
                                setPercentage(Number(total_section) * Number(i))
                                setSection(i)
                                setactiveTab(i)
                                for (var j in formData[i].application_sub_sections) {
                                    if (res.showNextSubSectionId == formData[i].application_sub_sections[j].subsectionId) {
                                        setSubSection(j)
                                    }
                                }
                            }
                        }
                    }

                    reset();
                })
                .catch((e) => {
                    setLoading(false);
                });
        }
    };

    const toggleModel = (name: any) => {
        setModelName(name);
    };

    const onLoadImage = (e: any, index: any, button_id?: any) => {
        const { files } = e.target;
        if (files && files[0]) {
            setDocumentName(files[0].name);
            console.log("files[0].name", files[0].name);

            let fileName = files[0].name;
            let extension = fileName.split(".").pop();
            if (extension == "png" || extension == "jpeg") {
                toast.error("Invalid File Type")
            }
            setValue("file", files[0].name)
            setImage(files[0]);
            e.preventDefault()
            let formDataa = new FormData()
            formDataa.append("file", image)
            const url = WebService.getBaseUrl();
            axios.post(url + "/import-entrepreneur-details-file", formDataa, {
                headers: WebService.getHeaders(),
                onUploadProgress: data => {
                    const loaded = Math.round((100 * data.loaded) / data.total);

                    for (var i in formData) {
                        if (i == section) {
                            for (var j in formData[i].application_sub_sections) {
                                if (j == subSection) {
                                    for (var k in formData[i].application_sub_sections[j].application_sub_sections_question) {
                                        if (k == index) {
                                            // formData[i].application_sub_sections[j].application_sub_sections_question[k].signup_docuemnt_id = 15
                                            // if (formData[i].application_sub_sections[j].application_sub_sections_question[k].question_type && formData[i].application_sub_sections[j].application_sub_sections_question[k].question_type == 'DYNAMIC') {
                                            //     formData[i].application_sub_sections[j].application_sub_sections_question[k].docId = 15;
                                            // }
                                            formData[i].application_sub_sections[j].application_sub_sections_question[k].progress = loaded

                                        }
                                    }
                                }
                            }
                        }
                    }
                    setFormData([...formData])
                },
            }).then((response) => {
                console.log('response.data', response.data);
                for (var i in formData) {
                    if (i == section) {
                        for (var j in formData[i].application_sub_sections) {
                            if (j == subSection) {
                                for (var k in formData[i].application_sub_sections[j].application_sub_sections_question) {
                                    if (k == index) {
                                        formData[i].application_sub_sections[j].application_sub_sections_question[k].docId = 15
                                        if (formData[i].application_sub_sections[j].application_sub_sections_question[k].question_type && formData[i].application_sub_sections[j].application_sub_sections_question[k].question_type == 'DYNAMIC') {
                                            formData[i].application_sub_sections[j].application_sub_sections_question[k].docId = 15;
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
                setFormData([...formData])
                WebService.removeLoader(button_id);
            })
                .catch((error) => {
                    // props.isShowError ? reject(this.errorHandler(error)) : reject(error);
                    WebService.errorHandler(error);
                    WebService.removeLoader(button_id);
                });
        }
    }
    return (
        <>
            <Loader show={showLoader} />
            <React.Fragment>
                <div className="auth-page-content">
                    <div className="page-content p-0">
                        <Container fluid>
                            <Row>
                                <Col lg={9} sm={9}>
                                    <Card>
                                        <CardBody className="checkout-tab">
                                            <div className="step-arrow-nav mt-n3 mx-n3 mb-3">
                                                <Nav
                                                    className="nav-pills nav-justified custom-nav"
                                                    role="tablist">
                                                    {formData &&
                                                        formData.length > 0 &&
                                                        formData.map((item: any, index: any) => {
                                                            return (
                                                                <>
                                                                    <NavItem role="presentation">
                                                                        <NavLink
                                                                            className={classnames(
                                                                                {
                                                                                    active: Number(activeTab) == Number(index),
                                                                                    done: Number(activeTab) == Number(index)
                                                                                },
                                                                                "p-3 fs-15"
                                                                            )}
                                                                            onClick={() => {
                                                                                // toggleTab(Number(index));
                                                                            }}
                                                                        >
                                                                            <i className="ri-user-2-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                                                                            {item.title}
                                                                        </NavLink>
                                                                    </NavItem>
                                                                </>
                                                            );
                                                        })}
                                                </Nav>
                                            </div>
                                            <TabContent activeTab={activeTab}>
                                                <TabPane tabId={activeTab} id="pills-bill-info">
                                                    <div>
                                                        <React.Fragment>
                                                            <Container fluid className="px-0">
                                                                <form onSubmit={handleSubmit(onSave)}>
                                                                    <Row className="profile-tabs">
                                                                        {formData && formData[section] && formData[section].application_sub_sections &&
                                                                            formData[section].application_sub_sections[subSection] && formData[section].application_sub_sections[subSection].application_sub_sections_question &&
                                                                            formData[section].application_sub_sections.length > 0 && formData[section].application_sub_sections.map(
                                                                                (res: any) => {
                                                                                    return (
                                                                                        <>
                                                                                            <Col
                                                                                                lg={12}
                                                                                                className="text-center my-3">
                                                                                                <span dangerouslySetInnerHTML={{ __html: res.description, }} />
                                                                                            </Col>
                                                                                        </>
                                                                                    );
                                                                                }
                                                                            )}
                                                                        {formData && formData[section] && formData[section].application_sub_sections &&
                                                                            formData[section].application_sub_sections[subSection] &&
                                                                            formData[section].application_sub_sections[subSection].application_sub_sections_question &&
                                                                            formData[section].application_sub_sections[subSection].application_sub_sections_question.length > 0 &&
                                                                            formData[section].application_sub_sections[subSection].application_sub_sections_question.map((res: any, i: any) => {
                                                                                console.log(res.progress);

                                                                                return (
                                                                                    <>
                                                                                        {res.isShowQuestion &&
                                                                                            <Col lg={12}>
                                                                                                {res.heading_title && (
                                                                                                    <div>
                                                                                                        <Label
                                                                                                            htmlFor="name-field"
                                                                                                            className="form-label">
                                                                                                            <h6 className="text-danger font-18" style={{ letterSpacing: "2px" }}>{res.heading_title.toUpperCase()}
                                                                                                            </h6>
                                                                                                        </Label>
                                                                                                    </div>
                                                                                                )}

                                                                                                {res.input_type !=
                                                                                                    "checkbox" && (
                                                                                                        <Label
                                                                                                            htmlFor="name-field"
                                                                                                            className="form-label">
                                                                                                            {res.question_title}{" "}  {res.question_type}
                                                                                                            {res.is_mandatory == "Y" ?
                                                                                                                <span className="text-danger"> * </span> : ""}
                                                                                                            {res.question_caption ?
                                                                                                                <p className="mt-1" dangerouslySetInnerHTML={{ __html: res.question_caption }} /> : ""}
                                                                                                        </Label>
                                                                                                    )}

                                                                                                {res.input_type == "file" &&
                                                                                                    <div>
                                                                                                        <small>
                                                                                                            <span
                                                                                                                dangerouslySetInnerHTML={{
                                                                                                                    __html: res.question_caption,
                                                                                                                }} />
                                                                                                        </small>
                                                                                                    </div>}

                                                                                                {res.input_type == "text" &&
                                                                                                    res.application_sub_sections_question_options &&
                                                                                                    res.application_sub_sections_question_options.length == 0 && (
                                                                                                        <div className="mb-3">
                                                                                                            <input
                                                                                                                type="text"
                                                                                                                className="form-control"
                                                                                                                autoComplete="off"
                                                                                                                defaultValue={res[`${res.input_name}`]}
                                                                                                                {...register(res.input_name, { required: res.is_mandatory == "Y" ? false : false, })}
                                                                                                                onChange={(e: any) => {
                                                                                                                    res[`${res.input_name}`] = e.target.value;
                                                                                                                    if (res.question_type == 'DYNAMIC') {
                                                                                                                        res.answer = e.target.value;
                                                                                                                    }
                                                                                                                }} />
                                                                                                            <div>
                                                                                                                {errors[res.input_name] && (
                                                                                                                    <span className="text-danger fs-12">
                                                                                                                        {res.error_message}.
                                                                                                                    </span>
                                                                                                                )}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    )}

                                                                                                {res.input_type == "email" && (
                                                                                                    <div className="mb-3">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            className="form-control"
                                                                                                            autoComplete="off"
                                                                                                            {...register(res.input_name,
                                                                                                                {
                                                                                                                    required: res.is_mandatory == "Y" ? false : false,
                                                                                                                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                                                                                                                }
                                                                                                            )}
                                                                                                            onChange={(e: any) => {
                                                                                                                console.log('dddd', e.target.value);

                                                                                                                res[`${res.input_name}`] = e.target.value;
                                                                                                                if (res.question_type == 'DYNAMIC') {
                                                                                                                    res.answer = e.target.value;
                                                                                                                }
                                                                                                            }} />
                                                                                                        <div>
                                                                                                            {errors[res.input_name] &&
                                                                                                                !watchAllFields[res.input_name] && (
                                                                                                                    <span className="text-danger fs-12">
                                                                                                                        {res.error_message}.
                                                                                                                    </span>
                                                                                                                )}
                                                                                                            {errors[res.input_name] &&
                                                                                                                !HelperService.isValidEmail(watchAllFields[res.input_name]) ? (
                                                                                                                <span className="text-danger fs-12">
                                                                                                                    Please Enter Valid Email Address.
                                                                                                                </span>
                                                                                                            ) : (
                                                                                                                ""
                                                                                                            )}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                )}

                                                                                                {res.input_type == "password" &&
                                                                                                    res.input_name == "password" && (
                                                                                                        <div className="mb-3">
                                                                                                            <input
                                                                                                                id="password"
                                                                                                                type="password"
                                                                                                                className={`form-control ${errors[`${res.input_name}`] ? "is-invalid" : ""}`}
                                                                                                                autoComplete="off"
                                                                                                                {...register(res.input_name,
                                                                                                                    { required: res.is_mandatory == "Y" ? false : false, }
                                                                                                                )}
                                                                                                                onChange={(e: any) => {
                                                                                                                    res[`${res.input_name}`] = e.target.value;
                                                                                                                }} />
                                                                                                            <div>
                                                                                                                {errors[res.input_name] && (
                                                                                                                    <span className="text-danger fs-12">
                                                                                                                        {res.error_message}.
                                                                                                                    </span>
                                                                                                                )}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    )}

                                                                                                {res.input_type == "password" && res.input_name == "confirm_password" && (
                                                                                                    <div className="mb-3">
                                                                                                        <input
                                                                                                            id="confirm_password"
                                                                                                            type="password"
                                                                                                            className={`form-control ${errors[`${res.input_name}`] ? "is-invalid" : ""}`}
                                                                                                            placeholder="Confirm Password"
                                                                                                            autoComplete="off"
                                                                                                            {...register(res.input_name,
                                                                                                                {
                                                                                                                    required: res.is_mandatory == "Y" ? false : false,
                                                                                                                    validate: (value: any) => value == getValues("password"),
                                                                                                                }
                                                                                                            )} />
                                                                                                        <div>
                                                                                                            {errors[res.input_name] && (
                                                                                                                <span className="text-danger fs-12">
                                                                                                                    Please Enter Password
                                                                                                                </span>
                                                                                                            )}
                                                                                                            {/* {errors[`${res.input_name}`] && (
   <span className="text-danger fs-12">Please Confirm Password</span>
)} */}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                )}

                                                                                                {res.input_type == "checkbox" &&
                                                                                                    res.application_sub_sections_question_options &&
                                                                                                    res.application_sub_sections_question_options.length == 0 && (
                                                                                                        <div className="mb-3">
                                                                                                            <div className="form-check">
                                                                                                                <input
                                                                                                                    className="form-check-input"
                                                                                                                    type="checkbox"
                                                                                                                    id="formCheck2"
                                                                                                                    {...register(res.input_name, { required: res.is_mandatory == "Y" ? false : false, }
                                                                                                                    )}
                                                                                                                    onKeyPress={() => {
                                                                                                                        setTermsandConditions(!termsandConditions);
                                                                                                                        res[`${res.input_name}`] = termsandConditions;
                                                                                                                    }} />
                                                                                                                <Label
                                                                                                                    className="form-check-label"
                                                                                                                    htmlFor="formCheck2">
                                                                                                                    {/* <Link to="/terms-conditions"> */}
                                                                                                                    <span dangerouslySetInnerHTML={{ __html: res.question_title, }} />
                                                                                                                    {res.question_type}
                                                                                                                    {res.is_mandatory == "Y" ?
                                                                                                                        <span className="error">*</span>
                                                                                                                        : ""}
                                                                                                                    {/* </Link> */}
                                                                                                                </Label>
                                                                                                            </div>
                                                                                                            <div>
                                                                                                                {errors[res.input_name] && (
                                                                                                                    <span className="text-danger fs-12">
                                                                                                                        {res.error_message}.
                                                                                                                    </span>
                                                                                                                )}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    )}

                                                                                                {res.input_type == "text" &&
                                                                                                    res.application_sub_sections_question_options &&
                                                                                                    res.application_sub_sections_question_options.length > 0 && (
                                                                                                        <>
                                                                                                            <div className="mb-3">
                                                                                                                <Controller
                                                                                                                    control={control}
                                                                                                                    name={res.input_name + "_que_id"}
                                                                                                                    render={({ field }) => (
                                                                                                                        <CustomDropdown
                                                                                                                            options={res.application_sub_sections_question_options}
                                                                                                                            isSearchable={true}
                                                                                                                            onChange={(data: any) => {
                                                                                                                                field.onChange(data.id);
                                                                                                                                res[`${res.input_name}` + "_que_id"] = data.id;
                                                                                                                                if (res.question_type == 'DYNAMIC') {
                                                                                                                                    res.option_id = data.id;
                                                                                                                                }
                                                                                                                            }} />
                                                                                                                    )} />
                                                                                                                <div>
                                                                                                                    {errors[`${res.input_name}`] && (
                                                                                                                        <span className="text-danger fs-12">
                                                                                                                            {" "}
                                                                                                                            {res.error_message}.
                                                                                                                        </span>
                                                                                                                    )}
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="mb-2">
                                                                                                                <input
                                                                                                                    type="text"
                                                                                                                    className="form-control"
                                                                                                                    autoComplete="off"
                                                                                                                    {...register(res.input_name,
                                                                                                                        { required: res.is_mandatory == "Y" ? false : false, }
                                                                                                                    )}
                                                                                                                    onChange={(e: any) => {
                                                                                                                        res[`${res.input_name}`] = e.target.value;
                                                                                                                        if (res.question_type == 'DYNAMIC') {
                                                                                                                            res.answer = e.target.value;
                                                                                                                        }

                                                                                                                    }} />
                                                                                                                <div>
                                                                                                                    {errors[res.input_name] && (
                                                                                                                        <span className="text-danger fs-12">
                                                                                                                            {res.error_message}.
                                                                                                                        </span>
                                                                                                                    )}
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </>
                                                                                                    )}

                                                                                                {res.input_type == "checkbox" &&
                                                                                                    res.application_sub_sections_question_options &&
                                                                                                    res.application_sub_sections_question_options.length > 0 && (
                                                                                                        <>
                                                                                                            <Label
                                                                                                                htmlFor="name-field"
                                                                                                                className="form-label">
                                                                                                                {res.question_title}{" "}
                                                                                                                <span className="text-danger">*</span>
                                                                                                            </Label>
                                                                                                            <Row>
                                                                                                                {res.application_sub_sections_question_options &&
                                                                                                                    res.application_sub_sections_question_options.map(
                                                                                                                        (item: any, checkboxIndex: any) => {
                                                                                                                            return (
                                                                                                                                <>
                                                                                                                                    <Col
                                                                                                                                        lg={3}
                                                                                                                                        md={3}>
                                                                                                                                        <div className="form-check">
                                                                                                                                            <input
                                                                                                                                                className="form-check-input"
                                                                                                                                                type="checkbox"
                                                                                                                                                name={item.value}
                                                                                                                                                checked={item.isChecked}
                                                                                                                                                id={item.value + "_" + checkboxIndex}
                                                                                                                                                onClick={() => {
                                                                                                                                                    let temp: any = [];
                                                                                                                                                    // if (item.isChecked) {
                                                                                                                                                    //   item.isChecked = true
                                                                                                                                                    // } else {
                                                                                                                                                    //   item.isChecked = false
                                                                                                                                                    // }
                                                                                                                                                    for (var i in res.application_sub_sections_question_options) {
                                                                                                                                                        if (i == checkboxIndex) {
                                                                                                                                                            res.application_sub_sections_question_options[i].isChecked = !res.application_sub_sections_question_options[i].isChecked;
                                                                                                                                                        }
                                                                                                                                                        if (res.application_sub_sections_question_options[i].isChecked) {
                                                                                                                                                            if (res.master_table) {
                                                                                                                                                                temp.push(res.application_sub_sections_question_options[i].id);
                                                                                                                                                            }
                                                                                                                                                            else {
                                                                                                                                                                temp.push(res.application_sub_sections_question_options[i].value);
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    if (temp && temp.length > 0) {
                                                                                                                                                        res[`${res.input_name}`] = temp.toString();
                                                                                                                                                    }
                                                                                                                                                    setFormData([...formData]);
                                                                                                                                                }} />
                                                                                                                                            <Label
                                                                                                                                                className="form-check-label"
                                                                                                                                                htmlFor="formCheck1">
                                                                                                                                                {item.value}
                                                                                                                                            </Label>
                                                                                                                                        </div>
                                                                                                                                    </Col>
                                                                                                                                </>
                                                                                                                            );
                                                                                                                        }
                                                                                                                    )}
                                                                                                            </Row>
                                                                                                        </>
                                                                                                    )}

                                                                                                {res.input_type == "select" && res.is_source != "Y" &&
                                                                                                    res.application_sub_sections_question_options &&
                                                                                                    res.application_sub_sections_question_options.length > 0 && (
                                                                                                        <div className="mb-2">
                                                                                                            <Controller
                                                                                                                control={control}
                                                                                                                name={res.input_name + "_que_id"}
                                                                                                                render={({ field }) => (
                                                                                                                    <CustomDropdown
                                                                                                                        options={res.application_sub_sections_question_options}
                                                                                                                        isSearchable={true}
                                                                                                                        onChange={(data: any) => {
                                                                                                                            field.onChange(data.id);
                                                                                                                            res[`${res.input_name}`] = data.id;
                                                                                                                            if (res.question_type == 'DYNAMIC') {
                                                                                                                                res.option_id = data.id;
                                                                                                                            }
                                                                                                                        }} />
                                                                                                                )} />
                                                                                                            <div>
                                                                                                                {errors[res.input_name] && (
                                                                                                                    <span className="text-danger fs-12">
                                                                                                                        {" "}
                                                                                                                        {res.error_message}.
                                                                                                                    </span>
                                                                                                                )}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    )}

                                                                                                {res.input_type == "select" && res.is_source == "Y" && res.application_sub_sections_question_options &&
                                                                                                    res.application_sub_sections_question_options.length > 0 && (
                                                                                                        <>
                                                                                                            <div className="mb-3">
                                                                                                                <Controller
                                                                                                                    control={control}
                                                                                                                    name={res.input_name + "_que_id"}
                                                                                                                    render={({ field }) => (
                                                                                                                        <CustomDropdown
                                                                                                                            options={res.application_sub_sections_question_options}
                                                                                                                            isSearchable={true}
                                                                                                                            onChange={(data: any) => {
                                                                                                                                field.onChange(data.id);
                                                                                                                                res[`${res.input_name}` + "_que_id"] = data.id;
                                                                                                                                if (res.question_type == 'DYNAMIC') {
                                                                                                                                    res.option_id = data.id;
                                                                                                                                }
                                                                                                                            }} />
                                                                                                                    )} />
                                                                                                                <div>
                                                                                                                    {errors[`${res.input_name}`] && (
                                                                                                                        <span className="text-danger fs-12">
                                                                                                                            {" "}
                                                                                                                            {res.error_message}.
                                                                                                                        </span>
                                                                                                                    )}
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="mb-3">
                                                                                                                <input
                                                                                                                    type="text"
                                                                                                                    className="form-control"
                                                                                                                    autoComplete="off"
                                                                                                                    defaultValue={res[`${res.input_name}`]}
                                                                                                                    {...register(res.input_name, { required: res.is_mandatory == "Y" ? false : false, })}
                                                                                                                    onChange={(e: any) => {
                                                                                                                        res[`${res.input_name}`] = e.target.value;
                                                                                                                        if (res.question_type == 'DYNAMIC') {
                                                                                                                            res.answer = e.target.value;
                                                                                                                        }
                                                                                                                    }} />
                                                                                                                <div>
                                                                                                                    {errors[res.input_name] && (
                                                                                                                        <span className="text-danger fs-12">
                                                                                                                            {res.error_message}.
                                                                                                                        </span>
                                                                                                                    )}
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </>
                                                                                                    )}
                                                                                                {res.input_type == "multiselect" &&
                                                                                                    res.application_sub_sections_question_options &&
                                                                                                    res.application_sub_sections_question_options.length > 0 && (
                                                                                                        <div className="mb-2">
                                                                                                            <Controller
                                                                                                                control={control}
                                                                                                                name="columns"
                                                                                                                render={({ field }) => (
                                                                                                                    <MultiSelect
                                                                                                                        selectLimit={res.application_sub_sections_question_options ? res.application_sub_sections_question_options.length : []}
                                                                                                                        options={res.application_sub_sections_question_options}
                                                                                                                        selected={res.application_sub_sections_question_options}
                                                                                                                        placeholder={res.placeholder}
                                                                                                                        onChange={(data: any) => {
                                                                                                                            let temp: any = [];
                                                                                                                            for (var i in res.application_sub_sections_question_options) {
                                                                                                                                if (res.application_sub_sections_question_options[i].isChecked) {
                                                                                                                                    res.application_sub_sections_question_options[i].isChecked = true;
                                                                                                                                } else {
                                                                                                                                    res.application_sub_sections_question_options[i].isChecked = false;
                                                                                                                                }
                                                                                                                                if (res.application_sub_sections_question_options[i].id == data[0].id) {
                                                                                                                                    res.application_sub_sections_question_options[i].isChecked = !res.application_sub_sections_question_options[i].isChecked;
                                                                                                                                }
                                                                                                                                if (res.application_sub_sections_question_options[i].isChecked) {
                                                                                                                                    if (res.master_table) {
                                                                                                                                        temp.push(res.application_sub_sections_question_options[i].id);
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        temp.push(res.application_sub_sections_question_options[i].value);
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                            if (temp && temp.length > 0) {
                                                                                                                                res[`${res.input_name}`] = temp.toString();
                                                                                                                                if (res.question_type == 'DYNAMIC') {
                                                                                                                                    res.answer = temp.toString();
                                                                                                                                }
                                                                                                                            }
                                                                                                                            setFormData([...formData]);
                                                                                                                        }} />
                                                                                                                )} />
                                                                                                            <div>
                                                                                                                {errors[res.input_name] && (
                                                                                                                    <span className="text-danger fs-12">
                                                                                                                        {" "}
                                                                                                                        {res.error_message}.
                                                                                                                    </span>
                                                                                                                )}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    )}

                                                                                                {res.input_type == "radio" &&
                                                                                                    res.application_sub_sections_question_options &&
                                                                                                    res.application_sub_sections_question_options.length > 0 && (
                                                                                                        <>
                                                                                                            <Row>
                                                                                                                {res.application_sub_sections_question_options &&
                                                                                                                    res.application_sub_sections_question_options.map(
                                                                                                                        (item: any, radioIndex: any) => {
                                                                                                                            return (
                                                                                                                                <>
                                                                                                                                    <Col lg={3} md={3}>
                                                                                                                                        <div className="form-check">
                                                                                                                                            <Input
                                                                                                                                                className="form-check-input"
                                                                                                                                                type="radio"
                                                                                                                                                name={'radio_' + item.id}
                                                                                                                                                checked={item.isChecked}
                                                                                                                                                id={'radio_' + item.id}
                                                                                                                                                onClick={() => {
                                                                                                                                                    if (res.master_table) {
                                                                                                                                                        res[`${res.input_name}`] = item.id;
                                                                                                                                                        if (res.question_type == 'DYNAMIC') {
                                                                                                                                                            res.answer = item.id;
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    else {
                                                                                                                                                        for (var i in formData) {
                                                                                                                                                            for (var j in formData[i].application_sub_sections) {
                                                                                                                                                                for (var k in formData[i].application_sub_sections[j].application_sub_sections_question) {
                                                                                                                                                                    if (formData[i].application_sub_sections[j].application_sub_sections_question[k].parentId == res.question_id) {
                                                                                                                                                                        if (item.value == 'Yes') {
                                                                                                                                                                            formData[i].application_sub_sections[j].application_sub_sections_question[k].isShowQuestion = true;
                                                                                                                                                                        }
                                                                                                                                                                        else {
                                                                                                                                                                            formData[i].application_sub_sections[j].application_sub_sections_question[k].isShowQuestion = false;
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                        res[`${res.input_name}`] = item.value;
                                                                                                                                                        if (res.question_type == 'DYNAMIC') {
                                                                                                                                                            res.answer = item.value;
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    for (var i in res.application_sub_sections_question_options) {
                                                                                                                                                        if (radioIndex == i) {
                                                                                                                                                            res.application_sub_sections_question_options[i].isChecked = !res.application_sub_sections_question_options[i].isChecked;
                                                                                                                                                        } else {
                                                                                                                                                            res.application_sub_sections_question_options[i].isChecked = false;
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    setFormData([...formData,]);
                                                                                                                                                }} />
                                                                                                                                            <Label className="form-check-label" htmlFor={'radio_' + item.id}>
                                                                                                                                                {item.value}
                                                                                                                                            </Label>
                                                                                                                                        </div>
                                                                                                                                    </Col>
                                                                                                                                </>
                                                                                                                            );
                                                                                                                        }
                                                                                                                    )}
                                                                                                            </Row>
                                                                                                        </>
                                                                                                    )}

                                                                                                {res.input_type == "date" && (
                                                                                                    <div className="mb-2">
                                                                                                        <Controller
                                                                                                            control={control}
                                                                                                            name={res.input_name}
                                                                                                            rules={{ required: res.is_mandatory == "Y" ? false : false, }}
                                                                                                            render={({ field }) => (
                                                                                                                <CustomDatePicker
                                                                                                                    placeholderText={res.placeholder}
                                                                                                                    selected={res.selected}
                                                                                                                    format={res.display_format}
                                                                                                                    onChange={(data: any) => {
                                                                                                                        var formatted = moment(data).format("DD-MM-YYYY");
                                                                                                                        field.onChange(formatted);
                                                                                                                        res[`${res.input_name}`] = data;
                                                                                                                        if (res.question_type == 'DYNAMIC') {
                                                                                                                            res.answer = data;
                                                                                                                        }
                                                                                                                    }} />
                                                                                                            )} />
                                                                                                        <div>
                                                                                                            {errors[res.input_name] && (
                                                                                                                <span className="text-danger fs-12">
                                                                                                                    {" "}
                                                                                                                    {res.error_message}.
                                                                                                                </span>
                                                                                                            )}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                )}

                                                                                                {res.input_type == "url" && (
                                                                                                    <>
                                                                                                        <input
                                                                                                            id={"fasdfasf_" + i}
                                                                                                            type="text"
                                                                                                            className="form-control"
                                                                                                            {...register(res.input_type,
                                                                                                                {
                                                                                                                    required: res.is_mandatory == "Y" ? false : false,
                                                                                                                    pattern: RegExp("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"),
                                                                                                                })}
                                                                                                            onChange={(e: any) => {
                                                                                                                res[`${res.input_name}`] = e.target.value;
                                                                                                                if (res.question_type == 'DYNAMIC') {
                                                                                                                    res.answer = e.target.value;
                                                                                                                }
                                                                                                            }} />
                                                                                                        <div>
                                                                                                            {errors[`${res.input_type}`] && !watchAllFields[`${res.input_type}`] && (
                                                                                                                <span className="text-danger fs-12">
                                                                                                                    {res.error_message}.
                                                                                                                </span>
                                                                                                            )}
                                                                                                            {watchAllFields[`${res.input_type}`] &&
                                                                                                                !HelperService.isValidurlPatternValidation(
                                                                                                                    watchAllFields[`${res.input_type}`]) ? (
                                                                                                                <span className="text-danger fs-12">
                                                                                                                    Please Enter Valid Url.
                                                                                                                </span>) : ("")}
                                                                                                        </div>
                                                                                                    </>
                                                                                                )}

                                                                                                {res.input_type == "textarea" && (
                                                                                                    <div className="mb-3">
                                                                                                        <textarea
                                                                                                            className="form-control"
                                                                                                            autoComplete="off"
                                                                                                            {...register(res.input_name,
                                                                                                                { required: res.is_mandatory == "Y" ? false : false, }
                                                                                                            )}
                                                                                                            onChange={(e: any) => {
                                                                                                                res[`${res.input_name}`] = e.target.value;
                                                                                                                if (res.question_type == 'DYNAMIC') {
                                                                                                                    res.answer = e.target.value;
                                                                                                                }
                                                                                                            }} />
                                                                                                        <div>
                                                                                                            {errors[res.input_name] && (
                                                                                                                <span className="text-danger fs-12">
                                                                                                                    {res.error_message}.
                                                                                                                </span>
                                                                                                            )}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                )}
                                                                                                {res.input_type == "file" && (
                                                                                                    <>
                                                                                                        <div>
                                                                                                            <div className="btn uploadBtn btn-danger waves-effect waves-light me-3">
                                                                                                                <i className="ri-upload-2-line align-bottom me-1"></i> Upload File
                                                                                                                <input
                                                                                                                    id="upload_device"
                                                                                                                    type="file"
                                                                                                                    className='input cursor-pointer'
                                                                                                                    onChange={(e: any) => {
                                                                                                                        onLoadImage(e, i)
                                                                                                                        // onLoadImage(e, i);
                                                                                                                        // alert(i)
                                                                                                                    }} />
                                                                                                            </div>
                                                                                                            <button
                                                                                                                type="button"
                                                                                                                className="btn btn-warning waves-effect waves-light">
                                                                                                                <i className="ri-download-2-line align-bottom me-1"></i>
                                                                                                                Template
                                                                                                            </button>
                                                                                                        </div>
                                                                                                        <div className="live-preview mt-2">
                                                                                                            <Progress animated color="success" value={res.progress ? res.progress : 0} className="my-3">
                                                                                                            </Progress>
                                                                                                            <div className="text-center">
                                                                                                                {`${res.progress ? res.progress : 0}`} %
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <hr />
                                                                                                    </>
                                                                                                )}
                                                                                            </Col>}
                                                                                    </>
                                                                                );
                                                                            }
                                                                            )}
                                                                    </Row>
                                                                    <div className="d-flex align-items-center mt-4 " style={{ justifyContent: 'center' }}>

                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-danger btn-label left m-3">
                                                                            <i className="ri-arrow-left-line label-icon align-middle fs-16 "></i>
                                                                            Previous
                                                                        </button>
                                                                        <button
                                                                            type="submit"
                                                                            className="btn  btn-label right  btn-warning m-3">
                                                                            <img src={Draft} className="label-icon label-icon2 align-middle ms-2" />
                                                                            Save as draft
                                                                        </button>
                                                                        <button
                                                                            type="submit"
                                                                            className="btn btn-success btn-label right  m-3">
                                                                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                                            Next
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </Container>
                                                        </React.Fragment>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg={3} sm={3}>
                                    <div className="card-header">
                                        <Card className="p-2 mb-0">
                                            <CardBody>
                                                <div className="company">
                                                    <div className="mb-4">
                                                        <h6 className="font-size-13 font-dark mb-4">
                                                            <span>Profile progress for all questions</span>
                                                        </h6>
                                                        <Row className="h-100">
                                                            <Col
                                                                lg={5}
                                                                sm={5}
                                                                className="text-center"
                                                                align="center">
                                                                <div
                                                                    style={{
                                                                        width: 100,
                                                                        height: 100,
                                                                        margin: "0 auto",
                                                                    }}>
                                                                    <CircularProgressbarWithChildren
                                                                        value={percentage}
                                                                        text={`${percentage}%`}
                                                                        strokeWidth={10}
                                                                        styles={buildStyles({
                                                                            strokeLinecap: "butt",
                                                                        })} />
                                                                </div>
                                                            </Col>
                                                            <Col lg={7} sm={7} className="my-auto">
                                                                <p>
                                                                    Congrats! <br /> you can now access the
                                                                    <br />
                                                                    <Link to="#">{HelperService.getTitleCase(props.type)} Panel</Link>{" "}
                                                                </p>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="profile-list mt-4">
                                                        {formData &&
                                                            formData.length > 0 &&
                                                            formData.map((item: any, index: any) => {
                                                                return (
                                                                    <>
                                                                        <b className={index < section ? 'pointer link-active mt-1' : 'pointer'}>
                                                                            {index < section ? <img
                                                                                src={checked}
                                                                                alt=""
                                                                                width={18}
                                                                                height={18} /> : <Input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                disabled />}
                                                                            <span className="ms-2">{item.title}</span>
                                                                        </b>
                                                                    </>
                                                                );
                                                            })}
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <PreviewModal
                    modelName={modelName}
                    toggleModel={toggleModel}
                    show={modelName === "PreviewModal" ? true : false}
                    onCloseClick={() => setModelName("")} />
            </React.Fragment></>
    );
};

export default SignupFormLayout;
