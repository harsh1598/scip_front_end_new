import { memo, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Label, Row, UncontrolledTooltip } from "reactstrap";
import DocumentUploadModal from "../Modals/DocumentUploadModal";
import WebService from "../../../utility/WebService";
import { Link } from "react-router-dom";

interface propData {
    childData?: any;
}

const InitialCommitmentScipAsk = (props: propData) => {
    const [modelName, setModelName] = useState("");
    const [scipAsk, setScipAsk] = useState<any>()
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
                setScipAsk(res);
            })
            .catch((e) => {
            });
    };
    return (
        <>
            <Col className="border-box mb-2">
                <Card style={{ minHeight: !scipAsk ? '100px' : '89px' }} className={!scipAsk ? 'small-card-loader card-body mb-0' : 'card-body mb-0'}>
                    {scipAsk &&
                        <div className="text-center">
                            <h4 className="fs-15 fw-seminormal mb-1">
                                <span
                                    className="counter-value"
                                    data-target="Not Available"
                                >
                                    5,00,00,001 INR
                                </span>
                            </h4>
                            <h5 className="text-muted fs-13 mb-0" id="tooltipTop9">
                                SCIP Ask
                                <Link to="#">
                                    <i className="ri-information-line fs-16 align-middle"></i>
                                </Link>
                                <UncontrolledTooltip
                                    placement="bottom"
                                    target="tooltipTop9"
                                >
                                    This is what the entrepreneur is seeking as in the
                                    Application or total fund raise
                                </UncontrolledTooltip>
                            </h5>
                        </div>
                    }
                </Card>
            </Col>
        </>
    );
};

export default memo(InitialCommitmentScipAsk);
