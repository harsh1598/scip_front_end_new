import React, { useEffect, useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
    Button,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../../../Components/Select/CustomDropdown";
import WebService from "../../../../utility/WebService";

interface propData {
    show: boolean;
    onCloseClick: any;
    setFilterData: any
};

const AdminMenusFilter = (props: propData) => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const [roleSelected, setRoleSelected] = useState<any>([]);
    const [roleList, setRoleList] = useState<any>([]);

    useEffect(() => {
        getTypeList();
    }, []);

    const getTypeList = () => {
        WebService.getAPI({
            action: `/menu-dropdown-list`,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].roleId, value: res.list[i].role });
                    //  .charAt(0).toUpperCase()+ res.list[i].role.slice(1)
                }
                setRoleList(array);
            })
            .catch((e) => { });
    };

    const onCloseBlade = () => {
        reset();
        props.onCloseClick();
    };

    const onSave = (data: any) => {
        if (data) {
            props.setFilterData(data);
            props.onCloseClick();
        }
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
                                    <Label className="form-label">Role</Label>
                                    <Controller
                                        control={control}
                                        name="roleId"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={roleList}
                                                selected={roleSelected}
                                                isSearchable={true}
                                                placeholder="Select Role"
                                                onChange={(data: any) => {
                                                    field.onChange(data);
                                                    setRoleSelected(data);
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
                    <Button
                        type="submit"
                        id="addedit-Document-submit-btn"
                        color="primary" className="btn-brand-theme"
                    >
                        Submit
                    </Button>
                    <button
                        type="button"
                        className="btn btn-light  "
                        onClick={() => onCloseBlade()}
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </Offcanvas>
    );
};

export default AdminMenusFilter;
