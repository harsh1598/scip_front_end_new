import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle, Form, Modal, ModalBody, ModalHeader } from 'reactstrap';

//import images
import logoSm from "../assets/images/scip-logo.svg";
import logoDark from "../assets/images/scip-logo.svg";
import logoLight from "../assets/images/scip-logo.svg";
import skypeLogo from "../assets/images/skype-logo.png"
import zoomLogo from "../assets/images/ZoomLogo.png"
import meetLogo from "../assets/images/google-meet.png"
import ciscoLogo from "../assets/images/sisco-webex.jpeg"
import gotoLogo from "../assets/images/goToMeeting.jpeg"
import gmailLogo from "../assets/images/gmail-logo.svg"
import outlookLogo from "../assets/images/outlook-logo.png"
import HelpCenter from './HelpCenter';

//import Components
import SearchOption from '../Components/Common/SearchOption';
import WebAppsDropdown from '../Components/Common/WebAppsDropdown';
import MyCartDropdown from '../Components/Common/MyCartDropdown';
import NotificationDropdown from '../Components/Common/NotificationDropdown';
import ProfileDropdown from '../Components/Common/ProfileDropdown';

import { changeSidebarVisibility, screenType } from '../store/actions';
import { useSelector, useDispatch } from "react-redux";
import WebService from '../utility/WebService';

