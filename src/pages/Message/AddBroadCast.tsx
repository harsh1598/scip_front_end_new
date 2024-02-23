import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import CustomDropdown from "../../Components/Select/CustomDropdown";
import WebService from "../../utility/WebService";
import toast from "react-hot-toast";

interface PropData {
    isShow: any;
    title: string;
    isClose: any;
}

const AddBroadcast = (props: PropData) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState<any>(false);
    const [brodcastUserSelected, setBrodcastSelectedUser] = useState<any>([]);

    useEffect(() => {
        if (props.isShow) {
            reset({})
            setBrodcastSelectedUser('resetsawin')
        }
    }, [props.isShow])

    const onCloseModal = () => {
        props.isClose(!props.isShow);
    };

    const selectUserOption = [
        { id: 'investor', value: 'Investors' },
        { id: 'thirdparty', value: 'SME Advisors' },
        { id: 'syndicate', value: 'Syndicates' },
        { id: 'both', value: 'All' },

    ];

    const onSaveBroadcast = (data: any) => {
        setLoading(true);
        WebService.postAPI({
            action: `/save-broadcast-message`,
            body: data,
        })
            .then((res: any) => {
                toast.success(res.message);
            })
            .catch((e) => {
                setLoading(false);
            });
    };

    return (
        <Offcanvas
            isOpen={props.isShow}
            onHide={onCloseModal}
            toggle={props.isClose}
            // isOpen={isBroadcast}
            direction="end"
            // toggle={toggleBroadcast}
            // id="offcanvasRight"
            className="border-bottom"
        >
            <OffcanvasHeader className="bg-light" >Broadcast</OffcanvasHeader>
            <form onSubmit={handleSubmit(onSaveBroadcast)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody className="px-0 overflow-hidden">
                    <div className="px-4">
                        <Row>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">
                                        Select User <span className='text-danger'>*</span>
                                    </Label>
                                    <Controller
                                        control={control}
                                        name="msg_user_type"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={selectUserOption}
                                                selected={brodcastUserSelected}
                                                isSearchable={true}
                                                placeholder="Select User"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setBrodcastSelectedUser(data.id);
                                                }}
                                            />
                                        )}
                                    />
                                    <div>
                                        {errors.msg_user_type && (
                                            <span className="text-danger fs-12">Please Select User</span>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="message" className="form-label">Message</Label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Please write your message here..."
                                        {...register("msg_txt")} >
                                    </textarea>
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
export default AddBroadcast;