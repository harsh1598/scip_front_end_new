import React, { useState, useMemo } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import TableContainer from "../../../../Components/Common/TableContainer";
import AddEditTieChapterSetting from "./AddEditTieChapterSetting";

const TieChapterSetting = () => {

    document.title = `${ProjectName} | Tie Chapter Setting`;
    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggleModel = (name, data = {}) => {
        setModelName(name);
        setFormData({});
        if (data.id) {
            let editData = {
                id: data.id,
                title: data.title,
                description: data.description,
                keywords:data.keywords,
                type: data.type,
            }
            setFormData(editData);
        }
    };

    const crmcontacts = [
        {
            id: 1,
            title: "Initial Commitment (Tie Chapters)",
            status: "Inactive",
        },
        {
            id: 2,
            title: "Final Commitment (Tie Chapters)",
            status: "Active",
        },
        {
            id: 3,
            title: "Leegality",
            status: "Inactive",
        },
        {
            id: 4,
            title: "Direct Payment",
            status: "Active",
        },
        {
            id: 5,
            title: "Online Meeting",
            status: "Inactive",
        },
        {
            id: 6,
            title: "Tie Chapter Filter",
            status: "Active",
        },
        {
            id: 7,
            title: "Zoom Meeting Option",
            status: "Inactive",
        },
        {
            id: 8,
            title: "Go To Meeting Meeting Option",
            status: "Active",
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
                Header: "Status",
                accessor: "status",
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
                                            <DropdownItem onClick={e => toggleModel('', data)}>
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
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Tie Chapter Setting" pageTitle="Tie Chapter Setting" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
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
            <AddEditTieChapterSetting
                formData={formData}
                setFormData={setFormData}
                show={modelName === 'AddEditTieChapterSetting' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default TieChapterSetting;
