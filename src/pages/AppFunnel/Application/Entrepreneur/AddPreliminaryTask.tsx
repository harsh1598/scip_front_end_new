import { useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Input, Row, Col , Card , CardBody } from "reactstrap";
import Select from "react-select";
import * as moment from "moment";
import Flatpickr from "react-flatpickr";

interface propData {
    show: boolean;
    onCloseClick: any;
};
  
const AddPreliminaryTask = (props: propData) => {

    const [tagsData, setTagsData] = useState({ columns: "" });
    const [formData, setFormData] = useState({workflow:"",milestone:"" , task:"" ,assignedTo:"" , date:"" });
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
      
    const radioList = [
      { value: 'userCode', label: 'User Code' },
      { value: 'userName', label: 'User Name' },
      { value: 'companyBrand', label: 'Company / Brand' },
      { value: 'companyStage ', label: 'Company Stage ' }
    ];

    const CompanyStageList = [
        { value: 'Beta', label: 'Beta' },
        { value: 'Concept', label: 'Concept' },
        { value: 'Idea', label: 'Idea' },
        { value: 'PreRevenue ', label: 'Pre Revenue ' },
        { value: 'Revenue ', label: 'Revenue' },
        { value: 'All ', label: 'All ' }
    ];

    useEffect(() => {
      if (radioList.length === tagsData.columns.length) {
        setIsCheckAll(true);
      }
    }, [radioList.length, tagsData.columns.length]);

    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    const formhandler = (e:any, field:any, type = '') => {
  
      let data:any = { ...tagsData };
  
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

    const handleChange = (name:any, event:any, index="")=>{   

        let form:any = {...formData};

        if(index === 'multi'){
            
            if(name==='date'){
                // form[name] = moment(event.toString()).format('DD/MM/YYYY');
            }else{
                form[name] = event;
            }
         
        }else{
          form[name] = event.value;
        }
        
        setFormData({...formData, ...form});
  
    }

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                Add Preliminary Task
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <div>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label"> Company </Label>
                                <div>
                                    <div className="d-flex align-items-start">
                                        <button
                                            type="button"
                                            className="btn btn-soft-info btn-label d-grid col-12 right ms-auto "
                                            onClick={() => { toggleDropdown() }}
                                        >
                                            <i className="ri-arrow-down-s-fill label-icon align-middle fs-16 ms-2"></i>
                                            <span style={{ alignItems: "start", display: "flex" }}>{tagsData.columns.length ? tagsData.columns.length + " Selected" : " Select Users"}</span>
                                        </button>
                                    </div>
                                    {
                                        dropdownOpen &&
                                        <>
                                            <Card>
                                                <CardBody>
                                                    <Row>
                                                        <Col lg={12}>
                                                            <div className="mb-3">
                                                                <Input
                                                                    name="search" id="customername-field" className="form-control"
                                                                    placeholder="Enter Keywords" type="text"
                                                                    validate={{ required: { value: true }, }}
                                                                />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg={12}>
                                                            <div className="mb-3">
                                                                <div className="form-check">
                                                                    <Input className="form-check-input"
                                                                        type="checkbox" name="columns"
                                                                        id="columns" // Value={item.value}
                                                                        onChange={e => formhandler(e, 'columnsall', 'all')}
                                                                        checked={isCheckAll}
                                                                    />
                                                                    <Label className="form-check-label" htmlFor="auth-remember-check">Check All </Label>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg={12}>
                                                            <div className="border-top p-2">
                                                                {
                                                                    radioList.map((item, key) => {
                                                                        let check = tagsData.columns && tagsData.columns.length && tagsData.columns.includes(item.value) ? true : false;
                                                                        // console.log(check)
                                                                        return (
                                                                            <Col lg={12} key={key}>
                                                                                <div className="form-check">
                                                                                    <Input
                                                                                        className="form-check-input"
                                                                                        type="checkbox"
                                                                                        name="columns"
                                                                                        id="columns"
                                                                                        Value={item.value}
                                                                                        onChange={e => formhandler(e, 'columns', 'checkbox')}
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
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </>
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Workflow  <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="workflow"
                                    value={formData.workflow ? formData.workflow : []}
                                    onChange={e=>handleChange("workflow", e, 'multi')}
                                    // options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Milestone  <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="milestone"
                                    value={formData.milestone ? formData.milestone : []}
                                    onChange={e=>handleChange("milestone", e, 'multi')}
                                    // options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Task  <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="task"
                                    value={formData.task ? formData.task : []}
                                    onChange={e=>handleChange("task", e, 'multi')}
                                    // options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Assigned To  <span className='text-danger'>*</span></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="assignedTo"
                                    value={formData.assignedTo ? formData.assignedTo : []}
                                    onChange={e=>handleChange("assignedTo", e, 'multi')}
                                    // options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label">Due Date <span className='text-danger'>*</span> </Label>
                                <Flatpickr
                                    className="form-control date-picker-icon"
                                    // id="datepicker-publish-input"
                                    name="date"
                                    placeholder="Select a date"
                                    value={formData.date?formData.date:[]}
                                    onChange={e => handleChange('date',e,'multi' )}
                                    options={{
                                        mode: "single",
                                        dateFormat: "d-m-Y"
                                    }}
                                />
                            </div>
                        </Col>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme  "
                        onClick={props.onCloseClick}
                    >
                        Apply
                    </button>
                    <button
                        className="btn btn-light  "
                        onClick={props.onCloseClick}
                    >
                        Clear Filter
                    </button>

                </div>
            </form>
        </Offcanvas>
    );
};

export default AddPreliminaryTask;
