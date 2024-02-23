import React, { useState } from "react";
import Select from "react-select";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Row,
  Col,
  Input,
} from "reactstrap";

const InvestorRole = ({ show, onCloseClick }) => {

  const [formData, setFormData] = useState({});

  const handleChange = (name, event, index = null) => {

    let form = { ...formData };
    if (index === 'select') {
      form[name] = event;
    } else {
      form[name] = event.target.value;
    }
    setFormData({ ...formData, ...form });
  }

  const CompanyStageList = [
    { value: 'Investor', label: 'Investor' },
    { value: 'PE', label: 'PE' },
    { value: 'VC', label: 'VC' }
  ];

  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Select Investor Role
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
              <div className="mb-3">
                <Label htmlFor="timezone" className="form-label"> Lead Investor  </Label>
                <Select
                  isClearable={true}
                  placeholder="Select Lead Investor "
                  // isMulti
                  value={formData.leadInvestor ? formData.leadInvestor : ""}
                  onChange={e => handleChange("leadInvestor", e, 'select')}
                  name="leadInvestor"
                  options={CompanyStageList}
                />
              </div>
            </Col>
            {formData.leadInvestor &&
              <Col lg={12}>
                <div className="mb-2">
                  <Input
                    name="leadInvestorName" id="customername-field" className="form-control"
                    placeholder="Enter Lead Investor" type="text"
                    value={formData.leadInvestorName ? formData.leadInvestorName : ""}
                    onChange={e => handleChange("leadInvestorName", e)}
                    validate={{
                      required: { value: true },
                    }}
                  />
                </div>
              </Col>
            }
            <Col lg={12}>
              <div className="mb-3">
                <Label htmlFor="timezone" className="form-label"> Board Observer  </Label>
                <Select
                  isClearable={true}
                  placeholder="Select Board Observer "
                  value={formData.boardObserver ? formData.boardObserver : ""}
                  onChange={e => handleChange("boardObserver", e, 'select')}
                  // isMulti
                  name="boardObserver"
                  options={CompanyStageList}
                />
              </div>
            </Col>
            {formData.boardObserver &&
              <Col lg={12}>
                <div className="mb-2">
                  <Input
                    name="boardObserverName" id="customername-field" className="form-control"
                    placeholder="Enter Board Observer" type="text"
                    value={formData.boardObserverName ? formData.boardObserverName : ""}
                    onChange={e => handleChange("boardObserverName", e)}
                    validate={{
                      required: { value: true },
                    }}
                  />
                </div>
              </Col>
            }
            <Col lg={12}>
              <div className="mb-3">
                <Label htmlFor="timezone" className="form-label"> Investment Director  </Label>
                <Select
                  isClearable={true}
                  placeholder="Select Investment Director "
                  value={formData.investmentDirector ? formData.investmentDirector : ""}
                  onChange={e => handleChange("investmentDirector", e, 'select')}
                  // isMulti
                  name="investmentDirector"
                  options={CompanyStageList}
                />
              </div>
            </Col>
            {formData.investmentDirector &&
              <Col lg={12}>
                <div className="mb-2">
                  <Input
                    name="investmentDirectorName" id="customername-field" className="form-control"
                    placeholder="Enter Investment Director" type="text"
                    value={formData.investmentDirectorName ? formData.investmentDirectorName : ""}
                    onChange={e => handleChange("investmentDirectorName", e)}
                    validate={{
                      required: { value: true },
                    }}
                  />
                </div>
              </Col>
            }
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

export default InvestorRole;
