import React, { useState } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Row,
  Col,
  Input,
} from "reactstrap";
import Select from "react-select";

const EditPrivateDocument = ({ show, onCloseClick }) => { 

    const [formData, setFormData] = useState({});

    const CompanyStageList = [
        { value: 'Admin', label: 'Admin' },
        { value: 'Investor', label: 'Investor' },
        { value: 'SMEAdvisor', label: 'SME Advisor' },
    ];

    const handleChange = (name, event, index=null)=>{   

        let form = {...formData};

        form[name] = event;
        
        setFormData({...formData, ...form});
  
    }

  return (
    <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-sm">
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Edit Private Document
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
        <OffcanvasBody>
          <Row>
            <Col lg={12}>
                <div className="mb-2">
                    <Label htmlFor="name-field" className="form-label">Title</Label>
                    <Input
                        name="name" id="customername-field"
                        className="form-control" placeholder="" type="text"
                        validate={{
                            required: { value: true },
                        }}
                    />
                </div>
            </Col>
            <Col lg={12}>
              <div className="mb-2">
                <Label htmlFor="name-field" className="form-label">Select Excel File </Label>
                <div className="d-flex align-items-center form-control">
                    <div className='attachment-btn '>
                            <input type="file" className='input' />
                            <i className='ri ri-attachment-line icon' />
                        </div>
                        <span className=" text-black-50 ms-1">filename.doc</span>
                    </div> 
                </div>
            </Col>
            <Col lg={12}>
                <div className="mb-2">
                    <Label htmlFor="name-field" className="form-label">Type</Label>
                    <Select
                        isClearable={true}
                        // isMulti
                        name="file"
                        value={formData.file?formData.file:[]}
                        onChange={e=>handleChange("file", e, 'multi')}
                        options={CompanyStageList}
                    />
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

export default EditPrivateDocument;