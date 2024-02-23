import React, { useEffect, useState } from "react";
import { Col, Row, Input, Card, CardHeader, Container, Label, } from "reactstrap";
import Grid, {
  GridColumn,
  GridHeader,
  GridRow,
} from "../../Components/Grid/Grid";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrumb from "../Common/BreadCrumb";
import WebService from "../../utility/WebService";
import toast from "react-hot-toast";
import HelperService from "../../utility/HelperService";

const headers: GridHeader[] = [
  {
    title: "Page",
    classTitle: "text-start",
  },
  {
    title: "Section",
    class: "text-center",
  },
  {
    title: "Is Active",
    class: "text-center",
  },
  {
    title: "Action",
    class: "text-center",
  },
];

const DealFormLayoutList = () => {
  const [rows, setRows] = useState<GridRow[]>([]);
  const [totalCount, setTotalCount] = useState(100);
  const [showLoader, setShowLoader] = useState(false)
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  let history = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    getlist(1);
  }, []);

  const getlist = (page?: any) => {
    setShowLoader(true);
    let rows: GridRow[] = [];
    let obj: any = {};
    obj.deal_page_id = id;
    obj.offset = page - 1;
    obj.keyword = searchText ? searchText : ""
    WebService.getAPI({
      action: `/deal-page-layout-pagination-list`,
      body: obj
    }).then((res: any) => {
      if (res && res.list) {
        setTotalCount(res.count);
        for (var i in res.list) {
          let columns: GridColumn[] = [];
          columns.push({ value: res.list[i].page });
          columns.push({ value: res.list[i].section ? HelperService.getTitleCase(res.list[i].section.replaceAll('_', ' ')) : " " });
          columns.push({ value: isActive(res.list[i]) });
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

  const isActive = (data: any) => {
    return (
      <>
        <div className="text-center custom-toggle">
          <div className="custom-switch">
            <input
              type="checkbox"
              checked={data.is_show == 0 ? false : true}
              id={'new_' + data.id}
              onChange={() => {
                {
                  data.is_show = !data.is_show
                  getToggleButtonActive(data.id);
                }
              }}
            />
            <Label htmlFor={'new_' + data.id}>Toggle</Label>
          </div>
        </div>
      </>
    );
  };

  const getToggleButtonActive = (id: any) => {
    if (id) {
      var obj: any = {}
      obj.id = id
      WebService.putAPI({
        action: `/edit-deal-page-layout-status`,
        body: obj,
      })
        .then((res: any) => {
          toast.success(res.message);
          getlist(currentPage)

        })
        .catch((e) => { });
    }
  }


  const actionList = (value: any) => {
    return (
      <div>
        <a className="editGray cursor-pointer" title="Edit" onClick={() => history(`/admin/custom-deal-form-layout/${value.id}`)}>
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
          <BreadCrumb title="Deal Form Layout" pageTitle="Deal Form Layout" location={"/admin/manage-deal-layout-list"} />
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

export default DealFormLayoutList;
