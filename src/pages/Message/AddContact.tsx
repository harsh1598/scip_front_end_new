import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import CustomDropdown from "../../Components/Select/CustomDropdown";
import WebService from "../../utility/WebService";
import toast from "react-hot-toast";

interface PropData {
    isShow: any;
    title: string;
    isClose: any;
}

const AddContacts = (props: PropData) => {
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
    const [userSelected, setSelectedUser] = useState<any>([]);
    const [companyOption, setCompanyOption] = useState<any>([]);
    const [companySelected, setCompanySelected] = useState<any>([]);
    const [tieChapterOption, setTieChapterOption] = useState<any>([]);
    const [tieChapterSelected, setSelectedTieChapter] = useState<any>([]);
    const [loading, setLoading] = useState<any>(false);
    const [checked, setIsChecked] = useState(false);
    const [isShow, setIsShow] = useState<any>();



    useEffect(() => {
        if (props.isShow) {
            reset({})
            setCompanySelected('resetsawin')
            // setSelectedUser('resetsawin')
        }
        getUserOptions();
        getListForDropDown();
        getCompanyOptions();
        if(isShow == true){
            getTieChapterList();
        }
       
    }, [props.isShow])

    const onCloseModal = () => {
        props.isClose(!props.isShow);
    };

    const onSaveNewMessage = (data: any) => {

        setLoading(true);
        WebService.postAPI({
            action: `/save-new-message`,
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
                    array.push({ id: res.list[i].userId, value: res.list[i].user_type });
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

    const getListForDropDown = () => {
        WebService.getAPI({
            action: `/isshow-site-setting`,
            body: null
        })
            .then((res: any) => {
                setIsShow(res.ishow)
                
            })
            .catch((e) => {
            })
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
            <OffcanvasHeader className="bg-light" id="offcanvasRightLabel">Write Your Message</OffcanvasHeader>
            <form onSubmit={handleSubmit(onSaveNewMessage)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody className="px-0 overflow-hidden">
                    <div className="px-4">
                        <p className="small">Send 1-on-1 messages (like WhatsApp) to users</p>
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
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Select User <span className='text-danger'>*</span>
                                    </Label>
                                    <Controller
                                        control={control}
                                        name="msg_user"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={UserOption}
                                                selected={userSelected}
                                                isSearchable={true}
                                                placeholder="Select User"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setSelectedUser(data.id);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.msg_user && (
                                            <span className="text-danger fs-12">Please Select User</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Select Company
                                    </Label>
                                    <Controller
                                        control={control}
                                        name="msg_company_id"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={companyOption}
                                                selected={companySelected}
                                                isSearchable={true}
                                                placeholder="Select Company"
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
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Subject<span className='text-danger'>*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                        autoComplete="off"
                                        {...register("msg_subject", { required: true })}
                                    />
                                </div>
                                <div>
                                    {errors.group_name && (
                                        <span className="text-danger fs-12">Please Enter Subject</span>
                                    )}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Message<span className='text-danger'>*</span>
                                    </Label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Message"
                                        autoComplete="off"
                                        {...register("msg_txt", { required: true })}
                                    />
                                </div>
                                <div>
                                    {errors.msg_txt && (
                                        <span className="text-danger fs-12">Please Enter Message</span>
                                    )}
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mt-3">
                                    <Label htmlFor="name-field" className="form-label">
                                        Save as Draft
                                    </Label>
                                    <input
                                        className="d-flex"
                                        value={'DRAFT'}
                                        type="checkbox"
                                        {...register("message_type")}
                                    />
                                </div>
                            </Col>
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

export default AddContacts;