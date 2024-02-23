import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { ProjectName } from "../../../../Components/constants/layout";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import HelperService from "../../../../utility/HelperService";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
        classTitle: "text-start",
    },
    {
        title: "Name",
        classTitle: "text-start",
    },
    {   
        title: "Payment Title",
        class: "text-center",
    },
    {
        title: "Pay Through",
        classTitle: "text-start",
    },
    {
        title: "Amount",
        classTitle: "text-start",
    },
    {
        title: "Transaction Id",
        classTitle: "text-start",
    },
    {
        title: "Status",
        class: "text-center",
    },
    {
        title: "Date",
        class: "text-center",
    },
];

const PaymentLog = () => {

    document.title = `${ProjectName} | Payment Log`;
    const [modelName, setModelName] = useState<any>("");
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [rows, setRows] = useState<GridRow[]>([]);
    const [formData, setFormData] = useState<any>();
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
            action: `/payement-log-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].name });
                    columns.push({ value: res.list[i].payment_type });
                    columns.push({ value: res.list[i].payment_gateway });
                    columns.push({ value: HelperService.formatPrice(res.list[i].amount)+ " " + 'INR' });
                    columns.push({ value: res.list[i].transaction_id});
                    columns.push({ value: isshowallcampaignbtn({ payment_status: res.list[i].payment_status}) });
                    columns.push({ value: HelperService.getUpdatedFormatedTimeWithSlash(res.list[i].updated_date)});
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
        }).catch((error: any) => {
            setShowLoader(false);
        });
    }

    const isshowallcampaignbtn = (data: any) => {
        return (
            <> 
                <span className={data.payment_status === "Paid" ? "badge badge-soft-success fs-12" : "badge badge-soft-danger fs-12"} >{data.payment_status === "Paid" ? "PAID" : "FAILED"}</span>
            </>
        );
    };


    const _changeStatus = (id: any, status: any) => {
        let obj: any = {};
        obj.workflowId = id;
        obj.status = status;
        WebService.postAPI({
            action: `/workflow-update-status`,
            body: obj,
            id: "workflow-modal-submit-btn"
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
                setData({ alert: false, id: 0, status: "" });
                getlist(1);
            }
        }).catch((error: any) => {

        });
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Payment Log" pageTitle="Payment Log" location={"/admin/menu"} />
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

export default PaymentLog;  
