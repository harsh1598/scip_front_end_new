import React, { useState, useCallback, useEffect } from "react";
import {
  Row,
  Col,
 Button,
  Card,
  Container,
  Input,
  Modal,
  ModalBody,
} from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Select from "react-select";

const SelectFileFolder = ({ show, onCloseClick, modelName, toggleModel, onDeleteClick }) => {
  const [isShow, setIsShow] = useState(false);
  const togglePopup = useCallback(() => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [isShow]);

  useEffect(() => {
    setIsShow(false);
  }, [modelName == "CreateSchedule"]);

  return (
    <Modal fade={true} isOpen={show} toggle={onCloseClick} centered={true}>
      <ModalBody className="py-3 px-5">
        <div className="mt-2 text-center">
          <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
            <h5>
              Please select a file/folder.
            </h5>
          </div>
        </div>
        <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
          <button
            type="button"
            className="btn btn-brand-theme"
            data-bs-dismiss="modal"
            onClick={onCloseClick}
            >
            Ok
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};
SelectFileFolder.propTypes = {
  onCloseClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  show: PropTypes.any,
};
export default SelectFileFolder;
