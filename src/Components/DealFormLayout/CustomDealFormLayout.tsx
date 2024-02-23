import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Input,
    Row,
} from "reactstrap";
// import { useForm } from "react-hook-form";
import Loader from "../Loader/Loader";
import Image1 from '../../assets/images/Deal_Layout_Images/image (1).png'
import Image2 from '../../assets/images/Deal_Layout_Images/image (2).png'
import Image3 from '../../assets/images/Deal_Layout_Images/image (3).png'
import Image4 from '../../assets/images/Deal_Layout_Images/image (4).png'
import Image5 from '../../assets/images/Deal_Layout_Images/image (5).png'
import Image6 from '../../assets/images/Deal_Layout_Images/image (6).png'
import Image7 from '../../assets/images/Deal_Layout_Images/image (7).png'
import Image9 from '../../assets/images/Deal_Layout_Images/image (9).png'
import Image10 from '../../assets/images/Deal_Layout_Images/image (10).png'
import Image11 from '../../assets/images/Deal_Layout_Images/image (11).png'
// import Image12 from '../../assets/images/Deal_Layout_Images/image (12).png'
// import Image13 from '../../assets/images/Deal_Layout_Images/image (13).png'
// import Image14 from '../../assets/images/Deal_Layout_Images/image (14).png'
// import Image15 from '../../assets/images/Deal_Layout_Images/image (15).png'
// import Image16 from '../../assets/images/Deal_Layout_Images/image (16).png'
// import Image17 from '../../assets/images/Deal_Layout_Images/image (17).png'
// import Image18 from '../../assets/images/Deal_Layout_Images/image (18).png'
// import Image19 from '../../assets/images/Deal_Layout_Images/image (19).png'
// import Image20 from '../../assets/images/Deal_Layout_Images/image (20).png'
// import Image21 from '../../assets/images/Deal_Layout_Images/image (21).png'
// import Image22 from '../../assets/images/Deal_Layout_Images/image (22).png'
// import Image23 from '../../assets/images/Deal_Layout_Images/image (23).png'
// import Image24 from '../../assets/images/Deal_Layout_Images/image (24).png'
// import Image25 from '../../assets/images/Deal_Layout_Images/image (25).png'
// import Image26 from '../../assets/images/Deal_Layout_Images/image (26).png'
import Image27 from '../../assets/images/Deal_Layout_Images/image (27).png'
import Image28 from '../../assets/images/Deal_Layout_Images/image (28).png'
import Image29 from '../../assets/images/Deal_Layout_Images/image (29).png'
import Image30 from '../../assets/images/Deal_Layout_Images/image (30).png'
import Image31 from '../../assets/images/Deal_Layout_Images/image (31).png'
import Image32 from '../../assets/images/Deal_Layout_Images/image (32).png'
import Image33 from '../../assets/images/Deal_Layout_Images/image (33).png'
import Image34 from '../../assets/images/Deal_Layout_Images/image (34).png'
import Image35 from '../../assets/images/Deal_Layout_Images/image (35).png'
import Image36 from '../../assets/images/Deal_Layout_Images/image (36).png'
import Image37 from '../../assets/images/Deal_Layout_Images/image (37).png'
import Image38 from '../../assets/images/Deal_Layout_Images/image (38).png'
import Image39 from '../../assets/images/Deal_Layout_Images/image (39).png'
import Image40 from '../../assets/images/Deal_Layout_Images/image (40).png'
import Image41 from '../../assets/images/Deal_Layout_Images/image (41).png'
import Image42 from '../../assets/images/Deal_Layout_Images/image (42).png'
import Image43 from '../../assets/images/Deal_Layout_Images/image (43).png'
import Image44 from '../../assets/images/Deal_Layout_Images/image (44).png'
import Image45 from '../../assets/images/Deal_Layout_Images/image (45).png'
import Image46 from '../../assets/images/Deal_Layout_Images/image (46).png'
import Image47 from '../../assets/images/Deal_Layout_Images/image (47).png'
import Image48 from '../../assets/images/Deal_Layout_Images/image (48).png'
import Image49 from '../../assets/images/Deal_Layout_Images/image (49).png'
import Image50 from '../../assets/images/Deal_Layout_Images/image (50).png'
import Image51 from '../../assets/images/Deal_Layout_Images/image (51).png'
import Image52 from '../../assets/images/Deal_Layout_Images/image (52).png'
import Image53 from '../../assets/images/Deal_Layout_Images/image (53).png'
import Image54 from '../../assets/images/Deal_Layout_Images/image (54).png'
import Image55 from '../../assets/images/Deal_Layout_Images/image (55).png'
import Image56 from '../../assets/images/Deal_Layout_Images/image (56).png'
import Image57 from '../../assets/images/Deal_Layout_Images/image (57).png'
import Image58 from '../../assets/images/Deal_Layout_Images/image (58).png'
import Image59 from '../../assets/images/Deal_Layout_Images/image (59).png'
import Image60 from '../../assets/images/Deal_Layout_Images/image (60).png'
import Image61 from '../../assets/images/Deal_Layout_Images/image (61).png'
import Image62 from '../../assets/images/Deal_Layout_Images/image (62).png'
import Image63 from '../../assets/images/Deal_Layout_Images/image (63).png'
import Image64 from '../../assets/images/Deal_Layout_Images/image (64).png'
import Image65 from '../../assets/images/Deal_Layout_Images/image (65).png'
import Image66 from '../../assets/images/Deal_Layout_Images/image (66).png'
import Image67 from '../../assets/images/Deal_Layout_Images/image (67).png'

