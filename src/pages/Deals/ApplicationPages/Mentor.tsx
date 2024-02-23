import React, { memo, useEffect, useState } from 'react';
import WebService from '../../../utility/WebService';
const Mentor = () => {
    const [mentor, setMentor] = useState<any>()

    useEffect(() => {
        getCompanySummary();
    }, [])
    const getCompanySummary = () => {
        WebService.getAPI({
            action: `/company-summary`
        })
            .then(async (res: any) => {
                setMentor(res);
            })
            .catch((e) => {
            });
    };

    return (
        <>
            <div className={!mentor ? 'card-loader-white' : 'accordion-body'}>
                {mentor && 
                <>
                <h6>Text</h6><p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen
                        book.
                    </p><hr /><h6>TextArea</h6><p className="text-muted">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen
                            book.
                        </p><hr /><h6>Team member role</h6><p className="text-muted">Founder</p><hr /><h6>Text file</h6><p className="text-muted">
                            <i className="ri-file-download-line icon-font"></i>{" "}
                            8CSP86000671.jpg
                        </p><hr /><h6>Total investment in your startup</h6><p className="text-muted">
                            There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form
                        </p><hr /><h6>Aadhaar Card</h6><p className="text-muted">
                            <i className="ri-file-download-line icon-font"></i>{" "}
                            sq7.jpg
                        </p><hr /><h6>
                            Your domain of expertise and interest will help
                            support and mentor entrepreneurs who come to us.
                            Please share your domain of expertise.
                        </h6><p className="text-muted">
                            <i>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have
                                suffered alteration in some formThere are many
                                variations of passages of Lorem Ipsum
                                available, but the majority have suffered
                                alteration in some form
                            </i>
                        </p><hr /><h6>What is your fund</h6><p className="text-muted">
                            There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form
                        </p><hr /><h6>What is your fund</h6><p className="text-muted">80</p><hr /><h6>Checkbox</h6><p className="text-muted">
                            <div className="d-flex">
                                <div className="me-3">
                                    <i className="ri-checkbox-fill checkbox-fill fs-5 align-middle"></i>{" "}
                                    CSE
                                </div>
                                <div className="me-3">
                                    <i className="ri-checkbox-fill checkbox-fill fs-5 align-middle"></i>{" "}
                                    RDMS
                                </div>
                                <div className="me-3">
                                    <i className="ri-checkbox-fill heckbox-fill fs-5 align-middle"></i>{" "}
                                    OS
                                </div>
                                <div className="me-3">
                                    <i className="ri-checkbox-fill checkbox-fill fs-5 align-middle"></i>{" "}
                                    CN
                                </div>
                                <div className="me-3">
                                    <i className="ri-checkbox-fill checkbox-fill fs-5 align-middle"></i>{" "}
                                    M2
                                </div>
                            </div>
                        </p><hr /><h6>Dropdown</h6><p className="text-muted mb-0">DotNet</p></>
            }
            </div>
        </>
    );
};

export default memo(Mentor);
