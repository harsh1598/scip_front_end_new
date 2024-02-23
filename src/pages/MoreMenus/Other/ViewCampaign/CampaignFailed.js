import React, { useMemo } from "react";
import TableContainer from "../../../../Components/Common/TableContainer";

const CampaignFailed = () => {

    const crmcontacts = [
        {
            id: 1,
            companyCampaignName: "metallic Angel 1 - metal356",
            entrepreneurName: "metal pt",
            startDate: "24/07/2023",
            endDate: " 24/07/2023",
            amountRaised: "6,56,75,665 EUR",
            amountRequired: "6,56,75,665 EUR",
        },
        {
            id: 1,
            companyCampaignName: "Tco Seed 1 - Test Company",
            entrepreneurName: "Ratna P",
            startDate: "24/07/2023",
            endDate: " 24/07/2023",
            amountRaised: "2,30,00,000 GBP",
            amountRequired: "6,56,75,665 EUR",
        },  
        {
            id: 1,
            companyCampaignName: "Rapido Seed 1 - Rapido",
            entrepreneurName: "Suresh M",
            startDate: "24/07/2023",
            endDate: " 24/07/2023",
            amountRaised: "11,42,265.5 INR",
            amountRequired: "6,56,75,665 EUR",
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
                Header: "Entrepreneur Name",
                accessor: "entrepreneurName",
                filterable: false,
            },
            {
                Header: "Start Date",
                accessor: "startDate",
                filterable: false,
            },
            {
                Header: "End Date",
                accessor: "endDate",
                filterable: false,
            },
            {
                Header: "Amount Raised",
                accessor: "amountRaised",
                filterable: false,
            },
            {
                Header: "Amount Required to Raise",
                accessor: "amountRequired",
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

export default CampaignFailed;
