import React, { useEffect, useState } from "react";
import { Card, CardHeader, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, UncontrolledDropdown } from 'reactstrap';
import Grid, { GridColumn, GridHeader, GridRow, } from "../../../Components/Grid/Grid";
import { ProjectName } from "../../../Components/constants/layout";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import WebService from "../../../utility/WebService";
import EditEntrepreneurDetails from "./ImportEditEntrepreneurDetails";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import { Controller, useForm } from "react-hook-form";

const headers: GridHeader[] = [
    {
        title: "S.NO",
        classTitle: "text-start",
    },
    {
        title: "First Name",
        classTitle: "text-start",
    },
    {
        title: "Last Name",
        class: "text-center",
    },
    {
        title: "Phone Code",
        class: "text-center",
    },
    {
        title: "Phone Number",
        class: "text-center",
    },
    {
        title: "Email",
        class: "text-center",
    },
    {
        title: "Personal Address",
        class: "text-center",
    },
    {
        title: "Currency",
        class: "text-center",
    },
    {
        title: "Seeking funding amount",
        class: "text-center",
    },
    {
        title: "Cash invested in business",
        class: "text-center",
    },
    {
        title: "Book Value",
        class: "text-center",
    },
    {
        title: "Valuation",
        class: "text-center",
    },
    {
        title: "Pan Card Number",
        class: "text-center",
    },
    {
        title: "Registred Company name",
        class: "text-center",
    },
    {
        title: "Brand Name",
        class: "text-center",
    },
    {
        title: "Founded date",
        class: "text-center",
    },
    {
        title: "Product or service",
        class: "text-center",
    },
    {
        title: "Industry",
        class: "text-center",
    },
    {
        title: "Sub Industry",
        class: "text-center",
    },
    {
        title: "Registered official address",
        class: "text-center",
    },
    {
        title: "Operational Headquarters",
        class: "text-center",
    },
    {
        title: "Wesbite link",
        class: "text-center",
    },
    {
        title: "Company Stage Code",
        class: "text-center",
    },
    {
        title: "Status",
        class: "text-center",
    },
    {
        title: "Source of contact Code",
        class: "text-center",
    },
    {
        title: "Source of contact Information",
        class: "text-center",
    },
    {
        title: "Action",
        class: "text-center",
    }
];

