import React, { useEffect, useState } from "react";

import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
    Input,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Card,
    CardBody,
    UncontrolledTooltip
  } from "reactstrap";
import Flatpickr from "react-flatpickr";
import * as moment from "moment";
import Select from "react-select";

const AddKYC = ({ show, onCloseClick }) => {

    const [formData, setFormData] = useState({});
    const [tagsData, setTagsData] = useState({ columns: "" });
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [assigned, setAssigned] = useState(false);
    const [file, setFile] = useState(false);

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

    const toggleAssignedDropdown = () => setAssigned((prevState) => !prevState);
    const toggleFileDropdown = () => setFile((prevState) => !prevState);

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

    const handleChange = (name, event, index = null) => {

        let form = { ...formData };

        if (index === 'multi') {

            if (name === 'date') {
                form[name] = moment(event.toString()).format('DD/MM/YYYY');
            } else {
                form[name] = event;
            }

        } else {
            form[name] = event.value;
        }

        setFormData({ ...formData, ...form });

    }

    const CompanyStageList = [
        { value: 'Executivecouncil', label: 'Executive council' },
        { value: 'Family', label: 'Family' },
        { value: 'Founding', label: 'Founding' },
        { value: 'Individual ', label: 'Individual ' },
        { value: 'Institutional ', label: 'Institutional' },
        { value: 'Lifetime ', label: 'Lifetime ' }
    ];

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Add KYC
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Label
                            htmlFor="leads-tags"
                            className="form-label text-muted text-uppercase fw-semibold mb-3"
                        > Filters
                        </Label>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">KYC Name <Label className="form-check-label" >
                                        <span className='text-danger'>*</span>
                                    </Label> </Label>
                                    <Input
                                        name="boardObserverName" id="customername-field" className="form-control"
                                        placeholder="Enter KYC Name " type="text"
                                        value={formData.boardObserverName ? formData.boardObserverName : ""}
                                        onChange={e => handleChange("boardObserverName", e)}
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Select Membership Type     <span className='text-danger'>*</span> </Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="category"
                                        value={formData.membership ? formData.membership : []}
                                        onChange={e => handleChange("membership", e, 'multi')}
                                        options={CompanyStageList}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Assigned To  </Label>
                                    <div>
                                        <div className="d-flex align-items-start">
                                            <button
                                            type="button"
                                            className="btn btn-soft-info btn-label d-grid col-12 right ms-auto "
                                            onClick={() => { toggleAssignedDropdown() }}
                                            >
                                            <i className="ri-arrow-down-s-fill label-icon align-middle fs-16 ms-2"></i>
                                            <span style={{ alignItems: "start" , display:"flex"}}>{ tagsData.columns.length ? tagsData.columns.length + " Selected" :" Select User"}</span>
                                            </button>
                                        </div>
                                        {
                                            assigned &&
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
                                                    <Col lg={12}>
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
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <UncontrolledTooltip placement="right" target="Mandatory">
                                        Select KYC is mandatory or not to above Assigned Users.
                                    </UncontrolledTooltip>
                                    <Label htmlFor="timezone" className="form-label">Mandatory <span className='text-danger'>*</span>    <i className="ri-information-fill align-bottom " id="Mandatory"></i> </Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="category"
                                        value={formData.membership ? formData.membership : []}
                                        onChange={e => handleChange("membership", e, 'multi')}
                                        options={CompanyStageList}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <UncontrolledTooltip placement="right" target="File">
                                        Select Allowed KYC File Type .
                                    </UncontrolledTooltip>
                                    <Label htmlFor="timezone" className="form-label">File Allowed <span className='text-danger'>*</span>    <i className="ri-information-fill align-bottom " id="File"></i> </Label>
                                    <div>
                                        <div className="d-flex align-items-start">
                                            <button
                                            type="button"
                                            className="btn btn-soft-info btn-label d-grid col-12 right ms-auto "
                                            onClick={() => { toggleFileDropdown() }}
                                            >
                                            <i className="ri-arrow-down-s-fill label-icon align-middle fs-16 ms-2"></i>
                                            <span style={{ alignItems: "start" ,display:"flex" }}>{ tagsData.columns.length ? tagsData.columns.length + " Selected" :" Select Type"}</span>
                                            </button>
                                        </div>
                                        {
                                            file &&
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
                                                    <Col lg={12}>
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
                        <Row>
                        <Col lg={12}>
                            <div >
                                <div className="form-check">
                                    <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                    <Label className="form-check-label" htmlFor="auth-remember-check">Check this for display this Section in App   </Label>
                                </div>
                            </div>
                        </Col>
                        </Row>
                    </div>

                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme "
                        onClick={onCloseClick}
                    >
                        Submit
                    </button>
                    <button
                        className="btn btn-light  "
                        onClick={onCloseClick}
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </Offcanvas>
    );
};

export default AddKYC;
