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
import WebService from "../../utility/WebService";
import CustomDropdown from "../Select/CustomDropdown";
import HelperService from "../../utility/HelperService";

interface propData {
    show: boolean
    onCloseClick: any
    layoutData: any
    updatedData: any
}

const AddCustomDealFormLayout = (props: propData) => {
    const {
        register,
        reset,
        watch,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const watchAllFields = watch();
    const [formData, setFormData] = useState<any>()
    const [tableList, setTableList] = useState<any[]>([]);
    const [tableFields, setTableFields] = useState<any[]>([]);
    const [tableFields2, setTableFields2] = useState<any[]>([]);
    const [tableFieldsValueSelected, setFieldValueSelected] = useState<any>([]);
    const [typeSelected, setTypeSelected] = useState<any>([]);
    const [tableSelected, setTableSelected] = useState<any>([]);
    const [valueFromTable, setValueFromTable] = useState<any>([]);
    const [fieldFromTable, setFieldFromTable] = useState<any>([]);
    const [fieldRelation, setFieldRelation] = useState<any>([]);
    const [tableFieldsTitle, setFieldTitleSelected] = useState<any>([]);
    useEffect(() => {
        if (props.layoutData.section == 'QUESTION' || props.layoutData.section == 'COMPANY_SUMMARY_CARD') {
            getTableList();
        }
    }, [])

    useEffect(() => {
        if (props.layoutData) {
            reset(props.layoutData)
            if (props.layoutData.select_source_table) {
                getTableFieldList(props.layoutData.select_source_table)
                if (props.layoutData.value_from_table) {
                    getTableFieldList2(props.layoutData.value_from_table)
                }
                if (props.layoutData?.source_table_field_to_show) {
                    setFieldValueSelected(props.layoutData.source_table_field_to_show);
                }
                if (props.layoutData?.select_source_table) {
                    setTableSelected(props.layoutData.select_source_table);
                }
                if (props.layoutData?.source_table_relation) {
                    setFieldTitleSelected(props.layoutData.source_table_relation);
                }
                if (props.layoutData?.type) {
                    setTypeSelected(props.layoutData.type);
                }
                if (props.layoutData?.value_from_table) {
                    setValueFromTable(props.layoutData.value_from_table);
                }
                if (props.layoutData?.field_to_show) {
                    setFieldFromTable(props.layoutData.field_to_show);
                }
                if (props.layoutData?.field_relation) {
                    setFieldRelation(props.layoutData.field_relation);
                }
            }

        }
    }, [props.layoutData])


    const onCloseModal = () => {
        reset();
        setTypeSelected("resetsawin");
        setFieldValueSelected("resetsawin");
        setValueFromTable("resetsawin");
        setTableSelected("resetsawin");
        setFieldTitleSelected("resetsawin");
        setFieldFromTable("resetsawin");
        setFieldRelation("resetsawin");
        props.onCloseClick();
    };
    const onSave = (data: any) => {
        console.log(data)
        props.updatedData(data)
        props.onCloseClick(!props.show);
        setFieldValueSelected("resetsawin");
        setTableSelected("resetsawin");
        setValueFromTable("resetsawin");
        setFieldTitleSelected("resetsawin");
        setTypeSelected("resetsawin");
        setFieldFromTable("resetsawin");
        setFieldRelation("resetsawin");
    }
    const getTableList = () => {
        WebService.getAPI({
            action: `/all-table-list`,
            body: null,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({
                        id: res.list[i].table_name,
                        value: res.list[i].table_name,
                    });
                }
                setTableList(array);
            })
            .catch((e) => { });
    };
    const getTableFieldList = (table_name: any) => {
        var obj: any = {};
        obj.table_name = table_name;
        WebService.getAPI({
            action: `/all-table-coloumn`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({
                        id: res.list[i].Field,
                        value: res.list[i].Field,
                    });
                }
                setTableFields(array);
            })
            .catch((e) => { });
    };
    const getTableFieldList2 = (table_name: any) => {
        var obj: any = {};
        obj.table_name = table_name;
        WebService.getAPI({
            action: `/all-table-coloumn`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({
                        id: res.list[i].Field,
                        value: res.list[i].Field,
                    });
                }
                setTableFields2(array);
            })
            .catch((e) => { });
    };


    return (
        <>
            <Offcanvas
                isOpen={props.show}
                onHide={onCloseModal}
                toggle={props.onCloseClick}
                direction="end"
                className="border-bottom size-md"
            >
                <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                    Edit Custom Deal Form Layout
                </OffcanvasHeader>
                <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                    <OffcanvasBody>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Label <span className="text-danger">*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Label"
                                        autoComplete="off"
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        {errors.name && (
                                            <span className="text-danger fs-12">Please Enter Label</span>
                                        )}
                                    </div>
                                </div>

                            </Col>
                            {(props.layoutData.section == 'QUESTION' || props.layoutData.section == 'COMPANY_SUMMARY_CARD') &&

                                <Col lg={12}>
                                    <Row className="mt-1">
                                        <Col lg={6}>
                                            {/* <div className="mb-2"> */}
                                            <Label htmlFor="name-field" className="form-label">
                                                Question Title <span className="text-danger">*</span>
                                            </Label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Question Title"
                                                autoComplete="off"
                                                {...register("question_title", {
                                                    required: true,
                                                })}
                                            />
                                            <div>
                                                {errors.question_title && (
                                                    <span className="text-danger fs-12">Please Enter Label</span>
                                                )}
                                            </div>
                                            {/* </div> */}
                                        </Col>

                                        <Col lg={6}>
                                            <div className="mb-2">
                                                <Label htmlFor="name-field" className="form-label">
                                                    Source Table<span className="text-danger">*</span>
                                                </Label>
                                                {/* <label className="label">Source Table</label> */}
                                                <Controller
                                                    control={control}
                                                    name="select_source_table"
                                                    rules={{ required: true }}
                                                    render={({ field }) => (
                                                        <CustomDropdown
                                                            options={tableList}
                                                            selected={tableSelected}
                                                            isSearchable={true}
                                                            placeholder="Select"
                                                            onChange={(data: any) => {
                                                                field.onChange(data.id);
                                                                setTableSelected(data.id);
                                                                getTableFieldList(data.id);
                                                            }}
                                                        />
                                                    )}
                                                />
                                                <div>
                                                    {errors.select_source_table && (
                                                        <span className="text-danger fs-12">Please Select Source Table</span>
                                                    )}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-2">
                                                <Label htmlFor="name-field" className="form-label">
                                                    Source Table Relation Field<span className="text-danger">*</span>
                                                </Label>
                                                <Controller
                                                    control={control}
                                                    name="source_table_relation"
                                                    rules={{ required: true }}
                                                    render={({ field }) => (
                                                        <CustomDropdown
                                                            options={tableFields}
                                                            selected={tableFieldsTitle}
                                                            isSearchable={true}
                                                            placeholder="Select"
                                                            onChange={(data: any) => {
                                                                field.onChange(data.id);
                                                                setFieldTitleSelected(data.id);
                                                            }}
                                                        />
                                                    )}
                                                />
                                                <div>
                                                    {errors.source_table_relation && (
                                                        <span className="text-danger fs-12">Please Select Source Table Relation Field</span>
                                                    )}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-2">
                                                <Label htmlFor="name-field" className="form-label">
                                                    Source Table Field To Show<span className="text-danger">*</span>
                                                </Label>
                                                <Controller
                                                    control={control}
                                                    name="source_table_field_to_show"
                                                    rules={{ required: true }}
                                                    render={({ field }) => (
                                                        <CustomDropdown
                                                            options={tableFields}
                                                            selected={tableFieldsValueSelected}
                                                            isSearchable={true}
                                                            placeholder="Select"
                                                            onChange={(data: any) => {
                                                                field.onChange(data.id);
                                                                setFieldValueSelected(data.id);
                                                            }}
                                                        />
                                                    )}
                                                />
                                                <div>
                                                    {errors.source_table_field_to_show && (
                                                        <span className="text-danger fs-12">Please Select Source Table Field To Show</span>
                                                    )}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-2">
                                                <Label htmlFor="name-field" className="form-label">
                                                    Select Type<span className="text-danger">*</span>
                                                </Label>
                                                {/* <label className="label">Source Table</label> */}
                                                <Controller
                                                    control={control}
                                                    name="type"
                                                    rules={{ required: true }}
                                                    render={({ field }) => (
                                                        <CustomDropdown
                                                            options={[{ id: 'INPUT_FIELD', value: 'Text' }, { id: 'SELECT_FIELD', value: 'Dropdown' }]}
                                                            selected={typeSelected}
                                                            isSearchable={true}
                                                            placeholder="Select"
                                                            onChange={(data: any) => {
                                                                field.onChange(data.id);
                                                                setTypeSelected(data.id);
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
                                        {watchAllFields.type == 'SELECT_FIELD' &&
                                            < Col lg={6}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label">
                                                        From Table<span className="text-danger">*</span>
                                                    </Label>
                                                    {/* <label className="label">Source Table</label> */}
                                                    <Controller
                                                        control={control}
                                                        name="value_from_table"
                                                        rules={{ required: true }}
                                                        render={({ field }) => (
                                                            <CustomDropdown
                                                                options={tableList}
                                                                selected={valueFromTable}
                                                                isSearchable={true}
                                                                placeholder="Select"
                                                                onChange={(data: any) => {
                                                                    field.onChange(data.id);
                                                                    setValueFromTable(data.id);
                                                                    getTableFieldList2(data.id);
                                                                }}
                                                            />
                                                        )}
                                                    />
                                                    <div>
                                                        {errors.value_from_table && (
                                                            <span className="text-danger fs-12">Please Select From Table</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </Col>
                                        }
                                        {watchAllFields.type == 'SELECT_FIELD' &&
                                            <Col lg={6}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label">
                                                        Field Relation<span className="text-danger">*</span>
                                                    </Label>
                                                    <Controller
                                                        control={control}
                                                        name="field_relation"
                                                        rules={{ required: true }}
                                                        render={({ field }) => (
                                                            <CustomDropdown
                                                                options={tableFields2}
                                                                selected={fieldRelation}
                                                                isSearchable={true}
                                                                placeholder="Select"
                                                                onChange={(data: any) => {
                                                                    field.onChange(data.id);
                                                                    setFieldRelation(data.id);
                                                                }}
                                                            />
                                                        )}
                                                    />
                                                    <div>
                                                        {errors.field_relation && (
                                                            <span className="text-danger fs-12">Please Select Field Relation</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </Col>
                                        }
                                        {watchAllFields.type == 'SELECT_FIELD' &&
                                            <Col lg={6}>
                                                <div className="mb-2">
                                                    <Label htmlFor="name-field" className="form-label">
                                                        Field To Show<span className="text-danger">*</span>
                                                    </Label>
                                                    <Controller
                                                        control={control}
                                                        name="field_to_show"
                                                        rules={{ required: true }}
                                                        render={({ field }) => (
                                                            <CustomDropdown
                                                                options={tableFields2}
                                                                selected={fieldFromTable}
                                                                isSearchable={true}
                                                                placeholder="Select"
                                                                onChange={(data: any) => {
                                                                    field.onChange(data.id);
                                                                    setFieldFromTable(data.id);
                                                                }}
                                                            />
                                                        )}
                                                    />
                                                    <div>
                                                        {errors.field_to_show && (
                                                            <span className="text-danger fs-12">Please Select Field To Show</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </Col>
                                        }
                                    </Row>
                                </Col>

                            }
                            {/* {props.layoutData.section == 'COMPANY_SECTION' &&
                                <Col lg={12}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Word Limit <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Word Limit"
                                            autoComplete="off"
                                            {...register("word_limit", {
                                                required: true,
                                            })}
                                            onKeyPress={(e) =>
                                                HelperService.allowOnlyNumericValue(e)
                                            }
                                        />
                                        <div>
                                            {errors.word_limit && (
                                                <span className="text-danger fs-12">Please Enter Word Limit</span>
                                            )}
                                        </div>
                                    </div>

                                </Col>
                            } */}

                        </Row>
                    </OffcanvasBody>
                    <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                        <button
                            type="submit"
                            className="btn btn-brand-theme"
                            id="teaser-submit-btn"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => {
                                onCloseModal()
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Offcanvas>
        </>
    );
};

export default AddCustomDealFormLayout;
