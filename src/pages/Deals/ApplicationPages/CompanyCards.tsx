import { memo, useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import DocumentUploadModal from "../Modals/DocumentUploadModal";
import WebService from "../../../utility/WebService";

interface propData {
  childData?: any;
}

const CompanyCards = (props: propData) => {
  const [modelName, setModelName] = useState("");
  const [companySummaryCard, setCompanySummaryCard] = useState<any>()
  const toggleModel = (name: any) => {
    setModelName(name);
  };
  useEffect(() => {
    if (props.childData.select_source_table && props.childData.source_table_relation && props.childData.source_table_field_to_show && props.childData.type) {
      getCompanySummary(props.childData.select_source_table, props.childData.source_table_relation, props.childData.source_table_field_to_show, props.childData.type, props.childData.value_from_table, props.childData.field_to_show, props.childData.field_relation);
    }
  }, [])
  const getCompanySummary = (table?: any, relation?: any, field?: any, type?: any, fromTable?: any, fromTableField?: any, fromRelationField?: any) => {
    var obj: any = {}
    if (table) {
      obj.select_source_table = table;
    }
    if (relation) {
      obj.source_table_relation = relation;
    }
    if (field) {
      obj.source_table_field_to_show = field;
    }
    if (type) {
      obj.type = type;
    }
    if (fromTable) {
      obj.value_from_table = fromTable;
    }
    if (fromTableField) {
      obj.field_to_show = fromTableField;
    }
    if (fromRelationField) {
      obj.field_relation = fromRelationField;
    }
    WebService.getAPI({
      action: `/questions`,
      body: obj,
    })
      .then(async (res: any) => {
        setCompanySummaryCard(res);
      })
      .catch((e) => {
      });
  };
  return (
    <>
      <Card >
        <CardBody style={{ minHeight: !companySummaryCard?.answer ? '100px' : '89px' }} className={!companySummaryCard?.answer ? 'small-card-loader' : ''} >
          {
            companySummaryCard &&
            <Row>
              <Col className="m15 border-end text-center">
                <small className="text-muted">{props.childData?.question_title}</small>
                <h6 className="fs-13 mb-1">{companySummaryCard.answer}</h6>
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

export default memo(CompanyCards);