import AddCustomDealFormLayout from "./AddCustomDealFormLayout";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import BreadCrumb from "../Common/BreadCrumb";
import { useForm } from "react-hook-form";
import WebService from "../../utility/WebService";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import HelperService from "../../utility/HelperService";
const CustomDealFormLayout = () => {
    const {
        handleSubmit,
    } = useForm();
    const [isShowAddCustomDealFormLayout, setIsShowAddCustomDealFormLayout] = useState(false);
    const [showLoader, setShowLoader] = useState<any>(false);
    const [editData, setEditData] = useState<any>();
    const [layout, setLayout] = useState<any>([]);
    const [DragItems, setDragItems] = useState<any>([]);
    const [DragItems2, setDragItems2] = useState<any>([]);
    const [parentIndex, setParentIndex] = useState<any>();
    const [childIndex, setChildIndex] = useState<any>();
    const [keyword, setKeyword] = useState("");
    let { id } = useParams();
    
    useEffect(() => {
        ResponsivGridLayoutList()
        var div = document.getElementById("topnav-hamburger-icon");
        if (div) {
            div.click();
        }
        getDetail()
    }, []);
    const getDetail = () => {
        setShowLoader(true);
        WebService.getAPI({
            action: `/deal-page-layout-details/${id}`,
        })
            .then((res: any) => {
                if (res?.result && res?.result.length > 0) {
                    setLayout(res?.result)
                }
                if (res.data) {
                    var arr: any = [];
                    if (res.data.page == 'DEAL' || res.data.page == 'EVALUATION') {
                        arr = [
                            { section: 'COMPANY_SECTION', name: 'Company Summary', img: Image40 },
                            { section: 'COMPANY_VIDEO', name: 'Company Video', img: Image41 },
                            { section: 'COMPANY_SUMMARY_CARD', name: 'Company Summary Card', img: Image58 },
                            { section: 'EVALUATION_COMMENTS', name: 'All Comment', img: Image63 },
                            { section: 'EVALUATION_REVIEW', name: 'All Review', img: Image64 },
                            { section: 'EVALUATION_RUBRIC', name: 'All Rubric', img: Image65 },
                            { section: 'TAB_VIEW', name: 'Tab View', img: Image2 },
                            { section: 'QUESTION', name: 'Questions', img: Image3 },
                            { section: 'DOCUMENT', name: 'Documents', img: Image4 },
                            { section: 'FINANCIAL_DETAIL', name: 'Financial Details', img: Image5 },
                            { section: 'COMPANY_DETAIL', name: 'Company Details', img: Image6 },
                            { section: 'MENTOR', name: 'Mentor', img: Image7 },
                            { section: 'FUNDING_PROPOSAL', name: 'Funding Proposal', img: Image9 },
                            { section: 'INDUSTRY_IRR', name: 'Industry IRR', img: Image10 },
                            { section: 'INDUSTRY_INVESTORE_IRR', name: 'Industry IRR (Inverstor)', img: Image11 },
                            { section: 'TEASER', name: 'Teaser', img: Image66 },
                            // { section: 'SCIP_COMMENTS', name: 'Scip Comments', img: Image12 },
                            // { section: 'COMPANY_CUSTOMER_PITCH', name: 'Your Companys Customer Pitch', img: Image13 },
                            // { section: 'TRACTION_AND_PERFORMANCE_METRICS', name: 'Traction And Other Performance Metrics', img: Image14 },
                            // { section: 'BUSINESS_OVERVIEW', name: 'Business Overview', img: Image15 },
                            // { section: 'EVALUATOR_COMMENTS', name: 'Evaluator Comments', img: Image16 },
                            // { section: 'INDUSTRY_OVERVIEW', name: 'Industry Overview', img: Image17 },
                            // { section: 'ELEVATOR_PITCH', name: 'Elevator Pitch', img: Image18 },
                            // { section: 'BUSINESS_MODEL', name: 'Business Model', img: Image19 },
                            // { section: 'SERVICE_PRODUCTS_TECHNOLOGY', name: 'Services / Products/ Technology', img: Image20 },
                            // { section: 'CUSTOMER_PAIN_POINT', name: 'Customer Pain Point', img: Image21 },
                            // { section: 'REVENUE_MODEL', name: 'Revenue Model/ Go-to-market Strategy', img: Image22 },
                            // { section: 'CUSTOMER_EXISTING_PIPELINE', name: 'Customer Existing In The Pipeline', img: Image23 },
                            // { section: 'COMPETITION_USP', name: 'Competition/ USP', img: Image24 },
                            // { section: 'TEAM', name: 'Team', img: Image25 },
                            // { section: 'ADVISORS', name: 'Advisors', img: Image26 },
                            { section: 'INITIAL_COMMITMENT_DETAILS', name: 'Initial Commitment Details', img: Image27 },
                            { section: 'TOTAL_ASK', name: 'Total Ask', img: Image28 },
                            { section: 'SCIP_ASK', name: 'SCIP Ask', img: Image29 },
                            { section: 'CASH_INVESTED_BUSINESS', name: 'Cash invested in business ', img: Image30 },
                            { section: 'PRE_MONEY_VALUATION', name: 'Pre-money valuation ', img: Image31 },
                            { section: 'POST_MONEY_VALUATION', name: 'Post-money valuation', img: Image32 },
                            { section: 'COMMITMENT_FROM_OTHER', name: 'Commitment from other', img: Image33 },
                            { section: 'ROUND_OF_INVESTMENT', name: 'Round Of Investment', img: Image34 },
                            { section: 'LEAD_INVESTOR', name: 'Lead Investor', img: Image35 },
                            { section: 'INITIAL_COMMITMENT_STATUS', name: 'Initial Commitment Status', img: Image36 },
                            { section: 'INITIAL_COMMITMENT', name: 'Initial Commitment', img: Image37 },
                            { section: 'INVESTMENT_INSTRUMENT', name: 'Investment Instrument', img: Image38 },
                            { section: 'COMMITMENT_OTHER_INVESTOR', name: 'Commitment by Other Investors/Angel Networks', img: Image39 },
                            { section: 'FINAL_COMMITMENT', name: 'Final Commitment', img: Image42 },
                            { section: 'ANGEL_NETWORK_GROSS_PORTFOLIO', name: 'Angle Network Gross IRR Portfolio', img: Image43 },
                            { section: 'INVESTOR_PORTFOLIO_INVESTOR', name: 'Investor Portfolio Investor', img: Image44 },
                            { section: 'CALL_FOR_MONEY', name: 'Call For Money', img: Image45 },
                            { section: 'INVESTMENT_DOCUMENT', name: 'Investment Documents', img: Image59 },
                            { section: 'DD_REPORTS', name: 'DD Reports', img: Image60 },
                            { section: 'FUNDS_DELIGENCE', name: 'Funds Diligence', img: Image61 },
                            { section: 'ARCHIVE_VIDEO', name: 'Archive Video', img: Image62 },
                            { section: 'PROGRESS_REPORT', name: 'Progress Report', img: Image47 },
                            { section: 'OTHER_ROUND_OF_INVESTMENTS', name: 'Other round of investment(s)', img: Image48 },
                            { section: 'LEAD', name: 'Lead', img: Image49 },
                            // { section: 'TASK_STATUS_CARD', name: 'Task Status', img: Image67 },
                            { section: 'ASSIGNED_TO', name: 'Assigned to', img: Image50 },
                            { section: 'CURRENT_STAGE', name: 'Current Stage', img: Image51 },
                            { section: 'DATE_OF_ASSIGNMENT', name: 'Date of Assignment', img: Image52 },
                            { section: 'NO_OF_DAYS_SINCE_ASSIGNMENT', name: 'No of Days Since Assignment', img: Image53 },
                            { section: 'INFORMATION_AWAITED_NEXT_SECTION', name: 'Information Awaited / Next Action', img: Image54 },
                            { section: 'INVESTMENT_TASK_LIST', name: 'Investment Tasks', img: Image55 },
                            { section: 'KANBAN', name: 'Kanban', img: Image56 },
                            { section: 'STARTUP_FUNDING_PROPOSAL', name: 'Start Up Funding Proposal', img: Image57 },


                        ];
                    }
                    setDragItems([...arr])
                    setDragItems2([...arr])
                }

                setShowLoader(false);
            })
            .catch((e) => {
                setShowLoader(false);
            });
    };
    const onSave = () => {
        if (layout.length > 0 && id) {
            var obj: any = {};
            obj.id = id;
            obj.json_data = layout;
            setShowLoader(true);
            WebService.putAPI({
                action: `/edit-deal-page-layout`,
                body: obj,
                id: "form-layout-submit-btn",
            })
                .then((res: any) => {
                    toast.success(res.message);
                    goBack();
                })
                .catch((e) => {
                    setShowLoader(false);
                });
        }
    };
    const goBack = () => {
        window.history.back();
    };
    const ResponsivGridLayoutList = () => {
        var layouts: any = [];
        setLayout(layouts)
    };
    const AddLayout = (index: any) => {
        var count = 0;
        for (var j in layout) {
            if (layout[j].ishighlight && layout[j].child.length < 4) {
                count++
                layout[j].child.push(DragItems[index])
                layout[j].ishighlight = false
            } else {
                layout[j].ishighlight = false
            }
        }
        for (var i in DragItems) {
            if (i == index && count == 0) {
                var obj: any = {};
                obj.ishighlight = false;
                obj.child = [];
                obj.child.push(DragItems[i]);
                layout.push(obj);
            }
        }
        setLayout([...layout])
    };
    const onDelete = (index: any, j: any) => {
        for (var i in layout) {
            if (i == index) {
                layout[i].child.splice(j, 1)
            }
            if (layout[i].child.length == 0) {
                layout.splice(i, 1)
            }
        }
        setLayout([...layout])
    }
    const CloseAddCustomDealFormLayout = () => {
        setIsShowAddCustomDealFormLayout(false);
    }
    const onDragEnd2 = (result: any) => {
        console.log('sdfsd', result);

    }
    const onDragEnd = (result: any) => {
        console.log('result', result);
        if (result.draggableId.includes('draggablId_')) {
            var Finalobj: any = {};
            Finalobj = layout;
            if (!result.destination) return;
            const items = Array.from(Finalobj);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            setLayout([...items]);
        } else {

            var count = 0;
            for (var j in layout) {
                if (layout[j].ishighlight && layout[j].child.length < 4) {
                    count++
                    layout[j].child.push(DragItems[result.source.index])
                    layout[j].ishighlight = false
                } else {
                    layout[j].ishighlight = false
                }
            }
            for (var i in DragItems) {
                if (i == result.source.index && count == 0) {
                    var obj: any = {};
                    obj.ishighlight = false;
                    obj.child = [];
                    obj.child.push(DragItems[i]);
                    layout.splice(result.destination.index, 0, obj);
                }
            }
            setLayout([...layout]);

        }
    };
    const onEditLayout = (data: any, j: any, i: any) => {
        setParentIndex(j)
        setChildIndex(i)
        setEditData(data)
        setIsShowAddCustomDealFormLayout(true)
    }
    const setSearchText = (keyword: any) => {

        var list = keyword
            ? DragItems2.filter((e: any) => {
                return (
                    e.name.toLowerCase().indexOf(keyword.toLowerCase()) >
                    -1
                );
            })
            : DragItems2;
        setDragItems([...list])
    }
    const setUpdatedData = (data: any) => {
        for (var j in layout) {
            if (parentIndex == j) {
                for (var i in layout[j].child) {
                    if (childIndex == i) {
                        layout[j].child[i].name = data.name

                        if (data.question_title) {
                            layout[j].child[i].question_title = data.question_title
                        }
                        if (data.select_source_table) {
                            layout[j].child[i].select_source_table = data.select_source_table
                        }
                        if (data.source_table_relation) {
                            layout[j].child[i].source_table_relation = data.source_table_relation
                        }
                        if (data.source_table_field_to_show) {
                            layout[j].child[i].source_table_field_to_show = data.source_table_field_to_show
                        }
                        if (data.type) {
                            layout[j].child[i].type = data.type
                        }
                        if (data.value_from_table) {
                            layout[j].child[i].value_from_table = data.value_from_table
                        }
                        if (data.field_to_show) {
                            layout[j].child[i].field_to_show = data.field_to_show
                        }
                        if (data.field_relation) {
                            layout[j].child[i].field_relation = data.field_relation
                        }
                    }
                }
            }
        }
        setChildIndex('')
        setParentIndex('')
        setLayout([...layout])
    }
    return (
        <>
            {isShowAddCustomDealFormLayout &&
                <AddCustomDealFormLayout
                    show={isShowAddCustomDealFormLayout}
                    onCloseClick={CloseAddCustomDealFormLayout}
                    layoutData={editData}
                    updatedData={setUpdatedData}
                />
            }
            {showLoader ? (
                <Loader show={showLoader} />
            ) : (
                <div className="page-content" style={{ overflow: 'none' }}>
                    <BreadCrumb title="Deal Form Layout" pageTitle="Deal Form Layout" location={"/admin/menu"} />
                    <form
                        onSubmit={handleSubmit(onSave)}
                        className="d-flex flex-column justify-content-end">
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="cards" type="OUTER" >
                                {(provided: any) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        <Row className="padding-11">
                                            <h5>Deal Form Layout</h5>
                                            <Col lg={9} style={{ overflowY: 'scroll', height: '90vh' }}>
                                                <Row>
                                                    {layout &&
                                                        layout.length > 0 &&
                                                        layout.map(
                                                            (item: any, j: any) => {
                                                                return (
                                                                    <>
                                                                        <Draggable
                                                                            key={"draggablId_" + j}
                                                                            draggableId={"draggablId_" + j}
                                                                            index={j}>
                                                                            {(provided: any) => (
                                                                                <div
                                                                                    className="call-group justify-center box"
                                                                                    ref={provided.innerRef}
                                                                                    {...provided.draggableProps}
                                                                                    {...provided.dragHandleProps}>
                                                                                    <Col lg={12} className="p-2 mt-2" style={{ backgroundColor: item.ishighlight ? 'lightblue' : 'grey' }} onClick={() => {
                                                                                        {
                                                                                            for (var k in layout) {
                                                                                                if (j == k) {
                                                                                                    layout[k].ishighlight = !layout[k].ishighlight;
                                                                                                } else {
                                                                                                    layout[k].ishighlight = false;
                                                                                                }
                                                                                            }
                                                                                            setLayout([...layout]);
                                                                                        }
                                                                                    }}
                                                                                    >
                                                                                        <Row >
                                                                                            {item.child &&
                                                                                                item.child.length > 0 &&
                                                                                                item.child.map(
                                                                                                    (res: any, i: any) => {
                                                                                                        return (
                                                                                                            <>
                                                                                                                <Col lg={item.child && item.child.length > 1 ? item.child && item.child.length > 2 ? item.child && item.child.length > 3 ? 3 : 4 : 6 : 12}
                                                                                                                >
                                                                                                                    <Card >
                                                                                                                        <Row>
                                                                                                                            <Col lg={10}>
                                                                                                                                <div className="p-3" >
                                                                                                                                    <a className="label" title={res.name}>  {HelperService.getText(res.name, item.child && item.child.length > 1 ? item.child && item.child.length > 2 ? item.child && item.child.length > 3 ? 10 : 4 : 100 : 100)}</a>
                                                                                                                                </div>
                                                                                                                            </Col>
                                                                                                                            <Col lg={2}>
                                                                                                                                <div className="p-3" style={{ justifyContent: "end", display: "flex" }}>
                                                                                                                                    <a className="text-body ml-2 cursor-pointer" onClick={() => onEditLayout(res, j, i)}>
                                                                                                                                        <i className="ri-edit-box-line align-middle me-3 font-21"></i>
                                                                                                                                    </a>
                                                                                                                                    <a className="text-body cursor-pointer" onClick={() => onDelete(j, i)}>
                                                                                                                                        <i className="ri-delete-bin-2-line danger align-middle me-2 font-21 danger"></i>
                                                                                                                                    </a>
                                                                                                                                </div>
                                                                                                                            </Col>
                                                                                                                        </Row>
                                                                                                                        <CardBody >
                                                                                                                            <div className="border-0 card-header ">
                                                                                                                                <div key={res.i} ><img className="custom-border" src={res.img ? res.img : ""} style={{
                                                                                                                                    objectFit: 'contain', height: item.child && item.child.length > 1 ? item.child && item.child.length > 2 ? '39px' : '79px' : '169px',
                                                                                                                                    width: item.child && item.child.length > 1 ? item.child && item.child.length > 2 ? item.child && item.child.length > 3 ? '108px' : '215px' : '359px' : '778px'
                                                                                                                                }} /></div>
                                                                                                                            </div>
                                                                                                                        </CardBody>
                                                                                                                    </Card >
                                                                                                                </Col>


                                                                                                            </>
                                                                                                        );
                                                                                                    }
                                                                                                )}
                                                                                        </Row>
                                                                                    </Col >
                                                                                </div>
                                                                            )}
                                                                        </Draggable>
                                                                    </>
                                                                );
                                                            }
                                                        )}
                                                </Row>
                                            </Col>
                                            <Col lg={3} >
                                                <Card id="leadsList">
                                                    <CardHeader className="border-0">
                                                        <h5>Deal Form Layout</h5>
                                                        <div>
                                                            <Col lg={12} style={{ overflowY: 'scroll', height: '90vh' }}>
                                                                <div className="search-box mb-2">
                                                                    <Input
                                                                        type="text"
                                                                        className="form-control search"
                                                                        placeholder="Source"
                                                                        onChange={(e) => setSearchText(e.target.value)}
                                                                    />
                                                                    <i className="ri-search-line search-icon"></i>
                                                                </div>
                                                                {DragItems &&
                                                                    DragItems.length > 0 &&
                                                                    DragItems.map(
                                                                        (res: any, index: any) => {
                                                                            return (
                                                                                <>
                                                                                    <Draggable
                                                                                        key={"test_" + index}
                                                                                        draggableId={"test_" + index}
                                                                                        index={index}>
                                                                                        {(provided: any) => (
                                                                                            <div
                                                                                                className="call-group justify-center box"
                                                                                                ref={provided.innerRef}
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}>
                                                                                                <div>
                                                                                                    {/* <span > */}
                                                                                                    <a className="label" title={res.name}> {res.name}</a>
                                                                                                    {/* </span> */}
                                                                                                    <Card className="p-2" >
                                                                                                        <Row>
                                                                                                            <Col md={10}>
                                                                                                                <img className="custom-border" src={res.img} height="100%" width="100%" style={{ objectFit: 'contain' }} />
                                                                                                            </Col>
                                                                                                            <Col md={2} style={{
                                                                                                                alignItems: "center",
                                                                                                                display: 'flex'
                                                                                                            }}>
                                                                                                                {/* <img src={PlusIcon} className="plus-Layout-Icon" alt="" height="100%" width="100%" /> */}
                                                                                                                {/* <a className="cursor-pointer"> </a> */}
                                                                                                                <div ><a className="cursor-pointer" onClick={() => {
                                                                                                                    AddLayout(index)
                                                                                                                }} style={{ fontSize: '30px' }}>+</a></div>
                                                                                                            </Col>
                                                                                                        </Row>
                                                                                                    </Card>
                                                                                                </div >
                                                                                            </div >
                                                                                        )}

                                                                                    </Draggable>
                                                                                </>
                                                                            );
                                                                        }
                                                                    )}
                                                            </Col >
                                                        </div>
                                                    </CardHeader>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                        <Card>
                            <div className="offcanvas-footer p-3 text-center hstack gap-2 justify-content-end" style={{ bottom: "0%", position: "absolute" }}>
                                <Button
                                    type="submit"
                                    id="form-layout-submit-btn"
                                    color="primary"
                                    className="btn-brand-theme cursor-pointer">
                                    Submit
                                </Button>
                                <button
                                    type="button"
                                    className="btn btn-light cursor-pointer"
                                    onClick={() => {
                                        goBack();
                                    }}>
                                    Cancel
                                </button>
                            </div>
                        </Card>
                    </form >
                </div >
            )}
        </>
    );
};

export default CustomDealFormLayout;
