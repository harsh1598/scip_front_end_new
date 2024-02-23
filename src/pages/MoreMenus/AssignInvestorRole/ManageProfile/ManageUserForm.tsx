import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import { ProjectName } from "../../../../Components/constants/layout";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import HelperService from "../../../../utility/HelperService";
import AddEditManageUserForm from "./AddEditManageUserForm";
import ProfileFilter from "./ProfileFilter";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
        classTitle: "text-start",
    },
    {
        title: "User Type",
        classTitle: "text-start",
    },
    {
        title: "Title",
        classTitle: "text-start",
    },
    {
        title: "Parent Section",
        classTitle: "text-start",
    },
    {
        title: "Membership Type",
        classTitle: "text-start",
    },
    {
        title: "Show in App",
        classTitle: "text-start",
    },
    {
        title: "Modified Date",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const ManageUserForm = () => {

    document.title = `${ProjectName} | Manage User Form`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [filterData, setFilterData] = useState<any>([]);
    const [isShowAddManageUserForm, setIsShowAddManageUserForm] = useState(false);
    const [isShowAppVesrionFilter, setIsShowAppVesrionFilter] = useState(false);
    const [filterData2, setFilterData2] = useState<any>([]);
    const [id, setId] = useState<any>();
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [searchText, setSearchText] = useState('');
    const [moduleAcessData, setModuleAcessData] = useState<any>([]);
    let history = useNavigate();


    useEffect(() => {
        getModuleAcesslist();
    }, [filterData]);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "manage_profile";
        WebService.getAPI({
            action: `/module-access`,
            body: obj,
        })
            .then((res: any) => {
                setModuleAcessData(res.result);
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

        for (let key in filterData2) {
            if (key && filterData2[key]) {
                obj[key] = filterData2[key].id ? filterData2[key].id : filterData2[key];
            }
        }
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/manageprofile/pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let memberShipName: any = [];
                    if (res.list[i].membershipTypeId) {
                        let membershipId: any = res.list[i].membershipTypeId.split(",");

                        if (membershipId && membershipId.length > 0) {
                            for (var j in membershipId) {
                                if (Number(membershipId[j]) == Number(1)) {
                                    memberShipName.push("Individual")
                                } else if (Number(membershipId[j]) == Number(2)) {
                                    memberShipName.push("Institutional")
                                } else if (Number(membershipId[j]) == Number(3)) {
                                    memberShipName.push("Lifetime")
                                } else if (Number(membershipId[j]) == Number(4)) {
                                    memberShipName.push("Family")
                                } else if (Number(membershipId[j]) == Number(5)) {
                                    memberShipName.push("Executive council")
                                } else if (Number(membershipId[j]) == Number(6)) {
                                    memberShipName.push("Founding")
                                }
                            }
                        }
                    }
                    var name = memberShipName.toString();
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].user_type });
                    columns.push({ value: isShowStar(res.list[i]) });
                    columns.push({ value: res.list[i].menuId ? "Menu" : res.list[i].parent_section });
                    columns.push({ value: name ? name.replaceAll(',', ' | ') : '' });
                    columns.push({ value: res.list[i].is_app == "Y" ? "YES" : "NO" });
                    columns.push({ value: res.list[i].updated_date ? HelperService.getOrderDateFormat(res.list[i].updated_date) : "" });

                    columns.push({ value: actionList(res.list[i], AcessData) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    const isShowStar = (data: any) => {
        return (
            <>
                {data.title}&nbsp;&nbsp;&nbsp;<span className="text-danger" title="Required(Can not be deleted)">{data.section_type == "default-required" ? "*" : data.section_type == "dynamic-required" ? "*" : ""}</span>
            </>

        );
    };

    const actionList = (data: any, AcessData: any) => {
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
                                {AcessData.is_edit == 1 && (
                                    <DropdownItem onClick={() =>
                                        onEdit(data.id)
                                    } >
                                        <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                    </DropdownItem>
                                )}
                                {AcessData.sel_action_button &&
                                    AcessData.sel_action_button.length > 0 &&
                                    AcessData.sel_action_button.map((res: any) => {
                                        return (
                                            <>
                                                {res == "Active/Inactive" && (
                                                    <>
                                                        {data.status === "Y" && (
                                                            <DropdownItem
                                                                onClick={(e) =>
                                                                    setData({
                                                                        alert: true,
                                                                        id: data.id,
                                                                        status: "N",
                                                                    })
                                                                }>
                                                                <i
                                                                    className="ri-close-circle-line align-middle me-1"
                                                                    style={{ color: "red" }}></i>
                                                                Deactive
                                                            </DropdownItem>
                                                        )}
                                                        {data.status === "N" && (
                                                            <DropdownItem
                                                                onClick={(e) =>
                                                                    setData({
                                                                        alert: true,
                                                                        id: data.id,
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
                                                {res == "Sub Menus" && (
                                                    <DropdownItem>
                                                        <a onClick={() => history(`/admin/form_builder/section_details/${data.id}`)} href="javascript:void(0)" className="action-btn" title="Edit">
                                                            <i className="ri-list-unordered align-middle me-1"></i>Sub Menus
                                                        </a>
                                                    </DropdownItem>
                                                )}
                                            </>
                                        );
                                    })}





                                {/* {
                                    data.status === "Y" ?
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
                                <DropdownItem>
                                    <a onClick={() => history(`/admin/form_builder/section_details/${data.id}`)} href="javascript:void(0)" className="action-btn" title="Edit">
                                        <i className="ri-list-unordered align-middle me-1"></i>Sub Menus
                                    </a>
                                </DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const onchangeStatus = (id: any, status: any) => {
        let obj: any = {};
        obj.id = id;
        obj.status = status;
        WebService.postAPI({
            action: `/manageprofile/update-status`,
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

    const onEdit = (id: any) => {
        setIsShowAddManageUserForm(true);
        setId(id)
    };

    const closeAddManageUserForm = () => {
        setId('')
        setIsShowAddManageUserForm(false);
        getModuleAcesslist();
    }

    const closeAppVersionFilter = () => {
        setId('')
        setIsShowAppVesrionFilter(false);
        getModuleAcesslist();
    }

    const updateFilter = (index: any, key2: any) => {
        for (let key in filterData2) {
            if (key == key2) {
                delete filterData2[key];
                break;
            }
        }
        setFilterData2({ ...filterData2 })
        filterData?.splice(index, 1)
        setFilterData([...filterData])
    };

    const setFilter = (data: any) => {
        setFilterData(null)
        setFilterData2(null)
        setFilterData2(data)
        let filterList: any = [];
        for (let key in data) {
            if (key && data[key]) {
                filterList.push({
                    data: data[key],
                    key: key
                });
            }
        }
        setFilterData(filterList);
    };

    return (

        <>
            {isShowAddManageUserForm &&
                <AddEditManageUserForm
                    show={isShowAddManageUserForm}
                    onCloseClick={closeAddManageUserForm}
                    Id={id} />
            }
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="Manage User Form" pageTitle="Manage User Form" location={"/admin/menu"} />
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
                                            <Col sm={4}>
                                                {filterData &&
                                                    <Row>
                                                        <div className="filter-choices-input mt-0">
                                                            <div className="choices">
                                                                <div className="choices__inner">
                                                                    <div className="choices__list choices__list--multiple">
                                                                        {filterData?.length > 0 && filterData.map((chat: any, index: any) => {

                                                                            return <>
                                                                                {filterData[index].data.id ?
                                                                                    <div className="choices__item choices__item--selectable">{filterData[index].data.value} {" "} <i className="ri-close-line align-bottom me-1 "
                                                                                        onClick={e => {
                                                                                            updateFilter(index, chat.key);
                                                                                        }}
                                                                                    ></i></div>
                                                                                    :
                                                                                    <div className="choices__item choices__item--selectable">{filterData[index].data} {" "} <i className="ri-close-line align-bottom me-1 "
                                                                                        onClick={e => {
                                                                                            updateFilter(index, chat.key);
                                                                                        }}
                                                                                    ></i></div>}
                                                                            </>;
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Row>}
                                            </Col>
                                            {moduleAcessData.is_add == 1 && (
                                            <div className="col-sm-auto ms-auto">
                                                <div className="hstack gap-2 flex-wrap">

                                                    <button type="button" className="btn btn-soft-info" onClick={() => setIsShowAppVesrionFilter(true)}>
                                                        <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                                                        Filters
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-brand-theme"
                                                        id="create-btn"
                                                        onClick={() => setIsShowAddManageUserForm(true)}
                                                    >
                                                        <i className="ri-add-line align-bottom me-1"></i> Add
                                                    </button>
                                                </div>
                                            </div>
                                             )}
                                        </Row>
                                        <div className="px-3 mt-3">
                                            <div className="table-card">
                                                <Grid
                                                    headers={headers}
                                                    rows={rows}
                                                    count={totalCount}
                                                    errorMessage={"No Data Found"}
                                                    ShowLoader={showloader}
                                                    onPageChange={onchange} />
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

                <ProfileFilter
                    formData={formData}
                    setFilterData={setFilter}
                    show={isShowAppVesrionFilter}
                    onCloseClick={closeAppVersionFilter} />
            </React.Fragment>
        </>
    );
};

export default ManageUserForm;
