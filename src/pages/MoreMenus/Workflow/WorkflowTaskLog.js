import React, { useMemo } from "react";
import { Offcanvas , OffcanvasHeader , OffcanvasBody} from "reactstrap";
import TableContainer from "../../../Components/Common/TableContainer";

const crmcontacts = [
  {
    id: 1,
    Workflow: "",
    Milestone: "",
    Task: "",
    DueDate: "",
    AssignedTo: "",
    Team: "",
    Status: "",
    Comment: "",
    Active: "",
    RubricNote: "",
    RubricNoteTitle: "",
    Reason: "",
    UpdatedBy: "",
    UpdatedDate: "",
  }
];


const WorkflowTaskLog = ({ show, onCloseClick }) => {

  crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });

  // Customber Column
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: 'serial'
      },
      {
        Header: "Workflow",
        accessor: "Workflow",
        filterable: false,
      },
      {
        Header: "Milestone",
        accessor: "Milestone",
        filterable: false,
      },
      {
        Header: "Task",
        accessor: "Task",
        filterable: false,
      },
      {
        Header: "Due Date",
        accessor: "DueDate",
        filterable: false,
      },
      {
        Header: "Assigned To",
        accessor: "AssignedTo",
        filterable: false,
      },
      {
        Header: "Team",
        accessor: "Team",
        filterable: false,
      },
      {
        Header: "Status",
        accessor: "Status",
        filterable: false,
      },
      {
        Header: "Comment",
        accessor: "Comment",
        filterable: false,
      },
      {
        Header: "Active",
        accessor: "Active",
        filterable: false,
      },
      {
        Header: "Rubric/Note",
        accessor: "RubricNote",
        filterable: false,
      },
      {
        Header: "Rubric/Note Title ",
        accessor: "RubricNoteTitle",
        filterable: false,
      },
      {
        Header: "Reason",
        accessor: "Reason",
        filterable: false,
      },
      {
        Header: "Updated By",
        accessor: "UpdatedBy",
        filterable: false,
      },
      {
        Header: "Updated Date",
        accessor: "UpdatedDate",
        filterable: false,
      }
    ],

  );

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-xl"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Workflow Task Log
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
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

export default WorkflowTaskLog;
