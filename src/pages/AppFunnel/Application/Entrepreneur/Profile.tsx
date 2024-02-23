import { useState } from "react";
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
    Collapse,
} from "reactstrap";
import avatar10 from "../../../../assets/images/users/avatar-10.jpg";
import { Link } from "react-router-dom";
import classnames from "classnames";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface propData {
    show: boolean;
    onCloseClick: any;
    toggleModel: any;
};

const Profile = (props: propData) => {

    const [open, setOpen] = useState('1');
    const [tagsData, setTagsData] = useState({ columns: "" });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profileData, setProfileData] = useState({ alert: false, id: 0 });
    const [col1, setcol1] = useState(true);
    const [col2, setcol2] = useState(false);

    const t_col1 = () => {
        setcol1(!col1);
        setcol2(false);
    };

    const t_col2 = () => {
        setcol2(!col2);
        setcol1(false);
    };

    const submit = () => {
        // console.log(profileData)
    }

    //Toggle Accordion
    const toggleAccordion = (id: any) => {
        if (open === id) {
            setOpen("");
        } else {
            setOpen(id);
        }
    };

    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    const radioList = [
        { value: 'Admin', label: 'Admin' },
        { value: 'Investor', label: 'Investor' },
        { value: 'SME Advisor', label: 'SME Advisor' },
    ];

    const formhandler = (e: any, field: any, type: any = '') => {

        let data: any = { ...tagsData };
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

    return (
        <Offcanvas direction="end" isOpen={props.show} id="offcanvasExample" toggle={props.onCloseClick} className="size-xl">
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                Details
            </OffcanvasHeader>
            <OffcanvasBody>
                <div className="accordion custom-accordionwithicon-plus">
                    <AccordionItem>
                        <h2 className="accordion-header" id="headingOne">
                            <button className={classnames("accordion-button", { collapsed: !col1 })} type="button" onClick={t_col1} style={{ cursor: "pointer" }}> Account Details </button>
                        </h2>
                        <Collapse isOpen={col1} className="accordion-collapse" id="collapseOne">
                            <div className="accordion-body p-0">
                                <Row className="align-items-center">
                                    <Col lg={12}>
                                        <Table className="table-striped">
                                            <thead>
                                                <tr>
                                                    <th className='text-start text-muted'>Entrepreneur's first name? </th>
                                                    <td className='text-start'>Suresh</td>
                                                </tr>
                                                <tr>
                                                    <th className='text-start text-muted'>Entrepreneur's surname? </th>
                                                    <td className='text-start'>S</td>
                                                </tr>
                                                <tr>
                                                    <th className='text-start text-muted'>Share Entrepreneur's email address. </th>
                                                    <td className='text-start'>ss@yopmail.com</td>
                                                </tr>
                                                <tr>
                                                    <th className='text-start text-muted'>Entrepreneur's primary mobile number. </th>
                                                    <td className='text-start'>5676545656</td>
                                                </tr>
                                            </thead>
                                        </Table>
                                    </Col>
                                </Row>
                            </div>
                        </Collapse>
                    </AccordionItem>
                    <AccordionItem>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className={classnames("accordion-button", { collapsed: !col2 })} type="button" onClick={t_col2} style={{ cursor: "pointer" }}> Comments </button>
                        </h2>
                        <Collapse isOpen={col2} className="accordion-collapse">
                            <div className="accordion-body"> Coming soon </div>
                            <div className="card-body">
                                {/* <CKEditor
                                    editor={ClassicEditor}
                                    data="<p>Hello from CKEditor 5!</p>"
                                    onReady={(editor:any) => {
                                        // You can store the "editor" and use when it is needed.

                                    }}
                                    onChange={(event:any, editor:any) => {
                                        const data = editor.getData();
                                        // console.log({ event, editor, data });
                                    }}
                                /> */}
                            </div>
                            <div className="offcanvas-footer p-1 text-center hstack gap-2 justify-content-end">
                                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="ms-1 topbar-head-dropdown header-item">
                                    <DropdownToggle className="btn btn-soft-secondary" tag="button">
                                        <i className="ri-eye-fill align-bottom"></i>
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
                                    <i className="ri-send-plane-fill align-bottom"></i>
                                </button>
                            </div>
                        </Collapse>
                    </AccordionItem>
                </div>
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
                                    >
                                        <i className="ri-edit-box-line align-bottom"></i>
                                    </button>
                                    <button
                                        className="btn btn-soft-secondary"
                                        onClick={e => setProfileData({ alert: true, id: 1 })}
                                    >
                                        <i className=" ri-delete-bin-2-fill align-bottom"></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default Profile;
