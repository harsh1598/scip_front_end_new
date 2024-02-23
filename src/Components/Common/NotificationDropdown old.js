import React, { useState } from 'react';
import { Col, Dropdown, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

//import images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import bell from "../../assets/images/svg/bell.svg";

//SimpleBar
import SimpleBar from "simplebar-react";

const NotificationDropdown = () => {
    //Dropdown Toggle
    const [isNotificationDropdown, setIsNotificationDropdown] = useState(false);
    const toggleNotificationDropdown = () => {
        setIsNotificationDropdown(!isNotificationDropdown);
    };

    //Tab 
    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    return (
        <React.Fragment>
            <Dropdown isOpen={isNotificationDropdown} toggle={toggleNotificationDropdown} className="topbar-head-dropdown ms-1 header-item">
                <DropdownToggle type="button" tag="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
                    <i className='bx bx-bell fs-22'></i>
                    <span
                        className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">3<span
                            className="visually-hidden">unread messages</span></span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                    <div className="dropdown-head bg-primary bg-pattern rounded-top">
                        <div className="p-3">
                            <Row className="align-items-center">
                                <Col>
                                    <h6 className="m-0 fs-16 fw-semibold text-white"> Notifications </h6>
                                </Col>
                                <div className="col-auto dropdown-tabs">
                                    <span className="badge badge-soft-light fs-13"> 4 New</span>
                                </div>
                            </Row>
                        </div>

                       

                    </div>
                    <SimpleBar style={{ maxHeight: "300px" }} className="pe-2">
                                <div className="text-reset notification-item d-block dropdown-item position-relative">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-soft-info text-info rounded-circle fs-16">
                                                <i className="bx bx-badge-check"></i>
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <Link to="#" className="stretched-link">
                                                <h6 className="mt-0 mb-2 lh-base">Your <b>Elite</b> author Graphic
                                                    Optimization <span className="text-secondary">reward</span> is ready!
                                                </h6>
                                            </Link>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> Just 30 sec ago</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="all-notification-check01" />
                                                <label className="form-check-label" htmlFor="all-notification-check01"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-reset notification-item d-block dropdown-item position-relative active">
                                    <div className="d-flex">
                                        <img src={avatar2}
                                            className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="flex-1">
                                            <Link to="#" className="stretched-link"><h6 className="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6></Link>
                                            <div className="fs-13 text-muted">
                                                <p className="mb-1">Answered to your comment on the cash flow forecast's
                                                    graph 🔔.</p>
                                            </div>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> 48 min ago</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="all-notification-check02"/>
                                                <label className="form-check-label" htmlFor="all-notification-check02"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-reset notification-item d-block dropdown-item position-relative">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span
                                                className="avatar-title bg-soft-danger text-danger rounded-circle fs-16">
                                                <i className='bx bx-message-square-dots'></i>
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <Link to="#" className="stretched-link">
                                                <h6 className="mt-0 mb-2 fs-13 lh-base">You have received <b className="text-success">20</b> new messages in the conversation</h6>
                                            </Link>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> 2 hrs ago</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="all-notification-check03" />
                                                <label className="form-check-label" htmlFor="all-notification-check03"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-reset notification-item d-block dropdown-item position-relative">
                                    <div className="d-flex">
                                        <img src={avatar8} className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="flex-1">
                                            <Link to="#" className="stretched-link"><h6 className="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6></Link>
                                            <div className="fs-13 text-muted">
                                                <p className="mb-1">We talked about a project on linkedin.</p>
                                            </div>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> 4 hrs ago</span>
                                            </p>
                                        </div>
                                        <div className="px-2 fs-15">
                                            <div className="form-check notification-check">
                                                <input className="form-check-input" type="checkbox" value="" id="all-notification-check04" />
                                                <label className="form-check-label" htmlFor="all-notification-check04"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="my-3 text-center">
                                    <Link to="/notifications" className="btn btn-soft-success waves-effect waves-light">View
                                        All Notifications <i className="ri-arrow-right-line align-middle"></i></Link>
                                </div>
                            </SimpleBar>

                    
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default NotificationDropdown;