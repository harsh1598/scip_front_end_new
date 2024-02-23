import React, { useState } from "react";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, UncontrolledTooltip } from "reactstrap";
import WebService from "../../../../utility/WebService";
import { Link } from "react-router-dom";

import AddEdit from "./AddEdit";
import Filter from "./Filter";
import AddPreliminaryTask from "./AddPreliminaryTask";
import Approve from "./Approve";
import Archive from "./Archive";
import Profile from "./Profile";
import ProfileComment from "./ProfileComment";
import DeactivateUser from "./DeactivateUser";
import Investor from "./Investor";

const headers: GridHeader[] = [
    {
        title: "",
        classTitle: "text-start",
        isShowCheckBox: true
    },
    {
        title: "Name",
        class: "text-center",
    },
    {
        title: "Email",
        class: "text-center",
    },
    {
        title: "Contact",
        class: "text-center",
    },
    {
        title: "Submission",
        class: "text-center",
    },
    {
        title: "Registration",
        class: "text-center",
    },
    {
        title: "Startup Name",
        class: "text-center",
    },
    {
        title: "Company Stage",
        class: "text-center",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const Entrepreneur = () => {

    const [modelName, setModelName] = useState("");
    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [userApproveData, setApproveUserData] = useState({ alert: false, id: 0, status: 0 });
    const [isExportButton, setIsExportButton] = useState(false);

    const toggleModel = (name: string) => {
        setModelName(name);
    };

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
            action: `/category-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: checkList({ id: res.list[i].categoryId }) });
                    columns.push({ value: res.list[i].slug });
                    columns.push({ value: res.list[i].category_name });
                    columns.push({ value: res.list[i].cat_order });
                    columns.push({ value: res.list[i].is_only_checklist });
                    columns.push({ value: res.list[i].category_name });
                    columns.push({ value: res.list[i].cat_order });
                    columns.push({ value: res.list[i].is_only_checklist });
                    columns.push({ value: actionList({ id: res.list[i].categoryId, name: res.list[i].category_name }) });
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
                <ul className="list-inline hstack gap-2 mb-0">
                    <li className="list-inline-item">
                        <UncontrolledDropdown>
                            <DropdownToggle
                                className="btn btn-soft-secondary btn-sm dropdown"
                                tag="button"
                            >
                                <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem onClick={e => toggleModel('Profile')} >
                                    <i className="ri-user-line align-middle me-1"></i>Profile
                                </DropdownItem>
                                <DropdownItem >
                                    <i className="ri-mail-line align-middle me-1"></i>Message
                                </DropdownItem>
                                <DropdownItem onClick={e => setApproveUserData({ alert: true, id: data.id, status: 0 })}>
                                    <i className="ri-checkbox-circle-line align-middle me-1"></i>Approve user account
                                </DropdownItem>
                                <DropdownItem onClick={e => toggleModel('DeactivateUser')} >
                                    <i className="ri-archive-fill align-middle me-1"></i>Archive user account
                                </DropdownItem>
                                <DropdownItem >
                                    <i className="ri-flag-line align-middle me-1"></i>Multiple users count
                                </DropdownItem>
                                <DropdownItem onClick={e => toggleModel('Investor')}>
                                    <i className="ri-team-line align-middle me-1"></i>View investors list
                                </DropdownItem>
                                <DropdownItem >
                                    <i className=" ri-menu-line align-middle me-1"></i>View Task
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>

        );
    };

    const onSelectAllRow = () => {

    }

    const checkList = (data: any) => {
        return (
            <>
                <div className="form-check">
                    <Input type="checkbox" className="leadsCheckBox form-check-input" />
                </div>
            </>

        );
    };

    return (
        <React.Fragment>
            <Row>
                <Col lg={4}>
                    <div className="mb-2">
                        <div className="search-box">
                            <Input type="text" className="form-control search"
                                placeholder="User Name/Email" />
                            <i className="ri-search-line search-icon"></i>
                        </div>
                    </div>
                </Col>
                <div className="col-sm-auto ms-auto">
                    <div className="hstack gap-2 flex-wrap">
                        <button type="button" className="btn btn-brand-theme"
                            onClick={e => toggleModel('AddEdit')} >
                            <i className="ri-add-line align-bottom me-1"></i> Add
                        </button>
                        <button type="button" className="btn btn-soft-info"
                            onClick={e => toggleModel('Filter')} >
                            <i className="ri-filter-2-line align-bottom me-1"></i>{" "}
                            Filters
                        </button>
                        <button type="button" className="btn btn-soft-info">
                            <i className="mdi mdi-export  align-bottom me-1"></i>{" "}
                            Export
                        </button>
                    </div>
                </div>
            </Row>
            {
                isExportButton &&
                <div className="col-sm-auto ms-auto">
                    <div className="hstack gap-2 flex-wrap">
                        <UncontrolledTooltip placement="bottom" target="Assign" >
                            Assign Work to selected users
                        </UncontrolledTooltip>
                        <button type="button" className="btn btn-soft-secondary" id="Assign"
                            onClick={e => toggleModel('AddPreliminaryTask')}>
                            <i className="ri-add-box-line align-bottom"></i>
                        </button>
                        <UncontrolledTooltip placement="bottom" target="Approve" >
                            Approve selected users account
                        </UncontrolledTooltip>
                        <button type="button" className="btn btn-soft-secondary" id="Approve"
                            onClick={e => toggleModel('Approve')}>
                            <i className=" ri-checkbox-circle-line align-bottom"></i>
                        </button>
                        <UncontrolledTooltip placement="bottom" target="Archive" >
                            Archive selected users account
                        </UncontrolledTooltip>
                        <button type="button" className="btn btn-soft-secondary" id="Archive"
                            onClick={e => toggleModel('Archive')}>
                            <i className=" ri-archive-fill align-bottom"></i>
                        </button>
                    </div>
                </div>

            }
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
            <AddEdit
                show={modelName === 'AddEdit' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Filter
                show={modelName === 'Filter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <AddPreliminaryTask
                show={modelName === 'AddPreliminaryTask' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Approve
                show={modelName === 'Approve' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Archive
                show={modelName === 'Archive' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Profile
                toggleModel={toggleModel}
                show={modelName === 'Profile' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <ProfileComment
                show={modelName === 'ProfileComment' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <DeactivateUser
                show={modelName === 'DeactivateUser' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <Investor
                show={modelName === 'Investor' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            {/* <SweetAlert
                custom
                show={userApproveData.alert}
                btnSize="md"
                showCancel
                showProfile
                // showCloseButton
                confirmBtnText="Yes"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={submit}
                onCancel={e => setApproveUserData({ alert: false, id: "", status: "" })}
            >
               Email not verified yet, please contact user to verify email.
            </SweetAlert> */}
        </React.Fragment>
    );
};

export default Entrepreneur;
