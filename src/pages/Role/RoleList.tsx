import React, { useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { ProjectName } from "../../Components/constants/layout";
import Grid, { GridColumn, GridHeader, GridRow } from "../../Components/Grid/Grid";
import { Link } from "react-router-dom";
import WebService from "../../utility/WebService";
import SweetAlert from "react-bootstrap-sweetalert";
import toast from "react-hot-toast";
import BreadCrumb from "../../Components/Common/BreadCrumb";

const headers: GridHeader[] = [
    {
        title: "Sr.no",
        classTitle: "text-start",
    },
    {
        title: "Name",
        class: "text-center",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const RoleList = () => {

    document.title = `${ProjectName} | Role List`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [data, setData] = useState({ alert: false, id: 0 });
    const [showloader, setShowLoader] = useState(false);

    const onchange = (currentPage: number) => {
        getlist(currentPage);
    };

    const getlist = (page?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        const res: any = {};
        let obj: any = {};
        obj.offset = page - 1;
        WebService.getAPI({
            action: `/role-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].title });
                    columns.push({ value: actionList({ id: res.list[i].id }) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    const actionList = (data: any) => {
        return (
            <>
            {/* hstack */}
                <ul className="list-inline gap-2 mb-0 justify-centent-end">
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
                                    <Link className="text-body" to={{
                                        // pathname: `/role/permission`,
                                        pathname: `/role/permission/${data.id}`,
                                    }} >
                                        <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                    </Link>
                                </DropdownItem>
                                <DropdownItem onClick={e => setData({ alert: true, id: data.id, })}>
                                    <i className="ri-delete-bin-2-line align-middle me-1"></i>Delete
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>     
        );
    };

    const _delete = (id:any) => {
        WebService.deleteAPI({
            action: `/delete/` + id ,
            id:"role-list-submit-btn"
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
                setData({ alert: false, id: 0 });
                getlist(1);
            }
        }).catch((error: any) => {

        });
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Role Manager" pageTitle="Role Manager" />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="mb-4">
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <Link className="btn btn-brand-theme" to={{
                                                    pathname: `/role/permission`,
                                                }}><i className="ri-add-line align-bottom me-1"></i> Add</Link>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="px-3">
                                        <div className="table-card">
                                            <Grid
                                                headers={headers}
                                                rows={rows}
                                                count={totalCount}
                                                // perPageItem={5}
                                                errorMessage={"No Data Found"}
                                                ShowLoader={showloader}
                                                onPageChange={onchange}
                                            />
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Modal size="md" isOpen={data.alert} centered>
                <ModalHeader className="mb-2" toggle={() => setData({ alert: false, id: 0 })}>Are you sure you want to do this action?</ModalHeader>
                <ModalFooter className="border-top p-2">
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-light" onClick={() => setData({ alert: false, id: 0 })}>Cancel</button>
                        <button type="submit" id="role-list-submit-btn" className="btn btn-primary" onClick={() => _delete(data.id)}>Ok</button>
                    </div>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
};

export default RoleList;
