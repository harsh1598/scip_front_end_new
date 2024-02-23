import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../Components/Grid/Grid";
import { ProjectName } from "../../../Components/constants/layout";
import WebService from "../../../utility/WebService";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
        classTitle: "text-start",
    },
    {
        title: "Name",
        classTitle: "text-start",
    },
    {
        title: "Email Id",
        class: "text-center",
    },
    {
        title: "Contact",
        class: 'text-center'
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const SyndicateUserList = () => {

    document.title = `${ProjectName} | Syndicate User List`;
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        getModuleAcesslist();
    }, []);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "syndicate_user_list";
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
        let obj: any = {};
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/syndicate-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].name });
                    columns.push({ value: res.list[i].email });
                    columns.push({ value: res.list[i].phone });
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
                                {AcessData.sel_action_button &&
                                    AcessData.sel_action_button.length > 0 &&
                                    AcessData.sel_action_button.map((res: any) => {
                                        console.log(res);
                                        
                                        return (
                                            <>
                                                {res == "A21 Survey Active" && (
                                                    <>
                                                        {
                                                            data.is_default === 'Y' ?
                                                                <>
                                                                    <DropdownItem onClick={e => setData({ alert: true, id: data.userId, status: 'N' })}>
                                                                        <i className="ri-checkbox-blank-circle-line align-middle me-1 text-success" ></i>A21 Survey Deactive
                                                                    </DropdownItem>
                                                                </>
                                                                :
                                                                <>
                                                                    <DropdownItem onClick={e => setData({ alert: true, id: data.userId, status: 'Y' })}>
                                                                        <i className="ri-checkbox-blank-circle-line align-middle me-1 text-dark" ></i>A21 Survey Active
                                                                    </DropdownItem>
                                                                </>
                                                        }
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

    const onchangeStatus = (id: any, status: any) => {
        // let obj: any = {};
        // obj.userId = id;
        // obj.status = status;
        // WebService.postAPI({
        //     action: `/surveyregister`,
        //     body: obj,
        // }).then((res: any) => {
        //     if (res) {
        //         toast.success(res.message);
        //         setData({ alert: false, id: 0, status: "" });
        //         getlist(1);
        //     }
        // }).catch((error: any) => {

        // });
    }

    return (
        <>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Syndicate User List" pageTitle="Syndicate User List" location={"/admin/menu"} />
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

export default SyndicateUserList;