const ImportEntrepreneurDetailsList = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();

    document.title = `${ProjectName} | Entrepreneur Details List`;
    const [rows, setRows] = useState<GridRow[]>([]);
    const [totalCount, setTotalCount] = useState<any>(0);
    const [showloader, setShowLoader] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [isShowAddManageUserForm, setIsShowAddManageUserForm] = useState({ show: false, id: "" });
    const [search_Menu, setSearch_Menu] = useState(false);
    const [keywordNameSelected, setKeywordNameSelected] = useState<any>("Title");

    useEffect(() => {
        getlist(1);
    }, []);

    const onchange = (currentPage: number) => {
        getlist(currentPage);
    };

    const toggleSearch = () => {
        setSearch_Menu(!search_Menu);
    };

    const getlist = (page?: any) => {
        setShowLoader(true);
        let rows: GridRow[] = [];
        let obj: any = {};
        obj.offset = page - 1;
        obj.limit = 20;
        obj.keywordName = keywordNameSelected.id ? keywordNameSelected.id : ""
        obj.keyword = searchText ? searchText : ""
        WebService.getAPI({
            action: `/import/entrepreneur-details-list`,
            body: obj
        }).then((res: any) => {
            if (res && res.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 20 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: contentColumns({ contentData: res.list[i].first_name }) });
                    columns.push({ value: contentColumns({ contentData: res.list[i].last_name }) });
                    columns.push({ value: res.list[i].phone_code });
                    columns.push({ value: res.list[i].phone });
                    columns.push({ value: res.list[i].email });
                    columns.push({ value: contentColumns({ contentData: res.list[i].address ?? "-" }) });
                    columns.push({ value: res.list[i].currency });
                    columns.push({ value: res.list[i].seek_fund_amount });
                    columns.push({ value: res.list[i].invested_cash });
                    columns.push({ value: res.list[i].per_share_value });
                    columns.push({ value: res.list[i].valuation });
                    columns.push({ value: res.list[i].pancard_no });
                    columns.push({ value: contentColumns({ contentData: res.list[i].company_name }) });
                    columns.push({ value: contentColumns({ contentData: res.list[i].brand_name }) });
                    columns.push({ value: res.list[i].company_founded });
                    columns.push({ value: res.list[i].company_type });
                    columns.push({ value: contentColumns({ contentData: res.list[i].industry_name }) });
                    columns.push({ value: contentColumns({ contentData: res.list[i].subIndustry ?? "-" }) });
                    columns.push({ value: contentColumns({ contentData: res.list[i].company_contact_info ?? "-" }) });
                    columns.push({ value: res.list[i].company_location });
                    columns.push({ value: contentColumns({ contentData: res.list[i].company_website ?? "-" }) });
                    columns.push({ value: res.list[i].stage_name });
                    columns.push({ value: res.list[i].active == "Y" ? "Active" : "Inactive" });
                    columns.push({ value: res.list[i].title });
                    columns.push({ value: contentColumns({ contentData: res.list[i].source_info ?? "-" }) });
                    columns.push({ value: actionList(res.list[i].userId) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
        }).catch((error: any) => {
            setShowLoader(false);
        });
    };

    const contentColumns = (data: any) => {
        return (
            <>
                <div className="flex-grow-1 overflow-hidden" style={{ width: "50px" }}>
                    <p className="text-truncate mb-0">{data.contentData}</p>
                </div>
            </>
        );
    };

    const actionList = (id: any) => {
        return (
            <>
                <ul className="list-inline  gap-2 mb-0">
                    <li className="list-inline-item">
                        <UncontrolledDropdown>
                            <DropdownToggle
                                href="#"
                                className="btn btn-soft-secondary btn-sm dropdown"
                                tag="button">
                                <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                {/* onClick={(e) => toggleModel("AddRubric", data.id)} */}
                                <DropdownItem onClick={() => setIsShowAddManageUserForm({ show: true, id: id })}>
                                    <i className="ri-edit-box-line align-middle me-1"></i>Edit
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                </ul>
            </>
        );
    };

    const closeAddManageUserForm = () => {
        setIsShowAddManageUserForm({ show: false, id: "" });
    }

    const kewordList: any = [
        { id: "first_name", value: "First Name" },
        { id: "last_name", value: "Last Name" },
        { id: "email", value: "Email" },
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Entrepreneur Details List" pageTitle="Entrepreneur Details List" location="/importLog" />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center">
                                        <Col sm={12} lg={4}>
                                            <Dropdown isOpen={search_Menu} toggle={toggleSearch}  >
                                                <DropdownToggle className="btn p-0" tag="button"
                                                >
                                                    <div className="search-box">
                                                        <Input type="text"
                                                            className="form-control search" placeholder="Title"
                                                            name="title"
                                                            value={searchText}
                                                            onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => {
                                                                if (e.keyCode === 13) {
                                                                    getlist(1)
                                                                }
                                                            }}
                                                        />
                                                        <i className="ri-search-line search-icon"></i>
                                                    </div>
                                                </DropdownToggle>
                                                <DropdownMenu className="p-2 dropdown-menu-end dropdown-menu-xl" style={{ maxWidth: "70vh" }}>
                                                    <Row className="p-1">
                                                        <Col lg={6}>
                                                            <div className="mb-2">
                                                                <Controller
                                                                    control={control}
                                                                    name="active"
                                                                    rules={{ required: true }}
                                                                    render={({ field }) => (
                                                                        <CustomDropdown
                                                                            options={kewordList}
                                                                            selected={keywordNameSelected}
                                                                            isSearchable={true}
                                                                            placeholder="Select"
                                                                            onChange={(data: any) => {
                                                                                field.onChange(data.id);
                                                                                setKeywordNameSelected(data);
                                                                            }}
                                                                        />
                                                                    )}
                                                                />
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="search-box">
                                                                <Input type="text"
                                                                    className="form-control search" placeholder={keywordNameSelected == "Title" ? keywordNameSelected: keywordNameSelected.value}
                                                                    name="title"
                                                                    value={searchText}
                                                                    onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => {
                                                                        if (e.keyCode === 13) {
                                                                            getlist(1)
                                                                        }
                                                                    }}
                                                                />
                                                                <i className="ri-search-line search-icon"></i>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    {/* <div className="offcanvas-footer border-top p-2 text-center hstack gap-2 justify-content-end">
                                                        <button type="submit" className="btn btn-brand-theme" >
                                                            Search
                                                        </button>
                                                        <button className="btn btn-light" >
                                                            Cancel
                                                        </button>
                                                    </div> */}
                                                </DropdownMenu>
                                            </Dropdown>
                                            {/* <div className="mb-2">
                                                <div className="search-box">
                                                    <Input type="text"
                                                        className="form-control search" placeholder="Title"
                                                        name="title"
                                                        value={searchText}
                                                        onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => {
                                                            if (e.keyCode === 13) {
                                                                getlist(1)
                                                            }
                                                        }}
                                                    />
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                            </div> */}
                                        </Col>
                                    </Row>
                                    <div className="px-3 mt-4">
                                        <div className="table-card">
                                            <Grid
                                                headers={headers}
                                                rows={rows}
                                                count={totalCount}
                                                errorMessage={"No Data Found"}
                                                ShowLoader={showloader}
                                                onPageChange={onchange}
                                                perPageItem={20}
                                            />
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <EditEntrepreneurDetails
                show={isShowAddManageUserForm.show}
                onCloseClick={closeAddManageUserForm}
                Id={isShowAddManageUserForm.id}
                getlist={() => getlist(1)}
            />
        </React.Fragment>
    );
};

export default ImportEntrepreneurDetailsList;
