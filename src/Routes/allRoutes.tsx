import React from "react";
import { Navigate } from "react-router-dom";

// Main Admin
import MainAdmin from "../pages/MainAdmin/Documents/index";
import Syndicate from "../pages/MainAdmin/Syndicate/index";
import ManageUser from "../pages/MainAdmin/Syndicate/ManageUser";
import ManageDealLabel from "../pages/MainAdmin/Syndicate/ManageDealLabel";
import Index from "../pages/MainAdmin/Modules/index";
import Payment from "../pages/MainAdmin/Syndicate/Payment";

// Users
import Users from "../pages/Users/ProfileInfo";
import TypeForm from "../pages/Users/TypeForm";

//Invoices
import InvoiceList from "../pages/Invoices/InvoiceList";
import InvoiceCreate from "../pages/Invoices/InvoiceCreate";
import InvoiceDetails from "../pages/Invoices/InvoiceDetails";

//Forms
import BasicElements from "../pages/Forms/BasicElements/BasicElements";
import FormSelect from "../pages/Forms/FormSelect/FormSelect";
import FormEditor from "../pages/Forms/FormEditor/FormEditor";
import CheckBoxAndRadio from "../pages/Forms/CheckboxAndRadio/CheckBoxAndRadio";
import Masks from "../pages/Forms/Masks/Masks";
import FileUpload from "../pages/Forms/FileUpload/FileUpload";
import FormPickers from "../pages/Forms/FormPickers/FormPickers";
import FormRangeSlider from "../pages/Forms/FormRangeSlider/FormRangeSlider";
import Formlayouts from "../pages/Forms/FormLayouts/Formlayouts";
import FormValidation from "../pages/Forms/FormValidation/FormValidation";
import FormWizard from "../pages/Forms/FormWizard/FormWizard";
import FormAdvanced from "../pages/Forms/FormAdvanced/FormAdvanced";
import Select2 from "../pages/Forms/Select2/Select2";

//Tables
import BasicTables from "../pages/Tables/BasicTables/BasicTables";
import GridTables from "../pages/Tables/GridTables/GridTables";
import ListTables from "../pages/Tables/ListTables/ListTables";
import DataTables from "../pages/Tables/DataTables/DataTables";
import ReactTable from "../pages/Tables/ReactTables/index";

//APi Key
import APIKey from "../pages/APIKey/index";

// ---------------- SCIP Pages ----------------

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import ResetPassword from "../pages/Authentication/ResetPassword";
import Logout from "../pages/Authentication/Logout";
import CreateAccount from "../pages/Authentication/Register";
import SecurityQuestion from "../pages/Authentication/SecurityQuestion";
import Otp from "../pages/Authentication/Otp";
import PrivacyPolicy from "../pages/Authentication/PrivacyPolicy";
import TermsCondition from "../pages/Authentication/TermsCondition";
import Error404 from "../pages/Error404";
import MaintenanceMode from "../pages/Maintenance";
import MailInbox from "../pages/EmailInbox";

//Dashboard
import DashboardEcommerce from "../pages/Dashboard";
import AllNotifications from "../pages/Notifications/AllNotifications";
import CheckSpeed from "../pages/CheckSpeed";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/Profile/EditProfile";
import Videos from "../pages/TraningVideos/Videos";
import AccountSetting from "../pages/AccoutnSetting/AccountSetting";
import ContactSupport from "../pages/ContactSupport/ContactSupport";
import Message from "../pages/Message/index";
import DashboardList from "../pages/Dashboard/DashboardList";
import ViewRubric from "../pages/Dashboard/ViewRubric";
import ViewReview from "../pages/Dashboard/ViewReview";

// Contact Pages
import Contact from "../pages/Contact/Contact";

// Entrepreneur Pages

import Entrepreneur from "../pages/Entrepreneur/Entrepreneur";
import EntrepreneurMore from "../pages/Entrepreneur/More";
import InvestmentCommittee from "../pages/Entrepreneur/InvestmentCommittee";
import Tranche from "../pages/Entrepreneur/Tranche";
import ExitCampaign from "../pages/Entrepreneur/ExitCampaign";
import Calendar from "../pages/Calendar/index";
import FeedbackCommentArchive from "../pages/Entrepreneur/FeedbackCommentArchive";

// Entrepreneur Dashboard

import EntrepreneurIndex from "../pages/EntrepreneurDashboard/index";
import EntrepreneurDashboard from "../pages/EntrepreneurDashboard/EntrepreneurDashboard";
import ListView from "../pages/EntrepreneurDashboard/ListView";
import AboutUs from "../pages/EntrepreneurDashboard/CompanyInformation/AboutUs";
import EnTeaser from "../pages/EntrepreneurDashboard/CompanyInformation/Teaser";
import EnStartupFundingProposal from "../pages/EntrepreneurDashboard/CompanyInformation/StartupFundingProposal";
import Campaign from "../pages/EntrepreneurDashboard/CompanyInformation/Campaign";
import TabSection from "../pages/EntrepreneurDashboard/CompanyInformation/TabSection";
import EnFiling from "../pages/EntrepreneurDashboard/CompanyInformation/Filing";
import EnDealDocuments from "../pages/EntrepreneurDashboard";
import EneSignDocument from "../pages/EntrepreneurDashboard/eSign/esign_Document";
import EnCalendar from "../pages/EntrepreneurDashboard/Calendar/index";
import EnProfile from "../pages/EntrepreneurDashboard/Profile/Profile";
import Zipzum from "../pages/EntrepreneurDashboard/Zipzum/Index";
import CreateNew from "../pages/EntrepreneurDashboard/Zipzum/CreateNew";
import NewPage from "../pages/EntrepreneurDashboard/Zipzum/NewPage";
import Resources from "../pages/EntrepreneurDashboard/Resources/Resources";
import Training from "../pages/EntrepreneurDashboard/Training/Training";
import EnDealDocs from "../pages/EntrepreneurDashboard/DealDocuments/index";
import ResourcesBlog from "../pages/EntrepreneurDashboard/Resources/Blog/ResourcesDetail";
import Mentors from "../pages/EntrepreneurDashboard/Mentors/Mentors";
import EventView from "../pages/EntrepreneurDashboard/Mentors/Program/EventView/Index";
import Events from "../pages/EntrepreneurDashboard/Events/Events";
import EventCalendar from "../pages/EntrepreneurDashboard/Events/Calendar/index";

