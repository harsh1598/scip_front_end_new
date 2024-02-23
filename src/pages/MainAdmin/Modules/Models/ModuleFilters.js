import React, { useState, useCallback, useEffect } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Form,
  Label,
  Button,
} from "reactstrap";
import Flatpickr from "react-flatpickr";

const ModuleFilters = ({ show, onCloseClick, modelName, toggleModel }) => {
  const [isShow, setIsShow] = useState(false);

  const togglePopup = useCallback(() => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [isShow]);

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
        Filters
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody className="px-0 overflow-hidden">
          <div className="px-4">
            <Form>
              <Row>
                <Col lg={12} className="mb-3">
                  <Label className="form-check-label">Module Filter</Label>
                  <select className="form-select">
                    <option value="" class="">
                      Select Module Filter
                    </option>
                    <option value="entrepreneur" selected="">
                      Entrepreneur
                    </option>

                    <option value="investor">Investor</option>

                    <option value="thirdparty">Thirdparty</option>

                    <option value="dashboard">Dashboard</option>

                    <option value="app_funnel_entrepreneur">
                      App Funnel Entrepreneur
                    </option>

                    <option value="app_funnel_investor">
                      App Funnel Investor
                    </option>

                    <option value="app_funnel_thirdparty">
                      App Funnel Thirdparty
                    </option>

                    <option value="users">Users</option>

                    <option value="investor_interested">
                      Investor Interested
                    </option>

                    <option value="investor_invested">Investor Invested</option>
                  </select>
                </Col>
              </Row>
            </Form>
          </div>
        </OffcanvasBody>
        <div className="offcanvas-foorter border p-3 text-center">
          <div className="hstack gap-2 justify-content-end">
            <button type="button" className="btn btn-brand-theme">
              Apply
            </button>
            <Button onClick={onCloseClick} className="btn btn-light">
              Clear Filter
            </Button>
          </div>
        </div>
      </form>
    </Offcanvas>
  );
};

export default ModuleFilters;
