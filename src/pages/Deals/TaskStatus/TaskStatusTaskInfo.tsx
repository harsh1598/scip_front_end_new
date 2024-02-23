import React, { Fragment, useEffect, useState } from "react";
import {
    Button,
    Col,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Row,
} from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../Components/Grid/Grid";
import WebService from "../../../utility/WebService";
import HelperService from "../../../utility/HelperService";

interface propdata {
    show: any;
    onCloseClick: any;
    workFlowId: any;
}

const headers: GridHeader[] = [
    {
        title: "CheckList",
        classTitle: "text-start",
    },
    {
        title: "Comment",
        classTitle: "text-start",
    },
    {
        title: "Checked",
        classTitle: "text-start",
    },
    {
        title: "Added By",
        classTitle: "text-start",
    },
    {
        title: "Date",
        classTitle: "text-start",
    },
];


const TaskStatusTaskInfo = (props: propdata) => {
    const [totalCount, setTotalCount] = useState<any>(0);
    const [rows, setRows] = useState<GridRow[]>([]);
    const [showloader, setShowLoader] = useState(false);

    useEffect(() => {
        getlist();
      }, [props.show]);
    
      const getlist = () => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj.workflowTaskId = props.workFlowId
        WebService.getAPI({
          action: `/task-status-log-info`,
          body: obj,
        })
          .then((res: any) => {
            if (res && res.list) {
              setTotalCount(res.count);
              setShowLoader(false);
              for (var i in res.list) {
                let columns: GridColumn[] = [];
                columns.push({ value: res.list[i].info_awaited });
                columns.push({ value: res.list[i].info_awaited });
                columns.push({ value: res.list[i].info_awaited });
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
        // <Offcanvas
        //     isOpen={props.show}
        //     direction="end"
        //     toggle={props.onCloseClick}
        //     id="offcanvasCreateGroup"
        //     className="border-bottom size-md"
        // >
        //     <OffcanvasHeader
        //         className="bg-light"
        //         toggle={props.onCloseClick}
        //         id="offcanvasRightLabel"
        //     >
        //         {" "}
        //         Task Info
        //     </OffcanvasHeader>
        //     <OffcanvasBody className="px-0 overflow-hidden">
        //         <div className="px-4">
        //             <div className="table-responsive table-card">
        //                 <table className="table align-middle table-nowrap table-striped-columns mb-0">
        //                     <thead className="table-light">
        //                         <tr>
        //                             <th>#</th>
        //                             <th scope="col">Checklist</th>
        //                             <th scope="col">Comment</th>
        //                             <th scope="col">Checked</th>
        //                             <th scope="col">Added By</th>
        //                             <th scope="col">Date</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {
        //                             data && data.length && data.map((item, index) => {
        //                                 return <Fragment key={index}>
        //                                    <tr>
        //                                         <td>1</td>
        //                                         <td>{item.checklist}</td>
        //                                         <td>{item.comment}</td>
        //                                         <td>{item.checked}</td>
        //                                         <td>{item.addedBy}</td>
        //                                         <td>{item.date}</td>
        //                                     </tr>
        //                                 </Fragment>
        //                             })
        //                         }
        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>
        //     </OffcanvasBody>
        //     <div className="offcanvas-foorter border p-3 text-center">
        //         <div className="hstack gap-2 justify-content-end">
        //             <Button toggle={props.onCloseClick} className="btn btn-light">
        //                 Cancel
        //             </Button>
        //         </div>
        //     </div>
        // </Offcanvas>




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

export default TaskStatusTaskInfo;
