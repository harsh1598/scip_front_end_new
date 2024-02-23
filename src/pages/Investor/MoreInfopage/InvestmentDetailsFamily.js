import React, { useMemo, useState } from "react";
import { ProjectName } from "../../../Components/constants/layout";
import { Row } from "reactstrap";
import TableContainer from "../../../Components/Common/TableContainer";
import ViewModal from "../../../Components/Common/ViewModal";

const crmcontacts = [
    {
        id: 1,
        Name: "lorem ipsum",
        Relationship: "Mother",
        email: "kk@yopmail.com",
        panCard: "465656",
        proof: "",
        date: "08/05/2023",
        UserCode: "FAM0019",
    },
    {
        id: 2,
        Name: "lorem ipsum",
        Relationship: "Mother",
        email: "kk@yopmail.com",
        panCard: "465656",
        proof: "",
        date: "08/05/2023",
        UserCode: "FAM0019",
    },
    {
        id: 3,
        Name: "lorem ipsum",
        Relationship: "Mother",
        email: "kk@yopmail.com",
        panCard: "465656",
        proof: "u4bfhfb",
        date: "08/05/2023",
        UserCode: "FAM0019",
    },
    {
        id: 4,
        Name: "lorem ipsum",
        Relationship: "Mother",
        email: "kk@yopmail.com",
        panCard: "465656",
        proof: "u4bfhfb",
        date: "08/05/2023",
        UserCode: "FAM0019",
    },
    {
        id: 5,
        Name: "lorem ipsum",
        Relationship: "Mother",
        email: "kk@yopmail.com",
        panCard: "465656",
        proof: "u4bfhfb",
        date: "08/05/2023",
        UserCode: "FAM0019",
    },
    {
        id: 6,
        Name: "lorem ipsum",
        Relationship: "Mother",
        email: "kk@yopmail.com",
        panCard: "465656",
        proof: "u4bfhfb",
        date: "08/05/2023",
        UserCode: "FAM0019",
    }
];

const InvestmentDetailsFamily = () => {

    const [data, setData] = useState({ show: false, id: ""});

    const toggle = () => {

    }
    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "Name",
                filterable: false,
            },
            {
                Header: "Relationship",
                accessor: "Relationship",
                filterable: false,
            },
            {
                Header: "Email / Phone No",
                accessor: "email",
                filterable: false,
            },
            {
                Header: "Pan Card No",
                accessor: "panCard",
                filterable: false,
            },
            {
                Header: "Proof of Address",
                Cell: (data) => (
                    <>
                        <p className="mb-0">{data.row.original.proof}</p>
                        {
                            data.row.original.proof &&
                            <p className="text-muted mb-0"> <span className="badge badge-soft-primary me-1 btn" onClick={e => setData({ show: true, id: 1})}>View</span></p>
                        }
            
                    </>
                  ),
            },
            {
                Header: "Updated Date",
                accessor: "date",
                filterable: false,
            },
            {
                Header: "User Code",
                accessor: "UserCode",
                filterable: false,
            }
        ],

    );

    document.title = `${ProjectName} | Investment Details Family `;

    return (
        <React.Fragment>
            <ViewModal
                show={data.show}
                onCloseClick={() => setData({ show: false, id: ""})}
            />
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

export default InvestmentDetailsFamily;
