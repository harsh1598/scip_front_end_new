import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Select from "react-select";

//Import Icons

import {
  Card,
  CardBody,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Button

} from "reactstrap";

import * as Yup from "yup";
import { useFormik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import Flatpickr from "react-flatpickr";

//redux
import { useSelector, useDispatch } from "react-redux";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DeleteModal from "../../../Components/Common/DeleteModal";

//Simple bar
import SimpleBar from "simplebar-react";
import UpcommingEvents from './UpcommingEvents';
import listPlugin from '@fullcalendar/list';


const Calender = () => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState({});
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedNewDay, setSelectedNewDay] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditButton, setIsEditButton] = useState(true);
  const [upcommingevents, setUpcommingevents] = useState([]);

  const [isUpdtTimeZone, setIsUpdtTimeZone] = useState(false);
  const toggleUpdtTimeZone = () => {
    setIsUpdtTimeZone(!isUpdtTimeZone);
  };

  const [selectedGroup2, setSelectedGroup2] = useState(null);
  function handleSelectGroups2(selectedGroup2) {
    setSelectedGroup2(selectedGroup2);
  }
  const TimezoneOptn = [
    { value: '(GMT +02:00) Asia,Kolkata', label: '(GMT +02:00) Asia,Kolkata' },
    { value: '(GMT -11:00) Pacific, Midway', label: '(GMT -11:00) Pacific, Midway' },
    { value: '(GMT -11:00) Pacific, Pago Pago', label: '(GMT -11:00) Pacific, Pago Pago' },
    { value: '(GMT -10:00) America, Adak', label: '(GMT -10:00) America, Adak' },
    { value: '(GMT -10:00) Pacific, Honolulu', label: '(GMT -10:00) Pacific, Honolulu' },
    { value: '(GMT -09:00) America, Sitka', label: '(GMT -09:00) America, Sitka' },
    { value: '(GMT -08:00) America, Tijuana', label: '(GMT -08:00) America, Tijuana' },
  ];

  // const { events, categories, isEventUpdated } = useSelector((state) => ({
  //   events: state.Calendar.events,
  //   categories: state.Calendar.categories,
  //   isEventUpdated: state.Calendar.isEventUpdated,
  // }));

  useEffect(() => {
    new Draggable(document.getElementById("external-events"), {
      itemSelector: ".external-event",
    });
  }, [dispatch]);

  // useEffect(() => {

  //   setUpcommingevents(events);
  //   upcommingevents.sort(function (o1, o2) {
  //     return new Date(o1.start) - new Date(o2.start);
  //   });

  // }, [events, upcommingevents]);

  // useEffect(() => {
  //   if (isEventUpdated) {
  //     setIsEdit(false);
  //     setEvent({});
  //     setTimeout(() => {
  //     }, 500);
  //   }
  // }, [dispatch, isEventUpdated]);

  /**
   * Handling the modal state
   */
  const toggle = () => {
    if (modal) {
      setModal(false);
      setEvent(null);
      setIsEdit(false);
      setIsEditButton(true);
    } else {
      setModal(true);
    }
  };
  /**
   * Handling date click on calendar
   */

  const handleDateClick = (arg) => {
    const date = arg["date"];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currectDate = new Date();
    const currentHour = currectDate.getHours();
    const currentMin = currectDate.getMinutes();
    const currentSec = currectDate.getSeconds();
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    );

    const modifiedData = { ...arg, date: modifiedDate };

    setSelectedNewDay(date);
    setSelectedDay(modifiedData);
    toggle();
  };

  const str_dt = function formatDate(date) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var d = new Date(date),
      month = "" + monthNames[d.getMonth()],
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day + " " + month, year].join(",");
  };

  const date_r = function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };

  /**
   * Handling click on event on calendar
   */
  const handleEventClick = (arg) => {
    const event = arg.event;

    const st_date = event.start;
    const ed_date = event.end;
    const r_date =
      ed_date == null
        ? str_dt(st_date)
        : str_dt(st_date) + " to " + str_dt(ed_date);
    const er_date =
      ed_date == null
        ? date_r(st_date)
        : date_r(st_date) + " to " + date_r(ed_date);

    setEvent({
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      className: event.classNames,
      category: event.classNames[0],
      location: event._def.extendedProps.location,
      description: event._def.extendedProps.description,
      defaultDate: er_date,
      datetag: r_date,
    });

    setIsEdit(true);
    setIsEditButton(false);
    toggle();
  };
  /**
   * On delete event
   */
  const handleDeleteEvent = () => {
    setDeleteModal(false);
    toggle();
  };

  // events validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      title: (event && event.title) || "",
      category: (event && event.category) || "",
      location: (event && event.location) || "",
      description: (event && event.description) || "",
      defaultDate: (event && event.defaultDate) || "",
      datetag: (event && event.datetag) || "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Your Event Name"),
      category: Yup.string().required("Please Select Your Category"),
    }),
    onSubmit: (values) => {
      var updatedDay = "";
      if (selectedNewDay) {
        updatedDay = new Date(selectedNewDay[1]);
        var abc = updatedDay.setDate(updatedDay.getDate() + 1);
      }

      if (isEdit) {
        const updateEvent = {
          id: event.id,
          title: values.title,
          className: values.category,
          start: selectedNewDay ? selectedNewDay[0] : event.start,
          end: selectedNewDay ? updatedDay : event.end,
          location: values.location,
          description: values.description,
        };
        // update event
        validation.resetForm();
      } else {
        const newEvent = {
          id: Math.floor(Math.random() * 100),
          title: values["title"],
          start: selectedDay ? selectedNewDay[0] : new Date(),
          end: selectedDay ? updatedDay : new Date(),
          className: values.category,
          location: values["location"],
          description: values["description"],
        };
        // save new event
        validation.resetForm();
      }
      setSelectedDay(null);
      setSelectedNewDay(null);
      toggle();
    },
  });

  const submitOtherEvent = () => {

    document.getElementById("form-event").classList.remove("view-event");

    document
      .getElementById("event-title")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("event-category")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("event-start-date")
      .parentNode.classList.remove("d-none");
    document
      .getElementById("event-start-date")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("event-location")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("event-description")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("event-start-date-tag")
      .classList.replace("d-block", "d-none");
    document
      .getElementById("event-location-tag")
      .classList.replace("d-block", "d-none");
    document
      .getElementById("event-description-tag")
      .classList.replace("d-block", "d-none");

    setIsEditButton(true);
  };

  /**
   * On category darg event
   */
  const onDrag = (event) => {
    event.preventDefault();
  };

  /**
   * On calendar drop event
   */
  const onDrop = (event) => {
    const date = event["date"];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currectDate = new Date();
    const currentHour = currectDate.getHours();
    const currentMin = currectDate.getMinutes();
    const currentSec = currectDate.getSeconds();
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    );

    const draggedEl = event.draggedEl;
    const draggedElclass = draggedEl.className;
    if (
      draggedEl.classList.contains("external-event") &&
      draggedElclass.indexOf("fc-event-draggable") === -1
    ) {
      const modifiedData = {
        id: Math.floor(Math.random() * 1000),
        title: draggedEl.innerText,
        start: modifiedDate,
        className: draggedEl.className,
      };
    }
  };

  document.title = "Calendar | SCIP";
  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Calendar" pageTitle="Apps" />
          <Row>
            <Col xs={12}>
              <Row>
                <Col xl={3}>
                  <Card className="card-h-100">
                    <CardBody>
                      <a href="https://devv2.scip.co/admin/calendar/logout" target="_blank"
                        className="btn btn-danger w-100 mb-3 " style={{ backgroundColor: "#da3e28" }}
                        id="btn-new-event"
                      >
                        <i className="ri-google-fill fs-5 align-bottom"></i> Login from Google
                      </a>
                      <a href="https://devv2.scip.co/admin/calendar/logout" target="_blank"
                        className="btn btn-info border-0 w-100 py-1" style={{ backgroundColor: "#0F6CBD" }}
                        id="btn-new-event"
                      >
                        <i className="mdi mdi-microsoft-outlook fs-4 align-middle"></i> Login from Outlook
                      </a>

                      <div id="external-events" className="mt-3">


                        <div
                          className="bg-soft-success p-2 mb-2 text-success d-flex font-size-11"

                        >
                          <i className="mdi mdi-checkbox-blank-circle  font-size-11 me-2" />
                          Platform Meetings - Accepted
                        </div>
                        <div
                          className="bg-soft-info p-2 mb-2 text-info d-flex"

                        >
                          <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                          My Google Calendar Meetings
                        </div>
                        <div
                          className="bg-soft-warning p-2 mb-2 text-warning d-flex"

                        >
                          <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                          Platform Meetings - Pending
                        </div>
                        <div
                          className="bg-soft-danger p-2 mb-2 text-danger d-flex"

                        >
                          <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                          My Google Calendar Meetings and Platform Meetings - Accepted
                        </div>
                        <Link to=" " onClick={toggleUpdtTimeZone} className="text-brand"><i className="ri-map-pin-time-line fs-5 align-bottom" /> Update your time zone</Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col xl={9}>
                  <Card className="card-h-100">
                    <CardBody>
                      <FullCalendar
                        plugins={[
                          BootstrapTheme,
                          dayGridPlugin,
                          interactionPlugin,
                          listPlugin
                        ]}
                        initialView="dayGridMonth"
                        slotDuration={"00:15:00"}
                        handleWindowResize={true}
                        themeSystem="bootstrap"
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                        }}
                        // events={events}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        drop={onDrop}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <div style={{ clear: "both" }}></div>


              <Offcanvas isOpen={modal} id="event-modal" direction="end" className="size-md">
                <OffcanvasHeader toggle={toggle} tag="h5" className="p-3 modal-title bg-light">
                  {!!isEdit ? "Meeting Detail" : "Create Meeting"}
                </OffcanvasHeader>
                <OffcanvasBody>
                  <Form
                    className={
                      !!isEdit
                        ? "needs-validation view-event"
                        : "needs-validation"
                    }
                    name="event-form"
                    id="form-event"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    {!!isEdit ? (
                      <div className="text-end">
                        <Link
                          to="#"
                          className="btn btn-sm btn-soft-primary"
                          id="edit-event-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            submitOtherEvent();
                            return false;
                          }}
                        >
                          Edit
                        </Link>
                      </div>
                    ) :
                      null
                    }

                    <div className="event-details">
                      <Row>
                        <Col md={6}>
                          <div className="flex-grow-1 d-flex align-items-start mb=3">
                            <div className="flex-shrink-0 me-3">
                              <i className="ri-user-3-line text-muted fs-4"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6
                                className="d-block fw-semibold mb-0 text-black-50"
                                id="event-start-date-tag"
                              >
                                Created By
                              </h6>
                              <p className="fs-5">Smiti Misra</p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="flex-grow-1 d-flex align-items-start mb=3">
                            <div className="flex-shrink-0 me-3">
                              <i className="ri-double-quotes-l text-muted fs-4"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6
                                className="d-block fw-semibold mb-0 text-black-50"
                                id="event-start-date-tag"
                              >
                                Title
                              </h6>
                              <p className="fs-5">Meeting Title</p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="flex-grow-1 d-flex align-items-start mb=3">
                            <div className="flex-shrink-0 me-3">
                              <i className="ri-calendar-2-line text-muted fs-4"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6
                                className="d-block fw-semibold mb-0 text-black-50"
                                id="event-start-date-tag"
                              >
                                Date/Time
                              </h6>
                              <p className="fs-5">25-Aug-2023 <span className="ms-2">13:00</span> </p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="flex-grow-1 d-flex align-items-start mb=3">
                            <div className="flex-shrink-0 me-3">
                              <i className="ri-user-shared-line text-muted fs-4"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6
                                className="d-block fw-semibold mb-0 text-black-50"
                                id="event-start-date-tag"
                              >
                                Sent Request
                              </h6>
                              <p className="fs-5">98</p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="flex-grow-1 d-flex align-items-start mb=3">
                            <div className="flex-shrink-0 me-3">
                              <i className="ri-user-received-2-line text-muted fs-4"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6
                                className="d-block fw-semibold mb-0 text-black-50"
                                id="event-start-date-tag"
                              >
                                Accepted Request
                              </h6>
                              <p className="fs-5">98</p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="flex-grow-1 d-flex align-items-start mb=3">
                            <div className="flex-shrink-0 me-3">
                              <i className="ri-time-line text-muted fs-4"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6
                                className="d-block fw-semibold mb-0 text-black-50"
                                id="event-start-date-tag"
                              >
                                Pending Request
                              </h6>
                              <p className="fs-5">98</p>
                            </div>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="flex-grow-1 d-flex align-items-start mb=3">
                            <div className="flex-shrink-0 me-3">
                              <i className="ri-discuss-line text-muted fs-4"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6
                                className="d-block fw-semibold mb-0 text-black-50"
                                id="event-start-date-tag"
                              >
                                Agenda
                              </h6>
                              <p className="fs-5">
                                Want to know where this information comes from? Learn more
                                Images may be subject to copyright. Learn More
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>

                    </div>
                    <Row className="event-form">
                      <Col md={6}>
                        <div className="mb-3">
                          <Label className="form-label">Title</Label>
                          <Input type="text" className="form-control" />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                          <Label>Date</Label>
                          <Flatpickr
                            className="form-control date-picker-icon"
                            id="event-start-date"
                            name="defaultDate"
                            placeholder="Select Date"
                            value={validation.values.defaultDate || ""}
                            options={{
                              mode: "range",
                              dateFormat: "Y-m-d",
                            }}
                            onChange={(date) => {
                              setSelectedNewDay(date);
                            }}
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label>Start Time</Label>
                          <Flatpickr
                            className="form-control time-picker"
                            id="event-start-date"
                            name="defaultDate"
                            placeholder="Select time"
                            value={validation.values.defaultDate || ""}
                            options={{
                              enableTime: true,
                              noCalendar: true,
                              dateFormat: "H:i",
                            }}

                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label>End Time</Label>
                          <Flatpickr
                            className="form-control time-picker"
                            id="event-start-date"
                            name="defaultDate"
                            placeholder="Select time"
                            value={validation.values.defaultDate || ""}
                            options={{
                              enableTime: true,
                              noCalendar: true,
                              dateFormat: "H:i",
                            }}

                          />
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Label htmlFor="event-location">With</Label>
                          <Row className="d-flex flex-wrap">
                            <Col md={6}>
                              <div className="form-check">
                                <Input className="form-check-input" type="checkbox" value="" id="Entrepreneurs" />
                                <Label className="form-check-label" htmlFor="Entrepreneurs">Entrepreneurs </Label>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="form-check">
                                <Input className="form-check-input" type="checkbox" value="" id="Investors" />
                                <Label className="form-check-label" htmlFor="Investors">Investors </Label>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="form-check">
                                <Input className="form-check-input" type="checkbox" value="" id="SMEAdvisors" />
                                <Label className="form-check-label" htmlFor="SMEAdvisors">SME Advisors </Label>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="form-check">
                                <Input className="form-check-input" type="checkbox" value="" id="AddGuests" />
                                <Label className="form-check-label" htmlFor="AddGuests">Add Guests</Label>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="form-check">
                                <Input className="form-check-input" type="checkbox" value="" id="AddTeam" />
                                <Label className="form-check-label" htmlFor="AddTeam">Add Team</Label>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="mb-3">
                          <Label className="form-label">Agenda</Label>
                          <CKEditor
                            editor={ClassicEditor}
                            data="<p>Hello from CKEditor 5!</p>"
                            onReady={(editor) => {
                              // You can store the "editor" and use when it is needed.

                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              // console.log({ event, editor, data });
                            }}
                          />
                        </div>
                        <div className="d-flex align-items-center">
                          <div className='attachment-btn'>
                            <input type="file" className='input' />
                            <i className='ri ri-attachment-line icon' />
                          </div>
                          <span className=" text-black-50 ms-1">filename.doc</span>

                        </div>
                      </Col>
                    </Row>

                  </Form>
                </OffcanvasBody>
                <div className="offcanvas-foorter border p-3 text-center">
                  <div className="hstack gap-2 justify-content-end">
                    <Button className="btn btn-brand-theme">Publish Meeting</Button>
                    <Button toggle={toggle}
                      className="btn btn-light">Cancel</Button>
                  </div>
                </div>
              </Offcanvas>
            </Col>
          </Row>
        </Container>
      </div >
      {/* Add Goup */}
      <Offcanvas
        isOpen={isUpdtTimeZone}
        direction="end"
        toggle={toggleUpdtTimeZone}
        id="offcanvasUpdtTimeZone"
        className="border-bottom"
      >
        <OffcanvasHeader className="bg-light" toggle={toggleUpdtTimeZone} id="offcanvasRightLabel">Update Time Zone</OffcanvasHeader>
        <OffcanvasBody className="px-0 overflow-hidden">
          <SimpleBar style={{ height: "100vh" }}>
            <div className="px-4">

              <Form>
                <Row>

                  <Col lg={12}>
                    <div className="mb-3">
                      <Label className="form-label">Select Time Zone </Label>
                      <Select
                        isClearable={true}
                        value={selectedGroup2}
                        onChange={() => {
                          handleSelectGroups2();
                        }}
                        options={TimezoneOptn}
                      />
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </SimpleBar>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button"
              className="btn btn-brand-theme">Submit</button>
            <Button toggle={toggleUpdtTimeZone}
              className="btn btn-light">Cancel</Button>
          </div>
        </div>
      </Offcanvas>
    </React.Fragment >
  );
};



export default Calender;
