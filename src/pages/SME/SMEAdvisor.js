import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SweetAlert from 'react-bootstrap-sweetalert';

import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
} from "reactstrap";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import { useSelector, useDispatch } from "react-redux";
import TableContainer from "../../Components/Common/TableContainer";
import { ProjectName } from "../../Components/constants/layout";

// Export Modal
import ExportCSVModal from "../../Components/Common/ExportCSVModal";
import SMEAdvisorFilter from "./Filter";
import SetPassword from "./SetPassword";
import ActiveInActive from "../Investor/ActiveInActive";
import Task from "./Task";
import Application from "./Application";
import ApplicationComment from "./ApplicationComment";


const crmcontacts = [
  {
    id: 1,
    name: "Tonya Noble",
    companyName: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    category: "Cofounder",
    sourceofcontact: "Cofounder",
    Resigterddate: "08/05/2023",
    userCode: "USER0002165",
    address: "Investor",
    submissiondate: "08/05/2023",
  },
  {
    id: 2,
    name: "Tonya Noble",
    companyName: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    category: "Cofounder",
    sourceofcontact: "Cofounder",
    Resigterddate: "08/05/2023",
    userCode: "USER0002165",
    address: "Investor",
    submissiondate: "08/05/2023",
  },
  {
    id: 3,
    name: "Tonya Noble",
    companyName: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    category: "Cofounder",
    sourceofcontact: "Cofounder",
    Resigterddate: "08/05/2023",
    userCode: "USER0002165",
    address: "Investor",
    submissiondate: "08/05/2023",
  },
  {
    id: 4,
    name: "Tonya Noble",
    companyName: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    category: "Cofounder",
    sourceofcontact: "Cofounder",
    Resigterddate: "08/05/2023",
    userCode: "USER0002165",
    address: "Investor",
    submissiondate: "08/05/2023",
  },
  {
    id: 5,
    name: "Tonya Noble",
    companyName: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    category: "Cofounder",
    sourceofcontact: "Cofounder",
    Resigterddate: "08/05/2023",
    userCode: "USER0002165",
    address: "Investor",
    submissiondate: "08/05/2023",
  },
  {
    id: 6,
    name: "Tonya Noble",
    companyName: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    category: "Cofounder",
    sourceofcontact: "Cofounder",
    Resigterddate: "08/05/2023",
    userCode: "USER0002165",
    address: "Investor",
    submissiondate: "08/05/2023",
  },
  {
    id: 7,
    name: "Tonya Noble",
    companyName: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    category: "Cofounder",
    sourceofcontact: "Cofounder",
    Resigterddate: "08/05/2023",
    userCode: "USER0002165",
    address: "Investor",
    submissiondate: "08/05/2023",
  },
  {
    id: 8,
    name: "Tonya Noble",
    companyName: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    category: "Cofounder",
    sourceofcontact: "Cofounder",
    Resigterddate: "08/05/2023",
    userCode: "USER0002165",
    address: "Investor",
    submissiondate: "08/05/2023",
  },
  {
    id: 9,
    name: "Tonya Noble",
    companyName: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    category: "Cofounder",
    sourceofcontact: "Cofounder",
    Resigterddate: "08/05/2023",
    userCode: "USER0002165",
    address: "Investor",
    submissiondate: "08/05/2023",
  },
  {
    id: 10,
    name: "Tonya Noble",
    companyName: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    category: "Cofounder",
    sourceofcontact: "Cofounder",
    Resigterddate: "08/05/2023",
    userCode: "USER0002165",
    address: "Investor",
    submissiondate: "08/05/2023",
  }
];

