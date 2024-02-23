import React, { useEffect, useState } from "react";
import { ProjectName } from "../../Components/constants/layout";
import { Container, Row } from 'reactstrap';
import BreadCrumb from "../../Components/Common/BreadCrumb";
import ReinvestmentReport from "./reinvestment/ReinvestmentReport";
import IndustryViewReport from "./industry/IndustryViewReport";
import InvestorReport from "./InvestorReport/InvestorReport";
import InvestorInvestmentReport from "./InvestorInvestmentReport/InvestorInvestmentReport";
import StartupDetailsReport from "./StartupDetailsReport/StartupDetailsReport";
import StartupShortDetailsReport from "./StartupShortDetailsReport/StartupShortDetailsReport";
import StartupValuationReport from "./StartupValuationReport/StartupValuationReport";
import StartupRegistrationReport from "./StartupRegistrationReport/StartupRegistrationReport";
import StartupSelectionReport from "./StartupSelectionReport/StartupSelectionReport";
import EmailReport from "./EmailReport/EmailReport";
import InvestmentReport2 from "./InvestmentReport2/InvestmentReport2";
import CommentReport from "./CommentReport/CommentReport";
import SimpleBar from "simplebar-react";
import WebService from "../../utility/WebService";
import WorkflowReport from "./WorkflowReport/WorkflowReport";
import Loader from "../../Components/Loader/Loader";

const ReportsList = () => {
    document.title = `${ProjectName} | Reports List`;
    const [data, setData] = useState<any>([])
    const [showLoader, setShowLoader] = useState(false)

    useEffect(() => {
        onClickExport();
    }, [])

    const onClickExport = () => {
        setShowLoader(true)
        var obj: any = {}
        obj.code = 'reports'
        WebService.getAPI({
            action: `/module-access`,
            body: obj,
        })
            .then((res: any) => {
                setData(res.result)
                setShowLoader(false)
            })
            .catch((e) => {
                setShowLoader(false)
            });
    }

    return (
        <>
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Reports List" pageTitle="Reports List" location={""} />
                    <Row>
                        <SimpleBar autoHide={false}>
                            {data &&
                                data?.sub_items?.length > 0 &&
                                data.sub_items.map((item: any) => {
                                    return (
                                        <>
                                            {item.code === 're_investment_report' &&
                                                <ReinvestmentReport
                                                    acessMenu={item} />}
                                            {item.code === 'industry_view_report' &&
                                                <IndustryViewReport
                                                    acessMenu={item} />}
                                            {item.code === 'investor_report' &&
                                                <InvestorReport
                                                    acessMenu={item} />}
                                            {item.code === 'investor_investment_report' &&
                                                <InvestorInvestmentReport
                                                    acessMenu={item} />}
                                            {item.code === 'startup_details_report' &&
                                                <StartupDetailsReport
                                                    acessMenu={item} />}
                                            {item.code === 'startup_short_details_report' &&
                                                <StartupShortDetailsReport
                                                    acessMenu={item} />}
                                            {item.code === 'startup_valuation_report' &&
                                                <StartupValuationReport
                                                    acessMenu={item} />}
                                            {item.code === 'startup_registration_report' &&
                                                <StartupRegistrationReport
                                                    acessMenu={item} />}
                                            {item.code === 'startup_selection_report' &&
                                                <StartupSelectionReport
                                                    acessMenu={item} />}
                                            {item.code === 'email_report' &&
                                                <EmailReport
                                                    acessMenu={item} />}
                                            {item.code === 'investment_report_2' &&
                                                <InvestmentReport2
                                                    acessMenu={item} />}
                                            {item.code === 'comment_report' &&
                                                <CommentReport
                                                    acessMenu={item} />}
                                            {item.code === 'workflow_report' &&
                                                <WorkflowReport
                                                    acessMenu={item} />}
                                        </>
                                    );
                                })}
                        </SimpleBar>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
        </>
    );
};

export default ReportsList;
