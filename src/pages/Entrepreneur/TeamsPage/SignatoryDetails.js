import React, { useMemo, useState } from "react";
import { ProjectName } from "../../../Components/constants/layout";
import { Row } from "reactstrap";
import TableContainer from "../../../Components/Common/TableContainer";
import { Link } from "react-router-dom";

const crmcontacts = [
    {
        id: 1,
        Name: "lorem ipsum",
        email: "kk@yopmail.com",
        phone: "465656454",
        date: "08/05/2023",
    }
];

const SignatoryDetails = () => {

    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "Name",
                filterable: false,
            },
            {
                Header: "Email",
                accessor: "email",
                filterable: false,
            },
            {
                Header: "Phone",
                accessor: "phone",
                filterable: false,
            },
            {
                Header: "Document",
                Cell: () => (
                    <>
                        <Link className="mb-0">Download</Link>
                    </>
                  ),
            },
            {
                Header: "Updated Date",
                accessor: "date",
                filterable: false,
            }
        ],

    );

    return (
        <React.Fragment>
            <Row>
                <div className="col-sm-auto ms-auto">
                    <div className="hstack gap-2 flex-wrap">
                        <button type="button" className="btn btn-soft-info">
                            <i className="ri-edit-box-line align-bottom me-1"></i>{" "}
                            Edit
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
        </React.Fragment>
    );
};

export default SignatoryDetails;
