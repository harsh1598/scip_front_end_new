import React, { useEffect, useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,

} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../../../Components/Select/CustomDropdown";
import WebService from "../../../../utility/WebService";

interface propData {
    show: boolean;
    onCloseClick: any;
    formData: any
    setFilterData: any
};

const QuestionFilter = (props: propData) => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const [questionType, setQuestionType] = useState<any>([]);

    const oncloseBlade = () => {
        setQuestionType("resetsawin")

        var obj: any = {};
        reset(obj);
        props.onCloseClick();
    };

    useEffect(() => {
        setQuestionType("resetsawin")
        var obj: any = {};
        reset(obj);
    }, [props.show]);

    const onSave = (data: any) => {
        if (data) {
            props.setFilterData(data);
            props.onCloseClick();
        }
    };

    const statusList: any = [
        { id: "STANDARD", value: "STANDARD" },
        { id: "DYNAMIC", value: "DYNAMIC" }
    ];

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                Filters
            </OffcanvasHeader>
            {/*  h-100 */}
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Select Question Type</Label>
                                    <Controller
                                        control={control}
                                        name="question_type"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={statusList}
                                                selected={questionType}
                                                isSearchable={true}
                                                placeholder="Select Question Type"
                                                onChange={(data: any) => {
                                                    field.onChange(data);
                                                    setQuestionType(data);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => oncloseBlade()}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default QuestionFilter;
