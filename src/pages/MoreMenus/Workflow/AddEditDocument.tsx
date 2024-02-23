import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Row, Col, FormFeedback, Button, Spinner, UncontrolledTooltip } from "reactstrap";
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
    substageId?: any;
};

const AddEditDocument = (props: propData) => {

    const [error, setError] = useState<any>(false);
    const [langaugedata, setLanguageData] = useState<any>([]);

    useEffect(() => {
        props.show && getlanguagelist();
    }, [props.show, props.formData?.language_data]);

    const validation = useFormik({
        initialValues: {
            language_data: [],
        },
        validationSchema: Yup.object(),

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
            if (props.formData?.documentId ) {
                let data = { "documentId": props.formData.documentId, "language_data": langaugedata, "userid": localdata.userId , "substageId": props.substageId };
                WebService.postAPI({
                    action: "/edit-workflow-document",
                    body: data,
                    id: "addedit-document-submit-btn",
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
                let data = { "language_data": langaugedata, "userid": localdata.userId , "substageId": props.substageId , "type":"default"};
                WebService.postAPI({
                    action: "/add-workflow-document",
                    body: data,
                    id: "addedit-document-submit-btn",
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

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {props.formData && props.formData.documentId  ? "Edit Document" : "Add Document"}
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
                                                <Label htmlFor="name-field" className="form-label"> Document Title ({item.name ? HelperService.getTitleCase(item.name) : ''})</Label>
                                                <Input
                                                    id="customername-field"
                                                    className="form-control"
                                                    placeholder="Enter Document Title"
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
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <Button
                        type="submit"
                        id="addedit-document-submit-btn"
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

export default AddEditDocument;
