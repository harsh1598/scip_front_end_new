import { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import EntrepreneurTbl from "./EntrepreneurTbl";
import InvestorTbl from "./InvestorTbl";
import AdvisorTbl from "./AdvisorTbl";
import SyndicateTbl from "./SyndicateTbl";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";
import WebService from "../../utility/WebService";

const Tab = () => {
  // Custom Tabs
  const [tabId, setTabId] = useState("1");
  const [menuAccess, setModuleAccess] = useState([]);
  const toggleCustom = (tab: any) => {
    if (tabId !== tab) {
      setTabId(tab);
    }
  };

  const getlist = () => {
    let obj: any = {};
    obj.code = "app_funnel";
    WebService.getAPI({
      action: `/module-access`,
      body: obj,
    })
      .then((res: any) => {
        if (res && res.result && res.result.sub_items) {
          let url: any = window.location.href.split("#");
          // console.log("url", url);

          if (url.length > 1) {
            setTabId(url[1]);
          } else {
            setTabId(res.result?.sub_items[0].code);
          }
          setModuleAccess(res.result?.sub_items);
        }
      })
      .catch((error: any) => {});
  };

  useEffect(() => {
    getlist();
  }, []);

  return (
    <>
      <div className="card-header">
        <Nav
          tabs
          className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
          role="tablist">
          {menuAccess &&
            menuAccess.length > 0 &&
            menuAccess.map((item: any, index: number) => {
              return (
                <NavItem>
                  <NavLink
                    href={"#" + item.code}
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: tabId == item.code,
                    })}
                    onClick={() => {
                      toggleCustom(item.code);
                    }}>
                    {item.label}
                  </NavLink>
                </NavItem>
              );
            })}
        </Nav>
      </div>
      <div className="clearfix"></div>
      <TabContent activeTab={tabId} className="text-muted mt-4">
        <TabPane tabId="entrepreneur_approvals" id="#entrepreneur_approvals">
          <EntrepreneurTbl />
        </TabPane>
        <TabPane tabId="investor_approvals" id="#investor_approvals">
          <InvestorTbl />
        </TabPane>
        <TabPane tabId="sme_advisor_approvals" id="#sme_advisor_approvals">
          <AdvisorTbl />
        </TabPane>
        <TabPane tabId="syndicate_approvals" id="#syndicate_approvals">
          <SyndicateTbl />
        </TabPane>
      </TabContent>
    </>
  );
};

export default Tab;
