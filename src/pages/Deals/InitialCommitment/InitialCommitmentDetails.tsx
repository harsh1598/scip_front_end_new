import { memo, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Label, Row } from "reactstrap";
import DocumentUploadModal from "../Modals/DocumentUploadModal";
import WebService from "../../../utility/WebService";

interface propData {
    childData?: any;
}

const InitialCommitmentDetails = (props: propData) => {
    const [modelName, setModelName] = useState("");
    const [businessModal, setBusniessModal] = useState<any>()
    const toggleModel = (name: any) => {
        setModelName(name);
    };
    useEffect(() => {
        getCompanySummary();
    }, [])
    const getCompanySummary = () => {
        WebService.getAPI({
            action: `/company-summary`
        })
            .then(async (res: any) => {
                setBusniessModal(res);
            })
            .catch((e) => {
            });
    };
    return (
        <>
            <Card className="mb-2">
                {/* <CardHeader className="align-items-center card-header">
                    <h4 className="card-title card-title mb-0 me-2">
                        Business Model
                    </h4>
                </CardHeader> */}
                <CardBody style={{ height: !businessModal ? '200px' : '660px' }} className={!businessModal ? 'card-loader ' : ''}>
                    {businessModal &&
                        <Row>
                            <Col >
                                <div className="mb-2">
                                    <Label>Website</Label>
                                    <input type='text' name='' value='https://www.google.com/' placeholder='https://www.google.com/' className='form-control opacity-25' />
                                </div>
                                <div className="mb-2">
                                    <Label>Founding Date</Label>
                                    <input type='text' name='' value='Jan 2024' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Location</Label>
                                    <input type='text' name='' value='USA' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Activity</Label>
                                    <input type='text' name='' value='Aerospace' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>BtoC, BtoB..</Label>
                                    <input type='text' name='' value='B2B' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Tax ID</Label>
                                    <input type='text' name='' value='123-987-990' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Keywords</Label>
                                    <input type='text' name='' value='' placeholder='Please pick an option' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Number of Co-founders</Label>
                                    <input type='text' name='' value='USA' placeholder='Please input amount' className='form-control opacity-50' />
                                </div>
                            </Col>
                            <Col >
                                <div className="mb-2">
                                    <Label>Amount next fundraising</Label>
                                    <input type='text' name='' value='2.3B' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Valuation Pre-money</Label>
                                    <input type='text' name='' value='25B' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Amount to commit</Label>
                                    <input type='text' name='' value='1.50B' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Currency</Label>
                                    <input type='text' name='' value='USD' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Timing</Label>
                                    <input type='text' name='' value='05/12/2023' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Round</Label>
                                    <input type='text' name='' value='Pre IPO' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Doc Link</Label>
                                    <input type='text' name='' value='https://www.google.com/' placeholder='' className='form-control opacity-50' />
                                </div>
                                <div className="mb-2">
                                    <Label>Last Funding round</Label>
                                    <input type='text' name='' value='12/12/2023' placeholder='' className='form-control opacity-50' />
                                </div>
                            </Col>
                   </Row>
                    }
            </CardBody>
        </Card >
        </>
    );
};

export default memo(InitialCommitmentDetails);
