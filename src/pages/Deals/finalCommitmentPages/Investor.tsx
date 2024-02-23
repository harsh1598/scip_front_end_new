import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from "reactstrap";

interface propdata {
  show:any;
  onCloseClick:any
}

const Investor = (props:propdata) => {
  const data = [
    {
      id: 1,
      TypeOfIRR: "Portfolio NIRR",
      Investment: "90,000",
      Disamount: "6,080,889,840",
      IRRPort: "0",
      MultipalPort: "67565,44267",
    },
    {
      id: 2,
      TypeOfIRR: "Realised NIRR",
      Investment: "90,000",
      Disamount: "00",
      IRRPort: "0",
      MultipalPort: "0",
    },
    {
      id: 3,
      TypeOfIRR: "Unrealised NIRR",
      Investment: "00",
      Disamount: "6,080,889,840",
      IRRPort: "0",
      MultipalPort: "0",
    },
  ];

  return (
    <>
      <Row className="mb-2">
        <Col lg={12} sm={12}>
          <Card className="mb-0 g-2">
            <CardHeader className="align-items-center card-header">
              <h4 className="card-title card-title mb-0 float-start">
                Investor
                <small className="fs-12">Portfolio Investor</small>
              </h4>
              <div className="float-end">
                <Link to="#" className="text-muted fs-16">
                  <i className="ri-drag-move-2-fill"></i>
                </Link>
              </div>
            </CardHeader>
            <CardBody>
              <div className="table-responsive table-card">
                <table className="table align-middle table-nowrap table-striped-columns mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Sr. No.</th>
                      <th scope="col">Type Of IRR</th>
                      <th scope="col">Investment</th>
                      <th scope="col">Distribution Amount</th>
                      <th scope="col">IRR Portfolio</th>
                      <th scope="col">Multipal Portfolio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.length &&
                      data.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.TypeOfIRR}</td>
                            <td>{item.Investment}</td>
                            <td>{item.Disamount}</td>
                            <td>{item.IRRPort}</td>
                            <td>{item.MultipalPort}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default memo(Investor);
