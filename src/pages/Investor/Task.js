import React, { useMemo } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Input,
} from "reactstrap";

import TableContainer from "../../Components/Common/TableContainer";

const crmcontacts = [
  {
    id: 1,
    CompanyCampaign: "K pvt ltd - Kola Idea 1",
    Date: "08/05/2023",
    Task: "Entrepreneur",
    Action: "Workflow task (1.1) Readiness for Deal review created by Smriti Misra. ",
  },
  {
    id: 2,
    CompanyCampaign: "K pvt ltd",
    Date: "08/05/2023",
    Task: "Personal Profile ",
    Action: "Personal profile marked as completed by Smriti Misra. ",
  }
];


const Task = ({ show, onCloseClick }) => {

  // Customber Column
  const columns = useMemo(
    () => [
      {
        Header: "Company Campaign",
        accessor: "CompanyCampaign",
        filterable: false,
      },
      {
        Header: "Date",
        accessor: "Date",
        filterable: false,
      },
      {
        Header: "Task",
        accessor: "Task",
        filterable: false,
      },
      // {
      //   Header: "Action",
      //   accessor: "Action",
      //   filterable: false,
      // },
      {
        Header: "Action",
        filterable: false,
        Cell: (cellProps) => {
            // console.log(cellProps.row.original.Action);
            return (
                <>
                    <div className="flex-grow-1 overflow-hidden" style={{ width: "200px" }}>
                        <p className="text-truncate mb-0">{cellProps.row.original.Action}</p>
                    </div>
                </>
            )
        },
    },
    ],

  );

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-md"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Task List
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <div className="mb-2">
            <div className="search-box">
              <Input
                type="text"
                className="form-control search"
                placeholder="Company/Campaign/Task/Action"
              />
              <i className="ri-search-line search-icon"></i>
            </div>
          </div>

          <div className="px-3 mt-3">
            {
              crmcontacts.length ? 
              <>
                    <TableContainer
                      columns={columns}
                      data={(crmcontacts || [])}
                      dataCount={crmcontacts.length}
                      // isGlobalFilter={true}
                      isAddUserList={false}
                      customPageSize={8}
                      className="custom-header-css"
                      divClass="table-responsive table-card mb-3"
                      tableClass="align-middle table-nowrap"
                      theadClass="table-light"
                      // handleContactClick={handleContactClicks}
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
        </OffcanvasBody>
      </form>
    </Offcanvas>
  );
};

export default Task;
