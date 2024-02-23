import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from "reactstrap";
import WebService from '../../../utility/WebService';

interface propdata {
    childData?: any
}

const Downloadpage = (props: propdata) => {
    const [downloadPage, setDownloadPage] = useState<any>()


    useEffect(() => {
        getCompanySummary();
    }, [])
    const getCompanySummary = () => {
        WebService.getAPI({
            action: `/company-summary`
        })
            .then(async (res: any) => {
                setDownloadPage(res);
            })
            .catch((e) => {
            });
    };
    return (
        <>
            <Card className="">
                <CardBody style={{ height: !downloadPage ? '90px' : '60px'  }} className={!downloadPage ? 'small-card-loader ' : ''}>
                {downloadPage &&
                    <>
                    <Link to="#" className="me-2 inline-block mob-2">
                        <span className="badge rounded-pill border border-info text-info fs-12 fw-normal">
                            Pitch File <i className="ri-download-2-line ms-1"></i>
                        </span>
                    </Link>
                    <Link to="#" className="me-2 inline-block mob-2">
                        <span className="badge rounded-pill border border-info text-info fs-12 fw-normal">
                            Cap Table <i className="ri-download-2-line ms-1"></i>
                        </span>
                    </Link>
                    <Link to="#" className="me-2 inline-block mob-2">
                        <span className="badge rounded-pill border border-info text-info fs-12 fw-normal">
                            Financial Projection
                            <i className="ri-download-2-line ms-1"></i>
                        </span>
                    </Link>
                    <Link to="#" className="me-2 inline-block mob-2">
                        <span className="badge rounded-pill border border-info text-info fs-12 fw-normal">
                            Traction Metrics
                            <i className="ri-download-2-line ms-1"></i>
                        </span>
                    </Link>
                    <Link to="#">
                        <span className="badge rounded-pill border border-info text-info fs-12 fw-normal">
                            Info Doc <i className="ri-download-2-line ms-1"></i>
                        </span>
                    </Link>
                    </>
                     }
                </CardBody>
            </Card>
        </>
    );
};

export default memo(Downloadpage);