// Investor Pages
import Investor from "../pages/Investor/Investor";
import Renewals from "../pages/Investor/ManageInvestorMembership";
import InvestorSignup from "../pages/Investor/InvestorSignup";

// Syndicate Pages
import SyndicatePage from "../pages/Syndicate/Syndicate";

// KYC Pages
import KYC from "../pages/KYC/KYC";
import FamilyMember from "../pages/KYC/FamilyMember";

// SMEAdvisor Pages

import SMEAdvisor from "../pages/SME/SMEAdvisor";
import More from "../pages/SME/More";
import Approvals from "../pages/Approvals/index";

// Reports Pages
import Reports from "../pages/Reports/ReportsList";

// Role Pages
import RoleList from "../pages/Role/RoleList";
import EditRole from "../pages/Role/EditRole";

// Tenants Pages
import TenantsList from "../pages/Tenants/TenantsList";
import AddEditTenants from "../pages/Tenants/AddEditTenants";

// More Menus Pages
import MoreMenus from "../pages/MoreMenus/index";
import Team from "../pages/MoreMenus/Team/Team";
import TeamMember from "../pages/MoreMenus/Team/TeamMember";
import MoreMenuRubric from "../pages/MoreMenus/Rubric/MoreMenuRubric";
import RubricCriteria from "../pages/MoreMenus/Rubric/RubricCriteria";
import Notes from "../pages/MoreMenus/Notes/Notes";
import NotesCriteria from "../pages/MoreMenus/Notes/NotesCriteria";
import Email from "../pages/MoreMenus/Email/Email";
import SMEService from "../pages/MoreMenus/SmsService/SMEService";
import Workflow from "../pages/MoreMenus/Workflow/Workflow";
import Stage from "../pages/MoreMenus/Workflow/Stage";
import SubStage from "../pages/MoreMenus/Workflow/SubStage";
import Checklist from "../pages/MoreMenus/Workflow/Checklist";
import Template from "../pages/MoreMenus/Workflow/Template";
import Document from "../pages/MoreMenus/Workflow/Document";
import WorkflowTask from "../pages/MoreMenus/Workflow/WorkflowTask";
import CampaignDuration from "../pages/MoreMenus/CampaignDuration/CampaignDuration";
import LoginReport from "../pages/MoreMenus/LoginReport/LoginReport";
// import LoginReportDetails from "../pages/MoreMenus/LoginReport/LoginReportDetails";
import DocumentDownloadLog from "../pages/MoreMenus/DocumentDownloadLog/DocumentDownloadLog";
import ExportLog from "../pages/MoreMenus/ExportLog/ExportLog";
import MoreMenuStandardDocument from "../pages/MoreMenus/StandardDocument/MoreMenuStandardDocument";
import DocumentIndex from "../pages/MoreMenus/Document/index";
import DocumentsRespository from "../pages/MoreMenus/DocumentsRepository/DocumentsRespository";
import Instrument from "../pages/MoreMenus/Other/Instrument/Instrument";
import MoreMenuUser from "../pages/MoreMenus/Other/User/MoreMenuUser";
import MoreMenuUserModules from "../pages/MoreMenus/Other/User/MoreMenuUserModules";
import Right from "../pages/MoreMenus/Other/Right/Right";
import SubSection from "../pages/MoreMenus/Other/Right/SubSection";
import DealStatus from "../pages/MoreMenus/Other/DealStatus/DealStatus";
import CapitalRaise from "../pages/MoreMenus/Other/CapitalRaise/CapitalRaise";
import CapitalRaiselog from "../pages/MoreMenus/Other/CapitalRaise/CapitalRaiselog";
import PaymentType from "../pages/MoreMenus/Other/PaymentType/PaymentType";
import PaymentLog from "../pages/MoreMenus/Other/PaymentType/PaymentLog";
import InvestorDashboard from "../pages/MoreMenus/AssignInvestorRole/Index";
import ContributionAgreement from "../pages/MoreMenus/AssignInvestorRole/ContributionAgreement";
import DealTerm from "../pages/MoreMenus/AssignInvestorRole/DealTerm";
import PrivateDocument from "../pages/MoreMenus/UserFiles/PrivateDocument";
import PublicDocument from "../pages/MoreMenus/UserFiles/PublicDocument";
import PDFCompare from "../pages/MoreMenus/DiffChecker/PDFCompare";
import DocCompare from "../pages/MoreMenus/DiffChecker/DocCompare";
import Filing from "../pages/MoreMenus/ReportSubmission/FilingModal/Filing";
import FilingReport from "../pages/MoreMenus/ReportSubmission/FilingModal/FilingReport";
import FilingFormat from "../pages/MoreMenus/ReportSubmission/FilingFormatModal/FilingFormat";
import FilingFormatInfo from "../pages/MoreMenus/ReportSubmission/FilingFormatModal/FilingFormatInfo";
import Spreadsheet from "../pages/MoreMenus/ReportSubmission/spreadsheet/Spreadsheet";
import SpreadsheetDetails from "../pages/MoreMenus/ReportSubmission/spreadsheet/SpreadsheetDetails";
import CustomSpreadsheet from "../pages/MoreMenus/ReportSubmission/spreadsheet/CustomSpreadsheet";
import ShowExcelSheet from "../pages/MoreMenus/ReportSubmission/spreadsheet/ShowExcelSheet";
import PerformanceTracker from "../pages/MoreMenus/Tools/PerformanceTracker/PerformanceTracker";
import IRR from "../pages/MoreMenus/Tools/IRR/IRR";
import EsignDocument from "../pages/MoreMenus/Tools/EsignDocument/EsignDocument";
import DirectPayment from "../pages/MoreMenus/Tools/DirectPayment/DirectPayment";
import DCF from "../pages/MoreMenus/Tools/DCF/DCF";
import CapTable from "../pages/MoreMenus/Tools/CapTable/CapTable";
import KanbanTask from "../pages/MoreMenus/Tools/KanbanTask/KanbanTask";
import KanbanTaskLog from "../pages/MoreMenus/Tools/KanbanTask/KanbanTaskLog";
import KanbanStage from "../pages/MoreMenus/Tools/KanbanStage/KanbanStage";
import KanbanSubStage from "../pages/MoreMenus/Tools/KanbanStage/KanbanSubStage";
import ContactDirectory from "../pages/MoreMenus/Tools/ContactDirectory/ContactDirectory";
import SyndicateUserList from "../pages/MoreMenus/AccessWrite/SyndicateUserList";
import UserForm from "../pages/MoreMenus/AssignInvestorRole/ManageProfile/ManageUserForm";
import SubMenus from "../pages/MoreMenus/AssignInvestorRole/ManageProfile/SubMenus/ManageUserFormSubMenues";
import Category from "../pages/MoreMenus/Other/Category/Category";
import CategoryDoc from "../pages/MoreMenus/Other/Category/SubCategory";
import Task from "../pages/MoreMenus/Other/Task/Task";
import Setting from "../pages/MoreMenus/Other/Setting/Setting";
import ViewCampaign from "../pages/MoreMenus/Other/ViewCampaign/ViewCampaign";
import CMS from "../pages/MoreMenus/Other/CMS/CMS";
import SEO from "../pages/MoreMenus/Other/SEO/SEO";
import InvestorMembership from "../pages/MoreMenus/Other/InvestorMembership/InvestorMembership";
import Source from "../pages/MoreMenus/Other/Source/Source";
import CompanyStage from "../pages/MoreMenus/Other/CompanyStage/CompanyStage";
import RoundOfInvestment from "../pages/MoreMenus/Other/RoundOfInvestment/RoundOfInvestment";
import CampaignRejection from "../pages/MoreMenus/Other/CampaignRejection/CampaignRejection";
import OTPSetting from "../pages/MoreMenus/Other/OTPSetting/OTPSetting";
import DashboardStep from "../pages/MoreMenus/Other/DashboardStep/DashboardStep";
import Application from "../pages/MoreMenus/Other/Application/Application";
import ApplicationSection from "../pages/MoreMenus/Other/Application/ApplicationSection";
import ApplicationSubSection from "../pages/MoreMenus/Other/Application/ApplicationSubSection";
import Question from "../pages/MoreMenus/Other/Application/Question";
import TieChapterSetting from "../pages/MoreMenus/Other/TieChapterSetting/TieChapterSetting";
import TrainingVideo from "../pages/MoreMenus/Other/TrainingVideo/TrainingVideo";
import AppVersion from "../pages/MoreMenus/Other/AppVersion/AppVersion";
import FinancialYear from "../pages/MoreMenus/Other/FinancialYear/FinancialYear";
import AdminMenus from "../pages/MoreMenus/Other/AdminMenus/AdminMenus";
import AdminSubMenus from "../pages/MoreMenus/Other/AdminMenus/AdminSubMenus";
import DealMenu from "../pages/MoreMenus/Other/DealMenu/DealMenu";
import DealSubMenu from "../pages/MoreMenus/Other/DealSubMenu/DealSubMenu";
import ActionButton from "../pages/MoreMenus/Other/ActionButton/ActionButton";
import ActionSubButton from "../pages/MoreMenus/Other/ActionSubButton/ActionSubButton";
//import TieChapter from "../pages/MoreMenus/Other/TieChapter/TieChapter";
import MoreMenu from "../pages/MoreMenus/Other/MoreMenu/MoreMenu";
import MoreSubMenu from "../pages/MoreMenus/Other/MoreMenu/MoreSubMenus";
import ToolsSettings from "../pages/MoreMenus/Other/ToolsSetting/ToolsSettings";
import DealMenuSetting from "../pages/MoreMenus/Other/DealMenuSetting/DealMenuSetting";
import AppMenu from "../pages/MoreMenus/Other/AppMenu/AppMenu";
import CampaignInfo from "../pages/MoreMenus/Other/CampaignInfo/CampaignInfo";
import MoreTeaser from "../pages/MoreMenus/Other/Teaser/Teaser";
import ThemeCustomization from "../pages/MoreMenus/Other/ThemeCustomization/ThemeCustomization";
import RoleBaseSetting from "../pages/MoreMenus/Other/RoleBaseSetting/RoleBaseSetting";

