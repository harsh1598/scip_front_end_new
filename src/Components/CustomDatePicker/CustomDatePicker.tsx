import "./CustomDatePicker.scss";
import { Col } from "reactstrap";
import React, { useState, Fragment, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface PropData {
  onChange?: any;
  selected?: any;
  format?: string;
  new_format?: string;
  timeformat?: string;
  type?: string;
  minData?: any;
  maxData?: any;
  placeholderText?: any;
  isDisabled?: boolean;
  showtimezone?: string;
}

const CustomDatePicker = (props: PropData) => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (props.selected == "reset") {
      setStartDate(null);
    } else if (props.selected) {
      if (
        props.selected &&
        props.selected != "0000-00-00" &&
        props.selected != "0000-00-00 00:00:00"
      ) {
        setStartDate(new Date(props.selected) as any);
      }
    } else {
      setStartDate("");
    }
  }, [props.selected]);

  return (
    <>
      <Fragment>
        <Col lg={12} className="" key={new Date().getTime()}>
          {!props.type && (
            <DatePicker
              // onFocus={() => setShowDropdown(!showDropdown)}
              // open={showDropdown}
              className="form-control date-picker"
              selected={startDate}
              peekNextMonth
              dateFormat={props.format ? props.format : "dd/MM/yy"}
              dropdownMode="select"
              showMonthDropdown
              showYearDropdown
              disabled={props.isDisabled}
              minDate={props.minData ? props.minData : ""}
              maxDate={props.maxData ? props.maxData : ""}
              onChange={(date: any) => {
                setStartDate(date);
                if (props.onChange) {
                  props.onChange(moment(date).format(props.new_format ? props.new_format : "YYYY-MM-DD HH:mm:ss"));
                }
              }}
              placeholderText={
                props.placeholderText ? props.placeholderText : ""
              }
            />
          )}
          {props.type == "DATETIME" && (
            <DatePicker
              className="form-control"
              selected={startDate}
              disabled={props.isDisabled}
              showTimeSelect
              timeFormat={props.timeformat ? props.timeformat : "hh:mm:ss aa"}
              timeIntervals={5}
              // timeCaption="Time"
              dateFormat={
                props.format
                  ? props.format +
                  " " +
                  (props.timeformat ? props.timeformat : "hh:mm aa")
                  : "dd/MM/yy " +
                  " " +
                  (props.timeformat ? props.timeformat : "hh:mm aa")
              }
              onChange={(date: any) => {
                setStartDate(date);
                if (props.onChange) {
                  props.onChange(date);
                }
              }}
              placeholderText={
                props.placeholderText ? props.placeholderText : ""
              }
            />
          )}
          {props.type == "MONTH" && (
            <DatePicker
              className="form-control"
              selected={startDate}
              dateFormat="MM"
              showMonthYearPicker
              onChange={(date: any) => {
                setStartDate(date);
                if (props.onChange) {
                  props.onChange(date);
                }
              }}
              placeholderText={
                props.placeholderText ? props.placeholderText : ""
              }
            />
          )}

          {props.type == "DATE_MONTH" && (
            <DatePicker
              className="form-control form-style date-picker"
              selected={startDate}
              disabled={props.isDisabled}
              showMonthDropdown
              dateFormat="dd-MMM"
              onChange={(date: any) => {
                setStartDate(date);
                if (props.onChange) {
                  props.onChange(date);
                }
              }}
            />
          )}
          {/* {props.type == "DATETIME" && (
            <DatePicker
              className="form-control date-picker"
              selected={startDate}
              disabled={props.isDisabled}
              timeFormat="h:mm aa"
              timeCaption="Time"
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              onChange={(date: any) => {
                // setStartDate(date);
                // if (props.onChange) {
                //   props.onChange(date);
                // }
              }}
              placeholderText={
                props.placeholderText ? props.placeholderText : ""
              }
            />
          )} */}
          {props.type == "TIME" && (
            <DatePicker
              className="form-control"
              selected={startDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="LLL"
              onChange={(date: any) => {
                setStartDate(date);
                // if (props.onChange) {
                //   props.onChange(moment(date).format("HH:mm:ss"));
                // }
              }}
              placeholderText={
                props.placeholderText ? props.placeholderText : ""
              }
            />
          )}
          {props.type == "ONLYTIME" && (
            <DatePicker
              className="form-control"
              selected={startDate}
              showTimeSelect
              showTimeSelectOnly
              // timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              onChange={(date: any) => {
                setStartDate(date);
                if (props.onChange) {
                  props.onChange(moment(date).format("HH:mm:ss"));
                }
              }}
              placeholderText={
                props.placeholderText ? props.placeholderText : ""
              }
            />
          )}
          {props.type == "YEAR" && (
            <DatePicker
              className="form-control"
              selected={startDate}
              showYearPicker
              dateFormat="yyyy"
              yearItemNumber={9}
              onChange={(date: any) => {
                setStartDate(date);
                if (props.onChange) {
                  props.onChange(moment(date).format("YYYY"));
                }
              }}
              placeholderText={
                props.placeholderText ? props.placeholderText : ""
              }
            />
          )}
        </Col>
      </Fragment>
    </>
  );
};

CustomDatePicker.defaultProps = {
  placeholder: "Select",
  selected: "",
  isSearchable: false,
  key: new Date().getTime(),
};

export default CustomDatePicker;
