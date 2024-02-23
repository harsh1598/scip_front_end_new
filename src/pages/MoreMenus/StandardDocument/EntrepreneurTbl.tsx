import React, { useEffect, useState } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalFooter } from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../Components/Grid/Grid";
import WebService from "../../../utility/WebService";
import toast from "react-hot-toast";
import moment from "moment";

const headers: GridHeader[] = [
    {
        title: "Sr.no",
        classTitle: "text-start",
    },
    {
        title: "Document Name",
        classTitle: "text-start",
    },
    {
        title: "Update Date",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

interface propData {
    toggleModel: any;
    customActiveTab: any
};

const EntrepreneurTbl = (props: propData) => {

    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
    const [moduleAcessData, setModuleAcessData] = useState<any>([])

    useEffect(() => {
        if (props.customActiveTab == "1") {
            getModuleAcesslist()

            // getlist(1);
        }
    }, [props.customActiveTab]);

    const onchange = (currentPage: number) => {
        getModuleAcesslist(currentPage);
    };

    const getModuleAcesslist = (currentPage?: any) => {
        let obj: any = {};
        obj.code = "standard_documents";
        WebService.getAPI({
            action: `/module-access`,
            body: obj,
        })
            .then((res: any) => {
                setModuleAcessData(res.result)
                if (currentPage) {
                    getlist(currentPage, res.result);
                } else {
                    getlist(1, res.result);
                }

            })
            .catch((error: any) => { });
    };

    const getlist = (page?: any, AcessData?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj.offset = page - 1;
        obj.userType = "entrepreneur";
        WebService.getAPI({
            action: `/standard-document-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].doc_title });
                    // columns.push({ value: res.list[i].updated_date });
                    columns.push({ value: moment(res.list[i].updated_date).format("DD-MM-YYYY HH:mm a") });
                    columns.push({ value: actionList({ id: res.list[i].docId, doc_file: res.list[i].doc_file, active: res.list[i].status, menueMoadule: AcessData }) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
            setShowLoader(false);
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    const actionList = (data: any) => {
        return (
            <> {/* hstack */}
                <ul className="list-inline  gap-2 mb-0">
                    <li className="list-inline-item">
                        <UncontrolledDropdown>
                            <DropdownToggle
                                href="#"
                                className="btn btn-soft-secondary btn-sm dropdown"
                                tag="button"
                            >
                                <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                {data.menueMoadule.is_edit == 1 &&
                                    <DropdownItem onClick={e => props.toggleModel('AddEditDocument', data.id)}>
                                        <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                    </DropdownItem>
                                }
                                {data.menueMoadule.sel_action_button && data.menueMoadule.sel_action_button.length > 0 && data.menueMoadule.sel_action_button.map((res: any) => {
                                    return (<>
                                        {
                                            res == "Active/Inactive" && <>
                                                {
                                                    data.active === "Y" && <DropdownItem
                                                        onClick={(e) => setData({ alert: true, id: data.id, status: "N" })}>
                                                        <i className="ri-close-circle-line align-middle me-1" style={{ color: "red" }}></i>
                                                        Deactive
                                                    </DropdownItem>
                                                }
                                                {
                                                    data.active === "N" && <DropdownItem
                                                        onClick={(e) =>
                                                            setData({ alert: true, id: data.id, status: "Y" })
                                                        }>
                                                        <i className="ri-checkbox-circle-line align-middle me-1" style={{ color: "green" }}></i>
                                                        Active
                                                    </DropdownItem>
                                                }</>
                                        }
                                        {
                                            res == "Download" && <DropdownItem onClick={e => download(data.doc_file)}>
                                                <i className="ri-download-2-line  align-middle me-1"></i>Download
                                            </DropdownItem>
                                        }
                                    </>)
                                })}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const changeStatus = (id: any, status: any) => {
        let obj: any = {};
        obj.docId = id;
        obj.status = status;
        WebService.postAPI({
            action: `/standard-document-status`,
            body: obj,
            id: "standard-Document-modal-submit-btn"
        }).then((res: any) => {
            // console.log(res)
            if (res) {
                toast.success(res.message);
                setData({ alert: false, id: 0, status: "" });
                getModuleAcesslist()
            }
        }).catch((error: any) => {

        });
    }

    const download = (url: any) => {
        if (url) {
            window.open(url)
        }
    }

    return (
        <React.Fragment>
            <div className="px-3 mt-3">
                <div className="table-card mt-2">
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
            {/* Modal */}

            <Modal size="md" isOpen={data.alert} centered>
                <ModalHeader className="mb-2" toggle={() => setData({ alert: false, id: 0, status: "" })}>Are you sure want to delete this standard document?</ModalHeader>
                <ModalFooter className="border-top p-2">
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-light" onClick={() => setData({ alert: false, id: 0, status: "" })}>Cancel</button>
                        <button type="submit" id="standard-Document-modal-submit-btn" className="btn btn-primary" onClick={() => changeStatus(data.id, data.status)}>Ok</button>
                    </div>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
};

export default EntrepreneurTbl;