// Import Pages
import ImportList from "../pages/Import/ImportList";

// Application
import PreliminaryApplication from "../pages/AppFunnel/Application/PreliminaryApplication";
import PreliminaryApplicationTask from "../pages/AppFunnel/ApplicationTask/PreliminaryApplicationTask";
import PreliminaryAssignedApplicationTask from "../pages/AppFunnel/AssignedApplicationTask/PreliminaryAssignedApplicationTask";
import PreliminaryArchivedApplication from "../pages/AppFunnel/ArchivedApplication/PreliminaryArchivedApplication";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";
import Teams from "../pages/Entrepreneur/Teams";

// Portfolio
import PortfolioReporting from "../pages/Portfolio/PortfolioReporting";
import PortfolioCall from "../pages/Portfolio/PortfolioCall";
import Portfoliodetails from "../pages/Portfolio/Portfoliodetails";

// Deals Pages
import DealsIndex from "../pages/Deals/index";
import Deals from "../pages/Deals/Deals";
import Comments from "../pages/Deals/EvaluationComments";
import Review from "../pages/Deals/EvaluationReview";
import Rubric from "../pages/Deals/EvaluationRubric";
import Teaser from "../pages/Deals/Teaser";
import InitialCommitment from "../pages/Deals/InitialCommitment";
import FinalCommitment from "../pages/Deals/FinalCommitment";
import Documents from "../pages/Deals/Documents";
import CallForMoney from "../pages/Deals/CallForMoney";
import DealsReports from "../pages/Deals/DealsReports";
import Lead from "../pages/Deals/Lead";
import TaskStatus from "../pages/Deals/TaskStatus";
import PastCampaign from "../pages/Deals/PastCampaign";
import StartUpFundingProposal from "../pages/Deals/StartUpFundingProposal";
import Kanban from "../pages/Deals/Kanban";
import InvestorMore from "../pages/Investor/InvestorMore";

