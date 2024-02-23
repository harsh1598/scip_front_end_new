import React, { useEffect, useState } from "react";
import { Fragment } from "react";

import {
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Input,
} from "reactstrap";


const data = [
    {
        id: 1,
        name: "K pvt ltd - Kola Idea 1",
        FinalCommitment: "Entrepreneur",
        TrancheCommitment: "1,35,001 INR",
        AddedDate: "08/05/2023",
        isEdit: false
    }

];

const TrancheDetailsTbl = ({ show, onCloseClick }) => {

    const [crmcontacts, setCrmcontacts] = useState(data);
    const [formData, setFormData] = useState([]);
    
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
                className="btn btn-soft-secondary"
                onClick={() => { handleSubmit(index) }}
            >
                <i className=" ri-check-line align-bottom "></i>
            </button>
            <button
                type="button"
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
            FinalCommitment: crmcontacts[index].FinalCommitment,
            TrancheCommitment: getInput(crmcontacts[index].TrancheCommitment, index, "TrancheCommitment"),
            AddedDate: crmcontacts[index].AddedDate,
            isEdit: getActionButton(index)
        }
        crmcontacts[index] = obj;
        setCrmcontacts([...crmcontacts]);
    }

    const onCancelRow = (index) => {
        // console.log(index);
        crmcontacts[index] = data[index]
        setCrmcontacts([...crmcontacts])
    }

    const submit = () => {
        // console.log(publishTerms)
    }

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-md"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Import Tranche Commitment Details
            </OffcanvasHeader>
        
            <form onSubmit={e => handleSubmit(e)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <div className="px-3 mt-2">
                        <div className="table-responsive table-card ">
                            <table className="table table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Investor Name</th>
                                        <th scope="col">Final Commitment</th>
                                        <th scope="col">Tranche Commitment</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        crmcontacts && crmcontacts.length > 0 && crmcontacts.map((val, ind) => {
                                            return <Fragment key={ind}>
                                                <tr>
                                                    <td>{val.name}</td>
                                                    <td>{val.FinalCommitment}</td>
                                                    <td>{val.TrancheCommitment}</td>
                                                    <td>{val.AddedDate}</td>
                                                    <td>
                                                        <div className="offcanvas-footer   text-center hstack gap-2 justify-content-start">

                                                            {
                                                                val.isEdit === false ?
                                                                    <>
                                                                        <button
                                                                            type="button"
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
                </OffcanvasBody>
            </form>
        </Offcanvas>
    );
};

export default TrancheDetailsTbl;
