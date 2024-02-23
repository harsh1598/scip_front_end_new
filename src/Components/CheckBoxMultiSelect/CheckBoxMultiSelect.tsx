import React, { useEffect, useState } from "react";
import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col, Input, Label, Row } from "reactstrap";

interface PropData {
    placeholder?: string;
    multiselectType: string;
    options: Options[];
    selected: any;
    isSearchable?: boolean;
    onChange: any;
    type?: string;
    sakey?: string;
    disValue?: string;
    disCode?: string;
    value?: string;
    isHideArrow?: boolean;
    isDisable?: boolean;
    forceClose?: boolean;
    isCustomInput?: boolean;
    max?: number;
    column?: number;
    className?: any;
    heading?: any;
    data?: any;
    checkBox?: any;
    keyword?: any
}

export interface Options {
    id: any;
    code?: string;
    value: string;
    value2?: string;
    parentCode?: string;
    object?: any;
    icon?: string;
}

const CheckBoxMultiSelect = (props: PropData) => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [tagsData, setTagsData] = useState({ columns: "" });
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [open, setOpen] = useState('1');
    const [data, setData] = useState<any>();
    const [searchText, setSearchText] = useState('');
    let index = -1;
    let selectedValue = "";
    const [selectedIndex, setSelectedIndex] = useState(index);


    useEffect(() => {
        if (props.data) {
            setData(props.data)
        }
    }, [props.data])

    console.log('data', data);
    // const formhandler = (e: any, field: any, type = '') => {

    //     let data: any = { ...tagsData };

    //     if (e.target.checked) {

    //         if (type === "all") {

    //             let value = [];
    //             for (let i in data) {
    //                 let row = data[i];
    //                 value.push(row.value);
    //             }
    //             data.columns = value;
    //             setIsCheckAll(true);

    //         } else {

    //             if (!data[field]) { data[field] = []; }
    //             data[field].push(e.target.value);
    //         }

    //     } else {

    //         if (type === "all") {

    //             data.columns = "";
    //             setIsCheckAll(false);

    //         } else {

    //             var index = data[field].indexOf(e.target.value);
    //             if (index !== -1) {
    //                 data[field].splice(index, 1);
    //             }
    //             setIsCheckAll(false);
    //         }

    //     }
    //     setTagsData(data);
    // }

    const toggle = (id: any) => {

        if (id == 0) {
            setOpen('0');
        } else {
            setOpen('1');
        }
        return
    };

    // const toggleClick = () => {

    // };

    const onCheckALL = (type: any) => {
        var isCheck: boolean = false;
        if (isCheckAll) {
            isCheck = false;
        } else {
            isCheck = true;
        }
        if (props?.multiselectType == 'GROUP_SELECT') {
            Object.entries(data).map(([item]: any, index: number) => {
                data[item] && data[item].map((item1: any, key: any) => {
                    item1.isChecked = isCheck;
                    // if (index == type) {
                    //     item1.isChecked = !item.isChecked;
                    // }
                    setData({ ...data });
                    setIsCheckAll(!isCheckAll)
                    props.onChange(data)
                })
            })
        } else if (props?.multiselectType == 'SIMPLE') {

            for (var i in data) {
                data[i].isChecked = isCheck;
            }
            setData([...data]);
            setIsCheckAll(!isCheckAll)
            props.onChange(data)
        }


    }


    return (

        <Row>
            <Col lg={12}>
                <div>
                    {/* <Label htmlFor="timezone" className="form-label"> Filing Report </Label> */}
                    <div>
                        <div className="d-flex align-items-start">
                            <button
                                type="button"
                                className="btn btn-soft-info btn-label d-grid col-12 right ms-auto "
                                onClick={() => { toggleDropdown() }}
                            >
                                <i className="ri-arrow-down-s-fill label-icon align-middle fs-16 ms-2"></i>
                                <span style={{ alignItems: "start", display: "flex" }}>{tagsData.columns.length ? tagsData.columns.length + " Selected" : props.placeholder}</span>
                            </button>
                        </div>
                        {/* <Button type="button" className="btn btn-brand-theme d-grid col-12 mx-auto text-start " onClick={() => { toggleDropdown() }}>{ tagsData.columns.length ? tagsData.columns.length + " Selected" :" Select Filing"} </Button> */}
                        {/* |  <i className=" ri-arrow-down-s-fill "></i> */}
                        {
                            dropdownOpen &&
                            <>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col lg={12}>
                                                <div className="mb-3">
                                                    <input id="search"
                                                        name="search"
                                                        className="form-control"
                                                        placeholder="Search"
                                                        type="search"
                                                        value={searchText}
                                                        onChange={(e) => setSearchText(e.target.value)} onKeyPress={(e) => {
                                                            props.keyword(searchText)
                                                        }} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                <div className="mb-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="columns"
                                                            id="columns"
                                                            checked={isCheckAll}
                                                            onChange={() => {
                                                                onCheckALL('ALL')
                                                            }
                                                            }
                                                        />
                                                        <Label className="form-check-label" htmlFor="auth-remember-check">Check All </Label>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                {props?.multiselectType == 'GROUP_SELECT' &&
                                                    <div className="mb-3">

                                                        {Object.entries(data).map(([res]: any, index: number) => {
                                                            return (
                                                                <>
                                                                    <UncontrolledAccordion defaultOpen="1" toggle={toggle}>
                                                                        <AccordionItem>
                                                                            <AccordionHeader targetId={"dropdownID_" + index}>{res}</AccordionHeader>
                                                                            <AccordionBody accordionId={"dropdownID_" + index}>
                                                                                {
                                                                                    data[res] && data[res].map((item: any, key: any) => {
                                                                                        // let check = tagsData.columns && tagsData.columns.length && tagsData.columns.includes(item.value) ? true : false;
                                                                                        return (
                                                                                            <Col lg={12} key={key}>
                                                                                                <div className="form-check">
                                                                                                    <Input
                                                                                                        className="form-check-input"
                                                                                                        type="checkbox"
                                                                                                        name={"columns" + key}
                                                                                                        id={"columns" + key}
                                                                                                        Value={item.name}
                                                                                                        onChange={() => {
                                                                                                            data[res][key].isChecked = !item.isChecked;
                                                                                                            setData({ ...data });
                                                                                                            props.onChange(data)
                                                                                                        }
                                                                                                        }
                                                                                                        checked={item.isChecked == true ? true : false}
                                                                                                    />
                                                                                                    <Label className="form-check-label" htmlFor={item.label}>
                                                                                                        {item.name}
                                                                                                    </Label>
                                                                                                </div>
                                                                                            </Col>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </AccordionBody>
                                                                        </AccordionItem>
                                                                    </UncontrolledAccordion >
                                                                </>
                                                            );
                                                        })
                                                        }
                                                    </div>
                                                }
                                                {
                                                    props?.multiselectType == 'SIMPLE' &&

                                                    <div className="mb-3" style={{ overflowY: 'scroll', height: '200px' }}>

                                                        {data && data?.map((res: any, index: number) => {
                                                            return (
                                                                <>
                                                                    <Col lg={12}>
                                                                        <div className="form-check">
                                                                            <Input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                name={"columns_" + index}
                                                                                id={"columns_" + index}
                                                                                Value={res.name}
                                                                                onChange={() => {
                                                                                    data[index].isChecked = !res.isChecked;
                                                                                    setData([...data]);
                                                                                    props.onChange(data)
                                                                                }
                                                                                }
                                                                                checked={res.isChecked == true ? true : false}
                                                                            />
                                                                            <Label className="form-check-label" htmlFor={res.label}>
                                                                                {res.name}
                                                                            </Label>
                                                                        </div>
                                                                    </Col>
                                                                </>
                                                            );
                                                        })
                                                        }
                                                    </div>
                                                }
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>
                            </>
                        }
                    </div>
                </div>
            </Col>
        </Row >

    )
}

CheckBoxMultiSelect.defaultProps = {
    placeholder: "Select",
    selected: "",
    isSearchable: false,
    sakey: new Date().getTime(),
    type: "ARROW",
    isHideArrow: false,
    options: [],
    isDisable: false,
};

export default CheckBoxMultiSelect