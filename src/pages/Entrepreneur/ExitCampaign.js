import React, { Fragment, useState } from "react";
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
import AddExitDetails from "./AddExitDetails";
import AddExitInformation from "./AddExitInformation";
import ExitFilters from "./ExitFilters";

const crmcontacts = [
    {
        id: 1,
        Investor: "Mitesh Kulkarni",
        Campaign: "Watcon Seed",
        OriginalInvestment: " 12,50,000",
        Instrument: "70185",
        InvestmentDate: "08/05/2023 12:00",
        Investmentinthenameof: "S Trust",
        SaleAmount: "NA",
        InstrumentRetained: "NA",
        InstrumentSold: "NA",
        Status:"SUCCESS",
        isShow:"YES",
    },
    {
        id:2,
        Investor: "Mitesh kulKarni new",
        Campaign: "Watcon New",
        OrginalInvestor: "12,00,212",
        Instrument: "74102",
        InvestmentDate: "08/05/2023 12.00",
        Investmentinthenameof: " S Trust" ,
        SaleAmount: "NA",
        InstrumentRetained: "NA",
        InstruementSold: "NA" ,
        Status: "SUCCESS",
        isShow:"NO",
    }
];


const ExitCampaign = () => {

    const [modelName, setModelName] = useState("");
    const [tbl, setTbl] = useState({ show:true ,ind:"" });
    const [formData, setFormData] = useState({});

    const toggle = (name) => {
        setModelName(name);
    };

    const toggletbl = (show) => {
        // console.log(show)
        setTbl({ show: show.show, ind: parseInt(show.ind)});
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
                                                <button type="button" className="btn btn-brand-theme" onClick={e => toggle('AddExitDetails')}>
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
                                    <div className="table-responsive table-card px-3 mt-3">
                                        <table className="table table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Investor</th>
                                                    <th scope="col">Campaign</th>
                                                    <th scope="col">Original Investment</th>
                                                    <th scope="col">Instrument</th>
                                                    <th scope="col">Investment Date</th>
                                                    <th scope="col">Investment in the name of</th>
                                                    <th scope="col">Sale Amount</th>
                                                    <th scope="col">Instrument Retained</th>
                                                    <th scope="col">Instrument Sold</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    crmcontacts && crmcontacts.length && crmcontacts.map((val, ind) => {
                                                        // console.log(val);
                                                        return <Fragment key={ind}>
                                                            <tr>
                                                                <td>{val.Investor}</td>
                                                                <td>{val.Campaign}</td>
                                                                <td>{val.OrginalInvestor}</td>
                                                                <td>{val.Instrument}</td>
                                                                <td>{val.InvestmentDate}</td>
                                                                <td>{val.Investmentinthenameof}</td>
                                                                <td>{val.SaleAmount}</td>
                                                                <td>{val.InstrumentRetained}</td>
                                                                <td>{val.InstruementSold}</td>
                                                                <td>{val.Status}</td>
                                                                <td>
                                                                    <ul className="list-inline hstack gap-2 mb-0">
                                                                        <li className="list-inline-item">
                                                                            <UncontrolledDropdown>
                                                                                <UncontrolledTooltip placement="bottom" target="edit">Add Exit Information</UncontrolledTooltip>
                                                                                <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="edit" onClick={e => toggle('AddExitInformation')}>
                                                                                    <i className="ri-add-box-line align-middle"></i>
                                                                                </DropdownToggle>
                                                                                {
                                                                                    val.isShow == "YES" && 
                                                                                    <>
                                                                                        {
                                                                                            tbl.show === true && tbl.ind === ind ?
                                                                                            <>
                                                                                                <UncontrolledTooltip placement="bottom" target="View">View Exit Information</UncontrolledTooltip>
                                                                                                <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="View" onClick={e => toggletbl({show:false , ind:""})}>
                                                                                                    <i className="ri-arrow-up-s-line align-middle"></i>
                                                                                                </DropdownToggle>
                                                                                            </>
                                                                                            :
                                                                                            <>
                                                                                                <UncontrolledTooltip placement="bottom" target="View">View Exit Information</UncontrolledTooltip>
                                                                                                <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="View" onClick={e => toggletbl({show:true , ind:ind})}>
                                                                                                    <i className="ri-arrow-down-s-line align-middle"></i>
                                                                                                </DropdownToggle>
                                                                                            </>
                                                                                        }
                                                                                    </>
                                                                                }
                                                                            </UncontrolledDropdown>
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                            </tr>
                                                            {
                                                               tbl.show === true && tbl.ind === ind &&
                                                                <tr key={ind} >
                                                                    <td colSpan="100%">
                                                                        <div className="col-sm-auto ms-auto mb-3">
                                                                        <table class="table table-nowrap mb-0">
                                                                            <thead class="table-light">
                                                                                <tr>
                                                                                    <th scope="col">Investment</th>
                                                                                    <th scope="col">Investment in the name of</th>
                                                                                    <th scope="col">Sale Amount</th>
                                                                                    <th scope="col">Date of Exit</th>
                                                                                    <th scope="col">Date of Closure</th>
                                                                                    <th scope="col">Investment Retained Value</th>
                                                                                    <th scope="col">Instrument Retained</th>
                                                                                    <th scope="col">Updated Date</th>
                                                                                    <th scope="col">Action</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>{val.Investor}</td>
                                                                                    <td>{val.Investor}</td>
                                                                                    <td>{val.Investor}</td>
                                                                                    <td>{val.InvestmentDate}</td>
                                                                                    <td>{val.InvestmentDate}</td>
                                                                                    <td>{val.Investor}</td>
                                                                                    <td>{val.Investor}</td>
                                                                                    <td>{val.InvestmentDate}</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            }
                                                        </Fragment>
                                                    })
                                                }

                                            </tbody>
                                        </table>
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
