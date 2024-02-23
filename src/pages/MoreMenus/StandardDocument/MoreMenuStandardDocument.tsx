import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Container, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import classnames from "classnames";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import EntrepreneurTbl from "./EntrepreneurTbl";
import InvestorTbl from "./InvestorTbl";
import SMEAdvisorTbl from "./SMEAdvisorTbl";
import WebService from "../../../utility/WebService";
import AddEditStandardDocument from "./AddEditStandardDocument";

const MoreMenuStandardDocument = () => {

    document.title = `${ProjectName} | Standard Documents `;
    // Custom Tabs Bordered
    const [customActiveTab, setcustomActiveTab] = useState<any>("1");
    const [id, setId] = useState<any>();
    const [modelName, setModelName] = useState<any>("");
    const [userType, setUserType] = useState<any>("");
    const [moduleAcessData, setModuleAcessData] = useState<any>([])

    useEffect(() => {
        getModuleAcesslist()

        if (userType == "entrepreneur") {
            setcustomActiveTab("1");
        } else if (userType == "investor") {
            setcustomActiveTab("2");
        } else if (userType == "thirdparty") {
            setcustomActiveTab("3");
        }

    }, [userType]);

    const toggleCustom = (tab: any) => {
        if (customActiveTab !== tab) {
            setcustomActiveTab(tab);
        }
    };


    const toggleModel = (name: any, id?: any) => {
        if (id) {
            setId(id)
        }
        setModelName(name);
    };

    const getModuleAcesslist = () => {
        let obj: any = {};
        obj.code = "standard_documents";
        WebService.getAPI({
            action: `/module-access`,
            body: obj,
        })
            .then((res: any) => {
                setModuleAcessData(res.result)
            })
            .catch((error: any) => { });
    };

    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="Standard Documents" pageTitle="Standard Documents" location={"/admin/menu"} />
                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        <Row className="g-0 align-items-center mb-0">
                                            {moduleAcessData.is_add == 1 &&
                                                <div className="col-sm-auto ms-auto">
                                                    <div className="d-flex hstack gap-2 flex-wrap">
                                                        <button type="button" className="btn btn-brand-theme" onClick={e => toggleModel('AddEditDocument')}>
                                                            <i className="ri-add-line align-bottom me-1"></i> Add
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                        </Row>
                                        <div className='card-header'>
                                            <Nav tabs className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
                                                <NavItem>
                                                    <NavLink
                                                        style={{ cursor: "pointer" }}
                                                        className={classnames({
                                                            active: customActiveTab === "1",
                                                        })}
                                                        onClick={() => {
                                                            toggleCustom("1");
                                                        }}
                                                    >
                                                        Entrepreneur
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        style={{ cursor: "pointer" }}
                                                        className={classnames({
                                                            active: customActiveTab === "2",
                                                        })}
                                                        onClick={() => {
                                                            toggleCustom("2");
                                                        }}
                                                    >
                                                        Investor
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        style={{ cursor: "pointer" }}
                                                        className={classnames({
                                                            active: customActiveTab === "3",
                                                        })}
                                                        onClick={() => {
                                                            toggleCustom("3");
                                                        }}
                                                    >
                                                        SME Advisor
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                        <div className="clearfix"></div>
                                        <TabContent activeTab={customActiveTab} className="text-muted mt-1">
                                            <TabPane tabId="1" id="home1">
                                                <EntrepreneurTbl customActiveTab={customActiveTab} toggleModel={toggleModel} />
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <InvestorTbl customActiveTab={customActiveTab} toggleModel={toggleModel} />
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <SMEAdvisorTbl customActiveTab={customActiveTab} toggleModel={toggleModel} />
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <AddEditStandardDocument
                    setUserType={setUserType}
                    id={id}
                    setId={setId}
                    show={modelName === 'AddEditDocument' ? true : false}
                    onCloseClick={() => {
                        setModelName("");
                        setId("");
                    }}
                />
            </React.Fragment>

        </>

    );
};

export default MoreMenuStandardDocument;
