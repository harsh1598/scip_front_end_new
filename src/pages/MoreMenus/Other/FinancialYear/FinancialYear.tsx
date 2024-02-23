import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, Input, Label } from "reactstrap";
import { ProjectName } from "../../../../Components/constants/layout";
import toast from "react-hot-toast";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
        classTitle: "text-start",
    },
    {
        title: "Title",
        classTitle: "text-start",
    },
    {
        title: "Formate",
        class: "text-center",
    },
    {
        title: "Status",
        classTitle: "text-start",
    },
    {
        title: "Action",
        classTitle: "text-start",
    },
];

const FinancialYear = () => {

    document.title = `${ProjectName} | Financial Year Format Setting`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        getlist(1);
    }, []);

    const onchange = (currentPage: number) => {
        getlist(currentPage);
    };

    const getlist = (page?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        const res: any = {};
        let obj: any = {};
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/year-format-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].title });
                    columns.push({ value: res.list[i].code_format });
                    columns.push({ value: res.list[i].is_applied == 'Y' ? "Active  " : "Inactive" });
                    columns.push({ value: isApplybtn(res.list[i]) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
        }).catch((error: any) => {
            setShowLoader(false);
        });
    }

    const isApplybtn = (data: any) => {
        return (
            <>
                <div className="form-check">
                    <input
                        className="form-check-input me-2"
                        type="radio"
                        value=""
                        checked={data.is_applied == 'Y' ? true : false}
                        id="auth-remember-check"
                        onClick={() => {
                            onClickApply(data.id)
                        }}
                    />
                    <Label className="form-check-label" htmlFor="auth-remember-check"> Apply </Label>
                </div>
            </>
        );
    };


    const onClickApply = (id: any) => {
        let obj: any = {};
        obj.id = id;
        WebService.postAPI({
            action: `/update-year-format`,
            body: obj,
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
                getlist(1);
            }
        }).catch((error: any) => {

        });
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Financial Year Format Setting" pageTitle="Financial Year Format Setting" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="mb-4">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input type="text"
                                                    className="form-control search" placeholder="Title"
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
            </div>

        </React.Fragment>
    );
};

export default FinancialYear;  
