import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

//import images
import avatar1 from "../../assets/images/users/avatar-1.jpg";

const ProfileDropdown = () => {
    const history = useNavigate();
    var IsSuperAdmin = localStorage.getItem("IsSuperAdmin");
    const token1 = localStorage.getItem("token1");
    const UserData1 = localStorage.getItem("UserData1");

    const { user } = useSelector(state => ({
        user: state,
    }));

    const [userName, setUserName] = useState("");

    // useEffect(() => {
    //     if (sessionStorage.getItem("authUser")) {
    //         const obj = JSON.parse(sessionStorage.getItem("authUser"));
    //         // setUserName(obj.user_type);
    //         // original
    //         setUserName(process.env.REACT_APP_DEFAULTAUTH === "fake" ? obj.username === undefined ? user.first_name ? user.first_name : obj.data.first_name : "Admin" || "Admin" :
    //             process.env.REACT_APP_DEFAULTAUTH === "firebase" ? obj.providerData[0].email : "Admin"
    //         );
    //     }
    // }, [userName, user]);

    useEffect(() => {
        const localdata = JSON.parse(localStorage.getItem("UserData") || "");

        setUserName(localdata.first_name ? localdata.first_name : localdata.name);

    }, []);


    //Dropdown Toggle
    const [isProfileDropdown, setIsProfileDropdown] = useState(false);
    const toggleProfileDropdown = () => {
        setIsProfileDropdown(!isProfileDropdown);
    };

    const logout = () => {

        localStorage.clear();
        window.location.href = "/logout";

    }
    const goToSuperAdminDashboard = () => {
        if (token1 && UserData1) {
            localStorage.setItem("IsSuperAdmin", 'Y');
            localStorage.setItem("token", token1);
            localStorage.setItem("UserData", UserData1);
            localStorage.removeItem("tenantId");
            localStorage.removeItem("api_base_url");
            localStorage.removeItem("token1");
            localStorage.removeItem("UserData1");
            history("/dashboard");
            window.location.reload();
        }

    }

    return (
        <React.Fragment>
            <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown} className="ms-sm-3 header-item topbar-user">
                <DropdownToggle tag="button" type="button" className="btn">
                    <span className="d-flex align-items-center">
                        <img className="rounded-circle header-profile-user" src={avatar1}
                            alt="Header Avatar" />
                        <span className="text-start ms-xl-2">
                            {/* <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{userName}</span> */}
                            <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">{userName}</span>
                        </span>
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                    {IsSuperAdmin == 'A' && <a onClick={() => goToSuperAdminDashboard()} className=' dropdown-item cursor-pointer'><i className="ri ri-login-box-line text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle">Back To Super Admin </span>
                    </a>}

                    <Link to="/profile" className=' dropdown-item'><i className="ri ri-user-line text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle">Profile</span>
                    </Link>
                    <Link to="/traning-videos" className=' dropdown-item'><i className="ri ri-user-line text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle">Traning Video</span>
                    </Link>
                    <Link to="/account-setting" className=' dropdown-item'><i className="ri ri-settings-3-line text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle">Account settings</span>
                    </Link>
                    <Link to="/contact-support" className=' dropdown-item'><i className="ri ri-customer-service-line text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle">Contact Support</span>
                    </Link>

                    {/* <DropdownItem href={process.env.PUBLIC_URL + "/logout"}><i
                        className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
                         <span className="align-middle" data-key="t-logout">Logout</span>
                    </DropdownItem>   */}
                    <DropdownItem onClick={() => logout()}>
                        <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle" data-key="t-logout">Logout</span>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default ProfileDropdown;