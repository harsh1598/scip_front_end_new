import React, { useMemo } from "react";
import TableContainer from "../../../../Components/Common/TableContainer";

const SecondaryMarket = () => {

    const crmcontacts = [
        {
            id: 1,
            companyCampaignName: "Watcon Seed - Survya Co",
            sellerName: "Shobanaa Anand",
            noOfDays: "662",
        },
        {
            id: 1,
            companyCampaignName: "Planta Series A 2 - Utava Co",
            sellerName: "Shobanaa Anand",
            noOfDays: "662",
        },
    ];

    crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });

    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "#",
                accessor: 'serial'
            },
            {
                Header: "Company & Campaign name",
                accessor: "companyCampaignName",
                filterable: false,
            },
            {
                Header: "Seller Name",
                accessor: "sellerName",
                filterable: false,
            },
            {
                Header: "No. of days since it is listed",
                accessor: "noOfDays",
                filterable: false,
            }
        ],
    );

    return (
        <React.Fragment>
            <div className="px-3 mt-1">
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

export default SecondaryMarket;
