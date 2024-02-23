import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../Components/Grid/Grid";
import WebService from "../../../utility/WebService";
import LoginReportDetails from "./LoginReportDetails";
import LoginFilter from "./LoginFilter";
import moment from "moment";

const headers: GridHeader[] = [
    {
        title: "Sr.no",
        classTitle: "text-start",
    },
    {
        title: "User Name",
        classTitle: "text-start",
    },
    {
        title: "Email Id",
        classTitle: "text-start",
    },
    {
        title: "Date Of Registration",
        classTitle: "text-start",
    },
    {
        title: "Type",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const LoginReport = () => {

    document.title = `${ProjectName} | Login Report`;
    const [modelName, setModelName] = useState<any>("");
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [userId, setUserId] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [usertype, setUserType] = useState<any>([]);
    const [searchText, setSearchText] = useState('');
    const [moduleAcessData, setModuleAcessData] = useState<any>([])

    useEffect(() => {
        getModuleAcesslist()
    }, [usertype?.value]);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "login_report";
        WebService.getAPI({
            action: `/module-access`,
            body: obj,
        })
            .then((res: any) => {
                setModuleAcessData(res.result)
                if (currentPage) {
                    getlist(currentPage, res.result);
                } else {
                    getlist(1, res.result);
                }

            })
            .catch((error: any) => { });
    };
    // moment(date).format("-MM-DD HH:mm:ss")

    const getlist = (page?: any, AcessData?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj.offset = page - 1;
        obj.user_type = usertype?.id ? usertype?.id : "";
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/login-report-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].name });
                    columns.push({ value: res.list[i].email });
                    columns.push({ value: moment(res.list[i].registeredOn).format("DD-MM-YYYY") });
                    columns.push({ value: res.list[i].user_type });
                    columns.push({ value: actionList({ id: res.list[i].userId, menueMoadule: AcessData }) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
            setShowLoader(false);
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
                                {data.menueMoadule.sel_action_button && data.menueMoadule.sel_action_button.length > 0 && data.menueMoadule.sel_action_button.map((res: any) => {
                                    return (<>
                                        {
                                            res == "Login Report Details" && <DropdownItem onClick={e => toggleModel('LoginReportDetails', data.id)}>
                                                <i className="ri-list-unordered align-middle me-1"></i>Login Report Details
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

    const toggleModel = (name: string, id?: any) => {
        setModelName(name);
        if (id) {
            setUserId(id);
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Login Report" pageTitle="Login Report" location={"/admin/menu"} />
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
                                        <Col sm={2}>
                                            {
                                                usertype?.value &&
                                                <Row>
                                                    <div className="filter-choices-input mt-0">
                                                        <div className="choices">
                                                            <div className="choices__inner">
                                                                <div className="choices__list choices__list--multiple">
                                                                    {
                                                                        usertype?.value ?
                                                                            <div className="choices__item choices__item--selectable">{usertype?.value} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => setUserType("")} ></i></div>
                                                                            :
                                                                            ''
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            }
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <div className="col-sm-auto ms-auto">
                                                    <div className="hstack gap-2 flex-wrap">
                                                        <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('LoginFilter')}>
                                                            <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                                                            Filters
                                                        </button>
                                                    </div>
                                                </div>
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
            <LoginReportDetails
                formData={formData}
                setFormData={setFormData}
                userId={userId}
                show={modelName === 'LoginReportDetails' ? true : false}
                onCloseClick={() => {
                    setModelName("");
                    setFormData("");
                }}
            />
            <LoginFilter
                setUserType={setUserType}
                show={modelName === 'LoginFilter' ? true : false}
                onCloseClick={() => {
                    setModelName("");
                    setFormData("");
                }}
            />
        </React.Fragment>
    );
};

export default LoginReport;
