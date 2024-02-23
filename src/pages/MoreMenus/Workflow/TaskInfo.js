import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Input,
} from "reactstrap";

import TableContainer from "../../../Components/Common/TableContainer";

const crmcontacts = [
  {
    id: 1,
    Checklist: "",
    Comment: "",
    Checked: "No",
    AddedBy: "",
    AddedBy: "",
  }
];


const TaskInfo = ({ show, onCloseClick }) => {

  crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });

  // Customber Column
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: 'serial'
      },
      {
        Header: "Checklist",
        accessor: "Checklist",
        filterable: false,
      },
      {
        Header: "Comment",
        accessor: "Comment",
        filterable: false,
      },
      {
        Header: "Checked",
        accessor: "Checked",
        filterable: false,
      },
      {
        Header: "Added By",
        accessor: "AddedBy",
        filterable: false,
      },
      {
        Header: "Date",
        accessor: "Date",
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
      className="size-md"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Task Info
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

export default TaskInfo;
