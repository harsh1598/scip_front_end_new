import React, { useState, useMemo } from "react";
import ContactFilter from "./Filter";
import SweetAlert from 'react-bootstrap-sweetalert';
import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  Input,
  UncontrolledTooltip
} from "reactstrap";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import { ProjectName } from "../../Components/constants/layout";

//redux
import { useDispatch } from "react-redux";
import TableContainer from "../../Components/Common/TableContainer";

const crmcontacts = [
  {
    id: 1,
    img: '',
    name: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    ResigterdOn: "08/05/2023",
    userType: "Entrepreneur",
    userWorkType: "Cofounder",
    Verified: "Yes",
    userCode: "USER0002165",
    platform: "Web",
  },
  {
    id: 2,
    img: '',
    name: "Tarun Sahu ",
    email: "teaq89@yopmail.com",
    phone: "8797898788",
    ResigterdOn: "22/07/2023",
    userType: "Entrepreneur",
    userWorkType: "Main",
    Verified: "No",
    userCode: "USER0002164",
    platform: "Web",
  },
  {
    id: 3,
    img: '',
    name: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    ResigterdOn: "08/05/2023",
    userType: "Entrepreneur",
    userWorkType: "Cofounder",
    Verified: "Yes",
    userCode: "USER0002165",
    platform: "Web",
  },
  {
    id: 4,
    img: '',
    name: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    ResigterdOn: "08/05/2023",
    userType: "Entrepreneur",
    userWorkType: "Cofounder",
    Verified: "Yes",
    userCode: "USER0002165",
    platform: "Web",
  },
  {
    id: 5,
    img: '',
    name: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    ResigterdOn: "08/05/2023",
    userType: "Entrepreneur",
    userWorkType: "Cofounder",
    Verified: "Yes",
    userCode: "USER0002165",
    platform: "Web",
  },
  {
    id: 6,
    img: '',
    name: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    ResigterdOn: "08/05/2023",
    userType: "Entrepreneur",
    userWorkType: "Cofounder",
    Verified: "No",
    userCode: "USER0002165",
    platform: "app",
  },
  {
    id: 7,
    img: '',
    name: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    ResigterdOn: "08/05/2023",
    userType: "Entrepreneur",
    userWorkType: "Cofounder",
    Verified: "Yes",
    userCode: "USER0002165",
    platform: "Web",
  },
  {
    id: 8,
    img: '',
    name: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    ResigterdOn: "08/05/2023",
    userType: "Entrepreneur",
    userWorkType: "Cofounder",
    Verified: "Yes",
    userCode: "USER0002165",
    platform: "Web",
  },
  {
    id: 9,
    img: '',
    name: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    ResigterdOn: "08/05/2023",
    userType: "Entrepreneur",
    userWorkType: "Cofounder",
    Verified: "No",
    userCode: "USER0002165",
    platform: "Web",
  },
  {
    id: 10,
    img: '',
    name: "Tonya Noble",
    email: "y1@yopmail.com",
    phone: "414-453-5725",
    ResigterdOn: "08/05/2023",
    userType: "Entrepreneur",
    userWorkType: "Cofounder",
    Verified: "Yes",
    userCode: "USER0002165",
    platform: "Web",
  }
];