const SMEAdvisor = () => {

  const dispatch = useDispatch();
  // const { isContactSuccess, error } = useSelector((state) => ({
  //   crmcontacts: state.Crm.crmcontacts,
  //   isContactSuccess: state.Crm.isContactSuccess,
  //   error: state.Crm.error,
  // }));

  // const [formData, setFormData] = useState({ date: "", profile: "", applicationstatus: "", approval: "", membership: "", zone: "", city: "" });
  const [formData, setFormData] = useState({});

  const [profileData, setProfileData] = useState({ alert: false, id: "", status: "" });
  // const [tagsData, setTagsData] = useState({ columns: "" });
  const [modelName, setModelName] = useState("");
  // Export Modal
  const [isExportCSV, setIsExportCSV] = useState(false);

  const toggle = (name) => {
    setModelName(name);
  };

  const handleRemoveFilter = (key) => {
    let form = { ...formData }
    form[key] = "";
    setFormData(form);
  }

  const submit = () => {
    // console.log(profileData)
  }
  var result = Object.keys(formData).map((key) => [key, formData[key]]);

  // document.title = "SMEAdvisor | Velzon - React Admin & Dashboard Template";
  document.title = `${ProjectName} | SME Advisor`;

  // Customber Column
  const columns = useMemo(
    () => [
      {
        Header: "User Name",
        accessor: "name",
        filterable: false,
        Cell: (contact) => (
          <>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1 ms-2 name">
                {contact.row.original.name}
              </div>
            </div>
          </>
        ),
      },
      {
        Header: "Company Name ",
        accessor: "companyName",
        filterable: false,
      },
      {
        Header: "Email Id ",
        accessor: "email",
        filterable: false,
      },
      {
        Header: "Contact No",
        accessor: "phone",
        filterable: false,
      },
      {
        Header: "Category",
        accessor: "category",
        filterable: false,
      },
      {
        Header: "Source of Contact",
        accessor: "sourceofcontact",
        filterable: false,
      },
      {
        Header: "Registration Date",
        accessor: "Resigterddate",
        filterable: false,
      },
      {
        Header: "User Code",
        accessor: "userCode",
        filterable: false,
      },
      {
        Header: "Address",
        accessor: "address",
        filterable: false,
      },
      {
        Header: "Submission Date",
        accessor: "submissiondate",
        filterable: false,
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          // console.log(contact.row.original.Verified )
          return (
            <ul className="list-inline hstack gap-2 mb-0">
              <li className="list-inline-item">
                <UncontrolledDropdown>
                  <DropdownToggle
                    href="#" className="btn btn-soft-secondary btn-sm dropdown" tag="button" >
                    <i className="ri-more-fill align-middle"></i>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-end">
                    <DropdownItem >
                    <i class="ri-dashboard-2-line align-bottom me-1"></i> SME Dashboard
                    </DropdownItem>
                    <DropdownItem  onClick={e => toggle('Application')}>
                    <i class="ri-clipboard-line align-bottom me-1"></i> Application
                    </DropdownItem>
                    <DropdownItem  onClick={e => toggle('Task')}>
                    <i class="ri-checkbox-circle-line align-bottom me-1"></i> Status
                    </DropdownItem>
                    <DropdownItem  onClick={e => toggle('ActiveInActive')}>
                    <i class="ri-checkbox-circle-line align-bottom me-1"></i> Active
                    </DropdownItem>
                    <DropdownItem  onClick={e => toggle('Message')}>
                    <i class="ri-message-2-line align-bottom me-1"></i> Message
                    </DropdownItem>
                    <DropdownItem>
                      <Link className="text-body" to="/sme-Advisor/more">
                      <i class="ri-menu-line align-bottom me-1"></i> More
                      </Link>
                    </DropdownItem>
                    <DropdownItem onClick={e => toggle('SetPassword')}>
                    <i class="ri-lock-password-line align-bottom me-1"></i> Set Temp Password
                    </DropdownItem>
                    <DropdownItem onClick={e => setProfileData({ alert: true, id: 1, status: 0 })}>
                    <i class="ri-chat-check-line align-bottom me-1"></i> Approval Profile
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
          );
        },
      },
    ],

  );

  // console.log(formData)
  return (
    <React.Fragment>
      <div className="page-content">
        <ExportCSVModal
          show={isExportCSV}
          onCloseClick={() => setIsExportCSV(false)}
          data={crmcontacts}
        />
        <Container fluid>
          <BreadCrumb title="SME Advisor" pageTitle="SME Advisor" />
          <Row>
            <Col lg={12}>
              <Card id="leadsList">
                <CardHeader className="border-0">
                  <Row className="g-0 align-items-center mb-0">
                    <Col sm={4}>
                      <div className="search-box">
                        <Input
                          type="text"
                          className="form-control search"
                          placeholder="Search for SME Advisor"
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <div className="col-sm-auto ms-auto">
                      <div className="d-flex hstack gap-2 flex-wrap">
                        <Link to="/contacts" className="me-0 btn btn-soft-info"> Contact {" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                        <button type="button" className="btn btn-soft-info" onClick={e => toggle('Filters')}>
                          <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                          Filters
                        </button>
                        <button type="button" className="btn btn-soft-info">
                          <i className="ri-file-excel-line  align-bottom me-1"></i>{" "}
                          Export
                        </button>
                      </div>
                    </div>
                  </Row>
                  {
                    Object.values(formData).every(x => x === null || x === '') === false &&
                    <Row>
                      <div className="filter-choices-input mt-2">
                        <div className="choices">
                          <div className="choices__inner">
                            <div className="choices__list choices__list--multiple">
                              {result.map((item, index) => {
                                if (item[0] && item[1]) {

                                  if (item[1].value) {
                                    return <div key={index} className="choices__item choices__item--selectable">{item[1].value} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                  } else {
                                    return <div key={index} className="choices__item choices__item--selectable">{item[1]} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                  }
                                  // if(item[1].date1 && item[1].date2){
                                  //   return <div key={index} className="choices__item choices__item--selectable">{item[1].date1 }{"-"}{item[1].date2} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                  // }else{
                                  //   return <div key={index} className="choices__item choices__item--selectable">{item[1].value} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                  // }

                                } else { return ''; }
                              })
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  }
                </CardHeader>
                <CardBody className="pt-0">
                  <div>
                    {crmcontacts.length ? (
                      <TableContainer
                        columns={columns}
                        data={(crmcontacts || [])}
                        dataCount={crmcontacts.length}
                        // isAddUserList={false}
                        customPageSize={8}
                        className="custom-header-css"
                        divClass="table-responsive table-card"
                        tableClass="align-middle table-nowrap"
                        theadClass="table-light"
                        isContactsFilter={true}
                      />
                    ) :
                      //  (<Loader error={error} />)
                      (<div className="py-4 text-center">
                        <div>
                          <lord-icon
                            src="https://cdn.lordicon.com/msoeawqm.json"
                            trigger="loop"
                            colors="primary:#405189,secondary:#0ab39c"
                            style={{ width: "72px", height: "72px" }}
                          ></lord-icon>
                        </div>
                        <div className="mt-4">
                          <h5>Sorry! No Result Found</h5>
                        </div>
                      </div>)
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <SMEAdvisorFilter
        formData={formData}
        setFormData={setFormData}
        show={modelName === 'Filters' ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <Task
        show={modelName === 'Task' ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <ActiveInActive
        show={modelName === 'ActiveInActive' ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <SetPassword
        show={modelName === 'SetPassword' ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <SweetAlert
        custom
        show={profileData.alert}
        btnSize="md"
        showCloseButton
        showCancel
        showProfile
        confirmBtnText="Approve"
        cancelBtnText="View Profile"
        confirmBtnBsStyle="primary"
        cancelBtnBsStyle="success"
        title={profileData.status === 0 ? "Approve Profile" : "Approve Profile"}
        onConfirm={submit}
        onCancel={e => setProfileData({ alert: false, id: "", status: "" })}
      >
        To approve user profile please click on approve button.
      </SweetAlert>
      <Application 
          toggle={toggle}
          show={modelName === 'Application' ? true : false}
          onCloseClick={() => setModelName("")}
      />
      <ApplicationComment 
        show={modelName === 'ApplicationComment' ? true : false}
        onCloseClick={() => setModelName("")}
      />
    </React.Fragment>
  );
};

export default SMEAdvisor;
