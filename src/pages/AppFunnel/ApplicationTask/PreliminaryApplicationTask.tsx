import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import classnames from "classnames";
import { ProjectName } from "../../../Components/constants/layout";
import 'react-toastify/dist/ReactToastify.css';
import Entrepreneur from './Entrepreneur/Entrepreneur';
import Investor from './Investor/Investor';
import SME from './SME/SME';
import WebService from '../../../utility/WebService';

const PreliminaryApplication = () => {

    document.title = `${ProjectName} | App Funnel - My Application Tasks`;

    const [tabId, setTabId] = useState("1");
    const [moduleAccess, setModuleAccess] = useState([]);
    const toggleCustom = (tab: any) => {

        if (tabId !== tab) {
            setTabId(tab);
        }
    };

    useEffect(() => {
        getlist();
    }, []);


    const getlist = () => {
        let obj: any = {};
        obj.code = "app_funnel";
        WebService.getAPI({
            action: `/module-access`,
            body: obj,
        })
            .then((res: any) => {
                for (var i in res.result.sub_items) {
                    if (res && res.result && res.result.sub_items[i].code == 'my_application_tasks') {
                        let url: any = window.location.href.split("#");
                        console.log("url", url);
                        if (url.length > 1) {
                            setTabId(url[1]);
                        } else {
                            setTabId(res.result?.sub_items[i].sub_items2[0].code);
                        }
                        setModuleAccess(res.result.sub_items[i].sub_items2);
                    }
                }
            })
            .catch((error: any) => { });
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="My Application Tasks" pageTitle="My Application Tasks" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                            <CardBody>
                                    <div className='card-header'>
                                        <Nav tabs className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
                                            {moduleAccess &&
                                                moduleAccess.length > 0 &&
                                                moduleAccess.map((item: any, index: number) => {
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
                                        <TabPane
                                            tabId="entrepreneur_application_tasks"
                                            id="#entrepreneur_app_funnel">
                                            <Entrepreneur />
                                        </TabPane>
                                        <TabPane
                                            tabId="investor_application_tasks" id="#investor_app_funnel">
                                            <Investor />
                                        </TabPane>
                                        <TabPane
                                            tabId="sme_advisor_application_tasks" id="#sme_advisor_app_funnel">
                                            <SME />
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default PreliminaryApplication;
