import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
    Button,
  } from "reactstrap";
  import { Controller, useForm } from "react-hook-form";
  import toast from "react-hot-toast";
  import { useState, useEffect } from "react";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../Components/Grid/Grid";
import WebService from "../../../utility/WebService";
import HelperService from "../../../utility/HelperService";
  
  interface propData {
    show?: boolean;
    onCloseClick?:any;
    workFlowId:any
  }
  const headers: GridHeader[] = [
    {
      title: "Date",
      classTitle: "text-start",
    },
    {
      title: "Information Awaited",
      classTitle: "text-start",
    },
    {
      title: "Next action To Be Taken",
      classTitle: "text-start",
    },
  ];
  
  const InformationAwaitedViewMore = (props: propData) => {
    const [showloader, setShowLoader] = useState(false);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [rows, setRows] = useState<GridRow[]>([]);
  
    useEffect(() => {
      getlist();
    }, [props.show]);
  
    const getlist = () => {
      setShowLoader(true);
      let rows: GridRow[] = [];
      let obj: any = {};
      obj.workflowTaskId = props.workFlowId
      WebService.getAPI({
        action: `/task-status-info`,
        body: obj,
      })
        .then((res: any) => {
          if (res && res.list) {
            setTotalCount(res.count);
            setShowLoader(false);
            for (var i in res.list) {
              let columns: GridColumn[] = [];
              columns.push({ value: res.list[i].added_date ? HelperService.getOrderDateFormat(res.list[i].added_date) : "" });
              columns.push({ value: res.list[i].info_awaited });
              columns.push({ value: res.list[i].next_action });
              rows.push({ data: columns });
            }
            setRows([...rows]);
          }
        })
        .catch((error: any) => {
          setShowLoader(false);
        });
    };

  

  
    const onCloseBlade = () => {
      // validation.resetForm();
      props.onCloseClick();
    };
  


  
    return (
      <Offcanvas
        direction="end"
        isOpen={props.show}
        id="offcanvasExample"
        toggle={props.onCloseClick}
        className="size-md">
        <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
          {"Information Awaited"}
        </OffcanvasHeader>
          {/* <SimpleBar autoHide={false} style={{ maxHeight: "720px" }}> */}
          <OffcanvasBody>
            <Row className="mt-3">
              <Col lg={12}>
                <>
                  <div className="px-3 mt-3">
                    <div className="table-card master-table-height">
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
                </>
              </Col>
            </Row>
          </OffcanvasBody>
  
        {/* </SimpleBar> */}
        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => onCloseBlade()}>
            Cancel
          </button>
        </div>
      </Offcanvas>
    );
  };
  
  export default InformationAwaitedViewMore;
  