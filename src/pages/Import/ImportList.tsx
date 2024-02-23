import React, { useEffect, useState } from "react";
import { ProjectName } from "../../Components/constants/layout";
import { Container, Row } from 'reactstrap';
import BreadCrumb from "../../Components/Common/BreadCrumb";
import EntrepreneurDetails from "./EntrepreneurDetails/ImportEntrepreneurDetails";
import CompanyProfile from "./CompanyProfile";
import CampaignDetails from "./Campaign/ImportCampaignDetails";
import Instrument from "./Instrument/ImportInstrument";
import CompanyDocument from "./CompanyDocx/ImportCompanyDocument";
import InvestorDetails from "./InvestorDetails";
import InvestorAssistantDetails from "./InvestorAssistantDetails";
import InvestorFamilyMemberandCompany from "./InvestorFamilyMemberandCompany";
import ShareDetails from "./ShareDetails";
import FilingReport from "./FilingReport";
import CurrentValuation from "./CurrentValuation";
import InitialCommitment from "./InitialCommitment";
import FinalCommitment from "./FinalCommitment";
import SubCampaign from "./SubCampaign";
import TrancheCommitment from "./TrancheCommitment";
import ImportLog from "./ImportLog";
import IRRReturnPercent from "./IRRReturnPercent";
import ApplicationAnswers from "./ApplicationAnswers";
import SMEAdvisorDetails from "./SMEAdvisorDetails";
import WebService from "../../utility/WebService";

const ImportList = () => {
    document.title = `${ProjectName} | Import `;
    const [data, setData] = useState<any>([])

    useEffect(() => {
        getAcessMenuList();
    }, [])

    const getAcessMenuList = () => {
        var obj: any = {}
        obj.code = 'import'
        WebService.getAPI({
            action: `/module-access`,
            body: obj,
        })
            .then((res: any) => {
                setData(res.result)
            })
            .catch((e) => {
            });
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Import" pageTitle="Import" location="" />
                    <div className="team-list list-view-filter">
                        <Row>
                            {data &&
                                data?.sub_items?.length > 0 &&
                                data.sub_items.map((res: any) => {
                                    return (
                                        <>
                                            {res.code == "entrepreneur_details" &&
                                                <EntrepreneurDetails />
                                            }
                                            {res.code == "company_profile" &&
                                                <CompanyProfile />
                                            }
                                            {res.code == "campaign" &&
                                                <CampaignDetails />
                                            }
                                            {res.code == "instrument" &&
                                                <Instrument />
                                            }
                                            {res.code == "company_document" &&
                                                <CompanyDocument />
                                            }
                                            {res.code == "investor_details" &&
                                                <InvestorDetails />
                                            }
                                            {res.code == "investor_assistant_nominee_details" &&
                                                <InvestorAssistantDetails />
                                            }
                                            {res.code == "investor_family_member_company" &&
                                                <InvestorFamilyMemberandCompany />
                                            }
                                            {res.code == "share_details" &&
                                                <ShareDetails />
                                            }
                                            {res.code == "filing_report" &&
                                                <FilingReport />
                                            }
                                            {res.code == "current_valuation" &&
                                                <CurrentValuation />
                                            }
                                            {res.code == "initial_commitment" &&
                                                <InitialCommitment />
                                            }
                                            {res.code == "final_commitment" &&
                                                <FinalCommitment />
                                            }
                                            {res.code == "sub_campaign" &&
                                                <SubCampaign />
                                            }
                                            {res.code == "tranche_commitment" &&
                                                <TrancheCommitment />
                                            }
                                            {res.code == "import_log" &&
                                                <ImportLog />
                                            }
                                            {res.code == "irr_return_percent" &&
                                                <IRRReturnPercent />
                                            }
                                            {res.code == "application_answers" &&
                                                <ApplicationAnswers />
                                            }
                                            {res.code == "sme_advisor_details" &&
                                                <SMEAdvisorDetails />
                                            }
                                        </>
                                    );
                                })}
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ImportList;
