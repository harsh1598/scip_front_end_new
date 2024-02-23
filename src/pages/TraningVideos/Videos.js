import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row, Modal, ModalBody, ModalHeader } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import { Link } from 'react-router-dom';

import { gallery } from '../../common/data';
import VideoDemo from "../../assets/videos/demo-video.mp4"

const Videos = () => {

  const [displayCategory, setCategory] = useState("All");
  const [modal_detail, setmodal_detail] = useState(false);
  function tog_detail() {
    setmodal_detail(!modal_detail);
  }

  document.title = "Traing Video | SCIP";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Videos" pageTitle="Videos" />
          <Row>
            <Col lg={12}>
              <div className="">
                <CardBody>
                  <Row>
                    <Col lg={12}>
                      <div className="text-center">
                        <ul className="list-inline categories-filter animation-nav" id="filter">
                          <li className="list-inline-item">
                            <Link to="#" onClick={() => setCategory("All")} className={displayCategory === "All" ? "categories active" : "categories"} data-filter="*">All</Link></li>
                          <li className="list-inline-item"><Link to="#" onClick={() => setCategory("WebApp")} className={displayCategory === "WebApp" ? "categories active" : "categories"} data-filter=".project">Web</Link></li>
                          <li className="list-inline-item"><Link to="#" onClick={() => setCategory("MoApp")} className={displayCategory === "MoApp" ? "categories active" : "categories"} data-filter=".designing">App</Link></li>
                        </ul>
                      </div>

                      <Row className="gallery-wrapper">
                        {(
                          gallery.filter(({ category }) => displayCategory === category || displayCategory === "All"))
                          .map(({ img, title, description, video }, key) => (
                          <Col xxl={3} xl={4} sm={6} className="element-item project designing development" key={key}>
                            <Card className="gallery-box">
                            <p className="small fw-bold title">{title}</p>
                              <div className="gallery-container">
                                <a href="javascrit:void(0)" className="image-popup" onClick={() => tog_detail()} >
                                  {/* <img className="gallery-img img-fluid mx-auto" src={video} alt="" /> */}
                                  <video height="150" controls="false" className='gallery-img img-fluid mx-auto'>
                                    <source src={video} type="video/mp4" />
                                  </video>
                                  <i className='ri ri-play-circle-line play-icon'></i>
                                  <div className="gallery-overlay"></div>
                                </a>
                              </div>

                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <p className="small">{description}</p>

                                </div>
                              </div>
                            </Card>
                          </Col>
                        ))}

                      </Row>
                      <div className="text-center my-2">
                        <Link to="#" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load More </Link>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </div>
            </Col>
          </Row>


        </Container>

      </div>
      {/* detail moddal  */}
      <Modal
        size="xl"
        isOpen={modal_detail}
        toggle={() => {
          tog_detail();
        }}
        centered
      >
        <ModalHeader className="">
          <span className="modal-title">Video Name/ Document Name</span>
          <a href='javascript:void(0)' onClick={() => setmodal_detail(false)} className=' position-absolute text-dark' style={{ right: "22px", top: "12px" }}> <i className='ri ri-close-line' /> </a>
        </ModalHeader>

        <ModalBody className="text-center">
          <div className="">
            <video height="500" width="100%" controls className='gallery-img img-fluid mx-auto'>
              <source src={VideoDemo} type="video/mp4" width="100%" />
            </video>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Videos;