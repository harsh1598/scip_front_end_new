import React, { useEffect, useState } from "react";
import {
    Col,
    Row,
    Label,
    Input,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Card,
    CardBody,
    UncontrolledTooltip,
} from "reactstrap";
import Select from "react-select";

const AddEditEsignDocument = ({ show, onCloseClick, formData, setFormData }) => {

    const [tagsData, setTagsData] = useState({ columns: "" });
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [open, setOpen] = useState('1');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const radioList = [
        { value: 'userCode', label: 'User Code' },
        { value: 'userName', label: 'User Name' },
        { value: 'companyBrand', label: 'Company / Brand' },
        { value: 'companyStage ', label: 'Company Stage ' }
    ];

    useEffect(() => {
        if (radioList.length === tagsData.columns.length) {
            setIsCheckAll(true);
        }
    }, [radioList.length, tagsData.columns.length]);


    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    const formhandler = (e, field, type = '') => {

        let data = { ...tagsData };

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

    const handleChange = (name, event, index=null)=>{   

        let form = {...formData};

        if(index === 'multi'){
            form[name] = event;
        }else{
          form[name] = event.value;
        }
        
        setFormData({...formData, ...form});
  
    }

    //Toggle Accordion
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    const CompanyStageList = [
        { value: 'Beta', label: 'Beta' },
        { value: 'Concept', label: 'Concept' },
        { value: 'Idea', label: 'Idea' },
        { value: 'PreRevenue ', label: 'Pre Revenue ' },
        { value: 'Revenue ', label: 'Revenue' },
        { value: 'All ', label: 'All ' }
    ];


    const Types = [
        {
            name: "All Investors",
            checked: true,
            id: 1
        },
        {
            name: "Only to the Investor ",
            checked: false,
            id: 2
        },
    ];

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                {formData.id ? "Edit Filing" : " Add Filing "}
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Subject<span className='text-danger'>*</span></Label>
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
                                <Label htmlFor="name-field" className="form-label">Message<span className='text-danger'>*</span></Label>
                                <textarea className="form-control"
                                    id="note"
                                    placeholder=""
                                    rows="3" defaultValue=""></textarea>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">Document Title<span className='text-danger'>*</span></Label>
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
                                <Label htmlFor="name-field" className="form-label">Upload eSign Document <span className='text-danger'>*</span></Label>
                                <div className="d-flex align-items-center form-control">
                                    <div className='attachment-btn '>
                                        <input type="file" className='input' />
                                        <i className='ri ri-attachment-line icon' />
                                    </div>
                                    <span className=" text-black-50 ms-1">No File Selected.</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                                <div className="mb-3">
                                    <Label
                                        className="form-label"
                                        htmlFor="flexRadioDefault1"
                                    >
                                       Invite User <span className='text-danger'>*</span>
                                    </Label>
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
                                                                <div className="mb-3">
                                                                    <Accordion open={open} toggle={toggle} >
                                                                        <AccordionItem>
                                                                            <AccordionHeader targetId="1">Investor</AccordionHeader>
                                                                            <AccordionBody accordionId="1">
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
                                                                            </AccordionBody>
                                                                        </AccordionItem>
                                                                        <AccordionItem>
                                                                            <AccordionHeader targetId="2">Authorized Signatory</AccordionHeader>
                                                                            <AccordionBody accordionId="2">
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
                                                                            </AccordionBody>
                                                                        </AccordionItem>
                                                                    </Accordion>
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
                                <Label htmlFor="timezone" className="form-label">Company</Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="profile"
                                    value={formData.profile ? formData.profile : []}
                                    onChange={e => handleChange("profile", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <UncontrolledTooltip placement="right" target="eSign" >
                                    eSign Document show's under this title on deal page
                                </UncontrolledTooltip>
                                <Label htmlFor="timezone" className="form-label">Section Title <i className="ri-information-fill align-bottom " id="eSign"></i></Label>
                                <Select
                                    isClearable={true}
                                    // isMulti
                                    name="profile"
                                    value={formData.profile ? formData.profile : []}
                                    onChange={e => handleChange("profile", e, 'multi')}
                                    options={CompanyStageList}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Label htmlFor="timezone" className="form-label">View On Deal Page </Label>
                            <div className="py-2">
                                {
                                    Types.map((val, ind) => {
                                        return <> <div className="form-check form-check-inline" key={ind}>
                                            <input className="form-check-input" type="radio" id="inlineCheckbox2" value={val.name} checked={(formData.Type && val.name === formData.Type) ? true : false} onChange={e => handleChange('Type', e)} />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">{val.name}</label>
                                        </div>
                                        </>
                                    })
                                }
                            </div>
                        </Col>

                    </Row>
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

export default AddEditEsignDocument;
