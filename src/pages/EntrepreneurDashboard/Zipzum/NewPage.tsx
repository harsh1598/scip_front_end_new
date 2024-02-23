import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import SimpleBar from "simplebar-react";
import UploadFileDoc from "./Modals/UploadFileDoc";
import EditPageModal from "./Modals/EditPageModal";
import EditDocumentPage from "./Modals/EditDocumentPage";
import UploadDocuments from "./Modals/UploadDocuments";

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
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import BreadCrumb from "../../../Components/Common/BreadCrumb";

//Images
import profileBg from "../../../assets/images/profile-bg.jpg";

const NewPage = () => {
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
   {/* <BreadCrumb title="New Page" pageTitle="Zipzum" />*/}
   <div className="profile-foreground position-relative">
        <div className="profile-wid-bg">
          <img src={profileBg} alt="" className="profile-wid-img" />
        </div>
      </div>
      <div className="mb-none profile-wrapper">
        <Row className="g-0">
          <Col>
              <h3 className="text-white mb-4">
              Zipzum
              </h3>
           </Col>
        </Row>
        </div>
   <Row>
    <Col md={3}>
   <Card className="px-0">
     <div className="mb-2 p-3" style={{background: '#f7f7f7', }}>
            <div className="search-box">
              <Input
                type="text"
                className="form-control search"
                placeholder="Quick Search" />
              <i className="ri-search-line search-icon"></i>
            </div>
          </div>
       <CardHeader className="align-items-center card-header">
         <h4 className="card-title card-title mb-0"> Create New
           <Link to="/entrepreneur_dashboard/Zipzum/CreateNew" className="float-end">
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
     <Col md={3}>
     <Card>
     <ListGroup flush>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        <i className="ri-arrow-right-s-line align-middle float-end"></i> Heading 1 
                        </ListGroupItem>
                        <ListGroupItem tag="button" to="#" className="list-group-item-action fs-14 text-muted">
                        <i className="ri-arrow-right-s-line align-middle float-end"></i> Heading 2
                        </ListGroupItem>
                     
                    </ListGroup>
     </Card>
     </Col>
     <Col md={6}>
     <Card>
       <CardHeader>
         <h6 className="card-title mb-0">New Page 22 
         <Link to="#"><i className="ri-pencil-line align-bottom text-dark float-end" onClick={(e) => toggleModel("EditPageModal")}></i></Link>
         </h6>
       </CardHeader>
       <CardBody>
         <div className="live-preview">
           <ListGroup flush>
            <h6 className="mb-0">Heading 1</h6>
             <ListGroupItem to="#" className="list-group-item-action fs-14 px-0">
               <i className="ri-file-copy-2-line align-middle me-2"></i> Upload a document
               <Link to="#" onClick={(e) => toggleModel("UploadFileDoc")} className="text-dark float-end me-4">
               <i className="ri-add-line fs-15"></i>
               </Link>
               <UncontrolledDropdown className="card-header-dropdown" direction='start' style={{ position: 'absolute', top: '10px', right: '-5px', }}>
                                    <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                        <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical"></i></span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem onClick={(e) =>toggleModel("EditDocumentPage")}><i className="ri-edit-box-line align-middle me-1"></i> Edit Document Name</DropdownItem>
                                        <DropdownItem onClick={(e) =>toggleModel("UploadDocuments")}><i className="ri-download-2-line align-middle me-1"></i> Upload</DropdownItem>
                                        <DropdownItem><i className="ri-delete-bin-line align-middle me-1"></i> Delete</DropdownItem>
                                        <DropdownItem><i className="ri-file-copy-line align-middle me-1"></i> Duplicate</DropdownItem>
                                        <DropdownItem><i className="ri-add-line align-middle me-1"></i> Add Blank Space</DropdownItem>
                                        <DropdownItem><i className="ri-history-line align-middle me-1"></i> History</DropdownItem>
                                        <DropdownItem>
                                        <div>Last edit by Dinesh K</div>
                                <div>On 20/10/2023 at 04:12 pm</div>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
              
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

<EditPageModal
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditPageModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />

<EditDocumentPage
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "EditDocumentPage" ? true : false}
        onCloseClick={() => setModelName("")}
      />

<UploadDocuments
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "UploadDocuments" ? true : false}
        onCloseClick={() => setModelName("")}
      />
      

</React.Fragment>
</>
    );
};

export default NewPage;
