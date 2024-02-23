import React, { useState, useMemo } from "react";
import { Col, Container, Row, CardHeader, Input, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import TableContainer from "../../../../Components/Common/TableContainer";
import DirectPaymentFilter from "./DirectPaymentFilter";
import OfflinePaymentModal from "./OfflinePaymentModal";
import OnlinePaymentModal from "./OnlinePaymentModal";

const DirectPayment = () => {

    document.title = `${ProjectName} | Payment`;
    const [modelName, setModelName] = useState("");
    const [formData, setFormData] = useState({});

    const toggleModel = (name, data = {}) => {
        setModelName(name);
        setFormData({});
        if (data.id) {
            let editData = {
                id: data.id,
                title: data.code,
                name: data.code,
                email: data.code,
                expiryDate: data.code,
                documentId: data.code,
                status: data.code,
                updatedDate: data.code,
            }
            setFormData(editData);
        }
    };

    const submit = () => {
        // console.log(profileData)
    }

    const crmcontacts = [
        {
            id: 1,
            name: " Ronit Alarronit89@yopmail.com",
            addedDate: "07/08/2023",
            paymentDate: " 07/08/2023",
            dueDate: "31/08/2023",
            title: "Membership late fee",
            transactionNo: "312010076821",
            PaymentMode: "Online",
            amount: "1500.00",
            status: "Success",
        },
    ];

    crmcontacts.forEach((crmcontacts, index) => { crmcontacts.serial = index + 1; });

    const handleRemoveFilter = (key) => {
        let form = { ...formData }
        form[key] = "";
        setFormData(form);
    }

    var result = Object.keys(formData).map((key) => [key, formData[key]]);
    // Customber Column
    const columns = useMemo(
        () => [
            {
                Header: "#",
                accessor: 'serial'
            },
            {
                Header: "Name & Email",
                accessor: "name",
                filterable: false,
            },
            {
                Header: "Added Date",
                accessor: "addedDate",
                filterable: false,
            },
            {
                Header: "Payment Date",
                accessor: "paymentDate",
                filterable: false,
            },
            {
                Header: "Due Date",
                accessor: 'dueDate'
            },
            {
                Header: "Title",
                accessor: "title",
                filterable: false,
            },
            {
                Header: "Transaction No",
                accessor: "transactionNo",
                filterable: false,
            },
            {
                Header: "Payment Mode",
                accessor: "PaymentMode",
                filterable: false,
            },
            {
                Header: "Amount",
                accessor: "amount",
                filterable: false,
            },
            {
                Header: "Status",
                accessor: "status",
                filterable: false,
            }
        ],

    );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Payment" pageTitle="Payment" location={"/admin/menu"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center">
                                        <Col sm={4}>
                                            <div className="search-box">
                                                <Input
                                                    type="text"
                                                    className="form-control search"
                                                    placeholder="User Name / Email"
                                                />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2 flex-wrap">
                                                <button
                                                    type="button"  className="btn btn-soft-info"
                                                    id="create-btn"  onClick={e => toggleModel('OnlinePaymentModal')}
                                                >
                                                 Online Payment
                                                </button>
                                                <button
                                                    type="button"  className="btn btn-soft-info"
                                                    id="create-btn"  onClick={e => toggleModel('OfflinePaymentModal')}
                                                >
                                                  Offline Payment
                                                </button>
                                                <button type="button" className="btn btn-soft-info" onClick={e => toggleModel('DirectPaymentFilter')}>
                                                    <i className="ri-filter-2-line align-bottom me-1"></i>{" "}
                                                    Filters
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
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <DirectPaymentFilter
                formData={formData}  setFormData={setFormData}
                show={modelName === 'DirectPaymentFilter' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <OfflinePaymentModal 
                formData={formData}  setFormData={setFormData}
                show={modelName === 'OfflinePaymentModal' ? true : false}
                onCloseClick={() => setModelName("")}
            />
            <OnlinePaymentModal
                formData={formData}  setFormData={setFormData}
                show={modelName === 'OnlinePaymentModal' ? true : false}
                onCloseClick={() => setModelName("")}
            />
        </React.Fragment>
    );
};

export default DirectPayment;
