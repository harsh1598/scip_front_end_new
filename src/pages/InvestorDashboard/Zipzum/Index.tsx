import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import SimpleBar from "simplebar-react";

import {
    Col,
    Container,
    Row,
    Card,
    CardBody,
    TabContent,
    TabPane,
    Nav,
    NavItem, 
    NavLink,
    CardHeader,
    ListGroup,
    ListGroupItem,
    AccordionItem,
    Accordion,
    Collapse,
} from "reactstrap";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
const Index = () => {

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
        <React.Fragment>
   <div className="page-content">
   <Container fluid>
   <BreadCrumb title="Zipzum" pageTitle="Zipzum" />
   <Row>
     <Col md={3}>
     <Card className="px-0">
       <CardHeader className="align-items-center card-header">
         <h4 className="card-title card-title mb-0">Create New
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
                 <div className="accordion-body"> 
                  Coming soon
                  </div>
               </Collapse>
             </AccordionItem>
           </div> {/*} </Accordion>*/} 
           </CardBody>
     </Card>
     </Col>
     <Col md={9}>
     <Card>
       <CardHeader>
         <h6 className="card-title mb-0">Getting Started</h6>
       </CardHeader>
       <CardBody>
         <div className="live-preview">
           <ListGroup className="list-group-fill-success">
             <ListGroupItem to="#" className="list-group-item-action fs-14">
               <i className="ri-file-copy-2-line align-middle me-2"></i>Welcome to Dinesh K!
             </ListGroupItem>
             <ListGroupItem to="#" className="list-group-item-action fs-14">
               <i className="ri-file-copy-2-line align-middle me-2"></i>Click + to add a Heading or a Sub Heading.
             </ListGroupItem>
             <ListGroupItem to="#" className="list-group-item-action fs-14">
               <i className="ri-file-copy-2-line align-middle me-2"></i>Click + to add Document/Text/Video/Image.
             </ListGroupItem>
             <ListGroupItem to="#" className="list-group-item-action fs-14">
               <i className="ri-file-copy-2-line align-middle me-2"></i>Click :: to drag any element added.
             </ListGroupItem>
             <ListGroupItem to="#" className="list-group-item-action fs-14">
               <i className="ri-file-copy-2-line align-middle me-2"></i>Click +
               <Link to="/investor_dashboard/Zipzum/CreateNew">Create New</Link> button at the sidebar to add a new page
             </ListGroupItem>
           </ListGroup>
         </div>
       </CardBody>
     </Card>
     </Col>
   </Row>
 </Container>
 </div>
</React.Fragment>

    );
};

export default Index;
