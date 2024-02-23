import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter, CardBody } from "reactstrap";
import toast from "react-hot-toast";
import Grid, { GridColumn, GridHeader, GridRow } from "../../Components/Grid/Grid";
import { ProjectName } from "../../Components/constants/layout";
import WebService from "../../utility/WebService";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Task from "./Task";
import SetPassword from "./SetPassword";
import Tags from "./Tags";
import Application from "./Application";
import ApplicationComment from "./ApplicationComment";
import AddEditInvestor from "./AddEditInvestor";
import Membership from "./Membership";
import ActiveInActive from "./ActiveInActive";
import InvestorFilter from "./Filter";


const headers: GridHeader[] = [
    {
        title: "User Name",
        classTitle: "text-start",
    },
    {
        title: "Company Name",
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
        title: "Address",
        classTitle: "text-start",
    },
    {
        title: "Registration Date",
        classTitle: "text-start",
    },
    {
        title: "User Code",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const Investor = () => {

    document.title = `${ProjectName} | Investor`;
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
    const [profileData, setProfileData] = useState({ alert: false, id: "", status: "" });
    const [tagsData, setTagsData] = useState({ columns: "" });


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
        obj.code = "investor";
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
                    columns.push({ value: actionList({ id: res.list[i].teaser_id, active: res.list[i].active, menueMoadule: AcessData, }), });
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
                                {data.menueMoadule.sel_action_button &&
                                    data.menueMoadule.sel_action_button.length > 0 &&
                                    data.menueMoadule.sel_action_button.map((res: any) => {
                                        return (
                                            <>
                                                {res == "INV Dashboard" && (
                                                    <DropdownItem href="#">
                                                        <i className="ri-dashboard-2-line align-bottom me-1"></i> INV Dashboard
                                                    </DropdownItem>
                                                )}
                                                {res == "Application" && (
                                                    <DropdownItem href="#" onClick={e => toggle('Application')} >
                                                        <i className="ri-clipboard-line align-bottom me-1"></i> Application
                                                    </DropdownItem>
                                                )}
                                                {res == "More" && (
                                                    <DropdownItem >
                                                        <Link className="text-body" to="/investor/more">
                                                            <i className="ri-menu-line align-bottom me-1"></i> More
                                                        </Link>
                                                    </DropdownItem>
                                                )}
                                                {res == "Message" && (
                                                    <DropdownItem href="#">
                                                        <i className="ri-message-2-line align-bottom me-1"></i> Message
                                                    </DropdownItem>
                                                )}
                                                {res == "Status" && (
                                                    <DropdownItem href="#" onClick={e => toggle('Task')}>
                                                        <i className="ri-checkbox-circle-line align-bottom me-1"></i> Status
                                                    </DropdownItem>
                                                )}
                                                {res == "Active" && (
                                                    <DropdownItem href="#" onClick={e => toggle('ActiveInActive')}>
                                                        <i className="ri-checkbox-circle-line align-bottom me-1"></i> Active
                                                    </DropdownItem>
                                                )}
                                                {res == "Membership" && (
                                                    <DropdownItem href="#" onClick={e => toggle('Membership')}>
                                                        <i className="ri-team-line align-bottom me-1"></i>   Membership
                                                    </DropdownItem>
                                                )}
                                                {/* <DropdownItem  href="#" onClick={e => toggle('Renewals')}>
                      Renewals
                    </DropdownItem> */}
                                                {res == "Renewals" && (
                                                    <DropdownItem >
                                                        <Link className="text-body" to="/renewals">
                                                            <i className="ri-loader-4-fill align-bottom me-1"></i> Renewals
                                                        </Link>
                                                    </DropdownItem>
                                                )}
                                                {res == "Set Temp Password" && (
                                                    <DropdownItem className="dropdown-item" href="#" onClick={e => toggle('SetPassword')}>
                                                        <i className="ri-lock-password-line align-bottom me-1"></i> Set Temp Password
                                                    </DropdownItem>
                                                )}
                                                {res == "Tags" && (
                                                    <DropdownItem className="dropdown-item" href="#" onClick={e => toggle('Tags')}>
                                                        <i className="ri-price-tag-3-line align-bottom me-1"></i> Tags
                                                    </DropdownItem>
                                                )}
                                                {res == "Approve Profile" && (
                                                    <DropdownItem className="dropdown-item" href="#" onClick={e => setProfileData({ alert: true, id: '1', status: '0' })}>
                                                        <i className="ri-chat-check-line align-bottom me-1"></i> Approval Profile
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

    var result = Object.keys(formData).map((key) => [key, formData]);


    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="Investor" pageTitle="Investor" />
                        <Row>
                            <Col lg={12}>
                                <Card id="leadsList">
                                    <CardHeader className="border-0">
                                        <Row className="g-0 align-items-center mb-0">
                                            <Col sm={4}>
                                                <div className="search-box">
                                                    <Input
                                                        type="text"
                                                        className="form-control search"
                                                        placeholder="Search for Investor"
                                                    />
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                            </Col>
                                            <div className="col-sm-auto ms-auto ">
                                                <div className="d-flex hstack gap-2 flex-wrap w-100-ipad">
                                                    {/* <Link to="/kyc_reporting" className="me-3 btn btn-ghost-info text-brand"> KYC Report {" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link> */}
                                                    <Link to="/kyc_reporting" className="me-0 btn btn-soft-info"> KYC Report {" "}
                                                        <i className="ri-arrow-right-up-line"></i>
                                                    </Link>
                                                    {moduleAcessData.is_add == 1 && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-brand-theme"
                                                            id="create-btn"
                                                            onClick={e => toggle('AddEditInvestor')}
                                                        >
                                                            <i className="ri-add-line align-bottom me-1"></i> Add
                                                        </button>
                                                    )}
                                                    <button type="button" className="btn btn-soft-info" onClick={e => toggle('Tags')}>
                                                        <i className="ri-price-tag-3-line  align-bottom me-1"></i>{" "}
                                                        Tags
                                                    </button>
                                                    <button type="button" className="btn btn-soft-info" onClick={e => toggle('Filters')}>
                                                        <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                                                        Filters
                                                    </button>
                                                    {moduleAcessData.is_export == 1 && (
                                                        <button type="button" className="btn btn-soft-info">
                                                            <i className="ri-file-excel-line  align-bottom me-1"></i>{" "}
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
                                        {/* {
                    Object.values(formData).every(x => x === null || x === '') === false &&
                    <Row>
                      <div className="filter-choices-input mt-2">
                        <div className="choices">
                          <div className="choices__inner">
                            <div className="choices__list choices__list--multiple">
                              {formData && Object.keys(formData).map(function (key, i) {
                                console.log(key)
                                if (formData[key]) {
                                  return <div key={i} className="choices__item choices__item--selectable">{formData[key]} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(key)} ></i></div>;
                                } else { return ''; }
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  } */}
                                        {/* {
                    Object.values(formData).every(x => x === null || x === '') === false &&
                    <Row>
                      <div className="filter-choices-input mt-2">
                        <div className="choices">
                          <div className="choices__inner">
                            <div className="choices__list choices__list--multiple">
                              {result.map((item, index) => {
                                  if (item[0] && item[1].value) {
                                    return <div key={index} className="choices__item choices__item--selectable">{item[1].value} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                  } else if (item[0] && item[1]){
                                    if(item[1].date1 && item[1].date2){
                                      return <div key={index} className="choices__item choices__item--selectable">{item[1].date1 }{"-"}{item[1].date2}  {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                    }else{
                                      return <div key={index} className="choices__item choices__item--selectable">{item[1]} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                    }
                                 
                                  }else { return ''; }
                              })
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  } */}
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

                <InvestorFilter
                    formData={formData}
                    setFormData={setFormData}
                    show={modelName === 'Filters' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <AddEditInvestor
                    show={modelName === 'AddEditInvestor' ? true : false}
                    onCloseClick={() => setModelName("")}
                    type={"investor"}
                    encodedId={"Nw=="}
                />
                <Tags
                    tagsData={tagsData}
                    setTagsData={setTagsData}
                    show={modelName === 'Tags' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <SetPassword
                    show={modelName === 'SetPassword' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <Membership
                    show={modelName === 'Membership' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <ActiveInActive
                    show={modelName === 'ActiveInActive' ? true : false}
                    onCloseClick={() => setModelName("")}
                />
                <Task
                    show={modelName === 'Task' ? true : false}
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

export default Investor;
