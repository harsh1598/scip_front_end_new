import React, { useState } from "react";
import { ProjectName } from "../../Components/constants/layout";
import { Col, Container, Row, Card, CardBody, Input, Label, CardHeader } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import TableContainer from "../../Components/Common/TableContainer";
import { useMemo } from "react";
import KYCFilter from "./Filter";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddFilingReport from "./AddFilingReport";

const crmcontacts = [
    {
        id: 1,
        name: "AJ pvt ltd (AJ)",
    },
    {
        id: 2,
        name: "Aman enterprise (Aman)",
    },
    {
        id: 3,
        name: "Camkper (Product of europe 8765)",
    },
    {
        id: 4,
        name: "Comic Co 12 (Comix 1)",
    },
    {
        id: 5,
        name: "deep pvt ltd (deep@99)",
    },
    {
        id: 6,
        name: "DHT Enterprise (Dhara)",
    },
    {
        id: 7,
        name: "Durgesh corporate (durg tyers)",
    },
    {
        id: 8,
        name: "Fliptop Pvt Ltd (Flip@top11)",
    },
    {
        id: 9,
        name: "Go Fashion India Limited (Go Colourss)",
    },
    {
        id: 10,
        name: "Innovapptive (Innovapptive)",
    }
];

const PortfolioReporting = () => {

    const [formData, setFormData] = useState({});
    const [modelName, setModelName] = useState({ name: "" });

    const toggle = (name) => {
        setModelName({ name: name });
    };

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
    }

    var result = Object.keys(formData).map((key) => [key, formData[key]]);

    document.title = `${ProjectName} | Portfolio Reporting `;

    const columns = useMemo(
        () => [
            {
                Header: "Company",
                accessor: "name",
                filterable: false,
                Cell: (data) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 ms-2 name" >
                                <Link to="" className="fw-medium">{data.row.original.name}</Link>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                Header: "2023/08",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow" onClick={e => toggle('AddFilingReport')}> <i className="ri-add-line align-middle"></i></button>
                                </>
                                :
                                <>
                                    <button className="btn btn-light btn-md dropdow" onClick={e => toggle('NoFile')}> <i className="ri-add-line align-middle" ></i></button>
                                </>
                        }
                    </>
                ),
            },
            {
                Header: "2023/07",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow" onClick={e => toggle('AddFilingReport')}> <i className="ri-add-line align-middle"></i></button>
                                </>
                                :
                                <>
                                    <button className="btn btn-light btn-md dropdow" onClick={e => toggle('NoFile')}> <i className="ri-add-line align-middle" ></i></button>
                                </>
                        }
                    </>
                ),
            },
            {
                Header: "2023/06",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow" onClick={e => toggle('AddFilingReport')}> <i className="ri-add-line align-middle"></i></button>
                                </>
                                :
                                <>
                                    <button className="btn btn-light btn-md dropdow" onClick={e => toggle('NoFile')}> <i className="ri-add-line align-middle" ></i></button>
                                </>
                        }
                    </>
                ),
            },
            {
                Header: "2023/05",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow" onClick={e => toggle('AddFilingReport')}> <i className="ri-add-line align-middle"></i></button>
                                </>
                                :
                                <>
                                    <button className="btn btn-light btn-md dropdow" onClick={e => toggle('NoFile')}> <i className="ri-add-line align-middle" ></i></button>
                                </>
                        }
                    </>
                ),
            },
            {
                Header: "2023/04",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow" onClick={e => toggle('AddFilingReport')}> <i className="ri-add-line align-middle"></i></button>
                                </>
                                :
                                <>
                                    <button className="btn btn-light btn-md dropdow" onClick={e => toggle('NoFile')}> <i className="ri-add-line align-middle" ></i></button>
                                </>
                        }
                    </>
                ),
            },
            {
                Header: "2023/03",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow" onClick={e => toggle('AddFilingReport')}> <i className="ri-add-line align-middle"></i></button>
                                </>
                                :
                                <>
                                    <button className="btn btn-light btn-md dropdow" onClick={e => toggle('NoFile')}> <i className="ri-add-line align-middle" ></i></button>
                                </>
                        }
                    </>
                ),
            },
            {
                Header: "2023/02",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow" onClick={e => toggle('AddFilingReport')}> <i className="ri-add-line align-middle"></i></button>
                                </>
                                :
                                <>
                                    <button className="btn btn-light btn-md dropdow" onClick={e => toggle('NoFile')}> <i className="ri-add-line align-middle" ></i></button>
                                </>
                        }
                    </>
                ),
            },
            {
                Header: "2023/01",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow" onClick={e => toggle('AddFilingReport')}> <i className="ri-add-line align-middle"></i></button>
                                </>
                                :
                                <>
                                    <button className="btn btn-light btn-md dropdow" onClick={e => toggle('NoFile')}> <i className="ri-add-line align-middle" ></i></button>
                                </>
                        }
                    </>
                ),
            },
            {
                Header: "2022/12",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow" onClick={e => toggle('AddFilingReport')}> <i className="ri-add-line align-middle"></i></button>
                                </>
                                :
                                <>
                                    <button className="btn btn-light btn-md dropdow" onClick={e => toggle('NoFile')}> <i className="ri-add-line align-middle" ></i></button>
                                </>
                        }
                    </>
                ),
            },
            {
                Header: "2022/11",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow" onClick={e => toggle('AddFilingReport')}> <i className="ri-add-line align-middle"></i></button>
                                </>
                                :
                                <>
                                    <button className="btn btn-light btn-md dropdow" onClick={e => toggle('NoFile')}> <i className="ri-add-line align-middle" ></i></button>
                                </>
                        }
                    </>
                ),
            },
            {
                Header: "2022/10",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow" onClick={e => toggle('AddFilingReport')}> <i className="ri-add-line align-middle"></i></button>
                                </>
                                :
                                <>
                                    <button className="btn btn-light btn-md dropdow" onClick={e => toggle('NoFile')}> <i className="ri-add-line align-middle" ></i></button>
                                </>
                        }
                    </>
                ),
            },
            {
                Header: "2022/09",
                filterable: false,
                Cell: (data) => (
                    <>
                        {
                            formData.file ?
                                <>
                                    <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle" onClick={e => toggle('AddFilingReport')}></i></button>
                                </>
                                :
                                <>

                                    <button className="btn btn-light btn-md dropdow"> <i className="ri-add-line align-middle" onClick={e => toggle('NoFile')}></i></button>
                                </>
                        }
                    </>
                ),
            }
        ],
    );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Portfolio Reporting" pageTitle="Portfolio Reporting" />
                    {
                        modelName.name == 'NoFile' &&
                        <>
                            {toast("Please select a file.", { position: "top-center", hideProgressBar: false, className: 'bg-primary text-white', progress: undefined, toastId: "" })}
                            <ToastContainer autoClose={2000} limit={1} />
                        </>
                    }
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center mb-2">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input
                                                    type="text"
                                                    className="form-control search"
                                                    placeholder="Company / Brand / User"
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="d-flex hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggle('Filter')}>
                                                    <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                                                    Filters
                                                </button>
                                                {
                                                    formData.file ?
                                                        <>
                                                            <button type="button" className="btn btn-soft-info" onClick={e => toggle('AddFilingReport')}>
                                                                <i className="ri-add-line align-bottom me-1"></i>{" "}
                                                                All Portfolio
                                                            </button>
                                                        </>
                                                        :
                                                        <>
                                                            <button type="button" className="btn btn-soft-info" onClick={e => toggle('NoFile')}>
                                                                <i className="ri-add-line align-bottom me-1"></i>{" "}
                                                                All Portfolio
                                                            </button>
                                                        </>
                                                }

                                            </div>
                                        </div>

                                    </Row>
                                </CardHeader>
                                <CardBody className="pt-0">
                                {/* <div className="bg-soft-light border-top-dashed border   border-bottom-dashed py-1  px-4 mb-2 ">
                                    <Row>
                                        <Col lg={3} sm={6}>
                                        <div className="badge rounded-pill bg-secondary fs-12">Add</div> 
                                        </Col>
                                        <Col lg={3} sm={6}>
                                        <div className="badge rounded-pill bg-warning fs-12">WIP</div> 
                                        </Col>
                                        <Col lg={3} sm={6}>
                                        <div className="badge rounded-pill bg-info fs-12">Submited</div> 
                                        </Col>
                                        <Col lg={3} sm={6}>
                                        <div className="badge rounded-pill bg-success fs-12">Reviewed</div> 
                                        </Col>
                                    </Row>
                                </div> */}
                                <div className="bg-soft-light border-top-dashed border   border-bottom-dashed py-1  px-4 mb-2 ">
                                        <div className="hstack gap-4 justify-content-center">
                                            {/* <button className="btn badge rounded-pill bg-secondary fs-12">Add</button> */}
                                            <button className="btn badge rounded-pill bg-warning fs-12">WIP</button>
                                            <button className="btn badge rounded-pill bg-info fs-12">Submited</button>
                                            <button className="btn badge rounded-pill bg-success fs-12">Reviewed</button>
                                        </div>
                                    </div>
                                    {/* <div className="table-responsive table-card mb-2">
                                        <table className="table table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">
                                                        <button className="btn btn-secondary btn-sm dropdow"> <i className="ri-add-line me-2"></i>Add</button>
                                                    </th>
                                                    <th scope="col">
                                                        <button className="btn btn-warning rounded-pill  btn-sm "> WIP</button>
                                                    </th>
                                                    <th scope="col">
                                                        <button className="btn btn-info rounded-pill  btn-sm "> Submited</button>
                                                    </th>
                                                    <th scope="col">
                                                    <i className="ri-star-line me-2"></i>
                                                        <button className="btn btn-success rounded-pill btn-sm "> Reviewed</button>
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div> */}
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
                                    <div>
                                        {crmcontacts.length ? (
                                            <TableContainer
                                                columns={columns}
                                                data={(crmcontacts || [])}
                                                dataCount={crmcontacts.length}
                                                isAddUserList={false}
                                                customPageSize={8}
                                                className="custom-header-css"
                                                divClass="table-responsive table-card mb-3 text-center"
                                                tableClass="align-middle table-nowrap"
                                                theadClass="table-light"
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
            <KYCFilter  formData={formData}
                setFormData={setFormData}
                show={modelName.name == 'Filter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <AddFilingReport
                formData={formData}
                setFormData={setFormData}
                show={modelName.name == 'AddFilingReport' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default PortfolioReporting;
