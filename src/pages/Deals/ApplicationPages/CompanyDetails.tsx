import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import WebService from '../../../utility/WebService';
import HelperService from '../../../utility/HelperService';

interface propdata {
    childData?:any
}

const CompanyDetails = (props:propdata) => {
    const [companyDetails, setCompanyDetails] = useState<any>()

    useEffect(() => {
        getCompanySummary();
    }, [])
    const getCompanySummary = () => {
        WebService.getAPI({
            action: `/company-details`
        })
            .then(async (res: any) => {
                setCompanyDetails(res.result);
            })
            .catch((e) => {
            });
    };

    return (
        <>
           <Card className="">
                <CardHeader className="align-items-center d-flex">
                    <h4 className="card-title mb-0  me-2">{props.childData.name}</h4>
                </CardHeader>

                <CardBody style={{ height: !companyDetails ? '200px' : '355px' }} className={!companyDetails ? 'card-loader' : ''}>
                    {companyDetails && 
                    <div className="table-responsive company-detail-table">
                        <Table className="table-borderless mb-0">
                            <tbody>
                                <tr>
                                    <th className="ps-0" scope="row">
                                        Registered Name :
                                    </th>
                                    <td className="text-muted">{companyDetails.company_name}</td>
                                </tr>
                                <tr>
                                    <th className="ps-0" scope="row">
                                        Registered Office :
                                    </th>
                                    <td className="text-muted">{companyDetails.company_contact_info}</td>
                                </tr>
                                <tr>
                                    <th className="ps-0" scope="row">
                                        Operational :
                                    </th>
                                    <td className="text-muted">{companyDetails.company_location}</td>
                                </tr>
                                {/* <tr>
                                    <th className="ps-0" scope="row">
                                        Headquarters :
                                    </th>
                                    <td className="text-muted">{companyDetails.company_contact_info}</td>
                                </tr> */}
                                <tr>
                                    <th className="ps-0" scope="row">
                                        Founded Date
                                    </th>
                                    <td className="text-muted">{companyDetails.company_founded ? HelperService.getOrderDateFormatWithSlash(companyDetails.company_founded) : ""}</td>
                                </tr>
                                <tr>
                                    <th className="ps-0" scope="row">
                                        Social Media Tag
                                    </th>
                                    <td className="text-muted social-icons">
                                        <div className="d-flex">
                                            <Link to={companyDetails.facebook_link} className="avatar-xs d-block me-2">
                                                <span className="avatar-title rounded-circle fs-16 text-bg-light facebook">
                                                    <i className="ri-facebook-fill facebook-clr"></i>
                                                </span>
                                            </Link>
                                            <Link to={companyDetails.twitter_link} className="avatar-xs d-block me-2">
                                                <span className="avatar-title rounded-circle fs-16 text-bg-light twitter">
                                                    <i className="ri-twitter-fill"></i>
                                                </span>
                                            </Link>
                                            <Link to={companyDetails.linkedin_link} className="avatar-xs d-block">
                                                <span className="avatar-title rounded-circle fs-16 text-bg-light linkedin">
                                                    <i className="ri-linkedin-fill"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="ps-0" scope="row">
                                        Company Structure
                                    </th>
                                    <td className="text-muted">{companyDetails.one_liner}</td>
                                </tr>
                                <tr>
                                    <th className="ps-0" scope="row">
                                        No of Employee
                                    </th>
                                    <td className="text-muted">{companyDetails.no_of_employee}</td> 
                                </tr>
                                <tr>
                                    <th className="ps-0" scope="row">
                                        PR Announcement
                                    </th>
                                    <td className="text-muted">{companyDetails.companyId}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    }
                </CardBody>
            </Card>
        </>
    );
};

export default memo(CompanyDetails);