import MessagePage from "../pages/Deals/MessagePage";
import CommentsPage from "../pages/Deals/CommentsPage";
import ManangeUser from "../pages/MainAdmin/Syndicate/ManageUser";
import ManageMasterTables from "../pages/ManageMasterTables/ManageMasterTables";

// Investor Dashboard
import InvestorIndex from "../pages/InvestorDashboard/index";
import Invested from "../pages/InvestorDashboard/Home/Invested";
import Interested from "../pages/InvestorDashboard/Home/Interested";
import PartialExit from "../pages/InvestorDashboard/Home/PartialExit";
import Exited from "../pages/InvestorDashboard/Home/Exited";
import MyTask from "../pages/InvestorDashboard/Workflow/MyTask";
import InvestorCalendar from "../pages/InvestorDashboard/Calendar/index";
import DirectPayments from "../pages/InvestorDashboard/DirectPayment/Payment";
import InvZipzum from "../pages/InvestorDashboard/Zipzum/Index";
import InvCreateNew from "../pages/InvestorDashboard/Zipzum/CreateNew";
import InvNewPage from "../pages/InvestorDashboard/Zipzum/NewPage";
import DocumentRepository from "../pages/InvestorDashboard/DocumentRepository/DocumentRepository";
import Files from "../pages/Message/Files";
import FilesFolder from "../pages/Message/FilesFolder";
import Folder from "../pages/Message/Folder";
import FormBuilder from "../pages/ManageMasterTables/FormBuilder";
import AddLayout from "../pages/ManageMasterTables/AddLayout";
import Evaluation from "../pages/InvestorDashboard/Company/Evaluation";
import ManageInvestorMembership from "../pages/Investor/ManageInvestorMembership";
import ManageUserForm from "../pages/MoreMenus/AssignInvestorRole/ManageProfile/ManageUserForm";
import WhatsappTemplate from "../pages/InvestorDashboard/Imanage/WhatsappTemplate";
import ManageUserFormSubMenues from "../pages/MoreMenus/AssignInvestorRole/ManageProfile/SubMenus/ManageUserFormSubMenues";
import EntrepreneurLogin from "../pages/Authentication/EntrepreneurLogin";
import InvestorLogin from "../pages/Authentication/InvestorLogin";
import SmeAdvisorLogin from "../pages/Authentication/SmeAdvisorLogin";
import Industry from "../pages/MoreMenus/Other/Industry/Industry";
import SubIndustry from "../pages/MoreMenus/Other/Industry/SubIndustry";
import AdminManageUser from "../pages/AdminManageUser/AdminManageUser";
import EmailThankYou from "../pages/Users/ProfileInfo/EmailThankYou";
import DealFormLayoutList from "../Components/DealFormLayout/DealFormLayoutList";
import CustomDealFormLayout from "../Components/DealFormLayout/CustomDealFormLayout";

// import
import ImportLogTbl from "../pages/Import/ImportLogTbl";
import ImportLogErrors from "../pages/Import/ImportLogErrors";
import ImportEntrepreneurDetailsList from "../pages/Import/EntrepreneurDetails/ImportEntrepreneurDetailsList";
import ImportCampaignList from "../pages/Import/Campaign/ImportCampaignList";
import ImportInstrumentList from "../pages/Import/Instrument/ImportInstrumentList";
import ImportCompanyDocumentList from "../pages/Import/CompanyDocx/ImportCompanyDocumentList";
import DealLayout from "../Components/DealFormLayout/DealLayout";

const publicRoutes = [
  { path: "/", component: <Login /> },
  { path: "/login", component: <Login /> },

  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/reset-password", component: <ResetPassword /> },
  { path: "/create-account", component: <CreateAccount /> },
  { path: "/security-question", component: <SecurityQuestion /> },
  { path: "/logout", component: <Logout /> },
  { path: "/otp", component: <Otp /> },

  // Entrepreneur,Investor,Sme advisor
  {
    path: "/entrepreneur/profile_info",
    component: <Users />,
    isHideSideBar: true,
  },

  { path: "/entrepreneur/signup/:type/:encodedId", component: <Users /> },
  { path: "/investor/signup/:type/:encodedId", component: <Users /> },
  { path: "/thirdparty/signup/:type/:encodedId", component: <Users /> },
  { path: "/admin/thank-you", component: <EmailThankYou /> },


  {
    path: "/privacy-policy",
    component: <PrivacyPolicy />,
    isHideSideBar: true,
  },
  {
    path: "/terms-conditions",
    component: <TermsCondition />,
    isHideSideBar: true,
  },

  { path: "/error-404", component: <Error404 /> },
  { path: "/maintenanc-mode", component: <MaintenanceMode /> },
];

