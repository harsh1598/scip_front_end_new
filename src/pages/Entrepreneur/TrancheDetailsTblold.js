import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    UncontrolledDropdown,
    DropdownToggle,
} from "reactstrap";

import TableContainer from "../../Components/Common/TableContainer";

const crmcontacts = [
      {
        id: 1,
        name: "K pvt ltd - Kola Idea 1",
        Email: "Entrepreneur",
        Message: "Workflow",
        Organization: 1,
        ContactDetails: "K pvt ltd - Kola Idea 1",
        AddedDate: "08/05/2023",

      }
];

const TrancheDetailsTbl = ({ show, onCloseClick }) => {
    const { leads, isLeadsSuccess, error } = useSelector((state) => ({
        leads: state.Crm.leads,
        isLeadsSuccess: state.Crm.isLeadsSuccess,
        error: state.Crm.error,
    }));

    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "Investor Name",
                accessor: "name",
                filterable: false,
            },
            {
                Header: "Final Commitment",
                accessor: "Email",
                filterable: false,
            },
            {
                Header: "Tranche Commitment",
                accessor: "Message",
                filterable: false,
            },
            {
                Header: "Date",
                accessor: "AddedDate",
                filterable: false,
            },
            {
                Header: "Action",
                Cell: (cellProps) => {
                    // console.log(contact.row.original.Verified )
                    return (
                      <ul className="list-inline hstack gap-2 mb-0">
                        <li className="list-inline-item">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              href="#"
                              className="btn btn-soft-secondary btn-sm dropdown"
                              tag="button"
                            >
                              <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                        
                          </UncontrolledDropdown>
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
            className="size-md"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Import Tranche Commitment Details
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <div className="px-3 mt-3">
                        {crmcontacts.length > 0 ? (
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
                        ) : (<div className="py-4 text-center">
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

export default TrancheDetailsTbl;
