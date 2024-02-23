import React, { useState } from "react";
import { Col, Row, Container, Input, Label } from "reactstrap";

//Import Flatepicker
import Flatpickr from "react-flatpickr";

const StartOrganizationTbl = () => {
  const [modelName, setModelName] = useState("");

  const toggleModel = (name) => {
    setModelName(name);
  };

  return (
    <React.Fragment>
      <Container fluid className="px-0">
        <Row className="profile-tabs">
          <Col lg={12} className="mb-3">
            <p>
              <small>
                After you complete each section, you will see three buttons -
                Save, Preview, and Next. Using the button Preview, you can see
                how investors will see your application. Save your application
                before Preview. You can edit the application after you preview
                it.
              </small>
            </p>
            <p>
              <small>
                You can edit the application at the end of each section, and you
                can edit the entire application again after you complete the
                fourth section before submitting the entire application.
              </small>
            </p>
            <p>
              <small>
                Even after submission, you will be able to edit your application
                information after the Network gives you access to your
                dashboard.
              </small>
            </p>
          </Col>

          <Col lg={12} className="mb-3">
            <h5>Profile</h5>
            <Label className="form-check-label">
              Name of your company (as registered). If not registered, name
              identified. <span className="error">*</span>
            </Label>
            <Input
              className="form-control"
              type="input"
              value=""
              id=""
              placeholder="GPT Pvt Ltd"
            />
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              Brand name of your product or service. If unbranded, the brand
              name selected. <span className="error">*</span>
            </Label>
            <Input
              className="form-control"
              type="input"
              value=""
              id=""
              placeholder="Brand name of your product or service. If unbranded, the brand name selected."
            />
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              Where is your company operating from?{" "}
              <span className="error">*</span>
            </Label>
            <Input
              className="form-control"
              type="input"
              value=""
              id=""
              placeholder="Gurgaon"
            />
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              Select the industry to which your startup belongs.{" "}
              <span className="error">*</span>
            </Label>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
            >
              <option>Select Option</option>
              <option value="1"> Accommodation and Food Services </option>
              <option value="2"> Administrative and support service </option>
              <option value="3">
                {" "}
                Agriculture, Forestry, Fishing &amp; Hunting{" "}
              </option>
              <option value="4"> Arts, Entertainment and Recreation </option>
              <option value="5"> Biotechnology </option>
              <option value="6"> Construction </option>
              <option value="7"> Education </option>
              <option value="8">
               
                Electricity, gas, steam and air conditioning supply{" "}
              </option>
              <option value="9"> Finance and Insurance </option>
              <option value="10"> Health Care and Social Assistance </option>
              <option value="11"> Information and Communication </option>
              <option value="12"> Manufacturing </option>
              <option value="13"> Other Services </option>
              <option value="14">
                {" "}
                Professional, Scientific and Technical Services{" "}
              </option>
              <option value="15">
                {" "}
                Public administration and defence; compulsory social security{" "}
              </option>
              <option value="16"> Real Estate </option>
              <option value="17"> Transportation and Storage </option>
              <option value="18">
                {" "}
                Water supply, sewerage, waste management, remediation activities{" "}
              </option>
              <option value="19">
                {" "}
                Wholesale and Retail Trade, repair of motor vehicles and
                motorcycles{" "}
              </option>
            </select>
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              What sectors are your business in? (Choose up-to 3 max.){" "}
              <span className="error">*</span>
            </Label>
            <Row>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck1"
                  />
                  <Label className="form-check-label" htmlFor="formCheck1">
                    Advertising
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    AI
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    Analytics
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    AR/VR
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    BioTech{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Blockchain{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Cars/ autonomous vehicles{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Chemicals{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Clean tech/ environment{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Cloud Infrastructure{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Consumer health & fitness{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Consumer products{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Cosmetics{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Cryptocurrency{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Data services{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Developer tolls{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Distributed workforce{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    E-commerce{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Education{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Energy tech{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Enterprise{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Entertainment & sports{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Entertainment & sports{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Fintech{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Food and beverage{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Games{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Gaming/eSports{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Govtech{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Hardware{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Health & hospital services{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Health IT{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Human capital{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Impact{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Insurance{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    IoT{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Local commerce{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Lodging/hospitality{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Logistics{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Manufacturing{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Marketing automation{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Marketplace{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Material science{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Media devices{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Media/content{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Messaging{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Network infrastructure{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Parenting/families{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Payments{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Pharmaceuticals{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Real estate/proptech{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Retail{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Robotics{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    SaaS{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Sales and CRM{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Security{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Semiconductors{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    SMB software{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Semiconductors{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Social mobile{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Social commerce{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Travel{" "}
                  </Label>
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="form-check">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="formCheck2"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="formCheck2">
                    {" "}
                    Space{" "}
                  </Label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              How would you describe your business category.
              <span className="error">*</span>
            </Label>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
            >
              <option value="" selected="">
                {" "}
                Select option{" "}
              </option>
              <option value="1"> B2B </option>
              <option value="2"> B2B2C </option>
              <option value="3" selected="">
                {" "}
                B2C{" "}
              </option>
              <option value="4"> Other </option>
            </select>
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              What is your business? Choose one of the below.
              <span className="error">*</span>
            </Label>
            <br />
            <span className="mr-3">
              <Input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <Label className="form-check-label" htmlFor="flexRadioDefault1">
                &nbsp; Product
              </Label>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="">
              <Input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked
              />
              <Label className="form-check-label" htmlFor="flexRadioDefault2">
                &nbsp; Service
              </Label>
            </span>
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              What is the current stage of your company?
              <span className="error">*</span>
            </Label>
            <br />
            <Row>
              <Col lg={6} md={6}>
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <Label className="form-check-label" htmlFor="flexRadioDefault1">
                  &nbsp; Beta <br />{" "}
                  <small>
                    A working model – that customers can test/use exists
                  </small>
                </Label>
              </Col>
              <Col lg={6} md={6}>
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <Label className="form-check-label" htmlFor="flexRadioDefault2">
                  &nbsp; Concept <br />
                  <small>
                    An idea transformed into proposition that answers questions
                    the ‘what, the ‘why, and how.
                  </small>
                </Label>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6}>
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <Label className="form-check-label" htmlFor="flexRadioDefault1">
                  &nbsp; Idea <br /> <small>An inkling of potential</small>
                </Label>
              </Col>
              <Col lg={6} md={6}>
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <Label className="form-check-label" htmlFor="flexRadioDefault2">
                  &nbsp; Pre-Revenue <br />
                  <small>A product exists, is yet to Be used.</small>
                </Label>
              </Col>
              <Col lg={6} md={6}>
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <Label className="form-check-label" htmlFor="flexRadioDefault2">
                  &nbsp; Revenue
                </Label>
              </Col>
            </Row>
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              What is your business founded date.
              <span className="error">*</span>
            </Label>
            <div>
              <small>Format accepted : DD-MM-YYYY format. eg- 25-11-2012</small>
            </div>
            <Flatpickr
            className="form-control date-picker-icon"
            options={{
              dateFormat: "d M, Y"
            }}
          />
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              Select the round of financing.
              <span className="error">*</span>
            </Label>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
            >
              <option value="" selected="">
                {" "}
                Select option{" "}
              </option>
              <option value="1"> Idea </option>
              <option value="2"> Seed </option>
              <option value="3" selected="">
                {" "}
                Angel{" "}
              </option>
              <option value="4"> Series A </option>
              <option value="4"> Transper Of shares </option>
            </select>
          </Col>

          <Col lg={12} className="mb-3 mt-4">
            <h5>Social</h5>
            <Label className="form-check-label">Your company website</Label>
            <Input
              className="form-control"
              type="input"
              value=""
              id=""
              placeholder="Acceptable format: http://www.google.com or https://www.google.com"
            />
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">
              Your company Facebook link
            </Label>
            <Input
              className="form-control"
              type="input"
              value=""
              id=""
              placeholder="Acceptable format: http://www.google.com or https://www.google.com"
            />
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">Instagram Link</Label>
            <Input
              className="form-control"
              type="input"
              value=""
              id=""
              placeholder="Acceptable format: http://www.google.com or https://www.google.com"
            />
          </Col>
          <Col lg={12} className="mb-3">
            <Label className="form-check-label">Twitter Link</Label>
            <Input
              className="form-control"
              type="input"
              value=""
              id=""
              placeholder="Acceptable format: http://www.google.com or https://www.google.com"
            />
          </Col>

          {/* Next step */}
          <div style={{display: "none"}}>
            <Col lg={12} className="mb-3">
              <h5>Team</h5>
              <Label className="form-check-label">
                Your role in the startup. <span className="error">*</span>
              </Label>
              <Input
                className="form-control"
                type="input"
                value=""
                id=""
                placeholder="Your role"
              />
            </Col>
            <Col lg={12} className="mb-3">
              <Label className="form-check-label">
                Your LinkedIn link <span className="error">*</span>
              </Label>
              <Input
                className="form-control"
                type="input"
                value=""
                id=""
                placeholder="LinkedIn URL"
              />
            </Col>
            <Col lg={12} className="mb-3">
              <Label className="form-check-label">
                Email <span className="error">*</span>
              </Label>
              <Input
                className="form-control"
                type="email"
                value=""
                id=""
                placeholder="Email"
              />
            </Col>
            <Col lg={12} className="mb-3">
              <Label className="form-check-label">
                Phone <span className="error">*</span>
              </Label>
              <Input
                className="form-control"
                type="phone"
                value=""
                id=""
                placeholder="Phone number"
              />
            </Col>
            <Col lg={12} className="mb-3">
              <Label>
                Do you wish to add Team? <span className="error">*</span>
              </Label>
              <br />
              <span className="mr-3">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <Label className="form-check-label" htmlFor="flexRadioDefault1">
                  &nbsp; Yes
                </Label>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <Label className="form-check-label" htmlFor="flexRadioDefault2">
                  &nbsp; No
                </Label>
              </span>
            </Col>
            <Col lg={12} className="mb-3">
              <Label className="form-check-label">Team member name</Label>
              <Input
                className="form-control"
                type="input"
                value=""
                id=""
                placeholder="Member name"
              />
            </Col>
            <Col lg={12} className="mb-3">
              <Label className="form-check-label">Team member role</Label>
              <Input
                className="form-control"
                type="input"
                value=""
                id=""
                placeholder="Member role"
              />
            </Col>
            <Col lg={12} className="mb-3">
              <Label className="form-check-label">
                Team member linkedIn url
              </Label>
              <Input
                className="form-control"
                type="input"
                value=""
                id=""
                placeholder="Acceptable format: http://www.google.com or https://www.google.com"
              />
            </Col>
            <Col lg={12} className="mb-3">
              <Label className="form-check-label">Team member name</Label>
              <Input
                className="form-control"
                type="input"
                value=""
                id=""
                placeholder="Member name"
              />
            </Col>
            <Col lg={12} className="mb-3">
              <Label className="form-check-label">
                Email <span className="error">*</span>
              </Label>
              <Input
                className="form-control"
                type="email"
                value=""
                id=""
                placeholder="Email"
              />
            </Col>
            <Col lg={12} className="mb-3">
              <Label className="form-check-label">
                Phone <span className="error">*</span>
              </Label>
              <Input
                className="form-control"
                type="phone"
                value=""
                id=""
                placeholder="Phone number"
              />
            </Col>
            <Col lg={12} className="mb-3">
              <Label
                htmlFor="exampleFormControlTextarea5"
                className="form-label"
              >
                Describe what facts make your team exceptional for this space?{" "}
                <span>*</span>
              </Label>
              <div className="pb-2">
                <small>
                  The start-up founder(s) and their team are a predictor of
                  start-up success. Describe the value, the knowledge, and
                  experience of the founding team that will contribute to
                  technology, product development, go-to-market, and growth. Add
                  anything that you believe works for you. Be candid about gaps,
                  if any, and how you intend to fill them.
                </small>
              </div>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea5"
                rows="3"
              ></textarea>
              <div className="text-end">
                <small>350/350 characters</small>
              </div>
            </Col>
            {/*} <Col lg={12} className="text-center mt-4">
              <button
                type="button"
                class="mx-2 btn btn-primary waves-effect waves-light"
              >
                <i className="ri-arrow-left-line align-bottom"></i> Back
              </button>

              <button
                type="button"
                class="mx-2 btn btn-info waves-effect waves-light"
              >
                Save As Draft
              </button>
              <button
                type="button"
                class="mx-2 btn btn-secondary waves-effect waves-light" id="PreviewModal"
                onClick={(e) => toggleModel("PreviewModal")}
              >
                Preview
              </button>
              <button
                type="button"
                class="mx-2 btn btn-success waves-effect waves-light"
              >
                Contiune
                <i className="ri-arrow-right-line align-bottom ml-2"></i>
              </button>
             </Col> */}
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default StartOrganizationTbl;
