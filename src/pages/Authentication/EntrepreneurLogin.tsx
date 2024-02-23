import React, { useEffect, useState } from "react";
import { Button, Card, CardHeader, Col, Label, Row } from "reactstrap";
import WebService from "../../utility/WebService";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../Components/Select/CustomDropdown";
import HelperService from "../../utility/HelperService";

const EntrepreneurLogin = () => {
    const {
        register,
        control,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
    } = useForm();
    const watchAllFields = watch()
    const [entrepreneur, setEntrepreneur] = useState<any>([])
    const [termsandConditions, setTermsandConditions] = useState<any>(true)


    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        WebService.postAPI({
            action: "/entrepreneur-signup-formbuilder",
        })
            .then((res: any) => {
                setEntrepreneur(res.result.applicationsections)
            })
            .catch((error: any) => {
            });
    };


    const onSave = (data: any) => {
        console.log('entrepreneur', entrepreneur);
    }


    return (
        <>
            <div className="menuStepsBg" style={{ height: "105px", backgroundColor: '#FFFFFF', maxHeight: '90px', width: '100%', zIndex: '8' }}>
                <div style={{ paddingLeft: '450px', marginRight: 'auto', maxWidth: "500px" }}>
                    <div className="row">
                        <div className="col-lg-9 col-sm-11 floatNone" style={{ position: "relative", minHeight: '1px' }}>
                            <div className="stepwizard" style={{ display: 'table-cell', textAlign: 'center', position: 'relative' }}>
                                <div className="stepwizard-row setup-panel" style={{ display: 'flex' }} >
                                    <input id="adminId" type="hidden" value="0" />
                                    {entrepreneur &&
                                        entrepreneur.length > 0 &&
                                        entrepreneur.map((item: any) => {
                                            return (
                                                <>
                                                    <div className="stepwizard-step" style={{ width: '230px' }}>
                                                        <a id="tab_step_1" href="#step-1" type="button" className="btn btn-circle pointer section_tab btn-primary active">
                                                            <img src="http://localhost/scip_web/templates/default/images/steps/step-active-1.svg" alt="image" width="35" height="35" />
                                                            <span>{item.title}</span>
                                                            <input type="hidden" id="inp_count_step_1" value="0" />
                                                            <div className="progressBatch" style={{ display: 'none' }}>
                                                                <span id="count_step_1" className="cnt">0</span>
                                                                <span className="cnt">%</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <Card id="leadsList">
                    {entrepreneur && entrepreneur[0] && entrepreneur[0].application_sub_sections && entrepreneur[0].application_sub_sections[0]
                        && entrepreneur[0].application_sub_sections[0].application_sub_sections_question && entrepreneur[0].application_sub_sections.length > 0
                        && entrepreneur[0].application_sub_sections.map((res: any) => {

                            return (
                                <>
                                    <Row>
                                        <Col lg={8}>
                                            <span
                                                dangerouslySetInnerHTML={{ __html: res.description }}
                                            />
                                        </Col>
                                    </Row>
                                </>
                            );
                        })}

                    {entrepreneur && entrepreneur[0] && entrepreneur[0].application_sub_sections && entrepreneur[0].application_sub_sections[0]
                        && entrepreneur[0].application_sub_sections[0].application_sub_sections_question && entrepreneur[0].application_sub_sections[0].application_sub_sections_question.length > 0
                        && entrepreneur[0].application_sub_sections[0].application_sub_sections_question.map((res: any, i: any) => {

                            return (
                                <>
                                    <Row>
                                        <Col lg={8}>
                                            <CardHeader className="border-0">
                                                <Row className="mb-4">
                                                    <Label htmlFor="name-field" className="form-label">
                                                        {res.question_title} <span className="text-danger">*</span>
                                                    </Label>
                                                    {(res.input_type == "text" && res.application_sub_sections_question_options && res.application_sub_sections_question_options.length > 0) &&
                                                        <>  <Col lg={8}>
                                                            <div className="mb-2">
                                                                <Controller
                                                                    control={control}
                                                                    name={res.input_name + '_que_id'}
                                                                    render={({ field }) => (
                                                                        <CustomDropdown
                                                                            options={res.application_sub_sections_question_options}
                                                                            isSearchable={true}
                                                                            onChange={(data: any) => {
                                                                                field.onChange(data.id);
                                                                                res[`${res.input_name}`] = data.id
                                                                            }}
                                                                        />
                                                                    )}
                                                                />
                                                                <div>
                                                                    {errors[`${res.input_name}`] && (
                                                                        <span className="text-danger fs-12">
                                                                            {" "}
                                                                            {res.error_message}.
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </Col>
                                                            <Col lg={8}>
                                                                <div className="mb-2">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        autoComplete="off"
                                                                        {...register(res.input_name, {
                                                                            required: res.is_mandatory == 'Y' ? true : false,
                                                                        })}
                                                                        onChange={(e) => res[`${res.input_name}` + "_ans"] = e.target.value}
                                                                    />
                                                                    <div>
                                                                        {errors[`${res.input_name}`] && (
                                                                            <span className="text-danger fs-12">{res.error_message}</span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </Col></>
                                                    }
                                                    {(res.input_type == "text" && res.application_sub_sections_question_options && res.application_sub_sections_question_options.length == 0) &&
                                                        <Col lg={8}>
                                                            <div className="mb-2">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    autoComplete="off"
                                                                    {...register(res.input_name, {
                                                                        required: res.is_mandatory == 'Y' ? true : false,
                                                                    })}
                                                                    onChange={(e) => res[`${res.input_name}`] = e.target.value}
                                                                />
                                                                <div>
                                                                    {errors[`${res.input_name}`] && (
                                                                        <span className="text-danger fs-12">{res.error_message}</span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    }
                                                    {res.input_type == "email" &&
                                                        <Col lg={8}>
                                                            <div className="mb-2">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    autoComplete="off"
                                                                    {...register(res.input_name, {
                                                                        required: res.is_mandatory == 'Y' ? true : false,
                                                                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                                                                    })}
                                                                    onChange={(e) => res[`${res.input_name}`] = e.target.value}
                                                                />
                                                                <div>
                                                                    {errors[`${res.input_name}`] &&
                                                                        !watchAllFields[`${res.input_name}`] && (
                                                                            <span className="text-danger fs-12">
                                                                                {res.error_message}
                                                                            </span>
                                                                        )}
                                                                    {watchAllFields[`${res.input_name}`] &&
                                                                        !HelperService.isValidEmail(
                                                                            watchAllFields[`${res.input_name}`]
                                                                        ) ? (
                                                                        <span className="text-danger fs-12">
                                                                            Please Enter Valid Email Address.
                                                                        </span>
                                                                    ) : (
                                                                        ""
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </Col>}
                                                    {(res.input_type == "password" && res.input_name == "password") &&
                                                        <Col lg={8}>
                                                            <div className="mb-2">
                                                                <input
                                                                    id="password"
                                                                    type="password"
                                                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}



                                                                    // className="form-control"
                                                                    autoComplete="off"
                                                                    {...register(res.input_name, {
                                                                        required: res.is_mandatory == 'Y' ? true : false,
                                                                    })}
                                                                    onChange={(e) => res[`${res.input_name}`] = e.target.value}
                                                                />
                                                                <div>
                                                                    {errors[`${res.input_name}`] && (
                                                                        <span className="text-danger fs-12">{res.error_message}</span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    }
                                                    {(res.input_type == "password" && res.input_name == "confirm_password") &&
                                                        <Col lg={8}>
                                                            <div className="mb-2">
                                                                <input
                                                                    id="confirm_password"
                                                                    type="password"
                                                                    // className="form-control"
                                                                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                                                    placeholder="Confirm Password"
                                                                    autoComplete="off"
                                                                    {...register(res.input_name, { required: res.is_mandatory == 'Y' ? true : false, validate: (value: any) => value == getValues("password") }
                                                                    )}
                                                                    onChange={(e) => res[`${res.input_name}`] = e.target.value}
                                                                />
                                                                <div>
                                                                    {errors[`${res.input_name}`] && (
                                                                        <span className="text-danger fs-12">Please Enter Password</span>
                                                                    )}
                                                                    {/* {errors[`${res.input_name}`] && (
                                                                        <span className="text-danger fs-12">Please Confirm Password</span>
                                                                    )} */}
                                                                </div>
                                                            </div>
                                                        </Col>}
                                                    {res.input_type == "checkbox" && (
                                                        <Col lg={8}>
                                                            <div className="">
                                                                <input type="checkbox"
                                                                    value=""
                                                                    {...register(res.input_name, {
                                                                        required: res.is_mandatory == 'Y' ? true : false,
                                                                    })}
                                                                    onChange={() => {
                                                                        setTermsandConditions(!termsandConditions)
                                                                        res[`${res.input_name}`] = termsandConditions
                                                                    }
                                                                    }
                                                                />
                                                            </div>
                                                            <div>
                                                                {errors[`${res.input_name}`] && (
                                                                    <span className="text-danger fs-12">{res.error_message}</span>
                                                                )}
                                                            </div>
                                                        </Col>
                                                    )}
                                                    {res.input_type == "select" && (
                                                        <>  <Col lg={8}>
                                                            <div className="mb-2">
                                                                <Controller
                                                                    control={control}
                                                                    name={res.input_name + '_que_id'}
                                                                    render={({ field }) => (
                                                                        <CustomDropdown
                                                                            options={res.options}
                                                                            isSearchable={true}
                                                                            onChange={(data: any) => {
                                                                                field.onChange(data.id);
                                                                                res[`${res.input_name}`] = data.id
                                                                            }}
                                                                        />
                                                                    )}
                                                                />
                                                                <div>
                                                                    {errors[`${res.input_name}`] && (
                                                                        <span className="text-danger fs-12">
                                                                            {" "}
                                                                            {res.error_message}.
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </Col></>
                                                    )}
                                                </Row>
                                            </CardHeader>
                                        </Col>
                                    </Row >
                                </>
                            );
                        })}
                    <div className="">
                        <Button
                            type="submit"
                            id="entrepreneur-login-submit-btn"
                            color="primary"
                            className="btn-brand-theme cursor-pointer">
                            Submit
                        </Button>
                    </div>
                </Card>
            </form >
        </>
    )

}
export default EntrepreneurLogin;