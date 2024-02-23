import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isBaseUi, setIsBaseUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Apps
    const [isEmail, setEmail] = useState(false);
    const [isSubEmail, setSubEmail] = useState(false);
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isTasks, setIsTasks] = useState(false);
    const [isCRM, setIsCRM] = useState(false);
    const [isCrypto, setIsCrypto] = useState(false);
    const [isInvoices, setIsInvoices] = useState(false);
    const [isSupportTickets, setIsSupportTickets] = useState(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);
    const [isJobs, setIsJobs] = useState(false);
    const [isJobList, setIsJobList] = useState(false);
    const [isCandidateList, setIsCandidateList] = useState(false);


    // Authentication
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState(false);
    const [isLockScreen, setIsLockScreen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isVerification, setIsVerification] = useState(false);
    const [isError, setIsError] = useState(false);

    // Pages
    const [isProfile, setIsProfile] = useState(false);
    const [isLanding, setIsLanding] = useState(false);


    // Charts
    const [isApex, setIsApex] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'BaseUi') {
            setIsBaseUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }
        if (iscurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (iscurrentState === 'Widgets') {
            history("/widgets");
            document.body.classList.add('twocolumn-panel');
        }
        if (iscurrentState !== 'Landing') {
            setIsLanding(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isApps,
        isAuth,
        isPages,
        isBaseUi,
        isAdvanceUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel
    ]);

    const menuItems = [

        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/dashboard",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            }
        },
        {
            id: "InvestmentTasks",
            label: "Investment Tasks",
            icon: "ri-apps-2-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsApps(!isApps);
                setIscurrentState('Apps');
                updateIconSidebar(e);
            },
            stateVariables: isApps,
            subItems: [
                {
                    id: "MyTasks",
                    label: "My Investment Tasks",
                    link: "/ ",
                    parentId: "InvestmentTasks",
                },
                {
                    id: "AssignedTasks",
                    label: "Assigned Investment Tasks",
                    link: "/apps-chat",
                    parentId: "InvestmentTasks",
                },
            ],
        },
        {
            id: "approvals",
            label: "Approvals",
            icon: "ri-chat-check-line",
            link: "/approvals",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            }
        },
        {
            id: "deals",
            label: "Deals",
            icon: "ri-chat-check-line",
            link: "/deals",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            }
        },
        {
            id: "AppFunnel",
            label: "App Funnel",
            icon: "ri-sound-module-line", 
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
            subItems: [
                // {
                //     id: "applications",
                //     label: "Applications",
                //     link: "/preliminary/application",
                //     isChildItem: true,
                //     click: function (e) {
                //         e.preventDefault();
                //         setIsSignIn(!isSignIn);
                //     },
                //     parentId: "AppFunnel",
                //     stateVariables: isSignIn,
                // },
                // {
                //     id: "ApplicationTasks",
                //     label: "My Application Tasks",
                //     link: "/#",
                //     isChildItem: true,
                //     click: function (e) {
                //         e.preventDefault();
                //         setIsSignUp(!isSignUp);
                //     },
                //     parentId: "AppFunnel",
                //     stateVariables: isSignUp,
                // },
                // {
                //     id: "AssignedApplicationTasks",
                //     label: "Assigned Application Tasks",
                //     link: "/#",
                //     isChildItem: true,
                //     click: function (e) {
                //         e.preventDefault();
                //         setIsPasswordReset(!isPasswordReset);
                //     },
                //     parentId: "AppFunnel",
                //     stateVariables: isPasswordReset,
                // },
                // {
                //     id: "ArchivedApplications",
                //     label: "Archived Applications",
                //     link: "/#",
                //     isChildItem: true,
                //     click: function (e) {
                //         e.preventDefault();
                //         setIsPasswordCreate(!isPasswordCreate);
                //     },
                //     parentId: "AppFunnel",
                //     stateVariables: isPasswordCreate,
                // },
                { id: "Applications", label: "Applications", link: "/preliminary/application", parentId: "AppFunnel" },
                { id: "ApplicationsTask", label: "My Applications Task", link: "/preliminary/applicationtask", parentId: "AppFunnel" },
                { id: "Assignedapplicationtask", label: "Assigned Applications Task", link: "/preliminary/assignedapplicationtask", parentId: "AppFunnel" },
                { id: "ArchivedApplication", label: "Archived Applications", link: "/preliminary/archivedapplication", parentId: "AppFunnel" },
            ],
        },
        {
            id: "portfolio",
            label: "Portfolio",
            icon: "ri-slideshow-line",
            link: "/",
            stateVariables: isLanding,
            click: function (e) {
                e.preventDefault();
                setIsLanding(!isLanding);
                setIscurrentState('Landing');
                updateIconSidebar(e);
            },
            subItems: [
                { id: "PortfolioReporting", label: "Portfolio Reporting", link: "/portfolioreporting", parentId: "portfolio" },
                { id: "PortfolioCall", label: "Portfolio Call", link: "/portfoliocall", parentId: "portfolio" },
                { id: "PortfolioDetails", label: "Portfolio Details", link: "/portfoliodetails ", parentId: "portfolio" },
            ],
        },
        {
            id: "calendar",
            label: "Calendar",
            icon: "ri-calendar-line",
            link: "/calendar",
        },
        {
            id: "entrepreneur",
            label: "Entrepreneur",
            icon: "ri-briefcase-line",
            link: "/entrepreneur",
        },
        {
            id: "investor",
            label: "Investor",
            icon: "ri-hand-coin-line",
            link: "/investor",
        },
        {
            id: "smeAdvisor",
            label: "SME Advisor",
            icon: "ri-user-voice-line",
            link: "/sme-Advisor",
        },
        {
            id: "MoreMenus",
            label: "More Menus",
            icon: "ri-menu-line",
            link: "/admin/menu",
        },
        {
            id: "Reports",
            label: "Reports",
            icon: "ri-file-chart-line",
            link: "/reports",
        },
        {
            id: "Role Manager",
            label: "Role Manager",
            icon: "ri-file-chart-line",
            link: "/role",
        },
        {
            id: "import",
            label: "Import",
            icon: "ri-rocket-line",
            link: "/import",
        },
        // {
        //     id: "import",
        //     label: "Import",
        //     icon: "ri-rocket-line",
        //     link: "/#",
        //     subItems: [
        //         { id: "onePage", label: "One Page", link: "/ ", parentId: "import" },
        //         { id: "nftLanding", label: "NFT Landing", link: "/ ", parentId: "import" },
        //         { id: "jobLanding", label: "Job", link: "/ ", parentId: "import",},
        //     ],
        // },

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;