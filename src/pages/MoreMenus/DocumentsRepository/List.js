import React, { Fragment } from "react";
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown, } from "reactstrap";
const List = ({ data, deleteFolder }) => {

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card id="leadsList">
                        <CardHeader className="border-0">
                            <div className="px-3 mt-3">
                                <div className="table-responsive table-card">
                                    <table className="table table-nowrap mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th scope="col">SR.No</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Modified</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data && data.length && data.map((item, index) => {
                                                    return <Fragment key={index}>
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.date}</td>
                                                            <td>         
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle
                                                                    href="#"
                                                                    className="btn btn-soft-secondary btn-sm dropdown"
                                                                    tag="button"
                                                                >
                                                                    <i className="ri-more-fill align-middle"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="dropdown-menu-end">
                                                                    <DropdownItem >
                                                                        <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                                                    </DropdownItem>
                                                                    <DropdownItem onClick={e => deleteFolder(index)}>
                                                                        <i className="ri-delete-bin-5-line  align-middle me-1"></i>Delete
                                                                    </DropdownItem>
                                                                    <DropdownItem>
                                                                        <i className="ri-file-transfer-line align-middle me-1"></i>Move
                                                                    </DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                            </td>
                                                        </tr>
                                                    </Fragment>
                                                })
                                            }
                                            {
                                                data.length === 0 &&
                                                <>
                                                    <div className="py-4 text-center">
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
                                                    </div>
                                                </>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default List;
