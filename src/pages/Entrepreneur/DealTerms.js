import React, { useEffect, useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Input,
    Col,
    Row,
    DropdownToggle,
    UncontrolledDropdown,
    DropdownMenu,
    Dropdown,
    DropdownItem
} from "reactstrap";
import { Fragment } from "react";
import SweetAlert from 'react-bootstrap-sweetalert';

const data = [
    {
        id: 1,
        Name: "hoshz as",
        class: "Class A",
        minAmount: "0",
        finalAmount: "1000000",
        carts: "5",
        testing: "34",
        trewwe: "",
        qweqw: "",
        yuioiu: "",
        UpdatedDate: "",
        isEdit: false
    },
    {
        id: 2,
        Name: "hoshz as",
        class: "Class A",
        minAmount: "0",
        finalAmount: "1000000",
        carts: "5",
        testing: "34",
        trewwe: "",
        qweqw: "8785",
        yuioiu: "",
        UpdatedDate: "",
        isEdit: false
    },
    {
        id: 3,
        Name: "hoshz as",
        class: "Class A",
        minAmount: "0",
        finalAmount: "1000000",
        carts: "5",
        testing: "34",
        trewwe: "",
        qweqw: "",
        yuioiu: "789",
        UpdatedDate: "",
        isEdit: false
    },

];