const Header = ({ onChangeLayoutMode, layoutModeType, headerClass, isHideSideBar }) => {
    const [count, setCount] = useState("");
    const [search, setSearch] = useState(false);
    const toogleSearch = () => {
        setSearch(!search);
    };

    const dispatch = useDispatch();
    const { sidebarVisibilitytype } = useSelector(state => ({
        sidebarVisibilitytype: state.Layout.sidebarVisibilitytype
    }));

    useEffect(() => {
        totalCountMessage()
    }, [])

    // console.log(screenType ,"ujdhfius")

    // Only for selected url
    let url = window.location.pathname;
    useEffect(() => {
        if (url == "/deals" || url == "/deals/evaluation/comments" || url == "/deals/evaluation/review" || url == "/deals/evaluation/rubric" || url == "/deals/initialcommitment" || url == "/deals/teaser") {
            if (document.documentElement.getAttribute('data-sidebar-size') == 'lg') {
                Size();
            }

        }
    }, [url]);

    const toogleMenuBtn = () => {
        // console.log(document.documentElement.getAttribute('data-sidebar-size'))
        if (document.documentElement.getAttribute('data-sidebar-size') === 'lg') {
            dispatch(screenType("lg"));
        } else {
            dispatch(screenType("sm"));
        }

        var windowSize = document.documentElement.clientWidth;
        dispatch(changeSidebarVisibility("show"));
        if (windowSize > 767)
            document.querySelector(".hamburger-icon").classList.toggle('open');
        //For collapse horizontal menu
        if (document.documentElement.getAttribute('data-layout') === "horizontal") {
            document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
        }
        //For collapse vertical and semibox menu
        if (sidebarVisibilitytype === "show" && (document.documentElement.getAttribute('data-layout') === "vertical" || document.documentElement.getAttribute('data-layout') === "semibox")) {

            if (windowSize < 1025 && windowSize > 767) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'sm') ? document.documentElement.setAttribute('data-sidebar-size', '') : document.documentElement.setAttribute('data-sidebar-size', 'sm');
            } else if (windowSize > 1025) {

                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'lg') ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'lg');
            } else if (windowSize <= 767) {

                document.body.classList.add('vertical-sidebar-enable');
                document.documentElement.setAttribute('data-sidebar-size', 'lg');
            }
        }

    };

    const Size = () => {
        if (document.documentElement.getAttribute('data-sidebar-size') === 'lg') {
            dispatch(screenType("lg"));
        } else {
            dispatch(screenType("sm"));
        }
        var windowSize = document.documentElement.clientWidth;
        dispatch(changeSidebarVisibility("show"));
        if (windowSize > 767)
            document.querySelector(".hamburger-icon").classList.toggle('open');

        //For collapse horizontal menu
        if (document.documentElement.getAttribute('data-layout') === "horizontal") {
            document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
        }
        //For collapse vertical and semibox menu
        if (sidebarVisibilitytype === "show" && (document.documentElement.getAttribute('data-layout') === "vertical" || document.documentElement.getAttribute('data-layout') === "semibox")) {
            if (windowSize < 1025 && windowSize > 767) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'sm') ? document.documentElement.setAttribute('data-sidebar-size', '') : document.documentElement.setAttribute('data-sidebar-size', 'sm');
            } else if (windowSize > 1025) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'lg') ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'lg');
            } else if (windowSize <= 767) {
                document.body.classList.add('vertical-sidebar-enable');
                document.documentElement.setAttribute('data-sidebar-size', 'lg');
            }
        }
    }

    const [modal_call, setmodal_call] = useState(false);
    function tog_call() {
        setmodal_call(!modal_call);
    }
    const [modal_email, setmodal_email] = useState(false);
    function tog_email() {
        setmodal_email(!modal_email);
    }

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute(
          'src',
          '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    },[])

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            // includedLanguages: 'en,ms,ta,zh-CN', // include this for selected languages
            // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      };

    // useEffect(() => {
    //     var addScript = document.createElement("script");
    //     if (addScript) {
    //         const googleTranslateElementInit = () => {
    //             new window.google.translate.TranslateElement(
    //                 {
    //                     pageLanguage: "en",
    //                     // includedLanguages: "en,ms,ta,zh-CN", // include this for selected languages
    //                     // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    //                 },
    //                 "google_translate_element"
    //             );
    //         };
    //         addScript.setAttribute(
    //             "src",
    //             "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    //         );
    //         document.body.appendChild(addScript);
    //         window.googleTranslateElementInit = googleTranslateElementInit;
    //     }
    // }, []);



    const totalCountMessage = () => {
        const localdata = JSON.parse(localStorage.getItem("UserData") || "");
        if (localdata && localdata.user_type != 'admin') {
            WebService.getAPI({
                action: `/message-count`,
                body: null,
            })
                .then((res) => {
                    setCount(res.count)
                })
                .catch((error) => {
                });
        }

    }

    const [modelName, setModelName] = useState("");
    const toggleModel = (name) => {
        setModelName(name);
    };

    const onCloseClick = () => {
        setModelName("");
    };

    return (
        <React.Fragment>
            <header id={!isHideSideBar ? "page-topbar" : "page-topbar_or"} className={headerClass}>
                <div className="layout-width">
                    <div className="navbar-header">
                        <div className="d-flex">

                            <div className="navbar-brand-box horizontal-logo">
                                <Link to="/" className="logo logo-dark">
                                    <span className="logo-sm">
                                        <img src={logoSm} alt="" height="22" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src={logoDark} alt="" height="17" />
                                    </span>
                                </Link>

                                <Link to="/" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src={logoSm} alt="" height="22" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src={logoLight} alt="" height="17" />
                                    </span>
                                </Link>
                            </div>
                            {
                                !isHideSideBar ?
                                    <>
                                        <button
                                            onClick={toogleMenuBtn}
                                            type="button"
                                            className="btn btn-sm fs-16 header-item vertical-menu-btn topnav-hamburger"
                                            id="topnav-hamburger-icon"> {/*px-3 */}
                                            <span className="hamburger-icon">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span>
                                        </button>
                                        <SearchOption />
                                    </>
                                    :
                                    <>
                                        <Link to="/" className="logo logo-dark">
                                            <span className="logo-sm">
                                                <img src={logoSm} alt="" height="22" />
                                            </span>
                                            <span className="logo-lg">
                                                <img src={logoDark} alt="" height="17" />
                                            </span>
                                        </Link>
                                    </>
                            }
                        </div>
                        <div className="d-flex align-items-center header-nav">

                            <Dropdown isOpen={search} toggle={toogleSearch} className="d-md-none topbar-head-dropdown header-item">
                                <DropdownToggle type="button" tag="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
                                    <i className="bx bx-search fs-22"></i>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                                    <Form className="p-3">


                                        <div className="form-group m-0">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search ...x"
                                                    aria-label="Recipient's username" />
                                                <button className="btn btn-primary" type="submit"><i
                                                    className="mdi mdi-magnify"></i></button>
                                            </div>
                                        </div>
                                    </Form>
                                </DropdownMenu>
                            </Dropdown>
                            <Link to='' title="Help Cemter" className='navlink d-none d-md-inline'><i className="ri-customer-service-2-line" onClick={(e) => toggleModel("Helpcenter")}></i></Link>
                            <Link to='/checkspeed' title="checkspeed" className='navlink d-none d-md-inline'><i className="ri-dashboard-3-line"></i></Link>
                            <Link to='/' title="Snap shot" className='navlink d-none d-md-inline'><i className="ri-pages-line"></i></Link>
                            <Link to='#' title="Mail Option" className='navlink d-none d-md-inline' onClick={() => tog_call()}><i className="ri-mail-send-line"></i></Link>
                            <Link to='/inbox' title="Inbox" className='navlink d-none d-md-inline'><i className="ri-mail-unread-line"></i></Link>
                            <Link to='/calendar' title="Calendar" className='navlink d-none d-md-inline'><i className="ri-calendar-2-line"></i></Link>
                            <Link to='#' title="Meeting" className='navlink' onClick={() => tog_email()}><i className="ri-headphone-line"></i></Link>
                            <Link to='/message' title="Messages" className='navlink'><i className="ri-message-2-line"></i>      <div className="col-auto dropdown-tabs">
                                <span
                                    className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">{count}</span>
                            </div></Link>

                            {/* NotificationDropdown */}
                            <NotificationDropdown />

                            {/* ProfileDropdown */}
                            <div id="google_translate_element"> </div>
                            <ProfileDropdown />
                        </div>

                    </div>
                </div>
            </header>

            {/* Call Modal  */}
            <Modal
                size="lg"
                isOpen={modal_call}
                toggle={() => {
                    tog_call();
                }}
                centered
            >
                <ModalHeader className="">
                    <span className="modal-title">Select Meeting</span>
                    <Link to='#' onClick={() => setmodal_call(false)} className=' position-absolute text-dark' style={{ right: "22px", top: "12px" }}> <i className='ri ri-close-line' /> </Link>
                </ModalHeader>

                <ModalBody className="text-center py-5">
                    <div className="mt-4 d-flex flex-wrap justify-content-center align-items-center">
                        <Link to='https://login.live.com/' target='_blank' className='mx-3'> <img src={skypeLogo} width="50" height="" className='mb-4 border p-2' /> </Link>
                        <Link to='https://zoom.us/signin' target='_blank' className='mx-3'> <img src={zoomLogo} width="150" height="" className='mb-4 border p-2' /> </Link>
                        <Link to='https://apps.google.com/meet/' target='_blank' className='mx-3'> <img src={meetLogo} width="60" height="" className='mb-4 border p-2' /> </Link>
                        <Link to='https://www.webex.com/' target='_blank' className='mx-3'> <img src={ciscoLogo} width="150" height="" className='mb-4 border p-2' /> </Link>
                        <Link to='https://global.gotomeeting.com/#/meetings/anytime-meetings' target='_blank'> <img src={gotoLogo} width="250" height="" className='border p-2 mb-4' /> </Link>
                    </div>
                </ModalBody>
            </Modal>
            {/* Email Modal  */}
            <Modal

                isOpen={modal_email}
                toggle={() => {
                    tog_email();
                }}
                centered
            >
                <ModalHeader className="">
                    <span className="modal-title">Select Mail Option</span>
                    <Link to='#' onClick={() => setmodal_email(false)} className=' position-absolute text-dark' style={{ right: "22px", top: "12px" }}> <i className='ri ri-close-line' /> </Link>
                </ModalHeader>

                <ModalBody className="text-center py-5">
                    <div className="mt-4 d-flex flex-wrap justify-content-center align-items-center">
                        <Link to='https://mail.google.com/' target='_blank' className='mx-3'> <img src={gmailLogo} width="180" height="" className='mb-4 border p-2' /> </Link>
                        <Link to='https://outlook.live.com/owa/' target='_blank' className='mx-3'> <img src={outlookLogo} width="180" height="" className='mb-4 border p-2' /> </Link>

                    </div>
                </ModalBody>
            </Modal>

            <HelpCenter
            show={modelName === "Helpcenter" ? true : false}
            onCloseClick={onCloseClick}
        />

        </React.Fragment>
    );
};

export default Header;