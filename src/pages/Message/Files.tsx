import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Fileicon from "../../assets/images/file.svg";
import WebService from "../../utility/WebService";
import { Breadcrumb, BreadcrumbItem, Button, Col, Label, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import SimpleBar from "simplebar-react";

interface PropData {
  categoryId?: any;
  company_name?: any;
  companyId?: any;
  isShow: any;
  isClose: any;
  folderType?: any;
  filesData?: any
}

const Files = (props: PropData) => {
  const [loading, setLoading] = useState<any>(false);
  const [file, setFile] = useState<any>([]);
  const selectedFiles = useRef<any>([])

  useEffect(() => {
    getFilesList()
  }, [props.isShow])

  const getFilesList = () => {
    setLoading(true);
    var obj: any = {};
    obj.companyId = props.companyId ? props.companyId : '';
    if (props.categoryId) {
      obj.categoryId = props.categoryId ? props.categoryId : ''
    }
    obj.company_name = props.company_name ? props.company_name : ''
    WebService.getAPI({
      action: `/folder-document-list`,
      body: obj,
    })
      .then((res: any) => {
        setFile(res.list)
      })
      .catch((e) => {
        setLoading(false);
      });
  }

  const onCloseModal = () => {
    props.isClose(!props.isShow);
  };

  const onUpload = () => {
    props.filesData(selectedFiles.current);

    props.isClose(!props.isShow);
  };

  const onClickCheckBox = (data: any) => {
    var obj: any = {};
    obj.docId = data.docId;
    obj.doc_file = data.doc_file;
    obj.doc_title = data.doc_title;
    var count = 0;
    if (selectedFiles.current && selectedFiles.current.length > 0) {
      for (var i in selectedFiles.current) {
        if (selectedFiles.current[i].docId == data.docId) {
          count = count + 1;
          selectedFiles.current.splice(i, 1);
        }
      }
    }
    if (count == 0) {
      selectedFiles.current.push(obj);
    }
  }


  return (
    <>
      <Offcanvas
        isOpen={props.isShow}
        onHide={onCloseModal}
        toggle={props.isClose}
        direction="end"
        className="border-bottom"
      >
        <OffcanvasHeader className="bg-light" id="offcanvasEditGroupLabel">
          <div>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#">
                  Files
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                Folder
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </OffcanvasHeader>
        <OffcanvasBody className="px-0 overflow-hidden pt-0">
          <SimpleBar style={{ height: "100vh" }}>
            {props.folderType == 'Attach_Cloud_Files' ?
              <>
                <div className="d-flex px-4 py-2 border-bottom mb-3 align-items-center justify-content-between search-wrap">
                  <div className="text-black-50 cursor-pointer" onClick={() => props.isClose()}><i className="ri-arrow-left-line align-bottom" /> Back</div>
                  <div className="search-box">
                    <input
                      id="search-user"
                      type="text"
                      className="form-control bg-light border-light"
                      placeholder="Search here..."
                    />
                    <i className="ri-search-2-line search-icon"></i>
                  </div>
                </div>
                <div className="px-4 ">
                  <div className="filesWrap">
                    {file?.length > 0 && file.map((file: any, key: any) => {
                      return (
                        <div className="folder">
                          <Link to='/'>
                            <img src={Fileicon} className="folter-icon" width="80" />
                            <span className="folder-name word-wrap-new">{file.doc_title}</span>
                          </Link>
                          <div className="form-check">
                            <Col lg={12}>
                              <div className="mt-2">
                                <Label className="form-check-label" htmlFor="auth-remember-check" ></Label>
                                <input
                                  type="checkbox"
                                  value=""
                                  onClick={() => onClickCheckBox(file)}
                                />
                              </div>
                            </Col>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </>
              :
              <>
                <div className="d-flex px-4 py-2 border-bottom mb-3 align-items-center justify-content-between search-wrap">
                  <div className="text-black-50 cursor-pointer" onClick={() => props.isClose()}><i className="ri-arrow-left-line align-bottom" /> Back</div>
                  <div className="search-box">
                    <input
                      id="search-user"
                      type="text"
                      className="form-control bg-light border-light"
                      placeholder="Search here..."
                    />
                    <i className="ri-search-2-line search-icon"></i>
                  </div>
                </div>
                <div className="px-4 ">
                  <div className="filesWrap">
                    {file?.length > 0 && file.map((file: any, key: any) => {
                      return (
                        <div className="folder">
                          <Link to='/'>
                            <img src={Fileicon} className="folter-icon" width="80" />
                            <span className="folder-name word-wrap-new">{file.doc_title}</span>
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </>
            }
          </SimpleBar>
        </OffcanvasBody>
        {props.folderType == 'Attach_Cloud_Files' &&
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button onClick={() => onUpload()}
              className="btn btn-light">Upload</Button>
          </div>
        </div>
}
      </Offcanvas>

    </>
  )
}
export default Files;