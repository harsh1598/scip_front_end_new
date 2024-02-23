import React, { useState, useCallback, useEffect } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Input } from "reactstrap";
import SimpleBar from "simplebar-react";

const Status = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(false);
  }, [modelName == "CreateSchedule"]);

  const data = [
    {
      companycampaign: "DD Seed 1",
      date: "05/09/2023",
      task: "Workflow Status ",
      action: "Workflow Activated by Smriti Misra. ",
    },
    {
      companycampaign: "DD Seed 1",
      date: "05/09/2023",
      task: "Workflow Status ",
      action: "Workflow Activated by Smriti Misra. ",
    },
    {
      companycampaign: "DD Seed 1",
      date: "05/09/2023",
      task: "Workflow Status ",
      action: "Workflow Activated by Smriti Misra. ",
    },
    {
      companycampaign: "DD Seed 1",
      date: "05/09/2023",
      task: "Workflow Status ",
      action: "Workflow Activated by Smriti Misra. ",
    },
    {
      companycampaign: "DD Seed 1",
      date: "05/09/2023",
      task: "Workflow Status ",
      action: "Workflow Activated by Smriti Misra. ",
    },
    {
      companycampaign: "DD Seed 1",
      date: "05/09/2023",
      task: "Workflow Status ",
      action: "Workflow Activated by Smriti Misra. ",
    },
    {
      companycampaign: "DD Seed 1",
      date: "05/09/2023",
      task: "Workflow Status ",
      action: "Workflow Activated by Smriti Misra. ",
    },
    {
      companycampaign: "DD Seed 1",
      date: "05/09/2023",
      task: "Workflow Status ",
      action:
        "Investor onboarding document data changed by Ash Ku. Document Folder : Renamed the folder name bbmnk444 to TEst213",
    },
    {
      companycampaign: "DD Seed 1",
      date: "05/09/2023",
      task: "Workflow Status ",
      action:
        "Investor onboarding document data changed by Ash Ku. Document Folder : Renamed the folder name tre64564 to 77777e",
    },
  ];

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-md"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Task List
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <div className="search-box">
              <Input
                type="text"
                className="form-control search"
                placeholder="Company/Campaign/Task/Action"
              />
              <i className="ri-search-line search-icon"></i>
            </div>
            <SimpleBar
              autoHide={false}
              style={{ maxHeight: "680px", overflowX: "hidden" }}
            >
              <div className="table-responsive table-card mt-3 px-3">
                <table className="table align-middle table-nowrap table-striped-columns mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Company Campaign</th>
                      <th scope="col">Date</th>
                      <th scope="col">Task</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.length &&
                      data.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.companycampaign}</td>
                            <td>{item.date}</td>
                            <td>{item.task}</td>
                            <td
                              style={{
                                wordBreak: "break-all",
                                whiteSpace: "nowrap !important",
                              }}
                            >
                              {item.action}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </SimpleBar>
          </div>
        </OffcanvasBody>
      </form>
    </Offcanvas>
  );
};

export default Status;
