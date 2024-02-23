import React, { useEffect, useState } from "react";
import { Col, Row, Input, Card, CardHeader, Container, } from "reactstrap";
import Grid, {
    GridColumn,
    GridHeader,
    GridRow,
} from "../../Components/Grid/Grid";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../Common/BreadCrumb";
import WebService from "../../utility/WebService";

const headers: GridHeader[] = [
    {
        title: "Page",
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

const DealLayout = () => {
    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState(100);
    const [showLoader, setShowLoader] = useState(false)
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    let history = useNavigate();

    useEffect(() => {
        getlist(1);
    }, []);

    const getlist = (page?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/deal-pages-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({value:page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1,});
                    columns.push({ value: res.list[i].page });
                    columns.push({ value: actionList(res.list[i],) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };


    const actionList = (value: any) => {
        return (
            <div>
                <a className="editGray cursor-pointer" title="Edit" onClick={() => history(`/admin/manage-deal-form-layout-list/${value.id}`)}>
                    <i className="ri-edit-box-line align-middle me-1 font-21" ></i>
                </a>
            </div>
        );
    };

    const onchange = (currentPage: number) => {
        setCurrentPage(currentPage)
        getlist(currentPage);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Deal Layout" pageTitle="Deal Layout" location={"/admin/menu"} />
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
                                                    name="title"
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
                                    <div className="px-3">
                                        <div className="table-card">
                                            <Grid
                                                headers={headers}
                                                rows={rows}
                                                count={totalCount}
                                                errorMessage={"No Data Found"}
                                                ShowLoader={showLoader}
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

export default DealLayout;
