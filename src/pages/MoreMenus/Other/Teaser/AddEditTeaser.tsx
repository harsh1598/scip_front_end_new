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
import HelperService from "../../../../utility/HelperService";
import WebService from "../../../../utility/WebService";
import toast from "react-hot-toast";
import SampleFileForOpenBlade from "./SampleFileForOpenBlade";

interface propData {
    show: boolean
    onCloseClick: any
    Id: any
}

const AddEditTeaser = (props: propData) => {
    const {
        register,
        reset,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const [isEditableSelected, setIsEditableSelected] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [documentName, setDocumentName] = useState<any>();
    const [image, setImage] = useState<any>(null);
    const [parentOption, setParentOption] = useState<any>([]);
    const [parentSelected, setParentSelected] = useState<any>([]);
    const [isShowSampleBlade, setIsShowSampleBlade] = useState(false);

    useEffect(() => {
        getParentList();
        if (props?.Id) {
            getDetail()
        }
    }, [props.show, props?.Id])

    const onCloseModal = () => {
        reset();
        props.onCloseClick();
    };

    const onSave = (data: any) => {
        if (documentName) {
            setLoading(true);
            WebService.postAPI({
                action: props.Id ? `/teaser/edit` : `/teaser/add`,
                body: data,
                id: 'teaser-submit-btn'
            })
                .then((res: any) => {
                    if (image && res.teaser_id) {
                        uploadlogo(res.teaser_id)
                    }
                    toast.success(res.message);
                    props.onCloseClick(!props.show);
                })
                .catch((e) => {
                    setLoading(false);
                });
        } else {
            toast.error("Please Upload Logo")
        }
    }

    const getParentList = () => {
        WebService.getAPI({
            action: `/teaser/list`,
            body: null,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].teaser_id , value: res.list[i].title });
                }
                setParentOption(array);
            })
            .catch((e) => { });
    };

    const getDetail = () => {
        setLoading(true);
        WebService.getAPI({
            action: `/teaser/details/${props.Id}`,
        })
            .then((res: any) => {
                reset(res.result)
                setIsEditableSelected(res.result.is_editable)
                setDocumentName(res.result?.logoName)
                setParentSelected(res.result.parent_id)
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const isEditableList = [
        { id: 'Y', value: 'Yes' },
        { id: 'N', value: 'No' },
    ];

    const onLoadImage = (e: any) => {
        const { files } = e.target;
        if (files && files[0]) {
            setDocumentName(files[0].name);
            setValue("logo", files[0].name)
            setImage(files[0]);
        }
        e.target.value = '';
    }

    const uploadlogo = (id: any) => {
        WebService.fileUploadAPI({
            action: `/teaser/image-upload`,
            key: 'logo',
            file: image,
            body: {
                teaser_id: id,
                logo: documentName,

            },
        }).then((res: any) => {
        }).catch((error: any) => {
        });
    };

    const closeSampleBlade = () => {
        setIsShowSampleBlade(false)
    }

    return (
        <>
         {isShowSampleBlade &&
        <SampleFileForOpenBlade
            show={isShowSampleBlade}
            onCloseClick={closeSampleBlade}
             />
        }
        <Offcanvas
        isOpen={props.show}
        onHide={onCloseModal}
        toggle={props.onCloseClick}
        direction="end"
        className="border-bottom"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                {props.Id ? "Edit Teaser" : "Add Teaser"}
            </OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Title <span className="text-danger">*</span>
                                </Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title"
                                    autoComplete="off"
                                    {...register("title", {
                                        required: true,
                                    })}
                                />
                                <div>
                                    {errors.title && (
                                        <span className="text-danger fs-12">Please Enter Title</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Parent Id
                                </Label>
                                <Controller
                                    control={control}
                                    name="parent_id"
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={parentOption}
                                            selected={parentSelected}
                                            isSearchable={true}
                                            placeholder="Select Parent Id"
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setParentSelected(data);
                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Is Editable <span className="text-danger">*</span>
                                </Label>
                                <Controller
                                    control={control}
                                    name="is_editable"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={isEditableList}
                                            selected={isEditableSelected}
                                            isSearchable={true}
                                            placeholder="Select Is Editable"
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setIsEditableSelected(data);
                                            }}
                                        />
                                    )}
                                />
                                <div>
                                    {errors.is_editable && (
                                        <span className="text-danger fs-12">Please Select Is Editable</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                   
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Seq No <span className="text-danger">*</span>
                                </Label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Seq No"
                                    autoComplete="off"
                                    {...register("seq_no", {
                                        required: true,
                                    })}
                                    onKeyPress={(e) =>
                                        HelperService.allowOnlyNumericValue(e)
                                    }
                                />
                                <div>
                                    {errors.seq_no && (
                                        <span className="text-danger fs-12">Please Enter Seq No</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label"> Select Image File: <span className='text-danger'>*</span></Label>
                                <div className="d-flex align-items-center form-control">
                                    <div className='attachment-btn '>
                                        <input
                                            id="upload_device"
                                            type="file"
                                            className='input'
                                            onChange={(e: any) => {
                                                onLoadImage(e)
                                            }
                                            }
                                        />
                                        <i className='ri ri-attachment-line icon' />
                                    </div>
                                    {documentName ? documentName : <span className=" text-black-50 ms-1">No File Selected.</span>}

                                </div>
                                {/* {documentName} */}
                            </div>
                        </Col>

                        <Col lg={12}>
                        <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => {
                            setIsShowSampleBlade(true)
                        }}
                    >
                        Sample Blade
                    </button>
                        </Col>
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

export default AddEditTeaser;