const Contact = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [statusData, setStatusData] = useState({ alert: false, id: "", status: "" });

  const submit = () => {
    // console.log(statusData)
  }
  // SideBar Contact filter
  const [isInfoDetails, setIsInfoDetails] = useState(false);

  const toggleInfo = () => {
    setIsInfoDetails(!isInfoDetails);
  };

  const handleRemoveFilter = (key) => {
    let form = { ...formData }
    form[key] = "";
    setFormData(form);
  }

  // const isEmpty = Object.values(formData).every(x => x === null || x === '');
  var result = Object.keys(formData).map((key) => [key, formData[key]]);
  // document.title = "Contacts | Velzon - React Admin & Dashboard Template";
  document.title = `${ProjectName} | Contacts`;

  // Customber Column
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        filterable: false,
        Cell: (contact) => (
          <>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                {contact.row.original.image_src ? <img
                  src={process.env.REACT_APP_API_URL + "/images/users/" + contact.row.original.image_src}
                  alt=""
                  className="avatar-xxs rounded-circle"
                /> :
                  <div className="flex-shrink-0 avatar-xs me-2">
                    <div className="avatar-title bg-soft-success text-success rounded-circle fs-13">
                      {contact.row.original.name.charAt(0)}
                    </div>
                  </div>
                  // <img src={dummyImg} alt="" className="avatar-xxs rounded-circle" />
                }
              </div>
              <div className="flex-grow-1 ms-2 name">
                {contact.row.original.name}
              </div>
            </div>
          </>
        ),
      },
      {
        Header: "Email",
        accessor: "email",
        filterable: false,
      },
      {
        Header: "Phone No",
        accessor: "phone",
        filterable: false,
      },
      {
        Header: "Resigterd on",
        accessor: "ResigterdOn",
        filterable: false,
      },
      {
        Header: "User Type",
        accessor: "userType",
        filterable: false,
      },
      {
        Header: "User Work Type",
        accessor: "userWorkType",
        filterable: false,
      },
      {
        Header: "Verified",
        accessor: "Verified",
        filterable: false,
        Cell: (contact) => (
          <>
              {/*  
                className={data.row.original.Verified === "Yes" ? "btn btn-success btn-sm" : "btn btn-primary btn-sm"}
                
                className={data.row.original.Verified === "COMPLETED" ? "badge badge bg-success" : "badge bg-primary"}
              */}
              <span className={contact.row.original.Verified === "Yes" ? "badge badge-soft-success fs-12" : "badge badge-soft-danger fs-12"} >{contact.row.original.Verified}</span>
          </>
        ),
      },
      {
        Header: "user Code",
        accessor: "userCode",
        filterable: false,
      },
      {
        Header: "platform",
        accessor: "platform",
        filterable: false,
      },
      {
        Header: "Action",
        Cell: (contact) => {
          // console.log(contact.row.original.Verified )
          return (
            <ul className="list-inline hstack gap-2 mb-0">
              {
                contact.row.original.Verified === "Yes" ?
                  <>
                    <UncontrolledTooltip placement="bottom" target="Verified">
                      Verified
                    </UncontrolledTooltip>
                    <li className="list-inline-item edit" >
                      <span id="Verified" className="text-danger d-inline-block" onClick={e => setStatusData({ alert: true, id: 1, status: 1 })}>
                        <i className=" ri-close-circle-line  fs-16"></i>
                      </span>
                    </li>
                  </>
                  :
                  <>
                    <UncontrolledTooltip placement="bottom" target="UnVerified">
                      UnVerified
                    </UncontrolledTooltip>
                    <li className="list-inline-item edit" >
                      <span id="UnVerified" className="text-success d-inline-block" onClick={e => setStatusData({ alert: true, id: 1, status: 0 })}>
                        <i className="ri-checkbox-circle-line fs-16"></i>
                      </span>
                    </li>
                  </>
              }

            </ul>
          );
        },
      },
    ],
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Contacts" pageTitle="Contacts" location={true} />
          <Row>
            <Col lg={12}>
              <Card id="leadsList">
                <CardHeader className="border-0">
                  <Row className="g-0 align-items-center">
                    <Col sm={4}>
                      <div className="search-box">
                        <Input
                          type="text"
                          className="form-control search"
                          placeholder="Search for Contact"
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <div className="col-sm-auto ms-auto">
                      <div className="d-flex hstack gap-2 flex-wrap ">
                        <button type="button" className="btn btn-soft-info" onClick={toggleInfo}>
                          <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                          Fliters
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
                        isAddUserList={false}
                        customPageSize={8}
                        className="custom-header-css"
                        divClass="table-responsive table-card"
                        tableClass="align-middle table-nowrap"
                        theadClass="table-light"
                        // handleContactClick={handleContactClicks}
                        isContactsFilter={true}
                      />
                    ) :
                      // (<Loader error={error} />)
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
      <ContactFilter
        formData={formData}
        setFormData={setFormData}
        show={isInfoDetails}
        onCloseClick={() => setIsInfoDetails(false)}
      />
      <SweetAlert
        custom
        show={statusData.alert}
        btnSize="md"
        showCloseButton

        showCancel
        confirmBtnText="Ok"
        cancelBtnText="Cancel"
        confirmBtnBsStyle="primary"
        cancelBtnBsStyle="light"
        // title={statusData.status === 0 ? "User is Active" : "User is  InActive"}
        onConfirm={submit}
        onCancel={e => setStatusData({ alert: false, id: "", status: "" })}
      >
        Are you sure you want to do this action?
      </SweetAlert>
    </React.Fragment>
  );
};

export default Contact;
