import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardHeader,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import SimpleBar from "simplebar-react";
import Share from "./Models/Share";
import EditWorkflows from "./Models/EditWorkflows";
import AddWorkflows from "./Models/AddWorkflows";
import TaskList from "./Models/TaskList";
import Action from "./Models/Action";
import Filters from "./Models/Filters";
import Comments from "./Models/Comments";
import Evaluation from "./Models/Evaluation";
import InitialCommitment from "./Models/InitialCommitment";
import FinalCommitment from "./Models/FinalCommitment";
import CallForMoney from "./Models/CallForMoney";
import CreateSchedule from "./Models/CreateSchedule";
import ContactInfo from "./Models/ContactInfo";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DashboardEcommerce = () => {
  document.title = "SCIP | Dashboard";
  const [rightColumn, setRightColumn] = useState(false);
  const [dropdownOpenFive, setDropdownOpenFive] = useState(false);
  const [modelName, setModelName] = useState<any>("");
  const [dropdownOpenOne, setDropdownOpenOne] = useState(false);
  const [dropdownOpenTwo, setDropdownOpenTwo] = useState(false);
  const [dropdownOpenThree, setDropdownOpenThree] = useState(false);
  const [dropdownOpenFour, setDropdownOpenFour] = useState(false);
  const [dealData, setDealData] = useState<any>({ alert: false, id: "", status: "", });
  const [dragDashboardData, setDragDashboardData] = useState<any>();


  useEffect(() => {
    getDashboardDataList()
  }, [])

  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  const toggleModel = (name: any) => {
    setModelName(name);
  };

  //Dropdown

  const toggledropDownOne = () => {
    setDropdownOpenOne(!dropdownOpenOne);
  };

  const toggledropDownTwo = () => {
    setDropdownOpenTwo(!dropdownOpenTwo);
  };

  const toggledropDownThree = () => {
    setDropdownOpenThree(!dropdownOpenThree);
  };

  const toggledropDownFour = () => {
    setDropdownOpenFour(!dropdownOpenFour);
  };

  const toggledropDownFive = () => {
    setDropdownOpenFive(!dropdownOpenFive);
  };

  const submit = () => {
    // console.log(profileData)
  };

  const getDashboardDataList = (list?: any) => {
    var dashboardData: any = [
      { topHeading: ' (1) Screening To Deep Dive', dealsDays: "30 Deals", list: [{ heading: ' (1.1) Readiness for Deal review', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal reviewsdf', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review2', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review3', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }] },
      { topHeading: 'Presentation To Initial Comitments', dealsDays: "40 Deals", list: [{ heading: ' (1.1) Readiness for Deal review', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review8', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review4', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }] },
      { topHeading: 'Terms Of Investment', dealsDays: "50 Deals", list: [{ heading: ' (1.1) Readiness for Deal review', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review9', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review5', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }] },
      { topHeading: 'Investment', dealsDays: "55 Deals", list: [{ heading: ' (1.1) Readiness for Deal review', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review10', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review6', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }] },
      { topHeading: 'Post Investment Monitoring', dealsDays: "10 Deals", list: [{ heading: ' (1.1) Readiness for Deal review', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review11', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }, { heading: ' (1.1) Readiness for Deal review7', companyName: 'Darpan Enterprise - DD Seed 1', name: "Smriti Misra", date: "31/08/2023", due: 'Due in 0 Days' }] },
    ];
    setDragDashboardData(dashboardData);
  };


  const onDrag = (result: any) => {
    var dragId = result.draggableId.split("_");
    var dropId = result.destination.droppableId.split("_");
    var Finalobj: any = {};
    Finalobj = dragDashboardData;
    if (!result.destination) {
      return;
    }
    for (var i in Finalobj) {
      if (i == dropId[1]) {
        var obj: any = Finalobj[dragId[1]].list[dragId[2]]
        Finalobj[i].list.splice(result.destination.index, 0, obj);
      }
    }
    for (var i in Finalobj) {
      if (i == dragId[1]) {
        Finalobj[i].list.splice(dragId[2], 1)
      }
    }
    setDragDashboardData([...Finalobj]);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            {...{ title: "Dashboard", pageTitle: "Dashboards", location: "" }}
          />
          <Row>
            <Col lg={12}>
              <Card id="leadsList">
                <CardHeader className="border-0">
                  <Row className="g-0 align-items-center">
                    <Col lg={3} sm={6}>
                      <div className="search-box">
                        <Input
                          type="text"
                          className="form-control search"
                          placeholder="Company / Brand"
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <div className="col-sm-auto ms-auto w-100-ipad">
                      <div className="d-flex hstack gap-2 flex-wrap">
                        <button type="button" className="btn btn-brand-theme">
                          My Work
                        </button>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            href="#"
                            className="btn btn-brand-theme dropdown"
                            tag="button"
                          >
                            Deal Status
                            <i className="ri-arrow-down-s-fill align-bottom"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-end">
                            <Link className="dropdown-item" to="#">
                              All
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Abhaya Kumar Shankar
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Aditya Reddy
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Ash King
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Balrama Nair
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Chetan Kothawade
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Chetan K
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Shobanaa Anand
                            </Link>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <button
                          type="button"
                          className="btn btn-soft-info"
                          id="Filters"
                          onClick={() => toggleModel("Filters")}
                        >
                          <i className="ri-filter-3-line align-bottom me-1"></i>
                          Filters
                        </button>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn btn-soft-info"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="ri-grid-fill align-bottom"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <li>
                              <DropdownItem>
                                <Link to="#">
                                  <i className="ri-add-fill align-bottom me-1"></i>
                                  Grid
                                </Link>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem>
                                <Link to="/dashboard/dashboard-list">
                                  <i className="ri-pencil-line align-bottom me-1"></i>
                                  List
                                </Link>
                              </DropdownItem>
                            </li>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <button
                          type="button"
                          className="btn btn-soft-info"
                          id="AddWorkflows"
                          onClick={() => toggleModel("AddWorkflows")}
                        >
                          <i className="ri-add-box-line align-bottom"></i>
                        </button>
                        <button type="button" className="btn btn-soft-info">
                          <i className="ri-aspect-ratio-line align-bottom"></i>
                        </button>
                      </div>
                    </div>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <SimpleBar
            autoHide={false}> {/* style={{ maxHeight: "660px", }} */}
            <div>
              <div className="dashboard-data d-flex w-100 gap-3">
                <DragDropContext onDragEnd={onDrag}>
                  {dragDashboardData?.length > 0 && dragDashboardData.map((res: any, mainIndex: any) => {
                    return (
                      <div className="col-11 col-lg"> { /* d-flex w-100*/ }
                        <Droppable droppableId={"dropableId_" + mainIndex}>
                          {(provided: any) => (
                            <div
                              className=""
                              {...provided.droppableProps}
                              ref={provided.innerRef}> {/* col d-flex w-100 */}
                              <div className=""> {/* col-12 col-lg w-100 */}
                                <Card className="mb-3 static-toggle">
                                  <Link to="#" className="card-body bg-danger-subtle">
                                    <h5 className="card-title text-uppercase fw-semibold mb-1 fs-13">
                                      {res.topHeading}
                                    </h5>
                                    <Dropdown isOpen={dropdownOpenOne} toggle={toggledropDownOne}>
                                      <DropdownToggle
                                        type="button"
                                        className="fs-22 btn-bg-none"
                                        style={{ background: "none" }}
                                      >
                                        <i className="ri-arrow-down-s-line"></i>
                                      </DropdownToggle>
                                      <DropdownMenu>
                                        <li>
                                          <Link className="dropdown-item fs-13 px-2" to="#">
                                            (1.1) Readiness for Deal review
                                            <span className="badge bg-info-subtle text-info text-uppercase float-end">
                                              3
                                            </span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link className="dropdown-item fs-13 px-2" to="#">
                                            (1.2) Evaluation by Deal Committee
                                            <span className="badge bg-info-subtle text-info text-uppercase float-end">
                                              0
                                            </span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link className="dropdown-item fs-13 px-2" to="#">
                                            Readiness for Deal presentation
                                            <span className="badge bg-info-subtle text-info text-uppercase float-end">
                                              0
                                            </span>
                                          </Link>
                                        </li>
                                        <li>
                                          <Link className="dropdown-item fs-13 px-2" to="#">
                                            <span className="badge bg-success-subtle text-success text-uppercase">
                                              View All
                                            </span>
                                          </Link>
                                        </li>
                                      </DropdownMenu>
                                    </Dropdown>
                                    <p className="text-muted mb-0">
                                      <span className="fw-medium">{res.dealsDays}</span>
                                    </p>
                                  </Link>
                                </Card>
                                <div className="Dashboard-Drag-Drop">
                                  {res.list?.length > 0 && res.list.map((data: any, index: any) => {
                                    return (
                                      <Draggable
                                        key={"draggableId_" + mainIndex + "_" + index}
                                        draggableId={"draggableId_" + mainIndex + "_" + index}
                                        index={index}>
                                        {(provided: any) => (
                                          <div
                                            // className="call-group justify-center box"
                                            className="Dashboard-Drag-Drop"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
                                            <Card className="mb-3">
                                            <div className="btn-dots">
                                                    <UncontrolledDropdown>
                                                      <DropdownToggle
                                                        className="button-bg-none"
                                                        type="button"
                                                        id="dropdownMenuButton1"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                      > {/* btn btn-primary btn-sm */}
                                                        <i className="ri-more-fill align-middle"></i>
                                                      </DropdownToggle>
                                                      <DropdownMenu>
                                                        <li>
                                                          <DropdownItem className="px-2">
                                                            <i className="ri-layout-grid-line align-bottom me-2"></i>
                                                            Grid
                                                          </DropdownItem>
                                                          <div className="inner-Submenu">
                                                            <Link
                                                              to="javascript:void(0);"
                                                              id="Share"
                                                              onClick={() => toggleModel("Share")}
                                                            >
                                                              <i className=" ri-share-line align-bottom me-1"></i>
                                                              Deal on App
                                                            </Link>

                                                            <Link to="/enterpreneur/more">
                                                              <i className="ri-volume-down-line align-bottom me-1"></i>
                                                              Manage Deal
                                                            </Link>

                                                            <Link to="javascript:void(0);">
                                                              <i className="ri-user-line align-bottom me-1"></i>
                                                              Entrepreneur Dash
                                                            </Link>

                                                            <Link
                                                              to="javascript:void(0);"
                                                              onClick={() =>
                                                                setDealData({ alert: true, id: 1, status: 0 })
                                                              }
                                                            >
                                                              <i className="ri-delete-bin-5-line align-bottom me-1"></i>
                                                              Delete Task
                                                            </Link>

                                                            <Link
                                                              to="javascript:void(0);"
                                                              id="EditWorkflows"
                                                              onClick={() =>
                                                                toggleModel("EditWorkflows")
                                                              }
                                                            >
                                                              <i className="ri-pencil-fill align-bottom me-1"></i>
                                                              Edit Task
                                                            </Link>

                                                            <Link to="javascript:void(0);">
                                                              <i className="ri-checkbox-circle-line align-bottom me-1"></i>
                                                              Complete Task
                                                            </Link>

                                                            <Link to="javascript:void(0);">
                                                              <i className="ri-spam-2-line align-bottom me-1"></i>{" "}
                                                              iManage
                                                            </Link>
                                                          </div>
                                                        </li>
                                                        <li>
                                                          <DropdownItem
                                                            className="px-2"
                                                            id="Comments"
                                                            onClick={() => toggleModel("Comments")}
                                                          >
                                                            <i className="ri-chat-2-line align-bottom me-1"></i>
                                                            Comments
                                                          </DropdownItem>
                                                        </li>
                                                        <li>
                                                          <DropdownItem
                                                            className="px-2"
                                                            id="TaskList"
                                                            onClick={() => toggleModel("TaskList")}
                                                          >
                                                            <i className="ri-feedback-line align-bottom me-1"></i>
                                                            Info
                                                          </DropdownItem>
                                                        </li>
                                                        <li>
                                                          <DropdownItem
                                                            onClick={(event) =>
                                                            (window.location.href =
                                                              "/dashboard/view-rubric/")
                                                            }
                                                            className="px-2"
                                                          >
                                                            <i className="ri-grid-line align-bottom me-1"></i>
                                                            View Rubric
                                                          </DropdownItem>
                                                        </li>
                                                        <li>
                                                          <DropdownItem
                                                            onClick={(event) =>
                                                            (window.location.href =
                                                              "/dashboard/view-review/")
                                                            }
                                                            className="px-2"
                                                          >
                                                            
                                                            <i className="ri-star-line align-bottom me-1"></i>
                                                            View Review
                                                          </DropdownItem>
                                                        </li>
                                                      </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                  </div>
                                              <SimpleBar
                                                autoHide={false}
                                                style={{ maxHeight: "600px", overflowX: "hidden" }}
                                              >
                                                <CardBody>
                                                  <Link to="#" className="width-set">
                                                    <h6 className="fs-14 mb-1">
                                                      {data.heading}
                                                    </h6>
                                                  </Link>
                                                
                                                  <p className="text-muted mb-0">
                                                    {data.companyName}
                                                    {/* Darpan Enterprise - DD Seed 1 */}
                                                  </p>
                                                  <small className="text-info">{data.name}</small>
                                                  <Row>
                                                    <Col md={6} sm={6}>
                                                      <span>
                                                        <small className="text-muted">{data.date}</small>
                                                      </span>
                                                    </Col>
                                                    <Col md={6} sm={6} className="text-end">
                                                      <span className="badge rounded-pill border border-success text-success">
                                                        {data.due}
                                                      </span>
                                                    </Col>
                                                  </Row>
                                                </CardBody>
                                              </SimpleBar>
                                            </Card>
                                          </div>
                                        )}
                                      </Draggable>
                                    )
                                  })}
                                </div>
                              </div>
                            </div>
                          )}
                        </Droppable></div>
                    )
                  })}
                </DragDropContext>
              </div>
            </div>
          </SimpleBar>
        </Container>
      </div>

      <Comments
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Comments" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <Share
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Share" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <TaskList
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "TaskList" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <AddWorkflows
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "AddWorkflows" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <EditWorkflows
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditWorkflows" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <Filters
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Filters" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      {/* <SweetAlert
        custom
        show={dealData.alert}
        btnSize="md"
        showProfile
        showCloseButton
        confirmBtnBsStyle="primary"
        cancelBtnBsStyle="success"
        title=""
        onConfirm={submit}
        onCancel={() => setDealData({ alert: false, id: "", status: "" })}
      >
        <h6> Are you sure you want to do this action? </h6>
      </SweetAlert> */}
      <Action
        show={modelName === "Action" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <ContactInfo
        show={modelName === "ContactInfo" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <Share
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "Share" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <Evaluation
        show={modelName === "Evaluation" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <InitialCommitment
        show={modelName === "InitialCommitment" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <FinalCommitment
        show={modelName === "FinalCommitment" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <CallForMoney
        show={modelName === "CallForMoney" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      <CreateSchedule
        show={modelName === "CreateSchedule" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      {/* <SweetAlert
        custom
        show={dealData.alert}
        btnSize="md"
        showProfile
        showCloseButton
        confirmBtnBsStyle="primary"
        cancelBtnBsStyle="success"
        title=""
        onConfirm={submit}
        onCancel={() => setDealData({ alert: false, id: "", status: "" })}
      >
        <h6> Deal Page - Comments Link Copied.</h6>
        {window.location.href}
      </SweetAlert> */}
      <Action
        show={modelName === "Action" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      {/* For red Pill */}

      {/* <Col md={6} sm={6} className="text-end">
                        <span className="badge rounded-pill border border-danger text-danger">
                          Due in 0 Days
                        </span>
                      </Col> */}

    </React.Fragment>
  );
};

export default DashboardEcommerce;
