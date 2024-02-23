import React, { useState } from "react";
import { ProjectName } from "../../Components/constants/layout";
import {
    Col,
    Container,
    Row,
    Card,
    CardBody,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import TableContainer from "../../Components/Common/TableContainer";
import { useMemo } from "react";
import AddTranche from "./AddTranche";
import SweetAlert from "react-bootstrap-sweetalert";
import ImportTranche from "./ImportTranche";
import TrancheDetailsTbl from "./TrancheDetailsTbl";
import BankDetails from "./BankDetails";
import AddBankDetails from "./AddBankDetails";
import { Link } from "react-router-dom";

const crmcontacts = [
    {
        id: 1,
        Name: "Idea 1",
        amount: "4000",
        startDate: "08/05/2023",
        endDate: "08/05/2023",
        status: "Partial Exit ",
    },
    {
        id: 1,
        Name: "Idea 1",
        amount: "4000",
        startDate: "08/05/2023",
        endDate: "08/05/2023",
        status: "Partial Exit ",
    },
    {
        id: 1,
        Name: "Idea 1",
        amount: "4000",
        startDate: "08/05/2023",
        endDate: "08/05/2023",
        status: "Partial Exit ",
    },
    {
        id: 1,
        Name: "Idea 1",
        amount: "4000",
        startDate: "08/05/2023",
        endDate: "08/05/2023",
        status: "Partial Exit ",
    },
    {
        id: 1,
        Name: "Idea 1",
        amount: "4000",
        startDate: "08/05/2023",
        endDate: "08/05/2023",
        status: "Partial Exit ",
    },
];

const Tranche = () => {

    const [modelName, setModelName] = useState("");
    const [trancheData, setTrancheData] = useState({ alert: false, id: "", status: "" });

    const toggleModel = (name) => {
        setModelName(name);
    };

    const submit = () => {
        //   console.log()
    }

    // document.title = " More Info | Velzon - React Admin & Dashboard Template";
    document.title = `${ProjectName} | Tranche`;
    // Customber Column

    const columns = useMemo(
        () => [
            {
                Header: "Tranche Name",
                accessor: "Name",
                filterable: false,
            },
            {
                Header: "Raising Amount",
                accessor: "amount",
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
                Header: "Status",
                accessor: "status",
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
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem onClick={e => toggleModel('AddTranche')}>
                                            <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                        </DropdownItem>
                                        <DropdownItem onClick={e => setTrancheData({ alert: true, id: 1, status: 0 })}>
                                            <i className="ri-checkbox-circle-line align-middle me-1"></i>Update Status To Completed
                                        </DropdownItem>
                                        <DropdownItem onClick={e => toggleModel('ImportTranche')}>
                                            <i className="ri-upload-2-line align-middle me-1"></i>Import Tranche Commitment Details
                                        </DropdownItem>
                                        <DropdownItem onClick={e => toggleModel('TrancheDetailsTbl')}>
                                            <i className="ri-information-line align-middle me-1"></i>Tranche Commitment Details
                                        </DropdownItem>
                                        <DropdownItem onClick={e => toggleModel('BankDetails')}>
                                            <i className="ri-bank-line align-middle me-1"></i>Add Bank Details
                                        </DropdownItem>
                                        {/* there is two model one is for details and one for add bank */}
                                        {/* <Link to="#" className="dropdown-item" onClick={e => toggleModel('AddBankDetails')}>
                                            <i className="ri-bank-line align-middle me-1"></i>Add Bank Details
                                        </Link> */}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </li>
                        </ul>
                        // <ul className="list-inline hstack gap-2 mb-0">
                        //     <li className="list-inline-item">
                        //         <UncontrolledDropdown>

                        //             <UncontrolledTooltip placement="bottom" target="edit">Edit</UncontrolledTooltip>
                        //             <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="edit" onClick={e => toggleModel('AddTranche')}>
                        //                 <i className="ri-edit-box-line align-middle"></i>
                        //             </DropdownToggle>

                        //             <UncontrolledTooltip placement="bottom" target="update">
                        //                 Update Status To Completed
                        //             </UncontrolledTooltip>
                        //             <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="update" onClick={e => setTrancheData({ alert: true, id: 1, status: 0 })}>
                        //                 <i className="ri-checkbox-circle-line align-middle"></i>
                        //             </DropdownToggle>

                        //             <UncontrolledTooltip placement="bottom" target="import">
                        //                 Import Tranche Commitment Details
                        //             </UncontrolledTooltip>
                        //             <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="import" onClick={e => toggleModel('ImportTranche')}>
                        //                 <i className="ri-upload-2-line align-middle"></i>
                        //             </DropdownToggle>

                        //             <UncontrolledTooltip placement="bottom" target="details">
                        //                 Tranche Commitment Details
                        //             </UncontrolledTooltip>
                        //             <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="details" onClick={e => toggleModel('TrancheDetailsTbl')}>
                        //                 <i className="ri-information-line align-middle"></i>
                        //             </DropdownToggle>

                        //             <UncontrolledTooltip placement="bottom" target="bank" >
                        //                 Add Bank Details
                        //             </UncontrolledTooltip>
                        //             {/* there is two model one is for details and one for add bank */}
                        //             <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="bank" onClick={e => toggleModel('BankDetails')}>
                        //                 <i className="ri-bank-line align-middle"></i>
                        //             </DropdownToggle>
                        //             {/* <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="bank" onClick={e => toggleModel('AddBankDetails')}>
                        //                 <i className="ri-bank-line align-middle"></i>
                        //             </DropdownToggle> */}
                        //         </UncontrolledDropdown>
                        //     </li>
                        // </ul>
                    );
                },
            }
        ],

    );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Tranche" pageTitle="Tranche" location="/entrepreneur" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <Row className="g-0 align-items-center mb-2">
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-brand-theme" onClick={e => toggleModel('AddTranche')}>
                                                    <i className="ri-add-line align-bottom me-1"></i> Add
                                                </button>
                                            </div>
                                        </div>
                                    </Row>
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
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <AddTranche
                show={modelName === 'AddTranche' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <ImportTranche
                show={modelName === 'ImportTranche' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <TrancheDetailsTbl
                show={modelName === 'TrancheDetailsTbl' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <BankDetails
                show={modelName === 'BankDetails' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <AddBankDetails
                show={modelName === 'AddBankDetails' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <SweetAlert
                custom
                show={trancheData.alert}
                btnSize="md"
                showCloseButton
                confirmBtnBsStyle="primary"
                cancelBtnBsStyle="success"
                title=""
                onConfirm={submit}
                onCancel={e => setTrancheData({ alert: false, id: "", status: "" })}
            >
                Are you sure you want to do this action?.
            </SweetAlert>
        </React.Fragment>
    );
};

export default Tranche;
