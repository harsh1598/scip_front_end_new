import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
    Card, CardBody, CardHeader, Col, Container, Input, Label, Nav, NavItem, NavLink, Row, TabContent,
    TabPane, Accordion, AccordionItem, Collapse, Button, Offcanvas, OffcanvasBody, OffcanvasHeader, Form, UncontrolledTooltip, Progress, Alert, ListGroup, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from "reactstrap";
import classnames from "classnames";
import SimpleBar from "simplebar-react";
import "./DealCardLoader.scss";

//Images
import { ProjectName } from "../../Components/constants/layout";
import CompanySummary from "./ApplicationPages/CompanySummary";
import CompanyDetails from "./ApplicationPages/CompanyDetails";
import FinancialDetails from "./ApplicationPages/FinancialDetails";
import Downloadpage from "./ApplicationPages/Downloadpage";
import QuesBlock from "./ApplicationPages/QuesBlock";
import Mentor from "./ApplicationPages/Mentor";
import FundingProposal from "./ApplicationPages/FundingProposal";
import ChartsGraphs from "./ApplicationPages/ChartsGraphs";
import WebService from "../../utility/WebService";
import ChartsGraphs2 from "./ApplicationPages/ChartsGraphs2";
import InvestmentInstrumentTbl from "./IntialCommitmentPages/InvestmentInstrumentTbl";
import CommitmentTbl from "./IntialCommitmentPages/CommitmentTbl";
import CreateGroup from "./IntialCommitmentPages/CreateGroup";
import AddInitialCommitment from "./IntialCommitmentPages/AddInitialCommitment";
import EditInitialCommitment from "./IntialCommitmentPages/EditInitialCommitment";
import DeleteCommitment from "./finalCommitmentPages/DeleteCommitment";
import Addfamilymember from "./IntialCommitmentPages/Addfamilymember";
import Tags from "./IntialCommitmentPages/Tags";
import InvestmentInstrument from "./IntialCommitmentPages/InvestmentInstrument";
import CommitmentInvestors from "./IntialCommitmentPages/CommitmentInvestors";
import FinalCommitmentBox from "./IntialCommitmentPages/FinalCommitmentBox";
import AngelNetwork from "./finalCommitmentPages/AngelNetwork";
import Investor from "./finalCommitmentPages/Investor";
import CompanyVideo from "./ApplicationPages/CompanyVideo";
import CallForMoneyTbl from "./CallForMoneyPages/CallForMoneyTbl";
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import { BorderedAccordionExample } from "../BaseUi/UiAccordion&Collapse/UiAccordion&CollapseCode";
import { useForm } from "react-hook-form";
import AddEditStageModal from "./Modals/AddEditStageModal";
import AddTaskModal from "./Modals/AddTaskModal";
import EditTaskModal from "./Modals/EditTaskModal";
import CompleteTaskModal from "./Modals/CompleteTaskModal";
import KanbanSlider from "./Modals/KanbanSlider";
import folder from "../../assets/images/folder.png";
import zip from "../../assets/images/zip.png";
import doc from "../../assets/images/doc.png";
import ppt from "../../assets/images/ppt.png";
import excel from "../../assets/images/xls.png";
import pdf from "../../assets/images/pdf.png";
import mp4 from "../../assets/images/mp4.png";
import gif from "../../assets/images/gif.png";
import png from "../../assets/images/png.png";
import jpg from "../../assets/images/jpg.png";
import link from "../../assets/images/link.png";
import CompanyCards from "./ApplicationPages/CompanyCards";
import CompanyViewTab from "./ApplicationPages/CompanyViewTab";
import CompanySummaryQuestion from "./ApplicationPages/CompanySummaryQuestion";
import DealPageLoader from "../../Components/DealPageLoader/DealPageLoader";
import EvaluationComments from "./EvaluationComments";
import EvaluationReview from "./EvaluationReview";
import EvaluationRubric from "./EvaluationRubric";
import InitialCommitmentDetails from "./InitialCommitment/InitialCommitmentDetails";
import InitialCommitmentTotalAsk from "./InitialCommitment/InitialCommitmentTotalAsk";
import InitialCommitmentScipAsk from "./InitialCommitment/InitialCommitmentScipAsk";
import InitialCommitmentCashInvestedBusiness from "./InitialCommitment/InitialCommitmentCashInvestedBusiness";
import InitialCommitmentPreMoneyValuation from "./InitialCommitment/InitialCommitmentPreMoneyValuation";
import InitialCommitmentPostMoneyValuation from "./InitialCommitment/InitialCommitmentPostMoneyValuation";
import InitialCommitmentFromOther from "./InitialCommitment/InitialCommitmentFromOther";
import InitialCommitmentRoundOfInvestment from "./InitialCommitment/InitialCommitmentRoundOfInvestment";
import InitialCommitmentLeadInvestor from "./InitialCommitment/InitialCommitmentLeadInvestor";
import InitialCommitmentStatus from "./InitialCommitment/InitialCommitmentStatus";
import InitialCommitmentList from "./InitialCommitment/InitialCommitmentList";
import Teaser from "./TeaserPages/Teaser";
import LeadInvestorTbl from "../Deals/Lead/LeadInvestorTbl";
import TaskStatusCard from "./TaskStatus/TaskStatusCard";

