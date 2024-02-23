import { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";
import ManageMasterTables from "./ManageMasterTables";
import DisplayManageMasterTable from "./ManageMasterLayout";

const FormBuildersTab = () => {
  // Custom Tabs
  const [tabId, setTabId] = useState("manage_master_table");
  const [menuAccess, setModuleAccess] = useState([]);
  const toggleCustom = (tab: any) => {
    if (tabId !== tab) {
      console.log("tabId", tabId);

      localStorage.setItem('tabId', tab)
      console.log("tab", tab);
      
      setTabId(tab);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    var tabName: any = [
      { code: "manage_master_table", label: "Manage Master Table" },
      { code: "manage_layout", label: "Manage Master Layout" },
    ];
    
    var CurrentTabId: any = localStorage.getItem('tabId')
    if (CurrentTabId) {
      // alert(CurrentTabId)
      setTabId(CurrentTabId);
    } else {
      setTabId('manage_master_table');
    }
    setModuleAccess(tabName);
  };

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
              console.log("item", item);

              return (
                <NavItem>
                  <NavLink
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
        <TabPane tabId="manage_master_table" >
          <ManageMasterTables />
        </TabPane>
        <TabPane tabId="manage_layout" >
          <DisplayManageMasterTable />
        </TabPane>
      </TabContent>
    </>
  );
};

export default FormBuildersTab;
