import React, { useState, useCallback, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Table,
  Button,
} from "reactstrap";


// Images
import imgupload from "../../../assets/images/img-upload.svg";

import { useForm } from "react-hook-form";
// Import React FilePond
import { FilePond,  registerPlugin } from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

interface propData {
  show: boolean;
  onCloseClick: any;
}

const ImageEditorModal = (props: propData) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onCloseModal = () => {
    reset();
    props.onCloseClick();
  };

  const [selectedFiles, setselectedFiles] = useState([]);
  const [files, setFiles] = useState([]);

  // function handleAcceptedFiles(files: any) {
  //   files.map(file => Object.assign(file, {
  //       preview: URL.createObjectURL(file),
  //       formattedSize: formatBytes(file.size),
  //     })
  //   );
  //   setselectedFiles(files);
  //   }
  
   /**
   * Formats the size
   */
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <Offcanvas
      isOpen={props.show}
      onHide={onCloseModal}
      toggle={props.onCloseClick}
      direction="end"
      className="border-bottom size-md"
    >
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
        Image / Video / Thumbnail Editor
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
          <div className="text-center my-3"><img src={imgupload} alt="" /></div>
          <h5 className="text-center">Select files to begin</h5>
          <p className="text-muted text-center">Share images or a single video in your post.</p>
                      <FilePond
                        files={files}
                        //onupdatefiles={setFiles}
                        allowMultiple={true}
                        maxFiles={3}
                        name="files"
                        className="filepond filepond-input-multiple"
                      />
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button className="btn btn-brand-theme">Back</Button>
            <Button className="btn btn-light">Next</Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default ImageEditorModal;
