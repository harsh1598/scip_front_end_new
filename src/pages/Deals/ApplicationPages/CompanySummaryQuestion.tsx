import { Fragment, memo, useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import DocumentUploadModal from "../Modals/DocumentUploadModal";
import WebService from "../../../utility/WebService";

interface propData {
    childData?: any;
}

const CompanySummaryQuestion = (props: propData) => {
    const [modelName, setModelName] = useState("");
    const [companySummaryQuestion, setCompanySummaryQuestion] = useState<any>()
    const toggleModel = (name: any) => {
        setModelName(name);
    };
    console.log("childDataddd", props.childData);


    useEffect(() => {
        if (props.childData.select_source_table && props.childData.source_table_relation && props.childData.source_table_field_to_show && props.childData.type) {
            getAnswer(props.childData.select_source_table, props.childData.source_table_relation, props.childData.source_table_field_to_show, props.childData.type, props.childData.value_from_table, props.childData.field_to_show, props.childData.field_relation);
        }
    }, [])
    const getAnswer = (table?: any, relation?: any, field?: any, type?: any, fromTable?: any, fromTableField?: any, fromRelationField?: any) => {
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
                setCompanySummaryQuestion(res);
            })
            .catch((e) => {
            });
    };
    return (
        <>
            <Card className="mt-2">
                <CardBody style={{ minHeight: !companySummaryQuestion?.answer ? '100px' : '89px' }} className={!companySummaryQuestion?.answer ? 'small-card-loader' : ''} >
                    {
                        companySummaryQuestion &&
                        <Row>
                            <Col lg={12}>
                                <Fragment>
                                    <h6>{props.childData?.question_title}</h6>
                                    <p className="text-muted">{companySummaryQuestion && companySummaryQuestion.answer}</p>
                                </Fragment>
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

export default memo(CompanySummaryQuestion);
