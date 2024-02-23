import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../Components/Grid/Grid";
import WebService from "../../../utility/WebService";
import moment from "moment";

const headers: GridHeader[] = [
    {
        title: "Sr.no",
        classTitle: "text-start",
    },
    {
        title: "Name",
        classTitle: "text-start",
    },
    {
        title: "User Type",
        classTitle: "text-start",
    },
    {
        title: "Company & Campaign",
        classTitle: "text-start",
    },
    {
        title: "Date",
        classTitle: "text-start",
    },
    {
        title: "Doc Title",
        class: "text-center",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const DocumentDownloadLog = () => {

    document.title = `${ProjectName} | Login Report`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [moduleAcessData, setModuleAcessData] = useState<any>([])

    useEffect(() => {
        getModuleAcesslist()
    }, []);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "document_download_log";
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
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/document-download-log-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].name });
                    columns.push({ value: res.list[i].user_type });
                    columns.push({ value: res.list[i].comp_name });
                    columns.push({ value: moment(res.list[i].updated_date).format("DD-MM-YYYY HH:mm a") });
                    // columns.push({ value: res.list[i].updated_date });
                    columns.push({ value: res.list[i].doc_title });
                    columns.push({ value: actionList({ id: res.list[i].docId, menueMoadule: AcessData }) });
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
                                            res == "Download" && <DropdownItem onClick={e => download(data.doc_title)}>
                                                <i className="ri-download-2-line align-middle me-1"></i>Download
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

    const download = (url: any) => {
        if (url) {
            window.open(url)
        }
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Document Download Log" pageTitle="Document Download Log" location={"/admin/menu"} />
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
        </React.Fragment>
    );
};

export default DocumentDownloadLog;
