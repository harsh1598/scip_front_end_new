import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, Input } from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import { ProjectName } from "../../../../Components/constants/layout";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import ModulesFilter from "./ModulesFilter";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
        classTitle: "text-start",
    },
    {
        title: "Column Title",
        classTitle: "text-start",
    },
    {
        title: "Page",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const MoreMenuUserModules = () => {

    document.title = `${ProjectName} | User Modules`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [filterData, setFilterData] = useState<any>([]);
    const [isShowFilter, setIsShowFilter] = useState(false);
    const [searchText, setSearchText] = useState('');

    let { id } = useParams();
    useEffect(() => {
        getlist(1);
    }, [filterData]);

    const onchange = (currentPage: number) => {
        getlist(currentPage);
    };

    const getlist = (page?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj = filterData;
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        obj.userId = id;
        WebService.getAPI({
            action: `/syndicate-user-modules-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].column_title });
                    columns.push({ value: res.list[i].module_type.charAt(0).toUpperCase() + res.list[i].module_type.slice(1) });
                    columns.push({ value: actionList({ id: res.list[i].id, is_checked: res.list[i].is_checked }, i) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    const handleCheckboxChange = (columnId: any, checked: any) => {
        let obj: any = {};
        obj.userId = id;
        obj.columnId = columnId;
        if (checked == 'Y') {
            obj.checked = 'N';
        } else {
            obj.checked = 'Y';
        }
        WebService.postAPI({
            action: `/syndicate-user-modules-save-module`,
            body: obj,
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
                getlist(1);
            }
        }).catch((error: any) => {

        });
    }
    // checked = { data.is_checked === 'Y' }

    const actionList = (data: any, index: any) => {
        return (
            <>
                <ul className="list-inline  gap-2 mb-0">
                    <li className="list-inline-item">
                        <div className="form-check form-switch form-switch-md" dir="ltr">
                            <input type="checkbox" className="form-check-input" id="customSwitchsizemd"
                                checked={data.is_checked == 'Y' ? true : false} onChange={() => {
                                    handleCheckboxChange(data.id, data.is_checked);
                                    if (data.is_checked == 'Y') {
                                        data.is_checked = 'N';
                                    } else {
                                        data.is_checked = 'Y';
                                    }
                                }} />
                        </div>
                    </li>
                </ul>
            </>
        );
    };

    const closeFilter = () => {
        setIsShowFilter(false);
        getlist(1);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="User Modules" pageTitle="User Modules" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="mb-4">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input type="text"
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
                                        <Col sm={2}>
                                            {
                                                filterData?.module_type &&
                                                <Row>
                                                    <div className="filter-choices-input mt-0">
                                                        <div className="choices">
                                                            <div className="choices__inner">
                                                                <div className="choices__list choices__list--multiple">
                                                                    {
                                                                        filterData?.module_type ?
                                                                            <div className="choices__item choices__item--selectable">{filterData?.module_type} <i className="ri-close-line align-bottom me-1 " onClick={e => {
                                                                                filterData.module_type = "";
                                                                                setFilterData({ ...filterData })
                                                                            }
                                                                            } ></i></div>
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
                                                <button
                                                    type="button"
                                                    className="btn btn-soft-info"
                                                    onClick={() => setIsShowFilter(true)}>
                                                    <i className="ri-filter-3-line align-bottom me-1"></i>
                                                    Filters
                                                </button>
                                            </div>
                                        </div>
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
            <ModulesFilter
                setFilterData={setFilterData}
                show={isShowFilter}
                onCloseClick={closeFilter}
            />
        </React.Fragment >
    );
};

export default MoreMenuUserModules;
