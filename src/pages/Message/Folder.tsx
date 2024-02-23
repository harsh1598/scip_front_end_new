import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FolderImg from "../../assets/images/folder.svg";
import WebService from "../../utility/WebService";
import { useNavigate, useLocation } from "react-router-dom";
import Files from "./Files";

interface PropData {
  close: boolean
  isCloseFolder: any
}


// function showFilesDiv() {
//     var filesDiv = document.getElementById("filesWrap");
//     var foldersDiv = document.getElementById("foldersWrap");
//     if (filesDiv.style.display === "none") {
//       filesDiv.style.display = "block";
//       foldersDiv.style.display = "none";
//     } else {
//       filesDiv.style.display = "none";
//     }
//   }

function showFilesDiv() {
  var filesDiv = document.getElementById("filesWrap") || null;
  var foldersDiv = document.getElementById("foldersWrap") || null;
  if (foldersDiv && filesDiv && filesDiv.style.display === "none") {
    filesDiv.style.display = "block";
    foldersDiv.style.display = "none";
  } else {
    if (filesDiv) {
      filesDiv.style.display = "none";
    }
  }
}


const Folder = (props: PropData) => {
  const [loading, setLoading] = useState<any>(false);
  const [folder, setFolder] = useState<any>([]);
  const isGettingFolderData = useRef<any>(false);
  const folderNextOffset = useRef<any>(0);
  let history = useNavigate();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [companyId, setCompanyId] = useState<any>()
  const [isShowFiles, setShowFiles] = useState(false)

  useEffect(() => {
    getFolderList()
  }, [])

  console.log("props.close", props.close)
  useEffect(() => {
    if (props.close) {
      setCompanyId('')
      getFolderList()
    }
  }, [props.close])


  useEffect(() => {
    if (companyId) {
      getSecondFolderList();
    }
  }, [companyId])


  const getFolderList = () => {
    isGettingFolderData.current = true;
    if (folderNextOffset.current < 0) {
      return;
    }
    setLoading(true);
    WebService.getAPI({
      action: `/users-list-by-type-message?offset=${folderNextOffset.current}&limit=10`,
      body: null,
    })
      .then((res: any) => {
        setFolder([...folder, ...res.list]);
        folderNextOffset.current = res.next_offset;
        setFolder(res.list)
      })
      .catch((e) => {
        setLoading(false);  
      });
    isGettingFolderData.current = false;
  }

  const getSecondFolderList = () => {
    setLoading(true);
    WebService.getAPI({
      action: `/company-document-list?companyId=${companyId?.companyId}&name=${companyId?.company_name}`,
      body: null,
    })
      .then((res: any) => {
        setFolder(res.list)

      })
      .catch((e) => {
        setLoading(false);
      });
  }

  const onScrollFolder = (e: any) => {
    let height: number = e.target.scrollHeight - e.target.scrollTop;
    if (!isGettingFolderData.current && (height < 250)) {
      getFolderList();
    }
  }


  // const onNavigateToFiles = (categoryId: any, company_name: any, companyId: any) => {
  //   <Files
  //     categoryId={categoryId}
  //     company_name={company_name}
  //     companyId={companyId}
  //   />
  // }

  const onNext = (folder: any) => {
    setCompanyId(folder)
    props.isCloseFolder()
  }

  const onClickFolder  = (folder:any) => {
    setCompanyId(folder)
    setShowFiles(true)
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
        isClose={() => setShowFiles(false)}
      />
    }
      

      <div className="filesWrap" onScroll={(e: any) => { onScrollFolder(e) }} style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        {folder?.length > 0 && folder.map((folder: any, key: any) => {
          return (
            <div className="folder">
              <a href='javascript:void(0)' id="folders" onClick={() => companyId ? onClickFolder(folder) : onNext(folder)

                // state: {
                //   categoryId: folder?.categoryId, companyName: folder?.company_name
                // }
              }>
                <img src={FolderImg} className="folter-icon" width="80" />
                <span className="folder-name">{folder.company_name}</span>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Folder;