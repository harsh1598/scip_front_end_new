import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
import SweetAlert from 'react-bootstrap-sweetalert';

import {
    Table,
    Col,
    Row,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    DropdownToggle,
    DropdownMenu,
    Label,
    Input,
    Dropdown,
} from "reactstrap";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import avatar10 from "../../assets/images/users/avatar-10.jpg";
import { Link } from "react-router-dom";

const Application = ({ show, onCloseClick , toggle  }) => {

    const [open, setOpen] = useState('1');
    const [tagsData, setTagsData] = useState({ columns: "" });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profileData, setProfileData] = useState({ alert: false, id: "", status: "" });

    const submit = () => {
        // console.log(profileData)
    }

    //Toggle Accordion
    const toggleAccordion = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    const radioList = [
        { value: 'Admin', label: 'Admin' },
        { value: 'Investor', label: 'Investor' },
        { value: 'SME Advisor', label: 'SME Advisor' },
    ];


    const formhandler = (e, field, type = '') => {

        let data = { ...tagsData };
        if (e.target.checked) {

            if (!data[field]) { data[field] = []; }
            data[field].push(e.target.value);

        } else {

            var index = data[field].indexOf(e.target.value);
            if (index !== -1) {
                data[field].splice(index, 1);
            }
        }
        setTagsData(data);
    }

    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    const handleSubmit = () => {

    }

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-xl">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Details
            </OffcanvasHeader>
            <OffcanvasBody>
                <Accordion className="custom-accordionwithicon-plus" open={open} toggle={toggleAccordion} >
                    <AccordionItem>
                        <AccordionHeader targetId="1">Account Details</AccordionHeader>
                        <AccordionBody accordionId="1">
                            <Row className="align-items-center">
                                <Col lg={12}>
                                    <Table className="table-striped">
                                        <thead>
                                            <tr>
                                                <th className='text-start text-muted'>First Name</th>
                                                <td className='text-start'>pooja</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Last Name </th>
                                                <td className='text-start'>Tadiwale</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Phone Number </th>
                                                <td className='text-start'>8659585458</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Email ID </th>
                                                <td className='text-start'>pooja56@yopmail.com</td>
                                            </tr>
                                            <tr>
                                                <div className="form-check">
                                                    <th className='text-start '>
                                                        <Input
                                                            className="form-check-input me-3"
                                                            type="checkbox"
                                                            name="columns"
                                                            id="columns"
                                                            checked={true}
                                                        />
                                                    </th>
                                                    <td className='text-start text-muted'>
                                                        I certify that I am eligible to be an Angel Investor and understand that investment opportunities facilitated by White Whale Advisors LLP may be illiquid and high risk in nature.
                                                    </td>
                                                </div>
                                            </tr>
                                            <tr>
                                                <div className="form-check">
                                                    <th className='text-start '>
                                                        <Input
                                                            className="form-check-input me-3"
                                                            type="checkbox"
                                                            name="columns"
                                                            id="columns"
                                                            checked={true}
                                                        />
                                                    </th>
                                                    <td className='text-start text-muted'>
                                                        I accept/agree with the Terms and Conditions ("Membership Terms & Conditions")
                                                    </td>
                                                </div>
                                            </tr>
                                        </thead>
                                    </Table>
                                </Col>
                            </Row>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="2">Start-up Details</AccordionHeader>
                        <AccordionBody accordionId="2">
                            <Row className="align-items-center">
                                <Col lg={12}>
                                    <Table className="table-striped">
                                        <thead>
                                            <tr>
                                                <th className='text-start text-muted'>Company Name </th>
                                                <td className='text-start'>Pooja Wine</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Designation</th>
                                                <td className='text-start'>CEO</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Sector Expertise</th>
                                                <td className='text-start'>All</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Target Investment Amount </th>
                                                <td className='text-start'>25 Lakhs to 1 Crore</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Investment Horizon</th>
                                                <td className='text-start'>Medium Term 2-5 Years</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Companies Invested in the past</th>
                                                <td className='text-start'>7</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>What role would you like to play in our network? </th>
                                                <td className='text-start'>Passive Investor</td>
                                            </tr>
                                        </thead>
                                    </Table>
                                </Col>
                            </Row>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="3">Subscription</AccordionHeader>
                        <AccordionBody accordionId="3">
                            <Row className="align-items-center">
                                <Col lg={12}>
                                    <Table className="table-striped">
                                        <thead>
                                            <tr>
                                                <th className='text-start text-muted'>Select subscription</th>
                                                <td className='text-start'></td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Membership Type (select as appropriate)</th>
                                                <td className='text-start'></td>
                                            </tr>

                                        </thead>
                                    </Table>
                                </Col>
                            </Row>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="4">Comments</AccordionHeader>
                        <AccordionBody accordionId="4">
                            <div className="card-body">
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
                            <div className="offcanvas-footer p-1 text-center hstack gap-2 justify-content-end">
                                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="ms-1 topbar-head-dropdown header-item">
                                    <DropdownToggle className="btn btn-soft-secondary" tag="button">
                                        <i className=" ri-eye-fill align-bottom"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="notify-item language p-2">
                                        {
                                            radioList.map((item, key) => {
                                                let check = tagsData.columns && tagsData.columns.length && tagsData.columns.includes(item.value) ? true : false;
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
                                    </DropdownMenu>
                                </Dropdown>
                                <button
                                    className="btn btn-soft-secondary"
                                // onClick={onCloseClick}
                                >
                                    <i className="ri-send-plane-fill align-bottom "></i>
                                </button>
                            </div>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
                <div className="mt-2 p-2 border-bottom">
                    <ul className="list-unstyled vstack gap-3 mb-0">
                        <li>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={avatar10} alt="" className="avatar-md rounded-circle" />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <h6 className="mb-1"><Link to="/pages-profile" className='text-reset'>Tonya Noble</Link></h6>
                                    <p className="text-muted mb-0">nbv</p>
                                </div>
                                <div className="offcanvas-footer p-3 text-center hstack gap-2 justify-content-end">
                                <div className="flex-grow-1 me-2">
                                    <p className="text-dark mb-0">21/07/2023</p>
                                </div>
                                    <button
                                        className="btn btn-soft-secondary"
                                        onClick={e => toggle('ApplicationComment')}
                                    >
                                        <i className="ri-edit-box-line align-bottom  "></i>
                                    </button>
                                    <button
                                        className="btn btn-soft-secondary"
                                        onClick={e => setProfileData({ alert: true, id: 1, status: 0 })}
                                    >
                                        <i className=" ri-delete-bin-2-fill align-bottom "></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <SweetAlert
                    custom
                    show={profileData.alert}
                    btnSize="md"
                    showCancel
                    showProfile
                    showCloseButton
                    confirmBtnText="Yes"
                    cancelBtnText="Cancel"
                    confirmBtnBsStyle="success"
                    cancelBtnBsStyle="danger"
                    onConfirm={submit}
                    onCancel={e => setProfileData({ alert: false, id: "", status: "" })}
                >
                    Are you sure you want to delete this comment?
                </SweetAlert>
            </OffcanvasBody>

        </Offcanvas>
    );
};

export default Application;
