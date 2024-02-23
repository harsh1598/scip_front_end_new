import React, { memo, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane, } from "reactstrap";
import WebService from "../../../utility/WebService";
import { Link } from "react-router-dom";
import classnames from "classnames";

interface propData {
    childData?: any;
}

const CompanyViewTab = (props: propData) => {
    const [activityTab, setActivityTab] = useState("1");
    const [istabView, setIsTabViews] = useState(false);
    const [tabView, setTabView] = useState<any>()

    useEffect(() => {
        getList('TEAM');
    }, [])
    const getList = (type: any) => {
        var obj: any = {}
        obj.type = type
        WebService.getAPI({
            action: `/deal-page-tab-view`,
            body: obj
        })
            .then(async (res: any) => {
                setTabView(res.result);
                setIsTabViews(true)
            })
            .catch((e) => {
            });
    };
    const toggleActivityTab = (tab: any) => {
        if (activityTab !== tab) {
            setActivityTab(tab);
        }
    };
    return (
        <>
            <Card className="mb-2">
                <CardBody style={{ height: !istabView ? '200px' : '300px' }} className={!istabView ? 'card-loader ' : ''}>
                    {istabView &&
                        <>
                            <CardHeader className="pt-2 mobile-tabs">
                                <div className="ml-auto">
                                    <div className="flex-shrink-0 ml-auto">
                                        <Nav
                                            className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                            role="tablist"
                                        >
                                            <NavItem>
                                                <NavLink
                                                    to="#team-tab1"
                                                    className={classnames({
                                                        active: activityTab === "1",
                                                    })}
                                                    onClick={() => {
                                                        toggleActivityTab("1");
                                                        getList('TEAM')
                                                    }}
                                                >
                                                    Team <i className="ri-add-circle-fill align-bottom"></i>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    to="#director-tab1"
                                                    className={classnames({
                                                        active: activityTab === "2",
                                                    })}
                                                    onClick={() => {
                                                        toggleActivityTab("2");
                                                        getList('BOD')
                                                    }}
                                                >
                                                    Board of Director <i className="ri-add-circle-fill align-bottom"></i>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="nav-item">
                                                <NavLink
                                                    to="#advisor-tab1"
                                                    className={classnames({
                                                        active: activityTab === "3",
                                                    })}
                                                    onClick={() => {
                                                        toggleActivityTab("3");
                                                        getList('ADVISOR')
                                                    }}
                                                >
                                                    Advisor <i className="ri-add-circle-fill align-bottom"></i>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="nav-item">
                                                <NavLink
                                                    to="#investor-tab1"
                                                    className={classnames({
                                                        active: activityTab === "4",
                                                    })}
                                                    onClick={() => {
                                                        toggleActivityTab("4");
                                                        getList('OTHER_INVESTOR')
                                                    }}
                                                >
                                                    Other Investor <i className="ri-add-circle-fill align-bottom"></i>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                </div>
                            </CardHeader>
                            <Container fluid className="mt-3">
                                <TabContent
                                    activeTab={activityTab}
                                    className="text-muted"
                                >
                                    <TabPane tabId="1">
                                        <div className="profile-timeline">
                                            <div
                                                className="accordion accordion-flush"
                                                id="teamExample"
                                            >
                                                <ul className="list-group list-group-flush border-dashed">
                                                    {tabView &&
                                                        tabView.length > 0 &&
                                                        tabView.map(
                                                            (res: any, i: any) => {
                                                                return (
                                                                    <>
                                                                        <li className="list-group-item ps-0">

                                                                            <Row className="align-items-center g-3">
                                                                                <div className="col">
                                                                                    <Link to="#" className="mt-0 mb-1 fs-14 fw-normal">{res.member_name}</Link>
                                                                                    <p className="text-muted fs-13 mb-0">{res.member_role}</p>
                                                                                </div>
                                                                                {/* <div className="col">
                                                                                    <h5 className="text-muted mt-0 mb-1 fs-13">MBBS - Kota Medical College</h5>
                                                                                </div> */}
                                                                                {(res.linkedin_url && res.linkedin_url.includes('linkedin')) &&
                                                                                    <div className="col-sm-auto">
                                                                                        <Link to={res.linkedin_url} target="_blank"> <i className="ri-linkedin-box-fill linkedin-font fs-20"></i></Link>
                                                                                    </div>
                                                                                }
                                                                            </Row>

                                                                        </li >
                                                                    </>
                                                                );
                                                            }
                                                        )}
                                                </ul>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <div className="profile-timeline">
                                            <div
                                                className="accordion accordion-flush"
                                                id="directorExample"
                                            >
                                                <ul className="list-group list-group-flush border-dashed">
                                                    {tabView &&
                                                        tabView.length > 0 &&
                                                        tabView.map(
                                                            (res: any, i: any) => {
                                                                return (
                                                                    <>
                                                                        <li className="list-group-item ps-0">

                                                                            <Row className="align-items-center g-3">
                                                                                <div className="col">
                                                                                    <Link to="#" className="mt-0 mb-1 fs-14 fw-normal">{res.board_director_name}</Link>
                                                                                    <p className="text-muted fs-13 mb-0">{res.board_director_role}</p>
                                                                                </div>
                                                                                {/* <div className="col">
                                                                                    <h5 className="text-muted mt-0 mb-1 fs-13">MBBS - Kota Medical College</h5>
                                                                                </div> */}
                                                                                {(res.linkedin_url && res.linkedin_url.includes('linkedin')) &&
                                                                                    <div className="col-sm-auto">
                                                                                        <Link to={res.linkedin_url} target="_blank"> <i className="ri-linkedin-box-fill linkedin-font fs-20"></i></Link>
                                                                                    </div>
                                                                                }
                                                                            </Row>

                                                                        </li>
                                                                    </>
                                                                );
                                                            }
                                                        )}
                                                </ul>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <div className="profile-timeline">
                                            <div
                                                className="accordion accordion-flush"
                                                id="advisorExample"
                                            >
                                                <ul className="list-group list-group-flush border-dashed">
                                                    {tabView &&
                                                        tabView.length > 0 &&
                                                        tabView.map(
                                                            (res: any, i: any) => {
                                                                return (
                                                                    <>
                                                                        <li className="list-group-item ps-0">

                                                                            <Row className="align-items-center g-3">
                                                                                <div className="col">
                                                                                    <Link to="#" className="mt-0 mb-1 fs-14 fw-normal">{res.advisor_name}</Link>
                                                                                    <p className="text-muted fs-13 mb-0">{res.area_of_expertise}</p>
                                                                                </div>
                                                                                {/* <div className="col">
                                                                                    <h5 className="text-muted mt-0 mb-1 fs-13">MBBS - Kota Medical College</h5>
                                                                                </div> */}
                                                                                {(res.linkedin_url && res.linkedin_url.includes('linkedin')) &&
                                                                                    <div className="col-sm-auto">
                                                                                        <Link to={res.linkedin_url} target="_blank"> <i className="ri-linkedin-box-fill linkedin-font fs-20"></i></Link>
                                                                                    </div>
                                                                                }
                                                                            </Row>

                                                                        </li>
                                                                    </>
                                                                );
                                                            }
                                                        )}
                                                </ul>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <div className="profile-timeline">
                                            <div
                                                className="accordion accordion-flush"
                                                id="investorExample"
                                            >
                                                <ul className="list-group list-group-flush border-dashed">
                                                    {tabView &&
                                                        tabView.length > 0 &&
                                                        tabView.map(
                                                            (res: any, i: any) => {
                                                                return (
                                                                    <>
                                                                        <li className="list-group-item ps-0">

                                                                            <Row className="align-items-center g-3">
                                                                                <div className="col">
                                                                                    <Link to="#" className="mt-0 mb-1 fs-14 fw-normal">{res.investor_name}</Link>
                                                                                    <p className="text-muted fs-13 mb-0">{res.investor_role}</p>
                                                                                </div>
                                                                                {/* <div className="col">
                                                                                    <h5 className="text-muted mt-0 mb-1 fs-13">MBBS - Kota Medical College</h5>
                                                                                </div> */}
                                                                                {(res.investor_url && res.investor_url.includes('linkedin')) &&
                                                                                    <div className="col-sm-auto">
                                                                                        <Link to={res.investor_url} target="_blank"> <i className="ri-linkedin-box-fill linkedin-font fs-20"></i></Link>
                                                                                    </div>
                                                                                }
                                                                            </Row>

                                                                        </li>
                                                                    </>
                                                                );
                                                            }
                                                        )}
                                                </ul>
                                            </div>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </Container>
                        </>
                    }
                </CardBody>
            </Card>
        </>
    );
};

export default memo(CompanyViewTab);
