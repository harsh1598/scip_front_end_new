import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Input,
  Label,
} from "reactstrap";


import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const GroupOptions = [

    {
        label: "UK",
        options: [
            { label: "London", value: "London" },
            { label: "Manchester", value: "Manchester" },
            { label: "Liverpool", value: "Liverpool" }
        ]
    },
    {
        label: "FR",
        options: [
            { label: "Paris", value: "Paris" },
            { label: "Lyon", value: "Lyon" },
            { label: "Marseille", value: "Marseille" }
        ]
    },
    {
        label: "DE",
        options: [
            { label: "Hamburg", value: "Hamburg" },
            { label: "Munich", value: "Munich" },
            { label: "Berlin", value: "Berlin" }
        ]
    },
    {
        label: "US",
        options: [
            { label: "New York", value: "New York" },
            { label: "Washington", value: "Washington" },
            { label: "Michigan", value: "Michigan" }
        ]
    },
    {
        label: "SP",
        options: [
            { label: "Madrid", value: "Madrid" },
            { label: "Barcelona", value: "Barcelona" },
            { label: "Malaga", value: "Malaga" }
        ]
    },
    {
        label: "CA",
        options: [
            { label: "Montreal", value: "Montreal" },
            { label: "Toronto", value: "Toronto" },
            { label: "Vancouver", value: "Vancouver" }
        ]
    }

];

const SearchFilter = ({ show, onCloseClick, modelName, toggleModel }) => {
const [isShow, setIsShow] = useState(false);

const [selectedGroup, setSelectedGroup] = useState(null);


function handleSelectGroups(selectedGroup) {
    setSelectedGroup(selectedGroup);
}
  
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
      Add Filter
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="p-0 overflow-hidden">
          <div className="px-4">
          <div className="search-box mt-3">
          <Input 
            type="text"
            className="form-control search"
            placeholder="Quick Search" />
          <i className="ri-search-line search-icon"></i>
        </div>


        <div
            className="p-3 mt-3"
            style={{ backgroundColor: "#dff0fa", borderRadius: "5px" }}
          >
            <h6 className="mb-2">QUICK FILTERS</h6>
           
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck2"
                defaultChecked
              />
              <Label className="form-check-label" htmlFor="formCheck2">
                In Current Page
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck3"
                defaultChecked
              />
              <Label className="form-check-label" htmlFor="formCheck3">
                My Page
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck4"
                defaultChecked
              />
              <Label className="form-check-label" htmlFor="formCheck4">
                 Shared Page
              </Label>
            </div>
     
            <h6 className="mb-2 mt-3">MORE FILTERS</h6>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck5"
                defaultChecked
              />{" "}
              /
              <Label className="form-check-label" htmlFor="formCheck5">
                Due Date
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck6"
                defaultChecked
              />
              <Label className="form-check-label" htmlFor="formCheck6">
                 Seach by heading
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck6"
                defaultChecked
              />
              <Label className="form-check-label" htmlFor="formCheck6">
              Seach by sub-heading
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck6"
                defaultChecked
              />
              <Label className="form-check-label" htmlFor="formCheck6">
              Seach by Text
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck6"
                defaultChecked
              />
              <Label className="form-check-label" htmlFor="formCheck6">
              Seach by Image
              </Label>
            </div>
            <div className="form-check">
            <Input
              className="form-check-input"
              type="checkbox"
              id="formCheck6"
              defaultChecked
            />
            <Label className="form-check-label" htmlFor="formCheck6">
            Seach by Video
            </Label>
          </div>
          <div className="form-check">
          <Input
            className="form-check-input"
            type="checkbox"
            id="formCheck6"
            defaultChecked
          />
          <Label className="form-check-label" htmlFor="formCheck6">
          Seach by Document
          </Label>
        </div>
          </div>

           {/*  <Select
                 value={selectedGroup}
                 // searchable
                onChange={() => {
                handleSelectGroups();
                }}
                options={GroupOptions}
            /> */}
          </div>

          
        </OffcanvasBody>
        
      </form>
    </Offcanvas>
  );
};

export default SearchFilter;
