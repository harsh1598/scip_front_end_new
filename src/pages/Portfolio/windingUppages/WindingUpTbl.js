import React, { useMemo , useState } from "react";
import { Row, UncontrolledDropdown, UncontrolledTooltip, DropdownToggle} from "reactstrap";
import TableContainer from "../../../Components/Common/TableContainer";
import WindingUpTblFilter from "./WindingUpTblFilter";

const crmcontacts = [
    {
        id: 1,
        name: "Planta (Utava Co) ",
        totalinvestment: "3,24,57,989",
        noofround: "3",
        noofinvestors: "14",
    },
];

const WindingUpTbl = () => {

    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggleModel = (name) => {
      setModelName(name);
    };

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
    }

    var result = Object.keys(formData).map((key) => [key, formData[key]]);

    crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });
    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "#",
                accessor: 'serial'
            },
            {
                Header: "Company & Brand name",
                accessor: "name",
                filterable: false,
            },
            {
                Header: "Total investment",
                accessor: "totalinvestment",
                filterable: false,
            },
            {
                Header: "No of Rounds",
                accessor: "noofround",
                filterable: false,
            },
            {
                Header: "No of Rounds",
                accessor: "noofinvestors",
                filterable: false,
            },
            {
                Header: "Action",
                Cell: (cellProps) => {
                    // console.log(cellProps.row.original.type );
                    return (
                        <>
                            <ul className="list-inline hstack gap-2 mb-0">
                                <li className="list-inline-item">
                                    <UncontrolledDropdown>
                                        <UncontrolledTooltip placement="bottom" target="Campaign">Manage Campaign</UncontrolledTooltip>
                                        <DropdownToggle href="#" className="btn btn-soft-secondary btn-md dropdown me-2" tag="button" id="Campaign" onClick={e => toggleModel('Profile')}>
                                            <i className="ri-arrow-right-up-line  align-middle"></i>
                                        </DropdownToggle>
                                    </UncontrolledDropdown>
                                </li>
                            </ul>
                        </>
                    );
                },
            },
        ],

    );

    return (
        <React.Fragment>
              <Row>
                <div className="col-sm-auto ms-auto">
                    <div className="hstack gap-2 flex-wrap">
                        <button type="button" className="btn btn-soft-info"
                            onClick={e => toggleModel('WindingUpTblFilter')} >
                            <i className="ri-filter-2-line align-bottom me-1"></i>{" "}
                            Filters
                        </button>
                        <button type="button" className="btn btn-soft-info">
                            <i className="mdi mdi-export align-bottom me-1"></i>{" "}
                            Export
                        </button>
                    </div>
                </div>
            </Row>
            {
                Object.values(formData).every(x => x === null || x === '') === false &&
                <Row>
                    <div className="filter-choices-input mt-2">
                    <div className="choices">
                        <div className="choices__inner">
                        <div className="choices__list choices__list--multiple">
                            {result.map((item, index) => {
                            if (item[0] && item[1]) {

                                if (item[1].value) {
                                return <div key={index} className="choices__item choices__item--selectable">{item[1].value} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                } else {
                                return <div key={index} className="choices__item choices__item--selectable">{item[1]} {" "} <i className="ri-close-line align-bottom me-1 " onClick={e => handleRemoveFilter(item[0])} ></i></div>;
                                }

                            } else { return ''; }
                            })
                            }
                        </div>
                        </div>
                    </div>
                    </div>
                </Row>
            }
            <div className="px-3 mt-3">
                {
                    crmcontacts.length ?
                        <>
                            <TableContainer
                                columns={columns}
                                data={(crmcontacts || [])}
                                dataCount={crmcontacts.length}
                                isAddUserList={false}
                                customPageSize={8}
                                className="custom-header-css"
                                divClass="table-responsive table-card mb-3"
                                tableClass="align-middle table-nowrap"
                                theadClass="table-light"
                                isContactsFilter={true}
                            />
                        </>
                        :
                        (<div className="py-4 text-center">
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
                        </div>)
                }
            </div>
            <WindingUpTblFilter 
                formData={formData} setFormData={setFormData}
                show={modelName === 'WindingUpTblFilter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default WindingUpTbl;
