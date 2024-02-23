import React, { useEffect, useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Input,
} from "reactstrap";
import { Fragment } from "react";

const data = [
    {
        id: 1,
        companyName: "Watcon Seed 2",
        Scheme: "",
        Instruments: "",
        Value: "30,00,00,000 INR",
        IRR: "",
        isEdit: false
    },
    {
        id: 1,
        companyName: "Watcon Seed 2",
        Scheme: "",
        Instruments: "",
        Value: "30,00,00,000 INR",
        IRR: "",
        isEdit: false
    }
];

const FundHolding = ({ show, onCloseClick }) => {
    const [crmcontacts, setCrmcontacts] = useState(data);

    useEffect(() => {
        setCrmcontacts([...data]);
    }, [show])

    const getInput = (value) => {
        return <Input
            name="number" id="customername-field" className="form-control"
            placeholder="Name Of Scheme" type="text"
            value={value}
            validate={{ required: { value: true }, }}
        />
    };

    const getActionButton = (value) => {
        return <button
            type="button"
            className="btn btn-soft-info  "
            onClick={() => { onEditRow() }}
        >
            Save
        </button>
    }


    const onEditRow = (index) => {

        let obj = {
            id: crmcontacts[index].id,
            companyName: crmcontacts[index].companyName,
            Scheme: getInput(crmcontacts[index].Scheme),
            Instruments: getInput(crmcontacts[index].Instruments),
            Value: getInput(crmcontacts[index].Value),
            IRR: getInput(crmcontacts[index].IRR),
            isEdit: getActionButton(crmcontacts[index].isEdit)
        }
        crmcontacts[index] = obj;
        setCrmcontacts([...crmcontacts])
    }




    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick} className="size-xl">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Fund Holding
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <div className="px-3 mt-3">
                        <div className="table-responsive table-card ">
                            <table className="table table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Campaign Name</th>
                                        <th scope="col">Name Of Scheme</th>
                                        <th scope="col">Number of Instruments</th>
                                        <th scope="col">Total Value</th>
                                        <th scope="col">IRR</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        crmcontacts && crmcontacts.length>0 && crmcontacts.map((val, ind) => {
                                            return <Fragment key={ind}>
                                                <tr>
                                                    <td>{val.companyName}</td>
                                                    <td>{val.Scheme}</td>
                                                    <td>{val.Instruments}</td>
                                                    <td>{val.Value}</td>
                                                    <td>{val.IRR}</td>
                                                    <td>
                                                        <div className="offcanvas-footer text-center hstack gap-2 justify-content-start">
                                                            {
                                                                val.isEdit === false ?
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-soft-secondary"
                                                                        onClick={() => { onEditRow(ind) }}
                                                                    >
                                                                        <i className="ri-edit-box-line align-bottom "></i>
                                                                    </button>
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

export default FundHolding;
