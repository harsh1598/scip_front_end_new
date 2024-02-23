import React, { useMemo } from "react";

import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Input,
} from "reactstrap";

import TableContainer from "../../Components/Common/TableContainer";
import { Link } from "react-router-dom";

const crmcontacts = [
  {
    id: 1,
    name: "Abhaya Kumar Shankar",
    Investment: "Abhaya Kumar Shankar",
    Membership: "Individual",
    Folio: " ",
    Instrument: "Equity",
    NumberofInstruments: "",
    PricePerInstrument: "200 USD ",
    TotalValue: "4,00,000 USD",
    RetainedValue: "",
    ShareDoc: "",
    InvestmentDate: "08/05/2023",
    UpdatedDate: "08/05/2023 ",
  }
];


const ListTable = ({ show, onCloseClick , toggle }) => {

  // Customber Column
  const columns = useMemo(
    () => [
      {
        Header: "Investor Name",
        accessor: "name",
        filterable: false,
      },
      {
        Header: "Investment in the name of ",
        accessor: "Investment",
        filterable: false,
      },
      {
        Header: "Membership ",
        accessor: "Membership",
        filterable: false,
      },
      {
        Header: "Folio No",
        accessor: "Folio",
        filterable: false,
      },
      {
        Header: "Instrument ",
        accessor: "Instrument",
        filterable: false,
      },
      {
        Header: "Number of Instruments ",
        accessor: "NumberofInstruments",
        filterable: false,
      },
      {
        Header: "Price Per Instrument ",
        accessor: "PricePerInstrument",
        filterable: false,
      },
      {
        Header: "Total Value ",
        accessor: "TotalValue",
        filterable: false,
      },
      {
        Header: "Retained Value  ",
        accessor: "RetainedValue",
        filterable: false,
      },
      {
        Header: "Share Doc ",
        accessor: "ShareDoc",
        filterable: false,
      },
      {
        Header: "Investment Date  ",
        accessor: "InvestmentDate",
        filterable: false,
      },
      {
        Header: "Updated Date ",
        accessor: "UpdatedDate",
        filterable: false,
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          // console.log(contact.row.original.Verified )
          return (
            <ul className="list-inline hstack gap-2 mb-0">
              <li className="list-inline-item" title="Delete">
                <Link to="#" className="text-muted d-inline-block" onClick={e => toggle('DeleteShareRegister')}>
                  <i className="ri-delete-bin-5-fill fs-16"></i>
                </Link>
              </li>
              <li className="list-inline-item" title="Share Certificate upload" onClick={e => toggle('UploadCertificate')}>
                <Link to="#" className="text-muted d-inline-block">
                  <i className=" ri-upload-2-fill fs-16"></i>
                </Link>
              </li>
            </ul>
          );
        },
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
        Share Register
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
                //  (<Loader error={error} />)
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

export default ListTable;
