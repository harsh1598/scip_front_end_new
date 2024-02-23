import React, { useState , useEffect} from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
    Input,
    Button,
} from "reactstrap";
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';


const AddEditPaymentType = ({ show, onCloseClick, formData, setFormData }) => {
    const [paymentList, setPaymentList] = useState([{ currency: "", amount: "", default: "" }]);
    const [errorMsg, setErrorMsg] = useState({ ind: "", msg: "" });
    const [error, seterror] = useState(false);

    const handleChange = (name, event, index = '', type = '') => {

        let from = { ...formData };
        if (index !== '') {
            if (type === 'p') {
                let list = [...paymentList];
                if (name === "currency") {
                    let status = uniqueCurrency(event);
                    if (!status) {
                        list[index][name] = event;
                        setErrorMsg({ ind: "", msg: "" });
                    } else {
                        setErrorMsg({ ind: index, msg: "Duplicate currency selected" });
                    }
                } else {
                    list[index][name] = event.target.value;
                }
                setPaymentList(list);
            }
        } else {
            from[name] = event.target.value;
            setFormData({ ...formData, ...from });
        }

    }

    const uniqueCurrency = (name) => {
        if (name) {
            for (let x in paymentList) {
                let row = paymentList[x];
                if (row.currency) {
                    if (row.currency['value'] === name.value) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        }
    }

    // handle click event of the Remove button
    const handleRemoveClick = (index, type = "p") => {

        if (type === 'p') {

            const list = [...paymentList];
            if (list.length > 1) {
                list.splice(index, 1);
                setPaymentList(list);
            } else {
                seterror(true)
            }
        }

    };

    // handle click event of the Add button
    const handleAddClick = (type = "p") => {

        if (type === 'p') {
            if (paymentList.length < 5) {
                let temp = { currency: "", amount: "", default: "" }
                paymentList.push(temp);
                setPaymentList([...paymentList]);
            }
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

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                seterror(false)
            }, 3000);
        }
    }, [ error]);

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-md"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                {formData.id ? "Edit Payment Type" : "Add Payment Type"}
            </OffcanvasHeader>
            {/*  h-100          <span className='text-danger'>*</span>*/}

            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-2">
                                    <Label htmlFor="name-field" className="form-label">Title <span className='text-danger'>*</span></Label>
                                    <Input
                                        name="name" id="customername-field"
                                        className="form-control" placeholder="" type="text"
                                        value={formData.title ? formData.title : ""}
                                        validate={{
                                            required: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">Description<span className='text-danger'>*</span> </Label>
                                    <textarea className="form-control"
                                        id="note" rows="3"
                                        value={formData.desc ? formData.desc : ""}
                                        defaultValue=""></textarea>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="timezone" className="form-label">User Type<span className='text-danger'>*</span> </Label>
                                    <Select
                                        isClearable={true}
                                        // isMulti
                                        name="user"
                                        value={formData.user ? formData.user : []}
                                        onChange={e => handleChange("user", e, 'multi')}
                                        options={CompanyStageList}
                                    />
                                </div>
                            </Col>
                        </Row>
                        {error && error ? (
                            <>
                                {toast("Cannot delete the first row.", { position: "top-right", hideProgressBar: false, className: 'bg-success text-white', progress: undefined, toastId: "" })}
                                <ToastContainer autoClose={2000} limit={1} />
                                {/* <Alert color="success">
                                    Register User Successfully and Your Redirect To Login Page...
                                </Alert> */}
                            </>
                        ) : null}
                        <table class="table table-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Default</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paymentList.length > 0 && paymentList.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">
                                                {index + 1}
                                            </th>
                                            <td>
                                                <Select isClearable={true} placeholder="Select"
                                                    // isMulti
                                                    value={item.currency ? item.currency : ""}
                                                    name="currency"
                                                    options={CompanyStageList}
                                                    onChange={(e) => handleChange("currency", e, index, 'p')}
                                                />
                                                {
                                                    errorMsg.ind === index &&
                                                    <small className="text-danger">{errorMsg.msg}</small>
                                                }

                                            </td>
                                            <td>
                                                <Input type="number" placeholder="Enter Amount"
                                                    name="amount"
                                                    Value={item.amount ? item.amount : ""}
                                                    onChange={e => handleChange("amount", e, index, 'p')}
                                                    required />
                                            </td>
                                            <td>
                                                <div class="form-check form-check-inline py-2">
                                                    <input class="form-check-input" type="radio" name="default" id="inlineRadio1"
                                                        value="1"
                                                        onChange={e => handleChange("default", e, index, 'p')}
                                                        checked={item.default == 1} />
                                                </div>
                                            </td>
                                            <td>
                                                <Button className="btn-soft-danger" onClick={() => handleRemoveClick(index, 'p')}>
                                                    <i className="ri-close-line align-bottom " />
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div className="mt-3">
                            <button type="button" onClick={() => handleAddClick('p')} className="btn btn-soft-secondary ">
                                <i className="ri-add-line align-bottom " />
                            </button>
                        </div>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="button"
                        className="btn btn-brand-theme  "
                        onClick={onCloseClick}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
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

export default AddEditPaymentType;
