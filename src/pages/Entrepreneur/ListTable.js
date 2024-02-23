import React, { useEffect, useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Input, Row, } from "reactstrap";
import { Fragment } from "react";
import SweetAlert from 'react-bootstrap-sweetalert';


const data = [
    {
        id: 1,
        name: "Abhaya Kumar Shankar",
        Investment: "Abhaya Kumar Shankar",
        Membership: "Individual",
        Folio: " ",
        Instrument: "Equity",
        NumberofInstruments: "",
        PricePerInstrument: "200 USD ",
        TotalValue: "4,00,000 USD",
        RetainedValue: "",
        ShareDoc: "",
        InvestmentDate: "08/05/2023",
        UpdatedDate: "08/05/2023 ",
        isEdit: false
    }

];

const ListTable = ({ show, onCloseClick, toggle, ind }) => {
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
            name: crmcontacts[index].name,
            // Investment: crmcontacts[index].Investment,
            Investment: getInput(crmcontacts[index].Investment, index, "Investment"),
            Membership: crmcontacts[index].Membership,
            Folio: getInput(crmcontacts[index].Folio, index, "Folio"),
            Instrument: getInput(crmcontacts[index].Instrument, index, "Instrument"),
            NumberofInstruments: getInput(crmcontacts[index].NumberofInstruments, index, "NumberofInstruments"),
            PricePerInstrument: getInput(crmcontacts[index].PricePerInstrument, index, "PricePerInstrument"),
            TotalValue: getInput(crmcontacts[index].TotalValue, index, "TotalValue"),
            RetainedValue: crmcontacts[index].RetainedValue === "" ? crmcontacts[index].RetainedValue : getInput(crmcontacts[index].RetainedValue, index, "RetainedValue"),
            ShareDoc: crmcontacts[index].ShareDoc,
            InvestmentDate: getInput(crmcontacts[index].InvestmentDate, index, "InvestmentDate"),
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
                Share Register
            </OffcanvasHeader>

            <form onSubmit={e => handleSubmit(e)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row className="mb-2">
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                <h6 className="text-muted fw-normal">
                                    <span>1.{" "}Please click on export and download the excel.</span>
                                </h6>
                                <h6 className="text-muted fw-normal">
                                    <span>2.{" "}Click on import – download the CSV file.</span>
                                </h6>
                                <h6 className="text-muted fw-normal">
                                    <span>3.{" "}CSV file is a sample excel, add the data from export file to the CSV file.</span>
                                </h6>
                                <h6 className="text-muted fw-normal" >
                                    <span>4.{" "}Click on import and upload the prepared CSV file.</span>

                                </h6>
                            </div>
                            <div className="flex-shrink-0 mt-sm-0 mt-3">
                                <div className="hstack gap-2 flex-wrap">
                                    <button type="button" className="btn btn-light waves-effect waves-light" onClick={e => toggle('Import')} > Import</button>
                                    <button type="button" className="btn btn-light waves-effect waves-light" > Export </button>
                                    <button type="button" className="btn btn-light waves-effect waves-light" onClick={e => setPublishTerms({ alert: true })} > Restore </button>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <div className="px-3 mt-5">
                        <div className="table-responsive table-card ">
                            <table className="table table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Investor Name</th>
                                        <th scope="col">
                                            <div className="hstack gap-1 flex-wrap">
                                                <span> Investment in  </span>
                                                <span> the name of </span>
                                            </div>
                                        </th>
                                        <th scope="col">Membership</th>
                                        <th scope="col">Folio No</th>
                                        <th scope="col">Instrument</th>
                                        <th scope="col">
                                            <div className="hstack gap-1 flex-wrap">
                                                <span>Number of  </span>
                                                <span> Instruments</span>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="hstack gap-1 flex-wrap">
                                                <span>Price Per  </span>
                                                <span>Instrument</span>
                                            </div>
                                        </th>
                                        <th scope="col">Total Value</th>
                                        {/* <th scope="col">Retained Value</th> */}
                                        <th scope="col">Share Doc </th>
                                        <th scope="col">
                                            <div className="hstack gap-1 flex-wrap">
                                                <span> Investment </span>
                                                <span> Date</span>
                                            </div>
                                        </th>
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
                                                    <td>{val.name}</td>
                                                    <td>{val.Investment}</td>
                                                    <td>{val.Membership}</td>
                                                    <td>{val.Folio}</td>
                                                    <td>{val.Instrument}</td>
                                                    <td>{val.NumberofInstruments}</td>
                                                    <td>{val.PricePerInstrument}</td>
                                                    <td>{val.TotalValue}<span> {val.isEdit === false && "INR "}</span></td>
                                                    <td>    
                                                    <button
                                                        type="button" className="btn btn-soft-secondary ms-3">
                                                        <i className="ri-download-2-fill align-bottom "></i>
                                                    </button></td>
                                                    <td>{val.InvestmentDate}</td>
                                                    <td>{val.UpdatedDate}</td>
                                                    <td>
                                                        <div className="offcanvas-footer   text-center hstack gap-2 justify-content-start">

                                                            {
                                                                val.isEdit === false ?
                                                                    <>
                                                                        <button
                                                                            type="button"
                                                                            // className="btn btn-soft-info "
                                                                            className="btn btn-soft-secondary"
                                                                            onClick={() => { onEditRow(ind) }}
                                                                        >
                                                                            <i className="ri-edit-box-line align-bottom "></i>
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-soft-secondary"

                                                                            // className="btn btn-soft-info "
                                                                            onClick={e => toggle('UploadCertificate')}
                                                                        >
                                                                            <i className=" ri-upload-2-fill  align-bottom "></i>
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-soft-secondary"

                                                                            // className="btn btn-soft-info "
                                                                            onClick={e => toggle('DeleteShareRegister')}
                                                                        >
                                                                            <i className=" ri-delete-bin-5-fill align-bottom "></i>
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

export default ListTable;
