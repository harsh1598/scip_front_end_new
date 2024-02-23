import React from "react";
import { ProjectName } from "../../Components/constants/layout";
import { Col, Container, Row, Card, CardBody, Input, CardHeader } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import TableContainer from "../../Components/Common/TableContainer";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
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

const PortfolioCall = () => {

    document.title = `${ProjectName} | Portfolio Call`;

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
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            },
            {
                Header: "2023/07",
                filterable: false,
                Cell: (data) => (
                    <>
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            },
            {
                Header: "2023/06",
                filterable: false,
                Cell: (data) => (
                    <>
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            },
            {
                Header: "2023/05",
                filterable: false,
                Cell: (data) => (
                    <>
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            },
            {
                Header: "2023/04",
                filterable: false,
                Cell: (data) => (
                    <>
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            },
            {
                Header: "2023/03",
                filterable: false,
                Cell: (data) => (
                    <>
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            },
            {
                Header: "2023/02",
                filterable: false,
                Cell: (data) => (
                    <>
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            },
            {
                Header: "2023/01",
                filterable: false,
                Cell: (data) => (
                    <>
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            },
            {
                Header: "2022/12",
                filterable: false,
                Cell: (data) => (
                    <>
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            },
            {
                Header: "2022/11",
                filterable: false,
                Cell: (data) => (
                    <>
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            },
            {
                Header: "2022/10",
                filterable: false,
                Cell: (data) => (
                    <>
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            },
            {
                Header: "2022/09",
                filterable: false,
                Cell: (data) => (
                    <>
                        <button className="btn btn-soft-secondary btn-md dropdow"> <i className="ri-add-line align-middle"></i></button>
                    </>
                ),
            }
        ],
    );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Portfolio Call" pageTitle="Portfolio Call" />
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
                                        {/* <div className="col-sm-auto ms-auto">
                                            <div className="d-flex hstack gap-2 flex-wrap">
                                                <button  type="button" className="btn btn-secondary">
                                                    <i className="ri-add-line  align-bottom me-1"></i>{" "}
                                                    Reviewed
                                                </button>
                                                <button  type="button" className="btn btn-success" >
                                                    <i className="ri-star-line align-bottom me-1"></i>{" "}
                                                    Call Scheduled
                                                </button>
                                            </div>
                                        </div> */}
                                    </Row>
                                </CardHeader>
                                <CardBody className="pt-0">
                                    <div className="bg-soft-light border-top-dashed border   border-bottom-dashed py-1  px-4 mb-2 ">
                                        <div className="hstack gap-4 justify-content-center">
                                            <button className="btn badge rounded-pill bg-secondary fs-12">Call Scheduled</button>
                                            <button className="btn badge rounded-pill bg-success fs-12"> Schedule a call</button>
                                        </div>
                                    </div>
                                    <div>
                                        {crmcontacts.length ? (
                                            <TableContainer
                                                columns={columns}
                                                data={(crmcontacts || [])}
                                                dataCount={crmcontacts.length}
                                                isAddUserList={false}
                                                customPageSize={8}
                                                className="custom-header-css"
                                                divClass="table-responsive table-card mb-3"
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
        </React.Fragment>
    );
};

export default PortfolioCall;
