import React, { useState, useCallback, useEffect } from "react";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Progress,
} from "reactstrap";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Pagination, Autoplay, Navigation } from "swiper";
//import ColorPicker from "@vtaits/react-color-picker";
//import { SketchPicker } from "react-color";
//import { useForm } from "react-hook-form";

//Import Flatepicker
import Flatpickr from "react-flatpickr";
import ProfileModal from "./Profile_Modal";
import AddNotesModal from "./AddNotes_Modal";
import PriorityModal from "./Priority_Modal";
import ChecklistModal from "./Checklist_Modal";
import WhatsAppModal from "./WhatsApp_Modal";
import AddDocLinkModal from "./AddDocumentLink_Modal";
import EmailModal from "./Email_Modal";

interface propData {
  show: boolean;
  onCloseClick: any;
  //Id: any
  modelName: any;
  toggleModel: any;
}

const EvaluationSlider = (props: propData) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const [isShow, setIsShow] = useState(false);
  const togglePopup = useCallback(() => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [isShow]);

  const [isTeamMember, setIsTeamMember] = useState(false);
  const toggleTeamMember = () => {
    setIsTeamMember(!isTeamMember);
  };

  // Profile Modal
  const [isShowProfileModal, setIsShowProfileModal] = useState(false);
  const closeprofileModal = () => {
    setIsShowProfileModal(false);
  };
  const onCloseModal = () => {
    reset();
    setIsShowProfileModal(false);
    setIsShowAddNoteModal(false);
    setIsShowPriorityModal(false);
    setIsShowChecklistModal(false);
    setIsShowAddDocLinkModal(false);
    setIsShowEmailModal(false);
  };
  
  // Add Noted Modal
  const [isShowAddNoteModal, setIsShowAddNoteModal] = useState(false);
  const closeaddnotesModal = () => {
    setIsShowAddNoteModal(false);
  };

  // Priority Modal
  const [isShowPriorityModal, setIsShowPriorityModal] = useState(false);
  const closepriorityModal = () => {
    setIsShowPriorityModal(false);
  };

   // CheckList Modal
   const [isShowChecklistModal, setIsShowChecklistModal] = useState(false);
   const closechecklistModal = () => {
     setIsShowChecklistModal(false);
   };
  
  //  WhatsApp Modal
  const [isShowWhatsAppModal, setIsShowWhatsAppModal] = useState(false);
  const closewhatsappModal = () => {
    setIsShowWhatsAppModal(false);
  };

  //  Add Document Modal
    const [isShowAddDocLinkModal, setIsShowAddDocLinkModal] = useState(false);
    const closeadddoclinkModal = () => {
      setIsShowAddDocLinkModal(false);
    };

  // Email Modal
   
  const [isShowEmailModal, setIsShowEmailModal] = useState(false);
  const closeemailkModal = () => {
      setIsShowEmailModal(false);
    };
  
  return (
    <>
      <ProfileModal
      show={isShowProfileModal}
      onCloseClick={onCloseModal}
      />

      <AddNotesModal
      show={isShowAddNoteModal}
      onCloseClick={onCloseModal}
      />

      <PriorityModal
      show={isShowPriorityModal}
      onCloseClick={onCloseModal}
      />

     <ChecklistModal
      show={isShowChecklistModal}
      onCloseClick={onCloseModal}
      />

     <WhatsAppModal
      show={isShowWhatsAppModal}
      onCloseClick={onCloseModal}
      />

      <AddDocLinkModal
      show={isShowAddDocLinkModal}
      onCloseClick={onCloseModal}
      />

      <EmailModal
      show={isShowEmailModal}
      onCloseClick={onCloseModal}
      />

      <Offcanvas
        isOpen={props.show}
        onHide={onCloseModal}
        toggle={props.onCloseClick}
        direction="end"
        className="border-bottom size-md">

        <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
         
        </OffcanvasHeader>
        <form action="">
          <OffcanvasBody className="px-0 overflow-hidden">
            <div className="px-2">
              <div className="evalution-slide eva-slider">
                <SimpleBar
                  autoHide={false}
                  style={{ maxHeight: "800px" }}
                  className="px-3">
                  <h2>Tata Fashion</h2>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Board observer / director</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span className="titles text-center">
                        <Link
                          to="#"
                          className="text-muted fs-14"
                          onClick={() => {
                            setIsShowProfileModal(true);
                          }}>
                          <i className="ri-user-line fs-20 align-bottom me-2"></i>
                          Click here
                        </Link>
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Person managing deal</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span className="titles text-center">
                        <Link to="#" className="text-muted fs-14"
                         onClick={() => {
                          setIsShowProfileModal(true);
                        }}
                        >
                        <i className="ri-user-line fs-20 align-bottom me-2"></i>
                          Click here
                        </Link>
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">
                        Task assigned (to investor)
                      </span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span className="titles text-center">
                        <Link to="#" className="text-muted fs-14"
                         onClick={() => {
                          setIsShowProfileModal(true);
                        }}
                        >
                          <i className="ri-user-line fs-20 align-bottom me-2"></i>
                          Click here
                        </Link>
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Industry</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <input
                        type="checkbox"
                        hidden
                        className="read-more-state"
                        id="read-more"
                      />
                      <div className="read-more-wrap titles">
                        <p className="text-muted mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <p className="text-muted read-more-target mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                      <div className="float-end pointer">
                        <label className="read-more-trigger_closed mb-0 text-muted">
                          Read More
                        </label>
                        <label className="read-more-trigger_opened mb-0 text-muted">
                          Read Less
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Sectors</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <input
                        type="checkbox"
                        hidden
                        className="read-more-state"
                        id="read-more1"
                      />
                      <div className="read-more-wrap titles">
                        <p className="text-muted mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <p className="text-muted read-more-target mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                      <div className="float-end pointer">
                        <label className="read-more-trigger_closed mb-0 text-muted">
                          Read More
                        </label>
                        <label className="read-more-trigger_opened mb-0 text-muted">
                          Read Less
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">About Startup</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <input
                        type="checkbox"
                        hidden
                        className="read-more-state"
                        id="read-more3"
                      />
                      <div className="read-more-wrap titles">
                        <p className="text-muted mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <p className="text-muted read-more-target mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                      <div className="float-end pointer">
                        <label className="read-more-trigger_closed mb-0 text-muted">
                          Read More
                        </label>
                        <label className="read-more-trigger_opened mb-0 text-muted">
                          Read Less
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Website</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span>
                        <Link to="https://www.google.com/">
                          <i className="ri-link align-bottom me-1 fs-20"></i>
                          https://www.google.com/
                        </Link>
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4} className="my-auto">
                      <span className="lables">Deal Status</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span className="fs-14">
                        <Link
                          to="/deals/"
                          className="btn btn-brand-theme w-100">
                          Click here
                          <i className="ri-external-link-line align-bottom ms-2"></i>
                        </Link>
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Progress Bar</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <div
                        className="live-preview mt-2"
                        style={{ height: "35px" }}>
                        <Progress color="bg-success" value={25}>
                          25%
                        </Progress>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Duration/schedule</span>
                    </Col>
                    <Col lg={9} sm={8} className="text-center">
                      <span className="deal-status py-0">
                        <Flatpickr
                          className="form-control text-center fs-14"
                          options={{
                            dateFormat: "Y-m-d",
                            defaultDate: ["2022-01-20"],
                          }}
                          style={{
                            background: "transparent",
                            color: "#FFF",
                            border: "0",
                          }}
                        />
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Investor personal notes</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span className="add-notes fs-14" onClick={() => {
                            setIsShowAddNoteModal(true);
                          }}>
                        <Link
                          to="#"
                          style={{ background: "none" }}
                          className="btn-brand-theme">
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          Note
                        </Link>
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Comments</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span className="comments fs-14">
                        <Link
                          to="/deals/comments"
                          style={{ background: "none" }}
                          className="btn-brand-theme">
                          <i className="ri-chat-1-line align-bottom me-1"></i>
                          Comments
                        </Link>
                      </span>
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Start Date</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span className="deal-status py-0">
                        <Flatpickr
                          className="form-control text-center"
                          options={{
                            dateFormat: "Y-m-d",
                            defaultDate: ["2022-01-20"],
                          }}
                          style={{
                            background: "transparent",
                            color: "#FFF",
                            border: "0",
                          }}
                        />
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">End Date</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span className="deal-status py-0">
                        <Flatpickr
                          className="form-control text-center"
                          options={{
                            dateFormat: "Y-m-d",
                            defaultDate: ["2022-01-20"],
                          }}
                          style={{
                            background: "transparent",
                            color: "#FFF",
                            border: "0",
                          }}
                        />
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Priority</span>
                    </Col>
                    <Col lg={9} sm={8} className="cursor" onClick={() => {
                            setIsShowPriorityModal(true);
                          }}>
                      <span className="priority-box fs-14">Low</span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Checklist</span>
                    </Col>
                    <Col lg={9} sm={8} className="cursor" onClick={() => {
                            setIsShowChecklistModal(true);
                          }}>
                      <span className="titles text-center fs-14">
                        <i className="ri-checkbox-line align-bottom me-1 fs-15"></i>
                        Checklist
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">WhatsApp</span>
                    </Col>
                    <Col lg={9} sm={8} className="cursor" onClick={() => {
                            setIsShowWhatsAppModal(true);
                          }}>
                     <span className="titles text-center fs-14">
                        <i className="ri-whatsapp-line align-bottom me-1 fs-15"></i>
                        WhatsApp
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Add Document / Link</span>
                    </Col>
                    <Col lg={9} sm={8} className="cursor">
                      <span className="titles text-center fs-14">
                        <i className="ri-file-text-line align-bottom me-1 fs-15"></i>
                        Add Document Link
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Email</span>
                    </Col>
                    <Col lg={9} sm={8} className="cursor" onClick={() => {
                          setIsShowEmailModal(true);
                        }}>
                      <span className="titles text-center fs-14">
                        <i className="ri-mail-unread-line align-bottom me-1 fs-15"></i>
                        Email
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Message</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span>
                        <Link
                          to="/message"
                          className="btn btn-brand-theme w-100 fs-14">
                          Click here
                          <i className="ri-external-link-line  align-bottom ms-2"></i>
                        </Link>
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Deal Page</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span>
                        <Link
                          to="/deals"
                          className="btn btn-brand-theme w-100 fs-14">
                          Click here
                          <i className="ri-external-link-line  align-bottom ms-2"></i>
                        </Link>
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3} sm={4}>
                      <span className="lables">Task List</span>
                    </Col>
                    <Col lg={9} sm={8}>
                      <span>
                        <Link
                          to="/investor_dashboard/workflow/mytask"
                          className="btn btn-brand-theme w-100 fs-14">
                          Click here
                          <i className="ri-external-link-line  align-bottom ms-2"></i>
                        </Link>
                      </span>
                    </Col>
                  </Row>
                </SimpleBar>
              </div>
            </div>
          </OffcanvasBody>
        </form>
      </Offcanvas>
    </>
  );
};
export default EvaluationSlider;
