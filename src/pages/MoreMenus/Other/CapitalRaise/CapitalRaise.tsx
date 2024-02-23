import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { ProjectName } from "../../../../Components/constants/layout";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import HelperService from "../../../../utility/HelperService";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
        classTitle: "text-start",
    },
    {
        title: "Entrepreneur Name",
        classTitle: "text-start",
    },
    {
        title: "Company/Campaign Name",
        class: "text-center",
    },
    {
        title: "Invite Name",
        classTitle: "text-start",
    },
    {
        title: "Invite Email",
        classTitle: "text-start",
    },
    {
        title: "Date",
        classTitle: "text-start",
    },
    {
        title: "Message",
        class: "text-center",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const CapitalRaise = () => {

    document.title = `${ProjectName} |  Capital Raise`;
    const [modelName, setModelName] = useState<any>("");
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [viewPopup, setViewPopup] = useState(false);
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [viewMessage, setViewMessage] = useState<any>('');
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState<any>([]);
    let history = useNavigate();


    useEffect(() => {
        getModuleAcesslist()
    }, []);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "capital_raise";
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

    const openMessagepopup = (i: number) => {
        if (i >= 0) {
            for (var j in list)
                if (Number(i) === Number(j)) {
                    setViewMessage(list[j].message)
                    setViewPopup(true)
                }
        }
    };

    const getlist = (page?: any, AcessData?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        const res: any = {};
        let obj: any = {};
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/capital-raise-user-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                setList(res.list)
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].full_name });
                    columns.push({ value: res.list[i].company_name + " " + res.list[i].campaign_name });
                    columns.push({ value: res.list[i].name });
                    columns.push({ value: res.list[i].email });
                    columns.push({ value: HelperService.getUpdatedFormatedTimeWithSlash(res.list[i].updated_date) });
                    columns.push({ value: isshowallcampaignbtn(Number(i)) });
                    columns.push({ value: actionList(res.list[i].id, AcessData) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
        }).catch((error: any) => {
            setShowLoader(false);
        });
    }


    const isshowallcampaignbtn = (i: number) => {
        return (
            <>
                <span className="badge badge-soft-success fs-12 cursor-pointer" onClick={e => openMessagepopup(i)}>View</span>
            </>
        );
    };

    const actionList = (id: any, AcessData: any) => {

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

                                {AcessData.sel_action_button && AcessData.sel_action_button.length > 0 && AcessData.sel_action_button.map((res: any) => {
                                    return (<>
                                        {
                                            res == "Capital Raise History" && <DropdownItem>
                                                <a href="javascript:void(0)" className="text-body cursor-pointer" title='Capital Raise History' onClick={() => history(`/admin/capitalRaiseLog/${id}`)} >
                                                    <i className="ri-history-line align-middle me-1"></i>Capital Raise History
                                                </a>
                                            </DropdownItem>
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

    const _changeStatus = (id: any, status: any) => {
        let obj: any = {};
        obj.workflowId = id;
        obj.status = status;
        WebService.postAPI({
            action: `/workflow-update-status`,
            body: obj,
            id: "workflow-modal-submit-btn"
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
                setData({ alert: false, id: 0, status: "" });
                getModuleAcesslist();
            }
        }).catch((error: any) => {

        });
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Capital Raise User" pageTitle="Capital Raise User" location={"/admin/menu"} />
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

            {/* Modal */}

            {/* <Modal size="md" isOpen={data.alert} centered>
                <ModalHeader className="mb-2" toggle={() => setData({ alert: false, id: 0, status: "" })}>Are you sure you want to do this action?</ModalHeader>
                <ModalFooter className="border-top p-2">
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-light" onClick={() => setData({ alert: false, id: 0, status: "" })}>Cancel</button>
                        <button type="submit" id="workflow-modal-submit-btn" className="btn btn-primary" onClick={() => _changeStatus(data.id, data.status)}>Ok</button>
                    </div>
                </ModalFooter>
            </Modal> */}
            {/* Modal For View */}

            <Modal size="md" isOpen={viewPopup} centered>
                <ModalHeader className="mb-2" toggle={() => setViewPopup(false)}>
                    {viewMessage}
                </ModalHeader>
            </Modal>

        </React.Fragment>
    );
};

export default CapitalRaise;
