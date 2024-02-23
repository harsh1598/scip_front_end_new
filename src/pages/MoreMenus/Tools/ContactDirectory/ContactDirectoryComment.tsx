import { Offcanvas, OffcanvasHeader, OffcanvasBody, Row, Col, Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState, Fragment, useEffect } from "react";
import WebService from "../../../../utility/WebService";
import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import SimpleBar from "simplebar-react";
import TextEditor from "../../../../Components/TextEditor/TextEditor";
import Loader from "../../../../Components/Loader/Loader";

interface propData {
    show: boolean;
    onCloseClick: any;
    id: any;
    setId: any;
    getlist: any;
};

const ContactDirectoryComment = (props: propData) => {

    const [previousData, setpreviousData] = useState<any>(null);
    const [previousDataModel, setpreviousDataModel] = useState<any>("");
    const [editorData, setEditorData] = useState<any>("");
    const [data, setData] = useState<any>({ alert: false, id: 0, status: "" });
    const [commentData, setCommentData] = useState<any>({ alert: false, commentId: 0, directoryId: 0 });
    const [formData, setFormData] = useState<any>({});

    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const [showloader, setShowLoader] = useState(false);

    useEffect(() => {
        if (props?.id) {
            getCommentlist();
        }else {
            onCloseBlade();
        }
    }, [props.id]);

    const onCloseBlade = () => {
        setFormData("");
        props.onCloseClick();
    };

    const currentValue = (data: any) => {
        setEditorData(data)
    };

    const getCommentlist = () => {
        setShowLoader(true);
        WebService.getAPI({
            action: "/contact-directory-comments/" + props.id,
        }).then((res: any) => {
            if (res && res.result) {
                setFormData(res.result);
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    const onSave = (data: any, id: any) => {
        if (!editorData && !previousData) {
            toast.error("Please Enter Body");
            return;
        }
        if (commentData.commentId > 0 && commentData.directoryId > 0) {
            let obj = {
                "commentId": commentData.commentId,
                "directoryId": commentData.directoryId,
                "comment": editorData ? editorData : previousData
            };
            WebService.postAPI({
                action: "/edit-contact-directory-comments",
                body: obj,
                id: "edit-contact-comment-submit-btn",
            }).then((res: any) => {
                if (res) {
                    toast.success(res.message);
                    getCommentlist();
                    setCommentData({ alert: false, commentId: 0, directoryId: 0 });
                }
            }).catch((error: any) => {

            });
        } else {
            let obj = {
                "directoryId": props.id,
                "comment": editorData ? editorData : previousData
            };
            WebService.postAPI({
                action: "/add-contact-directory-comments",
                body: obj,
                id: "add-contact-comment-submit-btn",
            }).then((res: any) => {
                if (res) {
                    toast.success(res.message);
                    getCommentlist();
                    setEditorData("");
                    setpreviousData('')
                }
            }).catch((error: any) => {

            });
        }
    };

    const changeStatus = (id: any, status: any) => {
        WebService.getAPI({
            action: "/delete-contact-directory-comment/" + id,
            id: "Contact-Directory-comment-modal-submit-btn"
        }).then((res: any) => {
            // console.log(res)
            if (res) {
                toast.success(res.message);
                setData({ alert: false, id: 0, status: "" });
                getCommentlist();
            }
        }).catch((error: any) => {

        });
    }

    const getCommentDetails = (id: any) => {

        WebService.getAPI({
            action: "/contact-directory-comments-byId/" + id,
        }).then((res: any) => {
            console.log(res);
            if (res && res.result) {
                setCommentData({ alert: true, commentId: res.result.id, directoryId: res.result.directoryId })
                setpreviousDataModel(res.result.comment);
            }
        }).catch((error: any) => {

        });

    };

    return (
        <>
            <Loader show={showloader} />
            <Offcanvas
                direction="end"
                isOpen={props.show}
                id="offcanvasExample"
                toggle={props.onCloseClick}
                className="size-md"
            >
                <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                    {formData ? formData[0]?.name : ""} Comment
                </OffcanvasHeader>
                {/* className="d-flex flex-column justify-content-end h-100 */}

                <OffcanvasBody className="px-0">
                    <SimpleBar autoHide={false} style={{ maxHeight: "300px" }} className="px-3">
                        {
                            formData && formData.length > 0 && formData?.map((item: any, ind: any) => {
                                return (
                                    <Fragment key={ind}>
                                        <Row className="border-bottom mb-2">
                                            <Col md={2} className="mx-auto">
                                                <div className="avatar-sm">
                                                    <img
                                                        src={avatar3}
                                                        alt=""
                                                        className="img-fluid rounded-circle"
                                                    />
                                                </div>
                                                <h5 className="fs-12 mt-1 fw-normal text-center">
                                                    {item.first_name} {item.last_name}
                                                </h5>
                                            </Col>
                                            <Col md={8} className="">
                                                <h5 className="fs-14 mb-1">comment:</h5>
                                                <p className="fs-13 text-muted mb-2">
                                                    <span dangerouslySetInnerHTML={{ __html: item.comment }} />
                                                </p>
                                                <p className="fs-13 text-muted fw-light">
                                                    <i className="ri-alarm-line fs-16 align-middle"></i>{" "}
                                                    {item.addedDate}
                                                </p>
                                            </Col>
                                            <Col md={2} className="mx-auto">
                                                <div className="offcanvas-footer text-center hstack gap-1 justify-content-end">
                                                    <button className="btn btn-soft-secondary" onClick={e => getCommentDetails(item.id)}>
                                                        <i className="ri-edit-box-line align-bottom"></i>
                                                    </button>
                                                    <button className="btn btn-soft-secondary" onClick={e => setData({ alert: true, id: item.id, status: "N" })}>
                                                        <i className="ri-delete-bin-2-fill align-bottom"></i>
                                                    </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Fragment>
                                )
                            })
                        }
                    </SimpleBar>
                    <Row className="px-3">
                        <form onSubmit={handleSubmit(onSave)}>
                            <div className="mb-3">
                                <TextEditor data={previousData} editedData={currentValue} type={"NORMAL"} />
                            </div>
                            <div className="text-end">
                                <Button
                                    type="submit"
                                    id="add-contact-comment-submit-btn"
                                    color="primary" className="btn-brand-theme"
                                >
                                    Send <i className="ri-send-plane-2-fill align-bottom"></i>
                                </Button>
                            </div>
                        </form>
                    </Row>
                </OffcanvasBody>

                {/* Edit Modal */}
                <Modal size="md" isOpen={commentData.alert} centered>
                    <ModalHeader className="mb-2" toggle={() => setCommentData({ alert: false, commentId: 0, directoryId: 0 })}>Edit comment</ModalHeader>
                    <form onSubmit={handleSubmit(onSave)}>
                        <ModalBody>
                            <div className="mb-3">
                                <TextEditor data={previousDataModel} editedData={currentValue} type={"NORMAL"} />
                            </div>
                        </ModalBody>
                        <ModalFooter className="border-top p-2">
                            <div className="hstack gap-2 justify-content-end">
                                <button type="button" className="btn btn-light" onClick={() => setCommentData({ alert: false, commentId: 0, directoryId: 0 })}>Cancel</button>
                                <Button type="submit" id="edit-contact-comment-submit-btn" className="btn btn-primary" >Update</Button>
                            </div>
                        </ModalFooter>
                    </form>
                </Modal>

                {/* Delete Modal */}

                <Modal size="md" isOpen={data.alert} centered>
                    <ModalHeader className="mb-2" toggle={() => setData({ alert: false, id: 0, status: "" })}>Are you sure you want to delete this comment?</ModalHeader>
                    <ModalFooter className="border-top p-2">
                        <div className="hstack gap-2 justify-content-end">
                            <button type="button" className="btn btn-light" onClick={() => setData({ alert: false, id: 0, status: "" })}>Cancel</button>
                            <button type="submit" id="Contact-Directory-comment-modal-submit-btn" className="btn btn-primary" onClick={() => changeStatus(data.id, data.status)}>Ok</button>
                        </div>
                    </ModalFooter>
                </Modal>
            </Offcanvas >
        </>

    );
};

export default ContactDirectoryComment;
