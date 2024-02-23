import React, { useEffect, useState } from "react";

import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
    Input,
    Card,
    CardBody
  } from "reactstrap";
import Flatpickr from "react-flatpickr";
import * as moment from "moment";

const ManageUserExpiryDate = ({ show, onCloseClick }) => {

    const [formData, setFormData] = useState({});

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

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Membership Expiry Date
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Please select the expiry date of the membership.</Label>
                                    <Flatpickr
                                        className="form-control date-picker-icon"
                                        name="date"
                                        placeholder="Membership Expiry Date"
                                        value={formData.date ? formData.date : []}
                                        onChange={e => handleChange('date', e, 'multi')}
                                        options={{
                                            mode: "single",
                                            dateFormat: "d-m-Y"
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme  "
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

export default ManageUserExpiryDate;
