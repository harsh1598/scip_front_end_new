import React, { useMemo } from "react";
import { ProjectName } from "../../Components/constants/layout";
import {
    Col,
    Card,
    CardBody,
    Container,
    Row,
    Input,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import TableContainer from "../../Components/Common/TableContainer";

const crmcontacts = [
    {
        id: 1,
        investorName: "K pvt ltd - Kola Idea 1",
        compnayName: "08/05/2023",
        CampaignName: "Entrepreneur",
        TotalValue: "Personal profile completed.  ",
        UpdatedDate: "K pvt ltd - Kola Idea 1",
        TransactionDate: "08/05/2023",
    }
];

const More = () => {
    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "Investor Name",
                accessor: "investorName",
                filterable: false,
            },
            {
                Header: "Company Name",
                accessor: "compnayName",
                filterable: false,
            },
            {
                Header: "Campaign Name",
                accessor: "CampaignName",
                filterable: false,
            },
            {
                Header: "Total Value",
                accessor: "TotalValue",
                filterable: false,
            },
            {
                Header: "Updated Date",
                accessor: "UpdatedDate",
                filterable: false,
            },
            {
                Header: "Transaction Date",
                accessor: "TransactionDate",
                filterable: false,
            }
        ],

    );

    // document.title = " More Info | Velzon - React Admin & Dashboard Template";
    document.title = `${ProjectName} | More Info `;

    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <BreadCrumb title=" More Info" pageTitle=" More Info" location="/sme-Advisor" />
                    <Row>
                        <Col lg={12}>
                            <Card id="company-view-detail">
                                {/* <CardHeader>
                                    <div className="offcanvas-footer text-center hstack gap-2 justify-content-start">
                                        <Link to="/sme-Advisor" className="btn btn-light"><i className="      ri-arrow-left-s-line align-bottom me-1"></i> {''} Back</Link>
                                    </div>
                                </CardHeader> */}
                                <CardBody className="">
                                    <Row>
                                        <Col lg={4}>
                                            <div className="mb-2">
                                                <div className="search-box">
                                                    <Input
                                                        type="text"
                                                        className="form-control search"
                                                        placeholder="Search"
                                                    />
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                            </div>
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">

                                                <button type="button" className="btn btn-soft-info">
                                                    <i className="mdi mdi-export  align-bottom me-1"></i>{" "}
                                                    Export
                                                </button>
                                            </div>
                                        </div>
                                    </Row>

                                    <div className="px-3 mt-3">
                                        {
                                            crmcontacts.length ?
                                            <>
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
                                            </>
                                            :
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

export default More;
