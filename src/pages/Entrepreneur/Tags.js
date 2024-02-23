import React, { useState } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Input,
  Row,
  Col,
  InputGroup,
  Button
} from "reactstrap";
import Flatpickr from "react-flatpickr";
const Tags = ({ show, onCloseClick }) => {

  const [formData, setFormData] = useState({});
  const [tagList, setTagList] = useState([]);
 
  const handleChange = (name, event, index = '', type = '') => {

     let from = { ...formData };
      if (index !== '') {
          if (type === 't') {
              let list = [...tagList];
              if(name === 'date'){
                list[index][name] = event;
              }else{
                list[index][name] = event.target.value;
              }
            
              setTagList(list);
          }
      } else {
          from[name] = event.target.value;
          setFormData({ ...formData, ...from });
      }  

  }

  // handle click event of the Remove button
  const handleRemoveClick = (index, type = "t") => {

    if (type === 't') {
      const list = [...tagList];
      list.splice(index, 1);
      setTagList(list);
    }

  };

  // handle click event of the Add button
  const handleAddClick = (type = "t") => {

    if (type === 't') {
      if (tagList.length < 5) {
        let temp = { isShowTextarea: false, isShowDatePicker: false, title: "", desc: "", date: "" }
        tagList.push(temp);
        setTagList([...tagList]);
      }
    }

  };

  const handleShow = (name, index) => {
    if (name === "textarea") {
      tagList[index].isShowTextarea = !tagList[index].isShowTextarea
      setTagList([...tagList]);
    } else {
      tagList[index].isShowDatePicker = !tagList[index].isShowDatePicker
      setTagList([...tagList]);
    }

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
        Tags
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
              <div className="mb-2">
                <div className="search-box">
                  <Input type="text" className="form-control search" placeholder="Search" />
                  <i className="ri-search-line search-icon"></i>
                </div>
              </div>
              <div className="mt-3 mb-3">
                <div className="form-check">
                  <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                  <Label className="form-check-label" htmlFor="auth-remember-check">gcdgh </Label>
                </div>
              </div>
              {tagList.length > 0 && tagList.map((item, index) => {
                return (
                  <div key={index}>
                    <InputGroup className="mb-2">

                      <Input placeholder="Enter tag name" value={item.title ? item.title : ""} onChange={(e) => handleChange("title", e, index, 't')} required />
                      <Button className="btn-soft-danger mx-1" onClick={() => handleShow('textarea', index)}>
                        <i className="ri-pencil-line align-bottom " />
                      </Button>
                      <Button className="btn-soft-danger me-1" onClick={() => handleShow('date', index)}>
                        <i className="ri-calendar-todo-line align-bottom  " />
                      </Button>
                      <Button className="btn-soft-danger" onClick={() => handleRemoveClick(index, 't')}>
                        <i className="ri-close-line align-bottom " />
                      </Button>
                    </InputGroup>

                    {
                      item.isShowTextarea &&
                      <div className="mb-2" >
                        <textarea className="form-control"
                          id="note"
                          value={item.desc ? item.desc : ""} onChange={(e) => handleChange("desc", e, index, 't')}
                          placeholder="Write Comment"
                          rows="3" defaultValue="" ></textarea>
                      </div>
                    }

                    {
                      item.isShowDatePicker &&
                      <div className="mb-2" >
                        <Flatpickr
                          className="form-control date-picker-icon"
                          name="date"
                          placeholder="Select a date"
                          value={item.date ? item.date : ""} onChange={(e) => handleChange("date", e, index, 't')}
                          options={{
                            mode: "single",
                            dateFormat: "d-m-Y",
                            allowInput: true
                          }}
                        />
                      </div>
                    }
                  </div>
                );
              })}
              <div className="mt-3">
                <button type="button" onClick={() => handleAddClick('t')} className="btn btn-soft-secondary ">
                  <i className="ri-add-line align-bottom " />
                </button>
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

export default Tags;
