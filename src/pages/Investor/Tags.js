import React, { useEffect, useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Input,
    Row,
    Col,

} from "reactstrap";

const Tags = ({ show, onCloseClick, tagsData, setTagsData }) => {

    const [isCheckAll, setIsCheckAll] = useState(false);
    
    const formhandler = (e, field, type = '') => {

        let data = { ...tagsData };

        if (e.target.checked) {

            if (type === "all") {

                let value = [];
                for (let i in radioList) {
                    let row = radioList[i];
                    value.push(row.value);
                }
                data.columns = value;
                setIsCheckAll(true);

            } else {

                if (!data[field]) { data[field] = []; }
                data[field].push(e.target.value);
            }

        } else {

            if (type === "all") {

                data.columns = "";
                setIsCheckAll(false);

            } else {

                var index = data[field].indexOf(e.target.value);
                if (index !== -1) {
                    data[field].splice(index, 1);
                }
                setIsCheckAll(false);
            }

        }
        setTagsData(data);
    }

    const radioList = [
        { value: 'Member', label: 'Member' },
        { value: 'memberInitialCommit', label: 'Member - Initial Commit' },
        { value: 'memberFinalCommit', label: 'Member - Final Commit' },
        { value: 'memberCallForMoney ', label: 'Member - Call for money' },
        { value: 'memberProfile ', label: 'Member - Profile' },
        { value: 'ClassA ', label: 'Class A' },
        { value: 'ClassB', label: 'Class B' },
        { value: 'ClassC', label: 'Class C' },
        { value: 'ClassD', label: 'Class D' },
        { value: 'ClassE ', label: 'Class E' },
        { value: 'ClassF ', label: 'Class F' },
        { value: 'Treewood ', label: 'Treewood' },
        { value: 'gcdgh', label: 'gcdgh' }
    ];

    useEffect(() => {
        if (radioList.length === tagsData.columns.length) {
            setIsCheckAll(true);
        }
    }, [radioList.length, tagsData.columns.length]);

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-md"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Tags
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody className="message-list-scroll">
                    <div>
                        <Label htmlFor="leads-tags"
                        className="form-label text-muted text-uppercase fw-semibold mb-3"
                        > Tags
                        </Label>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <Input className="form-check-input"
                                            type="checkbox" name="columns"
                                            id="columns" // Value={item.value}
                                            onChange={e => formhandler(e, 'columnsall', 'all')}
                                            checked={isCheckAll}
                                        />
                                        <Label className="form-check-label" htmlFor="auth-remember-check">Select All </Label>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <div className="search-box">
                                        <Input type="text" className="form-control search"
                                         placeholder="Search"/>
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Label htmlFor="leads-tags"
                        className="form-label text-muted text-uppercase fw-semibold mb-3">
                            Columns
                        </Label>
                        <Row className="g-3">
                            {
                                radioList.map((item, key) => {
                                    let check = tagsData.columns && tagsData.columns.length && tagsData.columns.includes(item.value) ? true : false;
                                    return (
                                        <Col lg={6} key={key}>
                                            <div className="form-check">
                                                <Input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="columns"
                                                    id="columns"
                                                    Value={item.value}
                                                    onChange={e => formhandler(e, 'columns', 'checkbox')}
                                                    checked={check}
                                                />
                                                <Label className="form-check-label" htmlFor={item.label}>
                                                    {item.label}
                                                </Label>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button type="submit" className="btn btn-brand-theme" onClick={onCloseClick}>
                        Submit
                    </button>
                    <button className="btn btn-light" onClick={onCloseClick}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default Tags;
