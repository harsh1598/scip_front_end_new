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

const CampaignInfoFilter = (props: propData) => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    const [campaignOptions, setCampaignOptions] = useState<any>([])
    const [campaignSelected, setCampaignSelected] = useState<any>([])
    const [sectionOptions, setSectionOptions] = useState<any>([]);
    const [sectionSelected, setSectionSelected] = useState<any>([]);

    useEffect(() => {
        getCampaignTypeList();
        getSectionList();
    }, []);

    const oncloseBlade = () => {
        setCampaignSelected("resetsawin")
        setSectionSelected("resetsawin")
        var obj: any = {};
        reset(obj);
        props.onCloseClick();
    };

    useEffect(() => {
     
        setCampaignSelected("resetsawin")
        setSectionSelected("resetsawin")
        var obj: any = {};
        reset(obj);
    }, [props.show]);

    const onSave = (data: any) => {
        if (data) {
            console.log('data', data);
            props.setFilterData(data);
            props.onCloseClick();
        }
    };

    const getCampaignTypeList = () => {
        var obj: any = {}
        obj.table = "tblCampaignInfo"
        obj.field = "type"
        WebService.postAPI({
            action: `/campaigninfo/type-list`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].value });
                }
                setCampaignOptions(array);
            })
            .catch((e) => { });
    };

    const getSectionList = () => {
        var obj: any = {}
        obj.table = "tblCampaignInfo"
        obj.field = "column_section"
        WebService.postAPI({
            action: `/campaigninfo/type-list`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].value });
                }
                setSectionOptions(array);
            })
            .catch((e) => { });
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
                Filters
            </OffcanvasHeader>
            {/*  h-100 */}
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Type</Label>
                                    <Controller
                                        control={control}
                                        name="type"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={campaignOptions}
                                                selected={campaignSelected}
                                                isSearchable={true}
                                                placeholder="Select Type"
                                                onChange={(data: any) => {
                                                    field.onChange(data);
                                                    setCampaignSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Section</Label>
                                    <Controller
                                        control={control}
                                        name="column_section"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={sectionOptions}
                                                selected={sectionSelected}
                                                isSearchable={true}
                                                placeholder="Select Section"
                                                onChange={(data: any) => {
                                                    field.onChange(data);
                                                    setSectionSelected(data);
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

export default CampaignInfoFilter;
