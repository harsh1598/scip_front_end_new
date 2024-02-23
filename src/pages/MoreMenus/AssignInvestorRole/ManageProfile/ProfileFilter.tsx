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

const ProfileFilter = (props: propData) => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    const [statusSelected, setStatusSelected] = useState<any>([])
    const [userTypeSelected, setUserTypeSelected] = useState<any>([]);
    const [inSectionOption, setInSectionOption] = useState<any>([]);
    const [inSectionSelected, setInSectionSelected] = useState<any>([]);

    const oncloseBlade = () => {
        setStatusSelected("resetsawin")
        setUserTypeSelected("resetsawin")
        setInSectionSelected("resetsawin")
        var obj: any = {};
        reset(obj);
        props.onCloseClick();
    };

    useEffect(() => {
        setStatusSelected("resetsawin")
        setUserTypeSelected("resetsawin")
        setInSectionSelected("resetsawin")
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

    const statusList: any = [
        { id: "ACTIVE", value: "ACTIVE" },
        { id: "ARCHIVED", value: "ARCHIVED" }
    ];

    const userTypeList: any = [
        { id: "admin", value: "ADMIN" },
        { id: "entrepreneur", value: "ENTREPRENEUR" },
        { id: "investor", value: "INVESTOR" },
        { id: "syndicate", value: "SYNDICATE" },
        { id: "thirdparty", value: "THIRDPARTY" }
    ];

    const getInSectionOptions = (id: any) => {
        WebService.getAPI({
            action: `/manageprofile/dropdown-section-list/${id}`,
            body: null
        })
            .then((res: any) => {
                const Parentobj = { id: '0', value: 'Parent' }
                var array: any = [];
                array.push(Parentobj);
                for (var i in res.list) {
                    array.push({ id: res.list[i].section, value: res.list[i].title });
                }
                setInSectionOption(array);
            })
            .catch((e) => {
            })
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
                Filters
            </OffcanvasHeader>
            {/*  h-100 */}
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">Status</Label>
                                    <Controller
                                        control={control}
                                        name="status"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={statusList}
                                                selected={statusSelected}
                                                isSearchable={true}
                                                placeholder="Select Status"
                                                onChange={(data: any) => {
                                                        field.onChange(data);
                                                        console.log(data);
                                                        
                                                        setStatusSelected(data);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">User Type </Label>
                                    <Controller
                                        control={control}
                                        name="user_type"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={userTypeList}
                                                selected={userTypeSelected}
                                                isSearchable={true}
                                                placeholder="Select User Type"
                                                onChange={(data: any) => {
                                                    field.onChange(data);
                                                    setUserTypeSelected(data);
                                                    getInSectionOptions(data.id)
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
                                        name="parentId"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={inSectionOption}
                                                selected={inSectionSelected}
                                                isSearchable={true}
                                                placeholder="Select In Section"
                                                onChange={(data: any) => {
                                                    field.onChange(data);
                                                    setInSectionSelected(data);
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

export default ProfileFilter;
