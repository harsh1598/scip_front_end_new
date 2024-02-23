import React, { useMemo, useState } from "react";
import { ProjectName } from "../../../Components/constants/layout";
import { Col, Input, Row } from "reactstrap";
import TableContainer from "../../../Components/Common/TableContainer";
import MoreInfoFilter from "./MoreinfoFilter";

const crmcontacts = [
    {
        id: 1,
        CompanyCampaign: "IC IC Angel 1 ",
        Investment : "SD Investment Management Services LLP",
        Folio: "",
        Instrument: "Equity",
        NoInstruments: "5",
        TotalValue : "1,00,001",
        date: "08/05/2023",
    },
    {
        id: 1,
        CompanyCampaign: "IC IC Angel 1 ",
        Investment : "SD Investment Management Services LLP",
        Folio: "",
        Instrument: "Equity",
        NoInstruments: "5",
        TotalValue : "1,00,001",
        date: "08/05/2023",
    },
    {
        id: 1,
        CompanyCampaign: "IC IC Angel 1 ",
        Investment : "SD Investment Management Services LLP",
        Folio: "",
        Instrument: "Equity",
        NoInstruments: "5",
        TotalValue : "1,00,001",
        date: "08/05/2023",
    },
    {
        id: 1,
        CompanyCampaign: "IC IC Angel 1 ",
        Investment : "SD Investment Management Services LLP",
        Folio: "",
        Instrument: "Equity",
        NoInstruments: "5",
        TotalValue : "1,00,001",
        date: "08/05/2023",
    }
];

const Investment = () => {

    document.title = `${ProjectName} | More Info`;

    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggle = (name) => {
        setModelName(name);
    };

    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "Company & Campaign",
                accessor: "CompanyCampaign",
                filterable: false,
            },
            {
                Header: "Investment in the name of",
                accessor: "Investment",
                filterable: false,
            },
            {
                Header: "Folio Number",
                accessor: "Folio",
                filterable: false,
            },
            {
                Header: "Instrument",
                accessor: "Instrument",
                filterable: false,
            },
            {
                Header: "Number of Instruments",
                accessor: "NoInstruments",
                filterable: false,
            },
            {
                Header: "Total Value",
                accessor: "TotalValue",
                filterable: false,
            },
            {
                Header: "Investment Date",
                accessor: "date",
                filterable: false,
            }
        ],

    );

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
    }

    var result = Object.keys(formData).map((key) => [key, formData[key]]);

    return (
        <React.Fragment>
            <Row>
                <Col sm={4}>
                    <div className="search-box">
                        <Input
                            type="text"
                            className="form-control search"
                            placeholder="Search"
                        />
                        <i className="ri-search-line search-icon"></i>
                    </div>
                </Col>
                <div className="col-sm-auto ms-auto">
                    <div className="hstack gap-2 flex-wrap">
                        <button type="button" className="btn btn-soft-info" onClick={e => toggle('Filters')}>
                            <i className="ri-filter-3-line  align-bottom me-1"></i>{" "}
                            Filters
                        </button>
                        <button type="button" className="btn btn-soft-info">
                            <i className="ri-file-excel-line align-bottom me-1"></i>{" "}
                            Export
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
            <MoreInfoFilter
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'Filters' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default Investment;
