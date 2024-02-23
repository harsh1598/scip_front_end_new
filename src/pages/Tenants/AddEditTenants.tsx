import React, { useEffect } from "react";
import { Button, Card, CardHeader, Col, Container, FormFeedback, Input, Label, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useState } from "react";
import WebService from "../../utility/WebService";
import Select from "react-select";
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Preview from "../../assets/images/preview.png";
import { imgPath } from "../../Components/constants/layout";

const AddEditTenants = () => {

    const [documentName, setDocumentName] = useState<any>();
    const [image, setImage] = useState<any>();
    let { id } = useParams();
    const history = useNavigate();
    const [error, setError] = useState<any>(false);

    const [validations, setValidations] = useState<any>({
        name: Yup.string().required("Please Enter Name"),
        company_name: Yup.string().required("Please Enter Comapany Name"),
        // logo: Yup.string().required("Please Enter logo"),
        website: Yup.string().required("Please Enter website"),
        mobile: Yup.number().min(10, 'Must be more than 10 characters').required("Please Enter mobile"),
        mobile_country_code: Yup.number().required("Please Enter Mobile Country Code"),
        description: Yup.string().required("Please Enter Description"),
        subdomain: Yup.string().required("Please Enter Subdomain"),
        db_ip: Yup.string().required("Please Enter db-ip"),
        db_port: Yup.string().required("Please Enter db-port"),
        db_name: Yup.string().required("Please Enter db-name"),
        db_username: Yup.string().required("Please Enter db-username"),
        // db_password: Yup.string().required("Please Enter db-password"),
        api_base_url: Yup.string().required("Please Enter api-base_url"),
        type: Yup.string().required("Please Select Type"),
    });

    useEffect(() => {

        if (id) {
            getDetail();
        }

    }, []);

    const type = [
        { value: 'SYNDICATE', label: 'SYNDICATE' },
    ];

    const validation = useFormik({
        initialValues: {
            name: "",
            company_name: "",
            website: "",
            mobile: "",
            mobile_country_code: "",
            description: "",
            subdomain: "",
            db_ip: "",
            db_port: "",
            db_name: "",
            db_username: "",
            db_password: "",
            api_base_url: "",
            type: ""
        },
        validationSchema: Yup.object(validations),

        onSubmit: (values, { resetForm }) => {
            if (id) {
                let data = { "uuid": id, "name": values.name, "company_name": values.company_name,  "website": values.website, "mobile": values.mobile, "mobile_country_code": values.mobile_country_code, "description": values.description, "subdomain": values.subdomain, "db_ip": values.db_ip, "db_port": values.db_port, "db_name": values.db_name, "db_username": values.db_username, "db_password": values.db_password, "api_base_url": values.api_base_url, "type": values.type };
                WebService.postAPI({
                    action: "/edit-tenants",
                    body: data,
                    id: "add-tenants-submit-btn",
                }).then((res: any) => {
                    if (documentName) {
                        uploadlogo(res.uuid);
                    } else {
                        toast.success(res.message);
                        resetForm();
                        history('/manage-tenants')
                    }
                }).catch((error: any) => {
                    setError(error);
                });
            } else {
                let data = { "name": values.name, "company_name": values.company_name,  "website": values.website, "mobile": values.mobile, "mobile_country_code": values.mobile_country_code, "description": values.description, "subdomain": values.subdomain, "db_ip": values.db_ip, "db_port": values.db_port, "db_name": values.db_name, "db_username": values.db_username, "db_password": values.db_password, "api_base_url": values.api_base_url, "type": values.type };
                WebService.postAPI({
                    action: "/add-tenants",
                    body: data,
                    id: "add-tenants-submit-btn",
                }).then((res: any) => {
                    if (res && res.uuid) {
                        if (documentName) {
                            uploadlogo(res.uuid);
                        } else {
                            toast.success(res.message);
                            resetForm();
                            history('/manage-tenants')
                        }
                    }
                }).catch((error: any) => {
                    setError(error);
                });
            }
        },
    });

    const onCloseBlade = () => {
        validation.resetForm();
        window.history.back();
    };

    const getDetail = () => {
        WebService.getAPI({
            action: `/tenants-details/` + id,
        }).then((res: any) => {
            if (res && res.result) {
                validation.setFieldValue("name", res.result.name);
                validation.setFieldValue("company_name", res.result.company_name);
                // validation.setFieldValue("logo", res.result.logo);
                validation.setFieldValue("website", res.result.website);
                validation.setFieldValue("mobile", res.result.mobile);
                validation.setFieldValue("mobile_country_code", res.result.mobile_country_code);
                validation.setFieldValue("description", res.result.description);
                validation.setFieldValue("subdomain", res.result.subdomain);
                validation.setFieldValue("db_ip", res.result.db_ip);
                validation.setFieldValue("db_port", res.result.db_port);
                validation.setFieldValue("db_name", res.result.db_name);
                validation.setFieldValue("db_username", res.result.db_username);
                validation.setFieldValue("db_password", res.result.db_password);
                validation.setFieldValue("api_base_url", res.result.api_base_url);
                validation.setFieldValue("type", res.result.type);
                setImage(imgPath(res.result.logo))
            }
        }).catch((error: any) => {

        });
    };

    const uploadlogo = (uuid: any) => {

        WebService.fileUploadAPI({
            action: `/image-upload`,
            key: 'image',
            file: documentName,
            body: {
                uuid: uuid
            },
        }).then((res: any) => {
            if (res && res.url) {
                toast.success(res.message);
                history('/manage-tenants')
            }
        }).catch((error: any) => {

        });
    };

    const onLoadImage = (event: any) => {
        const { files } = event.target;
        if (files && files[0]) {
            setDocumentName(files[0]);
            setImage(URL.createObjectURL(files[0]));
        }
        event.target.value = '';
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title={id ? "Edit Tenants" : "Add Tenants"} pageTitle={id ? "Edit Tenants" : "Add Tenants"} location={"/role"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <form onSubmit={(e) => {
                                        validation.handleSubmit();

                                        e.preventDefault();
                                        return false;
                                    }} className="d-flex flex-column justify-content-end h-100">
                                        <Row className="mb-0">
                                            <Col sm={6}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label">
                                                        Name
                                                    </Label>
                                                    <Input
                                                        name="name"
                                                        id="name-field"
                                                        className="form-control"
                                                        placeholder="Enter Name"
                                                        type="text"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.name || ""}
                                                        invalid={
                                                            validation.touched.name && validation.errors.name
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.name && validation.errors.name ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.name}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> Company name</Label>
                                                    <Input
                                                        name="company_name"
                                                        id="company_name-field"
                                                        className="form-control"
                                                        placeholder="Enter Company Name"
                                                        type="text"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.company_name || ""}
                                                        invalid={
                                                            validation.touched.company_name && validation.errors.company_name
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.company_name && validation.errors.company_name ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.company_name}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-0">
                                            <Col sm={6}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> Website</Label>
                                                    <Input
                                                        name="website"
                                                        id="website-field"
                                                        className="form-control"
                                                        placeholder="Enter website"
                                                        type="text"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.website || ""}
                                                        invalid={
                                                            validation.touched.website && validation.errors.website
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.website && validation.errors.website ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.website}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> Subdomain</Label>
                                                    <Input
                                                        name="subdomain"
                                                        id="subdomain-field"
                                                        className="form-control"
                                                        placeholder="Enter Subdomain"
                                                        type="text"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.subdomain || ""}
                                                        invalid={
                                                            validation.touched.subdomain && validation.errors.subdomain
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.subdomain && validation.errors.subdomain ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.subdomain}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={4}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> Type </Label>
                                                    <Select
                                                        options={type}
                                                        name="type"
                                                        onChange={(e: any) => validation.setFieldValue("type", e?.value)}
                                                        value={type.filter((item: any) => { return item.value == validation.values.type })}
                                                        onBlur={() => { !validation.values.type && validation.setFieldError("type", "Please Select Type") }}
                                                    />
                                                    {!validation.values.type && validation.errors.type ? (
                                                        <span className="text-danger fs-11">
                                                            {validation.errors.type}
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> Mobile</Label>
                                                    <Input
                                                        name="mobile"
                                                        id="mobile-field"
                                                        className="form-control"
                                                        placeholder="Enter mobile"
                                                        type="number"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.mobile || ""}
                                                        invalid={
                                                            validation.touched.mobile && validation.errors.mobile
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.mobile && validation.errors.mobile ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.mobile}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> Mobile Country Code</Label>
                                                    <Input
                                                        name="mobile_country_code"
                                                        id="mobile_country_code-field"
                                                        className="form-control"
                                                        placeholder="Enter Mobile Country Code"
                                                        type="number"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.mobile_country_code || ""}
                                                        invalid={
                                                            validation.touched.mobile_country_code && validation.errors.mobile_country_code
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.mobile_country_code && validation.errors.mobile_country_code ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.mobile_country_code}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-0">
                                            <Col sm={4}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> DB-PORT</Label>
                                                    <Input
                                                        name="db_port"
                                                        id="db_port-field"
                                                        className="form-control"
                                                        placeholder="Enter db-port"
                                                        type="text"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.db_port || ""}
                                                        invalid={
                                                            validation.touched.db_port && validation.errors.db_port
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.db_port && validation.errors.db_port ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.db_port}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> DB-Name</Label>
                                                    <Input
                                                        name="db_name"
                                                        id="db_name-field"
                                                        className="form-control"
                                                        placeholder="Enter db-name"
                                                        type="text"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.db_name || ""}
                                                        invalid={
                                                            validation.touched.db_name && validation.errors.db_name
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.db_name && validation.errors.db_name ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.db_name}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> DB-User Name</Label>
                                                    <Input
                                                        name="db_username"
                                                        id="db_username-field"
                                                        className="form-control"
                                                        placeholder="Enter db-username"
                                                        type="text"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.db_username || ""}
                                                        invalid={
                                                            validation.touched.db_username && validation.errors.db_username
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.db_username && validation.errors.db_username ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.db_username}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-0">
                                            <Col sm={4}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> DB-Password</Label>
                                                    <Input
                                                        name="db_password"
                                                        id="db_password-field"
                                                        className="form-control"
                                                        placeholder="Enter db-password"
                                                        type="text"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.db_password || ""}
                                                        invalid={
                                                            validation.touched.db_password && validation.errors.db_password
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.db_password && validation.errors.db_password ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.db_password}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> DB-IP</Label>
                                                    <Input
                                                        name="db_ip"
                                                        id="db_ip-field"
                                                        className="form-control"
                                                        placeholder="Enter db-ip"
                                                        type="text"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.db_ip || ""}
                                                        invalid={
                                                            validation.touched.db_ip && validation.errors.db_ip
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.db_ip && validation.errors.db_ip ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.db_ip}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> Api-base-Url</Label>
                                                    <Input
                                                        name="api_base_url"
                                                        id="api_base_url-field"
                                                        className="form-control"
                                                        placeholder="Enter db-api-base-url"
                                                        type="text"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.api_base_url || ""}
                                                        invalid={
                                                            validation.touched.api_base_url && validation.errors.api_base_url
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    {validation.touched.api_base_url && validation.errors.api_base_url ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.api_base_url}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-0">
                                            <Col sm={6}>
                                                <Row>
                                                    <Col xs="12" lg="5">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">logo</label>
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
                                                        <img src={image ? image : Preview} className="mt-4" alt="Preview" style={{ width: "100%" }} />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label"> Description</Label>
                                                    <textarea className="form-control" id="description" rows={2} name="description"
                                                        onChange={validation.handleChange} onBlur={validation.handleBlur}
                                                        placeholder="Enter Description"
                                                        defaultValue={validation.values.description} >
                                                    </textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                                            <Button
                                                type="submit"
                                                id="add-tenants-submit-btn"
                                                disabled={error ? true : false}
                                                color="primary" className="btn-brand-theme"
                                            >
                                                Submit
                                            </Button>
                                            <button type="button" className="btn btn-light" onClick={() => onCloseBlade()} >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default AddEditTenants;
