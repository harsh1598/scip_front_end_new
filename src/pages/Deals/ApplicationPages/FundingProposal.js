import React, { memo } from 'react';
import { Input, Label } from 'reactstrap';
const FundingProposal = () => {

    return (
        <>
            <div className="accordion-body">
                <h6>Name</h6>
                <p className="text-muted">
                    Contrary to popular belief, Lorem Ipsum is not
                    simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it
                    over 2000 years old.
                </p>
                <hr />
                <h6>Designation</h6>
                <p className="text-muted">CEO</p>
                <hr />
                <h6>Radio</h6>
                <p className="text-muted">
                    <div className="form-check form-radio-info mb-3">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="formradiocolor1"
                            id="formradioRight1"
                            defaultChecked
                            checked="checked"
                        />
                        <Label
                            className="form-check-label"
                            htmlFor="formradioRight1"
                        >
                            Yes
                        </Label>
                    </div>
                </p>
                <hr />
                <h6>Checkbox</h6>
                <p className="text-muted">
                    <div>
                        <i className="ri-checkbox-fill fs-5 align-middle checkbox-fill"></i>{" "}
                        Female
                    </div>
                </p>
                <hr />
                <h6>
                    Are there any legal cases pending against you in
                    the official/personal capacity?
                </h6>
                <p className="text-muted">
                    <div className="form-check form-radio-info mb-3">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="formradiocolor6"
                            id="formradioRight2"
                            defaultChecked
                            checked="checked"
                        />
                        <Label
                            className="form-check-label"
                            htmlFor="formradioRight2"
                        >
                            Radio Info
                        </Label>
                    </div>
                </p>
                <hr />
                <h6>What is your fund</h6>
                <p className="text-muted">
                    The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested.
                </p>
                <hr />
                <h6>Select values</h6>
                <p className="text-muted mb-0">
                    <span className="badge rounded-pill border border-primary text-primary">
                        One
                    </span>
                    &nbsp;
                    <span className="badge rounded-pill border border-primary text-primary">
                        Two
                    </span>
                    &nbsp;
                    <span className="badge rounded-pill border border-primary text-primary">
                        Three
                    </span>
                    &nbsp;
                    <span className="badge rounded-pill border border-primary text-primary">
                        Four
                    </span>
                </p>
            </div>
        </>
    );
};

export default memo(FundingProposal);
