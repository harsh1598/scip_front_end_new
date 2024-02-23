import React, { useEffect, useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Input,
    Row,
    Col,
    Card,
    CardBody,
} from "reactstrap";

import Flatpickr from "react-flatpickr";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SimpleBar from "simplebar-react";

const CreateSchedule = ({ show, onCloseClick }) => {

    const [tagsData, setTagsData] = useState({ columns: "" });
    const [isCheckAll, setIsCheckAll] = useState(false);
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

    const handleChange = (name, event, index = null) => {


    }

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-md">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Create Schedule
            </OffcanvasHeader>
            {/* h-100 */}
            <form action="" className="d-flex flex-column justify-content-end ">
                <SimpleBar style={{ height: "84vh" }}>
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Title </Label>
                                <Input
                                    name="title" id="customername-field" className="form-control"
                                    placeholder="Title" type="text"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Date </Label>
                                <Flatpickr
                                    className="form-control date-picker-icon"
                                    name="date"
                                    placeholder="Select a date"
                                    // value={new Date()}

                                    onChange={e => handleChange('date', e, 'multi')}
                                    options={{
                                        mode: "single",
                                        dateFormat: "d-m-Y",
                                        allowInput: true
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="mb-3">
                                <Label htmlFor="name-field" className="form-label"> Start Date / End Date </Label>
                                <Flatpickr
                                    className="form-control date-picker-icon"
                                    name="date"
                                    placeholder="Select a date"
                                    // value={new Date()}

                                    onChange={e => handleChange('date', e, 'multi')}
                                    options={{
                                        mode: "range",
                                        dateFormat: "d-m-Y",
                                        allowInput: true
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label htmlFor="timezone" className="form-label"> Users </Label>
                                <div>
                                    <div className="d-flex align-items-start">
                                        <button
                                            type="button"
                                            className="btn btn-soft-info btn-label d-grid col-12 right ms-auto "
                                            onClick={() => { toggleDropdown() }}
                                        >
                                            <i className="ri-arrow-down-s-fill label-icon align-middle fs-16 ms-2"></i>
                                            <span style={{ alignItems: "start", display: "flex" }}>{tagsData.columns.length ? tagsData.columns.length + " Selected" : " Select Option"}</span>
                                        </button>
                                    </div>
                                    {/* <Button type="button" className="btn btn-brand-theme d-grid col-12 mx-auto text-start " onClick={() => { toggleDropdown() }}>{ tagsData.columns.length ? tagsData.columns.length + " Selected" :" Select Users"}   </Button> */}
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
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label className="form-label">Agenda</Label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data="<p>Hello from CKEditor 5!</p>"
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.

                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        // console.log({ event, editor, data });
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-3 ">
                                <Label className="form-label">Add Attachments</Label>
                                <div className="d-flex align-items-center form-control mb-2">
                                    <div className='attachment-btn'>
                                        <input type="file" className='input' />
                                        <i className='ri ri-attachment-line icon' />
                                    </div>
                                    <span className=" text-black-50 ms-1">filename.doc</span>
                                </div>
                                <p className=" text-black-50 ms-1">  <i className='ri-information-fill me-1 align-bottom' />Entrepreneur is automatically added to this meeting invite.</p>
                            </div>
                        </Col>
                    </Row>
                </OffcanvasBody>
                </SimpleBar>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button type="submit" className="btn btn-brand-theme" onClick={onCloseClick}>
                        Publish Schedule
                    </button>
                    <button className="btn btn-light" onClick={onCloseClick}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default CreateSchedule;
