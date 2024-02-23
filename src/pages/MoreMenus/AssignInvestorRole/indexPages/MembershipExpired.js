import React from "react";
import { useState } from "react";

const MembershipExpired = () => {

    const [formData, setFormData] = useState([{ name: "Account Setting" }, { name: "Message" }, { name: "Payment" }, { name: "Portfolio" }]);

    const handleRemoveFilter = (key) => {

        const list = [...formData];
        list.splice(key, 1);
        setFormData(list);
    }

    console.log(formData);
    return (
        <React.Fragment>
            <form>
                <div class="row gx-3 gy-2 align-items-center mb-3">
                    <div class="col-sm-3">
                        <div class="input-group">
                            <div class="input-group-text">
                                <i className="ri-computer-line align-bottom fs-15"></i>
                            </div>
                            <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Page Title" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="input-group">
                            <div class="input-group-text">
                                <i className="ri-smartphone-line align-bottom fs-15"></i>
                            </div>
                            <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Key for Mobile app" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="input-group">
                            <div class="input-group-text">
                                <i className="ri-earth-line align-bottom fs-15"></i>
                            </div>
                            <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Page Url" />
                        </div>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
            <div className="col-sm-auto ms-auto ">
                <div className="hstack gap-2 flex-wrap">
                    {
                        formData.map((val, ind) => {
                            return <>  <div className="text-end">
                                <button className="btn btn-soft-info btn-label right ms-auto">
                                    <i className="ri-close-circle-line label-icon align-bottom fs-15 ms-2" onClick={e => handleRemoveFilter(ind)}></i>{" "}
                                    {val.name}
                                </button>
                            </div>
                            </>
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default MembershipExpired;
