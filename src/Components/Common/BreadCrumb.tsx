import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";

const BreadCrumb = ({ title, pageTitle, location }: any) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          {/* <div className="page-title-box d-sm-flex align-items-center justify-content-between">

                        <h4 className="mb-sm-0">{title}</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="#">{pageTitle}</Link></li>
                                <li className="breadcrumb-item active">{title}</li>
                            </ol>
                        </div>

                    </div> */}
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <div className="page-title-left">
              <ol className="breadcrumb m-0">
                {location && (
                  <>
                    <li className="breadcrumb-item">
                      <Link
                        // to={"/dashboard"}
                        to="#"
                        onClick={() => {
                          navigate(-1);
                        }}
                      >
                        <i className="ri-arrow-left-line align-bottom me-3 fs-22 "></i>
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <h4 className="mb-sm-0">{title}</h4>
                </li>
              </ol>
            </div>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link to="#">{pageTitle}</Link>
                </li>
                <li className="breadcrumb-item active">{title}</li>
              </ol>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BreadCrumb;
