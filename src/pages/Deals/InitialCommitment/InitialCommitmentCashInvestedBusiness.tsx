import { memo, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Label, Row, UncontrolledTooltip } from "reactstrap";
import DocumentUploadModal from "../Modals/DocumentUploadModal";
import WebService from "../../../utility/WebService";
import { Link } from "react-router-dom";

interface propData {
    childData?: any;
}

const InitialCommitmentCashInvestedBusiness = (props: propData) => {
    const [modelName, setModelName] = useState("");
    const [cashInvestedBusiness, setCashInvestedBusiness] = useState<any>()
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
                setCashInvestedBusiness(res);
            })
            .catch((e) => {
            });
    };
    return (
        <>
            <Col className="border-box mb-2">
                <Card style={{ minHeight: !cashInvestedBusiness ? '100px' : '89px' }} className={!cashInvestedBusiness ? 'small-card-loader card-body mb-0' : 'card-body mb-0'}>
                    {cashInvestedBusiness &&
                              <div className="text-center">
                              <h4 className="fs-15 fw-seminormal mb-1">
                                  <span
                                      className="counter-value"
                                      data-target="Not Available"
                                  >
                                      1,00,000 INR
                                  </span>
                              </h4>
                              <h5 className="text-muted fs-12 mb-0" id="tooltipTop10">
                                  Cash invested in business{" "}
                                  <Link to="#">
                                      <i className="ri-information-line fs-16 align-middle"></i>
                                  </Link>
                                  <UncontrolledTooltip
                                      placement="bottom"
                                      target="tooltipTop10"
                                  >
                                      This is what the entrepreneur filled in
                                      application or 'negotiated'
                                  </UncontrolledTooltip>
                              </h5>
                          </div>
                    }
                </Card>
            </Col>
        </>
    );
};

export default memo(InitialCommitmentCashInvestedBusiness);
