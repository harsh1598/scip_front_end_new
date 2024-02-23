import React, { useEffect, useState } from "react";
import { Col, Row, Input } from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow, } from "../../Components/Grid/Grid";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const crmcontacts: any[] = [
  {
    id: 1,
    name: "Ratna P",
    CompanyCampaignName: "ADAM PVT LTD",
    task: "Filing Report Presentation - T3 ",
    date: "04/05/2023",
    type: "1",
  },
  {
    id: 2,
    name: "Dinesh K",
    CompanyCampaignName: "Survya Co Watcon Seed 2",
    task: "Document was added by user ",
    date: "05/06/2023",
    type: "0",
  },
  {
    id: 3,
    name: "Jacdon Duby",
    CompanyCampaignName: "Jacdon Foribs LTd",
    task: "Personal Profile",
    date: "06/07/2023",
    type: "0",
  },
];

const headers: GridHeader[] = [
  {
    title: "User Name",
    classTitle: "text-start",
  },
  {
    title: "Company & Campaign Name",
    class: "text-center",
  },
  {
    title: "Task",
    class: "text-center",
  },
  {
    title: "Date",
    class: "text-center",
  },
  {
    title: "Action",
    class: "text-center",
  },
];

const InvestorTbl = () => {
  const [rows, setRows] = useState<GridRow[]>([]);
  const [totalCount, setTotalCount] = useState(100);
  const [modelName, setModelName] = useState("");

  const toggle = (name: any) => {
    setModelName(name);
  };

  useEffect(() => {
    getlist(1);
  }, []);

  const getlist = (page?: any) => {
    let rows: GridRow[] = [];
    const res: any = {};
    res.list = crmcontacts;
    for (var i in res.list) {
      let columns: GridColumn[] = [];
      columns.push({ value: res.list[i].name });
      columns.push({ value: res.list[i].CompanyCampaignName });
      columns.push({ value: res.list[i].task });
      columns.push({ value: res.list[i].date });
      columns.push({ value: actionList(res.list[i].id, res.list[i].type) });
      rows.push({ data: columns });
    }
    setRows(rows);
  };

  const actionList = (id: any, type: any) => {
    return (
      <>
        {
          type === "1" ?
            <>
              <Link to="#" className="btn rounded-pill btn-soft-secondary me-1 btn-sm" onClick={e => toggle('Comments')} > Reply to comments</Link>
            </>
             :
            <>
              <Link to="#" className="btn rounded-pill btn-soft-secondary me-1 btn-sm">View</Link>
            </>
        }
      </>
    );
  };
  
  return (
    <React.Fragment>
      <Row>
        <Col sm={12} lg={4}>
          <div className="mb-2">
            <div className="search-box">
              <Input
                type="text"
                className="form-control search"
                placeholder="User Name"
              />
              <i className="ri-search-line search-icon"></i>
            </div>
          </div>
        </Col>
      </Row>
      <div className="px-3 mt-3">
        <div className="table-card">
          <Grid
            headers={headers}
            rows={rows}
            count={totalCount}
            perPageItem={5}
            errorMessage={"No Data Found"}
            ShowLoader={false}
          />
        </div>
      </div>
      <Comments
        show={modelName === 'Comments' ? true : false}
        onCloseClick={() => setModelName("")}
      />
    </React.Fragment>
  );
};

export default InvestorTbl;
