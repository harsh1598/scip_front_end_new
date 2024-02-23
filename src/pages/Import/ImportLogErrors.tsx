import React, { useEffect, useState } from "react";
import { Card, CardHeader, Col, Container, Input, Row } from 'reactstrap';
import Grid, { GridColumn, GridHeader, GridRow, } from "../../Components/Grid/Grid";
import { ProjectName } from "../../Components/constants/layout";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import WebService from "../../utility/WebService";
import HelperService from "../../utility/HelperService";
import { useParams } from "react-router-dom";

const headers: GridHeader[] = [
    {
        title: "Sr. No.",
        classTitle: "text-start",
    },
    {
        title: "Error",
        class: "text-center",
    },
    {
        title: "Module",
        class: "text-center",
    },
    {
        title: "Added Date",
        class: "text-center",
    }
];

const ImportLogErrors = () => {
    document.title = `${ProjectName} | Import Log Errors`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState(2);
    const [showloader, setShowLoader] = useState(false);
    const [searchText, setSearchText] = useState('');
    let { id } = useParams();

    useEffect(() => {
        getlist(1);
    }, []);

    const getlist = (page?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj.logId = id
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/import-error-log-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].error });
                    columns.push({ value: res.list[i].tab ? HelperService.removeUnderscoreWithCapitalLetter(res.list[i].tab) : "" });
                    columns.push({ value: res.list[i].added_date ? HelperService.getUpdatedFormatedTimeWithSlash(res.list[i].added_date) : "" });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Import Log Errors" pageTitle="Import Log Errors" location="/importLog" />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center">
                                        <Col sm={12} lg={4}>
                                            <div className="mb-2">
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
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="px-3">
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
            </div>
        </React.Fragment>
    );
};

export default ImportLogErrors;
