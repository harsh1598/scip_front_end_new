import React, { useState, useMemo } from "react";
import { Col, Container, Row, CardHeader, Input, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import TableContainer from "../../../../Components/Common/TableContainer";
import AddEditCustom from "./Modal/AddEditCustom";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import CustomSpreadSheetFilter from "./Modal/CustomSpreadSheetFilter";

const CustomSpreadsheet = () => {

    document.title = `${ProjectName} | Custom Spreadsheet`;
    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});
    const [status, setStatus] = useState({ alert: false, id: "", status: "" });

    const toggleModel = (name, data = {}) => {
        setModelName(name);
        setFormData({});
        if (data.id) {
            let editData = {
                id: data.id,
                title: data.title,
                type: data.type,
            }
            setFormData(editData);
        }
    };

    const submit = () => {
        // console.log(profileData)
    }

    const crmcontacts = [
        {
            id: 1,
            company: " AJ pvt ltd (AJ)",
            lastupdate: "13/04/2023 12:00",
            addedBy: "Smriti Misra",
            type: 0
        },
        {
            id: 2,
            company: "AJ pvt ltd (AJ)",
            lastupdate: "13/04/2023 12:00",
            addedBy: "Smriti Misra",
            type: 0
        },
    ];

    crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
      }
    
    var result = Object.keys(formData).map((key) => [key, formData[key]]);
    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "#",
                accessor: 'serial'
            },
            {
                Header: "Company",
                accessor: "company",
                filterable: false,
            },
            {
                Header: "Last Update",
                accessor: "lastupdate",
                filterable: false,
            },
            {
                Header: "Added By",
                accessor: "addedBy",
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
                                            <DropdownItem>
                                                <Link to="/admin/customSpreadsheet/showexcelsheet" className="text-body">
                                                    <i className="ri-file-excel-line align-middle me-1"></i>Show Spreadsheet
                                                </Link>
                                            </DropdownItem>
                                            <DropdownItem onClick={e => setStatus({ alert: true, id: 1, status: 1 })}>
                                                <i className="ri-delete-bin-line align-middle me-1"></i>Erase
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
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Custom Spreadsheet" pageTitle="Custom Spreadsheet" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center mb-0">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input
                                                    type="text"
                                                    className="form-control search"
                                                    placeholder="Company / Brand / User"
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button
                                                    type="button"
                                                    className="btn btn-brand-theme"
                                                    id="create-btn"
                                                    onClick={e => toggleModel('AddEditCustom')}
                                                >
                                                    <i className="ri-add-line align-bottom me-1"></i> Add
                                                </button>
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('CustomSpreadSheetFilter')}>
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
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <AddEditCustom
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'AddEditCustom' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <CustomSpreadSheetFilter
                formData={formData} setFormData={setFormData}
                show={modelName === 'CustomSpreadSheetFilter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <SweetAlert
                custom
                show={status.alert}
                btnSize="md"
                showCancel
                showProfile
                showCloseButton
                confirmBtnText="Yes"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={submit}
                onCancel={e => setStatus({ alert: false, id: "", status: "" })}
            >
                Are you sure you want to do this action?
            </SweetAlert>
        </React.Fragment>
    );
};

export default CustomSpreadsheet;
