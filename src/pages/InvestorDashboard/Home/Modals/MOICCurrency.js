import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  Label,
  Button,
  Card,
  Container,
} from "reactstrap";

import { Link } from "react-router-dom";
import Select from "react-select";

const MOICCurrency = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);
  const togglePopup = useCallback(() => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [isShow]);

  useEffect(() => {
    setIsShow(false);
  }, [modelName == "CreateSchedule"]);

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className=""
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Investment/Current Valuation/MOIC in Currency
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <Form>
              <Container fluid>
                <Row>
                  <Col lg={12}>
                    <h5 className="mb-3">Investment in Currency</h5>
                    <div className="table-responsive table-card mt-2">
                      <table className="table align-middle table-nowrap table-striped-columns mb-0">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">Currency</th>
                            <th scope="col">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>INR</td>
                            <td>33,15,46,222</td>
                          </tr>
                          <tr>
                            <td>USD</td>
                            <td>7,59,900</td>
                          </tr>
                          <tr>
                            <td>EUR</td>
                            <td>50,011</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col lg={12}>
                    <h5 className="mb-3">Current Valuation in Currency</h5>
                    <div className="table-responsive table-card mt-2">
                      <table className="table align-middle table-nowrap table-striped-columns mb-0">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">Currency</th>
                            <th scope="col">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>INR</td>
                            <td>56,96,079</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col lg={12}>
                    <h5 className="mb-3">MOIC in Currency</h5>
                    <div className="table-responsive table-card mt-2">
                      <table className="table align-middle table-nowrap table-striped-columns mb-0">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">Currency</th>
                            <th scope="col">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>INR</td>
                            <td>3,13,34,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default MOICCurrency;
