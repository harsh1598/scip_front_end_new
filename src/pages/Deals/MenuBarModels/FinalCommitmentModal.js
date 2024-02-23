import React, { useEffect, useState } from "react";

import {
  Col,
  Row,
  Button,
  Form,
  Label,
  Input,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
} from "reactstrap";
const FinalCommitmentModal = ({ show, onCloseClick }) => {
  const [tagsData, setTagsData] = useState({ columns: "" });
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [open, setOpen] = useState("1");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const radioList = [
    { value: "userCode", label: "User Code" },
    { value: "userName", label: "User Name" },
    { value: "companyBrand", label: "Company / Brand" },
    { value: "companyStage ", label: "Company Stage " },
  ];

  useEffect(() => {
    if (radioList.length === tagsData.columns.length) {
      setIsCheckAll(true);
    }
  }, [radioList.length, tagsData.columns.length]);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const formhandler = (e, field, type = "") => {
    let data = { ...tagsData };

    if (e.target.checked) {
      if (type === "all") {
        let value = [];
        for (let i in radioList) {
          let row = radioList[i];
          value.push(row.value);
        }
        data.columns = value;
        setIsCheckAll(true);
      } else {
        if (!data[field]) {
          data[field] = [];
        }
        data[field].push(e.target.value);
      }
    } else {
      if (type === "all") {
        data.columns = "";
        setIsCheckAll(false);
      } else {
        var index = data[field].indexOf(e.target.value);
        if (index !== -1) {
          data[field].splice(index, 1);
        }
        setIsCheckAll(false);
      }
    }
    setTagsData(data);
  };

  //Toggle Accordion
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Offcanvas
      isOpen={show}
      direction="end"
      toggle={onCloseClick}
      id="offcanvasAllRubric"
      className="border-bottom"
    >
      <OffcanvasHeader
        className="bg-light"
        toggle={onCloseClick}
        id="offcanvasRightLabel"
      >
        Final Commitment
      </OffcanvasHeader>
      <OffcanvasBody className="px-0 overflow-hidden">
        <div className="px-4">
          <Form>
            <Row>
              <Col lg={12}>
                <div className="mb-3">
                  <Label className="form-check-label">
                    Initial Amount : (EUR 78, 965)
                  </Label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      EUR
                    </span>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="78965"
                      aria-label=""
                      aria-describedby="basic-addon1"
                      disabled="disabled"
                    />
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Label className="form-check-label">Final Amount :</Label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      EUR
                    </span>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="78965"
                      aria-label=""
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Select Investor’s name
                  </Label>
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                  >
                    <option>Select your Status </option>
                    <option value="1">Declined Payment</option>
                    <option value="2">Delivery Error</option>
                    <option value="3">Wrong Amount</option>
                  </select>
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="flexRadioDefault1">
                    Select Investor’s name/Investor’s Family Member/Investors’
                    Company
                  </Label>
                  <div>
                    <div className="d-flex align-items-start">
                      <button
                        type="button"
                        className="btn btn-soft-info btn-label d-grid col-12 right ms-auto "
                        onClick={() => {
                          toggleDropdown();
                        }}
                      >
                        <i className="ri-arrow-down-s-fill label-icon align-middle fs-16 ms-2"></i>
                        <span style={{ alignItems: "start", display: "flex" }}>
                          {tagsData.columns.length
                            ? tagsData.columns.length + " Selected"
                            : " Select Self/Family Member/Company"}
                        </span>
                      </button>
                    </div>
                    {dropdownOpen && (
                      <>
                        <Card>
                          <CardBody>
                            <Row>
                              <Col lg={12}>
                                <div className="mb-3">
                                  <Input
                                    name="search"
                                    id="customername-field"
                                    className="form-control"
                                    placeholder="Enter Keywords"
                                    type="text"
                                    validate={{ required: { value: true } }}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={12}>
                                <div className="mb-3">
                                  <div className="form-check">
                                    <Input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="columns"
                                      id="columns" // Value={item.value}
                                      onChange={(e) =>
                                        formhandler(e, "columnsall", "all")
                                      }
                                      checked={isCheckAll}
                                    />
                                    <Label
                                      className="form-check-label"
                                      htmlFor="auth-remember-check"
                                    >
                                      Check All{" "}
                                    </Label>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={12}>
                                <div className="mb-3">
                                  <Accordion open={open} toggle={toggle}>
                                    <AccordionItem>
                                      <AccordionHeader targetId="1">
                                        Investor
                                      </AccordionHeader>
                                      <AccordionBody accordionId="1">
                                        {radioList.map((item, key) => {
                                          let check =
                                            tagsData.columns &&
                                            tagsData.columns.length &&
                                            tagsData.columns.includes(
                                              item.value
                                            )
                                              ? true
                                              : false;
                                          // console.log(check)
                                          return (
                                            <Col lg={12} key={key}>
                                              <div className="form-check">
                                                <Input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  name="columns"
                                                  id="columns"
                                                  Value={item.value}
                                                  onChange={(e) =>
                                                    formhandler(
                                                      e,
                                                      "columns",
                                                      "checkbox"
                                                    )
                                                  }
                                                  checked={check}
                                                />
                                                <Label
                                                  className="form-check-label"
                                                  htmlFor={item.label}
                                                >
                                                  {item.label}
                                                </Label>
                                              </div>
                                            </Col>
                                          );
                                        })}
                                      </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                      <AccordionHeader targetId="2">
                                        Admin
                                      </AccordionHeader>
                                      <AccordionBody accordionId="2">
                                        {radioList.map((item, key) => {
                                          let check =
                                            tagsData.columns &&
                                            tagsData.columns.length &&
                                            tagsData.columns.includes(
                                              item.value
                                            )
                                              ? true
                                              : false;
                                          // console.log(check)
                                          return (
                                            <Col lg={12} key={key}>
                                              <div className="form-check">
                                                <Input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  name="columns"
                                                  id="columns"
                                                  Value={item.value}
                                                  onChange={(e) =>
                                                    formhandler(
                                                      e,
                                                      "columns",
                                                      "checkbox"
                                                    )
                                                  }
                                                  checked={check}
                                                />
                                                <Label
                                                  className="form-check-label"
                                                  htmlFor={item.label}
                                                >
                                                  {item.label}
                                                </Label>
                                              </div>
                                            </Col>
                                          );
                                        })}
                                      </AccordionBody>
                                    </AccordionItem>
                                  </Accordion>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </>
                    )}
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <p className="text-muted">
                  Last Commitment value was 78,966 EUR
                </p>
                <p>
                  <input
                    type="checkbox"
                    name=""
                    value=""
                    className="align-middle me-2"
                  />{" "}
                  I agree to the terms and conditions.
                </p>
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
    </Offcanvas>
  );
};

export default FinalCommitmentModal;
