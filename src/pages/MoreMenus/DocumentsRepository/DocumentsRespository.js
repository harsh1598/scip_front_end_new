import React, { useState } from "react";
import { Col, Container, Row, Card, CardBody, CardHeader, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../Components/constants/layout";
import SweetAlert from "react-bootstrap-sweetalert";
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import RecentActivity from "./RecentActivity";
import Tiles from "./Tiles";
import List from "./List";
import MoveItem from "./MoveItem";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const DocumentsRespository = () => {

    document.title = `${ProjectName} | Documents Respository`;
    const [isdesignType, IsDesignType] = useState("Tiles");
    const [modelName, setModelName] = useState("");
    const [folderData, setFolderData] = useState(false);
    const [fileData, setFileData] = useState({ alert: false });
    const [deleteModal, setDeleteModal] = useState({ alert: false, data: "" });
    const [isfilefolder, setIsFileFolder] = useState(false);
    const [files, setFiles] = useState([]);
    const [tableData, setTableData] = useState([]);

    const [data, setData] = useState([{
        name: "TEST",
        projectName: "SCIP A",
        date: "November 3, 2021, 18:22 pm",
    },]);

    const togglefolderModel = (item = {}) => {
        setFolderData(true);
    };

    // const submitFolderData = (folderName) => {
    //     setData([
    //         ...data,
    //         { name: folderName, projectName: "SCIP A", date: "November 3, 2021, 18:22 pm" }
    //     ]);
    //     setFolderData({ alert: false })
    // }

    const submitFileData = () => {
        // console.log(profileData)
    }

    const toggleModel = (name) => {
        setModelName(name);
    };

    const handleInit = () => {
        console.log("FilePond instance has initialised");
    }

    const IsShowDeleteModal = (index) => {
        if (index) {
            removeItems(index);
        } else {
            setIsFileFolder(true);
        }
    }

    const deleteFolder = (ind) => {

        let list = [...data];
        list.splice(ind, 1);
        setData(list);
        setDeleteModal({ alert: false, data: "" });
    }

    const removeItems = (index) => {
        console.log(index)
        // return data.filter(v => {
        //     return !tableColumns.includes(v);
        // });
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Documents Respository" pageTitle="Documents Respository" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader>
                                    <Row className="g-0 align-items-center mb-0">
                                        <Col sm={6}>
                                            <div className="hstack gap-2 flex-wrap">
                                                <button type="button" className="btn btn-soft-info" onClick={e => togglefolderModel()} >
                                                    <i className="ri-add-line align-bottom me-1"></i>{" "}
                                                    New Folder
                                                </button>
                                                <button type="button" className="btn btn-soft-info" onClick={e => setFileData({ alert: true, id: 1, status: 1 })} >
                                                    <i className="ri-upload-2-line align-bottom me-1"></i>{" "}
                                                    Upload File
                                                </button>
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('MoveItem')} >
                                                    <i className="ri-file-transfer-line align-bottom me-1"></i>{" "}
                                                    Move
                                                </button>
                                                <button type="button" className="btn btn-soft-info" onClick={e => IsShowDeleteModal(tableData ? tableData.tableColumns : "")}  >
                                                    <i className="ri-delete-bin-line align-bottom me-1"></i>{" "}
                                                    Delete
                                                </button>
                                            </div>
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <ul className="list-inline hstack gap-2 mb-0 ">
                                                    <li className="list-inline-item">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                href="#"
                                                                className="btn btn-soft-info dropdown"
                                                                tag="button"
                                                            >
                                                                <i className="ri-grid-fill align-bottom me-1"></i>{" "}
                                                                View{" "}<i className=" ri-arrow-down-s-fill   align-bottom"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-end">
                                                                <DropdownItem onClick={e => IsDesignType("List")}>
                                                                    <i className=" ri-align-justify align-middle me-1"></i>List
                                                                </DropdownItem>
                                                                <DropdownItem onClick={e => IsDesignType("Tiles")}>
                                                                    <i className="ri-grid-fill align-middle me-1"></i>Tiles
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </li>
                                                </ul>
                                                <ul className="list-inline hstack gap-2 mb-0 ">
                                                    <li className="list-inline-item">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                href="#"
                                                                className="btn btn-soft-info dropdown"
                                                                tag="button"
                                                            >
                                                                <i className="ri-sort-desc align-bottom me-1"></i>{" "}
                                                                Sort{" "}<i className=" ri-arrow-down-s-fill   align-bottom"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-end">
                                                                <DropdownItem>
                                                                    <i className=" ri-arrow-up-down-line align-middle me-1"></i>Name
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <i className=" ri-arrow-up-down-line align-middle me-1"></i>Modified
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </li>
                                                </ul>
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('RecentActivity')} title="Recent Activity">
                                                    <i className=" ri-italic align-bottom"></i>{" "}
                                                </button>
                                            </div>
                                        </div>
                                    </Row>
                                </CardHeader>
                            </Card>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center mb-0">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input
                                                    type="text"
                                                    className="form-control search"
                                                    placeholder="Search"
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardHeader>
                            </Card>
                            {
                                isdesignType === "Tiles" ?
                                    <>
                                        <Tiles data={data} deleteFolder={deleteFolder} tableData={tableData} setTableData={setTableData}/>
                                    </>
                                    :
                                    <>
                                        <List data={data} deleteFolder={deleteFolder} />
                                    </>
                            }

                        </Col>
                    </Row>
                </Container>
            </div>
            {/*Add folder modal */}
            <Modal id="showModal" isOpen={folderData} toggle={e => setFolderData(false)} top>
                <ModalHeader className="bg-soft-info p-3" toggle={e => setFolderData(false)}>
                  { data.name ?"Rename" :"Folder"}  
                </ModalHeader>
                <ModalBody className="text-center">
                    <form action="" className="d-flex flex-column justify-content-end h-100">
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Input
                                        name="title" id="customername-field"
                                        className="form-control" placeholder="Enter your folder name"
                                        value={data.name ? data.name : ""} type="text"
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                            <button
                                type="button"
                                className="btn btn-brand-theme  "
                                onClick={e => setFolderData(false)}
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                className="btn btn-light  "
                                onClick={e => setFolderData(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
            {/* Delete modal */}
            <SweetAlert
                show={deleteModal.alert}
                btnSize="md"
                showCancel
                showProfile
                showCloseButton
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={(data) => deleteFolder(deleteModal.data)}
                onCancel={e => setDeleteModal({ alert: false, data: "" })}
            >
                Do you want to delete the document?
            </SweetAlert>
            {/* Select File modal */}
            <SweetAlert
                show={isfilefolder}
                btnSize="md"
                showProfile
                showCloseButton
                confirmBtnText="OK"
                confirmBtnBsStyle="primary"
                onConfirm={(data) => setIsFileFolder(false)}
                onCancel={e => setIsFileFolder(false)}
            >
                Please select a file/folder.
            </SweetAlert>
            <Modal id="showModal" isOpen={fileData.alert} toggle={e => setFileData({ alert: false, id: "", msg: "" })} top>
                <ModalHeader className="bg-soft-info p-3" toggle={e => setFileData({ alert: false, id: "", msg: "" })}>
                    File upload
                </ModalHeader>
                <ModalBody className="text-center">
                    <FilePond
                        files={files}
                        onupdatefiles={setFiles}
                        allowMultiple={true}
                        maxFiles={3}
                        name="files"
                        className="filepond filepond-input-multiple"
                        labelIdle='Drop files here to upload <span>(max 5 file)</span>'
                        oninit={() => handleInit()}
                    />
                    <span>The Maximum supported file size is 20 MB</span><br />
                    <span>Accecpted file type : txt, png, jpe, jpeg, jpg, gif, svg, mp3, mp4, pdf, odt, ods, odp, doc, docx, xls, xlsx, csv, ppt, pptx </span>
                </ModalBody>
            </Modal>
            <RecentActivity
                show={modelName === 'RecentActivity' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <MoveItem
                show={modelName === 'MoveItem' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default DocumentsRespository;
