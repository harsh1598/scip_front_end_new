import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Enterprenuer = () => {
  SwiperCore.use([Autoplay]);

  const data = [
    {
      documentcode: "DOC001",
      documentname: "NDA with TCA",
      updatedate: "13/07/2020",
      downloadfile: "(Download The Existing File)",
      uploadfile: "(Upload New File)",
    },
    {
      documentcode: "DOC002",
      documentname: "Management Contract",
      updatedate: "13/07/2020",
      downloadfile: "(Download The Existing File)",
      uploadfile: "(Upload New File)",
    },
    {
      documentcode: "DOC003",
      documentname: "Non Disclosure Agreement for Investor",
      updatedate: "13/07/2020",
      downloadfile: "(Download The Existing File)",
      uploadfile: "(Upload New File)",
    },
    {
      documentcode: "DOC004",
      documentname: "Participation and Shareholders Agreement",
      updatedate: "13/07/2020",
      downloadfile: "(Download The Existing File)",
      uploadfile: "(Upload New File)",
    },
    {
      documentcode: "DOC005",
      documentname: "Investment Memorandum",
      updatedate: "13/07/2020",
      downloadfile: "(Download The Existing File)",
      uploadfile: "(Upload New File)",
    },
    {
      documentcode: "DOC006",
      documentname: "Pitch Document",
      updatedate: "13/07/2020",
      downloadfile: "(Download The Existing File)",
      uploadfile: "(Upload New File)",
    },
    {
      documentcode: "DOC007",
      documentname: "Investor Presentation",
      updatedate: "13/07/2020",
      downloadfile: "(Download The Existing File)",
      uploadfile: "(Upload New File)",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Documents" pageTitle="Enterprenuer" />

          <Row>
            <Col lg={12}>
              <Card id="leadsList">
                <CardHeader className="border-0">
                  <div className="table-responsive table-card mt-3">
                    <table className="table align-middle table-nowrap table-striped-columns mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">Document Code</th>
                          <th scope="col">Document Name</th>
                          <th scope="col">Update Date</th>
                          <th scope="col">&nbsp;</th>
                          <th scope="col">&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.length &&
                          data.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{item.documentcode}</td>
                                <td>{item.documentname}</td>
                                <td>{item.updatedate}</td>
                                <td>
                                  <Link to="#">{item.downloadfile}</Link>
                                </td>
                                <td>
                                  <Link to="#">{item.uploadfile}</Link>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Enterprenuer;
