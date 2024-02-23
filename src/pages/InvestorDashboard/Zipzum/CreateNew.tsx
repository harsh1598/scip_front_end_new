import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import SimpleBar from "simplebar-react";
import UploadFileDoc from "./Modals/UploadFileDoc";
import ChooseLogo from "./Modals/ChooseLogo";
import ChooseBanner from "./Modals/ChooseBanner";
import SearchFilter from "./Modals/SearchFilter";

import {
    Col,
    Container,
    Row,
    Card,
    CardBody,
    Input,
    CardHeader,
    ListGroup,
    ListGroupItem,
    AccordionItem,
    Accordion,
    Collapse,
} from "reactstrap";

import BreadCrumb from "../../../Components/Common/BreadCrumb";

//Images
import profileBg from "../../../assets/images/profile-bg.jpg";

const CreateNew = () => {
const [modelName, setModelName] = useState("");
const toggleModel = (name: any) => {
    setModelName(name);
  };

   // Default Accordion
   const [col1, setcol1] = useState(true);
   const [col2, setcol2] = useState(false);
   const [col3, setcol3] = useState(false);

   const t_col1 = () => {
       setcol1(!col1);
       setcol2(false);
       setcol3(false);
   };

   const t_col2 = () => {
       setcol2(!col2);
       setcol1(false);
       setcol3(false);
   };

   const t_col3 = () => {
       setcol3(!col3);
       setcol1(false);
       setcol2(false);
   };

return (
<>
 <React.Fragment>
   <div className="page-content">
   <Container fluid>
   {/* <BreadCrumb title="Create New" pageTitle="Zipzum" />*/}
   <div className="profile-foreground position-relative">
        <div className="profile-wid-bg">
          <img src={profileBg} alt="" className="profile-wid-img" />
        </div>
      </div>
      {/*<div className="mb-none profile-wrapper">
        <Row className="g-0">
          <Col>
              <h3 className="text-white mb-4">
              Create New
              </h3>
           </Col>
        </Row>
</div> */}
   <Row>
            <Col lg={12}>
              <Card id="leadsList">
                <CardHeader className="border-0">
                  <Row className="g-0 align-items-center">
                    <Col sm={3}>
                    <h5 className="mb-0">New Page 22</h5>
                    </Col>
                    <div className="col-sm-auto ms-auto">
                      <div className="d-flex hstack gap-2 flex-wrap">
                      
                        <button
                          type="button"
                          className="btn btn-soft-info"
                          id="ChooseLogo"
                          onClick={() => toggleModel("ChooseLogo")}
                        >
                          <i className="ri-add-box-line align-bottom"></i>
                        </button>
                        <button type="button" className="btn btn-soft-info"  id="ChooseBanner"
                          onClick={() => toggleModel("ChooseBanner")}>
                          <i className="ri-edit-box-line align-bottom"></i>
                        </button>
                        <button type="button" className="btn btn-soft-info">
                          <i className="ri-eye-off-line align-bottom"></i>
                        </button>
                      </div>
                    </div>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
   <Row>
    <Col md={3}>
   <Card className="px-0">
     <div className="mb-2 p-3" style={{background: '#f7f7f7', }}>
            <div className="search-box"  onClick={(e) => toggleModel("SearchFilter")}>
              <Input 
                type="text"
                className="form-control search"
                placeholder="Quick Search" />
              <i className="ri-search-line search-icon"></i>
            </div>
          </div>
       <CardHeader className="align-items-center card-header">
         <h4 className="card-title card-title mb-0"> Create New
           <Link to="/investor_dashboard/Zipzum/CreateNew" className="float-end">
           <i className="ri-add-line fs-15"></i>
           </Link>
         </h4>
       </CardHeader>
       <CardBody className="p-0"> {/*} <Accordion id="default-accordion-example">*/} <div className="accordion">
             <AccordionItem>
               <h2 className="accordion-header" id="headingOne">
                 <button className={classnames("accordion-button", { collapsed: !col1 })} type="button" onClick={t_col1} style={{ cursor: "pointer" }}> My Page </button>
               </h2>
               <Collapse isOpen={col1} className="accordion-collapse" id="collapseOne">
                 <div className="accordion-body p-0"> 
                 <SimpleBar style={{ height: "360px" }}>
                    <ListGroup flush>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        New Page… <i className="ri-file-copy-line align-middle float-end"></i>
                        </ListGroupItem>
                    </ListGroup>
                    </SimpleBar>
                </div>
               </Collapse>
             </AccordionItem>
             <AccordionItem>
               <h2 className="accordion-header" id="headingTwo">
                 <button className={classnames("accordion-button", { collapsed: !col2 })} type="button" onClick={t_col2} style={{ cursor: "pointer" }}> Shared Page </button>
               </h2>
               <Collapse isOpen={col2} className="accordion-collapse">
                 <div className="accordion-body"> Coming soon </div>
               </Collapse>
             </AccordionItem>
           </div> {/*} </Accordion>*/} 
           </CardBody>
     </Card>
     </Col>
     <Col md={9}>
     <Card>
       <CardHeader>
         <h6 className="card-title mb-0">New Page 22</h6>
       </CardHeader>
       <CardBody>
         <div className="live-preview">
           <ListGroup className="list-group-fill-success">
             <ListGroupItem to="#" className="list-group-item-action fs-14">
               <i className="ri-file-copy-2-line align-middle me-2"></i> Add Heading
               <Link to="#"  onClick={(e) => toggleModel("UploadFileDoc")} className="text-dark float-end">
               <i className="ri-add-line fs-15"></i>
               </Link>
             </ListGroupItem>
             <ListGroupItem to="#" className="list-group-item-action fs-14">
               <i className="ri-file-copy-2-line align-middle me-2"></i> Add Sub Heading
               <Link to="#" className="text-dark float-end">
               <i className="ri-add-line fs-15"></i>
               </Link>
             </ListGroupItem>
             <ListGroupItem to="#" className="list-group-item-action fs-14">
               <i className="ri-file-copy-2-line align-middle me-2"></i> Add Text
               <Link to="#" className="text-dark float-end">
               <i className="ri-add-line fs-15"></i>
               </Link>
             </ListGroupItem>
            
           </ListGroup>
         </div>
       </CardBody>
     </Card>
     </Col>
   </Row>
 </Container>
 </div>

 <UploadFileDoc
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "UploadFileDoc" ? true : false}
        onCloseClick={() => setModelName("")}
      />

       <ChooseLogo
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "ChooseLogo" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <ChooseBanner
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "ChooseBanner" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <SearchFilter
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "SearchFilter" ? true : false}
        onCloseClick={() => setModelName("")}
      />

</React.Fragment>
</>
    );
};

export default CreateNew;