const DealTerms = ({ show, onCloseClick, toggle, ind }) => {
    const [crmcontacts, setCrmcontacts] = useState(data);
    const [publishTerms, setPublishTerms] = useState({ alert: false, id: "", status: "", ind: "" });
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        setCrmcontacts([...data]);
    }, [show]);

    const getInput = (value, ind, name) => {

        return <Input
            name={name} id="customername-field" className="form-control"
            placeholder={name} type="text"
            value={value}
            onChange={e => handleChange(name, e, ind)}
            validate={{ required: { value: true }, }}
        />
    };

    const handleChange = (name, event, index = null) => {

        let obj = { fieldName: name, fieldValue: event.target.value, filedIndex: index };
        let list = [...crmcontacts];
        list[index][name] = getInput(event.target.value, index, name);
        setCrmcontacts(list);
        setFormData(obj)
    }

    const handleSubmit = (index) => {

        // console.log(crmcontacts[index].carts.props.value);
        // console.log(crmcontacts[index].testing.props.value);
    }

    const getActionButton = (index) => {

        return <>
            <button
                type="button"
                // className="btn btn-light "
                className="btn btn-soft-secondary"
                onClick={() => { handleSubmit(index) }}
            >
                <i className=" ri-check-line align-bottom "></i>
            </button>
            <button
                type="button"
                // className="btn btn-light  "
                className="btn btn-soft-secondary"
                onClick={() => { onCancelRow(index) }}
            >
                <i className=" ri-close-line align-bottom "></i>
            </button>
        </>
    }

    const onEditRow = (index) => {

        let obj = {
            id: crmcontacts[index].id,
            Name: crmcontacts[index].Name,
            class: crmcontacts[index].class,
            minAmount: crmcontacts[index].minAmount,
            finalAmount: crmcontacts[index].finalAmount,
            carts: crmcontacts[index].carts === "" ? crmcontacts[index].carts : getInput(crmcontacts[index].carts, index, "carts"),
            testing: crmcontacts[index].testing === "" ? crmcontacts[index].testing : getInput(crmcontacts[index].testing, index, "testing"),
            trewwe: crmcontacts[index].trewwe === "" ? crmcontacts[index].trewwe : getInput(crmcontacts[index].trewwe, index, "trewwe"),
            qweqw: crmcontacts[index].qweqw === "" ? crmcontacts[index].qweqw : getInput(crmcontacts[index].qweqw, index, "qweqw"),
            yuioiu: crmcontacts[index].yuioiu === "" ? crmcontacts[index].yuioiu : getInput(crmcontacts[index].yuioiu, index, "yuioiu"),
            UpdatedDate: crmcontacts[index].UpdatedDate,
            isEdit: getActionButton(index)
        }
        crmcontacts[index] = obj;
        setCrmcontacts([...crmcontacts]);
    }

    const onCancelRow = (index) => {

        crmcontacts[index] = data[index]
        setCrmcontacts([...crmcontacts])
    }

    const submit = () => {
        // console.log(publishTerms)
    }

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-xl">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Deal Terms Info
            </OffcanvasHeader>

            <form onSubmit={e => handleSubmit(e)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row className="g-0 align-items-center mb-2">
                        <Col sm={4}>
                            <div className="search-box">
                                <Input
                                    type="text"
                                    className="form-control search"
                                    placeholder="Search"
                                />
                                <i className="ri-search-line search-icon"></i>
                            </div>
                        </Col>
                        <div className="col-sm-auto ms-auto">
                            <div className="hstack gap-2 flex-wrap">
                                <UncontrolledDropdown>
                                    <DropdownToggle
                                        // className="btn btn-soft-info btn-icon fs-14"
                                        className="btn btn-soft-secondary dropdown"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="ri-settings-4-line"></i>
                                    </DropdownToggle>
                                    <DropdownMenu
                                    >
                                        <li>
                                            <DropdownItem>
                                                <i className=" ri-file-text-line  align-bottom me-1 "></i> Publish
                                            </DropdownItem>
                                        </li>
                                        <li>
                                            <DropdownItem>
                                                <i className=" ri-close-line  align-bottom me-1 "></i>  UnPublish
                                            </DropdownItem>
                                        </li>
                                        <li>
                                            <DropdownItem onClick={e => toggle('DealTermsClass', ind, 'preCampaign')}>
                                                <i className=" ri-pencil-line align-bottom me-1 " ></i> Edit as per class
                                            </DropdownItem>
                                        </li>
                                        <li>
                                            <DropdownItem onClick={e => toggle('DealTermsClass', ind, 'preCampaign')}>
                                                <i className=" ri-pencil-line align-bottom me-1 "></i> Edit Minimum Amount
                                            </DropdownItem>
                                        </li>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </div>
                    </Row>
                    <div className="px-3 mt-5">
                        <div className="table-responsive table-card ">
                            <table className="table table-nowrap mb-0">
                                <thead className="table-light">
                                    {/* style={{ width: "80%" }} */}
                                    <tr>
                                        <th scope="col">Sr.no</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Class</th>
                                        {/* <th scope="col">Soft Minimum  Amount</th> */}
                                        <th scope="col">
                                            <div className="hstack gap-1 flex-wrap">
                                                <span>Soft </span>
                                                <span> Minimum</span>
                                                <span>Amount </span>
                                            </div>
                                        </th>
                                        {/* <th scope="col">Final Minimum Amount</th> */}
                                        <th scope="col">
                                            <div className="hstack gap-1 flex-wrap">
                                                <span>Final </span>
                                                <span>Minimum</span>
                                                <span> Amount</span>
                                            </div>
                                        </th>
                                        <th scope="col">Carts</th>
                                        <th scope="col">Testing</th>
                                        <th scope="col">Trewwe</th>
                                        <th scope="col">Qweqw</th>
                                        <th scope="col">Yuioiu</th>
                                        {/* <th scope="col">Updated Date</th> */}
                                        <th scope="col">
                                            <div className="hstack gap-1 flex-wrap">
                                                <span> Updated </span>
                                                <span> Date</span>
                                            </div>
                                        </th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        crmcontacts && crmcontacts.length > 0 && crmcontacts.map((val, ind) => {
                                            return <Fragment key={ind}>
                                                <tr>
                                                    <td>{ind + 1}</td>
                                                    <td>{val.Name}</td>
                                                    <td>{val.class}</td>
                                                    <td>{val.minAmount}</td>
                                                    <td>{val.finalAmount}</td>
                                                    <td>{val.carts}<span> {val.isEdit === false && "%"}</span></td>
                                                    <td>{val.testing}<span> {val.isEdit === false && "%"}</span></td>
                                                    <td>{val.trewwe}</td>
                                                    <td>{val.qweqw}</td>
                                                    <td>{val.yuioiu}</td>
                                                    <td>{val.UpdatedDate}</td>
                                                    <td>
                                                        <div className="offcanvas-footer   text-center hstack gap-2 justify-content-start">

                                                            {
                                                                val.isEdit === false ?
                                                                    <>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-soft-secondary"

                                                                            // className="btn btn-soft-info "
                                                                            onClick={e => setPublishTerms({ alert: true, id: val.id, status: 0, ind: ind })}
                                                                        >
                                                                            <i className=" ri-profile-line  align-bottom "></i>
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            // className="btn btn-soft-info "
                                                                            className="btn btn-soft-secondary"
                                                                            onClick={() => { onEditRow(ind) }}
                                                                        >
                                                                            <i className="ri-edit-box-line align-bottom "></i>
                                                                        </button>

                                                                    </>
                                                                    :
                                                                    <>
                                                                        {val.isEdit}
                                                                    </>
                                                            }
                                                        </div>
                                                    </td>
                                                </tr>
                                            </Fragment>
                                        })
                                    }
                                    {crmcontacts.length === 0 &&
                                        <tr>
                                            <th colSpan="100%"><div className="py-4 text-center">
                                                <div>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/msoeawqm.json"
                                                        trigger="loop"
                                                        colors="primary:#405189,secondary:#0ab39c"
                                                        style={{ width: "72px", height: "72px" }}
                                                    ></lord-icon>
                                                </div>

                                                <div className="mt-4">
                                                    <h5>Sorry! No Result Found</h5>
                                                </div>
                                            </div></th>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <SweetAlert
                        custom
                        show={publishTerms.alert}
                        btnSize="md"
                        showCancel
                        showProfile
                        showCloseButton
                        confirmBtnText="Ok"
                        cancelBtnText="Cancel"
                        title=""
                        confirmBtnBsStyle="primary"
                        cancelBtnBsStyle="danger"
                        onConfirm={submit}
                        onCancel={e => setPublishTerms({ alert: false, id: "", status: "", ind: "" })}
                    >
                        Are you sure you want to do this action?
                    </SweetAlert>
                </OffcanvasBody>
            </form>
            <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                <button
                    className="btn btn-light  "
                    onClick={onCloseClick}
                >
                    Cancel
                </button>
            </div>
        </Offcanvas>
    );
};

export default DealTerms;
