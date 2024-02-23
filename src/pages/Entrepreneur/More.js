import React, { useState, useCallback } from "react";
import { useSelector } from 'react-redux';
import { ProjectName } from "../../Components/constants/layout";
import SweetAlert from 'react-bootstrap-sweetalert';
import {
    Col, Container, Row, Card, Modal, ModalHeader, ModalBody, CardBody, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Label,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Fragment } from "react";
import ListTable from "./ListTable";
import ImportShareRegister from "./ImportShareRegister";

import Rejection from "./Rejection";
import CoInvestment from "./CoInvestment";
import CoInvestmentInfo from "./CoInvestmentInfo";
import AddDeaInfo from "./AddDeaInfo";
import InvestorRole from "./InvestorRole";
import RequiredAction from "./RequiredAction";
import DealStatus from "./DealStatus";
import Task from "./Task";
import BankDetails from "./BankDetails";
import Termination from "./Termination";
import { Link } from "react-router-dom";
import CreateSchedule from "./CreateSchedule";
import CampaignSuccess from "./CampaignSuccess";
import InitialCommitment from "./InitialCommitment";
import FinalCommitment from "./FinalCommitment";
import CallForMoney from "./CallForMoney";
import Evaluation from "./Evaluation";
import FundHolding from "./FundHolding";
import DealTerms from "./DealTerms";
import Message from "./Message";
import RequiredActionHistory from "./RequiredActionHistory";
import Filing from "./Filing";
import DealTermsClass from "./DealTermsClass";
import DeleteShareRegister from "./DeleteShareRegister";
import UploadCertificate from "./UploadCertificate";
import AddDraftDocument from "./AddDraftDocument";
import AssignNotes from "./AssignNotes";
import PostPresentation from "./PostPresentation";
import SkippedStages from "./SkippedStages";
import ConPrecedent from "./ConPrecedent";
import CoSubsequent from "./CoSubsequent";

const crmcontacts = [
    {
        id: 1,
        code: "CAMP002U606",
        companyName: "K pvt ltd - Kola Idea 1",
        shareRegiter: "List",
        startDate: "08/05/2023",
        endDate: "08/05/2023",
        amountRaised: "4000000USD",
        amountRaisedDate: "08/05/2023",
        amountRequired: "NA",
        status: "Partial Exit",
    },
    {
        id: 2,
        code: "CAMP002U606",
        companyName: "K pvt ltd - Kola Idea 1",
        shareRegiter: "List",
        startDate: "08/05/2023",
        endDate: "08/05/2023",
        amountRaised: "4000000USD",
        amountRaisedDate: "08/05/2023",
        amountRequired: "NA",
        status: "Preparing",
    }
    
];