const Deals = () => {
    const {
        reset,
    } = useForm();
    document.title = `${ProjectName} | Deals`;
    const [activityTab, setActivityTab] = useState("1");
    const [isTeamMember, setIsTeamMember] = useState(false);
    const [borderCol1, setborderCol1] = useState(true);
    const [borderCol2, setborderCol2] = useState(false);
    const [applicationData, setApplicationData] = useState([])
    const [showLoader, setShowLoader] = useState(false)
    const [modelName, setModelName] = useState("");
    const [isReportVideo, setIsReportVideo] = useState(false);
    // const [borderCol1, setborderCol1] = useState(true);
    // const [borderCol2, setborderCol2] = useState(false);
    const [borderCol3, setborderCol3] = useState(false);
    const [isShowAddEditStageModal, setIsShowAddEditStageModal] = useState(false);
    const [isShowCompleteTaskModal, setIsShowCompleteTaskModal] = useState(false);
    const [isShowAddTaskModal, setIsShowAddTaskModal] = useState(false);
    const [isShowEditTaskModal, setIsShowEditTaskModal] = useState(false);
    const [ArchiveTask, setArchiveTask] = useState({ alert: false, id: "", status: "", ind: "", tabName: "", });

    const history = useNavigate();
    const t_borderCol3 = () => {
        setborderCol3(!borderCol3);
        setborderCol1(false);
        setborderCol2(false);
    };
    // Nesting Accordions
    const [nestingCol1, setnestingCol1] = useState(true);
    const [nestingCol2, setnestingCol2] = useState(false);
    const [nestingCol3, setnestingCol3] = useState(false);

    const t_nestingCol1 = () => {
        setnestingCol1(!nestingCol1);
        setnestingCol2(false);
        setnestingCol3(false);
    };

    const t_nestingCol2 = () => {
        setnestingCol2(!nestingCol2);
        setnestingCol1(false);
        setnestingCol3(false);
    };

    const t_nestingCol3 = () => {
        setnestingCol3(!nestingCol3);
        setnestingCol1(false);
        setnestingCol2(false);
    };

    // level First Nesting
    const [anestingCol1, setanestingCol1] = useState(true);
    const [anestingCol2, setanestingCol2] = useState(false);


    const t_anestingCol1 = () => {
        setanestingCol1(!anestingCol1);
        setanestingCol2(false);
    };

    const t_anestingCol2 = () => {
        setanestingCol2(!anestingCol2);
        setanestingCol1(false);
    };

    // level Second Nesting
    const [bnestingCol1, setbnestingCol1] = useState(false);

    const toggleModel = (name: any) => {
        setModelName(name);
    };
    const toggleActivityTab = (tab: any) => {
        if (activityTab !== tab) {
            setActivityTab(tab);
        }
    };
    const toggleReportVideo = () => {
        setIsReportVideo(!isReportVideo);
    };

    // Accordions Bordered

    const t_borderCol1 = () => {
        setborderCol1(!borderCol1);
        setborderCol2(false);
    };

    const t_borderCol2 = () => {
        setborderCol2(!borderCol2);
        setborderCol1(false);
    };

    const toggleTeamMember = () => {
        setIsTeamMember(!isTeamMember);
    };

    useEffect(() => {
        getcurrentMenu();
    }, [window.location.pathname])

    // console.log(window.location.search.replaceAll('?','').replaceAll('page=','').replaceAll('section=','').split('&'))
    const getcurrentMenu = () => {
        setShowLoader(true)
        var obj: any = {}
        obj.page = 'DEAL'
        WebService.getAPI({
            action: `/deal-page-layout`,
            body: obj,
        })
            .then(async (res: any) => {
                var url = window.location.pathname;
                var page = "";
                var section = "";
                for (var i in res.result) {
                    if (url == res.result[i].url) {
                        page = res.result[i].page;
                        section = res.result[i].section;
                        break;
                    } else {
                        for (var j in res.result[i].sub_section) {
                            if (url == res.result[i].sub_section[j].url) {
                                page = res.result[i].sub_section[j].page;
                                section = res.result[i].sub_section[j].section;
                                break;
                            }
                        }
                    }
                }
                if (url == '/deals') {
                    if (res.result[0] && res.result[0].sub_section.length == 0) {
                        history(res.result[0].url)
                        page = res.result[0].page;
                        section = res.result[0].section;
                    }
                    else if (res.result[0] && res.result[0].sub_section.length > 0) {
                        history(res.result[0].sub_section[0].url);
                        page = res.result[0].sub_section[0].page;
                        section = res.result[0].sub_section[0].section;
                    }
                }
                if (page && section) {
                    getDealPageLayout(page, section);
                }
                // setShowLoader(false)
            })
            .catch((e) => {
                // setShowLoader(false)
            });
    }
    const getDealPageLayout = async (page: any, section: any) => {
        if (page && section) {
            // setShowLoader(true)
            var obj: any = {}
            obj.page = page
            obj.section = section
            WebService.getAPI({
                action: `/deal-page-layout`,
                body: obj,
            })
                .then(async (res: any) => {
                    setApplicationData(res.result)
                    setShowLoader(false)
                })
                .catch((e) => {
                    setShowLoader(false)
                });
        }
    }
    const toggleClick = () => {
    };
    const onCloseModal = () => {
        reset();
        setIsShowAddEditStageModal(false);
        setIsShowAddTaskModal(false);
        setIsShowEditTaskModal(false);
        setIsShowCompleteTaskModal(false);
    };
    const [isAllRubric, setIsAllRubric] = useState(false);
    const toggleAllRubric = () => {
        setIsAllRubric(!isAllRubric);
    };
    return (
        <>
            <DealPageLoader show={showLoader} />
            <CreateGroup
                show={modelName === "CreateGroup" ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <AddInitialCommitment
                show={modelName === "AddInitialCommitment" ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <EditInitialCommitment
                show={modelName === "EditInitialCommitment" ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <DeleteCommitment
                show={modelName === "DeleteCommitment" ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Addfamilymember
                show={modelName === "Addfamilymember" ? true : false}
                onCloseClick={() => setModelName("")}
            />

            <Tags
                show={modelName === "Tags" ? true : false}
                onCloseClick={() => setModelName("")}
            />

            {/* Investment Instrument model */}
            <InvestmentInstrument
                show={modelName === "InvestmentInstrument" ? true : false}
                onCloseClick={() => setModelName("")}
            />

            {/* Commitment by Other Investors/Angel Networks model */}
            <CommitmentInvestors
                show={modelName === "CommitmentInvestors" ? true : false}
                onCloseClick={() => setModelName("")}
            />

            {/* Kanban */}

            <AddEditStageModal
                show={isShowAddEditStageModal}
                onCloseClick={onCloseModal}
            />

            <AddTaskModal show={isShowAddTaskModal} onCloseClick={onCloseModal} />

            <EditTaskModal show={isShowEditTaskModal} onCloseClick={onCloseModal} />

            <CompleteTaskModal
                show={isShowCompleteTaskModal}
                onCloseClick={onCloseModal}
            />

            <KanbanSlider
                modelName={modelName}
                toggleModel={toggleModel}
                show={modelName === "KanbanSlider" ? true : false}
                onCloseClick={() => setModelName("")}
            />

            <React.Fragment>
                {applicationData &&
                    applicationData.length > 0 &&
                    applicationData.map(
                        (item: any, i: any) => {
                            return (
                                <>
                                    <Row>
                                        {item && item.child &&
                                            item.child.length > 0 &&
                                            item.child.map(
                                                (res: any, j: any) => {
                                                    return (
                                                        <>
                                                            <Col lg={item.child && item.child.length > 1 ? item.child && item.child.length > 2 ? item.child && item.child.length > 3 ? 3 : 4 : 6 : 12}>
                                                                {res.section == "COMPANY_SECTION" &&
                                                                    <CompanySummary
                                                                        childData={res}
                                                                    />
                                                                }

                                                                {res.section == "COMPANY_VIDEO" &&
                                                                    <CompanyVideo
                                                                        childData={res}
                                                                    />
                                                                }
                                                                {res.section == "COMPANY_SUMMARY_CARD" &&
                                                                    <CompanyCards
                                                                        childData={res}
                                                                    />
                                                                }
                                                                {res.section == "TAB_VIEW" &&
                                                                    <CompanyViewTab

                                                                    />
                                                                }
                                                                {res.section == "QUESTION" &&
                                                                    <CompanySummaryQuestion
                                                                        childData={res}
                                                                    />
                                                                }
                                                                {res.section == "DOCUMENT" &&
                                                                    <Downloadpage
                                                                        childData={res} />
                                                                }
                                                                {res.section == "FINANCIAL_DETAIL" &&
                                                                    <FinancialDetails
                                                                        childData={res} />
                                                                }
                                                                {res.section == "COMPANY_DETAIL" &&
                                                                    <CompanyDetails
                                                                        childData={res} />
                                                                }
                                                                <Row className="mt-2">
                                                                    <Col >
                                                                        <div className="live-preview ">
                                                                            <Accordion toggle={toggleClick} open={""}
                                                                                className="custom-accordionwithicon custom-accordion-border accordion-border-box accordion-success"
                                                                                id="accordionBordered"
                                                                            >
                                                                                {res.section == "MENTOR" &&
                                                                                    <AccordionItem>
                                                                                        <h2 className="accordion-header" id="accordionborderedExample1">
                                                                                            <button
                                                                                                className={classnames("accordion-button", {
                                                                                                    collapsed: !borderCol1,
                                                                                                })}
                                                                                                type="button" onClick={t_borderCol1} style={{ cursor: "pointer" }}>
                                                                                                {res.name}
                                                                                            </button>
                                                                                        </h2>
                                                                                        <Collapse isOpen={borderCol1} className="accordion-collapse" id="accor_borderedExamplecollapse1">
                                                                                            <Mentor />
                                                                                        </Collapse>
                                                                                    </AccordionItem>
                                                                                }
                                                                            </Accordion>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                                <Row className="mt-2">
                                                                    <Col className="mt-1">
                                                                        <div className="live-preview">
                                                                            <Accordion toggle={toggleClick} open={""}
                                                                                className="custom-accordionwithicon custom-accordion-border accordion-border-box accordion-success"
                                                                                id="accordionBordered"
                                                                            >

                                                                                {res.section == "FUNDING_PROPOSAL" &&
                                                                                    <AccordionItem>
                                                                                        <h2 className="accordion-header" id="accordionborderedExample2">
                                                                                            <button
                                                                                                className={classnames("accordion-button", {
                                                                                                    collapsed: !borderCol2,
                                                                                                })}
                                                                                                type="button" onClick={t_borderCol2} style={{ cursor: "pointer" }}>
                                                                                                {res.name}
                                                                                            </button>
                                                                                        </h2>
                                                                                        <Collapse isOpen={borderCol2} className="accordion-collapse" id="accor_borderedExamplecollapse2">
                                                                                            <FundingProposal />
                                                                                        </Collapse>
                                                                                    </AccordionItem>
                                                                                }
                                                                            </Accordion>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                                <Row >
                                                                    {res.section == "INDUSTRY_IRR" &&
                                                                        <Col >
                                                                            <ChartsGraphs
                                                                                childData={res} />
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row className="mt-2">
                                                                    {res.section == "INDUSTRY_INVESTORE_IRR" &&
                                                                        <Col >
                                                                            <ChartsGraphs2
                                                                                childData={res} />
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    {res.section == "EVALUATION_COMMENTS" &&
                                                                        <EvaluationComments />
                                                                    }
                                                                </Row>
                                                                <Row className="g-2">
                                                                    {res.section == "EVALUATION_REVIEW" &&
                                                                        <EvaluationReview />
                                                                    }
                                                                </Row>
                                                                <Row className="g-2">
                                                                    {res.section == "EVALUATION_RUBRIC" &&
                                                                        <EvaluationRubric />
                                                                    }
                                                                </Row>
                                                                <Row className="g-2">
                                                                    <Col className="social-icons">
                                                                        {res.section == 'TEASER' &&
                                                                            <Teaser />
                                                                        }
                                                                        {/* {res.section == "SCIP_COMMENTS" &&
                                                                    <TeaserScipComments/>
                                                                    } 
                                                                          {res.section == "COMPANY_CUSTOMER_PITCH" &&
                                                                            <TeaserCompanyCustomerPitch/>
                                                                        }
                                                                        {res.section == "TRACTION_AND_PERFORMANCE_METRICS" &&
                                                                        <TeaserTractionPerformanceMetrics/>
                                                                        }
                                                                        {res.section == "BUSINESS_OVERVIEW" &&
                                                                        <TeaserBusinessOverview/>
                                                                        }
                                                                        {res.section == "EVALUATOR_COMMENTS" &&
                                                                        <TeaserEvaluatorComments/>
                                                                        }
                                                                        {res.section == "INDUSTRY_OVERVIEW" &&
                                                                        <TeaserIndustryOverview/>
                                                                        }
                                                                        {res.section == "ELEVATOR_PITCH" &&
                                                                        <TeaserElevatorPitch/>
                                                                        }
                                                                        {res.section == "BUSINESS_MODEL" &&
                                                                        <TeaserBusinessModal/>
                                                                        }
                                                                        {res.section == "SERVICE_PRODUCTS_TECHNOLOGY" &&
                                                                        <TeaserServiceProductTechnology/>
                                                                        }
                                                                        {res.section == "CUSTOMER_PAIN_POINT" &&
                                                                        <TeaserCustomerPainPoint/>
                                                                        }
                                                                        {res.section == "REVENUE_MODEL" &&
                                                                        <TeaserRevenueModal/>
                                                                        }
                                                                        {res.section == "CUSTOMER_EXISTING_PIPELINE" &&
                                                                        <TeaserCustomerExistingPipeline/>
                                                                        }
                                                                        {res.section == "COMPETITION_USP" &&
                                                                        <TeaserCompetitionUsp/>
                                                                        }
                                                                        {res.section == "TEAM" &&
                                                                        <TeaserTeam/>
                                                                        }
                                                                        {res.section == "ADVISORS" &&
                                                                        <TeaserAdvisors/>
                                                                        }  */}
                                                                    </Col>
                                                                </Row>
                                                                <Row style={{ paddingLeft: "1%" }}>
                                                                    {res.section == "INITIAL_COMMITMENT_DETAILS" &&
                                                                        <InitialCommitmentDetails />
                                                                    }
                                                                </Row>
                                                                <Col lg={12}>
                                                                    <Row>
                                                                        {res.section == 'TOTAL_ASK' &&
                                                                            <InitialCommitmentTotalAsk />
                                                                        }
                                                                        {res.section == 'SCIP_ASK' &&
                                                                            <InitialCommitmentScipAsk />
                                                                        }
                                                                        {res.section == 'CASH_INVESTED_BUSINESS' &&
                                                                            <InitialCommitmentCashInvestedBusiness />
                                                                        }
                                                                        {res.section == 'PRE_MONEY_VALUATION' &&
                                                                            <InitialCommitmentPreMoneyValuation />
                                                                        }
                                                                        {res.section == 'POST_MONEY_VALUATION' &&
                                                                            <InitialCommitmentPostMoneyValuation />
                                                                        }
                                                                        {res.section == 'COMMITMENT_FROM_OTHER' &&
                                                                            <InitialCommitmentFromOther />
                                                                        }
                                                                        {res.section == 'ROUND_OF_INVESTMENT' &&
                                                                            <InitialCommitmentRoundOfInvestment />
                                                                        }
                                                                        {res.section == 'LEAD_INVESTOR' &&
                                                                            <InitialCommitmentLeadInvestor />
                                                                        }
                                                                    </Row>
                                                                </Col>
                                                                <Row className="g-2 mt-2">
                                                                    {res.section == 'INITIAL_COMMITMENT_STATUS' &&
                                                                        <Col>
                                                                            <InitialCommitmentStatus />
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row className="g-2 mt-0">
                                                                    {res.section == 'INITIAL_COMMITMENT' &&
                                                                        <Col >
                                                                            <InitialCommitmentList toggleModel={toggleModel} />
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row className="g-2 mt-0">
                                                                    {res.section == 'INVESTMENT_INSTRUMENT' &&
                                                                        <Col >
                                                                            <InvestmentInstrumentTbl toggleModel={toggleModel} />
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row className="g-2 mt-0">
                                                                    {res.section == 'COMMITMENT_OTHER_INVESTOR' &&
                                                                        <Col >
                                                                            <CommitmentTbl toggleModel={toggleModel} />
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    {res.section == 'FINAL_COMMITMENT' &&
                                                                        <Col >
                                                                            <FinalCommitmentBox />
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    {res.section == 'ANGEL_NETWORK_GROSS_PORTFOLIO' &&
                                                                        <AngelNetwork
                                                                            show={modelName === "AngelNetwork" ? true : false}
                                                                            onCloseClick={() => setModelName("")}
                                                                        />
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    {res.section == 'INVESTOR_PORTFOLIO_INVESTOR' &&
                                                                        <Investor
                                                                            show={modelName === "Investor" ? true : false}
                                                                            onCloseClick={() => setModelName("")}
                                                                        />
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    {res.section == 'CALL_FOR_MONEY' &&
                                                                        <Col className="">
                                                                            <Card className="mb-1 mt-0">
                                                                                <CardHeader className="align-items-center card-header">
                                                                                    <h4 className="card-title card-title mb-0 me-2">
                                                                                        Call For Money
                                                                                    </h4>
                                                                                </CardHeader>
                                                                                <CardBody>
                                                                                    <Row>
                                                                                        <Col md={6} className="border-end">
                                                                                            <div className="flex-grow-1">
                                                                                                <h5 className="fs-14">Status</h5>
                                                                                                <div>
                                                                                                    <Progress
                                                                                                        value={95}
                                                                                                        color="primary"
                                                                                                        className="animated-progess custom-progress progress-label"
                                                                                                    >
                                                                                                        <div className="label">95%</div>{" "}
                                                                                                    </Progress>
                                                                                                    <div className="text-end">
                                                                                                        <small>33,71,00,000 INR</small>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Col>
                                                                                        <Col md={6}>
                                                                                            <h5 className="fs-14">Target Amount</h5>
                                                                                            <h3 className="fs-20 mb-0">5,00,00,001 INR</h3>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </CardBody>
                                                                            </Card>
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row className="g-2 mt-1">
                                                                    {res.section == 'CALL_FOR_MONEY_LIST' &&
                                                                        <Col className="mt-0">
                                                                            <CallForMoneyTbl toggleModel={toggleModel} />
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    {res.section == 'INVESTMENT_DOCUMENT' &&
                                                                        <Col md={12}>
                                                                            <Card className="mb-2">
                                                                                <CardBody>
                                                                                    <h4 className="card-title card-title mb-3">
                                                                                        Investment Documents
                                                                                    </h4>

                                                                                    <Row className="g-0 align-items-center">
                                                                                        <Col sm={4}>
                                                                                            <div className="search-box">
                                                                                                <Input
                                                                                                    type="text"
                                                                                                    className="form-control search"
                                                                                                    placeholder="Search"
                                                                                                />
                                                                                                <i className="ri-search-line search-icon"></i>
                                                                                            </div>
                                                                                        </Col>
                                                                                        <div className="col-sm-auto ms-auto">
                                                                                            <div className="hstack gap-2 flex-wrap">
                                                                                                <button type="button" className="btn btn-soft-info">
                                                                                                    <i className="ri-filter-3-line align-bottom me-1"></i>
                                                                                                    Filters
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Row>
                                                                                </CardBody>
                                                                            </Card>
                                                                            <CardBody>
                                                                                <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-1">
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={folder}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "45px", height: "45px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={zip}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "45px", height: "45px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={doc}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "45px", height: "45px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={ppt}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "45px", height: "45px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={excel}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "45px", height: "45px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                </Row>
                                                                            </CardBody>
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    {res.section == 'DD_REPORTS' &&
                                                                        <Col md={12}>
                                                                            <Card className="mb-2">
                                                                                <CardBody>
                                                                                    <h4 className="card-title card-title mb-0">
                                                                                        DD Reports
                                                                                    </h4>
                                                                                </CardBody>
                                                                            </Card>
                                                                            <CardBody className="px-0">
                                                                                <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-1">
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={pdf}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "50px", height: "50px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={mp4}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "50px", height: "50px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={gif}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "50px", height: "50px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={png}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "50px", height: "50px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <a href="javascript:void(0);" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </a>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={jpg}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "50px", height: "50px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                </Row>
                                                                            </CardBody>
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row className="">
                                                                    {res.section == 'FUNDS_DELIGENCE' &&
                                                                        <Col md={12}>
                                                                            <Card className="mb-2">
                                                                                <CardBody>
                                                                                    <h4 className="card-title card-title mb-0">
                                                                                        Funds Diligence
                                                                                    </h4>
                                                                                </CardBody>
                                                                            </Card>
                                                                            <CardBody className="px-0">
                                                                                <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-1">
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={link}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "45px", height: "45px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={png}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "45px", height: "45px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={mp4}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "45px", height: "45px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={folder}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "45px", height: "45px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Card className="card-body mb-2">
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img
                                                                                                        src={zip}
                                                                                                        alt=""
                                                                                                        className=""
                                                                                                        style={{ width: "45px", height: "45px", }}
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="flex-grow-1 ms-2 social-icons">
                                                                                                    <h5 className="card-title mb-1">
                                                                                                        Smriti Misra
                                                                                                        <Link to="#" className="text-muted">
                                                                                                            <i className="ri-download-2-line fs-20 float-end"></i>
                                                                                                        </Link>
                                                                                                    </h5>
                                                                                                    <p className="text-muted mb-0">Digital</p>
                                                                                                    <p className="card-text text-muted">
                                                                                                        18/08/2023
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Card>
                                                                                    </Col>
                                                                                </Row>
                                                                            </CardBody>
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row className="">
                                                                    {res.section == 'ARCHIVE_VIDEO' &&
                                                                        <Col md={12}>
                                                                            <Card className="mb-1">
                                                                                <CardHeader
                                                                                    className="align-items-center"
                                                                                    style={{ borderBottom: "0" }}
                                                                                >
                                                                                    <h4 className="card-title card-title mb-0">
                                                                                        Archive Video
                                                                                    </h4>
                                                                                </CardHeader>
                                                                                <CardHeader className="align-items-center d-flex">
                                                                                    <div className="flex-shrink-0 ml-auto">
                                                                                        <Nav
                                                                                            className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                                                                            role="tablist"
                                                                                        >
                                                                                            <NavItem>
                                                                                                <NavLink
                                                                                                    to="#initial-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "1",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("1");
                                                                                                    }}
                                                                                                >
                                                                                                    Initial Screening
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                            <NavItem>
                                                                                                <NavLink
                                                                                                    to="#ddreview-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "2",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("2");
                                                                                                    }}
                                                                                                >
                                                                                                    DD Review
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                            <NavItem className="nav-item">
                                                                                                <NavLink
                                                                                                    to="#pitching-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "3",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("3");
                                                                                                    }}
                                                                                                >
                                                                                                    Pitching
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                            <NavItem className="nav-item">
                                                                                                <NavLink
                                                                                                    to="#SME-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "4",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("4");
                                                                                                    }}
                                                                                                >
                                                                                                    SME Advisor
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                            <NavItem className="nav-item">
                                                                                                <NavLink
                                                                                                    to="#SME-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "5",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("5");
                                                                                                    }}
                                                                                                >
                                                                                                    Reporting
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                            <NavItem className="nav-item">
                                                                                                <NavLink
                                                                                                    to="#SME-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "6",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("6");
                                                                                                    }}
                                                                                                >
                                                                                                    Screening
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                            <NavItem className="nav-item">
                                                                                                <NavLink
                                                                                                    to="#SME-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "7",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("7");
                                                                                                    }}
                                                                                                >
                                                                                                    Others
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                        </Nav>
                                                                                    </div>
                                                                                </CardHeader>
                                                                                <CardBody>
                                                                                    <TabContent
                                                                                        activeTab={activityTab}
                                                                                        className="text-muted"
                                                                                    >
                                                                                        <TabPane tabId="1">
                                                                                            <div className="profile-timeline">
                                                                                                <div
                                                                                                    className="accordion accordion-flush"
                                                                                                    id="1"
                                                                                                >
                                                                                                    <Row>
                                                                                                        <Col>dad</Col>
                                                                                                    </Row>
                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPane>
                                                                                        <TabPane tabId="2">
                                                                                            <div className="profile-timeline">
                                                                                                <div
                                                                                                    className="accordion accordion-flush"
                                                                                                    id="2"
                                                                                                >
                                                                                                    <Alert color="info" className="text-center">
                                                                                                        No Document Found.
                                                                                                    </Alert>
                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPane>
                                                                                        <TabPane tabId="3">
                                                                                            <div className="profile-timeline">
                                                                                                <div
                                                                                                    className="accordion accordion-flush"
                                                                                                    id="3"
                                                                                                >
                                                                                                    <Alert color="info" className="text-center">
                                                                                                        No Document Found.
                                                                                                    </Alert>
                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPane>
                                                                                        <TabPane tabId="4">
                                                                                            <div className="profile-timeline">
                                                                                                <div
                                                                                                    className="accordion accordion-flush"
                                                                                                    id="4"
                                                                                                >
                                                                                                    <Alert color="info" className="text-center">
                                                                                                        No Document Found.
                                                                                                    </Alert>
                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPane>
                                                                                        <TabPane tabId="5">
                                                                                            <div className="profile-timeline">
                                                                                                <div
                                                                                                    className="accordion accordion-flush"
                                                                                                    id="5"
                                                                                                >
                                                                                                    coming soon...
                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPane>
                                                                                        <TabPane tabId="6">
                                                                                            <div className="profile-timeline">
                                                                                                <div
                                                                                                    className="accordion accordion-flush"
                                                                                                    id="6"
                                                                                                >
                                                                                                    <Alert color="info" className="text-center">
                                                                                                        No Document Found.
                                                                                                    </Alert>
                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPane>
                                                                                        <TabPane tabId="7">
                                                                                            <div className="profile-timeline">
                                                                                                <div
                                                                                                    className="accordion accordion-flush"
                                                                                                    id="7"
                                                                                                >
                                                                                                    <Alert color="info" className="text-center">
                                                                                                        No Document Found.
                                                                                                    </Alert>
                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPane>
                                                                                    </TabContent>
                                                                                </CardBody>
                                                                            </Card>
                                                                        </Col>
                                                                    }
                                                                </Row>

                                                                <Row className="g-2">
                                                                    {res.section == "PROGRESS_REPORT" &&
                                                                        <Col md={12}>
                                                                            <Card className="mb-1">
                                                                                <CardHeader className="align-items-center card-header">
                                                                                    <h4 className="card-title card-title mb-0 me-2">
                                                                                        Progress Report
                                                                                    </h4>
                                                                                </CardHeader>
                                                                                <CardHeader className="align-items-center mobile-tabs">
                                                                                    <div className="flex-shrink-0 ml-auto">
                                                                                        <Nav
                                                                                            className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                                                                            role="tablist"
                                                                                        >
                                                                                            <NavItem>
                                                                                                <NavLink
                                                                                                    to="#budget-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "1",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("1");
                                                                                                    }}
                                                                                                >
                                                                                                    Budget vs Actual
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                            <NavItem>
                                                                                                <NavLink
                                                                                                    to="#financial-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "2",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("2");
                                                                                                    }}
                                                                                                >
                                                                                                    Financial
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                            <NavItem>
                                                                                                <NavLink
                                                                                                    to="#milestones-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "3",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("3");
                                                                                                    }}
                                                                                                >
                                                                                                    Key Milestones
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                            <NavItem>
                                                                                                <NavLink
                                                                                                    to="#performance-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "4",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("4");
                                                                                                    }}
                                                                                                >
                                                                                                    Performance
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                            <NavItem className="nav-item">
                                                                                                <NavLink
                                                                                                    to="#presentation-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "5",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("5");
                                                                                                    }}
                                                                                                >
                                                                                                    Presentation
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                            <NavItem className="nav-item">
                                                                                                <NavLink
                                                                                                    to="#presentation-tab"
                                                                                                    className={classnames({
                                                                                                        active: activityTab === "6",
                                                                                                    })}
                                                                                                    onClick={() => {
                                                                                                        toggleActivityTab("6");
                                                                                                    }}
                                                                                                >
                                                                                                    Provisional Financials
                                                                                                </NavLink>
                                                                                            </NavItem>
                                                                                        </Nav>
                                                                                    </div>
                                                                                </CardHeader>
                                                                                <CardBody>
                                                                                    <TabContent activeTab={activityTab} className="text-muted">
                                                                                        <TabPane tabId="1">
                                                                                            <div className="profile-timeline">
                                                                                                <div className="accordion accordion-flush" id="">
                                                                                                    <div className="table-responsive table-card">
                                                                                                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                                                                                            <thead className="table-light">
                                                                                                                <tr>
                                                                                                                    <th scope="col">Report Title</th>
                                                                                                                    <th scope="col">Updated By</th>
                                                                                                                    <th scope="col">Updated Date</th>
                                                                                                                    <th scope="col" style={{ width: "150px" }}>
                                                                                                                        Action
                                                                                                                    </th>
                                                                                                                </tr>
                                                                                                            </thead>
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td>Test 1 doc</td>
                                                                                                                    <td>Smriti Misra</td>
                                                                                                                    <td>27/08/2021</td>
                                                                                                                    <td className="social-icons">
                                                                                                                        <Link to="#" className="text-muted">
                                                                                                                            <i className="ri-download-2-line fs-20 me-2"></i>
                                                                                                                        </Link>
                                                                                                                        <Link to="#" className="text-muted">
                                                                                                                            <i className="ri-message-3-line fs-20"></i>
                                                                                                                        </Link>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPane>
                                                                                        <TabPane tabId="2">
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
                                                                                        </TabPane>
                                                                                        <TabPane tabId="4">
                                                                                            <div className="profile-timeline">
                                                                                                <div className="accordion accordion-flush" id="">
                                                                                                    <div className="table-responsive table-card">
                                                                                                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                                                                                            <thead className="table-light">
                                                                                                                <tr>
                                                                                                                    <th scope="col">Report Title</th>
                                                                                                                    <th scope="col">Updated By</th>
                                                                                                                    <th scope="col">Updated Date</th>
                                                                                                                    <th scope="col" style={{ width: "150px" }}>
                                                                                                                        Action
                                                                                                                    </th>
                                                                                                                </tr>
                                                                                                            </thead>
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td>Test URL</td>
                                                                                                                    <td>Smriti Misra</td>
                                                                                                                    <td>15/11/2022</td>
                                                                                                                    <td className="social-icons">
                                                                                                                        <Link to="#" className="text-muted">
                                                                                                                            <i className="ri-download-2-line fs-20 me-2"></i>
                                                                                                                        </Link>
                                                                                                                        <Link to="#" className="text-muted">
                                                                                                                            <i className="ri-message-3-line fs-20"></i>
                                                                                                                        </Link>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                                <tr>
                                                                                                                    <td>Q1</td>
                                                                                                                    <td>Smriti Misra</td>
                                                                                                                    <td>02/06/2021</td>
                                                                                                                    <td className="social-icons">
                                                                                                                        <Link to="#" className="text-muted">
                                                                                                                            <i className="ri-download-2-line fs-20 me-2"></i>
                                                                                                                        </Link>
                                                                                                                        <Link to="#" className="text-muted">
                                                                                                                            <i className="ri-message-3-line fs-20"></i>
                                                                                                                        </Link>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                                <tr>
                                                                                                                    <td>Q3</td>
                                                                                                                    <td>Dinesh K</td>
                                                                                                                    <td>22/12/2021</td>
                                                                                                                    <td className="social-icons">
                                                                                                                        <Link to="#" className="text-muted">
                                                                                                                            <i className="ri-download-2-line fs-20 me-2"></i>
                                                                                                                        </Link>
                                                                                                                        <Link to="#" className="text-muted">
                                                                                                                            <i className="ri-message-3-line fs-20"></i>
                                                                                                                        </Link>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPane>
                                                                                        <TabPane tabId="5">
                                                                                            <div className="profile-timeline">
                                                                                                <div className="accordion accordion-flush" id="">
                                                                                                    <div className="table-responsive table-card">
                                                                                                        <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                                                                                            <thead className="table-light">
                                                                                                                <tr>
                                                                                                                    <th scope="col">Report Title</th>
                                                                                                                    <th scope="col">Updated By</th>
                                                                                                                    <th scope="col">Updated Date</th>
                                                                                                                    <th scope="col" style={{ width: "150px" }}>
                                                                                                                        Action
                                                                                                                    </th>
                                                                                                                </tr>
                                                                                                            </thead>
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td>Presentation Report Q1</td>
                                                                                                                    <td>Smriti Misra</td>
                                                                                                                    <td>12/02/2021</td>
                                                                                                                    <td className="social-icons">
                                                                                                                        <Link to="#" className="text-muted" onClick={toggleReportVideo}>
                                                                                                                            <i className="ri-video-line fs-20 me-2"></i>
                                                                                                                        </Link>
                                                                                                                        <Link to="#" className="text-muted">
                                                                                                                            <i className="ri-message-3-line fs-20"></i>
                                                                                                                        </Link>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPane>
                                                                                        <TabPane tabId="6">
                                                                                            <div className="profile-timeline">
                                                                                                <div className="accordion accordion-flush" id="">
                                                                                                    <Alert color="info" className="text-center">
                                                                                                        No Document Found.
                                                                                                    </Alert>
                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPane>
                                                                                    </TabContent>
                                                                                </CardBody>
                                                                            </Card>
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row className="g-2">
                                                                    {res.section == 'OTHER_ROUND_OF_INVESTMENTS' &&
                                                                        <Col md={12}>
                                                                            <Card className="mb-2">
                                                                                <CardBody>
                                                                                    <h4 className="card-title card-title mb-0 me-2">
                                                                                        Other round of investment(s)
                                                                                    </h4>
                                                                                </CardBody>
                                                                            </Card>
                                                                            <div className="live-preview">
                                                                                <ListGroup>
                                                                                    <Row className="g-2">
                                                                                        <Col md={6}>
                                                                                            <Card className="mb-0">
                                                                                                <CardBody>
                                                                                                    <Row className="align-items-center">
                                                                                                        <Col sm={10} xs={10}>
                                                                                                            <div className="d-flex align-items-center">
                                                                                                                <div className="flex-shrink-0">
                                                                                                                    <img
                                                                                                                        src={avatar1}
                                                                                                                        alt=""
                                                                                                                        className="avatar-xs rounded-circle"
                                                                                                                    />
                                                                                                                </div>
                                                                                                                <div className="flex-grow-1 ms-2">
                                                                                                                    Watcon Seed
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </Col>
                                                                                                        <Col
                                                                                                            sm={2}
                                                                                                            xs={2}
                                                                                                            className="icon-demo-content text-end"
                                                                                                        >
                                                                                                            <Link to={""}>
                                                                                                                <i className="las la-arrow-right float-end me-0"></i>
                                                                                                            </Link>
                                                                                                        </Col>
                                                                                                    </Row>
                                                                                                </CardBody>
                                                                                            </Card>
                                                                                        </Col>
                                                                                        <Col md={6}>
                                                                                            <Card className="mb-0">
                                                                                                <CardBody>
                                                                                                    <Row className="align-items-center">
                                                                                                        <Col sm={10} xs={10}>
                                                                                                            <div className="d-flex align-items-center">
                                                                                                                <div className="flex-shrink-0">
                                                                                                                    <img
                                                                                                                        src={avatar2}
                                                                                                                        alt=""
                                                                                                                        className="avatar-xs rounded-circle"
                                                                                                                    />
                                                                                                                </div>
                                                                                                                <div className="flex-grow-1 ms-2">
                                                                                                                    Anna Smith
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </Col>
                                                                                                        <Col
                                                                                                            sm={2}
                                                                                                            xs={2}
                                                                                                            className="icon-demo-content text-end"
                                                                                                        >
                                                                                                            <Link to="">
                                                                                                                <i className="las la-arrow-right float-end me-0"></i>
                                                                                                            </Link>
                                                                                                        </Col>
                                                                                                    </Row>
                                                                                                </CardBody>
                                                                                            </Card>
                                                                                        </Col>
                                                                                        <Col md={6}>
                                                                                            <Card className="mb-0">
                                                                                                <CardBody>
                                                                                                    <Row className="align-items-center">
                                                                                                        <Col sm={10} xs={10}>
                                                                                                            <div className="d-flex align-items-center">
                                                                                                                <div className="flex-shrink-0">
                                                                                                                    <img
                                                                                                                        src={avatar1}
                                                                                                                        alt=""
                                                                                                                        className="avatar-xs rounded-circle"
                                                                                                                    />
                                                                                                                </div>
                                                                                                                <div className="flex-grow-1 ms-2">
                                                                                                                    Watcon Seed
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </Col>
                                                                                                        <Col
                                                                                                            sm={2}
                                                                                                            xs={2}
                                                                                                            className="icon-demo-content text-end"
                                                                                                        >
                                                                                                            <Link to="">
                                                                                                                <i className="las la-arrow-right float-end me-0"></i>
                                                                                                            </Link>
                                                                                                        </Col>
                                                                                                    </Row>
                                                                                                </CardBody>
                                                                                            </Card>
                                                                                        </Col>
                                                                                        <Col md={6}>
                                                                                            <Card className="mb-0">
                                                                                                <CardBody>
                                                                                                    <Row className="align-items-center">
                                                                                                        <Col sm={10} xs={10}>
                                                                                                            <div className="d-flex align-items-center">
                                                                                                                <div className="flex-shrink-0">
                                                                                                                    <img
                                                                                                                        src={avatar2}
                                                                                                                        alt=""
                                                                                                                        className="avatar-xs rounded-circle"
                                                                                                                    />
                                                                                                                </div>
                                                                                                                <div className="flex-grow-1 ms-2">
                                                                                                                    Anna Smith
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </Col>
                                                                                                        <Col
                                                                                                            sm={2}
                                                                                                            xs={2}
                                                                                                            className="icon-demo-content text-end"
                                                                                                        >
                                                                                                            <Link to="">
                                                                                                                <i className="las la-arrow-right float-end me-0"></i>
                                                                                                            </Link>
                                                                                                        </Col>
                                                                                                    </Row>
                                                                                                </CardBody>
                                                                                            </Card>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </ListGroup>
                                                                            </div>
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row className="g-2">
                                                                    {res.section == 'LEAD' &&
                                                                        <LeadInvestorTbl />
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    <TaskStatusCard
                                                                        section={res.section}
                                                                        childData={item.child}
                                                                    />
                                                                </Row>
                                                                {/* <Row>
                                                                    {res.section == 'ASSIGNED_TO' &&
                                                                        <Col className="border-box">
                                                                            <Card className="card-body mb-0">
                                                                                <div className="text-center">
                                                                                    <h4 className="fs-15 fw-seminormal mb-1">
                                                                                        <span
                                                                                            className="counter-value"
                                                                                            data-target="Assigned to"
                                                                                        >
                                                                                            Assigned to{" "}
                                                                                            <a href="javascript:void(0)">Aditya Reddy</a>
                                                                                        </span>
                                                                                    </h4>
                                                                                    <h5 className="text-muted fs-13 mb-0">Team SCIP</h5>
                                                                                </div>
                                                                            </Card>
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    {res.section == 'CURRENT_STAGE' &&
                                                                        <Col className="border-box">
                                                                            <Card className="card-body mb-0">
                                                                                <div className="text-center">
                                                                                    <h4 className="fs-15 fw-seminormal mb-1">
                                                                                        <span
                                                                                            className="counter-value"
                                                                                            data-target="Current Stage"
                                                                                        >
                                                                                            Current Stage
                                                                                        </span>
                                                                                    </h4>
                                                                                    <h5 className="text-muted fs-13 mb-0">
                                                                                        Appoint Investment Director
                                                                                    </h5>
                                                                                </div>
                                                                            </Card>
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    {res.section == 'DATE_OF_ASSIGNMENT' &&
                                                                        <Col className="border-box">
                                                                            <Card className="card-body mb-0">
                                                                                <div className="text-center">
                                                                                    <h4 className="fs-15 fw-seminormal mb-1">
                                                                                        <span
                                                                                            className="counter-value"
                                                                                            data-target="Date of Assignment"
                                                                                        >
                                                                                            Date of Assignment
                                                                                        </span>
                                                                                    </h4>
                                                                                    <h5 className="text-muted fs-12 mb-0">01/08/2023</h5>
                                                                                </div>
                                                                            </Card>
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    {res.section == 'NO_OF_DAYS_SINCE_ASSIGNMENT' &&
                                                                        <Col className="border-box">
                                                                            <Card className="card-body mb-0">
                                                                                <div className="text-center">
                                                                                    <h4 className="fs-15 fw-seminormal mb-1">
                                                                                        <span
                                                                                            className="counter-value"
                                                                                            data-target="No of Days Since Assignment"
                                                                                        >
                                                                                            No of Days Since Assignment
                                                                                        </span>
                                                                                    </h4>
                                                                                    <h5 className="text-muted fs-13 mb-0">
                                                                                        Planned - 30 Days | Actual - 22 Days
                                                                                    </h5>
                                                                                </div>
                                                                            </Card>
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row>
                                                                    {res.section == 'INFORMATION_AWAITED_NEXT_SECTION' &&
                                                                        <Col className="border-box">
                                                                            <Card className="card-body mb-0">
                                                                                <div className="text-center">
                                                                                    <h4 className="fs-15 fw-seminormal mb-1">
                                                                                        <span
                                                                                            className="counter-value"
                                                                                            data-target="Information Awaited / Next Action"
                                                                                        >
                                                                                            Information Awaited / Next Action
                                                                                        </span>
                                                                                    </h4>
                                                                                    <h5 className="text-muted fs-13 mb-0">
                                                                                        <a href="javascript:void(0)">View More</a>
                                                                                    </h5>
                                                                                </div>
                                                                            </Card>
                                                                        </Col>
                                                                    }
                                                                </Row>  */}
                                                                {/* <Row className="g-2 mt-1">
                                                                    {res.section == 'INVESTMENT_TASK_LIST' &&
                                                                        <Col>
                                                                            <TaskStatusTbl toggleModel={toggleModel} /> 
                                                                        </Col>
                                                                    }
                                                                </Row> */}
                                                                <Row className="g-2">
                                                                    {res.section == 'STARTUP_FUNDING_PROPOSAL' &&
                                                                        <Col md={12}>
                                                                            {/* <Card className="mb-2">
                                                                                <CardBody>
                                                                                    <h4 className="card-title card-title mb-0 me-2">
                                                                                        Start Up Funding Proposal
                                                                                    </h4>
                                                                                </CardBody>
                                                                            </Card> */}
                                                                            <CardBody>
                                                                                <Accordion className="custom-accordionwithicon accordion-border-box" id="accordionnesting" toggle={toggleClick} open={""}>
                                                                                    <AccordionItem>
                                                                                        <h2 className="accordion-header" id="accordionnestingExample1">
                                                                                            <button
                                                                                                className={classnames("accordion-button", { collapsed: !nestingCol1 })} type="button" onClick={t_nestingCol1} style={{ cursor: "pointer" }} >
                                                                                                Start Up Funding Proposal
                                                                                            </button>
                                                                                        </h2>
                                                                                        <Collapse isOpen={nestingCol1} className="accordion-collapse" id="accor_nestingExamplecollapse1" >
                                                                                            <div className="accordion-body">
                                                                                                {/* start */}
                                                                                                <div className="live-preview accordion-section">
                                                                                                    <Accordion
                                                                                                        className="custom-accordionwithicon custom-accordion-border accordion-border-box accordion-success"
                                                                                                        id="accordionBordered" toggle={toggleClick} open={""}
                                                                                                    >
                                                                                                        <AccordionItem>
                                                                                                            <h2
                                                                                                                className="accordion-header"
                                                                                                                id="accordionborderedExample1"
                                                                                                            >
                                                                                                                <button
                                                                                                                    className={classnames("accordion-button", {
                                                                                                                        collapsed: !borderCol1,
                                                                                                                    })}
                                                                                                                    type="button"
                                                                                                                    onClick={t_borderCol1}
                                                                                                                    style={{ cursor: "pointer" }}
                                                                                                                >
                                                                                                                    Basic Information
                                                                                                                </button>
                                                                                                            </h2>

                                                                                                            <Collapse
                                                                                                                isOpen={borderCol1}
                                                                                                                className="accordion-collapse"
                                                                                                                id="accor_borderedExamplecollapse1"
                                                                                                            >
                                                                                                                <div className="accordion-body">
                                                                                                                    <Row>
                                                                                                                        <Col lg={12}>
                                                                                                                            <Card className="mb-2">
                                                                                                                                <CardHeader className="align-items-center d-flex">
                                                                                                                                    <div className="flex-grow-1">
                                                                                                                                        <h4 className="card-title mb-0 fs-14">
                                                                                                                                            Title of the Technology Proposed{" "}
                                                                                                                                            <span className="error">*</span>
                                                                                                                                        </h4>
                                                                                                                                    </div>
                                                                                                                                </CardHeader>

                                                                                                                                <CardBody>
                                                                                                                                    <p className="text-muted">
                                                                                                                                        HTML highlight is used to mark or
                                                                                                                                        highlight text that is of property,
                                                                                                                                        relevance, or special interest to an
                                                                                                                                        HTML document. here is the example
                                                                                                                                        shown below.
                                                                                                                                    </p>
                                                                                                                                </CardBody>
                                                                                                                            </Card>
                                                                                                                        </Col>
                                                                                                                        <Col lg={12}>
                                                                                                                            <Card className="mb-2">
                                                                                                                                <CardHeader className="align-items-center d-flex">
                                                                                                                                    <div className="flex-grow-1">
                                                                                                                                        <UncontrolledTooltip placement="right" target="BroadCyber">
                                                                                                                                            (Show The - Link Between Computational And Physical Elements By Means Of Intelligent Mechanisms, That Increase The Adaptability, Autonomy, Efficiency, Functionality, Reliability, Safety, And Usability Of Cyber-physical Systems. Where Is Value-added?)
                                                                                                                                        </UncontrolledTooltip>
                                                                                                                                        <h4 className="card-title mb-0 fs-14">
                                                                                                                                            Broad Cyber Physical System
                                                                                                                                            Area/Sector it Addresses{" "}
                                                                                                                                            <span className="error">*</span>{" "}
                                                                                                                                            <i className="ri-information-fill" id="BroadCyber"></i>
                                                                                                                                        </h4>
                                                                                                                                    </div>
                                                                                                                                </CardHeader>

                                                                                                                                <CardBody>
                                                                                                                                    <p className="text-muted">
                                                                                                                                        HTML highlight is used to mark or
                                                                                                                                        highlight text that is of property,
                                                                                                                                        relevance, or special interest to an
                                                                                                                                        HTML document. here is the example
                                                                                                                                        shown below.
                                                                                                                                    </p>
                                                                                                                                </CardBody>
                                                                                                                            </Card>
                                                                                                                        </Col>
                                                                                                                        <Col lg={12}>
                                                                                                                            <Card className="mb-2">
                                                                                                                                <CardHeader className="align-items-center d-flex">
                                                                                                                                    <div className="flex-grow-1">
                                                                                                                                        <UncontrolledTooltip placement="right" target="RelationtoSensor">
                                                                                                                                            (Where Is The CPS Applied? CPS Include Smart Grid, Autonomous Automobile Systems, Medical Monitoring, Industrial Control Systems, Robotics Systems, And Automatic Pilot Avionics. Value Added In - (e.g., Collision Avoidance), Precision (e.g., Robotic Surger
                                                                                                                                        </UncontrolledTooltip>
                                                                                                                                        <h4 className="card-title mb-0 fs-14">
                                                                                                                                            Relation to Sensor, Networking,
                                                                                                                                            Actuators and Control Systems{" "}
                                                                                                                                            <span className="error">*</span>{" "}
                                                                                                                                            <i className="ri-information-fill " id="RelationtoSensor"></i>
                                                                                                                                        </h4>
                                                                                                                                    </div>
                                                                                                                                </CardHeader>

                                                                                                                                <CardBody>
                                                                                                                                    <p className="text-muted">
                                                                                                                                        HTML highlight is used to mark or
                                                                                                                                        highlight text that is of property,
                                                                                                                                        relevance, or special interest to an
                                                                                                                                        HTML document. here is the example
                                                                                                                                        shown below.
                                                                                                                                    </p>
                                                                                                                                </CardBody>
                                                                                                                            </Card>
                                                                                                                        </Col>
                                                                                                                        <Col lg={12}>
                                                                                                                            <Card className="mb-2">
                                                                                                                                <CardHeader className="align-items-center d-flex">
                                                                                                                                    <div className="flex-grow-1">
                                                                                                                                        <h4 className="card-title mb-0 fs-14">
                                                                                                                                            Name of CTO/In-charge with
                                                                                                                                            Designation{" "}
                                                                                                                                            <span className="error">*</span>{" "}
                                                                                                                                        </h4>
                                                                                                                                    </div>
                                                                                                                                </CardHeader>

                                                                                                                                <CardBody>
                                                                                                                                    <p className="text-muted">
                                                                                                                                        HTML highlight is used to mark or
                                                                                                                                        highlight text that is of property,
                                                                                                                                        relevance, or special interest to an
                                                                                                                                        HTML document. here is the example
                                                                                                                                        shown below.
                                                                                                                                    </p>
                                                                                                                                </CardBody>
                                                                                                                            </Card>
                                                                                                                        </Col>
                                                                                                                        <Col lg={12}>
                                                                                                                            <Card className="mb-2">
                                                                                                                                <CardHeader className="align-items-center d-flex">
                                                                                                                                    <div className="flex-grow-1">
                                                                                                                                        <h4 className="card-title mb-0 fs-14">
                                                                                                                                            Name of the Founding Directors with
                                                                                                                                            Designation{" "}
                                                                                                                                            <span className="error">*</span>{" "}
                                                                                                                                        </h4>
                                                                                                                                    </div>
                                                                                                                                </CardHeader>

                                                                                                                                <CardBody>
                                                                                                                                    <p className="text-muted">
                                                                                                                                        HTML highlight is used to mark or
                                                                                                                                        highlight text that is of property,
                                                                                                                                        relevance, or special interest to an
                                                                                                                                        HTML document. here is the example
                                                                                                                                        shown below.
                                                                                                                                    </p>
                                                                                                                                </CardBody>
                                                                                                                            </Card>
                                                                                                                        </Col>
                                                                                                                        <Col lg={12}>
                                                                                                                            <Card className="mb-2">
                                                                                                                                <CardHeader className="align-items-center d-flex">
                                                                                                                                    <div className="flex-grow-1">
                                                                                                                                        <h4 className="card-title mb-0 fs-14">
                                                                                                                                            Brief biodata of the members of
                                                                                                                                            Startup with specific details of
                                                                                                                                            success in
                                                                                                                                            licensing/commercialization of their
                                                                                                                                            research ideas.{" "}
                                                                                                                                            <span className="error">*</span>{" "}
                                                                                                                                        </h4>
                                                                                                                                    </div>
                                                                                                                                </CardHeader>

                                                                                                                                <CardBody>
                                                                                                                                    <p className="text-muted">
                                                                                                                                        HTML highlight is used to mark or
                                                                                                                                        highlight text that is of property,
                                                                                                                                        relevance, or special interest to an
                                                                                                                                        HTML document. here is the example
                                                                                                                                        shown below.
                                                                                                                                    </p>
                                                                                                                                </CardBody>
                                                                                                                            </Card>
                                                                                                                        </Col>
                                                                                                                    </Row>
                                                                                                                </div>
                                                                                                            </Collapse>
                                                                                                        </AccordionItem>
                                                                                                        <AccordionItem>
                                                                                                            <h2
                                                                                                                className="accordion-header"
                                                                                                                id="accordionborderedExample2"
                                                                                                            >
                                                                                                                <button
                                                                                                                    className={classnames("accordion-button", {
                                                                                                                        collapsed: !borderCol2,
                                                                                                                    })}
                                                                                                                    type="button"
                                                                                                                    onClick={t_borderCol2}
                                                                                                                    style={{ cursor: "pointer" }}
                                                                                                                >
                                                                                                                    Novelty Information
                                                                                                                </button>
                                                                                                            </h2>

                                                                                                            <Collapse
                                                                                                                isOpen={borderCol2}
                                                                                                                className="accordion-collapse"
                                                                                                                id="accor_borderedExamplecollapse2"
                                                                                                            >
                                                                                                                <div className="accordion-body">
                                                                                                                    <Row>
                                                                                                                        <Col lg={12}>
                                                                                                                            <Card className="mb-2">
                                                                                                                                <CardHeader className="align-items-center d-flex">
                                                                                                                                    <div className="flex-grow-1">
                                                                                                                                        <h4 className="card-title mb-0 fs-14">
                                                                                                                                            Is the Novelty check report
                                                                                                                                            enclosed?{" "}
                                                                                                                                            <span className="error">*</span>
                                                                                                                                        </h4>
                                                                                                                                    </div>
                                                                                                                                </CardHeader>

                                                                                                                                <CardBody>
                                                                                                                                    <p className="text-muted mb-0">
                                                                                                                                        <div className="form-check">
                                                                                                                                            <Input
                                                                                                                                                className="form-check-input"
                                                                                                                                                type="radio"
                                                                                                                                                name="formradiocolor2"
                                                                                                                                                id="formradioRight6"
                                                                                                                                                defaultChecked
                                                                                                                                            />
                                                                                                                                            <Label
                                                                                                                                                className="form-check-label"
                                                                                                                                                htmlFor="formradioRight6"
                                                                                                                                            >
                                                                                                                                                Yes
                                                                                                                                            </Label>
                                                                                                                                        </div>
                                                                                                                                    </p>
                                                                                                                                </CardBody>
                                                                                                                            </Card>
                                                                                                                        </Col>
                                                                                                                        <Col lg={12}>
                                                                                                                            <Card className="mb-2">
                                                                                                                                <CardHeader className="align-items-center d-flex">
                                                                                                                                    <div className="flex-grow-1">
                                                                                                                                        <h4 className="card-title mb-0 fs-14">
                                                                                                                                            Is the “HAI Visit ICSR” report
                                                                                                                                            enclosed?{" "}
                                                                                                                                            <span className="error">*</span>
                                                                                                                                        </h4>
                                                                                                                                    </div>
                                                                                                                                </CardHeader>

                                                                                                                                <CardBody>
                                                                                                                                    <p className="text-muted mb-0">
                                                                                                                                        <div className="form-check">
                                                                                                                                            <Input
                                                                                                                                                className="form-check-input"
                                                                                                                                                type="radio"
                                                                                                                                                name="formradiocolor2"
                                                                                                                                                id="formradioRight6"
                                                                                                                                                defaultChecked
                                                                                                                                            />
                                                                                                                                            <Label
                                                                                                                                                className="form-check-label"
                                                                                                                                                htmlFor="formradioRight6"
                                                                                                                                            >
                                                                                                                                                No
                                                                                                                                            </Label>
                                                                                                                                        </div>
                                                                                                                                    </p>
                                                                                                                                </CardBody>
                                                                                                                            </Card>
                                                                                                                        </Col>
                                                                                                                    </Row>
                                                                                                                </div>
                                                                                                            </Collapse>
                                                                                                        </AccordionItem>
                                                                                                        <AccordionItem>
                                                                                                            <h2
                                                                                                                className="accordion-header"
                                                                                                                id="accordionborderedExample3"
                                                                                                            >
                                                                                                                <button
                                                                                                                    className={classnames("accordion-button", {
                                                                                                                        collapsed: !borderCol3,
                                                                                                                    })}
                                                                                                                    type="button"
                                                                                                                    onClick={t_borderCol3}
                                                                                                                    style={{ cursor: "pointer" }}
                                                                                                                >
                                                                                                                    Proposed Technology
                                                                                                                </button>
                                                                                                            </h2>
                                                                                                            <Collapse
                                                                                                                isOpen={borderCol3}
                                                                                                                className="accordion-collapse"
                                                                                                                id="accor_borderedExamplecollapse3"
                                                                                                            >
                                                                                                                <div className="accordion-body">
                                                                                                                    <Row>
                                                                                                                        <Col lg={12}>
                                                                                                                            <Card className="mb-2">
                                                                                                                                <CardHeader className="align-items-center d-flex social-icons">
                                                                                                                                    <div className="flex-grow-1">
                                                                                                                                        <UncontrolledTooltip placement="right" target="FundingRequirements" >
                                                                                                                                            Maximum Funding Of 50 Lakhs Will Be Provided For This Phase. The Funding For The Next Quarter Is Subject To Meeting The Milestones Of The Previous Quarter. Quarter-wise Progress Report As Per Annexure-1, Need To Be Provided 15 Days Before End Of The Quart
                                                                                                                                        </UncontrolledTooltip>
                                                                                                                                        <h4 className="card-title mb-0 fs-14">
                                                                                                                                            Funding Requirements and Target
                                                                                                                                            Contribution{" "}
                                                                                                                                            <span className="error">*</span>
                                                                                                                                            <i className="ri-information-fill me-2" id="FundingRequirements"></i>
                                                                                                                                            <a href="javascript:void(0);">
                                                                                                                                                <i className="ri-download-2-line fs-16" ></i>
                                                                                                                                            </a>
                                                                                                                                        </h4>
                                                                                                                                    </div>
                                                                                                                                </CardHeader>

                                                                                                                                <CardBody>
                                                                                                                                    <p className="text-muted">
                                                                                                                                        Post application 27042023.docx
                                                                                                                                    </p>
                                                                                                                                </CardBody>
                                                                                                                            </Card>
                                                                                                                        </Col>
                                                                                                                    </Row>
                                                                                                                </div>
                                                                                                            </Collapse>
                                                                                                        </AccordionItem>
                                                                                                    </Accordion>
                                                                                                </div>

                                                                                                <div className="d-none code-view">
                                                                                                    <pre
                                                                                                        className="language-markup"
                                                                                                        style={{ height: "275px" }}
                                                                                                    >
                                                                                                        <code>
                                                                                                            <BorderedAccordionExample />
                                                                                                        </code>
                                                                                                    </pre>
                                                                                                </div>
                                                                                                {/* end */}
                                                                                            </div>
                                                                                        </Collapse>
                                                                                    </AccordionItem>
                                                                                </Accordion>


                                                                            </CardBody>
                                                                        </Col>
                                                                    }
                                                                </Row>
                                                                <Row className="mt-1" style={{ paddingLeft: "11px" }}>
                                                                    {res.section == 'KANBAN' &&
                                                                        <>
                                                                            <Card className="mb-2">
                                                                                <CardBody>
                                                                                    <h6 className="mb-2">Kanban</h6>
                                                                                    <CardHeader className="pt-2 mobile-tabs px-0">
                                                                                        <Row>
                                                                                            <Col >
                                                                                                {/* <Card className="mb-2" style={{ paddingBottom: "2px" }}>
                                                                                        <CardHeader className="border-0"> */}
                                                                                                <Row className="g-0 align-items-center">
                                                                                                    <Col sm={3}>
                                                                                                        <div className="search-box">
                                                                                                            <Input
                                                                                                                type="text"
                                                                                                                className="form-control search"
                                                                                                                placeholder="Search"
                                                                                                            />
                                                                                                            <i className="ri-search-line search-icon"></i>
                                                                                                        </div>
                                                                                                    </Col>
                                                                                                    <div className="col-sm-auto ms-auto">
                                                                                                        <div className="d-flex hstack gap-2 flex-wrap">
                                                                                                            <button
                                                                                                                type="button"
                                                                                                                className="btn btn-brand-theme"
                                                                                                                onClick={() => {
                                                                                                                    setIsShowAddEditStageModal(true);
                                                                                                                }}
                                                                                                            >
                                                                                                                <i className="ri-add-line align-bottom"></i> Add Stage
                                                                                                            </button>

                                                                                                            <button
                                                                                                                type="button"
                                                                                                                className="btn btn-brand-theme"
                                                                                                                onClick={() => {
                                                                                                                    setIsShowAddTaskModal(true);
                                                                                                                }}
                                                                                                            >
                                                                                                                <i className="ri-add-line align-bottom"></i> Add Task
                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </Row>
                                                                                                {/* </CardHeader>
                                                                                    </Card> */}
                                                                                            </Col>
                                                                                        </Row>
                                                                                        <div className="ml-auto mt-3">
                                                                                            <div className="flex-shrink-0 ml-auto">
                                                                                                <Nav
                                                                                                    className="justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                                                                                    role="tablist"
                                                                                                >
                                                                                                    <NavItem>
                                                                                                        <NavLink
                                                                                                            to="#team-tab"
                                                                                                            className={classnames({
                                                                                                                active: activityTab === "1",
                                                                                                            })}
                                                                                                            onClick={() => {
                                                                                                                toggleActivityTab("1");
                                                                                                            }}
                                                                                                        >
                                                                                                            Card View
                                                                                                        </NavLink>
                                                                                                    </NavItem>
                                                                                                    <NavItem>
                                                                                                        <NavLink
                                                                                                            to="#director-tab"
                                                                                                            className={classnames({
                                                                                                                active: activityTab === "2",
                                                                                                            })}
                                                                                                            onClick={() => {
                                                                                                                toggleActivityTab("2");
                                                                                                            }}
                                                                                                        >
                                                                                                            List View
                                                                                                        </NavLink>
                                                                                                    </NavItem>
                                                                                                    <NavItem>
                                                                                                        <NavLink
                                                                                                            to="#director-tab"
                                                                                                            className={classnames({
                                                                                                                active: activityTab === "3",
                                                                                                            })}
                                                                                                            onClick={() => {
                                                                                                                toggleActivityTab("3");
                                                                                                            }}
                                                                                                        >
                                                                                                            Gantt
                                                                                                        </NavLink>
                                                                                                    </NavItem>
                                                                                                </Nav>
                                                                                            </div>
                                                                                        </div>
                                                                                    </CardHeader>
                                                                                    <Container fluid className="mt-3">
                                                                                        <TabContent activeTab={activityTab} className="text-muted">
                                                                                            <TabPane tabId="1">
                                                                                                <div className="dashboard-data row row-cols-xxl-5 row-cols-lg-3 row-cols-1">
                                                                                                    <Col className="px-1 col">
                                                                                                        <Card className="mb-2">
                                                                                                            <CardBody>
                                                                                                                <h6 className="fs-14 mb-2 float-start">
                                                                                                                    <img
                                                                                                                        src={avatar1}
                                                                                                                        className="rounded-circle avatar-xxs"
                                                                                                                        alt=""
                                                                                                                    />
                                                                                                                    <span className="ms-2">Adam Davis</span>
                                                                                                                </h6>
                                                                                                                <div className="float-end">
                                                                                                                    <Link to="#" onClick={(e) => toggleModel("KanbanSlider")}>
                                                                                                                        <i className="ri-add-circle-fill fs-22 text-dark text-muted"></i>
                                                                                                                    </Link>
                                                                                                                </div>
                                                                                                                <div className="clearfix"></div>
                                                                                                                <p className="text-muted mb-0">Role</p>
                                                                                                                <span
                                                                                                                    className="badge rounded-pill border text-body fw-normal fs-11 mb-1"
                                                                                                                    style={{ borderColor: "#ccc !important" }}
                                                                                                                >
                                                                                                                    Product
                                                                                                                </span>
                                                                                                                <p className="text-muted mb-0">Location</p>
                                                                                                                <span
                                                                                                                    className="badge rounded-pill border text-body fw-normal fs-11"
                                                                                                                    style={{ borderColor: "#ccc !important" }}
                                                                                                                >
                                                                                                                    New York
                                                                                                                </span>
                                                                                                            </CardBody>
                                                                                                        </Card>
                                                                                                    </Col>
                                                                                                    <Col className="px-1 col">
                                                                                                        <Card className="mb-2">
                                                                                                            <CardBody>
                                                                                                                <h6 className="fs-14 mb-2 float-start">
                                                                                                                    <img
                                                                                                                        src={avatar1}
                                                                                                                        className="rounded-circle avatar-xxs"
                                                                                                                        alt=""
                                                                                                                    />
                                                                                                                    <span className="ms-2">Felix Marlin</span>
                                                                                                                </h6>
                                                                                                                <div className="float-end">
                                                                                                                    <Link to="#">
                                                                                                                        <i className="ri-add-circle-fill fs-22 text-dark text-muted"></i>
                                                                                                                    </Link>
                                                                                                                </div>
                                                                                                                <div className="clearfix"></div>
                                                                                                                <p className="text-muted mb-0">Role</p>
                                                                                                                <span
                                                                                                                    className="badge rounded-pill border text-body fw-normal fs-11 mb-1"
                                                                                                                    style={{ borderColor: "#ccc !important" }}
                                                                                                                >
                                                                                                                    Product
                                                                                                                </span>
                                                                                                                <p className="text-muted mb-0">Location</p>
                                                                                                                <span
                                                                                                                    className="badge rounded-pill border text-body fw-normal fs-11"
                                                                                                                    style={{ borderColor: "#ccc !important" }}
                                                                                                                >
                                                                                                                    New York
                                                                                                                </span>
                                                                                                            </CardBody>
                                                                                                        </Card>
                                                                                                    </Col>
                                                                                                    <Col className="px-1 col">
                                                                                                        <Card className="mb-2">
                                                                                                            <CardBody>
                                                                                                                <h6 className="fs-14 mb-2 float-start">
                                                                                                                    <img
                                                                                                                        src={avatar1}
                                                                                                                        className="rounded-circle avatar-xxs"
                                                                                                                        alt=""
                                                                                                                    />
                                                                                                                    <span className="ms-2">Mary Jones</span>
                                                                                                                </h6>
                                                                                                                <div className="float-end">
                                                                                                                    <Link to="#">
                                                                                                                        <i className="ri-add-circle-fill fs-22 text-dark text-muted"></i>
                                                                                                                    </Link>
                                                                                                                </div>
                                                                                                                <div className="clearfix"></div>
                                                                                                                <p className="text-muted mb-0">Role</p>
                                                                                                                <span
                                                                                                                    className="badge rounded-pill border text-body fw-normal fs-11 mb-1"
                                                                                                                    style={{ borderColor: "#ccc !important" }}
                                                                                                                >
                                                                                                                    Product
                                                                                                                </span>
                                                                                                                <p className="text-muted mb-0">Location</p>
                                                                                                                <span
                                                                                                                    className="badge rounded-pill border text-body fw-normal fs-11"
                                                                                                                    style={{ borderColor: "#ccc !important" }}
                                                                                                                >
                                                                                                                    New York
                                                                                                                </span>
                                                                                                            </CardBody>
                                                                                                        </Card>
                                                                                                    </Col>
                                                                                                    <Col className="px-1 col">
                                                                                                        <Card className="mb-2">
                                                                                                            <CardBody>
                                                                                                                <h6 className="fs-14 mb-2 float-start">
                                                                                                                    <img
                                                                                                                        src={avatar1}
                                                                                                                        className="rounded-circle avatar-xxs"
                                                                                                                        alt=""
                                                                                                                    />
                                                                                                                    <span className="ms-2">Smith John</span>
                                                                                                                </h6>
                                                                                                                <div className="float-end">
                                                                                                                    <Link to="#">
                                                                                                                        <i className="ri-add-circle-fill fs-22 text-dark text-muted"></i>
                                                                                                                    </Link>
                                                                                                                </div>
                                                                                                                <div className="clearfix"></div>
                                                                                                                <p className="text-muted mb-0">Role</p>
                                                                                                                <span
                                                                                                                    className="badge rounded-pill border text-body fw-normal fs-11 mb-1"
                                                                                                                    style={{ borderColor: "#ccc !important" }}
                                                                                                                >
                                                                                                                    Product
                                                                                                                </span>
                                                                                                                <p className="text-muted mb-0">Location</p>
                                                                                                                <span
                                                                                                                    className="badge rounded-pill border text-body fw-normal fs-11"
                                                                                                                    style={{ borderColor: "#ccc !important" }}
                                                                                                                >
                                                                                                                    New York
                                                                                                                </span>
                                                                                                            </CardBody>
                                                                                                        </Card>
                                                                                                    </Col>
                                                                                                    <Col className="px-1 col">
                                                                                                        <Card className="mb-2">
                                                                                                            <CardBody>
                                                                                                                <h6 className="fs-14 mb-2 float-start">
                                                                                                                    <img
                                                                                                                        src={avatar1}
                                                                                                                        className="rounded-circle avatar-xxs"
                                                                                                                        alt=""
                                                                                                                    />
                                                                                                                    <span className="ms-2">Mary Jones</span>
                                                                                                                </h6>
                                                                                                                <div className="float-end">
                                                                                                                    <Link to="#">
                                                                                                                        <i className="ri-add-circle-fill fs-22 text-dark text-muted"></i>
                                                                                                                    </Link>
                                                                                                                </div>
                                                                                                                <div className="clearfix"></div>
                                                                                                                <p className="text-muted mb-0">Role</p>
                                                                                                                <span
                                                                                                                    className="badge rounded-pill border text-body fw-normal fs-11 mb-1"
                                                                                                                    style={{ borderColor: "#ccc !important" }}
                                                                                                                >
                                                                                                                    Product
                                                                                                                </span>
                                                                                                                <p className="text-muted mb-0">Location</p>
                                                                                                                <span
                                                                                                                    className="badge rounded-pill border text-body fw-normal fs-11"
                                                                                                                    style={{ borderColor: "#ccc !important" }}
                                                                                                                >
                                                                                                                    New York
                                                                                                                </span>
                                                                                                            </CardBody>
                                                                                                        </Card>
                                                                                                    </Col>
                                                                                                </div>
                                                                                                <div className="dashboard-data row row-cols-xxl-5 row-cols-lg-3 row-cols-1">
                                                                                                    <Col className="px-1 col">
                                                                                                        <Card className="mb-2">
                                                                                                            <CardBody>
                                                                                                                <h6>Speaker event</h6>
                                                                                                                <p className="text-muted mb-0">Notes</p>
                                                                                                                <p className="mb-3">
                                                                                                                    4 Speakers (1 resident expert, 3 external experts)
                                                                                                                </p>
                                                                                                                <p className="text-muted">
                                                                                                                    <i className="ri-money-dollar-circle-line align-bottom"></i>
                                                                                                                    Budget
                                                                                                                    <br />
                                                                                                                    <span>$ 5600,00.00</span>
                                                                                                                </p>
                                                                                                                <p className="text-muted">
                                                                                                                    <i className="ri-task-line align-bottom"></i> Approved
                                                                                                                    <br />
                                                                                                                    <span>
                                                                                                                        <i className="ri-thumb-up-fill text-success fs-16"></i>
                                                                                                                    </span>
                                                                                                                </p>
                                                                                                                <p className="text-muted mb-0">
                                                                                                                    <i className="ri-checkbox-circle-line align-bottom"></i>
                                                                                                                    Status
                                                                                                                    <br />
                                                                                                                    <span className="badge rounded-pill border border-warning text-warning">
                                                                                                                        Upcoming
                                                                                                                    </span>
                                                                                                                </p>
                                                                                                            </CardBody>
                                                                                                        </Card>
                                                                                                    </Col>
                                                                                                    <Col className="px-1 col">
                                                                                                        <Card className="mb-2">
                                                                                                            <CardBody>
                                                                                                                <h6>Speaker event</h6>
                                                                                                                <p className="text-muted mb-0">Notes</p>
                                                                                                                <p className="mb-3">
                                                                                                                    4 Speakers (1 resident expert, 3 external experts)
                                                                                                                </p>
                                                                                                                <p className="text-muted">
                                                                                                                    <i className="ri-money-dollar-circle-line align-bottom"></i>{" "}
                                                                                                                    Budget
                                                                                                                    <br />
                                                                                                                    <span>$ 5600,00.00</span>
                                                                                                                </p>
                                                                                                                <p className="text-muted">
                                                                                                                    <i className="ri-task-line align-bottom"></i> Approved
                                                                                                                    <br />
                                                                                                                    <span>
                                                                                                                        <i className="ri-thumb-up-fill text-success fs-16"></i>
                                                                                                                    </span>
                                                                                                                </p>
                                                                                                                <p className="text-muted mb-0">
                                                                                                                    <i className="ri-checkbox-circle-line align-bottom"></i>{" "}
                                                                                                                    Status
                                                                                                                    <br />
                                                                                                                    <span className="badge rounded-pill border border-warning text-warning">
                                                                                                                        Upcoming
                                                                                                                    </span>
                                                                                                                </p>
                                                                                                            </CardBody>
                                                                                                        </Card>
                                                                                                    </Col>
                                                                                                    <Col className="px-1 col">
                                                                                                        <Card className="mb-2">
                                                                                                            <CardBody>
                                                                                                                <h6>Speaker event</h6>
                                                                                                                <p className="text-muted mb-0">Notes</p>
                                                                                                                <p className="mb-3">
                                                                                                                    4 Speakers (1 resident expert, 3 external experts)
                                                                                                                </p>
                                                                                                                <p className="text-muted">
                                                                                                                    <i className="ri-money-dollar-circle-line align-bottom"></i>
                                                                                                                    Budget
                                                                                                                    <br />
                                                                                                                    <span>$ 5600,00.00</span>
                                                                                                                </p>
                                                                                                                <p className="text-muted">
                                                                                                                    <i className="ri-task-line align-bottom"></i> Approved
                                                                                                                    <br />
                                                                                                                    <span>
                                                                                                                        <i className="ri-thumb-up-fill text-success fs-16"></i>
                                                                                                                    </span>
                                                                                                                </p>
                                                                                                                <p className="text-muted mb-0">
                                                                                                                    <i className="ri-checkbox-circle-line align-bottom"></i>
                                                                                                                    Status
                                                                                                                    <br />
                                                                                                                    <span className="badge rounded-pill border border-warning text-warning">
                                                                                                                        Upcoming
                                                                                                                    </span>
                                                                                                                </p>
                                                                                                            </CardBody>
                                                                                                        </Card>
                                                                                                    </Col>
                                                                                                    <Col className="px-1 col">
                                                                                                        <Card className="mb-2">
                                                                                                            <CardBody>
                                                                                                                <h6>Speaker event</h6>
                                                                                                                <p className="text-muted mb-0">Notes</p>
                                                                                                                <p className="mb-3">
                                                                                                                    4 Speakers (1 resident expert, 3 external experts)
                                                                                                                </p>
                                                                                                                <p className="text-muted">
                                                                                                                    <i className="ri-money-dollar-circle-line align-bottom"></i>{" "}
                                                                                                                    Budget
                                                                                                                    <br />
                                                                                                                    <span>$ 5600,00.00</span>
                                                                                                                </p>
                                                                                                                <p className="text-muted">
                                                                                                                    <i className="ri-task-line align-bottom"></i> Approved
                                                                                                                    <br />
                                                                                                                    <span>
                                                                                                                        <i className="ri-thumb-up-fill text-success fs-16"></i>
                                                                                                                    </span>
                                                                                                                </p>
                                                                                                                <p className="text-muted mb-0">
                                                                                                                    <i className="ri-checkbox-circle-line align-bottom"></i>{" "}
                                                                                                                    Status
                                                                                                                    <br />
                                                                                                                    <span className="badge rounded-pill border border-warning text-warning">
                                                                                                                        Upcoming
                                                                                                                    </span>
                                                                                                                </p>
                                                                                                            </CardBody>
                                                                                                        </Card>
                                                                                                    </Col>
                                                                                                    <Col className="px-1 col">
                                                                                                        <Card className="mb-2">
                                                                                                            <CardBody>
                                                                                                                <h6>Speaker event</h6>
                                                                                                                <p className="text-muted mb-0">Notes</p>
                                                                                                                <p className="mb-3">
                                                                                                                    4 Speakers (1 resident expert, 3 external experts)
                                                                                                                </p>
                                                                                                                <p className="text-muted">
                                                                                                                    <i className="ri-money-dollar-circle-line align-bottom"></i>
                                                                                                                    Budget
                                                                                                                    <br />
                                                                                                                    <span>$ 5600,00.00</span>
                                                                                                                </p>
                                                                                                                <p className="text-muted">
                                                                                                                    <i className="ri-task-line align-bottom"></i> Approved
                                                                                                                    <br />
                                                                                                                    <span>
                                                                                                                        <i className="ri-thumb-up-fill text-success fs-16"></i>
                                                                                                                    </span>
                                                                                                                </p>
                                                                                                                <p className="text-muted mb-0">
                                                                                                                    <i className="ri-checkbox-circle-line align-bottom"></i>
                                                                                                                    Status
                                                                                                                    <br />
                                                                                                                    <span className="badge rounded-pill border border-warning text-warning">
                                                                                                                        Upcoming
                                                                                                                    </span>
                                                                                                                </p>
                                                                                                            </CardBody>
                                                                                                        </Card>
                                                                                                    </Col>
                                                                                                </div>
                                                                                            </TabPane>
                                                                                            <TabPane tabId="2">
                                                                                                <div className="table-responsive table-card mt-3">
                                                                                                    <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                                                                                        <thead className="table-light">
                                                                                                            <tr>
                                                                                                                <th scope="col">Milestone</th>
                                                                                                                <th scope="col">Title</th>
                                                                                                                <th scope="col">Assigned</th>
                                                                                                                <th scope="col">Created Date</th>
                                                                                                                <th scope="col">Due Date</th>
                                                                                                                <th scope="col">Status</th>
                                                                                                                <th scope="col">Action </th>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody>
                                                                                                            <tr >
                                                                                                                <td>Gotham City Parks brand</td>
                                                                                                                <td>Term Sheet </td>
                                                                                                                <td>
                                                                                                                    <span
                                                                                                                        style={{
                                                                                                                            background: "#57b847",
                                                                                                                            borderRadius: "100px",
                                                                                                                            color: "#FFF",
                                                                                                                            padding: "5px",
                                                                                                                            width: "30px",
                                                                                                                            height: "30px",
                                                                                                                            display: "block",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        SM
                                                                                                                    </span>
                                                                                                                </td>
                                                                                                                <td>15/05/2023 09:19 AM</td>
                                                                                                                <td>16/05/2023</td>
                                                                                                                <td>
                                                                                                                    <span
                                                                                                                        className={
                                                                                                                            item.Status === "Pending"
                                                                                                                                ? "badge badge-soft-warning fs-12"
                                                                                                                                : "badge badge-soft-success fs-12"
                                                                                                                        }
                                                                                                                    >
                                                                                                                        Completed
                                                                                                                    </span>
                                                                                                                </td>

                                                                                                                <td className="social-icons">
                                                                                                                    <ul className="list-inline hstack gap-2 mb-0">
                                                                                                                        <li className="list-inline-item">
                                                                                                                            <UncontrolledDropdown>
                                                                                                                                <DropdownToggle
                                                                                                                                    href="#"
                                                                                                                                    className="btn btn-soft-secondary btn-sm dropdown"
                                                                                                                                    tag="button"
                                                                                                                                >
                                                                                                                                    <i className="ri-more-fill align-middle"></i>
                                                                                                                                </DropdownToggle>
                                                                                                                                <DropdownMenu className="dropdown-menu-end">
                                                                                                                                    <DropdownItem
                                                                                                                                        onClick={(e) =>
                                                                                                                                            setArchiveTask({
                                                                                                                                                alert: true,
                                                                                                                                                id: '1',
                                                                                                                                                status: '0',
                                                                                                                                                tabName: "campaign",
                                                                                                                                                ind: ""
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                    >
                                                                                                                                        <i className="ri-delete-bin-line fs-20 align-middle me-1"></i>
                                                                                                                                        Archive Task
                                                                                                                                    </DropdownItem>

                                                                                                                                    <DropdownItem
                                                                                                                                        onClick={() => {
                                                                                                                                            setIsShowCompleteTaskModal(true);
                                                                                                                                        }}
                                                                                                                                    >
                                                                                                                                        <i className="ri-check-line fs-20 align-middle me-1"></i>
                                                                                                                                        Complete Task
                                                                                                                                    </DropdownItem>

                                                                                                                                    <DropdownItem
                                                                                                                                        onClick={() => {
                                                                                                                                            setIsShowEditTaskModal(true);
                                                                                                                                        }}
                                                                                                                                    >
                                                                                                                                        <i className="ri-edit-box-line fs-20 align-middle me-1"></i>
                                                                                                                                        Edit Task
                                                                                                                                    </DropdownItem>
                                                                                                                                </DropdownMenu>
                                                                                                                            </UncontrolledDropdown>
                                                                                                                        </li>
                                                                                                                    </ul>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </TabPane>
                                                                                            <TabPane tabId="3">
                                                                                                <div className="table-responsive table-card mt-3">
                                                                                                    <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                                                                                        <thead className="table-light">
                                                                                                            <tr>
                                                                                                                <th scope="col">Task</th>
                                                                                                                <th scope="col">Milestone</th>
                                                                                                                <th scope="col">Start Date</th>
                                                                                                                <th scope="col">End Date</th>
                                                                                                                <th scope="col">Critical Path</th>
                                                                                                                <th scope="col">% Progress</th>
                                                                                                                <th scope="col">Matric 1 / Matric 2</th>
                                                                                                                <th scope="col">Action</th>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td>Brand Identity</td>
                                                                                                                <td>Gotham City Parks brand</td>
                                                                                                                <td>31/07/2023 02:53 PM</td>
                                                                                                                <td>31/07/2023 02:53 PM</td>
                                                                                                                <td>Flapper brand identity</td>
                                                                                                                <td>10%</td>
                                                                                                                <td>10</td>
                                                                                                                <td className="social-icons">
                                                                                                                    <ul className="list-inline hstack gap-2 mb-0">
                                                                                                                        <li className="list-inline-item">
                                                                                                                            <UncontrolledDropdown>
                                                                                                                                <DropdownToggle
                                                                                                                                    href="#"
                                                                                                                                    className="btn btn-soft-secondary btn-sm dropdown"
                                                                                                                                    tag="button"
                                                                                                                                >
                                                                                                                                    <i className="ri-more-fill align-middle"></i>
                                                                                                                                </DropdownToggle>
                                                                                                                                <DropdownMenu className="dropdown-menu-end">
                                                                                                                                    <DropdownItem>
                                                                                                                                        <i className="ri-check-line fs-20 align-middle me-1"></i>
                                                                                                                                        Complete Task
                                                                                                                                    </DropdownItem>

                                                                                                                                    <DropdownItem>
                                                                                                                                        <i className="ri-edit-box-line fs-20 align-middle me-1"></i>
                                                                                                                                        Edit Task
                                                                                                                                    </DropdownItem>
                                                                                                                                </DropdownMenu>
                                                                                                                            </UncontrolledDropdown>
                                                                                                                        </li>
                                                                                                                    </ul>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td>Brand Identity</td>
                                                                                                                <td>Gotham City Parks brand</td>
                                                                                                                <td>31/07/2023 02:53 PM</td>
                                                                                                                <td>31/07/2023 02:53 PM</td>
                                                                                                                <td>Flapper brand identity</td>
                                                                                                                <td>10%</td>
                                                                                                                <td>10</td>
                                                                                                                <td className="social-icons">
                                                                                                                    <ul className="list-inline hstack gap-2 mb-0">
                                                                                                                        <li className="list-inline-item">
                                                                                                                            <UncontrolledDropdown>
                                                                                                                                <DropdownToggle
                                                                                                                                    href="#"
                                                                                                                                    className="btn btn-soft-secondary btn-sm dropdown"
                                                                                                                                    tag="button"
                                                                                                                                >
                                                                                                                                    <i className="ri-more-fill align-middle"></i>
                                                                                                                                </DropdownToggle>
                                                                                                                                <DropdownMenu className="dropdown-menu-end">
                                                                                                                                    <DropdownItem>
                                                                                                                                        <i className="ri-check-line fs-20 align-middle me-1"></i>
                                                                                                                                        Complete Task
                                                                                                                                    </DropdownItem>

                                                                                                                                    <DropdownItem>
                                                                                                                                        <i className="ri-edit-box-line fs-20 align-middle me-1"></i>
                                                                                                                                        Edit Task
                                                                                                                                    </DropdownItem>
                                                                                                                                </DropdownMenu>
                                                                                                                            </UncontrolledDropdown>
                                                                                                                        </li>
                                                                                                                    </ul>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </TabPane>
                                                                                        </TabContent>
                                                                                    </Container>
                                                                                </CardBody>
                                                                            </Card>
                                                                        </>
                                                                    }
                                                                </Row>
                                                            </Col>
                                                        </>
                                                    );
                                                }
                                            )}
                                    </Row>
                                </>
                            );
                        }
                    )}

                {/* All Rubric */}
                <Offcanvas
                    isOpen={isAllRubric}
                    direction="end"
                    toggle={toggleAllRubric}
                    id="offcanvasAllRubric"
                    className="border-bottom size-xl"
                >
                    <OffcanvasHeader
                        className="bg-light"
                        toggle={toggleAllRubric}
                        id="offcanvasRightLabel"
                    >
                        All Rubric
                    </OffcanvasHeader>
                    <OffcanvasBody className="px-0 overflow-hidden rubricprogressbar">
                        <SimpleBar style={{ height: "100vh" }}>
                            <div className="px-3">
                                <h4 className="card-title b-3">Evaluation</h4>

                                <Row>
                                    <Col md={3}>
                                        <label>Name</label>
                                    </Col>
                                    <Col md={5}>
                                        <label>Weighted Average</label>
                                    </Col>
                                    <Col md={4}>
                                        <label>Score</label>
                                    </Col>
                                </Row>
                                <hr className="mt-0" />
                                <Row>
                                    <Col md={3}>
                                        <label>Anil Koli</label>
                                    </Col>
                                    <Col md={5}>
                                        <div>
                                            <div className="live-preview">
                                                <Progress
                                                    color="danger"
                                                    value={10}
                                                    className="custom-progress"
                                                >

                                                    NA
                                                </Progress>
                                                <span className="barvalue">10</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            <div className="live-preview">
                                                <Progress
                                                    color="danger"
                                                    value={49}
                                                    className="custom-progress"
                                                >

                                                    49
                                                </Progress>
                                                <span className="barvalue">110</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <label>Bharat Garg</label>
                                    </Col>
                                    <Col md={5}>
                                        <div className="live-preview">
                                            <Progress
                                                color="warning"
                                                value={10}
                                                className="custom-progress"
                                            >

                                                NA
                                            </Progress>
                                            <span className="barvalue">10</span>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="live-preview">
                                            <Progress
                                                color="warning"
                                                value={50}
                                                className="custom-progress"
                                            >50
                                            </Progress>
                                            <span className="barvalue">110</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <label>Shobanaa Anand</label>
                                    </Col>
                                    <Col md={5}>
                                        <div className="live-preview">
                                            <Progress
                                                color="primary"
                                                value={10}
                                                className="custom-progress"
                                            >

                                                NA
                                            </Progress>
                                            <span className="barvalue">10</span>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="live-preview">
                                            <Progress
                                                color="primary"
                                                value={11}
                                                className="custom-progress"
                                            >

                                                11
                                            </Progress>
                                            <span className="barvalue">110</span>
                                        </div>
                                    </Col>
                                </Row>
                                <hr className="my-2" />
                                <h4 className="card-title mt-3 mb-3">Evaluation 1</h4>
                                <Row>
                                    <Col md={3}>
                                        <label>Name</label>
                                    </Col>
                                    <Col md={5}>
                                        <label>Weighted Average</label>
                                    </Col>
                                    <Col md={4}>
                                        <label>Score</label>
                                    </Col>
                                </Row>
                                <hr className="mt-0" />
                                <Row>
                                    <Col md={3}>
                                        <label>Smriti Misra</label>
                                    </Col>
                                    <Col md={5}>
                                        <div>
                                            <div className="live-preview">
                                                <Progress
                                                    color="info"
                                                    value={10}
                                                    className="custom-progress"
                                                >

                                                    NA
                                                </Progress>
                                                <span className="barvalue">10</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            <div className="live-preview">
                                                <Progress
                                                    color="info"
                                                    value={10}
                                                    className="custom-progress"
                                                >

                                                    10
                                                </Progress>
                                                <span className="barvalue">20</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="gery-bg">
                                    <Col md={3}>
                                        <label>Average (Score/Total)</label>
                                    </Col>
                                    <Col md={5}>
                                        <div>
                                            0 / 10
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            6.91 / 20
                                        </div>
                                    </Col>
                                </Row>
                                <hr className="my-2" />
                                <h4 className="card-title mt-3 mb-3">Evaluation 2</h4>
                                <Row>
                                    <Col md={3}>
                                        <label>Name</label>
                                    </Col>
                                    <Col md={5}>
                                        <label>Weighted Average</label>
                                    </Col>
                                    <Col md={4}>
                                        <label>Score</label>
                                    </Col>
                                </Row>
                                <hr className="mt-0" />
                                <Row>
                                    <Col md={3}>
                                        <label>Ash King</label>
                                    </Col>
                                    <Col md={5}>
                                        <div>
                                            <div className="live-preview">
                                                <Progress
                                                    color="success"
                                                    value={10}
                                                    className="custom-progress"
                                                >

                                                    NA
                                                </Progress>
                                                <span className="barvalue">10</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            <div className="live-preview">
                                                <Progress
                                                    color="success"
                                                    value={6}
                                                    className="custom-progress"
                                                >

                                                    6
                                                </Progress>
                                                <span className="barvalue">10</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="gery-bg">
                                    <Col md={3}>
                                        <label>Average (Score/Total)</label>
                                    </Col>
                                    <Col md={5}>
                                        <div>
                                            0 / 10
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            6 / 20
                                        </div>
                                    </Col>
                                </Row>
                                <hr className="my-2" />
                                <h4 className="card-title mt-3 mb-3">Evaluation 6</h4>
                                <Row>
                                    <Col md={3}>
                                        <label>Name</label>
                                    </Col>
                                    <Col md={5}>
                                        <label>Weighted Average</label>
                                    </Col>
                                    <Col md={4}>
                                        <label>Score</label>
                                    </Col>
                                </Row>
                                <hr className="mt-0" />
                                <Row>
                                    <Col md={3}>
                                        <label>
                                            Shobanaa Anand
                                        </label>
                                    </Col>
                                    <Col md={5}>
                                        <div>
                                            <div className="live-preview">
                                                <Progress
                                                    color="danger"
                                                    value={3.00}
                                                    className="custom-progress"
                                                >

                                                    5
                                                </Progress>
                                                <span className="barvalue">5</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            <div className="live-preview">
                                                <Progress
                                                    color="danger"
                                                    value={3}
                                                    className="custom-progress"
                                                >

                                                    3
                                                </Progress>
                                                <span className="barvalue">5</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="gery-bg">
                                    <Col md={3}>
                                        <label>Average (Score/Total)</label>
                                    </Col>
                                    <Col md={5}>
                                        <div>
                                            3 / 5
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            3 / 5
                                        </div>
                                    </Col>
                                </Row>
                                <hr className="my-2" />
                                <h4 className="card-title mt-3 mb-3">SSS – Proposals - Main Technical Committee Evaluation</h4>
                                <Row>
                                    <Col md={3}>
                                        <label>Name</label>
                                    </Col>
                                    <Col md={5}>
                                        <label>Weighted Average</label>
                                    </Col>
                                    <Col md={4}>
                                        <label>Score</label>
                                    </Col>
                                </Row>
                                <hr className="mt-0" />
                                <Row>
                                    <Col md={3}>
                                        <label>Smriti Misra</label>
                                    </Col>
                                    <Col md={5}>
                                        <div>
                                            <div className="live-preview">
                                                <Progress
                                                    color="warning"
                                                    value={10}
                                                    className="custom-progress"
                                                >

                                                    NA
                                                </Progress>
                                                <span className="barvalue">100</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            <div className="live-preview">
                                                <Progress
                                                    color="warning"
                                                    value={70}
                                                    className="custom-progress"
                                                >

                                                    70
                                                </Progress>
                                                <span className="barvalue">70</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="gery-bg">
                                    <Col md={3}>
                                        <label>Average (Score/Total)</label>
                                    </Col>
                                    <Col md={5}>
                                        <div>
                                            0 / 100
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div>
                                            70 / 100
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </SimpleBar>
                    </OffcanvasBody>
                    <div className="offcanvas-foorter border p-3 text-center">
                        <div className="hstack gap-2 justify-content-end">
                            <button type="button" className="btn btn-brand-theme">
                                Submit
                            </button>
                            <Button toggle={toggleAllRubric} className="btn btn-light">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Offcanvas>

                {/* Add Goup */}
                <Offcanvas
                    isOpen={isTeamMember}
                    direction="end"
                    toggle={toggleTeamMember}
                    id="offcanvasTeamMember"
                    className="border-bottom"
                >
                    <OffcanvasHeader
                        className="bg-light"
                        toggle={toggleTeamMember}
                        id="offcanvasRightLabel"
                    >
                        Create Group
                    </OffcanvasHeader>
                    <OffcanvasBody className="px-0 overflow-hidden">
                        <SimpleBar style={{ height: "100vh" }}>
                            <div className="px-4">
                                <Form>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label className="form-label">Member Name</Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Member Name"
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label className="form-label">Member Email</Label>
                                                <Input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Member Email"
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label className="form-label">Member Phone</Label>
                                                <input
                                                    type="phone"
                                                    className="form-control"
                                                    placeholder="Member Phone"
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label className="form-label">
                                                    Member WhatsApp Number
                                                </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Member WhatsApp Number"
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label className="form-label">Member Role</Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="CFO"
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label className="form-label">Linkedin Url</Label>
                                                <Input
                                                    type="url"
                                                    className="form-control"
                                                    placeholder="https://devv2.scip.co/entrepreneur/profile_info"
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <Label htmlFor="formSizeDefault" className="form-label">
                                                    Member Photo
                                                </Label>
                                                <div>
                                                    <img
                                                        src={avatar1}
                                                        alt="user-img"
                                                        className="img-thumbnail rounded-circle avatar-lg"
                                                    />
                                                </div>
                                                <Input
                                                    className="form-control"
                                                    id="formSizeDefault"
                                                    type="file"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </SimpleBar>
                    </OffcanvasBody>
                    <div className="offcanvas-foorter border p-3 text-center">
                        <div className="hstack gap-2 justify-content-end">
                            <button type="button" className="btn btn-brand-theme">
                                Submit
                            </button>
                            <Button toggle={toggleTeamMember} className="btn btn-light">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Offcanvas>

                {/* Report Video Modal */}
                <Offcanvas
                    isOpen={isReportVideo}
                    direction="end"
                    toggle={toggleReportVideo}
                    id="offcanvasReportVideo"
                    className="border-bottom"
                >
                    <OffcanvasHeader
                        className="bg-light"
                        toggle={toggleReportVideo}
                        id="offcanvasRightLabel"
                    >
                        Report Video
                    </OffcanvasHeader>
                    <OffcanvasBody className="px-0 overflow-hidden">
                        <Container>
                            <Row>
                                <Col md="12" sm="12">
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            className="rounded"
                                            src="https://scipbucket.s3.ap-south-1.amazonaws.com/uploads/docx_video/3/VDO_10346585929_3_40171865.mp4"
                                            title="YouTube video"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </OffcanvasBody>
                    <div className="offcanvas-foorter border p-3 text-center">
                        <div className="hstack gap-2 justify-content-end">
                            <Button className="btn btn-light">Cancel</Button>
                        </div>
                    </div>
                </Offcanvas>

            </React.Fragment>
        </>
    );
};

export default Deals;
