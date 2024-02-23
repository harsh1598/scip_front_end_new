import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  Label,
  Input,
  PaginationItem,
  Pagination,
  PaginationLink,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ModuleFilters from "./Models/ModuleFilters";

const Index = () => {
  const toggleModel = (name) => {
    setModelName(name);
  };

  const [shareRegister, setShareRegister] = useState({ status: "Yes" });
  const [salesTracker, setSalesTracker] = useState({ status: "No" });

  const toggleRadio = (name, status) => {
    if (name == "shareRegister") {
      setShareRegister({ status: status });
    } else {
      setSalesTracker({ status: status });
    }
  };

  const [modelName, setModelName] = useState("");
  const [profileData, setProfileData] = useState({
    alert: false,
    id: "",
    status: "",
  });

  const [statusData, setStatusData] = useState({
    alert: false,
    id: "",
    status: "",
  });

  const submit = () => {
    // console.log(statusData)
  };

  const data = [
    {
      id: 1,
      columntitle: "User Code",
      page: "Entrepreneur",
    },
    {
      id: 2,
      columntitle: "User Name",
      page: "Entrepreneur",
    },
    {
      id: 3,
      columntitle: "Company / Brand",
      page: "Entrepreneur",
    },
    {
      id: 5,
      columntitle: "Company Stage",
      page: "Entrepreneur",
    },
    {
      id: 6,
      columntitle: "Email Id",
      page: "Entrepreneur",
    },
    {
      id: 7,
      columntitle: "Contact No",
      page: "Entrepreneur",
    },
    {
      id: 8,
      columntitle: "Registration Date",
      page: "Entrepreneur",
    },
    {
      id: 9,
      columntitle: "Submission Date",
      page: "Entrepreneur",
    },
    {
      id: 10,
      columntitle: "Campaign Status",
      page: "Entrepreneur",
    },
    {
      id: 11,
      columntitle: "Sector",
      page: "Entrepreneur",
    },
    {
      id: 12,
      columntitle: "Registered Office",
      page: "Entrepreneur",
    },
    {
      id: 13,
      columntitle: "Headquarters",
      page: "Entrepreneur",
    },
    {
      id: 14,
      columntitle: "Company Website",
      page: "Entrepreneur",
    },
    {
      id: 15,
      columntitle: "Company Founded",
      page: "Entrepreneur",
    },
    {
      id: 15,
      columntitle: "Round Of Investment",
      page: "Entrepreneur",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Manage User Modules"
            pageTitle="Syndicate"
            location="/syndicate"
          />
          <Row>
            <Col lg={12}>
              <Card id="leadsList">
                <CardHeader className="border-0">
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
                          class="btn btn-soft-info"
                          id="ModuleFilters"
                          onClick={(e) => toggleModel("ModuleFilters")}
                        >
                          <i class="ri-filter-2-line align-bottom me-1"></i>
                          Filters
                        </button>
                      </div>
                    </div>
                  </Row>

                  <div className="table-responsive table-card mt-3">
                    <table className="table align-middle table-nowrap table-striped-columns mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Column Title</th>
                          <th scope="col">Page</th>
                          <th scope="col" style={{ width: "150px" }}>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.length &&
                          data.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.columntitle}</td>
                                <td>{item.page}</td>
                                <td>
                                  <div
                                    className="btn-group p-1 mt-2"
                                    role="group"
                                    aria-label="Basic radio toggle button group"
                                  >
                                    <Label
                                      htmlFor="name-field"
                                      className="form-label me-2 mt-1"
                                    >
                                     
                                    </Label>

                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="shareRegister"
                                      id="btnradio2"
                                      autoComplete="off"
                                      onClick={(e) =>
                                        toggleRadio("shareRegister", "Yes")
                                      }
                                    />
                                    <label
                                      className={
                                        shareRegister.status === "Yes"
                                          ? "btn btn-sm btn-soft-danger waves-effect active"
                                          : "btn btn-sm btn-light waves-effect "
                                      }
                                      htmlFor="btnradio2"
                                      title="Share register"
                                    >
                                      No
                                    </label>

                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="shareRegister"
                                      id="btnradio3"
                                      autoComplete="off"
                                      onClick={(e) =>
                                        toggleRadio("shareRegister", "No")
                                      }
                                    />
                                    <label
                                      className={
                                        shareRegister.status === "No"
                                          ? "btn btn-sm btn-success waves-effect active"
                                          : "btn btn-sm btn-light waves-effect "
                                      }
                                      htmlFor="btnradio3"
                                      title="Share register"
                                    >
                                      Yes
                                    </label>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  <div className="gridjs-footer mt-4">
                    <div className="gridjs-pagination">
                      <div className="gridjs-summary" title="Total Count">
                        Total Count : 1
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
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <ModuleFilters
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "ModuleFilters" ? true : false}
        onCloseClick={() => setModelName("")}
      />
    </React.Fragment>
  );
};

export default Index;
