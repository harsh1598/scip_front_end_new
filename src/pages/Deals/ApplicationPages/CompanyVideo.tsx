import { memo, useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import DocumentUploadModal from "../Modals/DocumentUploadModal";
import WebService from "../../../utility/WebService";

interface propData {
  childData?: any;
}

const CompanySummary = (props: propData) => {
  const [modelName, setModelName] = useState("");
  const [companySummary, setCompanySummary] = useState<any>()
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
        setCompanySummary(res);
      })
      .catch((e) => {
      });
  };
  return (
    <>
      <Card >
        <CardBody style={{ minHeight: !companySummary ? '200px' : '480px' }} className={!companySummary ? 'card-loader' : ''}>
          {companySummary &&
            <Row>
              <Col lg={12}>
                <h6 className="">{props.childData.name}</h6>
              </Col>
              <Col lg={12}>
                <div className="ratio ratio-16x9">

                  <iframe
                    className="rounded"
                    src={companySummary && companySummary.company_video ? companySummary.company_video : ''}
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          }
        </CardBody>
      </Card>
      <DocumentUploadModal
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "DocumentUploadModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />
    </>
  );
};

export default memo(CompanySummary);
