import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Row, Col, Button } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import CustomDropdown from "../../Components/Select/CustomDropdown";
import CustomDatePicker from "../../Components/CustomDatePicker/CustomDatePicker";

interface propData {
    show: boolean;
    onCloseClick: any;
    formData: any
    setFilterData: any
};

const ManageInvestorMembershipFilter = (props: propData) => {

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    const [applicationStatusListSelected, setApplicationStatusListSelected] = useState<any>([]);
    const [applicationApprovalSelected, setApplicationApprovalSelected] = useState<any>([]);
    const [membershipSelected, setMembershipSelected] = useState<any>([]);
    const [expiryDate, setExpiryDate] = useState(null);

    const onCloseBlade = () => {

        setApplicationApprovalSelected("resetsawin")
        setMembershipSelected("resetsawin")
        setApplicationStatusListSelected("resetsawin")
        setExpiryDate(null)
        var obj: any = {};
        reset(obj);
        props.onCloseClick();
    };


    useEffect(() => {
        setApplicationApprovalSelected("resetsawin")
        setMembershipSelected("resetsawin")
        setApplicationStatusListSelected("resetsawin")
        setExpiryDate(null)
        var obj: any = {};
        reset(obj);
    }, [props.show]);

    const onSave = (data: any) => {
        if (data) {
            props.setFilterData(data);
            props.onCloseClick();
        }
    };

    const CompanyStageList: any = [
        { id: 'Y', value: 'Yes' },
        { id: 'N', value: 'No' },
    ];

    const applicationstatusList: any = [
        { id: 'INPROGRESS', value: 'In progress' },
        { id: 'COMPLETED', value: 'Completed' },
        { id: 'ARCHIVED', value: 'Archived' }

    ];

    const userApprovalList: any = [
        { id: 'Y', value: 'Approved' },
        { id: 'N', value: 'Not Approved' }
    ];

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
                            <div className="mb-3">
                                <Label className="form-label">Expiry Date </Label>
                                <Controller
                                    control={control}
                                    name="searchDate"
                                    render={({ field }) => (
                                        <CustomDatePicker
                                            placeholderText='Expiry Date'
                                            maxData={new Date()}
                                            new_format={"DD/MM/YYYY"}
                                            selected={expiryDate}
                                            onChange={(data: any) => {
                                                field.onChange(data);
                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label className="form-label">Application Status </Label>
                                <Controller
                                    control={control}
                                    name="profileStatus"
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={applicationstatusList}
                                            selected={applicationStatusListSelected}
                                            isSearchable={true}
                                            placeholder="Select Application Status"
                                            onChange={(data: any) => {
                                                field.onChange(data);

                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label className="form-label">Application Approval </Label>
                                <Controller
                                    control={control}
                                    name="verifiedStatus"
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={userApprovalList}
                                            selected={applicationApprovalSelected}
                                            isSearchable={true}
                                            placeholder="Select Application Approval"
                                            onChange={(data: any) => {
                                                field.onChange(data);
                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <Label className="form-label">Membership </Label>
                                <Controller
                                    control={control}
                                    name="is_membership_accepted"
                                    render={({ field }) => (
                                        <CustomDropdown
                                            options={CompanyStageList}
                                            selected={membershipSelected}
                                            isSearchable={true}
                                            placeholder="Select Membership"
                                            onChange={(data: any) => {
                                                field.onChange(data);
                                            }}
                                        />
                                    )}
                                />
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

export default ManageInvestorMembershipFilter;
