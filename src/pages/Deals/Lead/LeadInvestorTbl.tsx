import React, { memo, useEffect, useState } from 'react';
import classnames from "classnames";
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from "reactstrap";
import WebService from '../../../utility/WebService';
import HelperService from '../../../utility/HelperService';



const LeadInvestorTbl = () => {

    const [activityTab, setActivityTab] = useState("1");
    const [leadInvestorTab, setLeadInvestorTab] = useState<any>()
    const [leadInvestorData, setLeadInvestorData] = useState<any>([])

    const toggleActivityTab = (tab: any) => {
        console.log("tab", tab);

        if (activityTab !== tab) {
            setActivityTab(tab);
        }
    }

    useEffect(() => {
        getTabList();
        getList("1")
    }, [])

    const getTabList = () => {
        WebService.getAPI({
            action: `/deal-lable-tabs`
        })
            .then(async (res: any) => {
                setLeadInvestorTab(res);
            })
            .catch((e) => {
            });
    };

    const getList = (campaignId?: any, companyId?: any, id?: any) => {
        setLeadInvestorData([])
        var obj: any = {}
        obj.campaignId = campaignId
        obj.companyId = companyId
        obj.deal_label_id = id
        WebService.getAPI({
            action: `/deal-lable-list`,
            body: obj
        })
            .then((res: any) => {
                setLeadInvestorData(res.result);
            })
            .catch((e) => {
            });
    };

    console.log("activityTab", activityTab);


    return (
        <>
            <Col md={12}>
                <Card className="mb-1">
                    <CardHeader className="align-items-center card-header">
                        <h4 className="card-title card-title mb-0 me-2">
                            Lead
                        </h4>
                    </CardHeader>
                    <CardHeader className="align-items-center mobile-tabs">
                        <div className="flex-shrink-0 ml-auto">
                            <Nav
                                className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                role="tablist"
                            >
                                {leadInvestorTab && leadInvestorTab.result &&
                                    leadInvestorTab.result.length > 0 &&
                                    leadInvestorTab.result.map(
                                        (res: any, i: any) => {
                                            return (
                                                <>
                                                    <NavItem>
                                                        <NavLink
                                                            to="#investor-tab"
                                                            className={classnames({
                                                                active: activityTab == i + 1,
                                                            })}
                                                            onClick={() => {
                                                                toggleActivityTab(i + 1);
                                                                getList(leadInvestorTab.campaignId, leadInvestorTab.companyId, res.id)
                                                            }}
                                                        >
                                                            {res.lable_title}
                                                        </NavLink>
                                                    </NavItem>
                                                </>
                                            );
                                        }
                                    )}
                            </Nav>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <TabContent activeTab={activityTab} className="text-muted" >
                            <TabPane tabId={activityTab}>
                                <div className="profile-timeline">
                                    <div className="accordion accordion-flush" id="">
                                        <div className="table-responsive table-card">
                                            <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col">Investor Role</th>
                                                        <th scope="col">Investor Name</th>
                                                        <th scope="col"> Date </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {leadInvestorData &&
                                                        leadInvestorData.length > 0 &&
                                                        leadInvestorData.map(
                                                            (item: any) => {
                                                                return (
                                                                    <>
                                                                        <tr>
                                                                            <td>{item.lable_title}</td>
                                                                            <td>{item.name}</td>
                                                                            <td>{item.added_date ? HelperService.getOrderDateFormat(item.added_date) : ""}</td>
                                                                        </tr>
                                                                    </>
                                                                );
                                                            }
                                                        )}
                                                </tbody>
                                            </table>
                                            {leadInvestorData && leadInvestorData.length == 0 &&

                                                <div className="profile-timeline mt-2" style={{ paddingLeft: "4px", paddingRight: "4px" }}>
                                                    <div className="accordion accordion-flush" id="">
                                                        <Alert color="info" className="text-center">
                                                            No Document Found.
                                                        </Alert>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            {/* <TabPane tabId="2">
                                <div className="profile-timeline">
                                    <div className="accordion accordion-flush" id="">
                                        <Alert color="info" className="text-center">
                                            No Document Found.
                                        </Alert>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="3">
                                <div className="profile-timeline">
                                    <div className="accordion accordion-flush" id="">
                                        <Alert color="info" className="text-center">
                                            No Document Found.
                                        </Alert>
                                    </div>
                                </div>
                            </TabPane> */}
                        </TabContent>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default memo(LeadInvestorTbl);
