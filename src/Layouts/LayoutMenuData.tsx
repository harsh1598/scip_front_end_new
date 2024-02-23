import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WebService from "../utility/WebService";

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
  const [showLoader, setShowLoader] = useState(false)
  const [menuItems, setMenuItems] = useState([]);

  const [isLanding, setIsLanding] = useState(false);
  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e: any) {
    if (e && e.target && e.target.getAttribute("sub_items")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems: any = ul?.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("sub_items");
        if (document.getElementById(id))
          document.getElementById(id)?.classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Apps") {
      setIsApps(false);
    }
    if (iscurrentState !== "Auth") {
      setIsAuth(false);
    }
    if (iscurrentState !== "Pages") {
      setIsPages(false);
    }
    if (iscurrentState !== "BaseUi") {
      setIsBaseUi(false);
    }
    if (iscurrentState !== "AdvanceUi") {
      setIsAdvanceUi(false);
    }
    if (iscurrentState !== "Forms") {
      setIsForms(false);
    }
    if (iscurrentState !== "Tables") {
      setIsTables(false);
    }
    if (iscurrentState !== "Charts") {
      setIsCharts(false);
    }
    if (iscurrentState !== "Icons") {
      setIsIcons(false);
    }
    if (iscurrentState !== "Maps") {
      setIsMaps(false);
    }
    if (iscurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
    if (iscurrentState === "Widgets") {
      history("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
    if (iscurrentState !== "Landing") {
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
    isMultiLevel,
  ]);

  const getlist = (page?: any) => {
    setShowLoader(true)
    let obj: any = {};
    obj.is_super_admin = localStorage.getItem('IsSuperAdmin')
    WebService.getAPI({
      action: `/access-menu`,
      body: obj,
    })
      .then((res: any) => {
        if (res && res.result && res.result.length > 0) {
          setMenuItems(res.result);
        }
        setShowLoader(false)
      })
      .catch((error: any) => {
        localStorage.clear();
        history("/login");
        setShowLoader(false)
      });
  };

  useEffect(() => {
    getlist();
  }, []);

  const menuItemss: any = [
    {
      id: "dashboard",
      label: "Dashboards",
      icon: "ri-dashboard-2-line",
      link: "/dashboard",
      stateVariables: isDashboard,
      click: function (e: any) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
    {
      id: "InvestmentTasks",
      label: "Investment Tasks",
      icon: "ri-apps-2-line",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setIsApps(!isApps);
        setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isApps,
      sub_items: [
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
      click: function (e: any) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
    {
      id: "deals",
      label: "Deals",
      icon: "ri-chat-check-line",
      link: "/deals",
      stateVariables: isDashboard,
      click: function (e: any) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
    {
      id: "AppFunnel",
      label: "App Funnel",
      icon: "ri-sound-module-line",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setIsAuth(!isAuth);
        setIscurrentState("Auth");
        updateIconSidebar(e);
      },
      stateVariables: true,
      sub_items: [
        {
          id: "Applications",
          label: "Applications",
          link: "/preliminary/application",
          parentId: "AppFunnel",
        },
        {
          id: "ApplicationsTask",
          label: "My Applications Task",
          link: "/preliminary/applicationtask",
          parentId: "AppFunnel",
        },
        {
          id: "Assignedapplicationtask",
          label: "Assigned Applications Task",
          link: "/preliminary/assignedapplicationtask",
          parentId: "AppFunnel",
        },
        {
          id: "ArchivedApplication",
          label: "Archived Applications",
          link: "/preliminary/archivedapplication",
          parentId: "AppFunnel",
        },
      ],
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: "ri-slideshow-line",
      link: "/",
      stateVariables: isLanding,
      click: function (e: any) {
        e.preventDefault();
        setIsLanding(!isLanding);
        setIscurrentState("Landing");
        updateIconSidebar(e);
      },
      sub_items: [
        {
          id: "PortfolioReporting",
          label: "Portfolio Reporting",
          link: "/portfolioreporting",
          parentId: "portfolio",
        },
        {
          id: "PortfolioCall",
          label: "Portfolio Call",
          link: "/portfoliocall",
          parentId: "portfolio",
        },
        {
          id: "PortfolioDetails",
          label: "Portfolio Details",
          link: "/portfoliodetails ",
          parentId: "portfolio",
        },
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
    //     sub_items: [
    //         { id: "onePage", label: "One Page", link: "/ ", parentId: "import" },
    //         { id: "nftLanding", label: "NFT Landing", link: "/ ", parentId: "import" },
    //         { id: "jobLanding", label: "Job", link: "/ ", parentId: "import",},
    //     ],
    // },
  ];
  return <React.Fragment>
    {menuItems}
  </React.Fragment>;
};
export default Navdata;
