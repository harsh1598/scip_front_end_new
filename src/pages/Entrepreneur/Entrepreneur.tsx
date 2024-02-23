import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter, Dropdown, CardBody } from "reactstrap";
import toast from "react-hot-toast";
import Grid, { GridColumn, GridHeader, GridRow } from "../../Components/Grid/Grid";
import { ProjectName } from "../../Components/constants/layout";
import WebService from "../../utility/WebService";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import EntrepreneurFilter from "./Filter";
import AddEditEntrepreneur from "./AddEditEntrepreneur";
import Call from "./Call";
import Task from "./Task";
import SetPassword from "./SetPassword";
import Tags from "./Tags";
import Application from "./Application";
import ApplicationComment from "./ApplicationComment";
import Rejection from "./Rejection";

const headers: GridHeader[] = [
    {
        title: "User Name",
        classTitle: "text-start",
    },
    {
        title: "Company / Brand",
        classTitle: "text-start",
    },
    {
        title: "Email Id ",
        classTitle: "text-start",
    },
    {
        title: "Contact",
        classTitle: "text-start",
    },
    {
        title: "User Code",
        classTitle: "text-start",
    },
    {
        title: "Company Stage",
        classTitle: "text-start",
    },
    {
        title: "Submission Date",
        classTitle: "text-start",
    },
    {
        title: "Industry",
        classTitle: "text-start",
    },
    {
        title: "Sector",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const Entrepreneur = () => {

    document.title = `${ProjectName} | Teaser`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [searchText, setSearchText] = useState('');
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [isShowAddTeaser, setIsShowAddTeaser] = useState(false);
    const [id, setId] = useState<any>();
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [moduleAcessData, setModuleAcessData] = useState<any>([]);
    const navigate = useNavigate();
    const [modelName, setModelName] = useState("");
    const [search_Menu, setSearch_Menu] = useState(false);
    const [formData, setFormData] = useState({});


    //Toggle Search Box Menus
    const toggleSearch = () => {
        setSearch_Menu(!search_Menu);
    };

    useEffect(() => {
        getModuleAcesslist();
    }, []);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "entrepreneur";
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
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/teaser/pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1, originalValue: res.list[i] });
                    columns.push({ value: res.list[i].title });
                    columns.push({ value: isshowallEditable({ is_editable: res.list[i].is_editable }) });
                    columns.push({ value: res.list[i].seq_no });
                    columns.push({ value: isshowImg({ logo: res.list[i].logo }) });
                    columns.push({ value: res.list[i].title });
                    columns.push({ value: res.list[i].title });
                    columns.push({ value: res.list[i].title });
                    columns.push({ value: res.list[i].title });
                    columns.push({
                        value: actionList({ id: res.list[i].teaser_id, active: res.list[i].active, menueMoadule: AcessData, }),
                    });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    const isshowallEditable = (data: any) => {
        return (
            <>
                <span className={data.is_editable === "Y" ? "badge badge-soft-success fs-12" : "badge badge-soft-danger fs-12"} >{data.is_editable === "Y" ? "Yes" : "No"}</span>
            </>
        );
    };

    const isshowImg = (data: any) => {
        return (
            <>
                <img src={data.logo} height={25} width={25} />
            </>
        );
    };

    const toggle = (name: any) => {
        setModelName(name);
    };

    const ViewMore = () => {
        // console.log(data)
        navigate('/enterpreneur/more');
    }


    const actionList = (data: any) => {
        return (
            <>
                <ul className="list-inline hstack gap-2 mb-0">
                    <li className="list-inline-item edit" title="Call">
                        <Link to="#" className="text-muted d-inline-block" onClick={e => toggle('Call')}>
                            <i className="ri-phone-line fs-16"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <UncontrolledDropdown>
                            <DropdownToggle
                                className="btn btn-soft-secondary btn-sm dropdown"
                                tag="button"
                            >
                                <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>

                            <DropdownMenu className="dropdown-menu-end">
                                {data.menueMoadule.sel_action_button &&
                                    data.menueMoadule.sel_action_button.length > 0 &&
                                    data.menueMoadule.sel_action_button.map((res: any) => {
                                        return (
                                            <>
                                                {res == "Deal Dashboard" && (
                                                    <DropdownItem >
                                                        <Link to="/entrepreneur_dashboard">
                                                            <i className="ri-dashboard-2-line align-bottom me-1"></i> Deal Dashboard
                                                        </Link>
                                                    </DropdownItem>
                                                )}
                                                {res == "Application" && (
                                                    <DropdownItem onClick={e => toggle('Application')}>
                                                        <i className="ri-clipboard-line align-bottom me-1"></i> Application
                                                    </DropdownItem>
                                                )}
                                                {res == "More" && (
                                                    <DropdownItem onClick={e => ViewMore()}>
                                                        <i className="ri-menu-line align-bottom me-1"></i> More
                                                    </DropdownItem>
                                                )}
                                                {res == "Team" && (
                                                    <DropdownItem>
                                                        <Link className="text-body" to="/team">
                                                            <i className="ri-team-line align-bottom me-1"></i> Team
                                                        </Link>
                                                    </DropdownItem>
                                                )}
                                                {res == "Message" && (
                                                    <DropdownItem >
                                                        <i className="ri-message-2-line align-bottom me-1"></i> Message
                                                    </DropdownItem>
                                                )}
                                                {res == "Status" && (
                                                    <DropdownItem onClick={e => toggle('Task')}>
                                                        <i className="ri-checkbox-circle-line align-bottom me-1"></i> Status
                                                    </DropdownItem>
                                                )}
                                                {res == "Active" && (
                                                    <DropdownItem onClick={e => toggle('Rejection')}>
                                                        <i className="ri-checkbox-circle-line align-bottom me-1"></i> Active
                                                    </DropdownItem>
                                                )}
                                                {/* <DropdownItem  onClick={e => setProfileData({ alert: true, id: 1, status: 0 })}>
                      Active
                    </DropdownItem> */}
                                                {res == "Tags" && (
                                                    <DropdownItem onClick={e => toggle('Tags')}>
                                                        <i className="ri-price-tag-3-line align-bottom me-1"></i> Tags
                                                    </DropdownItem>
                                                )}
                                                {res == "Set Temp Password" && (
                                                    <DropdownItem onClick={e => toggle('SetPassword')}>
                                                        <i className="ri-lock-password-line align-bottom me-1"></i> Set Temp Password
                                                    </DropdownItem>
                                                )}
                                                {/* <DropdownItem  >
                      Re-inv Report
                    </DropdownItem> */}
                                                {res == "Re-inv Report" && (
                                                    <DropdownItem>
                                                        <Link className="text-body" to="/reports">
                                                            <i className="ri-file-chart-line align-bottom me-1"></i> Re-inv Report
                                                        </Link>
                                                    </DropdownItem>
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
        let obj: any = {};
        obj.teaser_id = id;
        obj.status = status;
        WebService.postAPI({
            action: `/teaser/update-status`,
            body: obj,
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
                setData({ alert: false, id: 0, status: "" });
            }
        }).catch((error: any) => {

        });
    }

    const onEdit = (id: any) => {
        setIsShowAddTeaser(true);
        setId(id)
    };

    const closeAddTeaser = () => {
        setId('')
        setIsShowAddTeaser(false);
    }

    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="Entrepreneur" pageTitle="Entrepreneur" />
                        <Row>
                            <Col lg={12}>
                                <Card id="leadsList">
                                    <CardHeader className="border-0">
                                        <Row className="g-0 align-items-center mb-0">
                                            <Col sm={4}>
                                                {/* <div className="search-box">
                                                    <Input
                                                        type="text"
                                                        className="form-control search"
                                                        placeholder="Search for Entrepreneur..."
                                                    />
                                                    <i className="ri-search-line search-icon"></i>
                                                </div> */}
                                                <Dropdown isOpen={search_Menu} toggle={toggleSearch}  >
                                                    <DropdownToggle className="btn p-0" tag="button"
                                                    >
                                                        <div className="search-box">
                                                            <Input
                                                                type="text"
                                                                className="form-control search"
                                                                placeholder="Search for Entrepreneur"
                                                            />
                                                            <i className="ri-search-line search-icon"></i>
                                                        </div>

                                                    </DropdownToggle>
                                                    <DropdownMenu className="p-2 dropdown-menu-end dropdown-menu-xl" style={{ maxWidth: "100vh" }}>
                                                        <Row className="p-1">
                                                            <Col lg={6}>
                                                                <div className="mb-2">
                                                                    <Select
                                                                        isClearable={true}
                                                                        placeholder="Select "
                                                                        // isMulti
                                                                        name="leadInvestor"
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-2">
                                                                    <Input
                                                                        type="text"
                                                                        className="form-control search"
                                                                        placeholder="Search"
                                                                    />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <div className="offcanvas-footer border-top p-2 text-center hstack gap-2 justify-content-end">
                                                            <button type="submit" className="btn btn-brand-theme" >
                                                                Search
                                                            </button>
                                                            <button className="btn btn-light" >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </Col>
                                            <div className="col-sm-auto ms-auto">
                                                <div className="hstack gap-2 flex-wrap w-100-ipad">
                                                    <Link className="btn btn-soft-info" to="/investment_committee">IC
                                                        <i className="ri-arrow-right-up-line"></i>
                                                    </Link>
                                                    <Link className="me-0 btn btn-soft-info" to="/contacts"> Contact
                                                        <i className="ri-arrow-right-up-line"></i>
                                                    </Link>
                                                    {moduleAcessData.is_add == 1 && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-brand-theme"
                                                            id="create-btn"
                                                            onClick={e => toggle('AddEdit')}
                                                        >
                                                            <i className="ri-add-line align-bottom me-1"></i> Add
                                                        </button>
                                                    )}
                                                    <button type="button" className="btn btn-soft-info" onClick={e => toggle('Filters')}>
                                                        <i className="ri-filter-2-line align-bottom me-1"></i>
                                                        Filters
                                                    </button>
                                                    {moduleAcessData.is_export == 1 && (
                                                        <button type="button" className="btn btn-soft-info">
                                                            <i className="mdi mdi-export align-bottom me-1"></i>
                                                            Export
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </Row>
                                        {
                                            Object.values(formData).every(x => x === null || x === '') === false &&
                                            <Row>
                                                <div className="filter-choices-input mt-2">
                                                    <div className="choices">
                                                        <div className="choices__inner">
                                                            <div className="choices__list choices__list--multiple">
                                                                {/* {result.map((item, index) => {
                                if (item[0] && item[1]) {

                                  if (item[1].value) {
                                    return <div key={index} className="choices__item choices__item--selectable">{item[1].value} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                  } else {
                                    return <div key={index} className="choices__item choices__item--selectable">{item[1]} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                  }

                                } else { return ''; }
                              })
                              } */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        }
                                    </CardHeader>
                                    <CardBody className="mx-3 pt-0">
                                        <div className="">
                                            <div className="table-responsive table-card">
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
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <EntrepreneurFilter
                    formData={formData}
                    setFormData={setFormData}
                    show={modelName === 'Filters' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <AddEditEntrepreneur
                    show={modelName === 'AddEdit' ? true : false}
                    onCloseClick={() => setModelName("")}
                    type={"entrepreneur"}
                    encodedId={"NQ=="}
                />
                <Call
                    show={modelName === 'Call' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <Task
                    show={modelName === 'Task' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <Rejection
                    show={modelName === 'Rejection' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <SetPassword
                    show={modelName === 'SetPassword' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <Tags
                    show={modelName === 'Tags' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <Application
                    toggle={toggle}
                    show={modelName === 'Application' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <ApplicationComment
                    show={modelName === 'ApplicationComment' ? true : false}
                    onCloseClick={() => setModelName("")}
                />

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

            </React.Fragment></>
    );
};

export default Entrepreneur;
