import React, { useEffect, useState } from "react";
import { Card, CardHeader, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, UncontrolledDropdown } from 'reactstrap';
import Grid, { GridColumn, GridHeader, GridRow, } from "../../../Components/Grid/Grid";
import { ProjectName } from "../../../Components/constants/layout";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import WebService from "../../../utility/WebService";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import { Controller, useForm } from "react-hook-form";
import ImportEditCompanyDocument from "./ImportEditCompanyDocument";

const headers: GridHeader[] = [
    {
        title: "S.NO",
        classTitle: "text-start",
    },
    {
        title: "User code",
        classTitle: "text-start",
    },
    {
        title: "Campaign Code",
        class: "text-center",
    },
    {
        title: "Document Category Code ",
        class: "text-center",
    },
    {
        title: "Document Sub Category Code",
        class: "text-center",
    },
    {
        title: "Document Name",
        class: "text-center",
    },
    {
        title: "Document Url",
        class: "text-center",
    },
    {
        title: "Year",
        class: "text-center",
    },
    {
        title: "Is View to User",
        class: "text-center",
    },
    {
        title: "Action",
        class: "text-center",
    }
];

const ImportCompanyDocumentList = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();

    document.title = `${ProjectName} | Company Document List`;
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
        obj.keywordName = keywordNameSelected.id ? keywordNameSelected.id : "";
        obj.keyword = searchText ? searchText : "";
        WebService.getAPI({
            action: `/import/company-docx-list`,
            body: obj
        }).then((res: any) => {
            if (res && res?.list) {
                setTotalCount(res.count);
                setShowLoader(false);
                for (var i in res.list) {
                    let columns: GridColumn[] = [];
                    columns.push({ value: page == 0 ? Number(i) + 1 : 20 * Number(page - 1) + Number(i) + 1 });
                    columns.push({ value: res.list[i]?.user?.slug });
                    columns.push({ value: res.list[i]?.campaign?.slug });
                    columns.push({ value: res.list[i]?.category?.category_name });
                    columns.push({ value: res.list[i]?.sub_category?.category_name ?? "-" });
                    columns.push({ value: res.list[i].doc_title });
                    columns.push({ value: res.list[i].doc_file });
                    columns.push({ value: res.list[i].year });
                    columns.push({ value: res.list[i].is_view == "Y" ? "Yes" : "No" });
                    columns.push({ value: actionList(res.list[i].docId) });
                    rows.push({ data: columns });
                }
                setRows([...rows]);
            }
        }).catch((error: any) => {
            setShowLoader(false);
        });
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
                    <BreadCrumb title="Company Document List" pageTitle="Company Document List" location="/importLog" />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-0 align-items-center">
                                        <Col sm={12} lg={4}>
                                            <Dropdown isOpen={search_Menu} toggle={toggleSearch}  >
                                                <DropdownToggle className="btn p-0" tag="button">
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
                                                                    className="form-control search" placeholder={keywordNameSelected == "Title" ? keywordNameSelected : keywordNameSelected.value}
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
            <ImportEditCompanyDocument
                show={isShowAddManageUserForm.show}
                onCloseClick={closeAddManageUserForm}
                Id={isShowAddManageUserForm.id}
                getlist={() => getlist(1)}
            />
        </React.Fragment>
    );
};

export default ImportCompanyDocumentList;
