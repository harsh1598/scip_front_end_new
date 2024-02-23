import React, { useEffect, useState } from "react";
import { Col, Container, Row, CardHeader, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal, ModalHeader, ModalFooter } from "reactstrap";
import Grid, { GridColumn, GridHeader, GridRow } from "../../../../Components/Grid/Grid";
import { ProjectName } from "../../../../Components/constants/layout";
import WebService from "../../../../utility/WebService";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import toast from "react-hot-toast";
import AddEditTieChapter from "./AddEditTieChapter";
// import SourceFilter from "./SourceFilter";

const headers: GridHeader[] = [
    {
        title: "Sr.No",
        classTitle: "text-start",
    },
    {
        title: "Tie Chapter Code",
        classTitle: "text-start",
    },
    {
        title: "Tie Chapter Name",
        classTitle: "text-start",
    },
    {
        title: "Tie Chapter Description",
        classTitle: "text-start",
    },
    {
        title: "Action",
        class: "text-center",
    },
];

const TieChapter = () => {

    document.title = `${ProjectName} | Tie Chapter`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [isShowAddTieChapter, setIsShowTieChapter] = useState(false);
    const [id, setId] = useState<any>();
    const [data, setData] = useState({ alert: false, id: 0, status: "" });
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
        let obj: any = {};
        obj.offset = page - 1;
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/tie-chapter-pagination-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 10 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i].slug });
                    columns.push({ value: res.list[i].name });
                    columns.push({ value: res.list[i].description });
                    columns.push({ value: actionList(res.list[i]) });
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
            <>
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
                                <DropdownItem onClick={() =>
                                    onEdit(data.chapterId)
                                } >
                                    <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                </DropdownItem>
                                {
                                    data.status == 'Y' ?
                                        <>
                                            <DropdownItem onClick={e => setData({ alert: true, id: data.chapterId, status: "N" })}>
                                                <i className="ri-close-circle-line align-middle me-1" style={{ color: "red" }}></i>Deactive
                                            </DropdownItem>
                                        </>
                                        :
                                        <>
                                            <DropdownItem onClick={e => setData({ alert: true, id: data.chapterId, status: "Y" })}>
                                                <i className="ri-checkbox-circle-line align-middle me-1" style={{ color: "green" }}></i>Active
                                            </DropdownItem>
                                        </>
                                }
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const onchangeStatus = (id: any, status: any) => {
        let obj: any = {};
        obj.chapterId = id;
        WebService.postAPI({
            action: `/tie-chapter-update-status`,
            body: obj,
        }).then((res: any) => {
             console.log(res)
            if (res) {
                toast.success(res.message);
                setData({ alert: false, id: 0, status: "" });
                getlist(1);
            }
        }).catch((error: any) => {

        });
    }

    const onEdit = (id: any) => {
        setIsShowTieChapter(true);
        setId(id)
    };

    const closeAddEditTieChapter = () => {
        setIsShowTieChapter(false);
        setId('');
        getlist(1);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Tie Chapter" pageTitle="Tie Chapter" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="mb-4">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input type="text"
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
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button
                                                    type="button"
                                                    className="btn btn-brand-theme"
                                                    id="create-btn"
                                                    onClick={() => setIsShowTieChapter(true)}>
                                                    <i className="ri-add-line align-bottom me-1"></i> Add
                                                </button>
                                            </div>
                                        </div>
                                    </Row>

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
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div >
            {/* Modal */}

            <Modal size="md" isOpen={data.alert} centered>
                <ModalHeader className="mb-2" toggle={() => setData({ alert: false, id: 0, status: "" })}>Are you sure you want to do this action?</ModalHeader>
                <ModalFooter className="border-top p-2">
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-light" onClick={() => setData({ alert: false, id: 0, status: "" })}>Cancel</button>
                        <button type="submit" id="workflow-modal-submit-btn" className="btn btn-primary" onClick={() => onchangeStatus(data.id, data.status)}>Ok</button>
                    </div>
                </ModalFooter>
            </Modal>

            <AddEditTieChapter
                show={isShowAddTieChapter}
                onCloseClick={closeAddEditTieChapter}
                Id={id}
            />

        </React.Fragment >
    );
};

export default TieChapter;