const authProtectedRoutes = [
  // Authentication Page

  { path: "/inbox", component: <MailInbox /> },

  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/notifications", component: <AllNotifications /> },
  { path: "/checkspeed", component: <CheckSpeed /> },
  { path: "/profile", component: <Profile /> },
  { path: "/edit-profile", component: <EditProfile /> },
  { path: "/traning-videos", component: <Videos /> },
  { path: "/account-setting", component: <AccountSetting /> },
  { path: "/contact-support", component: <ContactSupport /> },
  { path: "/message", component: <Message /> },
  { path: "/calendar", component: <Calendar /> },




  // contacts

  { path: "/contacts", component: <Contact /> },

  // entrepreneur

  { path: "/entrepreneur", component: <Entrepreneur /> },
  { path: "/team", component: <Teams /> },
  { path: "/investment_committee", component: <InvestmentCommittee /> },
  { path: "/enterpreneur/more", component: <EntrepreneurMore /> },
  { path: "/enterpreneur/tranche", component: <Tranche /> },
  { path: "/enterpreneur/exit_campaign", component: <ExitCampaign /> },
  { path: "/enterpreneur/message", component: <MessagePage /> },
  {
    path: "/enterpreneur/feedback_comment_archive",
    component: <FeedbackCommentArchive />,
  },

  {
    path: "/entrepreneur_dashboard",
    component: <EntrepreneurIndex />,
    subRoutes: [
      { path: "/entrepreneur_dashboard", component: <EntrepreneurDashboard /> },
      { path: "/entrepreneur_dashboard/listview", component: <ListView /> },
      {
        path: "/entrepreneur_dashboard/company_information/aboutus",
        component: <AboutUs />,
      },
      {
        path: "/entrepreneur_dashboard/company_information/enteaser",
        component: <EnTeaser />,
      },
      {
        path: "/entrepreneur_dashboard/company_information/startup_funding_proposal",
        component: <EnStartupFundingProposal />,
      },
      {
        path: "/entrepreneur_dashboard/company_information/campaign",
        component: <Campaign />,
      },
      {
        path: "/entrepreneur_dashboard/company_information/tab_section",
        component: <TabSection />,
      },
      {
        path: "/entrepreneur_dashboard/company_information/enfiling",
        component: <EnFiling />,
      },
      {
        path: "/entrepreneur_dashboard/deal_documents/Index",
        component: <EnDealDocs />,
      },
      {
        path: "/entrepreneur_dashboard/Training/Training",
        component: <Training />,
      },
      {
        path: "/entrepreneur_dashboard/Resources/Resources",
        component: <Resources />,
      },
      {
        path: "/entrepreneur_dashboard/Mentors/Mentors",
        component: <Mentors />,
      },
      { path: "/entrepreneur_dashboard/events/events", component: <Events /> },
    ],
  },

  {
    path: "/entrepreneur_dashboard/eSign/esign_Document",
    component: <EneSignDocument />,
  },
  { path: "/entrepreneur_dashboard/Calendar/index", component: <EnCalendar /> },
  { path: "/entrepreneur_dashboard/Profile/Profile", component: <EnProfile /> },
  { path: "/entrepreneur_dashboard/Zipzum/Index", component: <Zipzum /> },
  {
    path: "/entrepreneur_dashboard/Zipzum/CreateNew",
    component: <CreateNew />,
  },
  { path: "/entrepreneur_dashboard/Zipzum/NewPage", component: <NewPage /> },
  {
    path: "/entrepreneur_dashboard/Resources/Blog/ResourcesDetails",
    component: <ResourcesBlog />,
  },
  {
    path: "/entrepreneur_dashboard/mentors/program/eventview/Index",
    component: <EventView />,
  },
  {
    path: "/entrepreneur_dashboard/events/calendar/index",
    component: <EventCalendar />,
  },
  {
    path: "/enterpreneur/feedback_comment_archive",
    component: <FeedbackCommentArchive />,
  },
  { path: "/entrepreneur/mentors/mentors", component: <Mentors /> },
  {
    path: "/entrepreneur/mentors/program/eventview/Index",
    component: <EventView />,
  },
  { path: "/entrepreneur/events/events", component: <Events /> },
  { path: "/entrepreneur/events/calendar/index", component: <EventCalendar /> },

  {
    path: "/entrepreneur_dashboard",
    component: <EntrepreneurIndex />,
    subRoutes: [
      { path: "/entrepreneur_dashboard", component: <EntrepreneurDashboard /> },
      { path: "/entrepreneur_dashboard/listview", component: <ListView /> },
      {
        path: "/entrepreneur_dashboard/company_information/aboutus",
        component: <AboutUs />,
      },
      {
        path: "/entrepreneur_dashboard/company_information/enteaser",
        component: <EnTeaser />,
      },
      {
        path: "/entrepreneur_dashboard/company_information/startup_funding_proposal",
        component: <EnStartupFundingProposal />,
      },
      {
        path: "/entrepreneur_dashboard/company_information/campaign",
        component: <Campaign />,
      },
      {
        path: "/entrepreneur_dashboard/company_information/tab_section",
        component: <TabSection />,
      },
      {
        path: "/entrepreneur_dashboard/company_information/enfiling",
        component: <EnFiling />,
      },
      {
        path: "/entrepreneur_dashboard/deal_documents/Index",
        component: <EnDealDocs />,
      },
    ],
  },

  {
    path: "/entrepreneur_dashboard/eSign/esign_Document",
    component: <EneSignDocument />,
  },
  { path: "/entrepreneur_dashboard/Calendar/index", component: <EnCalendar /> },
  { path: "/entrepreneur_dashboard/Profile/Profile", component: <EnProfile /> },
  { path: "/entrepreneur_dashboard/Zipzum/Index", component: <Zipzum /> },
  {
    path: "/entrepreneur_dashboard/Zipzum/CreateNew",
    component: <CreateNew />,
  },
  { path: "/entrepreneur_dashboard/Zipzum/NewPage", component: <NewPage /> },
  {
    path: "/entrepreneur_dashboard/Resources/Resources",
    component: <Resources />,
  },
  {
    path: "/entrepreneur_dashboard/Training/Training",
    component: <Training />,
  },
  {
    path: "/entrepreneur_dashboard/Resources/Blog/ResourcesDetails",
    component: <ResourcesBlog />,
  },

  // Investor Dashboard

  {
    path: "/investor_dashboard",
    component: <InvestorIndex />,
    subRoutes: [
      { path: "/investor_dashboard/home/invested", component: <Invested /> },
      {
        path: "/investor_dashboard/home/interested",
        component: <Interested />,
      },
      {
        path: "/investor_dashboard/home/partia-exit",
        component: <PartialExit />,
      },
      { path: "/investor_dashboard/home/exited", component: <Exited /> },
      { path: "/investor_dashboard/workflow/mytask", component: <MyTask /> },
      {
        path: "/investor_dashboard/directpayment/payment",
        component: <DirectPayments />,
      },
      {
        path: "/investor_dashboard/document-repository/document-repository",
        component: <DocumentRepository />,
      },
      {
        path: "/investor_dashboard/company/evaluation",
        component: <Evaluation />,
      },
    ],
  },

  { path: "/investor_dashboard/Zipzum/Index", component: <InvZipzum /> },
  { path: "/investor_dashboard/Zipzum/CreateNew", component: <InvCreateNew /> },
  { path: "/investor_dashboard/Zipzum/NewPage", component: <InvNewPage /> },
  { path: "/investor_dashboard/Imanage/WhatsappTemplate", component: <WhatsappTemplate /> },
  {
    path: "/investor_dashboard/calendar/index",
    component: <InvestorCalendar />,
  },

  // investor
  { path: "/investor", component: <Investor /> },
  { path: "/investor/more", component: <InvestorMore /> },
  { path: "/renewals", component: <Renewals /> },
  {
    path: "/investor/signup",
    component: <InvestorSignup />,
    isHideSideBar: true,
  },

  // syndicate
  { path: "/syndicate", component: <SyndicatePage /> },

  // kyc_reporting

  { path: "/kyc_reporting", component: <KYC /> },
  {
    path: "/kyc_reporting/get_family_member_list",
    component: <FamilyMember />,
  },

  // sme-Advisor

  { path: "/sme-Advisor", component: <SMEAdvisor /> },
  { path: "/sme-Advisor/more", component: <More /> },

  // Reports

  { path: "/reports", component: <Reports /> },

  // Tenants
  { path: "/manage-tenants", component: <TenantsList /> },
  { path: "/add-tenants", component: <AddEditTenants /> },
  { path: "/edit-tenants/:id", component: <AddEditTenants /> },

  // Role
  { path: "/role", component: <RoleList /> },
  { path: "/role/permission", component: <EditRole /> },
  { path: "/role/permission/:id", component: <EditRole /> },
  { path: "/admin-role/permission", component: <EditRole /> },
  { path: "/admin-role/permission/:id", component: <EditRole /> },
  { path: "/sub-user-role/permission", component: <EditRole /> },
  { path: "/sub-user-role/permission/:id", component: <EditRole /> },

  //Manage Form Layout

  { path: "/admin/manage-master-table", component: <ManageMasterTables /> },
  { path: "/admin/form-builder", component: <FormBuilder /> },
  { path: "/admin/add-layout/:uuid", component: <AddLayout /> },

  //Deal Form Layout
  { path: "/admin/manage-deal-layout-list", component: <DealLayout /> },
  { path: "/admin/manage-deal-form-layout-list/:id", component: <DealFormLayoutList /> },
  { path: "/admin/custom-deal-form-layout/:id", component: <CustomDealFormLayout /> },

  // Manage User 
  { path: "/admin/manage-user/:id", component: <AdminManageUser /> },



  // More Menus
  { path: "/admin/menu", component: <MoreMenus /> },
  { path: "/admin/Team", component: <Team /> },
  { path: "/admin/TeamMember", component: <TeamMember /> },
  { path: "/admin/rubric", component: <MoreMenuRubric /> },
  { path: "/admin/rubricCriteria/:id", component: <RubricCriteria /> },
  { path: "/admin/notes", component: <Notes /> },
  { path: "/admin/notesCriteria/:id", component: <NotesCriteria /> },
  { path: "/admin/email", component: <Email /> },
  { path: "/admin/smsService", component: <SMEService /> },
  { path: "/admin/workflow", component: <Workflow /> },
  { path: "/admin/workflow/stage/:id", component: <Stage /> },
  { path: "/admin/workflow/subStage/:id", component: <SubStage /> },
  { path: "/admin/workflow/checklist/:id", component: <Checklist /> },
  {
    path: "/admin/workflow/template/:substageid/:stageid",
    component: <Template />,
  },
  { path: "/admin/workflow/document/:id", component: <Document /> },
  { path: "/admin/workflow/workflowTask", component: <WorkflowTask /> },
  { path: "/admin/campaign_duration", component: <CampaignDuration /> },
  { path: "/admin/loginReport", component: <LoginReport /> },
  // { path: "/admin/loginReportDetails", component: <LoginReportDetails /> },
  { path: "/admin/documentDownloadLog", component: <DocumentDownloadLog /> },
  { path: "/admin/exportLog", component: <ExportLog /> },
  { path: "/admin/standardDocument", component: <MoreMenuStandardDocument /> },
  { path: "/admin/document", component: <DocumentIndex /> },
  { path: "/admin/documentRepository", component: <DocumentsRespository /> },
  { path: "/admin/instrument", component: <Instrument /> },
  { path: "/admin/syndicateUser", component: <MoreMenuUser /> },
  { path: "/admin/modules/index/:id", component: <MoreMenuUserModules /> },
  { path: "/admin/investor/membership", component: <ManageInvestorMembership /> },
  { path: "/admin/right", component: <Right /> },
  { path: "/admin/option", component: <SubSection /> },
  { path: "/admin/dealStatus", component: <DealStatus /> },
  { path: "/admin/adddealStatus", component: <DealStatus /> },
  // { path: "/admin/editdealStatus/:id", component: <DealStatus /> },


  { path: "/admin/capitalRaise", component: <CapitalRaise /> },
  {
    path: "/admin/capitalRaiseLog/:id",
    component: <CapitalRaiselog />,
  },
  { path: "/admin/payment/paymentType", component: <PaymentType /> },
  { path: "/admin/payment/paymentLog", component: <PaymentLog /> },
  {
    path: "/admin/setting/investorDashboard",
    component: <InvestorDashboard />,
  },
  {
    path: "/admin/contributionAgreement",
    component: <ContributionAgreement />,
  },
  { path: "/admin/dealTerm", component: <DealTerm /> },
  {
    path: "/admin/userDocument/privateDocument",
    component: <PrivateDocument />,
  },
  { path: "/admin/userDocument/publicDocument", component: <PublicDocument /> },
  { path: "/admin/pdfCompare/pdfResult", component: <PDFCompare /> },
  { path: "/admin/docCompare", component: <DocCompare /> },
  { path: "/admin/filing", component: <Filing /> },
  { path: "/admin/filing/filingReport", component: <FilingReport /> },
  { path: "/admin/filing/filingReportFormat", component: <FilingFormat /> },
  {
    path: "/admin/filing/filingReportFormatInfo",
    component: <FilingFormatInfo />,
  },
  { path: "/admin/spreadsheet", component: <Spreadsheet /> },
  {
    path: "/admin/spreadsheet/spreadsheetDetails",
    component: <SpreadsheetDetails />,
  },
  { path: "/admin/customSpreadsheet", component: <CustomSpreadsheet /> },
  {
    path: "/admin/customSpreadsheet/showexcelsheet",
    component: <ShowExcelSheet />,
  },
  { path: "/admin/visualization/track", component: <PerformanceTracker /> },
  { path: "/admin/visualization/irr", component: <IRR /> },
  { path: "/admin/leegality", component: <EsignDocument /> },
  { path: "/admin/directPayment", component: <DirectPayment /> },
  { path: "/admin/visualization/dcf", component: <DCF /> },
  { path: "/admin/visualization/analytics", component: <CapTable /> },
  { path: "/admin/visualization/analytics", component: <CapTable /> },
  { path: "/admin/kanban/task", component: <KanbanTask /> },
  { path: "/admin/kanban/taskLog", component: <KanbanTaskLog /> },
  { path: "/admin/kanban/stage", component: <KanbanStage /> },
  { path: "/admin/kanban/stage/:stageId", component: <KanbanSubStage /> },
  { path: "/admin/contactDirectory", component: <ContactDirectory /> },
  { path: "/admin/survey/settingUserlist", component: <SyndicateUserList /> },
  { path: "/admin/form_builder", component: <ManageUserForm /> },
  { path: "/admin/form_builder/section_details/:id", component: <ManageUserFormSubMenues /> },
  { path: "/admin/category", component: <Category /> },
  { path: "/admin/category/docs/:id", component: <CategoryDoc /> },
  { path: "/admin/task", component: <Task /> },
  { path: "/admin/setting", component: <Setting /> },
  { path: "/admin/campaign/view", component: <ViewCampaign /> },
  { path: "/admin/cms", component: <CMS /> },
  { path: "/admin/seo", component: <SEO /> },
  { path: "/admin/membership", component: <InvestorMembership /> },
  { path: "/admin/source", component: <Source /> },
  { path: "/admin/companyStage", component: <CompanyStage /> },
  { path: "/admin/roundofInvestment", component: <RoundOfInvestment /> },
  { path: "/admin/rejection", component: <CampaignRejection /> },
  { path: "/admin/otpSetting", component: <OTPSetting /> },
  { path: "/admin/dashboardStep", component: <DashboardStep /> },
  { path: "/admin/application", component: <Application /> },
  { path: "/admin/applicationSection/:id", component: <ApplicationSection /> },
  {
    path: "/admin/applicationSubSection/:id",
    component: <ApplicationSubSection />,
  },
  { path: "/admin/questions/:id", component: <Question /> },
  { path: "/admin/setting/tieChapter", component: <TieChapterSetting /> },
  { path: "/admin/trainingVideo", component: <TrainingVideo /> },
  { path: "/admin/appVersion", component: <AppVersion /> },
  { path: "/admin/financialYear", component: <FinancialYear /> },
  { path: "/admin/menus", component: <AdminMenus /> },
  { path: "/admin/subMenus/:id", component: <AdminSubMenus /> },
  { path: "/admin/dealMenu", component: <DealMenu /> },
  { path: "/admin/dealSubMenu", component: <DealSubMenu /> },
  { path: "/admin/actionButton", component: <ActionButton /> },
  { path: "/admin/actionSubButton", component: <ActionSubButton /> },
  //  { path: "/admin/tieChapter", component: <TieChapter /> },
  { path: "/admin/moremenu", component: <MoreMenu /> },
  { path: "/admin/moremenu/submenu/:id", component: <MoreSubMenu /> },
  { path: "/admin/visualization/settings", component: <ToolsSettings /> },
  { path: "/admin/filterMenuSetting", component: <DealMenuSetting /> },
  { path: "/admin/appMenu", component: <AppMenu /> },
  { path: "/admin/campaignInfo", component: <CampaignInfo /> },
  { path: "/admin/teaser", component: <MoreTeaser /> },
  { path: "/admin/themeCustomization", component: <ThemeCustomization /> },
  { path: "/admin/setting/roleBaseSetting", component: <RoleBaseSetting /> },
  { path: "/admin/industry", component: <Industry /> },
  { path: "/admin/subindustry/:id", component: <SubIndustry /> },

  // import
  { path: "/import", component: <ImportList /> },
  { path: "/importLog", component: <ImportLogTbl /> },
  { path: "/importLogError/:id", component: <ImportLogErrors /> },
  { path: "/import/entrepreneurDetails", component: <ImportEntrepreneurDetailsList /> },
  { path: "/import/campaign", component: <ImportCampaignList /> },
  { path: "/import/instrument", component: <ImportInstrumentList /> },
  { path: "/import/campanyDocument", component: <ImportCompanyDocumentList /> },


  // App funnel
  { path: "/preliminary/application", component: <PreliminaryApplication /> },
  {
    path: "/preliminary/applicationtask",
    component: <PreliminaryApplicationTask />,
  },
  {
    path: "/preliminary/assignedapplicationtask",
    component: <PreliminaryAssignedApplicationTask />,
  },
  {
    path: "/preliminary/archivedapplication",
    component: <PreliminaryArchivedApplication />,
  },

  // // Message Tool File
  // {
  //   path: "/message/files",
  //   component: <Files />,
  // },
  // {
  //   path: "/message/folder",
  //   component: <Folder />,
  // },

  // PortfolioReporting
  { path: "/portfolioreporting", component: <PortfolioReporting /> },
  { path: "/portfoliocall", component: <PortfolioCall /> },
  { path: "/portfoliodetails", component: <Portfoliodetails /> },
  { path: "/approvals", component: <Approvals /> },





  {
    path: "/",
    component: <DealsIndex />,
    subRoutes: [

      { path: "/deals", component: <Deals /> },
      { path: "/deals/application", component: <Deals /> },
      { path: "/evaluation/comments", component: <Deals /> },
      { path: "/evaluation/review", component: <Deals /> },
      { path: "/evaluation/rubric", component: <Deals /> },
      { path: "/teaser", component: <Deals /> },
      { path: "/initialcommitment", component: <Deals /> },
      { path: "/finalcommitment", component: <Deals /> },
      { path: "/documents", component: <Deals /> },
      { path: "/callformoney", component: <Deals /> },
      { path: "/deal/reports", component: <Deals /> },
      { path: "/lead", component: <Deals /> },
      { path: "/taskstatus", component: <Deals /> },
      { path: "/pastcampaign", component: <Deals /> },
      { path: "/startupfundingproposal", component: <Deals /> },
      { path: "/kanban", component: <Deals /> },


      { path: "/deals/evaluation/comments", component: <Comments /> },
      { path: "/deals/evaluation/review", component: <Review /> },
      { path: "/deals/evaluation/rubric", component: <Rubric /> },
      { path: "/deals/teaser", component: <Teaser /> },
      { path: "/deals/initialcommitment", component: <InitialCommitment /> },
      { path: "/deals/finalcommitment", component: <FinalCommitment /> },
      { path: "/deals/documents", component: <Documents /> },
      { path: "/deals/callformoney", component: <CallForMoney /> },
      { path: "/deals/reports", component: <DealsReports /> },
      { path: "/deals/lead", component: <Lead /> },
      { path: "/deals/taskstatus", component: <TaskStatus /> },
      { path: "/deals/pastcampaign", component: <PastCampaign /> },
      {
        path: "/deals/startupfundingproposal",
        component: <StartUpFundingProposal />,
      },
      {
        path: "/deals/kanban", component: <Kanban />,
      },
    ],
  },
  /// DEAL PAGE NEW ROUTES FOR RAKESH SIR 
  {
    path: "/deals",
    component: <DealsIndex />,
    subRoutes: [
      { path: "/deals", component: <Deals /> },
      { path: "/deals/application", component: <Deals /> },
      { path: "/deals/evaluation/comments", component: <Comments /> },
      { path: "/deals/evaluation/review", component: <Review /> },
      { path: "/deals/evaluation/rubric", component: <Rubric /> },
      { path: "/deals/teaser", component: <Teaser /> },
      { path: "/deals/initialcommitment", component: <InitialCommitment /> },
      { path: "/deals/finalcommitment", component: <FinalCommitment /> },
      { path: "/deals/documents", component: <Documents /> },
      { path: "/deals/callformoney", component: <CallForMoney /> },
      { path: "/deals/reports", component: <DealsReports /> },
      { path: "/deals/lead", component: <Lead /> },
      { path: "/deals/taskstatus", component: <TaskStatus /> },
      { path: "/deals/pastcampaign", component: <PastCampaign /> },
      {
        path: "/deals/startupfundingproposal",
        component: <StartUpFundingProposal />,
      },
      {
        path: "/deals/kanban", component: <Kanban />,
      },
    ],
  },

  // { path: "/deals/", component: <Review /> },

  { path: "/deals/message", component: <MessagePage /> },
  { path: "/deals/comments", component: <CommentsPage /> },

  // theme pages

  { path: "/index", component: <DashboardEcommerce /> },
  { path: "dashboard/dashboard-list", component: <DashboardList /> },
  { path: "dashboard/view-rubric", component: <ViewRubric /> },
  { path: "dashboard/view-review", component: <ViewReview /> },

  //Api Key
  { path: "/apps-api-key", component: <APIKey /> },

  //Invoices
  { path: "/apps-invoices-list", component: <InvoiceList /> },
  { path: "/apps-invoices-details", component: <InvoiceDetails /> },
  { path: "/apps-invoices-create", component: <InvoiceCreate /> },

  // Forms
  { path: "/forms-elements", component: <BasicElements /> },
  { path: "/forms-select", component: <FormSelect /> },
  { path: "/forms-editors", component: <FormEditor /> },
  { path: "/forms-checkboxes-radios", component: <CheckBoxAndRadio /> },
  { path: "/forms-masks", component: <Masks /> },
  { path: "/forms-file-uploads", component: <FileUpload /> },
  { path: "/forms-pickers", component: <FormPickers /> },
  { path: "/forms-range-sliders", component: <FormRangeSlider /> },
  { path: "/forms-layouts", component: <Formlayouts /> },
  { path: "/forms-validation", component: <FormValidation /> },
  { path: "/forms-wizard", component: <FormWizard /> },
  { path: "/forms-advanced", component: <FormAdvanced /> },
  { path: "/forms-select2", component: <Select2 /> },

  //Tables
  { path: "/tables-basic", component: <BasicTables /> },
  { path: "/tables-gridjs", component: <GridTables /> },
  { path: "/tables-listjs", component: <ListTables /> },
  { path: "/tables-datatables", component: <DataTables /> },
  { path: "/tables-react", component: <ReactTable /> },

  //User Profile
  { path: "/userprofile", component: <UserProfile /> },

  // Main Admin

  { path: "/admin/documents", component: <MainAdmin /> },
  { path: "/admin/syndicate", component: <Syndicate /> },
  { path: "/admin/syndicate/manageuser", component: <ManageUser /> },
  { path: "/admin/syndicate/payment", component: <Payment /> },
  { path: "/admin/syndicate/managedeallabel", component: <ManageDealLabel /> },
  { path: "/admin/modules/", component: <Index /> },

  // Users

  { path: "/users/type_form", component: <TypeForm />, isHideSideBar: true },
];

export { publicRoutes, authProtectedRoutes };
