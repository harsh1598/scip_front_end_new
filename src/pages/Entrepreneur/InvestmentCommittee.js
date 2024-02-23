import React, { useState, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row, Card, CardHeader, CardBody, Input, } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { ProjectName } from "../../Components/constants/layout";
import { crmcontacts } from "../../common/data";
import TableContainer from "../../Components/Common/TableContainer";
import InvestmentCommitteeFilter from "./InvestmentCommitteeFilter";

const InvestmentCommittee = () => {

    //   document.title = "Team | Velzon - React Admin & Dashboard Template";
    document.title = `${ProjectName} | Investment Committee`;

    const [formData, setFormData] = useState({});
    const [modelName, setModelName] = useState("");
    // Delete Multiple
    const [isExportButton, setIsExportButton] = useState(false);

    // const { isContactSuccess, error } = useSelector((state) => ({
    //     crmcontacts: state.Crm.crmcontacts,
    //     isContactSuccess: state.Crm.isContactSuccess,
    //     error: state.Crm.error,
    // }));

    const toggle = (name) => {
        setModelName(name);
    };

    // Checked All
    const checkedAll = useCallback(() => {
        const checkall = document.getElementById("checkBoxAll");
        const ele = document.querySelectorAll(".leadsCheckBox");
        if (checkall.checked) {
            ele.forEach((ele) => {
                ele.checked = true;
            });
        } else {
            ele.forEach((ele) => {
                ele.checked = false;
            });
        }
        exportData();
    }, []);

    const exportData = () => {
        const ele = document.querySelectorAll(".leadsCheckBox:checked");
        ele.length > 0 ? setIsExportButton(true) : setIsExportButton(false);
        let data = []
        for(let i in ele){
            let row = ele[i];
            if(row.value != undefined){
                data.push({id:parseInt(row.value)})
            }
        }
    };

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
      }

    var result = Object.keys(formData).map((key) => [key, formData[key]]);

    const columns = useMemo(
        () => [
            {
                Header: <div className="form-check"><input type="checkbox" id="checkBoxAll" className="form-check-input" onClick={() => checkedAll()} /></div>,
                Cell: (cellProps) => {
                    return <div className="form-check">
                        <Input type="checkbox" className="leadsCheckBox form-check-input" value={cellProps.row.original.id} onChange={() => exportData()} />
                    </div>
                },
                id: '#',
            },
            {
                Header: "User Name",
                accessor: "name",
                filterable: false,
            },
            {
                Header: "Company / Brand",
                accessor: "company",
                filterable: false,
            },
            {
                Header: "Email ID",
                accessor: "email",
                filterable: false,
            },
            {
                Header: "Contact",
                accessor: "phone",
                filterable: false,
            },
            {
                Header: "Registered On",
                accessor: "date",
                filterable: false,
            }
        ],
        [checkedAll]
    );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Investment Committee" pageTitle="Investment Committee" location={true} />
                    <Row>
                        <Col lg={12}>
                            <Card id="company-view-detail">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center mb-2">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input
                                                    type="text"
                                                    className="form-control search"
                                                    placeholder="Search for Investment Committee"
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                {
                                                    isExportButton &&
                                                    <button type="button" className="btn btn-soft-info" >
                                                        <i className="mdi mdi-export  align-bottom me-1"></i>{" "}
                                                        Export
                                                    </button>
                                                }
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggle('Filters')}>
                                                    <i className="ri-filter-2-line align-bottom me-1"></i>{" "}
                                                    Filters
                                                </button>
                                                {/* <Link to="/entrepreneur" className="btn btn-light"><i className="ri-arrow-left-s-line  align-bottom me-1"></i> Back</Link> */}
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
                                                                    if (item[1].StartDate && item[1].EndDate) {
                                                                        return <div key={index} className="choices__item choices__item--selectable">{item[1].StartDate}{"-"}{item[1].EndDate}  {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
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
                                </CardHeader>
                                <CardBody className="pt-0">
                                    <div>
                                        {crmcontacts.length ? (
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
                                        ) : 
                                        // (<Loader error={error} />)
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
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <InvestmentCommitteeFilter
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'Filters' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default InvestmentCommittee;
