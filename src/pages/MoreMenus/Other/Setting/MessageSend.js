import React, { useState, useMemo } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import TableContainer from "../../../../Components/Common/TableContainer";
import AddEditMessageSend from "./AddEditMessageSend";

const MessageSend = () => {

    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggleModel = (name, data = {}) => {
        setModelName(name);
        setFormData({});
        if (data.id) {
            let editData = {
                id: data.id,
                title: data.title,
                days: data.days,
            }
            setFormData(editData);
        }
    };

    const crmcontacts = [
        {
            id: 1,
            title: "MESSAGE TO GROUP MEMBER THAT HAVE NOT MENTOR [ADMIN TASK]",
            days: "12",
            month: "0",
        },
        {
            id: 1,
            title: "MESSAGE TO GROUP MEMBER THAT HAVE NOT MENTOR [AUTOMATED TASK]",
            days: "14",
            month: "0",
        },  
        {
            id: 1,
            title: "MESSAGE TO GROUP MEMBER THAT HAVE NOT LOCATION VISITOR [ADMIN TASK]",
            days: "16",
            month: "0",
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
                Header: "Title",
                accessor: "title",
                filterable: false,
            },
            {
                Header: "Days",
                accessor: "days",
                filterable: false,
            },
            {
                Header: "Month",
                accessor: "month",
                filterable: false,
            },
            {
                Header: "Action",
                Cell: (allData) => {
                    let data = allData.row.original;
                    return (
                        <>
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
                                        <DropdownMenu className="dropdown-menu-end">
                                            <DropdownItem onClick={e => toggleModel('AddEditMessageSend', data)}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </li>
                            </ul>
                        </>
                    );
                },
            },
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
            <AddEditMessageSend 
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'AddEditMessageSend' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default MessageSend;
