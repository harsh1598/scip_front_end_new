import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input} from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import { ProjectName } from "../../../../Components/constants/layout";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import AddEditRoleBaseSetting from "./AddEditRoleBaseSetting";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
        classTitle: "text-start",
    },
    {
        title: "Slug",
        classTitle: "text-start",
    },
    {
        title: "Description",
        classTitle: "text-start",
    },
    {
        title: "Role",
        classTitle: "text-start",
    },
    {
        title: "Status",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const RoleBaseSetting = () => {

    document.title = `${ProjectName} | Role Base Setting`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [searchText, setSearchText] = useState('');
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [isShowAddRoleBaseSetting, setIsShowAddRoleBaseSetting] = useState(false);
    const [moduleAcessData, setModuleAcessData] = useState<any>([]);

    const [id, setId] = useState<any>();

    useEffect(() => {
        getModuleAcesslist(1);
    }, []);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "role_base_setting";
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
          .catch((error: any) => {});
      };

    const getlist = (page?: any, AcessData?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/rolebase/pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1, originalValue: res.list[i] });
                    columns.push({ value: res.list[i].slug });
                    columns.push({ value: res.list[i].description });
                    columns.push({ value: res.list[i].roles + " " + res.list[i].subroles + " " + res.list[i].web_work_type});
                    columns.push({ value: res.list[i].status == "N" ? " InActive " : "Active " });
                    columns.push({ value: actionList(res.list[i],AcessData) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };


    const actionList = (data: any, AcessData:any) => {
        console.log(AcessData);
        
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
                            {AcessData.is_edit == 1 && (
                                    <DropdownItem 
                                    onClick={() =>
                                        onEdit(data.settingId)
                                    } >
                                        <i className="ri-edit-box-line align-middle me-1" ></i>Edit
                                    </DropdownItem>
                            )}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const onEdit = (id: any) => {
        setIsShowAddRoleBaseSetting(true);
        setId(id)
    };

    const closeAddTeaser = () => {
        setId('')
        setIsShowAddRoleBaseSetting(false);
        getModuleAcesslist(1);
    }

    return (
        <>
        {isShowAddRoleBaseSetting &&
        <AddEditRoleBaseSetting
            show={isShowAddRoleBaseSetting}
            onCloseClick={closeAddTeaser}
            Id={id} />
        }
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="Role Base Setting" pageTitle="Role Base Setting" location={"/admin/menu"} />
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
                                            {moduleAcessData.is_add == 1 && (
                                            <div className="col-sm-auto ms-auto">
                                                <div className="hstack gap-2 flex-wrap">
                                                    <button
                                                        type="button"
                                                        className="btn btn-brand-theme"
                                                        id="create-btn"
                                                        onClick={() => setIsShowAddRoleBaseSetting(true)}>
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
                                                onPageChange={onchange}
                                                // isShowSearch={true}
                                            />
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment></>
    );
};

export default RoleBaseSetting;
