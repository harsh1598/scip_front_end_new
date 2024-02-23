import React , { useEffect, useState }  from "react";
import { Col, Row, Input } from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow} from "../../Components/Grid/Grid";
import { Link } from "react-router-dom";

const crmcontacts: any[] = [
  {
    id: 1,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 2,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 3,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  }, {
    id: 4,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
  },
  {
    id: 5,
    name: "Vanky Ben",
    CompanyCampaignName: "Test Company",
    task: "Company Profile",
    date: "08/05/2023",
    type: "1",
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

const AdvisorTbl = () => {
  const [rows, setRows] = useState<GridRow[]>([]);
  const [totalCount, setTotalCount] = useState(100);

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
      columns.push({ value: actionList(res.list[i].id) });
      rows.push({ data: columns });
    }
    setRows(rows);
  };

  const actionList = (value: any) => {
    return (
      <div>
        <Link to="#" className="btn rounded-pill btn-soft-secondary me-1 btn-sm">View</Link>
      </div>
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
    </React.Fragment>
  );
};

export default AdvisorTbl;
