import React, { useState, useCallback, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Select from "react-select";
import SimpleBar from "simplebar-react";
import { Controller, useForm } from "react-hook-form";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Form,
  Col,
  Input,
  Button,
} from "reactstrap";

import ImageEditorModal from "./ImageEditorModal";
import DescriptionModal from "./DescriptionModal";


interface propData {
  show: boolean;
  onCloseClick: any;
  modelName:any
  toggleModel:any
}

const DocumentUploadModal = (props: propData) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Image Editor Modal
  const [isShowImageEditorModal, setIsShowImageEditorModal] = useState(false);
  const closeimageeditorModal = () => {
    setIsShowImageEditorModal(false);
  };

  // Description Modal
    const [isShowDescriptionModal, setIsShowDescriptionModal] = useState(false);
    const closedescriptionModal = () => {
      setIsShowDescriptionModal(false);
    };

  const onCloseModal = () => {
    reset();
    setIsShowImageEditorModal(false);
    setIsShowDescriptionModal(false);
  };

  return (
    <>
      <ImageEditorModal
        show={isShowImageEditorModal}
        onCloseClick={onCloseModal}
      />

      <DescriptionModal
        show={isShowDescriptionModal}
        onCloseClick={onCloseModal}
      />

      <Offcanvas
        isOpen={props.show}
        onHide={onCloseModal}
        toggle={props.onCloseClick}
        direction="end"
        className="border-bottom size-md"
      >
        <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
          Documents Upload
        </OffcanvasHeader>
        <form
          action=""
          className="d-flex flex-column justify-content-end h-100"
        >
          <OffcanvasBody className="px-0 overflow-hidden">
            <div className="px-2">
              <Form>
                <SimpleBar
                  autoHide={false}
                  style={{ height: "600px", overflowX: "hidden" }}
                >
                  <Row>
                    <Col lg={12} md={12}>
                      <Input
                        type="text"
                        className="form-control"
                        id="placeholderInput"
                        placeholder="What do you want to talk about?"
                        style={{ border: "0" }}
                      />
                    </Col>
                  </Row>
                </SimpleBar>
                <hr />
                <Row>
                  <Col lg={12} md={12} className="px-4">
                    <Button
                      className="gery-round me-3"
                      onClick={() => {
                        setIsShowImageEditorModal(true);
                      }}
                    >
                      <i className="ri-image-2-line"></i>
                    </Button>
                    <Button className="gery-round" onClick={() => {
                        setIsShowDescriptionModal(true);
                      }}>
                      <i className="ri-file-4-line"></i>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </OffcanvasBody>
          <div className="offcanvas-foorter border p-3 text-center">
            <div className="hstack gap-2 justify-content-end">
              <Button className="btn btn-brand-theme">Post</Button>
            </div>
          </div>
        </form>
      </Offcanvas>
    </>
  );
};

export default DocumentUploadModal;
