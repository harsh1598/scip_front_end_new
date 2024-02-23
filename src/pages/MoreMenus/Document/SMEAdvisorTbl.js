import React, { useMemo  } from "react";
import TableContainer from "../../../Components/Common/TableContainer";
import { Link } from "react-router-dom";

const crmcontacts = [
    {
        id: 1,
        name: "Ratna P",
        date: "04/05/2023",
        download:""
    },
    {
        id: 2,
        name: "Dinesh K",
        date: "05/06/2023",
        download:""
    },
    {
        id: 3,
        name: "Jacdon Duby",
        date: "06/07/2023",
        download:""
    }
];

const SMEAdvisorTbl = () => {

    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "Document Name",
                accessor: "name",
                filterable: false,
            },
            {
                Header: "Update Date",
                accessor: "date",
                filterable: false,
            },
            {
                Header: "",
                accessor: "download",
                filterable: false,
                Cell: (data) => (
                  <>
                    <Link>(Download The Existing File)</Link>
                  </>
                ),
            },
        ],

    );

    return (
        <React.Fragment>
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

export default SMEAdvisorTbl;
