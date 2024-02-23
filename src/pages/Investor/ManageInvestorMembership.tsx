import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter, CardBody, Button, Spinner } from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../Components/Grid/Grid";
import { ProjectName } from "../../Components/constants/layout";
import WebService from "../../utility/WebService";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import HelperService from "../../utility/HelperService";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { Link } from "react-router-dom";
import ManageInvestorMembershipFilter from "./ManageInvestorMembershipFilter";
import ManageInvestorMembershipExpiryDate from "./ManageInvestorMembershipExpiryDate";
import ManageInvestorMembershipSeeLog from "./ManageInvestorMembershipSeeLog";

const headers: GridHeader[] = [
    {
        title: "Date of Registration",
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
        title: "Contact",
        classTitle: "text-start",
    },
    {
        title: "Expiry Date",
        classTitle: "text-start",
    },
    {
        title: "Membership Status",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const ManageInvestorMembership = () => {

    document.title = `${ProjectName} |Manage Investor Membership`;
    const [modelName, setModelName] = useState<any>("");
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [filterData, setFilterData] = useState<any>([]);
    const [filterData2, setFilterData2] = useState<any>([]);
    const [isShowAddExpiryDate, setIsShowAddExpiryDate] = useState(false);
    const [id, setId] = useState<any>();
    const [seeLogId, setSeeLogId] = useState<any>();
    const [isShowSeeLog, setIsShowSeeLog] = useState(false);
    const [data, setData] = useState({ alert: false });
    const [userOtp, setUserOtp] = useState<string>('');
    const [error, setError] = useState<any>(false);
    const [loading, setLoading] = useState<any>(false);
    const [searchText, setSearchText] = useState('');
    const [moduleAcessData, setModuleAcessData] = useState<any>([])

    useEffect(() => {
        getModuleAcesslist()
    }, [filterData]);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "membership_renewals";
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
            action: `/investor-membership-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: res.list[i].registeredOn ? HelperService.getDateFormate(res.list[i].registeredOn) : "" });
                    columns.push({ value: res.list[i].name });
                    columns.push({ value: res.list[i].email });
                    columns.push({ value: res.list[i].phone });
                    columns.push({ value: res.list[i].membership_renewal_date ? HelperService.getDateFormate(res.list[i].membership_renewal_date) : " " });
                    columns.push({ value: res.list[i].is_membership_accepted == 'Y' ? 'YES' : 'NO' });
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
                                {data.menueMoadule.is_edit == 1 &&

                                    <DropdownItem onClick={() =>
                                        onEdit(data.id)
                                    } >
                                        <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                    </DropdownItem>
                                }
                                {data.menueMoadule.sel_action_button && data.menueMoadule.sel_action_button.length > 0 && data.menueMoadule.sel_action_button.map((res: any) => {
                                    return (<>
                                        {
                                            res == "See Log" && <DropdownItem onClick={() =>
                                                onSeeLog(data.id)
                                            }>
                                                <i className="ri-time-line align-middle me-1"></i>See Log
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

    const onEdit = (id: any) => {
        setIsShowAddExpiryDate(true);
        setId(id)
    };

    const closeAddExpiryDate = () => {
        setId('')
        setIsShowAddExpiryDate(false);
        getModuleAcesslist(1);
    }

    const onSeeLog = (id: any) => {
        setIsShowSeeLog(true);
        setSeeLogId(id)
    };

    const closeSeeLog = () => {
        setSeeLogId('')
        setIsShowSeeLog(false);
        getModuleAcesslist(1);
    }

    const toggle = (name: any) => {
        setModelName({ name: name });
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

    const onClickExport = () => {
        var obj: any = {}
        obj.type = 'investor_membership'
        WebService.postAPI({
            action: `/export/generate-otp`,
            body: obj,
        })
            .then((res: any) => {
                if (res) {
                    setData({ alert: true })
                }
            })
            .catch((e) => {

            });
    }

    const sendOtp = () => {
        var obj: any = {}
        for (let key in filterData2) {
            if (key && filterData2[key]) {
                obj[key] = filterData2[key].id ? filterData2[key].id : filterData2[key];
            }
        }
        obj.type = 'investor_membership';
        obj.otp = userOtp;
        WebService.postAPI({
            action: "/investor-excel-url",
            body: obj
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
                if (res.url) {
                    window.open(res.url)
                    setData({ alert: false })
                    setUserOtp("")
                }
            }
        }).catch((error: any) => {
            setError(true);
            setLoading(false);
        });
    }

    const handleChange = (value: any) => {
        setUserOtp(value)
    }
    // const onClickExport = () => {
    //     WebService.postAPI({
    //         action: `/investor-excel-url?profileStatus=${filterData?.profileStatus?.value ? filterData?.profileStatus?.value : " "}&isverified=${filterData?.verifiedStatus?.value ? filterData?.verifiedStatus?.value : " "}&is_membership_accepted=${filterData?.is_membership_accepted?.value ? filterData?.is_membership_accepted?.value : " "}&searchDate=${filterData.searchDate ? filterData.searchDate : " "}`,
    //         body: null,
    //     })
    //         .then((res: any) => {
    //             if (res.url) {
    //                 window.open(`${res.url}`)
    //             }
    //             else {
    //                 toast.error(res.Message)
    //             }
    //         })
    //         .catch((e) => { });
    // }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Manage Investor Membership" pageTitle="Manage Investor Membership" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="mb-1">
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
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <div className="col-sm-auto ms-auto">
                                                    <div className="d-flex hstack gap-2 flex-wrap">
                                                        <button type="button" className="btn btn-soft-info" onClick={e => toggle('RenewalsFilter')}>
                                                            <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                                                            Filters
                                                        </button>
                                                        <button type="button" className="btn btn-soft-info" onClick={() => setIsShowAddExpiryDate(true)}>
                                                            Manage Expiry Date
                                                        </button>
                                                        {moduleAcessData.is_export == 1 &&
                                                            <button type="button" className="btn btn-soft-info" onClick={() => onClickExport()}>
                                                                <i className="mdi mdi-export  align-bottom me-1"></i>{" "}
                                                                Export
                                                            </button>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                    <Row>
                                        <Col sm={8}>
                                            {
                                                filterData &&
                                                <Row>
                                                    <div className="filter-choices-input">
                                                        <div className="choices">
                                                            <div className="choices__inner">
                                                                <div className="choices__list choices__list--multiple">
                                                                    {filterData?.length > 0 && filterData.map((chat: any, index: any) => {
                                                                        console.log('ffsdfsdf', filterData[index].id);
                                                                        console.log('chat', chat);

                                                                        return <>
                                                                            {
                                                                                filterData[index].data.id ?
                                                                                    <div className="choices__item choices__item--selectable">{filterData[index].data.value} {" "} <i className="ri-close-line align-bottom me-1 "
                                                                                        onClick={e => {
                                                                                            updateFilter(index, chat.key)
                                                                                        }
                                                                                        }
                                                                                    ></i></div>
                                                                                    :
                                                                                    <div className="choices__item choices__item--selectable">{filterData[index].data} {" "} <i className="ri-close-line align-bottom me-1 "
                                                                                        onClick={e => {
                                                                                            updateFilter(index, chat.key)
                                                                                        }
                                                                                        }
                                                                                    ></i></div>
                                                                            }
                                                                        </>
                                                                    })}
                                                                    {/* {
                                                                        filterData?.profileStatus?.id ?
                                                                            <div className="choices__item choices__item--selectable">{filterData?.profileStatus?.value} {" "} <i className="ri-close-line align-bottom me-1 "
                                                                                onClick={e => {
                                                                                    filterData.profileStatus.id = "";
                                                                                    filterData.profileStatus.value = "";
                                                                                    setFilterData({ ...filterData })
                                                                                }
                                                                                }
                                                                            ></i></div>
                                                                            :
                                                                            ''
                                                                    }
                                                                    {
                                                                        filterData?.verifiedStatus?.id ?
                                                                            <div className="choices__item choices__item--selectable">{filterData?.verifiedStatus?.value}<i className="ri-close-line align-bottom me-1 "
                                                                                onClick={e => {
                                                                                    filterData.verifiedStatus.id = "";
                                                                                    filterData.verifiedStatus.value = "";
                                                                                    setFilterData({ ...filterData })
                                                                                }
                                                                                }
                                                                            ></i></div>
                                                                            :
                                                                            ''
                                                                    }
                                                                    {
                                                                        filterData?.is_membership_accepted?.id ?
                                                                            <div className="choices__item choices__item--selectable">{filterData?.is_membership_accepted?.value} {" "} <i className="ri-close-line align-bottom me-1 "
                                                                                onClick={e => {
                                                                                    filterData.is_membership_accepted.id = "";
                                                                                    filterData.is_membership_accepted.value = "";
                                                                                    setFilterData({ ...filterData })
                                                                                }
                                                                                }  ></i></div>
                                                                            :
                                                                            ''
                                                                    }
                                                                    {
                                                                        filterData?.searchDate ?
                                                                            <div className="choices__item choices__item--selectable">{filterData?.searchDate ? HelperService.getOrderDateFormat(filterData?.searchDate) : ""} {" "} <i className="ri-close-line align-bottom me-1 "
                                                                                onClick={e => {
                                                                                    filterData.searchDate = "";
                                                                                    setFilterData({ ...filterData })
                                                                                }
                                                                                }
                                                                            ></i></div>
                                                                            :
                                                                            ''
                                                                    } */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            }
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
            </div >
            {/* Modal */}

            <Modal size="md" isOpen={data.alert} centered>
                <ModalHeader className="mb-2" toggle={() => setData({ alert: false })}></ModalHeader>
                <ModalFooter className="">
                    <Row className="justify-content-center">
                        <Col>
                            <Card className="mt-4">
                                <CardBody className="p-4">
                                    <div className="mb-4">
                                        <div className="avatar-lg mx-auto">
                                            <div className="avatar-title bg-light text-brand display-5 rounded-circle">
                                                <i className="ri-mail-line"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-2 mt-4">
                                        <div className="text-muted text-center mb-4 mx-lg-3">
                                            <h4 className="">Verify Your Email</h4>
                                            <p>Please enter the 4 digit code sent to Email</p>
                                        </div>

                                        <form>
                                            <OTPInput
                                                onChange={handleChange}
                                                value={userOtp}
                                                inputStyle="otpInputStyle"
                                                numInputs={4}
                                                shouldAutoFocus={true}
                                                renderSeparator={<span></span>}
                                                renderInput={(props) => <input {...props} />}

                                            />
                                        </form>
                                        <div className="mt-3">
                                            <Button
                                                type="button"
                                                disabled={error ? false : loading ? true : false} className="w-100 btn-brand-theme"
                                                onClick={() => sendOtp()}
                                            >
                                                {error ? null : loading ? (
                                                    <Spinner size="sm" className="me-2">
                                                        {" "}
                                                        Loading...{" "}
                                                    </Spinner>
                                                ) : null}
                                                Verify OTP
                                            </Button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <div className="mt-4 text-center">
                                <p className="mb-0">Didn't receive a code ? <Link to="" className="fw-semibold text-brand text-decoration-underline" onClick={e => onClickExport()}>Resend OTP</Link> </p>
                            </div>
                        </Col>
                    </Row>
                </ModalFooter>
            </Modal>
            <ManageInvestorMembershipFilter
                formData={formData}
                setFilterData={setFilter}
                show={modelName.name === 'RenewalsFilter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <ManageInvestorMembershipExpiryDate
                show={isShowAddExpiryDate}
                onCloseClick={closeAddExpiryDate}
                Id={id}
            />
            <ManageInvestorMembershipSeeLog
                show={isShowSeeLog}
                onCloseClick={closeSeeLog}
                Id={seeLogId}
            />
        </React.Fragment >
    );
};

export default ManageInvestorMembership;
