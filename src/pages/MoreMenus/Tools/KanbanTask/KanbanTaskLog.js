import React, { useMemo } from "react";
import { Col, Container, Row, CardHeader, Card, Input} from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import TableContainer from "../../../../Components/Common/TableContainer";

const KanbanTaskLog = () => {

    document.title = `${ProjectName} | Task Log`;

    const crmcontacts = [
        {
            id: 1,
            milestone: "Post Investment monitoring",
            title: "Track CS",
            priority: "MEDIUM",
            dueDate: "08/02/2020",
            status: "PENDING",
            updatedBy: "Smriti Misra",
            updatedDate: "18/08/2023 10:02"
        },
    ];

    crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });

    // Customber Column
    const columns = useMemo(
        () => [
            // {
            //     Header: "#",
            //     accessor: 'serial'
            // },
            {
                Header: "Milestone",
                accessor: "milestone",
                filterable: false,
            },
            {
                Header: "Title",
                accessor: "title",
                filterable: false,
            },
            {
                Header: "Priority",
                accessor: "priority",
                filterable: false,
                Cell: (data) => {
                    let priority = data.row.original.priority;
                    return (
                        <>
                            <span className={priority === "MEDIUM" ? "badge badge-soft-warning fs-12" : ""}>{priority}</span>
                        </>
                    )
                },
            },
            {
                Header: "Due Date",
                accessor: "dueDate",
                filterable: false,
            },
            {
                Header: "Status",
                accessor: "status",
                filterable: false,
                Cell: (data) => {
                    let status = data.row.original.status;
                    return (
                        <>
                            <span className={status === "PENDING" ? "badge badge-soft-primary fs-12" : "badge badge-soft-success fs-12"}>{status}</span>
                        </>
                    )
                },
            },
            {
                Header: "Updated By",
                accessor: "updatedBy",
                filterable: false,
            },
            {
                Header: "Updated Date",
                accessor: "updatedDate",
                filterable: false,
            },
        ],

    );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title=" Kanban Task Log" pageTitle=" Kanban Task Log" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center">
                                        <Col sm={4}>
                                            {/* <div className="search-box">
                                                <Input
                                                    type="text"
                                                    className="form-control search"
                                                    placeholder="Search"
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div> */}
                                        </Col>
                                        {/* <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('KanbanTaskFilter')}>
                                                    <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                                                    Filters
                                                </button>
                                            </div>
                                        </div> */}
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
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default KanbanTaskLog;
