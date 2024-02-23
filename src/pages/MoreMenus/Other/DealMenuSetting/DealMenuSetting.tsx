import React, { Fragment, useEffect, useState } from "react";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { ProjectName } from "../../../../Components/constants/layout";
import { Card, CardBody, CardHeader, Col, Container, Label, Row, UncontrolledTooltip } from "reactstrap";
import DealFilters from "./DealFilters";
import SelectDealFilters from "./SelectDealFilters";
import SimpleBar from "simplebar-react";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../../../Components/Select/CustomDropdown";
import MultiSelect from "../../../../Components/MultiSelect/MultiSelect";
import WebService from "../../../../utility/WebService";
import toast from "react-hot-toast";

const DealMenuSetting = () => {
    const {
        control,
        handleSubmit,
    } = useForm();
    document.title = `${ProjectName} | Deal Menu Setting`;
    const [dealFilterOption, setDealFilterOption] = useState<any[]>([]);
    const [dealFilterSelected, setDealFilterSelected] = useState<any[]>([]);
    const [radioButton, setRadioButton] = useState('Active');
    const [data, setData] = useState<any>();


    useEffect(() => {
        getDealFilterList();
        getRadioList();
    }, []);


    const getDealFilterList = () => {
        WebService.getAPI({
            action: `/deal-menu-list`,
            body: null,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].menuId, value: res.list[i].menu_title });
                }
                setDealFilterOption(array);
            })
            .catch((e) => { });
    };

    const getRadioList = () => {
        WebService.getAPI({
            action: `/deal-menu-chapter-setting-list`,
            body: null,
        })
            .then((res: any) => {
                setData(res.result)
                if (res.result.status == 'Y') {
                    setRadioButton('ACTIVE')
                }
                else {
                    setRadioButton('INACTIVE')
                }

            })
            .catch((e) => { });
    };

    const onchangeStatus = (status: any) => {
        if (status == 'ACTIVE') {
            setRadioButton('ACTIVE')
        } else {
            setRadioButton('INACTIVE')
        }
        let obj: any = {};
        obj.id = data.id;
        obj.status = status == 'ACTIVE' ? 'Y' : 'N';
        WebService.postAPI({
            action: `/deal-menu-chapter-setting-status`,
            body: obj,
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
            }
        }).catch((error: any) => {

        });
    }

    const onSaveDropDown = (data: any) => {
        console.log(data);

        let obj: any = {};
        obj.getvalue = dealFilterSelected;
        WebService.postAPI({
            action: `/deal-menu-status`,
            body: obj,
        }).then((res: any) => {
            if (res) {
                toast.success(res.message);
            }
        }).catch((error: any) => {

        });
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Deal Menu Setting" pageTitle="Deal Menu Setting" location={true} />
                    <Row>
                        <Col xl={4} lg={4}>
                            <Card className="static-toggle bg-warning-subtle">
                                <CardBody to="#" className="bg-soft-warning ">
                                    <h3 className="mb-0 fs-15">Manage Deal Filters</h3>
                                </CardBody>
                            </Card>
                            {/* {
                                data.map((item: any, index: any) => {
                                    return ( */}
                            <Fragment>
                                <Card>
                                    <CardBody>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <h5 className="mb-0 fs-15">Filter Status</h5>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <UncontrolledTooltip placement="right" target={'Active'} >
                                                    Set Deal filter menu visibility status
                                                </UncontrolledTooltip>
                                                <div className="d-flex gap-1 align-items-center my-n2" id={'Active'}>
                                                    <i className="ri-information-fill align-bottom fs-15"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-2">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="1"
                                                    value={'Y'}
                                                    checked={radioButton == 'ACTIVE' ? true : false}
                                                    onChange={(e) => { onchangeStatus('ACTIVE') }}
                                                />
                                                <label className="form-check-label" htmlFor="inlineCheckbox2">Active</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    id="2"
                                                    value={'N'}
                                                    checked={radioButton == 'INACTIVE' ? true : false}
                                                    onChange={(e) => { onchangeStatus('INACTIVE') }}
                                                />
                                                <label className="form-check-label" htmlFor="inlineCheckbox2">InActive</label>
                                            </div>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Fragment>
                            {/* )
                                })
                            } */}
                        </Col>
                        <Col xl={4} lg={4}>
                            <Card className="static-toggle bg-warning-subtle">
                                <CardHeader className="bg-soft-warning ">
                                    <h3 className="mb-0 fs-15">Select Deal Filters</h3>
                                </CardHeader>
                            </Card>
                            <Col xl={12} lg={12}>

                                <Card className="static-toggle bg-warning-subtle">
                                    <CardHeader className="bg-soft-warning ">
                                        <h3 className="mb-0 fs-15">Selectable items</h3>
                                    </CardHeader>
                                    <form onSubmit={handleSubmit(onSaveDropDown)}>
                                        <SimpleBar autoHide={false} style={{ height: "45vh" }}>

                                            <CardBody>
                                                <div className="mb-3">
                                                    <Controller
                                                        control={control}
                                                        name="user_type"
                                                        render={({ field }) => (
                                                            <MultiSelect
                                                                selectLimit={dealFilterOption.length}
                                                                options={dealFilterOption}
                                                                selected={dealFilterSelected}
                                                                placeholder="Select Deal Filters"
                                                                onChange={(data: any) => {
                                                                    if (data) {
                                                                        let temp: any = data.map((item: any) => {
                                                                            field.onChange(item.id);
                                                                            return item.id;
                                                                        });
                                                                        setDealFilterSelected(temp);
                                                                    }
                                                                }}
                                                            />
                                                        )}
                                                    />
                                                </div>

                                            </CardBody>
                                        </SimpleBar>
                                        <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                                            <button
                                                type="submit"
                                                className="btn btn-brand-theme"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </Card>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DealMenuSetting;
