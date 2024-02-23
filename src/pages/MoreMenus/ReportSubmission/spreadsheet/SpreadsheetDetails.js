import React, { useState, useMemo } from "react";
import { Col, Container, Row, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardBody } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import { Link } from "react-router-dom";
import AddEditSpreadSheet from "./Modal/AddEditSpreadSheet";

const SpreadsheetDetails = () => {

    document.title = `${ProjectName} | Spreadsheet Details`;
    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

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

    const crmcontacts = [
        {
            id: 1,
            title: "Financial",
            type: 0
        },
        {
            id: 2,
            title: "Financials and KPIs",
            type: 1
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
                Header: "Spreadsheet Title",
                accessor: "title",
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
                                            <DropdownItem onClick={e => toggleModel('AddEditSpreadSheet', data)}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to="/admin/filing/filingReport" className="text-body">
                                                    <i className="ri-eye-line align-middle me-1"></i>View Report
                                                </Link>
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
                    <BreadCrumb title="Spreadsheet Details" pageTitle="Spreadsheet Details" location={"/admin/menu"} />
                    <Row className="g-0 align-items-center mb-2">
                        <Col sm={12} lg={12}>
                            <Card className="p-2">
                                <CardBody className="text-center">
                                    <table class="table table-bordered table-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Col 1</th>
                                                <th scope="col">Col 2</th>
                                                <th scope="col">Col 3</th>
                                                <th scope="col">Col 4</th>
                                                <th scope="col">Col 5</th>
                                                <th scope="col">Col 6</th>
                                                <th scope="col">Col 7</th>
                                                <th scope="col">Col 8</th>
                                                <th scope="col">Col 9</th>
                                                <th scope="col">Col 10</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <th></th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <div className="hstack gap-2 justify-content-center">
                        <button className="btn btn-success btn-md"> Save </button>
                        <button className="btn btn-danger btn-md"> Reset </button>
                    </div>
                </Container>
            </div>
            <AddEditSpreadSheet
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'AddEditSpreadSheet' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            {/* <div className="text-start">
                <Row className="align-items-center team-row">
                    <Col lg={8}>
                        <div >
                            <p className="fs-14 mb-1">Col 2</p>
                        </div>
                    </Col>
                    <Col lg={4} className="col">
                        <div className="float-end">
                            <button className="btn btn-light btn-sm">+</button>
                        </div>
                    </Col>
                </Row>
            </div> */}
        </React.Fragment>
    );
};

export default SpreadsheetDetails;
