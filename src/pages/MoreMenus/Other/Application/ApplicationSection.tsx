import React, { useEffect, useRef, useState } from "react";
import {
  Col,
  Container,
  Row,
  CardHeader,
  Card,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
} from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import Grid, {
  GridColumn,
  GridHeader,
  GridRow,
} from "../../../../Components/Grid/Grid";
import AddEditApplicationSection from "./AddEditApplicationSection";
import WebService from "../../../../utility/WebService";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ApplicationSection = () => {
  document.title = `${ProjectName} | Application Section`;
  const [modelName, setModelName] = useState<string>("");
  const [rows, setRows] = useState<GridRow[]>([]);
  const [totalCount, setTotalCount] = useState<any>(0);
  const [showloader, setShowLoader] = useState(false);
  const [headers, setHeaders] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");

  const formData = useRef({});
  let { id } = useParams();
  //   const onchange = (currentPage: number) => {
  //     getlist(currentPage);
  //   };
  useEffect(() => {
    getlist(1);
  }, []);
  const getlist = (page?: any) => {
    setShowLoader(true);
    let obj: any = {};
    obj.offset = page - 1;
    obj.applicationId = id;
    obj.keyword = searchText ? searchText : "";
    WebService.getAPI({
      action: `/application-section-pagination-list`,
      body: obj,
    })
      .then((res: any) => {
        if (res && res.coloumns) {
          var arr: any = [];
          var obj: any = {
            title: "Sr No.",
            classTitle: "text-start",
          };
          arr.push(obj);
          for (var i in res.coloumns) {
            var obj: any = {
              title: res.coloumns[i].title,
              db_column: res.coloumns[i].db_column,
              control_type: res.coloumns[i].control_type,
              nature: res.coloumns[i].nature,
              source_value_name: res.coloumns[i].source_value_name,
              classTitle: "text-start",
            };

            arr.push(obj);
          }
          var obj1: any = {
            title: "Action",
            classTitle: "text-start",
          };
          arr.push(obj1);
          setHeaders(arr);
        }
        setRows([]);
        if (res && res.list) {
          setTotalCount(res.count);
          setShowLoader(false);
          let rows: GridRow[] = [];

          for (var i in res.list) {
            let columns: GridColumn[] = [];
            for (var j in arr) {
              if (arr[j].title == "Sr No.") {
                columns.push({
                  value:
                    page == 0
                      ? Number(i) + 1
                      : 10 * Number(page - 1) + Number(i) + 1,
                });
              } else if (arr[j].title == "Action") {
                columns.push({
                  value: actionList({
                    id: res.list[i].sectionId,
                    // active: res.list[i].active,
                  }),
                });
              } else if (
                arr[j].control_type == "SELECT" &&
                arr[j].nature == "DYNAMIC"
              ) {
                columns.push({ value: res.list[i][arr[j].source_value_name] });
              }else {
                columns.push({ value: res.list[i][arr[j].db_column] });
              }
            }
            rows.push({ data: columns });
            setRows([...rows]);
          }
        }
      })
      .catch((error: any) => {
        setShowLoader(false);
      });
  };

  const actionList = (data: any) => {
    return (
      <>
        {/* hstack */}
        <ul className="list-inline  gap-2 mb-0">
          <li className="list-inline-item">
            <UncontrolledDropdown>
              <DropdownToggle
                href="#"
                className="btn btn-soft-secondary btn-sm dropdown"
                tag="button">
                <i className="ri-more-fill align-middle"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem
                  onClick={(e) =>
                    toggleModel("AddEditApplicationSection", data.id)
                  }>
                  <i className="ri-edit-box-line align-middle me-1"></i>Edit
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className="text-body"
                    to={{
                      pathname: `/admin/applicationSubSection/${data.id}`,
                    }}>
                    <i className=" ri-list-unordered  align-middle me-1"></i>{" "}
                    Show Section
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
        </ul>
      </>
    );
  };

  const toggleModel = (name: string, id?: any, parentId?: any) => {
    if (id) {
      WebService.getAPI({
        action: "/application-section-details/" + id,
      })
        .then((res: any) => {
          if (res && res.result) {
            formData.current = res.result;
            setModelName(name);
          }
        })
        .catch((error: any) => {});
    } else {
      formData.current = "";
      setModelName(name);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Application Section"
            pageTitle="Application Section"
            location={"/admin/menu"}
          />
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
                          value={searchText}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyUp={(e) => {
                            if (e.keyCode === 13) {
                              getlist(1);
                            }
                          }}
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <div className="col-sm-auto ms-auto">
                      <div className="hstack gap-2 flex-wrap">
                        <button
                          type="button"
                          className="btn btn-brand-theme"
                          id="create-btn"
                          onClick={(e) =>
                            toggleModel("AddEditApplicationSection", null, id)
                          }>
                          <i className="ri-add-line align-bottom me-1"></i> Add
                        </button>
                      </div>
                    </div>
                  </Row>
                  <div className="px-3">
                    <div className="table-card">
                      <Grid
                        headers={headers}
                        rows={rows}
                        count={totalCount}
                        // perPageItem={5}
                        errorMessage={"No Data Found"}
                        ShowLoader={showloader}
                        // ShowLoader={totalCount == 0 ? true : false}
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
      <AddEditApplicationSection
        formData={formData.current}
        show={modelName === "AddEditApplicationSection" ? true : false}
        getlist={() => getlist(1)}
        onCloseClick={() => {
          setModelName("");
        }}
        parentId={id}
      />
    </React.Fragment>
  );
};

export default ApplicationSection;
