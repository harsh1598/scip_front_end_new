import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, Input } from "reactstrap";
import { ProjectName } from "../../../../Components/constants/layout";
import toast from "react-hot-toast";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { useParams } from "react-router-dom";
import HelperService from "../../../../utility/HelperService";

const headers: GridHeader[] = [
    {
        title: "#",
        classTitle: "text-start",
    },
    {
        title: "Invite Name",
        classTitle: "text-start",
    },
    {
        title: "Invite Email",
        classTitle: "text-start",
    },
    {
        title: "OTP",
        class: "text-center",
    },
    {
        title: "Date",
        classTitle: "text-start",
    },
];

const CapitalRaiselog = () => {

    document.title = `${ProjectName} |  Capital Raise log`;
    const [modelName, setModelName] = useState<any>("");
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    let { id } = useParams();


    useEffect(() => {
        getlist(1);
    }, []);

    const onchange = (currentPage: Number) => {
        getlist(currentPage);
    };

    const getlist = (page?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        const res: any = {};
        let obj: any = {};
        obj.id = id;
        obj.offset = page - 1;
        
        WebService.getAPI({
            action: `/capital-raise-user-details`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setShowLoader(false);
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].name });
                    columns.push({ value: res.list[i].email });
                    columns.push({ value: res.list[i].otp_no });
                    columns.push({ value: HelperService.getUpdatedFormatedTimeWithSlash(res.list[i].updated_date)});
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
        }).catch((error: any) => {
            setShowLoader(false);
        });
    }




    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Capital Raise log" pageTitle="Capital Raise log" location={"/admin/menu"} />
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
                                                    value={formData ? formData.title : ""}
                                                    onChange={(e) => setFormData({ keyword: e.target.value })}
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

export default CapitalRaiselog;  
