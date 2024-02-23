import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { ProjectName } from "../../../../Components/constants/layout";
import toast from "react-hot-toast";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import EditCMS from "./EditCMS";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
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

const CMS = () => {

    document.title = `${ProjectName} | Cms`;
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [isShowAddCms, setIsShowAddCms] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [id, setId] = useState<any>();

    useEffect(() => {
        getModuleAcesslist();
    }, []);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "cms";
        WebService.getAPI({
            action: `/module-access`,
            body: obj,
        })
            .then((res: any) => {
                if (currentPage) {
                    getlist(currentPage, res.result);
                } else {
                    getlist(1, res.result);
                }
            })
            .catch((error: any) => { });
    };

    const getlist = (page?: any, AcessData?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        const res: any = {};
        let obj: any = {};
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/cms-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].cmsTitle });
                    columns.push({ value: actionList(res.list[i], AcessData) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
        }).catch((error: any) => {
            setShowLoader(false);
        });
    }

    const actionList = (data: any, AcessData: any) => {
        return (
            <>
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
                                {AcessData.is_edit == 1 && (
                                    <DropdownItem >
                                        <a className="text-body" onClick={() =>
                                            onEdit(data.cmsId)
                                        } >
                                            <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                        </a>
                                    </DropdownItem>
                                )}
                                {AcessData.sel_action_button &&
                                    AcessData.sel_action_button.length > 0 &&
                                    AcessData.sel_action_button.map((res: any) => {
                                        return (
                                            <>
                                                {res == "Active/Inactive" && (
                                                    <>
                                                        {data.active === "Y" && (
                                                            <DropdownItem
                                                                onClick={(e) =>
                                                                    setData({
                                                                        alert: true,
                                                                        id: data.cmsId,
                                                                        status: "N",
                                                                    })
                                                                }>
                                                                <i
                                                                    className="ri-close-circle-line align-middle me-1"
                                                                    style={{ color: "red" }}></i>
                                                                Deactive
                                                            </DropdownItem>
                                                        )}
                                                        {data.active === "N" && (
                                                            <DropdownItem
                                                                onClick={(e) =>
                                                                    setData({
                                                                        alert: true,
                                                                        id: data.cmsId,
                                                                        status: "Y",
                                                                    })
                                                                }>
                                                                <i
                                                                    className="ri-checkbox-circle-line align-middle me-1"
                                                                    style={{ color: "green" }}></i>
                                                                Active
                                                            </DropdownItem>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        );
                                    })}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const onEdit = (id: any) => {
        setIsShowAddCms(true);
        setId(id)
    };

    const onchangeStatus = (id: any, status: any) => {
        let obj: any = {};
        obj.cmsId = id;
        obj.status = status;
        WebService.postAPI({
            action: `/cms-status`,
            body: obj,
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
                setData({ alert: false, id: 0, status: "" });
                getModuleAcesslist();
            }
        }).catch((error: any) => {

        });
    }

    const closeAddCms = () => {
        setId('')
        setIsShowAddCms(false);
        getModuleAcesslist(1);
    }

    return (
        <>
            {isShowAddCms && <EditCMS
                isShow={isShowAddCms}
                isClose={closeAddCms}
                onEdit={id}
            />}
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Cms" pageTitle="Cms" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="mb-4">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input
                                                    type="text"
                                                    className="form-control search"
                                                    placeholder="Title"
                                                    name="title"
                                                    value={searchText}
                                                    onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => {
                                                        if (e.keyCode === 13) {
                                                            getlist(1)
                                                        }
                                                    }}
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="px-3 mt-3">
                                        <div className="table-card">
                                            <Grid
                                                headers={headers}
                                                rows={rows}
                                                count={totalCount}
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



            {/* Modal */}

            <Modal size="md" isOpen={data.alert} centered>
                <ModalHeader className="mb-2" toggle={() => setData({ alert: false, id: 0, status: "" })}>Are you sure you want to do this action?</ModalHeader>
                <ModalFooter className="border-top p-2">
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-light" onClick={() => setData({ alert: false, id: 0, status: "" })}>Cancel</button>
                        <button type="submit" id="workflow-modal-submit-btn" className="btn btn-primary" onClick={() => onchangeStatus(data.id, data.status)}>Ok</button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default CMS;
