import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import CustomDropdown from "../../Components/Select/CustomDropdown";
import WebService from "../../utility/WebService";
import toast from "react-hot-toast";
import CheckBoxMultiSelect from "../../Components/CheckBoxMultiSelect/CheckBoxMultiSelect";

interface PropData {
    isShow: any;
    title: string;
    isClose: any;
    groupId: any;
}

const AddGroup = (props: PropData) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const [UserOption, setUserOption] = useState<any>([]);
    const [userSelecteds, setSelectedUser] = useState<any>([]);
    const [companyOption, setCompanyOption] = useState<any>([]);
    const [companySelected, setCompanySelected] = useState<any>([]);
    const [user, setUser] = useState<any>([])
    const [tieChapterOption, setTieChapterOption] = useState<any>([]);
    const [tieChapterSelected, setSelectedTieChapter] = useState<any>([]);
    const [isShow, setIsShow] = useState<any>();
    const [loading, setLoading] = useState<any>(false);

    useEffect(() => {
        if (props.isShow) {
            getList("")
            reset({})
            setCompanySelected('resetsawin')
            setSelectedUser('resetsawin')
        }
        getUserOptions();
        getCompanyOptions();
        if (isShow == true) {
            getTieChapterList();
        }
    }, [props.isShow, props?.groupId])

    const onCloseModal = () => {
        reset({})
        props.isClose(!props.isShow);
    };

    const onSaveNewMessage = (data: any) => {
        let temp: any = [];
        Object.entries(user).map(([item]: any, index: number) => {
            user[item] && user[item].map((item1: any, key: any) => {
                if (item1.isChecked == true) {
                    temp.push(item1.userId);
                }
            })
        })
        if (temp.length > 0) {
            data.memberIds = temp
            // data.memberIds = temp.toString();
        }
        setLoading(true);
        WebService.postAPI({
            action: props.groupId ? `/update-group` : `/create-group`,
            body: data,
        })
            .then((res: any) => {
                toast.success(res.message);
                props.isClose(!props.isShow);
                getChatList()
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const getChatList = () => {
        setLoading(true);
        WebService.getAPI({
            action: `/users-recent-message?offset=${0}&limit=10`,
        })
            .then((res: any) => {
            })
            .catch((error: any) => { });
    };

    const getUserOptions = () => {
        WebService.getAPI({
            action: `/All-user-list`,
            body: null
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].name });
                }
                setUserOption(array);
            })
            .catch((e) => {
            })
    }

    const getCompanyOptions = () => {
        WebService.getAPI({
            action: `/All-company-list`,
            body: null
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].companyId, value: res.list[i].company_name });
                }
                setCompanyOption(array);
            })
            .catch((e) => {
            })
    }

    const getList = (value: any) => {
        WebService.getAPI({
            action: `/users-by-type-message?keyword=${value ? value : ""}`,
            body: null
        })
            .then((res: any) => {
                if (props?.groupId) {
                    getDetail(res.list)
                } else {
                    Object.entries(res.list).map(([item]: any, index: number) => {
                        res.list[item] && res.list[item].map((item1: any, key: any) => {
                            item1.isChecked = false;
                        })
                    })
                    setUser(res.list)
                }
            })
            .catch((e) => {
            })
    }

    const getDetail = (arr: any) => {
        var data = arr
        setLoading(true);
        WebService.getAPI({
            action: `/group-details/${props.groupId}`,
        })
            .then((res: any) => {
                reset(res.result)
                setCompanySelected(res.result.companyId)
                for (var i in res.list) {
                    Object.entries(data).map(([item]: any, index: number) => {
                        data[item] &&  data[item].map((item1: any, key: any) => {
                            if (Number(res.list[i]) === Number(item1.userId)) {
                                item1.isChecked = true;
                            }
                        })
                    })
                }
                setUser({ ...data })
            })
            .catch((e) => {
                setLoading(false);
            });
    }

    const getTieChapterList = () => {
        WebService.getAPI({
            action: `/All-tie-chapter-list`,
            body: null
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].chapterId, value: res.list[i].name });
                }
                setTieChapterOption(array);
            })
            .catch((e) => {
            })
    }

    return (
        <Offcanvas
            isOpen={props.isShow}
            onHide={onCloseModal}
            toggle={props.isClose}
            direction="end"
            className="border-bottom"
        >
            <OffcanvasHeader className="bg-light" id="offcanvasRightLabel">Create Group</OffcanvasHeader>
            <form onSubmit={handleSubmit(onSaveNewMessage)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody className="px-0" style={{ overflow: 'scroll' }}>
                    <div className="px-4">
                        <Row>
                            {isShow == true &&
                                <Col lg={12}>
                                    <div className="mb-2">
                                        <Label htmlFor="name-field" className="form-label">
                                            Select Tie Chapter <span className='text-danger'>*</span>
                                        </Label>
                                        <Controller
                                            control={control}
                                            name="tie_switch"
                                            render={({ field }) => (
                                                <CustomDropdown
                                                    options={tieChapterOption}
                                                    selected={tieChapterSelected}
                                                    isSearchable={true}
                                                    placeholder="Select User"
                                                    onChange={(data: any) => {
                                                        field.onChange(data.id);
                                                        setSelectedTieChapter(data.id);
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                </Col>
                            }
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label">
                                        Group Name <span className='text-danger'>*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Group Name"
                                        disabled={props.groupId ? true : false}
                                        autoComplete="off"
                                        {...register("group_name",
                                            { required: true })}
                                    />
                                </div>
                                <div>
                                    {errors.group_name && (
                                        <span className="text-danger fs-12">Please Enter Group Name</span>
                                    )}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label className="form-label">Select Company </Label>
                                    <Controller
                                        control={control}
                                        name="companyId"
                                        // rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={companyOption}
                                                selected={companySelected}
                                                isSearchable={true}
                                                isDisable={props.groupId ? true : false}
                                                placeholder="Select User"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setCompanySelected(data.id);
                                                }}
                                            />
                                        )}
                                    />

                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label className="form-label">Select User<span className='text-danger'>*</span> </Label>
                                    <Controller
                                        control={control}
                                        name="memberIds"
                                        // rules={{ required: true }}
                                        render={({ field }) => (
                                            <CheckBoxMultiSelect
                                                multiselectType="GROUP_SELECT"
                                                placeholder="Select User"
                                                data={user}
                                                keyword={(value: any) => getList(value)}
                                                onChange={(data: any) => {
                                                    setUser({ ...data })
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.memberIds && (
                                            <span className="text-danger fs-12">Please Select User</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            {!props.groupId &&
                                <><Col lg={12}>
                                    <div className="mb-3">
                                        <Label htmlFor="name-field" className="form-label">
                                            Subject <span className='text-danger'>*</span>
                                        </Label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Write your subject"
                                            autoComplete="off"
                                            {...register("msg_subject", { required: true })} />
                                        <div>
                                            {errors.msg_subject && (
                                                <span className="text-danger fs-12">Please Enter Subject</span>
                                            )}
                                        </div>
                                    </div>
                                </Col><Col lg={12}>
                                        <div className="mb-3">
                                            <Label htmlFor="message" className="form-label">Message <span className='text-danger'>*</span> </Label>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                placeholder="Please write your message here..."
                                                {...register("msg_txt", { required: true })} />
                                            <div>
                                                {errors.msg_txt && (
                                                    <span className="text-danger fs-12">Please Enter Message</span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="small fst-italic">Please note you will be automatically added to the group that is created.</p>
                                    </Col></>
                            }
                        </Row>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <Button
                        type="submit"
                        id="addedit-workflow-imanagetemplate-submit-btn"
                        color="primary" className="btn-brand-theme"
                    >
                        Send
                    </Button>
                    <button type="button" className="btn btn-light" onClick={() => { onCloseModal() }}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    )
}

export default AddGroup;