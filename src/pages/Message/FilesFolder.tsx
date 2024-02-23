import React, { useEffect, useRef, useState } from "react";
import { Breadcrumb, BreadcrumbItem, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import SimpleBar from "simplebar-react";
import Files from "./Files";
import WebService from "../../utility/WebService";
import FolderImg from "../../assets/images/folder.svg";
import Pagination from "../../Components/pagination/Pagination";

interface PropData {
  isShow: any;
  title: string;
  isClose: any;
  folderType:any;
  filesData?:any
}

const FilesFolder = (props: PropData) => {
  const [isSetCloseFolder, setCloseFolder] = useState(false)
  const [folder, setFolder] = useState<any>([]);
  const isGettingFolderData = useRef<any>(false);
  const [loading, setLoading] = useState<any>(false);
  const [companyId, setCompanyId] = useState<any>()
  const [isShowFiles, setShowFiles] = useState(false)
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const secondFolder = useRef<any>(false);

  useEffect(() => {
  }, [props.isShow])

  useEffect(() => {
    if (props.isClose) {
      getFolderList(0)
    }
  }, [props.isClose])

  useEffect(() => {
    if (companyId) {
      getSecondFolderList(0);
    }
  }, [companyId])

  const getSecondFolderList = (page: any) => {
    setLoading(true);
    var obj: any = {};
    obj.companyId = companyId.companyId ? companyId.companyId : '';
    obj.name = companyId.company_name ? companyId.company_name : '';
    obj.offset = page;
    WebService.getAPI({
      action: `/company-document-list`,
      body: obj,
    })
      .then((res: any) => {
        setTotalCount(res.count)
        setFolder(res.list)
        secondFolder.current = 2;

      })
      .catch((e) => {
        setLoading(false);
      });
  }

  const onCloseModal = () => {
    props.isClose(!props.isShow);
  };

  const onScrollFolder = (e: any) => {
    let height: number = e.target.scrollHeight - e.target.scrollTop;
    if (!isGettingFolderData.current && (height < 250)) {
      getFolderList();
    }
  }

  const getFolderList = (page?: any) => {
    setLoading(true);
    WebService.getAPI({
      action: `/users-list-by-type-message?offset=${page}&limit=10`,
      body: null,
    })
      .then((res: any) => {
        setTotalCount(res.count)
        setFolder(res.list)
        secondFolder.current = 1;
      })
      .catch((e) => {
        setLoading(false);
      });
  }

  const onClickFolder = (data: any) => {
    if (companyId) {
      setCompanyId(data)
      setShowFiles(true)
    } else {
      setCompanyId(data)
    }
  }

  const onClickBack = () => {
    setCloseFolder(true)
    getFolderList(0);
    setCompanyId(null)
  }

  const setFilesData = (data : any) => {
    props.filesData(data);
    props.isClose(!props.isShow);
  }

  return (
    <>
      {
        isShowFiles &&
        <Files
          categoryId={companyId?.categoryId}
          company_name={companyId?.company_name}
          companyId={companyId?.companyId}
          isShow={isShowFiles}
          filesData={setFilesData}
          folderType={props.folderType}
          isClose={() => setShowFiles(false)}
        />
      }

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
            <div className="d-flex px-4 py-2 border-bottom mb-3 align-items-center justify-content-between search-wrap">
              {
                secondFolder.current == 2 &&

                <div className="text-black-50 cursor-pointer" onClick={() => onClickBack()}><i className="ri-arrow-left-line align-bottom" /> Back</div>
              }
              {/* <Link to="" className="text-black-50"> <i className="ri-arrow-left-line align-bottom" /> Back</Link> */}
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
              <div className="px-4 ">
                <div id="foldersWrap">
                  <div className="filesWrap" onScroll={(e: any) => { onScrollFolder(e) }} style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                    {folder?.length > 0 && folder.map((res: any, key: any) => {
                      return (
                        <div className="folder">
                          <a href='javascript:void(0)' id="folders" onClick={() => onClickFolder(res)
                          }>
                            <img src={FolderImg} className="folter-icon" width="80" />
                            <span className="folder-name">{res.company_name}</span>
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </SimpleBar>
        </OffcanvasBody>
        {
          totalCount > 0 &&
          <div style={{ padding: '19px' }}>
            <Pagination
              className=" "
              changePage={(page: number) => {
                setCurrentPage(page);
                getFolderList(page);
              }}
              totalItems={totalCount}
              itemsCountPerPage={10}
              changeCurrentPage={currentPage}
            />
          </div>
        }
      </Offcanvas>
    </>
  )
}

export default FilesFolder;