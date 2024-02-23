import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import EditEmail from "./EditEmail";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../Components/Grid/Grid";
import WebService from "../../../utility/WebService";
import toast from "react-hot-toast";
import Loader from "../../../Components/Loader/Loader";

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
        title: "Subject",
        classTitle: "text-start",
    },
    {
        title: "Slug",
        classTitle: "text-start",
    },
    {
        title: "Content",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const Email = () => {

    document.title = `${ProjectName} | Email`;
    const [modelName, setModelName] = useState<any>("");
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [id, setId] = useState<any>();
    const [searchText, setSearchText] = useState('');
    const [moduleAcessData, setModuleAcessData] = useState<any>([])

    // <span dangerouslySetInnerHTML={{ __html: item.comment }} />
    useEffect(() => {
        getModuleAcesslist()
    }, []);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage)
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "email";
        WebService.getAPI({
            action: `/module-access`,
            body: obj,
        })
            .then((res: any) => {
                console.log(res);
                
                setModuleAcessData(res.result)
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
        let obj: any = {};
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/email-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].title });
                    columns.push({ value: res.list[i].subject });
                    columns.push({ value: res.list[i].slug });
                    columns.push({ value: contentColumns({ contentData: res.list[i].content }) });
                    columns.push({ value: actionList({ id: res.list[i].id, active: res.list[i].status, menueMoadule: AcessData }) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    const contentColumns = (data: any) => {
        return (
            <>
                <div className="flex-grow-1 overflow-hidden" style={{ width: "300px" }}>
                    {/* <p className="text-truncate mb-0">{data.contentData}</p> */}
                    <p className="text-truncate mb-0" dangerouslySetInnerHTML={{ __html: data.contentData }} />
                </div>
            </>
        );
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
                                {data.menueMoadule.is_edit == 1 &&
                                    <DropdownItem onClick={e => toggleModel('EditEmail', data.id)}>
                                        <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                    </DropdownItem>
                                }
                                {data.menueMoadule.sel_action_button && data.menueMoadule.sel_action_button.length > 0 && data.menueMoadule.sel_action_button.map((res: any) => {
                                    return (<>
                                        {
                                            res == "Active/Inactive" && <>
                                                {
                                                    data.active === "Y" && <DropdownItem
                                                        onClick={(e) =>
                                                            setData({ alert: true, id: data.id, status: "N" })
                                                        }>
                                                        <i
                                                            className="ri-close-circle-line align-middle me-1"
                                                            style={{ color: "red" }}></i>
                                                        Deactive
                                                    </DropdownItem>
                                                }
                                                {
                                                    data.active === "N" && <DropdownItem
                                                        onClick={(e) =>
                                                            setData({ alert: true, id: data.id, status: "Y" })
                                                        }>
                                                        <i
                                                            className="ri-checkbox-circle-line align-middle me-1"
                                                            style={{ color: "green" }}></i>
                                                        Active
                                                    </DropdownItem>
                                                }</>
                                        }
                                    </>)
                                })}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const toggleModel = (name: string, id?: any) => {
        if (id) {
            setId(id);
        }
        setModelName(name);
    };

    const changeStatus = (id: any, status: any) => {
        setShowLoader(true);
        let obj: any = {};
        obj.id = id;
        obj.status = status;
        WebService.postAPI({
            action: `/email-status`,
            body: obj,
            id: "Email-modal-submit-btn"
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
                setData({ alert: false, id: 0, status: "" });
                getModuleAcesslist()
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    }

    return (
        <>
            <Loader show={showloader} />
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="Email" pageTitle="Email" location={"/admin/menu"} />
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
                                                        placeholder="Search"
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
                <EditEmail
                    id={id}
                    setId={setId}
                    getlist={() => getModuleAcesslist()}
                    show={modelName === 'EditEmail' ? true : false}
                    onCloseClick={() => {
                        setModelName("");
                        setFormData({});
                        setId("");
                    }}
                />
                {/* Modal */}

                <Modal size="md" isOpen={data.alert} centered>
                    <ModalHeader className="mb-2" toggle={() => setData({ alert: false, id: 0, status: "" })}>Are you sure you want to do this action?</ModalHeader>
                    <ModalFooter className="border-top p-2">
                        <div className="hstack gap-2 justify-content-end">
                            <button type="button" className="btn btn-light" onClick={() => setData({ alert: false, id: 0, status: "" })}>Cancel</button>
                            <button type="submit" id="Email-modal-submit-btn" className="btn btn-primary" onClick={() => changeStatus(data.id, data.status)}>Ok</button>
                        </div>
                    </ModalFooter>
                </Modal>

            </React.Fragment>
        </>

    );
};

export default Email;
