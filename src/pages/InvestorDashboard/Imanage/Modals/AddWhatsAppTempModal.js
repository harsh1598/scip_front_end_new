import React, { useState, useCallback, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Button,
  Table,
  Label,
  Input,
  Col,
} from "reactstrap";


// Images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";

const AddWhatsAppTempModal = ({ show, onCloseClick, modelName, toggleModel }) => {
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
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Add WhatsApp Template
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <Row>
              <Col lg={12} sm={12} className="mb-3">
                <Label>Title <span className="error">*</span></Label>
                <Input type="text" name="" value="" className="form-control" placeholder="Title" />
              </Col>
              <Col lg={12} sm={12} className="mb-3">
                <label>Code <i className="ri-information-fill fs-15 align-bottom"></i></label>
                <div className="ps-add"><Link to="https://app.interakt.ai/login" target="_blank"><span className="add-btns"><i class="ri-add-line align-bottom"></i> Add Template</span></Link></div>
                <Input type="text" name="" value="" className="form-control" placeholder="Code" />
              </Col>
              <Col lg={12} sm={12} className="mb-3">
                <Label>No of Variable Used In Template <span className="error">*</span></Label>
                <input type="text" name="" value="" className="form-control" placeholder="No of Variable Used In Template" />
              </Col>
              <Col lg={12} sm={12} className="mb-3">
                <Label>WhatsApp Template Content <span className="error">*</span></Label>
                <textarea type="text" name="" value="" className="form-control" placeholder="Message"></textarea>
              </Col>
              <Col lg={12}>
                <div className="table-responsive table-card mt-2 px-3">
                  <table className="table align-middle table-nowrap table-striped-columns mb-0">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Var</th>
                        <th scope="col">Var Value For</th>
                        <th scope="col">Var Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <select className="form-control">
                            <option value="1">Select</option>
                            <option value="2">Investor Name</option>
                            <option value="3">Company Name</option>
                            <option value="4">Brand Name</option>
                            <option value="5">Round of Investment</option>
                            <option value="6">Total Ask</option>
                            <option value="7">Pitch Deck Link</option>
                            <option value="8">Pitch Call Recording</option>
                            <option value="9">Co-investors</option>
                            <option value="10">Empty</option>

                          </select>
                        </td>
                        <td>
                          <input type="text" name="" value="" className="form-control" placeholder="Enter value" />
                        </td>
                        {/* <td colSpan={4}>
            <div class="alert alert-info text-center" role="alert">
            No Records Found.
           </div>
            </td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <Button type="button" className="btn btn-brand-theme" onClick={onCloseClick}>
              Submit
            </Button>
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default AddWhatsAppTempModal;
