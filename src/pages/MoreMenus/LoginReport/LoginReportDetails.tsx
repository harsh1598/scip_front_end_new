import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../Components/Grid/Grid";
import { useState } from "react";
import WebService from "../../../utility/WebService";
import moment from "moment";

interface propData {
    show: boolean;
    onCloseClick: any;
    formData: any;
    setFormData: any;
    userId:any
};

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
        title: "Last Login",
        classTitle: "text-start",
    },
    {
        title: "Last Logout",
        classTitle: "text-center",
    },
    {
        title: "Browser",
        classTitle: "text-start",
    },
    {
        title: "OS",
        classTitle: "text-center",
    },
    {
        title: "IP Address",
        classTitle: "text-center",
    },
];

const LoginReportDetails = (props: propData) => {

    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);

    const onchange = (currentPage: number) => {
        getlist(currentPage);
    };
    // moment(res.list[i].registeredOn).format("DD-MM-YYYY")
    const getlist = (page?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj.offset = page - 1;
        obj.userId = props.userId;
        WebService.getAPI({
            action: `/login-report-details`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].name });
                    columns.push({ value: res.list[i].email });
                    columns.push({ value: moment(res.list[i].registeredOn).format("DD-MM-YYYY")  });
                    columns.push({ value: moment(res.list[i].lastLoggedOn).format("DD-MM-YYYY HH:mm a")  });
                    columns.push({ value: moment(res.list[i].lastLoggedOut).format("DD-MM-YYYY HH:mm a")  });
                    // columns.push({ value: res.list[i].lastLoggedOn });
                    // columns.push({ value: res.list[i].lastLoggedOut });
                    columns.push({ value: res.list[i].browser });
                    columns.push({ value: res.list[i].os });
                    columns.push({ value: res.list[i].ip_address });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-xl"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                Login Report Details
            </OffcanvasHeader>
            <OffcanvasBody className="px-3">
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
            </OffcanvasBody>
        </Offcanvas >
    );
};

export default LoginReportDetails;
