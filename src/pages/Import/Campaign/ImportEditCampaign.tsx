import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import WebService from "../../../utility/WebService";
import toast from "react-hot-toast";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import CustomDatePicker from "../../../Components/CustomDatePicker/CustomDatePicker";
import HelperService from "../../../utility/HelperService";
import MultiSelect from "../../../Components/MultiSelect/MultiSelect";
import moment from "moment";

interface PropData {
    show: any;
    onCloseClick: any;
    Id: any;
    getlist: any;
}

const ImportEditCampaign = (props: PropData) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState<any>(false);
    const [userOption, setUserOption] = useState<any>([]);
    const [userSelected, setUserSelected] = useState<any>([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [statusOption, setStatusOption] = useState<any>([]);
    const [statusSelected, setStatusSelected] = useState<any>([]);
    const [isPastSelected, setIsPastSelected] = useState<any>([]);
    const [roundofinvestmentList, setRoundOfInvestmentList] = useState<any[]>([]);
    const [roundofinvestmentSelected, setRoundOfInvestmentSelected] = useState<any>([]);
    const [scheduleStartDate, setScheduleStartDate] = useState(null);
    const [schedulestarttime, setScheduleStartTime] = useState(new Date());
    const [scheduleendtime, setScheduleEndTime] = useState(new Date());
    const [investorRoleList, setInvestorRoleList] = useState<any[]>([]);
    const [investorRoleSelected, setInvestorRoleSelected] = useState<any[]>([]);
    const [investorCodeSelected, setInvestorCodeSelected] = useState<any>([]);

    useEffect(() => {
        if (props?.Id) {
            getDetail();
            getUserList();
            getInvestorRoleList();
            getTypeList();
            getRoundOfInvestmentList();
        }
    }, [props.show, props?.Id]);

    const onCloseModal = () => {
        reset({})
        props.onCloseClick(!props.show);
    };

    const onSave = (data: any) => {
        setLoading(true);
        WebService.putAPI({
            action: `/import/campaign-update`,
            body: {
                campaignId: data.campaignId,
                userId: data.userId,
                high_concept_pitch: data.high_concept_pitch,
                elevater_pitch: data.elevater_pitch,
                rising_amount: data.rising_amount,
                start_date: data.start_date,
                end_date: data.end_date,
                status: statusSelected,
                is_past: isPastSelected.id,
                roundOfInvstmentId: roundofinvestmentSelected,
                investment_round: data.investment_round,
                schedule_start_date: scheduleStartDate,
                schedule_start_time: schedulestarttime.toLocaleTimeString([], { hour12: true }),
                schedule_end_time: scheduleendtime.toLocaleTimeString([], { hour12: true }),
                schedule_video: data.schedule_video,
                investorRoleId: investorRoleSelected.toString(),
                userCodeId: investorCodeSelected.toString(),
            },
        })
            .then((res: any) => {
                toast.success(res.message);
                props.onCloseClick(!props.show);
                props.getlist(1);
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const getUserList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/user-dropdown-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({
                        id: res.list[i].userId, value: HelperService.getText(res.list[i].name,
                            50)
                    });
                }
                setUserOption(array);
            })
            .catch((e) => { });
    };

    const getInvestorRoleList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/investor-role-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].name });
                }
                setInvestorRoleList(array);
            })
            .catch((e) => { });
    };

    const getRoundOfInvestmentList = () => {
        var obj: any = {}
        WebService.getAPI({
            action: `/round-of-investment-list-for-import`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].roundofinvestmentId, value: res.list[i].roundofinvestment_name });
                }
                setRoundOfInvestmentList(array);
            })
            .catch((e) => { });
    };

    const getTypeList = () => {
        var obj: any = {}
        obj.table = "tblcampaign"
        obj.field = "status"
        WebService.postAPI({
            action: `/common/type-list`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].value });
                }
                setStatusOption(array);
            })
            .catch((e) => { });
    };

    const requiredList: any = [
        { id: "Y", value: "YES" },
        { id: "N", value: "NO" }
    ];

    const getDetail = () => {
        setLoading(true);
        WebService.getAPI({
            action: `/import/campaign/${props.Id}`,
        })
            .then((res: any) => {
                reset(res.result)
                setUserSelected(res.result.userId)
                setStartDate(res.result.start_date)
                setEndDate(res.result.end_date)
                setStatusSelected(res.result.status)
                setIsPastSelected(res.result.is_past)
                setRoundOfInvestmentSelected(res.result.round_of_investment_id)
                setScheduleStartDate(res.result.schedule_start_date)
                setScheduleStartTime(HelperService.convertTimeTodate(res.result.schedule_start_time))
                setScheduleEndTime(HelperService.convertTimeTodate(res.result.schedule_end_time))
                setInvestorRoleSelected(res.result.investorRoleId)
                setInvestorCodeSelected(res.result.userCodeId)
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    return (
        <Offcanvas
            isOpen={props.show}
            id="offcanvasExample"
            onHide={onCloseModal}
            toggle={props.onCloseClick}
            direction="end"
            className="size-xl"
        >
            <OffcanvasHeader className="bg-light" id="offcanvasRightLabel" toggle={props.onCloseClick}>Campaign</OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody className="px-0 overflow-hidden">
                    <div className="px-4">
                        <Col lg={12}>
                            <Row>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">User <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="userId"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={userOption}
                                                    selected={userSelected}
                                                    isSearchable={true}
                                                    placeholder="Select User"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setUserSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.userId && (
                                                <span className="text-danger fs-12">Please Select User</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            High concept pitch <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="High concept pitch"
                                            autoComplete="off"
                                            {...register("high_concept_pitch", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.high_concept_pitch && (
                                                <span className="text-danger fs-12">Please Enter High concept pitch</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Elevator pitch <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Elevator pitch"
                                            autoComplete="off"
                                            {...register("elevater_pitch", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.elevater_pitch && (
                                                <span className="text-danger fs-12">Please Enter Elevator pitch</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Raising amount <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Raising amount"
                                            autoComplete="off"
                                            {...register("rising_amount", {
                                                required: true,
                                                maxLength: 10
                                            })}
                                        />
                                        <div>
                                            {errors.rising_amount && (
                                                <span className="text-danger fs-12">Please Enter Raising amount</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">
                                            Start date <span className="text-danger">*</span>
                                        </Label>
                                        <Controller
                                            control={control}
                                            name="start_date"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDatePicker
                                                    placeholderText='Start date'
                                                    minData={new Date()}
                                                    selected={startDate}
                                                    onChange={(data: any) => {
                                                        field.onChange(data);
                                                        setStartDate(data);
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div>
                                        {errors.start_date && (
                                            <span className="text-danger fs-12">Please Select Start date</span>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">
                                            End date <span className="text-danger">*</span>
                                        </Label>
                                        <Controller
                                            control={control}
                                            name="end_date"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDatePicker
                                                    placeholderText='End date'
                                                    minData={new Date()}
                                                    selected={endDate}
                                                    onChange={(data: any) => {
                                                        field.onChange(data);
                                                        setEndDate(data);
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div>
                                        {errors.end_date && (
                                            <span className="text-danger fs-12">Please Select End date</span>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Status <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="status"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={statusOption}
                                                    selected={statusSelected}
                                                    isSearchable={true}
                                                    placeholder="Select Status"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setStatusSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.status && (
                                                <span className="text-danger fs-12">Please Select Status</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Is Past <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="is_past"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={requiredList}
                                                    selected={isPastSelected}
                                                    isSearchable={true}
                                                    placeholder="Select Is Past"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setIsPastSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.is_past && (
                                                <span className="text-danger fs-12">Please Select Is Past</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Round of Investment Code <span className="text-danger">*</span>
                                        </Label>
                                        <Controller
                                            control={control}
                                            name="round_of_investment_id"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={roundofinvestmentList}
                                                    selected={roundofinvestmentSelected}
                                                    isSearchable={true}
                                                    placeholder="Select Round of Investment Code"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setRoundOfInvestmentSelected(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.round_of_investment_id && (
                                                <span className="text-danger fs-12">Please Enter Round of Investment Code</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Campaign Investment Round <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Campaign Investment Round"
                                            autoComplete="off"
                                            {...register("investment_round", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.investment_round && (
                                                <span className="text-danger fs-12">Please Enter Campaign Investment Round</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Schedule Start Date <span className="text-danger">*</span>
                                        </Label>
                                        <Controller
                                            control={control}
                                            name="schedule_start_date"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDatePicker
                                                    placeholderText='Schedule Start Date'
                                                    minData={new Date()}
                                                    selected={scheduleStartDate}
                                                    onChange={(data: any) => {
                                                        field.onChange(data);
                                                        setScheduleStartDate(data);
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.schedule_start_date && (
                                                <span className="text-danger fs-12">Please Enter Schedule Start Date</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Schedule Start Time <span className="text-danger">*</span>
                                        </Label>
                                        <Controller
                                            control={control}
                                            name="schedule_start_time"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDatePicker
                                                    type="ONLYTIME"
                                                    placeholderText='Schedule Start Time'
                                                    selected={schedulestarttime}
                                                    onChange={(data: any) => {
                                                        field.onChange(data);
                                                        console.log(data)
                                                        setScheduleStartTime(HelperService.convertTimeTodate(data));
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.schedule_start_time && (
                                                <span className="text-danger fs-12">Please Enter Schedule Start Time</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Schedule End Time <span className="text-danger">*</span>
                                        </Label>
                                        <Controller
                                            control={control}
                                            name="schedule_end_time"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <CustomDatePicker
                                                    type="ONLYTIME"
                                                    placeholderText='Schedule End Time'
                                                    selected={scheduleendtime}
                                                    onChange={(data: any) => {
                                                        field.onChange(data);
                                                        setScheduleEndTime(HelperService.convertTimeTodate(data));
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.schedule_end_time && (
                                                <span className="text-danger fs-12">Please Enter Schedule End Time</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Schedule video <span className="text-danger">*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Schedule video"
                                            autoComplete="off"
                                            {...register("schedule_video", {
                                                required: true,
                                            })}
                                        />
                                        <div>
                                            {errors.schedule_video && (
                                                <span className="text-danger fs-12">Please Enter Schedule video</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Investor Role <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="investorRoleId"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <MultiSelect
                                                    selectLimit={investorRoleList.length}
                                                    options={investorRoleList}
                                                    selected={investorRoleSelected}
                                                    placeholder="Select Investor Role"
                                                    onChange={(data: any) => {
                                                        if (data) {
                                                            let temp: any = data.map((item: any) => {
                                                                field.onChange(item.id);
                                                                return item.id;
                                                            });
                                                            setInvestorRoleSelected(temp);
                                                        }
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.investorRoleId && (
                                                <span className="text-danger fs-12">Please Select Investor Role</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">Investor Code <span className="text-danger">*</span></Label>
                                        <Controller
                                            control={control}
                                            name="userCodeId"
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <MultiSelect
                                                    selectLimit={userOption.length}
                                                    options={userOption}
                                                    selected={investorCodeSelected}
                                                    placeholder="Select Investor Code"
                                                    onChange={(data: any) => {
                                                        if (data) {
                                                            let temp: any = data.map((item: any) => {
                                                                field.onChange(item.id);
                                                                return item.id;
                                                            });
                                                            setInvestorCodeSelected(temp);
                                                        }
                                                    }}
                                                />
                                            )}
                                        />
                                        <div>
                                            {errors.userCodeId && (
                                                <span className="text-danger fs-12">Please Select Investor Code</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <Button
                        type="submit"
                        disabled={errors ? false : loading ? true : false}
                        id="addedit-workflow-imanagetemplate-submit-btn"
                        color="primary" className="btn-brand-theme"
                    >
                        Submit
                    </Button>
                    <button type="button" className="btn btn-light" onClick={() => { onCloseModal() }}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    )
}

export default ImportEditCampaign;