import React, { useMemo } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Input } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import TableContainer from "../../../../Components/Common/TableContainer";
import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import AddEditRight from "./AddEditRight";

const Right = () => {

    document.title = `${ProjectName} | Right`;
    const [modelName, setModelName] = useState("");
    const [formData , setFormData] = useState({});
  
    const toggleModel = (name , data = {}) => {
        setModelName(name);
        setFormData({});
        if(data.id){
            let editData = {
                id: data.id,
                title: data.title,
                desc: data.desc,
            }
            setFormData(editData);
        }
    };

    const crmcontacts = [
        {
           id: 1,
           title:"INS001",
           desc:"",
        },
        {
            id: 2,
            title:"INS002",
            desc:"",
        },
        {
            id: 3,
            title:"INS003",
            desc:"",
        },
        {
            id: 4,
            title:"INS004",
            desc:"",
        },
        {
            id: 5,
            title:"INS005",
            desc:"",
        },
        {
            id: 6,
            title:"INS006",
            desc:"",
        }
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
                Header: "Right Title",
                accessor: "title",
                filterable: false,
            },
            {
                Header: "Description",
                accessor: "desc",
                filterable: false,
            },
            {
                Header: "Action",
                Cell: (allData) => {
                    let data =  allData.row.original ;
                    return (
                        <>
                            <ul className="list-inline hstack gap-2 mb-0 ">
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
                                            <DropdownItem onClick={e => toggleModel('AddEditRight' , data)}>
                                                <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to="/admin/option" className="text-body">
                                                    <i className="ri-align-justify align-middle me-1"></i>View Sub Section
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
                    <BreadCrumb title="Right" pageTitle="Right" location={"/admin/menu"} />
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
                                                    placeholder="TItle"
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="d-flex hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-brand-theme" onClick={e => toggleModel('AddEditRight')}>
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
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <AddEditRight
               formData={formData}
               show={modelName === 'AddEditRight' ? true : false}
               onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default Right;
