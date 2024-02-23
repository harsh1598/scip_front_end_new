import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col, Button } from "reactstrap";
import CustomDropdown from "../../../Components/Select/CustomDropdown";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface propData {
    show: boolean;
    onCloseClick: any;
    setFormData: any;
    formData:any
};

const SMEFilter = (props: propData) => {

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const onCloseBlade = () => {
        reset();
        props.onCloseClick();
    };

    const [month, setMonth] = useState<any>([]);
    const [monthList, setMonthList] = useState<any>([]);
    const [year, setYear] = useState<any>([]);
    const [yearList, setYearList] = useState<any>([]);

    useEffect(() => {
        getMonthList();
        getYearList();
    }, [props.formData]);

    const onSave = (data: any) => {
        if (data.year) {
            props.setFormData({ month:month , year:year})
            props.onCloseClick();
        }
        // if (data.month || data.year) {
        //     props.setFormData({ month:month , year:year})
        //     props.onCloseClick();
        // }
    };

    const getMonthList = () => {
        const months = [];
        const monthNames = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];
        for (let month = 0; month < 12; month++) {

            //  Format the month as two digits (01, 02, ..., 12)
            //  const formattedMonth = `${month + 1}`.padStart(2, '0');
            //  Format the month as single digits (1, 2, ..., 12)

            const formattedMonth = `${month + 1}`.padStart(1);
            // Add the month to the list
            months.push({
                id: formattedMonth,
                value: monthNames[month]
            });
        }
   
        setMonthList(months);
    }

    const getYearList = () => {

        const currentlySelected = new Date().getFullYear();
        const earliestYear = currentlySelected - 20;
        const latestYear = currentlySelected;
        const years = [];

        // Generate the array of years
        const temyears = Array.from({ length: latestYear - earliestYear + 1 }, (_, index) => latestYear - index);
        for (let i in temyears) {
            years.push({
                id: temyears[i],
                value: temyears[i]
            });
        }

        setYearList(years);
    }

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                Filters
            </OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Month
                                </Label>
                                <Controller
                                    control={control}
                                    name="month"
                                    // rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            // isDisable={id ? true : false}
                                            selected={month}
                                            isSearchable={true}
                                            options={monthList}
                                            placeholder="Select Month"
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setMonth(data);
                                            }}
                                        />
                                    )}
                                />
                                {/* <div>
                                    {errors.month && (
                                        <span className="text-danger fs-12">Please Select Month</span>
                                    )}
                                </div> */}
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-2">
                                <Label htmlFor="name-field" className="form-label">
                                    Year
                                </Label>
                                <Controller
                                    control={control}
                                    name="year"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <CustomDropdown
                                            // isDisable={id ? true : false}
                                            selected={year}
                                            isSearchable={true}
                                            options={yearList}
                                            placeholder="Select Year" 
                                            onChange={(data: any) => {
                                                field.onChange(data.id);
                                                setYear(data);
                                            }}
                                        />
                                    )}
                                />
                                <div>
                                    {errors.year && (
                                        <span className="text-danger fs-12">Please Select Year</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <Button
                        type="submit"
                        id="addedit-Document-submit-btn"
                        color="primary" className="btn-brand-theme"
                    >
                        Submit
                    </Button>
                    <button type="button" className="btn btn-light" onClick={() => onCloseBlade()}>
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas >
    );
};

export default SMEFilter;
