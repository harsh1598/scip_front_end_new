import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { className } from "gridjs";

import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  Button,
 
} from "reactstrap";

import { useForm } from "react-hook-form";

interface propData {
  show: boolean;
  onCloseClick: any;
}

const AddDocumentLinkModal = (props: propData) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onCloseModal = () => {
    reset();
    props.onCloseClick();
  };

  // const togglePopup = useCallback(() => {
  //   if (isShow) {
  //     setIsShow(false);
  //   } else {
  //     setIsShow(true);
  //   }
  // }, [isShow]);

  // useEffect(() => {
  //   setIsShow(false);
  // }, [modelName == "CreateSchedule"]);

  const [tagsData, setTagsData] = useState({ columns: "" });
  const [isCheckAll, setIsCheckAll] = useState(false);
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

  // const formhandler = (e, field, type = "") => {
  //   let data = { ...tagsData };

  //   if (e.target.checked) {
  //     if (type === "all") {
  //       let value = [];
  //       for (let i in radioList) {
  //         let row = radioList[i];
  //         value.push(row.value);
  //       }
  //       data.columns = value;
  //       setIsCheckAll(true);
  //     } else {
  //       if (!data[field]) {
  //         data[field] = [];
  //       }
  //       data[field].push(e.target.value);
  //     }
  //   } else {
  //     if (type === "all") {
  //       data.columns = "";
  //       setIsCheckAll(false);
  //     } else {
  //       var index = data[field].indexOf(e.target.value);
  //       if (index !== -1) {
  //         data[field].splice(index, 1);
  //       }
  //       setIsCheckAll(false);
  //     }
  //   }
  //   setTagsData(data);
  // };

  const CompanyStageList = [
    { value: "Ash King", label: "Ash King" },
    { value: "Smriti Sharma", label: "Smriti Sharma" },
    { value: "Test Account", label: "Test Account" },
  ];

  return (
    <Offcanvas
    isOpen={props.show}
    onHide={onCloseModal}
    toggle={props.onCloseClick}
    direction="end"
    className="border-bottom size-sm"
  >
    <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
      Add Document / Link
    </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-2">
            <Form>
              <Row>
                <Col lg={12} sm={12} className="mb-3">
                  <label>Select Tab</label>
                  <select className="form-select" aria-label="Default select">
                    <option value="1">Select Tab</option>
                    <option value="2">File</option>
                    <option value="3">Link</option>
                  </select>
                </Col>

                <Col lg={12} sm={12} className="mb-3">
                  <label>Select Type</label>
                  <select className="form-select" aria-label="Default select">
                  <option value="1">Select Type</option>
                  <option value="2">Investment Documents</option>
                  <option value="3">DD Reports</option>
                  <option value="4">Fund Diligence</option>
                  <option value="5">Investor Announcement</option>
                  <option value="6">Investor Consent</option>
                  <option value="7">Investor Update</option>
                  <option value="8">Deal Process Flow</option>
                  <option value="9">Teaser Documents</option>
                  <option value="10">Cap Table</option>
                  <option value="11">Old Reports</option>
                  <option value="12">Other Documents</option>
                  <option value="13">Archive Documents</option>
                  <option value="14">Archive Video</option>
                  </select>
                </Col>
                <Col lg={12} sm={12} className="mb-3">
                  <label>Title</label>
                  <input className="form-control" type="text" name="" id="" placeholder="Add title" />
                </Col>
                <Col lg={12} sm={12} className="mb-3">
                  <label>Link</label>
                  <input className="form-control" type="text" name="" id=""  placeholder="Add link" />
                </Col>
              </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
          <Button type="submit" className="btn btn-brand-theme">Submit</Button>
          <Button className="btn btn-light">Cancel</Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default AddDocumentLinkModal;
