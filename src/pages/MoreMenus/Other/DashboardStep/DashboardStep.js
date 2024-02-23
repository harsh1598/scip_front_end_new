import React, { useState, useMemo } from "react";
import { Col, Container, Row, CardHeader, Input, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import TableContainer from "../../../../Components/Common/TableContainer";
import SweetAlert from "react-bootstrap-sweetalert";
import AddEditDashboardStep from "./AddEditDashboardStep";
import DashboardStepFilter from "./DashboardStepFilter";

const DashboardStep = () => {

    document.title = `${ProjectName} | Dashboard Step`;
    const [modelName, setModelName] = useState("");
    const [data, setData] = useState({});
    const [formData, setFormData] = useState({});
    const [status, setStatus] = useState({ alert: false, id: "", status: "" });

    const toggleModel = (name, data = {}) => {
        setModelName(name);
        setData({});
        if (data.id) {
            let editData = {
                id: data.id,
                title: data.title,
                information: data.information,
                userType: data.userType,
                seqNo: data.seqNo,
                type: data.type,
            }
            setData(editData);
        }
    };

    const submit = () => {
        // console.log(profileData)
    }

    const crmcontacts = [
        {
            id: 1,
            title: "Personal Profile",
            information: " Acknowledgment of payment received",
            pageNo: "1",
            seqNo: "1",
            userType: "Entrepreneur",
            stage: "Existing SME",
            type: 0
        },
        {
            id: 2,
            title: "Company Profile",
            information: "Add company logo. Enhance your presentation. Plus add any missing details.",
            pageNo: "2",
            seqNo: "2",
            userType: "Entrepreneur",
            stage: "Existing SME",
            type: 1
        },
        {
            id: 3,
            title: "NDA with [SITENAME]",
            information: "Non disclosure agreement between the entrepreneur and [SITENAME], lists down all the terms and conditions to protect confidential information. If you agree, please sign and proceed to the next step.",
            pageNo: "3",
            seqNo: "9",
            userType: "Entrepreneur",
            stage: "Existing SME",
            type: 0
        },
        {
            id: 4,
            title: "Management Contract",
            information: "Acknowledgment of payment received",
            pageNo: "4",
            seqNo: "4",
            userType: "Entrepreneur",
            stage: "Existing SME",
            type: 1
        },
        {
            id: 5,
            title: "NDA Investor",
            information: "Acknowledgment of payment received",
            pageNo: "5",
            seqNo: "5",
            userType: "Entrepreneur",
            stage: "Existing SME",
            type: 0
        },
        {
            id: 6,
            title: "Participation & Share holders Agreement",
            information: "Acknowledgment of payment received",
            pageNo: "6",
            seqNo: "6",
            userType: "Entrepreneur",
            stage: "Existing SME",
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
                Header: "Title",
                filterable: false,
                Cell: (cellProps) => {
                    // console.log(cellProps.row.original.StartupName);
                    return (
                        <>
                            <div className="flex-grow-1 overflow-hidden" style={{ width: "200px" }}>
                                <p className="text-truncate mb-0">{cellProps.row.original.title}</p>
                            </div>
                        </>
                    )
                },
            },
            {
                Header: "Information",
                filterable: false,
                Cell: (cellProps) => {
                    // console.log(cellProps.row.original.StartupName);
                    return (
                        <>
                            <div className="flex-grow-1 overflow-hidden" style={{ width: "300px" }}>
                                <p className="text-truncate mb-0">{cellProps.row.original.information}</p>
                            </div>
                        </>
                    )
                },
            },
            {
                Header: "Page No",
                accessor: "pageNo",
                filterable: false,
            },
            {
                Header: "Seq No",
                accessor: "seqNo",
                filterable: false,
            },
            {
                Header: "User Type",
                accessor: "userType",
                filterable: false,
            },
            {
                Header: "Stage",
                accessor: "stage",
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
                                            <DropdownItem onClick={e => toggleModel('AddEditDashboardStep', data)}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                            </DropdownItem>
                                            {
                                                allData.row.original.type === 0 ?
                                                    <>
                                                        <DropdownItem onClick={e => setStatus({ alert: true, id: 1, status: 1 })}>
                                                            <i className="ri-checkbox-circle-line align-middle me-1"></i>Deactive
                                                        </DropdownItem>
                                                    </>

                                                    :
                                                    <>
                                                        <DropdownItem onClick={e => setStatus({ alert: true, id: 1, status: 1 })}>
                                                            <i className="ri-close-circle-line align-middle me-1"></i>Active
                                                        </DropdownItem>
                                                    </>
                                            }
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
                    <BreadCrumb title="Dashboard Step" pageTitle="Dashboard Step" location={"/admin/menu"} />
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
                                                    placeholder="Title"
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('DashboardStepFilter')}>
                                                    <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
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
            <AddEditDashboardStep
                data={data}
                setData={setData}
                show={modelName === 'AddEditDashboardStep' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <DashboardStepFilter
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'DashboardStepFilter' ? true : false}
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

export default DashboardStep;
