import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  CardHeader,
  Card,
  Col,
  Container,
  Row,
  Input,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  PaginationItem,
  Pagination,
  PaginationLink,
} from "reactstrap";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import AddWhatsAppTempModal from "./Modals/AddWhatsAppTempModal";

const data = [
  {
    id: 1,
    title: "Deep Dive Call",
    code: "deep_dive_call",
    updated: "Smriti Misra",
    date: "14/12/2023 11:56 AM",
  },
  {
    id: 2,
    title: "Angel Meeting",
    code: "angel_meeting",
    updated: "Smriti Misra",
    date: "14/12/2023 10:55 AM",
  },
  {
    id: 3,
    title: "Investment Opportunity",
    code: "investment_opportunity",
    updated: "Smriti Misra",
    date: "14/12/2023 05:14 PM",
  },
  {
    id: 4,
    title: "Final Commitment",
    code: "final_commitment",
    updated: "Smriti Misra",
    date: "14/12/2023 10:57 AM",
  },
  {
    id: 5,
    title: "Initial Commitment",
    code: "initial_commitment",
    updated: "Smriti Misra",
    date: "14/12/2023 01:29 PM",
  },
  {
    id: 6,
    title: "SCIP",
    code: "scip",
    updated: "Smriti Misra",
    date: "20/10/2023 04:19 PM",
  },
];

const WhatsappTemplate = () => {
  document.title = "SCIP | WhatsappTemplate";

  // Default Accordion

  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");
  const [fundingProposalEdit, setFundingProposalEdit] = useState({
    alert: false,
    id: "",
    status: "",
    ind: "",
    tabName: "",
  });
  const toggleModel = (name) => {
    setModelName(name);
  };

  const submit = () => {
    // console.log(fundingProposalEdit)
  };

  return (
    <>
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <BreadCrumb
              title="Manage WhatsApp Template"
              pageTitle="Manage WhatsApp Template"
            />
            <Row>
              <Card className="p-2 pb-4">
                <CardHeader className="border-0 px-2">
                  <Row className="g-0 align-items-center mb-0">
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
                        <button type="button" className="btn btn-brand-theme"  onClick={(e) => toggleModel("AddWhatsAppTempModal")}>
                          <i className="ri-add-line align-bottom me-1"></i>
                          Add Type
                        </button>
                      </div>
                    </div>
                  </Row>
                </CardHeader>

                <div className="table-responsive table-card mt-1 px-4">
                  <table className="table align-middle table-nowrap table-striped-columns mb-0">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Code</th>
                        <th scope="col">Updated By</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.length &&
                        data.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.title}</td>
                              <td>{item.code}</td>
                              <td>{item.updated}</td>
                              <td>{item.date}</td>
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
                                          <i className="ri-edit-box-line fs-20 align-middle me-1"></i>{" "}
                                          Edit
                                        </DropdownItem>
                                        <DropdownItem
                                          onClick={(e) =>
                                            setFundingProposalEdit({
                                              alert: true,
                                              id: 1,
                                              status: 0,
                                              ind: "",
                                              tabName: "campaign",
                                            })
                                          }
                                        >
                                          <i className="ri-checkbox-circle-line fs-20 align-middle me-1"></i>{" "}
                                          Deactivate
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </UncontrolledDropdown>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <div className="gridjs-footer mt-4 px-2">
                  <div className="gridjs-pagination">
                    <div className="gridjs-summary" title="Total Count">
                      Total Count : 6
                    </div>
                    <div className="gridjs-pages">
                      <Pagination
                        className="mb-0"
                        style={{ marginBottom: "0" }}
                      >
                        <PaginationItem>
                          <PaginationLink first href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" previous />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink className="active" href="#">
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" next />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink last href="#" />
                        </PaginationItem>
                      </Pagination>
                    </div>
                  </div>
                </div>
              </Card>
            </Row>
          </Container>

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
            onCancel={(e) =>
              setFundingProposalEdit({
                alert: false,
                id: "",
                status: "",
                ind: "",
                tabName: "",
              })
            }
          >
            Are you sure you want to do this action
          </SweetAlert>
        </div>


        <AddWhatsAppTempModal
          modelName={modelName}
          toggleModel={toggleModel}
          show={modelName === "AddWhatsAppTempModal" ? true : false}
          onCloseClick={() => setModelName("")}
        />

      </React.Fragment>
    </>
  );
};

export default WhatsappTemplate;
