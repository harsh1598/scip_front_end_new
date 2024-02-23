import React, { useCallback, useMemo } from "react";
import TableContainer from "../../../../Components/Common/TableContainer";
import { Input } from "reactstrap";

const crmcontacts = [
    {
        id: 1,
        document: "NDA with SCIP",
        status: 0
    },
    {
        id: 2,
        document: "Management Contract",
        status: 0
    },
    {
        id: 3,
        document: "Non Disclosure Agreement for Investor",
        status: 0
    },
    {
        id: 4,
        document: "Participation and Shareholders Agreement",
        status: 0
    },
    {
        id: 5,
        document: "Investment Memorandum",
        status: 0
    },
    {
        id: 6,
        document: "Banker to the Issue",
        status: 0
    },
    {
        id: 7,
        document: "Pitch Document",
        status: 0
    },
    {
        id: 8,
        document: "Investor Presentation",
        status: 0
    },
    {
        id: 9,
        document: "Prepare docs as per the requirements of business",
        status: 0
    },
];

const EntrepreneurTbl = ({ }) => {

    // Checked All
    const checkedAll = useCallback(() => {
        const checkall = document.getElementById("checkBoxAll");
        const ele = document.querySelectorAll(".leadsCheckBox");
        if (checkall.checked) {
            ele.forEach((ele) => {
                ele.checked = true;
            });
        } else {
            ele.forEach((ele) => {
                ele.checked = false;
            });
        }
    }, []);

    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: <div className="form-check"><input type="checkbox" id="checkBoxAll" className="form-check-input" onClick={() => checkedAll()} /></div>,
                Cell: (cellProps) => {
                    return <div className="form-check">
                        <Input type="checkbox" className="leadsCheckBox form-check-input" value={cellProps.row.original.id} />
                    </div>
                },
                id: '#',
            },
            {
                Header: "All Documents",
                accessor: "document",
                filterable: false,
            },
            {
                Header: "Status",
                Cell: (allData) => {
                    let data = allData.row.original.status;
                    return (
                        <>
                            {
                                data === 0 ?
                                <>
                                    <span>
                                        <i className="ri-check-line align-middle me-1"></i>
                                    </span>
                                </>
                                :
                                <>
                                <span>
                                    <i className="ri-close-line align-middle me-1"></i>
                                </span>
                            </>
                            }
                        </>
                    );
                },
            },
        ],
        [checkedAll]
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

export default EntrepreneurTbl;
