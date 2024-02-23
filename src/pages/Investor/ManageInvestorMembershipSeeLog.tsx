import React, { useEffect, useState } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,

} from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../Components/Grid/Grid";
import WebService from "../../utility/WebService";
import HelperService from "../../utility/HelperService";


interface propData {
  show: boolean;
  onCloseClick: any;
  Id: any;
};


const headers: GridHeader[] = [
  {
    title: "Sr. No",
    classTitle: "text-start",
  },
  {
    title: "Name",
    classTitle: "text-start",
  },
  {
    title: "Membership Renewal Date",
    class: "text-center",
  },
  {
    title: "Added By",
    class: "text-center",
  },
  {
    title: "Updated Date",
    class: "text-center",
  },
];

const ManageInvestorMembershipSeeLog = (props: propData) => {
  const [showloader, setShowLoader] = useState(false);
  const [totalCount, setTotalCount] = useState<any>(0);
  const [rows, setRows] = useState<GridRow[]>([]);


  useEffect(() => {
      getlist(1);
  }, [props.show])

  const getlist = (page?: any) => {
    setShowLoader(true);
    let rows: GridRow[] = [];
    let obj: any = {};
    obj.offset = page - 1;
    obj.userId = props.Id ? props.Id : "";
    WebService.getAPI({
      action: `/get-investor-membership-renewal-log`,
      body: obj
    }).then((res: any) => {
      if (res && res.list) {
        setTotalCount(res.count);
        setShowLoader(false);
        for (var i in res.list) {
          let columns: GridColumn[] = [];
          columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
          columns.push({ value: res.list[i].name });
          columns.push({ value: res.list[i].membership_renewal_date });
          columns.push({ value: res.list[i].addby });
          columns.push({ value: res.list[i].updated_date ? HelperService.getDateFormate(res.list[i].updated_date) : "" });
          rows.push({ data: columns });
        }
        setRows([...rows]);
      }
    }).catch((error: any) => {
      setShowLoader(false);
    });
  }

  return (
    <Offcanvas
      direction="end"
      isOpen={props.show}
      id="offcanvasExample"
      toggle={props.onCloseClick}
      className="size-md"
    >
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
        Membership Renewal Log
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <div className="px-3">
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

          </div>
        </OffcanvasBody>
      </form>
    </Offcanvas>
  );
};

export default ManageInvestorMembershipSeeLog;
