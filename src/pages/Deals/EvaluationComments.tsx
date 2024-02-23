import React, { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Row,
    Button,
    Input,
    DropdownToggle,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Form,
} from "reactstrap";
import SwiperCore, { Autoplay } from "swiper";
import SimpleBar from "simplebar-react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//Images
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Fragment } from "react";
import WebService from "../../utility/WebService";
import HelperService from "../../utility/HelperService";

const EvaluationComments = () => {
    SwiperCore.use([Autoplay]);
    const [isComments, setIsComments] = useState(false);
    const [commentsData, setCommentsData] = useState(false);
    const [data, setData] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [userDetail, setUserDetail] = useState<any>({});
    const [userId, setUserId] = useState<any>('');

    const [list, setList] = useState([{
        name: 'Smriti Misra',
        date: '25/07/2023',
        img: avatar3,

        comments: [
            {
                msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
                date: "25/07/2023",
                time: "08:13 AM",
            },
            {
                msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
                date: "24/07/2023",
                time: "08:13 AM",
            },
            {
                msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
                date: "23/07/2023",
                time: "08:13 AM",
            },
            {
                msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
                date: "22/07/2023",
                time: "08:13 AM",
            },
            {
                msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
                date: "21/07/2023",
                time: "08:13 AM",
            }
        ]
    }]);

    const toggleComments = () => {
        setIsComments(!isComments);
    };
    // const data = [
    //     {
    //         name: 'Smriti Misra',
    //         date: '25/07/2023',
    //         img: avatar3,
    //         comments: [
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "25/07/2023",
    //                 time: "08:13 AM",
    //             },
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "24/07/2023",
    //                 time: "08:13 AM",
    //             },
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "23/07/2023",
    //                 time: "08:13 AM",
    //             },
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "22/07/2023",
    //                 time: "08:13 AM",
    //             },
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "21/07/2023",
    //                 time: "08:13 AM",
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Ash King',
    //         date: '17/06/2022',
    //         img: avatar4,
    //         comments: [
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "17/06/2022",
    //                 time: "08:13 AM",
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Shobanaa Anand',
    //         date: '17/06/2022',
    //         img: avatar5,
    //         comments: [
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "17/06/2022",
    //                 time: "08:13 AM",
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Esther James',
    //         date: '17/06/2022',
    //         img: avatar6,
    //         comments: [
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "17/06/2022",
    //                 time: "08:13 AM",
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Esther James',
    //         date: '17/06/2022',
    //         img: avatar3,
    //         comments: [
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "17/06/2022",
    //                 time: "08:13 AM",
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Shobanaa Anand',
    //         date: '17/06/2022',
    //         img: avatar4,
    //         comments: [
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "17/06/2022",
    //                 time: "08:13 AM",
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Smriti Misra',
    //         date: '17/06/2022',
    //         img: avatar5,
    //         comments: [
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "17/06/2022",
    //                 time: "08:13 AM",
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Esther James',
    //         date: '17/06/2022',
    //         img: avatar6,
    //         comments: [
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "17/06/2022",
    //                 time: "08:13 AM",
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Smriti Misra',
    //         date: '17/06/2022',
    //         img: avatar3,
    //         comments: [
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "17/06/2022",
    //                 time: "08:13 AM",
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Shobanaa Anand',
    //         date: '17/06/2022',
    //         img: avatar4,
    //         comments: [
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "17/06/2022",
    //                 time: "08:13 AM",
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Smriti Misra',
    //         date: '17/06/2022',
    //         img: avatar5,
    //         comments: [
    //             {
    //                 msg: "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.",
    //                 date: "25/07/2023",
    //                 time: "08:13 AM",
    //             }
    //         ]
    //     },
    // ];

    const handelCommentsData = (data: any) => {
        setUserId(data.userId)
    }

    useEffect(() => {
        getCompanySummary();
    }, [])
    useEffect(() => {
        getCompanySummaryList();
    }, [userId])
    const getCompanySummary = () => {
        var obj = {
            "userId": 2,
            "campaignId": 741
        }
        WebService.getAPI({
            action: `/get-comment-list`,
            body: obj
        })
            .then((res: any) => {
                setData(res.result);
                if (res.result && res.result.length > 0) {
                    setUserId(res.result[0].userId)
                }
                setCommentsData(true)
            })
            .catch((e) => {
            });
    };
    const getCompanySummaryList = () => {
        if (userId) {
            var obj = {
                "userId": userId,
                "campaignId": 741,
                "logUserId": 1050,
                "user": 'admin',
            }
            WebService.getAPI({
                action: `/get-comment-review-list`,
                body: obj
            })
                .then((res: any) => {
                    setCommentList(res.result);
                    setUserDetail(res.user_detail)
                })
                .catch((e) => {
                });
        }
    };

    return (
        <React.Fragment>
            <Row className="g-2">
                <Col md={4} style={{ paddingLeft: "12px" }}>
                    <Card className="mb-1">
                        <CardHeader className="align-items-center card-header">
                            <h4 className="card-title card-title mb-0 me-2">
                                All Comment
                            </h4>
                        </CardHeader>
                        <CardBody style={{ height: !commentsData ? '200px' : '99vh' }} className={!commentsData ? 'card-loader' : 'px-0'}>
                            {commentsData &&
                                <SimpleBar
                                    autoHide={false}
                                    style={{ maxHeight: "99vh" }}
                                    className="px-3"
                                >
                                    {
                                        data && data.length && data.map((item: any, index: any) => {
                                            return <Fragment key={index} >
                                                <div className="d-flex align-items-center py-2 p-1 m-1" style={{ cursor: "pointer", backgroundColor: userId == item.userId ? 'lightblue' : '' ,borderRadius: '3px'}} onClick={e => handelCommentsData(item)}>
                                                    <div className="avatar-xs flex-shrink-0 me-3">
                                                        {item.photo ? <img
                                                            src={item.photo}
                                                            alt=""
                                                            height={40}
                                                            width={40}
                                                            className=" rounded-circle"
                                                        /> : <img
                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJtSURBVFhH7dZPS1RRGAZwP0JfoU9QH6FdSJugRbS1RSAIbsJFi6iIIIRcRJghJkLlpgZDUBODGi2cUtLKIHUyoWGaKdMZrSbijedwXrn/zpxz7z0nmrgPPMzMve/c8xuY+6eNWiiti31Z3aMryxUrXahsUm5t1EpflJ8Jnw/b97ZKbcOvU/f8Ylkcb7x4n05OHE3dG8u94njWsQzl2AA7wQahnLRgI+yBuyt0+OGqUVVQDsA9s51GTYQ9MlmUe/5uguAMaysZ1lUyLDL0/qv2soXUGzWxaHF7VW5RxwkWUFyLMdtdKMmt4QDau3BBLNwxfUILto71QrlRYC+UqwNbxx5//NE3y/WCo6Dc4ZV+ORVOIqzuv4gf453nApwUigSfJbRYk5MGUYHPzd/yLcjVQTlecFOsKZQTBe6e7fMhUVMoh8FKbFwoJwgOYuNCOQBHYtfXk98Efu/WaXRohHIDA6JPxy5TYaZDdGmuR04ly4dSXrz6sDuPcrQ99UB+Mg+glesXaeN0+36rg51UuX1wv/X5S3I6XvbeDFItf1a8D2GxUBxwFDQKmwQMKL7XFIuagFVQ9MtIVwiLmoIZimqxaC0/JfeE0wy6de+m2P9t4pQPytWBvVDUCFu+qj4xdFCOErx4TU6EszV2zDebGvv93SvfLBqEcoLg6p1D9GNjUu4NxzoW8YJVUA6DdVDECRYBWAfl7Myc0UIRZ1gXybCukmFd5f/HMtikumcJ3EJxrTUprsWJsHGqAgMaBMSpEywaBKeFos6wKINtQNFI7K/Pn2i38MRKG+U1amxO08/iePqWngufD/uvp4WwRH8A4fAF63IH05gAAAAASUVORK5CYII="
                                                            alt=""
                                                            height={40}
                                                            width={40}
                                                            className=" rounded-circle"
                                                        />}
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div>
                                                            <h5 className="fs-14 mb-1">{item.name}</h5>
                                                            <p className="fs-12 text-muted mb-0">
                                                                {item.added_date ? HelperService.getDateFormat(item.added_date) : ''}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="m-0" />
                                            </Fragment>
                                        })
                                    }

                                </SimpleBar>
                            }
                        </CardBody>
                    </Card>
                </Col>
                <Col md={8} className="social-icons">
                    <Card className="mb-1">
                        {
                            // commentList && commentList.length > 0 && commentList.map((item: any, ind: any) => {
                            // return
                            // key = { ind }
                            <Fragment >
                                <CardHeader className="align-items-center d-flex">
                                    <h4 className="card-title mb-0 me-2">{userDetail?.first_name} {userDetail?.last_name}</h4>
                                </CardHeader>
                                <CardBody style={{ height: !commentsData ? '200px' : '99vh' }} className={!commentsData ? 'card-loader' : 'px-0'}>
                                    {commentsData &&
                                        <SimpleBar
                                            autoHide={false}
                                            style={{ maxHeight: "100%" }}
                                            className="px-3"
                                        >
                                            <div className="align-items-center">
                                                {
                                                    commentList && commentList.length > 0 && commentList.map((item: any, ind: any) => {
                                                        return <Fragment key={ind} >
                                                            <p className="mb-0">   <span dangerouslySetInnerHTML={{ __html: item.comment, }} /></p>

                                                            <Row className="mt-2 mb-2">
                                                                <Col md={6} className="text-start col-8">
                                                                    <span className="pe-2 text-muted">
                                                                        <i className="ri-alarm-line fs-16 align-middle"></i>
                                                                        {item.added_date ? HelperService.getDateFormat(item.added_date) : ''}
                                                                    </span>
                                                                    <span className=" text-muted"> {item.added_date ? HelperService.getFormatedTime(item.added_date) : ''}</span>
                                                                </Col>
                                                                <Col md={6} className="text-end col-4">
                                                                    <span className="pe-2"><a href="javascript:void(0);" onClick={toggleComments}>
                                                                        <i className="ri-pencil-line fs-16 text-muted"></i></a>
                                                                    </span>
                                                                    <span className="pe-4">
                                                                        <a href="javascript:void(0);"><i className="ri-delete-bin-line fs-16 text-muted"></i></a>
                                                                    </span>

                                                                    <UncontrolledDropdown
                                                                        direction="start"
                                                                        className="eye-place"
                                                                    >
                                                                        <DropdownToggle
                                                                            tag="a"
                                                                            id="dropdownMenuLink2"
                                                                            role="button"
                                                                        >
                                                                            <i className="ri-eye-line fs-16 text-muted"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu>
                                                                            <DropdownItem>
                                                                                <Input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    id="formCheck11"
                                                                                    defaultChecked
                                                                                />
                                                                                &nbsp; Investor
                                                                            </DropdownItem>
                                                                            <DropdownItem>
                                                                                <Input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    id="formCheck12"
                                                                                />
                                                                                &nbsp; SME Advisor
                                                                            </DropdownItem>
                                                                            <DropdownItem>
                                                                                <Input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    id="formCheck13"
                                                                                />
                                                                                &nbsp; Admin
                                                                            </DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                </Col>
                                                            </Row>
                                                            <hr />
                                                        </Fragment>
                                                    })
                                                }

                                            </div>
                                        </SimpleBar>
                                    }
                                </CardBody>
                            </Fragment>
                            // })
                        }

                    </Card>
                </Col>
            </Row>

            {/* Comment */}
            <Offcanvas
                isOpen={isComments}
                direction="end"
                toggle={toggleComments}
                id="offcanvasComments"
                className="border-bottom"
            >
                <OffcanvasHeader
                    className="bg-light"
                    toggle={toggleComments}
                    id="offcanvasRightLabel"
                >
                    Comment
                </OffcanvasHeader>
                <OffcanvasBody className="px-0 overflow-hidden">
                    <SimpleBar style={{ height: "500px" }}>
                        <div className="px-4">
                            <Form>
                                <Row>
                                    <Col lg={12}>
                                        <Form method="post">
                                            {/* <CKEditor
                                                editor={ClassicEditor}
                                                data="<p>Hello from CKEditor 5!</p>"
                                                onReady={(editor) => {
                                                    // You can store the "editor" and use when it is needed.
                                                }}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    // console.log({ event, editor, data });
                                                }}
                                            /> */}
                                        </Form>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </SimpleBar>
                </OffcanvasBody>
                <div className="offcanvas-foorter border p-3 text-center">
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-brand-theme">
                            Submit
                        </button>
                        <Button toggle={toggleComments} className="btn btn-light">
                            Cancel
                        </Button>
                    </div>
                </div>
            </Offcanvas>
        </React.Fragment>
    );
};

export default EvaluationComments;
