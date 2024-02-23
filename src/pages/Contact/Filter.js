import React, { useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Input,
    Row,
    Col,
} from "reactstrap";
import Select from "react-select";

const Filter = ({ show, onCloseClick, formData, setFormData }) => {
    const [tableData, setTableData] = useState({ tableColumns: "" });

    const handleChange = (name, event, index=null)=>{   
  
        let form = {...formData};
        if(index === 'multi'){
            form[name] = event;
        }else{
            form[name] = event.target.value;
        }
        setFormData({...formData, ...form});
  
    }


    const formhandler = (e, field, type = '') => {

        let data = { ...tableData };
        if (e.target.checked) {

            if (!data[field]) { data[field] = []; }

            data[field].push(e.target.value);

        } else {
            var index = data[field].indexOf(e.target.value);
            if (index !== -1) {
                data[field].splice(index, 1);
            }
        }
        setTableData(data);
    }

    const userTypeList = [
        { value: 'UserType', label: 'User Type' },
        { value: 'Entrepreneur', label: 'Entrepreneur' },
        { value: 'Investor', label: 'Investor' },
        { value: 'SMEAdvisor ', label: 'SME Advisor ' }
    ];

    const statusList = [
        { value: 'Active', label: 'Active' },
        { value: 'Deactive', label: 'Deactive' }
    ];

    const userApprovalList = [
        { value: 'Approval', label: 'Approval' },
        { value: 'Not Approval', label: 'Not Approval' }
    ];

    const radioList = [
        { value: 'name', label: 'Name' },
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Phone' },
        { value: 'registeredOn ', label: 'Registered on' },
        { value: 'userType ', label: 'User Type' },
        { value: 'userWorkType ', label: 'User Work Type' },
        { value: 'verified', label: 'Verified' },
        { value: 'userCode', label: 'User Code' },
        { value: 'platform', label: 'Platform' }
    ];

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Contacts Filters
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <div>
                        <Label
                            htmlFor="leads-tags"
                            className="form-label text-muted text-uppercase fw-semibold mb-3"
                        > Filters
                        </Label>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">User Type <span className='text-danger'>*</span> </Label>
                                    <Select
                                        isClearable={true}
                                        name="userType"
                                        value={formData.userType?formData.userType:""}
                                        onChange={e=>handleChange("userType", e, 'multi')}
                                        options={userTypeList}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Status <span className='text-danger'>*</span> </Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="status"
                                        value={formData.status?formData.status:[]}
                                        onChange={e=>handleChange("status", e, 'multi')}
                                        options={statusList}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">User Approval <span className='text-danger'>*</span> </Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="userApproval"
                                        value={formData.userApproval?formData.userApproval:[]}
                                        onChange={e=>handleChange("userApproval", e, 'multi')}
                                        options={userApprovalList}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Label
                            htmlFor="leads-tags"
                            className="form-label text-muted text-uppercase fw-semibold mb-3"
                        >
                            Table Columns
                        </Label>
                        <Row className="g-3">
                            {
                                radioList.map((item, key) => {
                                    let check = tableData.tableColumns && tableData.tableColumns.length && tableData.tableColumns.includes(item.value) ? true : false;
                                    // console.log(check)
                                    return (
                                        <Col lg={6} key={key}>
                                            <div className="form-check">
                                                <Input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="tableColumns"
                                                    id="tableColumns"
                                                    Value={item.value}
                                                    onChange={e => formhandler(e, 'tableColumns', 'checkbox')}
                                                    checked={check}
                                                />
                                                <Label className="form-check-label" htmlFor={item.label}>
                                                    {item.label}
                                                </Label>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
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

export default Filter;
