import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { ProjectName } from "../../Components/constants/layout";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import WebService from "../../utility/WebService";
import Loader from "../../Components/Loader/Loader";

const Index = () => {
    document.title = `${ProjectName} | More Menus`;
    const [data, setData] = useState<any>([])
    const [showLoader, setShowLoader] = useState(false)

    useEffect(() => {
        getlist();
    }, []);

    const getlist = () => {
        setShowLoader(true)
        let obj: any = {};
        obj.code = "more_menu";
        WebService.getAPI({
            action: `/module-access`,
            body: obj,
        })
            .then((res: any) => {
                setData(res.result)
                setShowLoader(false)
            })
            .catch((error: any) => {
                setShowLoader(false)
             });
    };

    return (
    <>
        <Loader show={showLoader}/>
        <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BreadCrumb title="More Menus" pageTitle="More Menus" />
                <Row>
                    {data &&
                        data?.sub_items?.length > 0 &&
                        data.sub_items.map((item: any) => {
                            return (<>
                                {
                                    <Col xl={3} lg={6}>
                                        <Card className="card-height-60">
                                            <CardHeader className="align-items-center">
                                                <h4 className="card-title flex-grow-1">{item.label}</h4>
                                            </CardHeader>
                                            {item.link &&
                                                <SimpleBar style={{ height: "70px" }}>
                                                    <p className="text-muted p-2">{item.link}</p>
                                                </SimpleBar>
                                            }
                                            <CardBody>
                                                <div className="table-responsive table-card">
                                                    <table className="table table-centered table-hover align-middle table-nowrap mb-0">
                                                        <tbody>
                                                            {item &&
                                                                item?.sub_items2?.length > 0 &&
                                                                item.sub_items2.map((res: any) => {
                                                                    return (<>
                                                                        {
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="d-flex">
                                                                                        <div className="flex-shrink-0 text-muted me-1">
                                                                                            <i className={res.icon}></i>
                                                                                        </div>
                                                                                        <div className="flex-grow-1">
                                                                                            <h5 className="fs-15 my-1"><Link to={res.link} className="text-reset"> {res.label}</Link></h5>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        }
                                                                    </>)
                                                                })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                }
                            </>
                            );
                        })}
                </Row>
            </Container>
        </div>
    </React.Fragment>
    </>

        // <React.Fragment>
        //     <div className="page-content">
        //         <Container fluid>
        //             <BreadCrumb title="More Menus" pageTitle="More Menus" />
        //             {data &&
        //                 data?.sub_items?.length > 0 &&
        //                 data.sub_items.map((item: any) => {
        //                     return (<>
        //                         <Row>
        //                             {
        //                                 item.code == 'create_user_groups' &&
        //                                 <Col xl={3} lg={6}>
        //                                     <Card className="card-height-60">
        //                                         <CardHeader className="align-items-center">
        //                                             <h4 className="card-title flex-grow-1">Create user groups</h4>
        //                                         </CardHeader>
        //                                         <SimpleBar style={{ height: "70px" }}>
        //                                             <p className="text-muted p-2">(User groups are created for simplifying task assignment and messaging to multiple users)</p>
        //                                         </SimpleBar>
        //                                         <CardBody>

        //                                             <div className="table-responsive table-card">
        //                                                 <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                     <tbody>
        //                                                         {item &&
        //                                                             item?.sub_items2?.length > 0 &&
        //                                                             item.sub_items2.map((res: any) => {
        //                                                                 return (<>
        //                                                                     {
        //                                                                         res.code == 'teams' &&
        //                                                                         <tr>
        //                                                                             <td>
        //                                                                                 <div className="d-flex">
        //                                                                                     <div className="flex-shrink-0 text-muted me-1">
        //                                                                                         <i className="ri-team-line  fs-24 align-middle"></i>
        //                                                                                     </div>
        //                                                                                     <div className="flex-grow-1">
        //                                                                                         <h5 className="fs-15 my-1"><Link to="/admin/Team" className="text-reset"> Team</Link></h5>
        //                                                                                     </div>
        //                                                                                 </div>
        //                                                                             </td>
        //                                                                         </tr>
        //                                                                     }
        //                                                               </>)
        //                                                             })}

        //                                                     </tbody>
        //                                                 </table>
        //                                             </div>
        //                                         </CardBody>
        //                                     </Card>
        //                                 </Col>
        //                             }
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title flex-grow-1">Customize tools</h4>
        //                                     </CardHeader>
        //                                     <SimpleBar style={{ height: "70px" }}>
        //                                         <p className="text-muted p-2">(Tools used during investment workflow)</p>
        //                                     </SimpleBar>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="bx bx-smile   fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/rubric" className="text-reset"> Rubric</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-file-edit-line   fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/notes" className="text-reset"> Notes</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title flex-grow-1">Edit system emails</h4>
        //                                     </CardHeader>
        //                                     {/* <SimpleBar style={{ height: "70px" }}>
        //                                 <p className="text-muted p-2">(Tools used during investment workflow)</p>
        //                             </SimpleBar> */}
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className=" ri-mail-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/email" className="text-reset"> Email</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className=" ri-mail-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/smsService" className="text-reset"> SMS Service</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title  flex-grow-1">Edit/Add tasks</h4>
        //                                     </CardHeader>
        //                                     <SimpleBar style={{ height: "70px" }}>
        //                                         <p className="text-muted p-2">(Add/edit tasks in investment workflow)</p>
        //                                     </SimpleBar>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className=" ri-mail-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/workflow" className="text-reset"> workflow</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className=" ri-mail-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/workflow/workflowTask" className="text-reset"> workflow Task</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title mb-0 flex-grow-1">Campaign edits</h4>
        //                                     </CardHeader>
        //                                     <SimpleBar style={{ height: "70px" }}>
        //                                         <p className="text-muted p-2">(It is possible to set limits on amounts that an investor can invest and duration of fund-raising campaigns)</p>
        //                                     </SimpleBar>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-computer-line   fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/campaign_duration" className="text-reset"> Campaign Duration</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title mb-0 flex-grow-1">Logs</h4>
        //                                     </CardHeader>
        //                                     <SimpleBar style={{ height: "70px" }}>
        //                                         <p className="text-muted p-2">(User logs)</p>
        //                                     </SimpleBar>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-login-box-line    fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/loginReport" className="text-reset">Login Report</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className=" ri-folder-download-line    fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/documentDownloadLog" className="text-reset">Document Download Log</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className=" ri-folder-download-line    fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/exportLog" className="text-reset">Export Log</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title mb-0 flex-grow-1">Manage documents</h4>
        //                                     </CardHeader>
        //                                     <SimpleBar style={{ height: "70px" }}>
        //                                         <p className="text-muted p-2">(Private space for users to manage files)</p>
        //                                     </SimpleBar>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="bx bxs-edit fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/standardDocument" className="text-reset">Standard Document</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-file-text-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/document" className="text-reset">Document</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     {/* remaining */}
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-file-text-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/documentRepository" className="text-reset">Documents Repository</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title mb-0 flex-grow-1">Others</h4>
        //                                     </CardHeader>
        //                                     <SimpleBar style={{ height: "70px" }}>
        //                                         <p className="text-muted p-2">(Private space for users to manage files)</p>
        //                                     </SimpleBar>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/instrument" className="text-reset">Instrument</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-account-circle-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/syndicateUser" className="text-reset">User</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-bank-card-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/investor/membership" className="text-reset">Membership Renewals</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-bank-card-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/right" className="text-reset">Right</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-computer-line   fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/dealStatus" className="text-reset">Deal Status</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-secure-payment-line   fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/capitalRaise" className="text-reset">Capital Raise</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-wallet-line   fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/payment/paymentType" className="text-reset">Payment Type</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-wallet-line   fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/payment/paymentLog" className="text-reset">Payment Log</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title flex-grow-1">Assign Investor role</h4>
        //                                     </CardHeader>
        //                                     <SimpleBar style={{ height: "70px" }}>
        //                                         <p className="text-muted p-2">(Investors assume the role of Deal Champion/ Lead Investor/ Board Observers/Investment Director/Board Nominee, etc)</p>
        //                                     </SimpleBar>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className=" ri-macbook-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/setting/investorDashboard" className="text-reset">Investor Dashboard</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className=" ri-macbook-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/contributionAgreement" className="text-reset">Contribution Agreement</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className=" ri-macbook-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/dealTerm" className="text-reset">Deal Term</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className=" ri-macbook-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/form_builder" className="text-reset">Manage profile</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title flex-grow-1">User files</h4>
        //                                     </CardHeader>
        //                                     <SimpleBar style={{ height: "70px" }}>
        //                                         <p className="text-muted p-2">(Private space for users to manage files)</p>
        //                                     </SimpleBar>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-folder-lock-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/userDocument/privateDocument" className="text-reset">Private Document</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-book-3-line   fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/userDocument/publicDocument" className="text-reset">Public Document</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title flex-grow-1">Diff Checker</h4>
        //                                     </CardHeader>
        //                                     <SimpleBar style={{ height: "70px" }}>
        //                                         <p className="text-muted p-2">(Tool to compare text to find the difference between two PDF/DOC files)</p>
        //                                     </SimpleBar>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-file-3-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/pdfCompare/pdfResult" className="text-reset">PDF Compare</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-file-word-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/docCompare" className="text-reset">Doc Compare</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title flex-grow-1">Report submissions</h4>
        //                                     </CardHeader>
        //                                     <SimpleBar style={{ height: "70px" }}>
        //                                         <p className="text-muted p-2">(Reports to be submitted)</p>
        //                                     </SimpleBar>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-folders-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/filing" className="text-reset">Filing</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-folders-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/filing/filingReportFormat" className="text-reset">Filing Format</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-profile-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/spreadsheet" className="text-reset">Spreadsheet</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-profile-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/customSpreadsheet" className="text-reset">Custom Spreadsheet</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title flex-grow-1">Tools</h4>
        //                                     </CardHeader>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-team-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/visualization/track" className="text-reset">  Performance Tracker</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     {/* Zipzum pending */}
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-team-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="" className="text-reset">Zipzum</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     {/* IRR pending */}
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-team-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/visualization/irr" className="text-reset">IRR</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-team-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/leegality" className="text-reset">ESign Document</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-team-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/directPayment" className="text-reset">Direct Payment</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-team-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/visualization/dcf" className="text-reset">DCF</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     {/* Cap Table pending */}
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-team-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="" className="text-reset"> Cap Table</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-team-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/visualization/analytics" className="text-reset"> Analytics</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-team-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/kanban/task" className="text-reset"> Kanban Task</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-team-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/kanban/stage" className="text-reset"> Kanban Stage</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-team-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/contactDirectory" className="text-reset">Contact Directory</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 {/* remaining */}
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title flex-grow-1">Manage Other Tools</h4>
        //                                     </CardHeader>
        //                                     <SimpleBar style={{ height: "70px" }}>
        //                                         <p className="text-muted p-2">(Manage Other Tools)</p>
        //                                     </SimpleBar>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-file-text-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="" className="text-reset">Events</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-file-text-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="" className="text-reset">Training</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-file-text-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="" className="text-reset"> Mentor</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-file-text-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="" className="text-reset">Resouces</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-file-text-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="" className="text-reset">Invoice Portal</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 {/* remaining */}
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title flex-grow-1">A2I Access Write</h4>
        //                                     </CardHeader>
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-file-text-line fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/survey/settingUserlist" className="text-reset">Syndicate User List</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                             <Col xl={3} lg={6}>
        //                                 <Card className="card-height-60">
        //                                     <CardHeader className="align-items-center">
        //                                         <h4 className="card-title mb-0 flex-grow-1">Others</h4>
        //                                     </CardHeader>
        //                                     {/* <SimpleBar style={{ height: "70px" }}>
        //                             <p className="text-muted p-2">(Private space for users to manage files)</p>
        //                         </SimpleBar> */}
        //                                     <CardBody>
        //                                         <div className="table-responsive table-card">
        //                                             <table className="table table-centered table-hover align-middle table-nowrap mb-0">
        //                                                 <tbody>
        //                                                     {/* remaining */}
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="" className="text-reset">Ecosystem</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     {/* remaining */}
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="" className="text-reset">Training</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/category" className="text-reset">Categories</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     {/* remaining */}
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="" className="text-reset">Listed Startups</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     {/* remaining */}
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="" className="text-reset">Export Newsletter</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/task" className="text-reset">Task</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/setting" className="text-reset">Setting</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/campaign/view" className="text-reset">View Campaign</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/cms" className="text-reset">CMS</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/seo" className="text-reset">SEO</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/membership" className="text-reset">Investor Membership</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/source" className="text-reset">Source Contact</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/companyStage" className="text-reset">Company Stage</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/roundOfInvestment" className="text-reset">Round Of Investment</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/rejection" className="text-reset">Campaign Rejection</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/otpSetting" className="text-reset">OTP Setting</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/dashboardStep" className="text-reset">Dashboard Step</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/application" className="text-reset">Application</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/setting/tieChapter" className="text-reset">Tie Chapter Setting</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/trainingVideo" className="text-reset">Training Videos</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/appVersion" className="text-reset">App Version</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/financialYear" className="text-reset">Financial
        //                                                                         Year Setting</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/menus" className="text-reset">Admin Menus</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/dealMenu" className="text-reset">Deal Menu</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/actionButton" className="text-reset">Action Button</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/tieChapter" className="text-reset">Tie Chapter</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/MoreMenu" className="text-reset">More Menus </Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/visualization/settings" className="text-reset">IRR Settings</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/filterMenuSetting" className="text-reset">Deal Filter Setting</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/appMenu" className="text-reset">App menu</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/campaignInfo" className="text-reset">Campaign Info</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/teaser" className="text-reset">Teaser</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/themeCustomization" className="text-reset">Theme Customization</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                     <tr>
        //                                                         <td>
        //                                                             <div className="d-flex">
        //                                                                 <div className="flex-shrink-0 text-muted me-1">
        //                                                                     <i className="ri-database-2-line  fs-24 align-middle"></i>
        //                                                                 </div>
        //                                                                 <div className="flex-grow-1">
        //                                                                     <h5 className="fs-15 my-1"><Link to="/admin/setting/roleBaseSetting" className="text-reset">Role Base Setting</Link></h5>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </tbody>
        //                                             </table>
        //                                         </div>
        //                                     </CardBody>
        //                                 </Card>
        //                             </Col>
        //                         </Row>
        //                     </>
        //                     );
        //                 })}
        //         </Container>
        //     </div>
        // </React.Fragment>
    );
};

export default Index;
