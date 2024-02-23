import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import DocumentUploadModal from "../Modals/DocumentUploadModal";
import AccordionsModule from "./AccordionsModule";
import "../DealCardLoader.scss";
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
        <CardBody style={{ height: !companySummary ? '200px' : '480px' }} className={!companySummary ? 'card-loader ' : ''}>
          {companySummary &&
            <div >

              <div className="mb-3" style={{ display: "none", }}>
                <h6 className="mb-2">Company Summary</h6>
                <AccordionsModule />
              </div>

              <h6 className="">{props?.childData?.name}</h6>
              <p>
                <Link
                  to={companySummary?.company_website}
                  target="_blank"
                  className="btn py-1 fs-11 rounded-pill btn-info waves-effect waves-light px-4 me-3"
                >
                  Website
                </Link>
                <Link
                  to="#"
                  onClick={(e) => toggleModel("DocumentUploadModal")}
                  className="btn py-1 fs-11 rounded-pill btn-info waves-effect waves-light px-4"
                >
                  Video
                </Link>
              </p>

              <p className="text-muted">
                <span dangerouslySetInnerHTML={{ __html: companySummary?.company_summary }} />
              </p>
              {/* <p>
  <Link
    to="https://www.mentoria.com/about-us"
    target="_blank"
    className="btn py-1 fs-11 rounded-pill btn-info waves-effect waves-light px-4 me-3"
  >
    Website
  </Link>
  <Link
    to="#"
    className="btn py-1 fs-11 rounded-pill btn-info waves-effect waves-light px-4"
  >
    Video
  </Link>
</p> */}
              <hr />
            </div>
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
