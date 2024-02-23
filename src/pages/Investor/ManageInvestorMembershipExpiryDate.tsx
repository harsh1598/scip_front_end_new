import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col, Button } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import CustomDatePicker from "../../Components/CustomDatePicker/CustomDatePicker";
import CheckBoxMultiSelect from "../../Components/CheckBoxMultiSelect/CheckBoxMultiSelect";
import WebService from "../../utility/WebService";
import toast from "react-hot-toast";

interface propData {
    show: boolean;
    onCloseClick: any;
    Id:any;
};

const ManageInvestorMembershipExpiryDate = (props: propData) => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    const [user, setUser] = useState<any>([]);
    const [expiryDate, setExpiryDate] = useState(null);
    const [loading, setLoading] = useState<any>(false);


    useEffect(() => {
        getList();
    }, [])

    const onCloseBlade = () => {
        reset({})
        props.onCloseClick();
    };

    const onSave = (data: any) => {
        let temp: any = [];
        for (var i in user) {
            if (user[i].isChecked == true) {
                temp.push(user[i].id);
            }
        }
        if (temp.length > 0) {
            data.userId = temp
        }
        if(props.Id){
            data.userId = props.Id
        }
        setLoading(true);
        WebService.postAPI({
            action: props.Id ?  `/edit-investor-membership`:`/save-investor-membership-renewal`,
            body: data,
        })
            .then((res: any) => {
                toast.success(res.message);
                props.onCloseClick(!props.show);
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const getList = () => {
        WebService.getAPI({
            action: `/get-all-investor-users-combo`,
            body: null
        })
            .then((res: any) => {
                console.log(res);
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].userId, name: res.list[i].name, isChecked: false });
                }
                setUser(array)
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
                Membership Expiry Date
            </OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                {!props.Id  &&
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label className="form-label">Select User<span className='text-danger'>*</span> </Label>
                                <Controller
                                    control={control}
                                    name="userId"
                                    //   rules={{ required: true }}
                                    render={({ field }) => (
                                        <CheckBoxMultiSelect
                                            multiselectType="SIMPLE"
                                            placeholder="Select User"
                                            data={user}
                                            keyword={(value: any) => getList()}
                                            onChange={(data: any) => {
                                                setUser([...data])
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            {/* <div>
                                    {errors.userId && (
                                        <span className="text-danger fs-12">Please Select User</span>
                                    )}
                                </div> */}
                        </Col>
                    }
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label className="form-label">Please select the expiry date of the membership.</Label>
                                <Controller
                                    control={control}
                                    name="membership_renewal_date"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDatePicker
                                            placeholderText='Membership Renewal Date'
                                            minData={new Date()}
                                            selected={expiryDate}
                                            onChange={(data: any) => {
                                                field.onChange(data);
                                                setExpiryDate(data);
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div>
                                {errors.membership_renewal_date && (
                                    <span className="text-danger fs-12">Please Select Membership Renewal Date</span>
                                )}
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

export default ManageInvestorMembershipExpiryDate;
