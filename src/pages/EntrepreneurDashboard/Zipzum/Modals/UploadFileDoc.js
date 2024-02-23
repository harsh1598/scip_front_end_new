import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const UploadFileDoc = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);
  
useEffect(() => {
    setIsShow(false);
  }, [modelName == "CreateSchedule"]);

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        &nbsp;
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="p-0 overflow-hidden">
          <div className="px-4">
            <Form>
            <ListGroup className="border-dashed" flush>
            <ListGroupItem className="ps-0">
                <Row className="align-items-center g-3">
                    <Col className="col-auto">
                        <div className="avatar-sm px-1 py-2 h-auto bg-light rounded-3">
                            <div className="text-center">
                                <h5 className="mb-0">Aa</h5>
                            </div>
                        </div>
                    </Col>
                    <Col className="col">
                        <div className="text-reset fs-14 mb-0">Heading 1</div>
                        <h5 className="text-muted mt-0 mb-1 fs-13">Big section heading </h5>
                    </Col>
                </Row>
               </ListGroupItem>
               <ListGroupItem className="ps-0">
               <Row className="align-items-center g-3">
                   <Col className="col-auto">
                       <div className="avatar-sm px-1 py-2 h-auto bg-light rounded-3">
                           <div className="text-center">
                               <h5 className="mb-0">Aa</h5>
                           </div>
                       </div>
                   </Col>
                   <Col className="col">
                       <div className="text-reset fs-14 mb-0">Sub Heading 1</div>
                       <h5 className="text-muted mt-0 mb-1 fs-13">Big section sub heading </h5>
                   </Col>
               </Row>
              </ListGroupItem>
              <ListGroupItem className="ps-0">
              <Row className="align-items-center g-3">
                  <Col className="col-auto">
                      <div className="avatar-sm px-1 py-2 h-auto bg-light rounded-3">
                          <div className="text-center">
                              <h5 className="mb-0">Aa</h5>
                          </div>
                      </div>
                  </Col>
                  <Col className="col">
                      <div className="text-reset fs-14 mb-0">Heading 2</div>
                      <h5 className="text-muted mt-0 mb-1 fs-13">Medium section sub heading</h5>
                  </Col>
              </Row>
             </ListGroupItem>
             <ListGroupItem className="ps-0">
              <Row className="align-items-center g-3">
                  <Col className="col-auto">
                      <div className="avatar-sm px-1 py-2 h-auto bg-light rounded-3">
                          <div className="text-center">
                              <h5 className="mb-0">Aa</h5>
                          </div>
                      </div>
                  </Col>
                  <Col className="col">
                      <div className="text-reset fs-14 mb-0">Sub Heading 2</div>
                      <h5 className="text-muted mt-0 mb-1 fs-13">Medium section sub heading</h5>
                  </Col>
              </Row>
             </ListGroupItem>
             <ListGroupItem className="ps-0">
             <Row className="align-items-center g-3">
                 <Col className="col-auto">
                     <div className="avatar-sm px-1 py-2 h-auto bg-light rounded-3">
                         <div className="text-center">
                             <h5 className="mb-0">Aa</h5>
                         </div>
                     </div>
                 </Col>
                 <Col className="col">
                     <div className="text-reset fs-14 mb-0">Heading 3</div>
                     <h5 className="text-muted mt-0 mb-1 fs-13">Small section sub heading</h5>
                 </Col>
             </Row>
            </ListGroupItem>
            <ListGroupItem className="ps-0">
            <Row className="align-items-center g-3">
                <Col className="col-auto">
                    <div className="avatar-sm px-1 py-2 h-auto bg-light rounded-3">
                        <div className="text-center">
                            <h5 className="mb-0">Aa</h5>
                        </div>
                    </div>
                </Col>
                <Col className="col">
                    <div className="text-reset fs-14 mb-0">Sub Heading 3</div>
                    <h5 className="text-muted mt-0 mb-1 fs-13">Small section sub heading</h5>
                </Col>
            </Row>
           </ListGroupItem>
             <ListGroupItem className="ps-0">
              <Row className="align-items-center g-3">
                  <Col className="col-auto">
                      <div className="avatar-sm px-1 py-2 h-auto bg-light rounded-3">
                          <div className="text-center">
                              <h5 className="mb-0">Aa</h5>
                          </div>
                      </div>
                  </Col>
                  <Col className="col">
                      <div className="text-reset fs-14 mb-0">Add Text</div>
                      <h5 className="text-muted mt-0 mb-1 fs-13">Just start writing with plain text</h5>
                  </Col>
              </Row>
             </ListGroupItem>
             <ListGroupItem className="ps-0">
             <Row className="align-items-center g-3">
                 <Col className="col-auto">
                     <div className="avatar-sm px-1 py-2 h-auto bg-light rounded-3">
                         <div className="text-center">
                             <h5 className="mb-0"><i className="ri-newspaper-line align-bottom"></i></h5>
                         </div>
                     </div>
                 </Col>
                 <Col className="col">
                     <div className="text-reset fs-14 mb-0">Upload a document</div>
                     <h5 className="text-muted mt-0 mb-1 fs-13">Upload or embeded with a link</h5>
                 </Col>
             </Row>
            </ListGroupItem>
            <ListGroupItem className="ps-0">
            <Row className="align-items-center g-3">
                <Col className="col-auto">
                    <div className="avatar-sm px-1 py-2 h-auto bg-light rounded-3">
                        <div className="text-center">
                            <h5 className="mb-0"><i className="ri-image-add-line align-bottom"></i></h5>
                        </div>
                    </div>
                </Col>
                <Col className="col">
                    <div className="text-reset fs-14 mb-0">Add an image</div>
                    <h5 className="text-muted mt-0 mb-1 fs-13">Upload or embeded with a link</h5>
                </Col>
            </Row>
           </ListGroupItem>
           <ListGroupItem className="ps-0">
           <Row className="align-items-center g-3">
               <Col className="col-auto">
                   <div className="avatar-sm px-1 py-2 h-auto bg-light rounded-3">
                       <div className="text-center">
                           <h5 className="mb-0"><i className="ri-video-chat-line align-bottom"></i></h5>
                       </div>
                   </div>
               </Col>
               <Col className="col">
                   <div className="text-reset fs-14 mb-0">Video</div>
                   <h5 className="text-muted mt-0 mb-1 fs-13">Upload or embeded with a link</h5>
               </Col>
           </Row>
          </ListGroupItem>
              </ListGroup>
            </Form>
          </div>
        </OffcanvasBody>
        
      </form>
    </Offcanvas>
  );
};

export default UploadFileDoc;
