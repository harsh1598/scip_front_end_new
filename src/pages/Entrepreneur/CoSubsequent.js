
import React, { useEffect, useState } from "react";
import Select from "react-select";

import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Row,
  Col,
  Input,
  Card,
  CardBody,
} from "reactstrap";

const CoSubsequent = ({ show, onCloseClick, toggle, ind }) => {

  const [tagsData, setTagsData] = useState({ columns: "" });
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
    
  const radioList = [
    { value: 'userCode', label: 'User Code' },
    { value: 'userName', label: 'User Name' },
    { value: 'companyBrand', label: 'Company / Brand' },
    { value: 'companyStage ', label: 'Company Stage ' }
  ];

  useEffect(() => {
    if (radioList.length === tagsData.columns.length) {
      setIsCheckAll(true);
    }
  }, [radioList.length, tagsData.columns.length]);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const formhandler = (e, field, type = '') => {

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

        if (!data[field]) { data[field] = []; }
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
  }

  const CompanyStageList = [
    { value: 'Investor', label: 'Investor' },
    { value: 'PE', label: 'PE' },
    { value: 'VC', label: 'VC' }
  ];

  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
      Assign checklist
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
              <div className="mb-3">
                <Label htmlFor="timezone" className="form-label"> Checklist <span className='text-danger'>*</span>  </Label>
                <div>
                <div className="d-flex align-items-start">
                    <button
                    type="button"
                    className="btn btn-soft-info btn-label d-grid col-12 right ms-auto "
                    onClick={() => { toggleDropdown() }}
                    >
                    <i className="ri-arrow-down-s-fill label-icon align-middle fs-16 ms-2"></i>
                    <span style={{ alignItems: "start" , display:"flex"}}>{ tagsData.columns.length ? tagsData.columns.length + " Selected" :" Select Checklist"}</span>
                    </button>
                </div>
                  {
                    dropdownOpen &&
                    <>
                      <Card>
                        <CardBody>
                          <Row>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Input
                                  name="search" id="customername-field" className="form-control"
                                  placeholder="Enter Keywords" type="text"
                                  validate={{ required: { value: true }, }}
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <div className="mb-3">
                                <div className="form-check">
                                  <Input className="form-check-input"
                                    type="checkbox" name="columns"
                                    id="columns" // Value={item.value}
                                    onChange={e => formhandler(e, 'columnsall', 'all')}
                                    checked={isCheckAll}
                                  />
                                  <Label className="form-check-label" htmlFor="auth-remember-check">Check All </Label>
                                </div>
                              </div>
                            </Col>
                            <Col lg={6}>
                            <div className="mb-3">
                              <div className="form-check">
                                <Input className="form-check-input"
                                  type="checkbox" name="uncolumns"
                                  id="uncolumns" // Value={item.value}
                                  onChange={e => formhandler(e, 'columnsall', 'Uncheckall')}
                                  checked={isCheckAll}
                                />
                                <Label className="form-check-label" htmlFor="auth-remember-check">Uncheck All </Label>
                              </div>
                            </div>
                          </Col>
                          </Row>
                          <Row>
                            <Col lg={12}>
                                <div className="border-top p-2">
                                  {
                                    radioList.map((item, key) => {
                                        let check = tagsData.columns && tagsData.columns.length && tagsData.columns.includes(item.value) ? true : false;
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
                                                        onChange={e => formhandler(e, 'columns', 'checkbox')}
                                                        checked={check}
                                                    />
                                                    <Label className="form-check-label" htmlFor={item.label}>
                                                        {item.label}
                                                    </Label>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                                </div>
                            </Col>
                        </Row>
                        </CardBody>
                      </Card>
                    </>
                  }
                </div>
              </div>
            </Col>
           
         </Row>
        </OffcanvasBody>
        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
          <button type="submit" className="btn btn-brand-theme" onClick={onCloseClick}>
            Submit
          </button>
          <button className="btn btn-light" onClick={onCloseClick}>
            Cancel
          </button>
        </div>
      </form>
    </Offcanvas>
  );
};

export default CoSubsequent;