const More = () => {

    const [modelName, setModelName] = useState({ name: "", ind: 0, tabName: "" });
    const [tabName, setTabName] = useState({ name: "campaign", ind: 0 });
    const [shareRegister, setShareRegister] = useState({ status: "Yes" });
    const [salesTracker, setSalesTracker] = useState({ status: "No" });
    const [fundingProposalEdit, setFundingProposalEdit] = useState({ alert: false, id: "", status: "", ind: "", tabName: "" });
    const [modal, setModal] = useState(false);

    const toggle = (name, ind, tabname) => {
        setModelName({ name: name, ind: parseInt(ind), tabName: tabname });
        if (name === "CreateSchedule") {
            setModal(false);
        }
    };

    const toggleTab = (name, ind) => {
        setTabName({ name: name, ind: parseInt(ind) });
    };

    const toggleRadio = (name, status) => {

        if (name == "shareRegister") {
            setShareRegister({ status: status });
        } else {
            setSalesTracker({ status: status })
        }

    };

    const submit = () => {
        // console.log(fundingProposalEdit)
    }

    const toggleModel = useCallback(() => {
        if (modal) {
            setModal(false);

        } else {
            setModal(true);
        }
    }, [modal]);

    // document.title = " More Info | Velzon - React Admin & Dashboard Template";
    document.title = `${ProjectName} | More Info `;
    // const entrepreneurData = useSelector((state) => state.Entrepreneur.entrepreneur);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title=" More Info" pageTitle=" More Info" location="/entrepreneur" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <div className="table-responsive table-card">
                                        <table className="table table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Code</th>
                                                    <th scope="col">Company & Campaign name</th>
                                                    <th scope="col">Share Register</th>
                                                    <th scope="col">Start Date</th>
                                                    <th scope="col">End Date</th>
                                                    <th scope="col">Amount Raised (date)</th>
                                                    <th scope="col">Amount Required to Raise</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col" className="fix-col-last">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    crmcontacts && crmcontacts.length && crmcontacts.map((val, ind) => {
                                                        // console.log(val);
                                                        return <Fragment key={ind}>
                                                            <tr>
                                                                <td>{val.code}</td>
                                                                <td>{val.companyName}</td>
                                                                {/* {val.shareRegiter} */}
                                                                <td>{val.status === "Partial Exit" ? <span className="badge badge-soft-danger fs-12" onClick={e => toggle('List', ind)}>List</span> : ""}</td>
                                                                <td>{val.startDate}</td>
                                                                <td>{val.endDate}</td>
                                                                <td>
                                                                    <div className="hstack gap-1 flex-wrap">
                                                                        <span>{val.amountRaised}</span>
                                                                        <span>(<>{val.amountRaisedDate}</>)</span>
                                                                    </div>
                                                                </td>
                                                                <td>{val.amountRequired}</td>
                                                                <td>{val.status}</td>
                                                                <td className="fix-col-last">
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
                                                                                    <DropdownItem className="dropdown-item" href="#">
                                                                                        Deal Dashboard
                                                                                    </DropdownItem>
                                                                                    <DropdownItem className="dropdown-item" href="#">
                                                                                        View Deal
                                                                                    </DropdownItem>
                                                                                    <Link className="dropdown-item" to="/enterpreneur/tranche">
                                                                                        Tranche
                                                                                    </Link>
                                                                                    <Link className="dropdown-item" to="/enterpreneur/exit_campaign">
                                                                                        Exit
                                                                                    </Link>
                                                                                </DropdownMenu>
                                                                            </UncontrolledDropdown>
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                            </tr>
                                                            <tr key={ind} >
                                                                <td colSpan="100%">
                                                                    <div className="col-sm-auto ms-auto mb-3">
                                                                        <div className="hstack gap-2 flex-wrap">

                                                                            <button type="button" className={tabName.name === 'preCampaign' && tabName.ind === ind ? "btn btn-primary waves-effect waves-light active rounded-pill py-1" : "btn btn-light waves-effect waves-light rounded-pill py-1"} onClick={e => toggleTab('preCampaign', ind)}> Pre Campaign  </button>
                                                                            <button type="button" className={tabName.name === 'campaign' && tabName.ind === ind ? "btn btn-primary waves-effect waves-light active rounded-pill py-1" : "btn btn-light waves-effect waves-light rounded-pill py-1"} onClick={e => toggleTab('campaign', ind)}> Campaign  </button>
                                                                            <button type="button" className={tabName.name === 'postCampaign' && tabName.ind === ind ? "btn btn-primary waves-effect waves-light active rounded-pill py-1" : "btn btn-light waves-effect waves-light rounded-pill py-1"} onClick={e => toggleTab('postCampaign', ind)}> Post Campaign </button>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        {tabName.name === 'preCampaign' && tabName.ind === ind &&
                                                                            <>
                                                                                <div className="hstack gap-2 flex-wrap">
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-secondary waves-effect waves-light" onClick={e => toggle('Rejection', ind, 'preCampaign')} > Reject </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-success waves-effect waves-light" onClick={e => toggle('CoInvestment', ind, 'preCampaign')} > Co Investment  </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-info waves-effect waves-light" onClick={e => toggle('CoInvestmentInfo', ind, 'preCampaign')} > Co Investment Info </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-warning waves-effect waves-light" onClick={e => toggle('Message', ind, 'preCampaign')} > Message </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-danger waves-effect waves-light" onClick={e => toggle('Evaluation', ind, 'preCampaign')} > Evaluation  </button>
                                                                                </div>
                                                                            </>
                                                                        }
                                                                        {tabName.name === 'campaign' && tabName.ind === ind &&
                                                                            <>
                                                                                <div className="hstack gap-2 flex-wrap">
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-danger waves-effect" onClick={e => setFundingProposalEdit({ alert: true, id: 1, status: 0, ind: ind, tabName: 'campaign' })} > Enable Funding Proposal Edit </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-success waves-effect waves-light" onClick={e => toggle('Rejection', ind, 'campaign')} > Reject  </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-secondary waves-effect waves-light" onClick={e => toggle('AddDeaInfo', ind, 'campaign')} > Add Deal Info</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-info waves-effect waves-light" onClick={e => toggle('InvestorRole', ind, 'campaign')}> Investor Role </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-warning waves-effect waves-light" onClick={e => toggle('Filing', ind, 'campaign')} > Filing  </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-danger waves-effect waves-effect" onClick={e => toggle('CoInvestment', ind, 'campaign')} > Co Investment</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-success waves-effect waves-light" onClick={e => toggle('CoInvestmentInfo', ind, 'campaign')} > Co Investment Info</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-secondary waves-effect waves-light" onClick={e => toggle('Termination', ind, 'campaign')} > Termination</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-info waves-effect waves-light" onClick={e => toggle('RequiredAction', ind, 'campaign')}  > Required Action</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-warning waves-effect waves-light" onClick={e => toggle('DealStatus', ind, 'campaign')} > Deal status  </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-success waves-effect waves-light" onClick={e => toggle('Task', ind, 'campaign')} > Status</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-warning waves-effect waves-light" onClick={() => { setModal(true); }} > Create Schedule </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-info waves-effect waves-light" onClick={e => toggle('CampaignSuccess', ind, 'campaign')} > Campaign Success </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-danger waves-effect waves-light" onClick={e => toggle('BankDetails', ind, 'campaign')} > Bank Details</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-secondary waves-effect waves-light" onClick={e => toggle('InitialCommitment', ind, 'campaign')}  > Initial Commitment </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-warning waves-effect waves-light" onClick={e => toggle('FinalCommitment', ind, 'campaign')} > Final Commitment</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-success waves-effect waves-light" onClick={e => toggle('CallForMoney', ind, 'campaign')} > Call For Money</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-danger waves-effect waves-light" onClick={e => toggle('FundHolding', ind, 'campaign')} > Fund Holding </button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-warning waves-effect waves-light" onClick={e => toggle('DealTerms', ind, 'campaign')}  > Deal Terms</button>
                                                                                    {/*<button type="button" className="btn btn-sm rounded-pill btn-soft-danger waves-effect waves-effect" onClick={e => toggle('', ind, 'campaign')}  > Archive</button>*/}
                                                                                    <Link to="/enterpreneur/feedback_comment_archive" className="btn btn-sm rounded-pill btn-soft-success waves-effect waves-light"> Archive</Link>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-success waves-effect waves-light" onClick={e => toggle('AddDraftDocument', ind, 'campaign')}> Add Document</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-info waves-effect waves-light" onClick={e => toggle('AssignNotes', ind, 'campaign')}  > Notes</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-danger waves-effect" onClick={e => toggle('PostPresentation', ind, 'campaign')}  > Post Presentation</button>
                                                                                    {/*<button type="button" className="btn btn-sm rounded-pill btn-soft-success waves-effect waves-light" onClick={e => toggle('', ind, 'campaign')}  > Message</button>*/}
                                                                                    <Link to="/enterpreneur/message" className="btn btn-sm rounded-pill btn-soft-success waves-effect waves-light"> Message</Link>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-info waves-effect waves-light" onClick={e => toggle('SkippedStages', ind, 'campaign')}  > Skipped Stages</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-danger waves-effect" onClick={e => toggle('ConPrecedent', ind, 'campaign')}  > Con. Precedent</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-warning waves-effect waves-light" onClick={e => toggle('CoSubsequent', ind, 'campaign')}  > Con. Subsequent</button>
                                                                                    <button type="button" className="btn btn-sm rounded-pill btn-soft-info waves-effect waves-light" onClick={e => toggle('', ind, 'campaign')}  > IC Memo</button>
                                                                                </div>

                                                                                <div className="btn-group p-1 mt-2" role="group" aria-label="Basic radio toggle button group">

                                                                                    <Label htmlFor="name-field" className="form-label me-2 mt-1">Share Register : </Label>

                                                                                    <input type="radio" className="btn-check" name="shareRegister" id="btnradio2" autoComplete="off" onClick={e => toggleRadio('shareRegister', 'Yes')} />
                                                                                    <label className={shareRegister.status === 'Yes' ? "btn btn-sm btn-soft-danger waves-effect active" : "btn btn-sm btn-light waves-effect "} htmlFor="btnradio2" title="Share register">No</label>

                                                                                    <input type="radio" className="btn-check" name="shareRegister" id="btnradio3" autoComplete="off" onClick={e => toggleRadio('shareRegister', 'No')} />
                                                                                    <label className={shareRegister.status === 'No' ? "btn btn-sm btn-success waves-effect active" : "btn btn-sm btn-light waves-effect "} htmlFor="btnradio3" title="Share register">Yes</label>
                                                                                </div>

                                                                                <div className="btn-group p-1 mt-2" role="group" aria-label="Basic radio toggle button group">

                                                                                    <Label htmlFor="name-field" className="form-label me-2 mt-1">Sales Tracker : </Label>
                                                                                    <input type="radio" className="btn-check" name="salesTracker" id="btnradio4" autoComplete="off" onClick={e => toggleRadio('salesTracker', 'Yes')} />
                                                                                    <label className={salesTracker.status === 'Yes' ? "btn btn-sm btn-danger waves-effect active" : "btn btn-sm btn-light waves-effect "} htmlFor="btnradio4" title="Sales Tracker">No</label>

                                                                                    <input type="radio" className="btn-check" name="salesTracker" id="btnradio5" autoComplete="off" onClick={e => toggleRadio('salesTracker', 'No')} />
                                                                                    <label className={salesTracker.status === 'No' ? "btn btn-sm btn-success waves-effect active" : "btn btn-sm btn-light waves-effect "} htmlFor="btnradio5" title="Sales Tracker">Yes</label>
                                                                                </div>
                                                                            </>
                                                                        }
                                                                        {tabName.name === 'postCampaign' && tabName.ind === ind &&
                                                                            <>
                                                                                <div className="hstack gap-2 flex-wrap">
                                                                                    <button type="button" className="btn btn-sm  rounded-pill btn-soft-danger waves-effect waves-light" onClick={e => toggle('InvestorRole', ind, 'postCampaign')}> Investor Role </button>
                                                                                    <button type="button" className="btn btn-sm  rounded-pill btn-soft-secondary waves-effect waves-light" onClick={e => toggle('CoInvestment', ind, 'postCampaign')}> Co Investment  </button>
                                                                                    <button type="button" className="btn btn-sm  rounded-pill btn-soft-warning waves-effect waves-light" onClick={e => toggle('CoInvestmentInfo', ind, 'postCampaign')} > Co Investment Info </button>
                                                                                </div>
                                                                            </>
                                                                        }

                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <Modal id="showModal" isOpen={modal} toggle={toggleModel} centered>
                                                                <ModalHeader className="bg-soft-info p-3" toggle={toggleModel}>
                                                                    Create Schedule
                                                                </ModalHeader>
                                                                <ModalBody>
                                                                    <h5 className="mb-sm-0"><Link to="/calendar">Click here</Link>  to schedule a meeting from Google Calendar.</h5><br></br>
                                                                    <h5><Link to="#" onClick={e => toggle('CreateSchedule', ind, 'campaign')}>Click here</Link> to schedule a meeting to open the deal on Web and App in the tile Forthcoming Presentation. </h5>
                                                                </ModalBody>
                                                            </Modal>
                                                        </Fragment>
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <SweetAlert
                custom
                show={fundingProposalEdit.alert}
                btnSize="md"
                showCancel
                showProfile
                showCloseButton
                confirmBtnText="Ok"
                cancelBtnText="Cancel"
                title=""
                confirmBtnBsStyle="primary"
                cancelBtnBsStyle="danger"
                onConfirm={submit}
                onCancel={e => setFundingProposalEdit({ alert: false, id: "", status: "", ind: "", tabName: "" })}
            >
                Are you sure you want to do this action?
            </SweetAlert>
            <ListTable
                toggle={toggle}
                show={modelName.name === 'List' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <ImportShareRegister
                show={modelName.name === 'Import' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <UploadCertificate
                show={modelName.name === 'UploadCertificate' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <DeleteShareRegister
                show={modelName.name === 'DeleteShareRegister' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Rejection
                show={modelName.name === 'Rejection' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <CoInvestment
                show={modelName.name === 'CoInvestment' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <CoInvestmentInfo
                show={modelName.name === 'CoInvestmentInfo' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Filing
                show={modelName.name === 'Filing' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <AddDeaInfo
                show={modelName.name === 'AddDeaInfo' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <InvestorRole
                show={modelName.name === 'InvestorRole' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <RequiredAction
                toggle={toggle}
                ind={modelName.ind}
                show={modelName.name === 'RequiredAction' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <DealStatus
                show={modelName.name === 'DealStatus' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Task
                show={modelName.name === 'Task' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <BankDetails
                show={modelName.name === 'BankDetails' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Termination
                show={modelName.name === 'Termination' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <CreateSchedule
                show={modelName.name === 'CreateSchedule' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <CampaignSuccess
                show={modelName.name === 'CampaignSuccess' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <InitialCommitment
                show={modelName.name === 'InitialCommitment' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <FinalCommitment
                show={modelName.name === 'FinalCommitment' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <CallForMoney
                show={modelName.name === 'CallForMoney' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Evaluation
                show={modelName.name === 'Evaluation' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <FundHolding
                show={modelName.name === 'FundHolding' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <DealTerms
                toggle={toggle}
                ind={modelName.ind}
                show={modelName.name === 'DealTerms' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Message
                show={modelName.name === 'Message' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <RequiredActionHistory
                show={modelName.name === 'RequiredActionHistory' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <DealTermsClass
                show={modelName.name === 'DealTermsClass' ? true : false}
                onCloseClick={() => setModelName("")}
            />

            <AddDraftDocument
                show={modelName.name === 'AddDraftDocument' ? true : false}
                onCloseClick={() => setModelName("")}
            />

            <AssignNotes
            show={modelName.name === 'AssignNotes' ? true : false}
            onCloseClick={() => setModelName("")}
            />

            <PostPresentation
            show={modelName.name === 'PostPresentation' ? true : false}
            onCloseClick={() => setModelName("")}
            />

            <SkippedStages
            show={modelName.name === 'SkippedStages' ? true : false}
            onCloseClick={() => setModelName("")}
            />

            <ConPrecedent
            show={modelName.name === 'ConPrecedent' ? true : false}
            onCloseClick={() => setModelName("")}
            />

            <CoSubsequent
            show={modelName.name === 'CoSubsequent' ? true : false}
            onCloseClick={() => setModelName("")}
            />

        </React.Fragment>
    );
};

export default More;
