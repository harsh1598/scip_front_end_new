import PropTypes from "prop-types";
import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import img from "../../assets/images/investorView.jpg";

const ViewModal = ({ show, onDeleteClick, onCloseClick }) => {
  return (
    <Modal fade={true} isOpen={show} toggle={onCloseClick} centered={true}>
        <ModalHeader className="bg-soft-info p-3" toggle={onCloseClick}>
                Proof of Address
        </ModalHeader>
      <ModalBody>
        <div className="mt-2 text-center">
             <img  src={img}  alt=""  className="img-fluid" />
        </div>
      </ModalBody>
    </Modal>
  );
};

ViewModal.propTypes = {
  onCloseClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  show: PropTypes.any,
};

export default ViewModal;