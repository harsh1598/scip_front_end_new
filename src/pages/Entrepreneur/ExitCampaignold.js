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
    UncontrolledTooltip,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import TableContainer from "../../Components/Common/TableContainer";
import { useMemo } from "react";

import AddExitDetails from "./AddExitDetails";
import AddExitInformation from "./AddExitInformation";
import ExitFilters from "./ExitFilters";

const crmcontacts = [
    {
        id: 1,
        Investor: "Mitesh Kulkarni ",
        Campaign: "Watcon Seed ",
        OriginalInvestment: " 12,50,000 INR ",
        Instrument: "70185",
        InvestmentDate: "08/05/2023 12:00 AM",
        Investmentinthenameof: "S Trust ",
        SaleAmount: "NA",
        InstrumentRetained: "NA",
        InstrumentSold: "NA",
        Status:"SUCCESS"
    },
    {
        id:2,
        Investor: "Mitesh kulKarni new",
        Campaign: "Watcon New",
        OrginalInvestor: "12,00,212 INR",
        Instrument: "74102",
        InvestmentDate: "08/05/2023 12.00 Am",
        Investmentinthenameof: " S Trust" ,
        SaleAmount: "NA",
        InstrumentRetained: "NA",
        InstruementSold: "NA" ,
        Status: "SUCCESS"
    }
];


const ExitCampaign = () => {

    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggle = (name) => {
        setModelName(name);
    };

    const submit = () => {
    //   console.log()
    }

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
    }

    var result = Object.keys(formData).map((key) => [key, formData[key]]);

    // document.title = " More Info | Velzon - React Admin & Dashboard Template";
    document.title = `${ProjectName} | Exit - campaign`;
    // Customber Column

    const columns = useMemo(
        () => [
            {
                Header: "Investor",
                accessor: "Investor",
                filterable: false,
            },
            {
                Header: "Campaign",
                accessor: "Campaign",
                filterable: false,
            },
            {
                Header: "Original Investment",
                accessor: "OriginalInvestment",
                filterable: false,
            },
            {
                Header: "Instrument",
                accessor: "Instrument",
                filterable: false,
            },
            {
                Header: "Investment Date",
                accessor: "InvestmentDate",
                filterable: false,
            },
            {
                Header: "Investment in the name of",
                accessor: "Investmentinthenameof",
                filterable: false,
            },
            {
                Header: "Sale Amount",
                accessor: "SaleAmount",
                filterable: false,
            },
            {
                Header: "Instrument Retained",
                accessor: "InstrumentRetained",
                filterable: false,
            },
            {
                Header: "Instrument Sold",
                accessor: "InstrumentSold",
                filterable: false,
            },
            {
                Header: "Status",
                accessor: "Status",
                filterable: false,
            },
            {
                Header: "Action",
                Cell: (cellProps) => {
                    return (
                        <ul className="list-inline hstack gap-2 mb-0">
                            <li className="list-inline-item">
                                <UncontrolledDropdown>
                                    <UncontrolledTooltip placement="bottom" target="edit">Add Exit Information</UncontrolledTooltip>
                                    <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="edit" onClick={e => toggle('AddExitInformation')}>
                                        <i className="ri-add-box-line align-middle"></i>
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
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Company Campaign Exit" pageTitle="Company Campaign Exit" location="/entrepreneur" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody >
                                    <Row className="g-0 align-items-center mb-2">
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-soft-info"   onClick={e => toggle('AddExitDetails')}>
                                                    <i className="ri-add-line align-bottom me-1"></i> Add
                                                </button>
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggle('ExitFilters')}>
                                                <i className="ri-filter-2-line align-bottom me-1"></i>{" "}
                                                Filters
                                                </button>
                                            </div>
                                        </div>
                                    </Row>
                                    {
                                        Object.values(formData).every(x => x === null || x === '') === false &&
                                        <Row>
                                        <div className="filter-choices-input mt-2">
                                            <div className="choices">
                                            <div className="choices__inner">
                                                <div className="choices__list choices__list--multiple">
                                                {result.map((item, index) => {
                                                    if (item[0] && item[1]) {

                                                    if (item[1].value) {
                                                        return <div key={index} className="choices__item choices__item--selectable">{item[1].value} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                                    } else {
                                                        return <div key={index} className="choices__item choices__item--selectable">{item[1]} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                                    }

                                                    } else { return ''; }
                                                })
                                                }
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </Row>
                                    }
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
            <AddExitDetails
                show={modelName === 'AddExitDetails' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <AddExitInformation
                show={modelName === 'AddExitInformation' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <ExitFilters 
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'ExitFilters' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default ExitCampaign;
