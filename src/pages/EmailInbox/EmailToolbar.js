import React, { useEffect, useState } from 'react';

import { Col, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, UncontrolledDropdown, UncontrolledTooltip, UncontrolledCollapse, ButtonGroup, Button, UncontrolledButtonDropdown, Modal, ModalBody, ModalHeader, Input, Progress, Card, CardHeader, CardBody, Alert } from 'reactstrap';

import classnames from "classnames";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FeatherIcon from 'feather-icons-react';
import DeleteModal from '../../Components/Common/DeleteModal';
//SimpleBar
import SimpleBar from "simplebar-react";

// Rating
import Rating from "react-rating";

// Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";

import img2 from "../../assets/images/small/img-2.jpg";
import img6 from "../../assets/images/small/img-6.jpg";

import image2 from "../../assets/images/users/avatar-2.jpg";
import image4 from "../../assets/images/users/avatar-4.jpg";
import image3 from "../../assets/images/users/avatar-3.jpg";
import image5 from "../../assets/images/users/avatar-5.jpg";

import { Link } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from "react-redux";

// Toast Container
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../assets/images/users/avatar-9.jpg";
import avatar10 from "../../assets/images/users/avatar-10.jpg";
import userDummy from "../../assets/images/users/user-dummy-img.jpg";

const mailDetails = [
    {
        id: 1,
        forId: "flexCheck20",
        name: "Peter, me",
        number: "(3)",
        subject: "Hello",
        teaser: "Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)",
        date: "Mar 6",
        type: "primary",
        category: "all",
        label: "theme",
        img: avatar6
    },
    {
        id: 2,
        unread: true,
        forId: "flexCheck17",
        name: "me, Susanna",
        number: "(7)",
        subject: "Since you asked... and i'm inconceivably bored at the train station",
        badge: "Freelance",
        badgeClass: "warning",
        teaser: "Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
        date: "Mar 6",
        type: "primary",
        category: "all",
        label: "friend",
        img: avatar2
    },
    {
        id: 3,
        forId: "flexCheck16",
        name: "Web Support Dennis",
        number: "",
        subject: "Re: New mail settings",
        teaser: "Will you answer him asap?",
        date: "Mar 7",
        type: "primary",
        category: "all",
        label: "theme",
        img: avatar3
    },
    {
        id: 4,
        forId: "flexCheck15",
        name: "me, Peter",
        number: "(2)",
        subject: "Off on Thursday",
        badge: "Support",
        badgeClass: "info",
        teaser: "Eff that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5:55 pm",
        date: "Mar 4",
        type: "primary",
        category: "all",
        label: "theme",
        img: avatar4
    },
    {
        id: 5,
        forId: "flexCheck14",
        name: "Medium",
        number: "",
        subject: "This Week's Top Stories",
        badge: "Social",
        badgeClass: "primary",
        teaser: "Our top pick for you on Medium this week The Man Who Destroyed America's Ego",
        date: "Feb 28",
        type: "primary",
        category: "inbox",
        label: "support",
        img: avatar5
    },
    {
        id: 6,
        forId: "flexCheck13",
        name: "Death to Stock",
        number: "",
        subject: "Montly High-Res Photos",
        teaser: "To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.",
        date: "Feb 28",
        type: "primary",
        category: "inbox",
        label: "friend",
        img: userDummy
    },
    {
        id: 7,
        unread: true,
        forId: "flexCheck12",
        name: "Randy, me",
        number: "(5)",
        subject: "Last pic over my village",
        badge: "Family",
        badgeClass: "success",
        teaser: "Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!",
        date: "5:01 am",
        type: "primary",
        category: "all",
        label: "family",
        img: avatar7
    },
    {
        id: 8,
        forId: "flexCheck11",
        name: "Andrew Zimmer",
        number: "",
        subject: "Mochila Beta: Subscription Confirme",
        teaser: "You've been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the information you submitted to us...",
        date: "Mar 8",
        type: "primary",
        category: "draft",
        label: "social",
        img: avatar8
    },
    {
        id: 9,
        forId: "flexCheck10",
        name: "Infinity HR",
        number: "",
        subject: "Sveriges Hetaste sommarjobb",
        teaser: "Hej Nicklas Sandell! Vi vill bjuda in dig till 'First tour 2014', ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.",
        date: "Mar 8",
        type: "primary",
        category: "starred",
        label: "support",
        img: avatar9
    },
    {
        id: 10,
        forId: "flexCheck09",
        name: "Revibe",
        number: "",
        subject: "Weekend on Revibe",
        badge: "Friends",
        badgeClass: "danger",
        teaser: "Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!",
        date: "Feb 27",
        type: "primary",
        category: "starred",
        label: "support",
        img: avatar10
    },
    {
        id: 11,
        forId: "flexCheck08",
        name: "Erik, me",
        number: "(5)",
        subject: "Regarding our meeting",
        teaser: "That's great, see you on Thursday!",
        date: "Feb 24",
        type: "primary",
        category: "inbox",
        label: "social",
        img: avatar6
    },
    {
        id: 12,
        forId: "flexCheck07",
        name: "KanbanFlow",
        number: "",
        subject: "Task assigned: Clone ARP's website",
        badge: "Social",
        badgeClass: "primary",
        teaser: "You have been assigned a task by Alex@Work on the board Web.",
        date: "Feb 24",
        type: "primary",
        category: "inbox",
        label: "friend",
        img: avatar7
    },
    {
        id: 13,
        forId: "flexCheck06",
        name: "Tobias Berggren",
        number: "",
        subject: "Let's go fishing!",
        teaser:
            "Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
        date: "Feb 23",
        type: "primary",
        category: "inbox",
        label: "family",
        img: avatar8
    },
    {
        id: 14,
        forId: "flexCheck05",
        name: "Charukaw, me",
        number: "(7)",
        subject: "Hey man",
        teaser: "Nah man sorry i don't. Should i get it?",
        date: "Feb 23",
        type: "primary",
        category: "important",
        label: "support",
        img: avatar9
    },
    {
        id: 15,
        unread: true,
        forId: "flexCheck04",
        name: "me, Peter",
        number: "(5)",
        subject: "Home again!",
        badge: "Support",
        badgeClass: "info",
        teaser: "That's just perfect! See you tomorrow.",
        date: "Feb 21",
        type: "primary",
        category: "all",
        label: "theme",
        img: avatar10
    },
    {
        id: 16,
        forId: "flexCheck03",
        name: "Stack Exchange",
        number: "",
        subject: "1 new items in your Stackexchange inbox",
        teaser: "The following items were added to your Stack Exchange global inbox since you last checked it.",
        date: "Feb 21",
        type: "primary",
        category: "starred",
        label: "theme",
        img: userDummy
    },
    {
        id: 17,
        forId: "flexCheck02",
        name: "Google Drive Team",
        number: "",
        subject: "You can now use your storage in GoogleDrive",
        teaser: "Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.",
        date: "Feb 20",
        type: "promotions",
        category: "spam",
        label: "social",
        img: userDummy
    },
    {
        id: 18,
        forId: "flexCheck01",
        name: "me, Susanna",
        number: "(11)",
        subject: "Train/Bus",
        teaser: "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
        date: "Feb 19",
        type: "primary",
        category: "sent",
        label: "theme",
        img: avatar6
    },
    {
        id: 19,
        unread: true,
        forId: "flexCheck21",
        name: "Peter, me",
        number: "",
        subject: "Hello",
        teaser: "Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)",
        date: "Mar 7",
        type: "social",
        category: "inbox",
        label: "support",
        img: avatar2
    },
    {
        id: 20,
        unread: true,
        forId: "flexCheck22",
        name: "me, Susanna",
        number: "(7)",
        subject: "Since you asked... and i'm inconceivably bored at the train station",
        badge: "Freelance",
        badgeClass: "warning",
        teaser: "Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
        date: "Mar 7",
        type: "social",
        category: "all",
        label: "freelance",
        img: avatar4
    },
    {
        id: 21,
        forId: "flexCheck23",
        name: "Web Support Dennis",
        number: "(7)",
        subject: "Re: New mail settings",
        teaser: "Will you answer him asap?",
        date: "Mar 5",
        type: "social",
        category: "trash",
        label: "social",
        img: userDummy
    },
    {
        id: 18,
        forId: "flexCheck24",
        name: "me, Susanna",
        number: "",
        subject: "Train/Bus",
        teaser: "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
        date: "Feb 19",
        type: "promotions",
        category: "draft",
        label: "freelance",
        img: avatar5
    },
    {
        id: 19,
        forId: "flexCheck25",
        name: "Peter",
        number: "",
        subject: "Home again!",
        badge: "Support - Off on Thursday",
        badgeClass: "info",
        teaser: "Eff that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5:55 pm",
        date: "Mar 4",
        type: "primary",
        category: "sent",
        label: "support",
        img: avatar2
    },
];

