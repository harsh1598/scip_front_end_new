import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Row, Col, FormFeedback, Button, Spinner } from "reactstrap";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import WebService from "../../../utility/WebService";
import HelperService from "../../../utility/HelperService";

interface propData {
    show: boolean;
    onCloseClick: any;
    formData: any;
    setFormData: any;
    getlist: any;
    questionId:any
};

const AddEditNotesCriteria = (props: propData) => {

    const [error, setError] = useState<any>(false);
    const [langaugedata, setLanguageData] = useState<any>([]);
    const [validations, setValidations] = useState<any>({
        seq_no: Yup.number().required("Please Enter Sequence No"),
    });

    useEffect(() => {
        if (props.formData?.criteriaId) {
            validation.setFieldValue("seq_no", props.formData?.seq_no);
        }
    }, [props.formData]);

    useEffect(() => {
        props.show && getlanguagelist();
    }, [props.show, props.formData?.language_data]);

    const validation = useFormik({
        initialValues: {
            seq_no: "",
            language_data: [],
        },
        validationSchema: Yup.object(validations),

        onSubmit: (values, { resetForm }) => {

            let isError: boolean = false;
            setLanguageData(langaugedata.map((item: any) => {
                if (!item.criteria_title) {
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
            if (props.formData?.criteriaId) {
                let data = { "criteriaId": props.formData.criteriaId, "questionId": props.questionId, "language_data": langaugedata, "userid": localdata.userId , "seq_no": values.seq_no};
                WebService.postAPI({
                    action: "/edit-question-criteria",
                    body: data,
                    id: "notes-criteria-submit-btn",
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
                let data = {"questionId": props.questionId, "language_data": langaugedata, "userid": localdata.userId ,"seq_no": values.seq_no};
                WebService.postAPI({
                    action: "/add-question-criteria",
                    body: data,
                    id: "notes-criteria-submit-btn",
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
                    res.result[i][`criteria_title`] = "";
                    res.result[i][`description`] = "";
                    res.result[i][`isError`] = 0;
                }
                if (props.formData?.language_data && props.formData?.language_data.length > 0) {
                    for (let j in props.formData?.language_data) {
                        res.result[j].criteria_title = props.formData?.language_data[j].criteria_title;
                        res.result[j].description = props.formData?.language_data[j].description;
                    }
                }
                setLanguageData(res.result);
            }
        }).catch((error: any) => {

        });
    };

    const handleLanguageFileds = () => {
        setLanguageData(langaugedata.map((item: any) => {
            if (!item.question_title) {
                item.isError = 1;
                return { ...item }
            } else {
                return item
            }
        }));
    }

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {props.formData && props.formData.criteriaId ? "Edit Note Criteria" : "Add Note Criteria"}
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
                                                <Label htmlFor="name-field" className="form-label"> Criteria Title ({item.name ? HelperService.getTitleCase(item.name) : ''})</Label>
                                                <Input
                                                    id="customername-field"
                                                    className="form-control"
                                                    placeholder="Enter Criteria Title"
                                                    type="text"
                                                    onChange={(e: any) => { langaugedata[ind].isError = 1; langaugedata[ind].criteria_title = e.target.value; setLanguageData([...langaugedata]) }}
                                                    onBlur={() => { langaugedata[ind].isError = 1; setLanguageData([...langaugedata]) }}
                                                    value={item.criteria_title || ""}
                                                    invalid={
                                                        item.isError == 1 &&
                                                            !item.criteria_title
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {item.isError == 1 && !item.criteria_title ? (
                                                    <FormFeedback type="invalid"> Please Enter Criteria Title</FormFeedback>
                                                ) : null}
                                            </div>
                                            <div className="mb-2">
                                                <Label htmlFor="name-field" className="form-label"> Description ({item.name ? HelperService.getTitleCase(item.name) : ''})</Label>
                                                <textarea className="form-control"
                                                    id="Description"
                                                    placeholder="Description"
                                                    onChange={(e: any) => { langaugedata[ind].isError = 1; langaugedata[ind].description = e.target.value; setLanguageData([...langaugedata]) }}
                                                    onBlur={() => { langaugedata[ind].isError = 1; setLanguageData([...langaugedata]) }}
                                                    defaultValue={item.description || ""}
                                                    rows={3}></textarea>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Sequence No
                                </Label>
                                <Input
                                    name="seq_no"
                                    id="customername-field"
                                    className="form-control"
                                    placeholder="Enter Sequence No"
                                    type="number"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.seq_no || ""}
                                    invalid={
                                        validation.touched.seq_no && validation.errors.seq_no
                                            ? true
                                            : false
                                    }
                                />
                                {validation.touched.seq_no && validation.errors.seq_no ? (
                                    <FormFeedback type="invalid">
                                        {validation.errors.seq_no}
                                    </FormFeedback>
                                ) : null}
                            </div>
                        </Col>
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <Button
                        type="submit"
                        id="notes-criteria-submit-btn"
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
        </Offcanvas>
    );
};

export default AddEditNotesCriteria;
