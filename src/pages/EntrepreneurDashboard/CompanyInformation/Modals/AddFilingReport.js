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
  Input,
} from "reactstrap";

const UploadDocuments = ({ show, onCloseClick, modelName, toggleModel }) => {
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

  const [selectedFiles, setselectedFiles] = useState([]);
  const [files, setFiles] = useState([]);

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Add Filing Report
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Filing Report Title
                  </Label>
                  <Input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Filing Report Title"
                    value=""
                  />
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Filing Report Type</Label>
                  <select className="form-select mb-3">
                    <option value="1" selected="true">
                      Select Report Type
                    </option>
                    <option value="2">Document</option>
                    <option value="3">Progress Highlight</option>
                  </select>
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">
                    Filing Report Duration
                  </Label>
                  <select className="form-select mb-3">
                    <option value="1" selected="true">
                      Select Duration
                    </option>
                    <option value="2">Monthly</option>
                    <option value="3">Quarterly</option>
                    <option value="4">Yearly</option>
                  </select>
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Financial Year</Label>
                  <select className="form-select mb-3">
                    <option value="1" selected="true">
                      Select Year
                    </option>
                    <option value="2023">2023 - 2024</option>
                    <option value="2022">2022 - 2023</option>
                    <option value="2021">2021 - 2022</option>
                    <option value="2020">2020 - 2021</option>
                    <option value="2019">2019 - 2020</option>
                    <option value="2018">2018 - 2019</option>
                    <option value="2017">2017 - 2018</option>
                    <option value="2016">2016 - 2017</option>
                    <option value="2015">2015 - 2016</option>
                    <option value="2014">2014 - 2015</option>
                    <option value="2013">2013 - 2014</option>
                    <option value="2012">2012 - 2013</option>
                    <option value="2011">2011 - 2012</option>
                    <option value="2010">2010 - 2011</option>
                    <option value="2009">2009 - 2010</option>
                    <option value="2008">2008 - 2009</option>
                    <option value="2007">2007 - 2008</option>
                    <option value="2006">2006 - 2007</option>
                    <option value="2005">2005 - 2006</option>
                    <option value="2004">2004 - 2005</option>
                    <option value="2003">2003 - 2004</option>
                  </select>
                </Col>
                <Col lg={12}>
                  <Label className="form-check-label">Upload option</Label>
                  <select className="form-select mb-3">
                    <option value="1" selected="true">
                      Select option
                    </option>
                    <option value="2">File</option>
                    <option value="3">URL</option>
                  </select>
                </Col>
              </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Submit
            </button>
            <Button onClick={onCloseClick} className="btn btn-light">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default UploadDocuments;
