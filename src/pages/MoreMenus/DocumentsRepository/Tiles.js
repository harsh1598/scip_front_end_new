import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, UncontrolledDropdown } from "reactstrap";

const Tiles = ({ data, deleteFolder , tableData , setTableData  }) => {

    const formhandler = (e, field) => {

        let data = { ...tableData };
        if (e.target.checked) {

            if (!data[field]) { data[field] = []; }

            data[field].push(parseInt(e.target.value));

        } else {
            var index = data[field].indexOf(e.target.value);
            if (index !== -1) {
                data[field].splice(index, 1);
            }
        }
        setTableData(data);
    }

    return (
        <React.Fragment>
            <Row>
                {
                    data.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <Col sm={12} lg={4}>
                                    <Card className="card-height-100">
                                        <CardBody>
                                            <div className="d-flex flex-column h-100">
                                                <div className="d-flex">
                                                    <div className="flex-grow-1">
                                                        <p className="text-dark mb-4 fs-18">{item.name}</p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div className="d-flex gap-1 align-items-center">
                                                            <div className="form-check">
                                                                <Input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    name="tableColumns"
                                                                    id="tableColumns"
                                                                    Value={index}
                                                                    onChange={e => formhandler(e, 'tableColumns')}
                                                                />
                                                            </div>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle
                                                                    href="#"
                                                                    className="btn btn-soft-secondary btn-sm dropdown"
                                                                    tag="button"
                                                                >
                                                                    <i className="ri-layout-grid-fill align-middle"></i>
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
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar-sm">
                                                            <span className="avatar-title rounded p-2 bg-soft-">
                                                                <img src="" alt="" className="img-fluid p-1" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h5 className="mb-1 fs-15"><Link to="/apps-projects-overview" className="text-dark">{item.projectName}</Link></h5>
                                                        <p className="text-muted text-truncate-two-lines mb-3">{item.date}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Fragment>
                        )
                    })
                }
            </Row>
        </React.Fragment>
    );
};

export default Tiles;
