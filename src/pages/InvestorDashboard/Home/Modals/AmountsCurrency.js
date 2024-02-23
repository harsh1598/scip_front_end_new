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

const AmountsCurrency = ({ show, onCloseClick, modelName, toggleModel }) => {
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
       Amounts in Currency
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <Form>
              <Container fluid>
                <Row>
                  <Col lg={12}>
                    <div className="table-responsive table-card mt-2">
                      <table className="table align-middle table-nowrap table-striped-columns mb-0 text-center">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">Initial Commitment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1,16,29,59,73,015 INR</td>
                          </tr>
                          <tr>
                          <td>3,00,001 INR</td>
                         </tr>
                         <tr>
                         <td>1,43,966 EUR</td>
                         </tr>
                         <tr>
                         <td>62,676 AED</td>
                         </tr>
                         <tr>
                         <td>500 USD</td>
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

export default AmountsCurrency;
