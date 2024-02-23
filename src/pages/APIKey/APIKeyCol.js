import React from "react";

const Name = (cell) => {
  return cell.value ? cell.value : "";
};

const CreatedBy = (cell) => {
  return cell.value ? cell.value : "";
};

const APIKeys = (cell) => {
  return (
    <span type="input" className="form-control apikey-value">{cell.value}</span>
  );
};

const Status = (cell) => {
  return (
    <span className={`${cell.value === 'Disable' ? "badge badge-soft-danger" : "badge badge-soft-success"}`}>{cell.value ? cell.value : ""}</span>
  );
};
const CreatedDate = (cell) => {
  return cell.value ? cell.value : "";
};
const ExpiryDate = (cell) => {
  return cell.value ? cell.value : "";
};

export { Name, CreatedBy, APIKeys, Status, CreatedDate, ExpiryDate };
