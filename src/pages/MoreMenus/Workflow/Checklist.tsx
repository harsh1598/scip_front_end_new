import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import AddEditChecklist from "./AddEditChecklist";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../Components/Grid/Grid";
import WebService from "../../../utility/WebService";
import toast from "react-hot-toast";
import { useParams } from 'react-router-dom';

const headers: GridHeader[] = [
    {
        title: "Sr.no",
        classTitle: "text-start",
    },
    {
        title: "Title",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const Checklist = () => {

    document.title = `${ProjectName} | Checklist`;
    const [modelName, setModelName] = useState<any>("");
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);

    let { id } = useParams();

    useEffect(() => {
        getlist(1);
    }, []);

    const onchange = (currentPage: number) => {
        getlist(currentPage);
    };

    const getlist = (page?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj.offset = page - 1;
        obj.substageId = id;
        
        WebService.getAPI({
            action: `/workflow-checklist-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].title });
                    columns.push({ value: actionList({ id: res.list[i].checklistId, active: res.list[i].active }) });
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
            <> {/* hstack */}
                <ul className="list-inline  gap-2 mb-0">
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
                                <DropdownItem onClick={e => toggleModel('AddEditChecklist', data.id)}>
                                    <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                </DropdownItem>
                                {
                                    data.active === "Y" ?
                                        <>
                                            <DropdownItem onClick={e => setData({ alert: true, id: data.id, status: "N" })}>
                                                <i className="ri-close-circle-line align-middle me-1" style={{ color: "red" }}></i>Deactive
                                            </DropdownItem>
                                        </>
                                        :
                                        <>
                                            <DropdownItem onClick={e => setData({ alert: true, id: data.id, status: "Y" })}>
                                                <i className="ri-checkbox-circle-line align-middle me-1" style={{ color: "green" }}></i>Active
                                            </DropdownItem>
                                        </>
                                }
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const toggleModel = (name: string, id?: any) => {
        setModelName(name);
        if (id) {
            WebService.getAPI({
                action: "/workflow-checklist-details/" + id,
            }).then((res: any) => {
                if (res && res.result) {
                    // if (res.result.view_checklist_to) {
                    //     var arr = res.result.view_checklist_to.split(",");
                    //     res.result.view_checklist_to = [];
                    //     for (var i in arr) {
                    //         res.result.view_checklist_to.push({ value: arr[i] })
                    //     }
                    // }
                    // if (res.result.thirdparty_role_id) {
                    //     var arr = res.result.thirdparty_role_id.split(",");
                    //     res.result.thirdparty_role_id = [];
                    //     for (var i in arr) {
                    //         res.result.thirdparty_role_id.push({ value: arr[i] })
                    //     }
                    // }
                    setFormData(res.result);
                }
            }).catch((error: any) => {

            });
        }
    };

    const _changeStatus = (id: any, status: any) => {
        let obj: any = {};
        obj.checklistId = id;
        obj.status = status;
        WebService.postAPI({
            action: `/workflow-checklist-update-status`,
            body: obj,
            id: "workflow-checklist-modal-submit-btn"
        }).then((res: any) => {
            // console.log(res)
            if (res) {
                toast.success(res.message);
                setData({ alert: false, id: 0, status: "" });
                getlist(1);
            }
        }).catch((error: any) => {

        });
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Checklist" pageTitle="Checklist" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="mb-4">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input type="text"
                                                    className="form-control search" placeholder="Title"
                                                    name="title"
                                                    value={formData ? formData.title : ""}
                                                    onChange={(e) => setFormData({ keyword: e.target.value })}
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
                                                    onClick={e => toggleModel('AddEditChecklist')}
                                                >
                                                    <i className="ri-add-line align-bottom me-1"></i> Add
                                                </button>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="px-3 mt-3">
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

            <AddEditChecklist
                formData={formData}
                setFormData={setFormData}
                substageId={id}
                getlist={() => getlist(1)}
                show={modelName === 'AddEditChecklist' ? true : false}
                onCloseClick={() => {
                    setModelName("");
                    setFormData({});
                }}
            />

            {/* Modal */}

            <Modal size="md" isOpen={data.alert} centered>
                <ModalHeader className="mb-2" toggle={() => setData({ alert: false, id: 0, status: "" })}>Are you sure you want to do this action?</ModalHeader>
                <ModalFooter className="border-top p-2">
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-light" onClick={() => setData({ alert: false, id: 0, status: "" })}>Cancel</button>
                        <button type="submit" id="workflow-checklist-modal-submit-btn" className="btn btn-primary" onClick={() => _changeStatus(data.id, data.status)}>Ok</button>
                    </div>
                </ModalFooter>
            </Modal>

        </React.Fragment>
    );
};

export default Checklist;
