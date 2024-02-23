import React, { useState } from "react";

import { ProjectName } from "../../Components/constants/layout";

import {
    Col,
    Container,
    Row,
    Card,
    CardBody,
    Input,
    Label,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    CardHeader,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import TableContainer from "../../Components/Common/TableContainer";
// import Loader from "../../Components/Common/Loader";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import FamilyMemberFilter from "./FamilyMemberFilter";

const crmcontacts = [
    {
        id: 1,
        name: "DC ",
        Cancelled: "Yes",
        Contribution: "Yes",
        PanCard: "Yes",
        AadharCard: "Yes",
        AddressProof: "Yes",
        Passport: "NO",
        DrivingLicense: "NA",
        Homeaddress: "Partial Exit ",
    },
    {
        id: 2,
        name: "Pushpa",
        Cancelled: "Yes",
        Contribution: "Yes",
        PanCard: "Yes",
        AadharCard: "Yes",
        AddressProof: "Yes",
        Passport: "NO",
        DrivingLicense: "N0",
        Homeaddress: "N0",
    },
    {
        id: 3,
        name: "bill",
        Cancelled: "Yes",
        Contribution: "Yes",
        PanCard: "Yes",
        AadharCard: "Yes",
        AddressProof: "Yes",
        Passport: "Yes",
        DrivingLicense: "Yes",
        Homeaddress: "Yes"
    }
];

const FamilyMember = () => {

    const { isContactSuccess, error } = useSelector((state) => ({
        crmcontacts: state.Crm.crmcontacts,
        isContactSuccess: state.Crm.isContactSuccess,
        error: state.Crm.error,
    }));

    const [formData, setFormData] = useState({});
    const [modelName, setModelName] = useState({ name: "" });

    const toggle = (name) => {
        setModelName({ name: name });
    };

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
    }

    var result = Object.keys(formData).map((key) => [key, formData[key]]);

    // document.title = " More Info | Velzon - React Admin & Dashboard Template";
    document.title = `${ProjectName} | KYC Reporting `;

    const columns = useMemo(
        () => [
            {
                Header: "Investor Name",
                accessor: "name",
                filterable: false,
                Cell: (contact) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 ms-2 name">
                                {contact.row.original.name}
                            </div>
                        </div>
                    </>
                ),
            },
            {
                Header: "Cancelled",
                accessor: "Cancelled",
                filterable: false,
                Cell: (contact) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 ms-4 name">
                                <div className="form-check ">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="tableColumns"
                                        id="tableColumns"
                                        checked={contact.row.original.Cancelled === "Yes" ? true : false}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                Header: "Contribution",
                accessor: "Contribution",
                filterable: false,
                Cell: (contact) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 ms-4 name">
                                <div className="form-check">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="tableColumns"
                                        id="tableColumns"
                                        checked={contact.row.original.Contribution === "Yes" ? true : false}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                    </>
                ),
            },
            {
                Header: "Pan Card",
                accessor: "PanCard",
                filterable: false,
                Cell: (contact) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 ms-4 name">
                                <div className="form-check form-check-success ">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="tableColumns"
                                        id="tableColumns"
                                        checked={contact.row.original.PanCard === "Yes" ? true : false}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                    </>
                ),
            },
            {
                Header: "Aadhar Card",
                accessor: "AadharCard",
                filterable: false,
                Cell: (contact) => (
                    <>
                        <ul className="list-inline hstack gap-1 mb-0">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1 ms-4 name">
                                    <div className="form-check">
                                        <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="tableColumns"
                                            id="tableColumns"
                                            checked={contact.row.original.AadharCard === "Yes" ? true : false}
                                            readOnly
                                        />
                                        <Label className="form-check-label" >
                                            <span className='text-danger'>*</span>
                                        </Label>
                                    </div>
                                </div>
                            </div>
                            <div className="float-end">
                                <UncontrolledDropdown direction='end'>
                                    <DropdownToggle tag="a" className="text-reset" role="button"  >
                                        <span className="text-dark fs-16">
                                            <i className="ri-more-2-fill "></i>
                                        </span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem className="text-center" >
                                            <span className="text-dark fs-16">
                                                <i className="ri-download-2-line "></i>
                                            </span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </ul>
                    </>
                ),
            },
            {
                Header: "Address Proof",
                accessor: "AddressProof",
                filterable: false,
                Cell: (contact) => (
                    <>
                        <ul className="list-inline hstack gap-1 mb-0">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1 ms-4 name">
                                    <div className="form-check">
                                        <Input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="tableColumns"
                                            id="tableColumns"
                                            checked={contact.row.original.AddressProof === "Yes" ? true : false}
                                            readOnly
                                        />
                                        <Label className="form-check-label" >
                                            <span className='text-danger'>*</span>
                                        </Label>
                                    </div>
                                </div>
                            </div>
                            <div className="float-end">
                                <UncontrolledDropdown direction='end'>
                                    <DropdownToggle tag="a" className="text-reset" role="button"  >
                                        <span className="text-dark fs-16">
                                            <i className="ri-more-2-fill "></i>
                                        </span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem className="text-center" >
                                            <span className="text-dark fs-16">
                                                <i className="ri-download-2-line "></i>
                                            </span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </ul>
                    </>
                ),
            },
            {
                Header: "Passport",
                accessor: "Passport",
                filterable: false,
                Cell: (contact) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 ms-4 name">
                                <div className="form-check">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="tableColumns"
                                        id="tableColumns"
                                        checked={contact.row.original.Passport === "Yes" ? true : false}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                    </>
                ),
            },
            {
                Header: "Driving License",
                accessor: "DrivingLicense",
                filterable: false,
                Cell: (contact) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 ms-4 name">
                                <div className="form-check">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="tableColumns"
                                        id="tableColumns"
                                        checked={contact.row.original.DrivingLicense === "Yes" ? true : false}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                    </>
                ),
            },
            {
                Header: "Home address",
                accessor: "Homeaddress",
                filterable: false,
                Cell: (contact) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 ms-4 name">
                                <div className="form-check">
                                    <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="tableColumns"
                                        id="tableColumns"
                                        checked={contact.row.original.Homeaddress === "Yes" ? true : false}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                    </>
                ),
            }
        ],

    );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Family Member Documents" pageTitle="Family Member Documents" location={"/kyc_reporting"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center mb-2">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input
                                                    type="text"
                                                    className="form-control search"
                                                    placeholder="User..."
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="d-flex hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggle('FamilyMemberFilter')}>
                                                    <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                                                    Filters
                                                </button>
                                            </div>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <CardBody className="pt-0">
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
                    <Row>
                        <Col lg={12}>
                            <Card >
                                <CardBody className="pt-0 ">
                                    <div className="table-responsive table-card ">
                                        <table className="table table-nowrap  mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">
                                                        <div className="form-check ">
                                                            <Input
                                                                className="form-check-input me-2"
                                                                type="checkbox"
                                                                name="tableColumns"
                                                                id="tableColumns"
                                                                checked={true}
                                                                readOnly
                                                            />
                                                            <Label className="form-check-label"> {" "}Allocated but Not Submitted</Label>
                                                        </div>
                                                    </th>
                                                    <th scope="col">
                                                        <div className="form-check ">
                                                            <Input
                                                                className="form-check-input me-2"
                                                                type="checkbox"
                                                                name="tableColumns"
                                                                id="tableColumns"
                                                                checked={true}
                                                                readOnly
                                                            />
                                                            <Label className="form-check-label"> {" "}Submitted</Label>
                                                        </div>
                                                    </th>
                                                    <th scope="col">
                                                        <div className="form-check ">
                                                            <Input
                                                                className="form-check-input me-2"
                                                                type="checkbox"
                                                                name="tableColumns"
                                                                id="tableColumns"
                                                                checked={false}
                                                                readOnly
                                                            />
                                                            <Label className="form-check-label"> {" "}  Not Allocated</Label>
                                                        </div>
                                                    </th>
                                                    <th scope="col">
                                                        <i className="ri-star-s-line  text-danger align-bottom me-1"></i>{" "}
                                                        <Label className="form-check-label "> {" "} Mandatory</Label>
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
            <FamilyMemberFilter
                formData={formData}
                setFormData={setFormData}
                show={modelName.name == 'FamilyMemberFilter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default FamilyMember;
