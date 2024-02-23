import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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

import avatar10 from "../../assets/images/users/avatar-10.jpg";

import { Link } from "react-router-dom";


const Application = ({ show, onCloseClick, toggle }) => {

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
                                                <th className='text-start text-muted'>Your first name? </th>
                                                <td className='text-start'>Vanky</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>And your surname?</th>
                                                <td className='text-start'>Bai</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Your Designation?</th>
                                                <td className='text-start'>Test</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>The type of organization</th>
                                                <td className='text-start'>RRR</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Share the name of the organization</th>
                                                <td className='text-start'>Tree</td>
                                            </tr>
                                            <div className="text-muted">
                                                <h5 className="fs-14 text-muted">Thanks, A brief description of your organisation</h5>
                                                <p className="text-dark">
                                                    er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the r
                                                    Please share a Web link of your organisation
                                                </p>
                                            </div>
                                            <tr>
                                                <th className='text-start text-muted'>Thanks, share an email address that we can use to reach you.</th>
                                                <td className='text-start'>vanky89@yopmail.com</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Share your primary mobile number.</th>
                                                <td className='text-start'>919808899098</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Share a second mobile number, if available.</th>
                                                <td className='text-start'>8797897889</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>We use WhatsApp to send important messages. Please share your WhatsApp number.</th>
                                                <td className='text-start'>918797897899</td>
                                            </tr>
                                        </thead>
                                    </Table>
                                </Col>
                            </Row>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="2">Work details</AccordionHeader>
                        <AccordionBody accordionId="2">
                            <Row className="align-items-center">
                                <Col lg={12}>
                                    <Table className="table-striped">
                                        <thead>
                                            <tr>
                                                <th className='text-start text-muted'>Please share your office address. </th>
                                                <td className='text-start'>test</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start text-muted'>Please share with us your LinkedIn profile.</th>
                                                <td className='text-start'></td>
                                            </tr>
                                            <div className="text-muted">
                                                <h5 className="fs-14 text-muted">In case you don’t have a LinkedIn profile, please share with us your profile in 250 words.</h5>
                                                <p className="text-dark">
                                                </p>
                                            </div>
                                            <div className="text-muted">
                                                <h5 className="fs-14 text-muted">Your domain of expertise and interest will help support and mentor entrepreneurs who come to us.</h5>
                                                <p className="text-dark">
                                                </p>
                                            </div>
                                            <div className="text-muted">
                                                <h5 className="fs-14 text-muted">Please share your domain of expertise..</h5>
                                                <p className="text-dark">
                                                    er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the r
                                                </p>
                                            </div>
                                            <tr>
                                                <th className='text-start text-muted'>Your role?.</th>
                                                <td className='text-start'>Lawyer</td>
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
                            <div className="card-body mb-3">
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
                                    <DropdownToggle className="btn btn-brand-theme" tag="button">
                                        <i className=" ri-eye-fill "></i>
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
                                    className="btn btn-brand-theme"
                                // onClick={onCloseClick}
                                >
                                    <i className="ri-send-plane-fill "></i>
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
                                        <i className="ri-edit-box-line align-bottom"></i>
                                    </button>
                                    <button
                                        className="btn btn-soft-secondary"
                                        onClick={e => setProfileData({ alert: true, id: 1, status: 0 })}
                                    >
                                        <i className="ri-delete-bin-2-fill align-bottom "></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </OffcanvasBody>

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
        </Offcanvas>
    );
};

export default Application;
