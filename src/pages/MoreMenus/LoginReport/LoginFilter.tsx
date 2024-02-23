import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col, Button } from "reactstrap";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

interface propData {
    show: boolean;
    onCloseClick: any;
    setUserType:any
};

const LoginFilter = (props: propData) => {

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    const [type, setType] = useState<any>([]);

    const onCloseBlade = () => {
        reset();
        props.onCloseClick();
    };

    const onSave = (data: any) => {
        if(data.type){
            props.setUserType(type);
            props.onCloseClick();
        }
    };

    const typedata: any = [
        { id: "entrepreneur", value: "Entrepreneur" },
        { id: "investor", value: "Investor" },
        { id: "syndicate", value: "Admin" },
        { id: "thirdparty", value: "SME Advisor" },
        // { id: null, value: "All" },
    ]

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
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    User Type
                                </Label>
                                <Controller
                                    control={control}
                                    name="type"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            // isDisable={id ? true : false}
                                            selected={type}
                                            isSearchable={true}
                                            options={typedata}
                                            placeholder="Select User Type"
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setType(data);
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
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <Button
                        type="submit"
                        id="addedit-Document-submit-btn"
                        color="primary" className="btn-brand-theme"
                    >
                        Submit
                    </Button>
                    <button type="button" className="btn btn-light" onClick={() => onCloseBlade()}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas >
    );
};

export default LoginFilter;