const EmailToolbar = () => {

    const dispatch = useDispatch();
    const [isLoader , IsSetLoader] = useState(false);
    // const { mailDetails, isLoader } = useSelector((state) => ({
    //     mailDetails: state.Mailbox.mailDetails,
    //     isLoader: state.Mailbox.isLoader,
    // }));

    useEffect(() => {
    }, [dispatch]);

    const [mailList, setMailList] = useState([]);
    const [activeTabs, setActive] = useState("all");
    const [isLabelTab, setIsLabelTab] = useState("");
    const [isTypeTab, setIsTypeTab] = useState("primary");
    const [displayCategory, setCategory] = useState("all");
    const [displaytype, settype] = useState("all");
    const [displaylabel, setLabel] = useState("all");

    useEffect(() => {
        setMailList(mailDetails);
    }, [mailDetails]);

    const toggleTab = (ncategory, ntype, nlabel) => {
        var element = document.getElementById("mail-filter-navlist");
        if (ncategory === "all" || ncategory === "inbox") {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
        if (activeTabs !== ncategory) {
            setActive(ncategory);
        }
        if (isLabelTab !== nlabel) {
            setIsLabelTab(nlabel);
        }
        if (isTypeTab !== ntype) {
            setIsTypeTab(ntype);
        }
        setCategory(ncategory);
        settype(ntype);
        setLabel(nlabel);
    };

    // SideBar Open
    function sidebarOpen(value, ele) {
        const element = document.getElementsByTagName('body')[0];
        element.classList.add(value);
        ele.closest("li").classList.remove("unread");
    }

    // SideBar Close
    function sidebarClose(value) {
        const element = document.getElementsByTagName('body')[0];
        element.classList.remove(value);
    }

    // Chat Box
    const chatBox = (value) => {
        const element = document.getElementById("emailchat-detailElem");
        element.style.display = value;
    };

    const [modal, setModal] = useState(false);

    const toggle = () => {
        if (modal) {
            setModal(false);
        } else {
            setModal(true);
        }
    };

    // delete button toggle
    const onChangeCheckBox = (value, check) => {
        const element = document.getElementById("email-topbar-actions");
        const checkedCount = document.querySelectorAll('.checkbox-wrapper-mail input:checked').length;
        const activeList = document.getElementById(value);

        if (checkedCount >= 1) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }

        if (check) {
            activeList.classList.add("active");
        } else {
            activeList.classList.remove("active");
        }
    };

    // Checked All Email
    const checkedAll = () => {
        const checkall = document.getElementById("checkall");
        const element = document.querySelectorAll(".message-list li");
        const ele = document.getElementById("email-topbar-actions");
        ele.style.display = 'block';

        if (checkall.checked) {
            element.forEach((node) => {
                node.classList.add("active");
                node.firstChild.firstChild.firstChild.checked = true;
            });
        } else {
            ele.style.display = 'none';
            element.forEach((node) => {
                node.classList.remove("active");
                node.firstChild.firstChild.firstChild.checked = false;
            });
        }
    };


    // Delete Email
    const removeEmail = () => {
        const element = document.querySelectorAll(".message-list li");
        const ele = document.getElementById("email-topbar-actions");
        const checkall = document.getElementById("checkall");
        element.forEach((element) => {

            if (element.classList.contains('active')) {
                var forId = element.querySelector('.form-check-input').value;
            }
            element.classList.remove("active");
            element.querySelector('.form-check-input').checked = false;

        });
        checkall.checked = false;
        ele.style.display = 'none';
    };

    // Mark all as Read
    const readAll = () => {

        if (document.querySelectorAll(".message-list li.unread").length === 0) {
            document.getElementById("unreadConversations").style.display = "block";
            setTimeout(function () { document.getElementById("unreadConversations").style.display = "none"; }, 1000);
        }

        document.querySelectorAll(".message-list li.unread").forEach(function (element) {
            if (element.classList.contains("unread")) { element.classList.remove("unread"); }
        });
    };

    const chatData = [
        { id: 1, img: image2, name: "Scott Median", caption: "Hello ! are you there?" },
        { id: 2, img: image4, name: "Julian Rosa", caption: "What about our next.." },
        { id: 3, img: image3, name: "David Medina", caption: "Yeah everything is fine" },
        { id: 4, img: image5, name: "Jay Baker", caption: "Wow that's great" },
    ];

    const [info, setInfo] = useState(chatData[0]);

    const [emailinfo, setEmailinfo] = useState([]);

    //delete order
    const [deleteModal, setDeleteModal] = useState(false);

    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
            <DeleteModal
                show={deleteModal}
                onDeleteClick={() => {
                    removeEmail();
                    setDeleteModal(false);
                }}
                onCloseClick={() => setDeleteModal(false)}
            />
            <div className="email-wrapper d-lg-flex gap-1 mt-n4 py-1">
                <div className="email-menu-sidebar">
                    <div className="p-4 d-flex flex-column h-100">
                        <div className="pb-4 border-bottom border-bottom-dashed">
                            <button
                                type="button"
                                className="btn btn-brand-theme w-100"
                                onClick={() => {
                                    setModal(true);
                                }}
                            >
                                <FeatherIcon icon="send" className="icon-xs me-1 icon-dual-light" />
                                Compose
                            </button>
                        </div>

                        <SimpleBar
                            className="mx-n4 px-4 email-menu-sidebar-scroll"
                            data-simplebar
                        >
                            <div className="mail-list mt-3">
                                <Link to="#" onClick={() => { toggleTab("all", "all", "all"); }} className={classnames({ active: activeTabs === 'all' })}>
                                    <i className="ri-mail-fill me-3 align-middle fw-medium"></i>{" "}
                                    <span className="mail-list-link">
                                        Inbox{" "}
                                    </span>
                                    <span className="badge badge-soft-success ms-auto">5</span>
                                </Link>
                               
                            </div>
                        </SimpleBar>

                        {/* <div className="mt-auto">
                            <h5 className="fs-13">1.75 GB of 10 GB used</h5>
                            <Progress color="success" className="progress-sm" value={25} />
                        </div> */}
                    </div>
                </div>


                <div className="email-content">
                    <div className="p-4 pb-0">
                        <div className="border-bottom border-bottom-dashed">
                            <Row className="mt-n2 mb-3 mb-sm-0">
                                <Col className="col-sm-auto order-1 d-block d-lg-none">
                                    <button type="button" className="btn btn-soft-success btn-icon btn-sm fs-16 email-menu-btn" onClick={() => {
                                    setModal(true);
                                }}>
                                        <i className="ri-menu-2-fill align-bottom"></i>
                                    </button>
                                </Col>
                                <div className="col-sm order-3 order-sm-2">
                                    <div className="hstack gap-sm-1 align-items-center flex-wrap email-topbar-link">
                                        {/* <div className="form-check fs-14 m-0">
                                            <input className="form-check-input" type="checkbox" value="" id="checkall"
                                                onChange={e => {
                                                    checkedAll(e.target.value);
                                                }}
                                            />
                                            <label className="form-check-label" htmlFor="checkall"></label>
                                        </div> */}

                                        <div id="email-topbar-actions" style={{ display: "none" }}>
                                            <div className="hstack gap-sm-1 align-items-center flex-wrap">
                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16" id="Tooltip1">
                                                    <i className="ri-inbox-archive-fill align-bottom"></i>
                                                </button>
                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16" id="Tooltip2">
                                                    <i className="ri-error-warning-fill align-bottom"></i>
                                                </button>
                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16" id="Tooltip3" onClick={() => { setDeleteModal(true); }} >

                                                    <i className="ri-delete-bin-5-fill align-bottom"></i>
                                                </button>
                                            </div>
                                        </div>

                                        {/* <div className="vr align-self-center mx-2"></div> */}

                                        {/* <UncontrolledDropdown>
                                            <DropdownToggle tag="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16">
                                                <i className="ri-price-tag-3-fill align-bottom"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem>Support</DropdownItem>
                                                <DropdownItem>Freelance</DropdownItem>
                                                <DropdownItem>Social</DropdownItem>
                                                <DropdownItem>Friends</DropdownItem>
                                                <DropdownItem>Family</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown> */}

                                        {/* <UncontrolledDropdown>
                                            <DropdownToggle tag="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16">
                                                <i className="ri-more-2-fill align-bottom"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem onClick={() => readAll()}>Mark all as Read</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown> */}

                                        <Alert color="warning" style={{ display: "none" }} className="unreadConversations-alert px-4 fade" id="unreadConversations">
                                            No Unread Conversations
                                        </Alert>

                                        <UncontrolledTooltip placement="top" target="Tooltip1"> Archive </UncontrolledTooltip>
                                        <UncontrolledTooltip placement="top" target="Tooltip2"> Report Spam </UncontrolledTooltip>
                                        <UncontrolledTooltip placement="top" target="Tooltip3"> Trash </UncontrolledTooltip>
                                    </div>
                                </div>
                                <div className="col-auto order-2 order-sm-3">
                                    <div className="d-flex gap-sm-1 email-topbar-link">
                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16">
                                            <i className="ri-refresh-line align-bottom"></i>
                                        </button>
                                        {/* <UncontrolledDropdown>
                                            <DropdownToggle tag="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16">
                                                <i className="ri-more-2-fill align-bottom"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem>Mark as Unread</DropdownItem>
                                                <DropdownItem>Mark as Important</DropdownItem>
                                                <DropdownItem>Add to Tasks</DropdownItem>
                                                <DropdownItem>Add Star</DropdownItem>
                                                <DropdownItem>Mute</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown> */}
                                    </div>
                                </div>
                            </Row>

                            {/* <Row className="row align-items-end mt-3">
                                <Col>
                                    <div id="mail-filter-navlist">
                                        <Nav
                                            className="nav nav-tabs nav-tabs-custom nav-success gap-1 text-center border-bottom-0"
                                            role="tablist"
                                        >
                                            <NavItem>
                                                <NavLink
                                                    className={classnames(
                                                        { active: isTypeTab === "primary" },
                                                        "fw-semibold"

                                                    )}
                                                    onClick={() => {
                                                        toggleTab("all", "primary", "all");
                                                    }}
                                                    href="#"
                                                >
                                                    <i className="ri-inbox-fill align-bottom d-inline-block"></i>
                                                    <span className="ms-1 d-none d-sm-inline-block">Primary</span>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                </Col>
                                <div className="col-auto">
                                    <div className="text-muted mb-2">1-50 of 154</div>
                                </div>
                            </Row> */}
                        </div>

                        <SimpleBar className="message-list-content mx-n4 px-4 message-list-scroll">
                            {isLoader ? <div id="elmLoader">
                                <div className="spinner-border text-primary avatar-sm" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div> :
                                <ul className="message-list" id="mail-list">
                                    {
                                        mailList.filter(({ category, type, label }) => displayCategory === category || (displayCategory === "all" && (displaytype === type || displaytype === 'all') && (displaylabel === label || displaylabel === 'all'))).map((item, key) => (
                                            <li className={item.unread ? "unread" : null} key={key} id={item.forId}>
                                                <div className="col-mail col-mail-1">
                                                    {/* <div className="form-check checkbox-wrapper-mail fs-14">
                                                        <input
                                                            onChange={(e) => {
                                                                onChangeCheckBox(e.target.value, e.target.checked);
                                                            }}
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value={item.forId}
                                                            id={item.forId}
                                                        />
                                                        <label className="form-check-label" htmlFor={item.forId}></label>
                                                    </div> */}
                                                    
                                                    <Link to="#" className="title" onClick={(e) => { sidebarOpen("email-detail-show", e.target); setEmailinfo(item); }}>
                                                        {item.name} {" "} {item.number} <br />
                                                        <span className='text-brand deal-name'>SCIP</span>
                                                        </Link>
                                                </div>
                                                <div className="col-mail col-mail-2" onClick={(e) => { sidebarOpen("email-detail-show", e.target); setEmailinfo(item); }}>
                                                    <Link to="#" className="subject">
                                                         {item.subject} - <span className="teaser">{item.teaser}<br />
                                                         {/* {item.badge ? <span className={"badge me-2 bg-" + item.badgeClass}>{item.badge}</span> : null}  */}
                                                         </span>
                                                    </Link>
                                                    <div className="date">{item.date}</div>
                                                    <span className='attachment-icon'><i className='ri ri-attachment-line icon'></i></span>
                                                </div>
                                            </li>
                                        ))}
                                </ul>}
                        </SimpleBar>
                    </div>
                </div >

                <div className="email-detail-content">
                    <div className="p-4 d-flex flex-column h-100">
                        <div className="pb-4 border-bottom border-bottom-dashed">
                            <Row>
                                <Col className="col">
                                    <div className="">
                                        <button type="button" className="btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-email" onClick={() => sidebarClose("email-detail-show")}>
                                            <i className="ri-close-fill align-bottom"></i>
                                        </button>
                                    </div>
                                </Col>
                                <Col className="col-auto">
                                    <div className="hstack gap-sm-1 align-items-center flex-wrap email-topbar-link">
                                       
                                        {/* <button className="btn btn-ghost-secondary btn-icon btn-sm fs-16">
                                            <i className="ri-printer-fill align-bottom"></i>
                                        </button> */}
                                        <button className="btn btn-ghost-secondary btn-icon btn-sm fs-16">
                                            <i className="ri-delete-bin-5-fill align-bottom"></i>
                                        </button>
                                     
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <SimpleBar className="mx-n4 px-4 email-detail-content-scroll">
                            <div className="mt-4 mb-3">
                                <h5 className="fw-bold email-subject-title">{emailinfo.subject}</h5>
                            </div>
                            <div className="accordion accordion-flush">
                                <div className="accordion-item border-dashed left">
                                    <div className="pb-2 mb-2 border-bottom">
                                         
                                            <div className="d-flex align-items-center text-muted">
                                                <div className="flex-shrink-0 avatar-xs me-3">
                                                    <img src={emailinfo.img} alt="" className="img-fluid rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="fs-14 text-truncate mb-0 email-user-name">{emailinfo.name}</h5>
                                                    <div className="text-truncate fs-12">to: me</div>
                                                </div>
                                                <div className="flex-shrink-0 align-self-start">
                                                    <div className="text-muted fs-12">09 Jan 2022, 11:12 AM</div>
                                                </div>
                                            </div>
                                        
                                    </div>

                                     
                                        
                                            <div>
                                                <p>Hi,</p>
                                                <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor.
                                                </p>
                                                <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices.</p>
                                                <p>Sincerly,</p>

                                                <div className="d-flex gap-3">
                                                    <div className="border rounded avatar-xl h-auto">
                                                        {/* <img src={img2} alt="" className="img-fluid rouned-top" /> */}
                                                        <div className='bg-light p-3 text-center'>
                                                            <i className='mdi mdi-file-document-multiple-outline fs-2 text-black-50'></i>
                                                        </div>
                                                        <div className="py-2 text-center">
                                                            <a href="/#" className="d-block fw-semibold text-brand"><i class="ri ri-download-line me-1" /> Download</a>
                                                        </div>
                                                    </div>
                                                    <div className="border rounded avatar-xl h-auto">
                                                    <div className='bg-light p-3 text-center'>
                                                            <i className='mdi mdi-file-document-multiple-outline fs-2 text-black-50'></i>
                                                        </div>
                                                        <div className="py-2 text-center">
                                                            <a href="/#" className="d-block fw-semibold text-brand"><i class="ri ri-download-line me-1" /> Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                     
                                </div>
                            </div>
                        </SimpleBar>
                        {/* Reply Option  */}
                        {/* <div className="mt-auto">
                            <form className="mt-2">
                                <div>
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Reply :</label>
                                    <textarea className="form-control border-bottom-0 rounded-top rounded-0 border" id="exampleFormControlTextarea1" rows="3" placeholder="Enter message"></textarea>
                                    <div className="bg-light px-2 py-1 rouned-bottom border">
                                        <Row>
                                            <Col>
                                                <ButtonGroup>
                                                    <Button size='sm' color='light' className="py-0 fs-15" id="Bold1"><i className="ri-bold align-bottom"></i></Button>
                                                    <Button size='sm' color='light' className="py-0 fs-15" id="Italic1"><i className="ri-italic align-bottom"></i></Button>
                                                    <Button size='sm' color='light' className="py-0 fs-15" id="Link1"><i className="ri-link align-bottom"></i></Button>
                                                    <Button size='sm' color='light' className="py-0 fs-15" id="Image1"><i className="ri-image-2-line align-bottom"></i></Button>
                                                </ButtonGroup>
                                                <UncontrolledTooltip placement="top" target="Bold1"> Bold </UncontrolledTooltip>
                                                <UncontrolledTooltip placement="top" target="Italic1"> Italic </UncontrolledTooltip>
                                                <UncontrolledTooltip placement="top" target="Link1"> Link </UncontrolledTooltip>
                                                <UncontrolledTooltip placement="top" target="Image1"> Image </UncontrolledTooltip>
                                            </Col>
                                            <Col className="col-auto">
                                                <UncontrolledButtonDropdown>
                                                    <Button color="success" className="btn-sm"><i className="ri-send-plane-2-fill align-bottom" /></Button>
                                                    <DropdownToggle tag="button" className="btn btn-success btn-sm" split>
                                                    </DropdownToggle>
                                                    <DropdownMenu >
                                                        <DropdownItem><i className="ri-timer-line text-muted me-1 align-bottom" /> Schedule Send</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledButtonDropdown>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>

            <Modal id="composemodal" className="modal-lg" isOpen={modal} toggle={toggle} centered>
                <ModalHeader className="p-3 bg-light" toggle={toggle}>
                    New Message
                </ModalHeader>
                <ModalBody>
                    <div>
                        <div className="mb-3 position-relative">
                            <Input
                                type="text"
                                className="form-control email-compose-input"
                                defaultValue="support@themesbrand.com"
                            />
                            <div className="position-absolute top-0 end-0">
                                <div className="d-flex">
                                    <button
                                        className="btn btn-link text-reset fw-semibold px-2"
                                        type="button"
                                    >
                                        Cc
                                    </button>
                                    <button
                                        className="btn btn-link text-reset fw-semibold px-2"
                                        type="button"
                                    >
                                        Bcc
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="collapse" id="CcRecipientsCollapse">
                            <div className="mb-3">
                                <label>Cc:</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cc recipients"
                                />
                            </div>
                        </div>
                        <div className="collapse" id="BccRecipientsCollapse">
                            <div className="mb-3">
                                <label>Bcc:</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Bcc recipients"
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <Input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="ck-editor-reverse">
                            <CKEditor
                                editor={ClassicEditor}
                                onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.

                                }}
                                onChange={(event, editor) => {
                                    editor.getData();
                                }}
                            />
                        </div>
                    </div>
                </ModalBody>
                <div className="modal-footer justify-content-between">
                    <div className='attachment-btn'>
                        <input type="file" className='input' />
                        <i className='ri ri-attachment-line icon' />
                    </div>

                        <button
                            type="button"
                            className="btn btn-brand-theme"
                            onClick={() => {
                                setModal(false);
                            }}
                        >
                            Send
                        </button>
                </div>
            </Modal>
        </React.Fragment >
    );
};

export default EmailToolbar;