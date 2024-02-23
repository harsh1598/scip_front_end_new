import { memo, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import WebService from "../../../utility/WebService";

interface propData {
    childData?: any;
}

const Teaser = (props: propData) => {
    const [modelName, setModelName] = useState("");
    const [teaser, setTeaser] = useState<any>()
    const toggleModel = (name: any) => {
        setModelName(name);
    };
    useEffect(() => {
        getTeaserList();
    }, [])
    const getTeaserList = () => {
        WebService.getAPI({
            action: `/teaser-list`
        })
            .then(async (res: any) => {
                setTeaser(res.result);
            })
            .catch((e) => {
            });
    };

    return (
        <>
            <Row className="mb-2">
                <Col>
                    {teaser &&
                        teaser.length > 0 &&
                        teaser.map(
                            (res: any) => {
                                return (
                                    <>
                                        <Card className="mb-2">
                                            <CardHeader className="align-items-center card-header">
                                                <h4 className="card-title card-title mb-0 me-2">
                                                    {res.title}
                                                </h4>
                                            </CardHeader>
                                            <CardBody style={{ minHeight: !teaser ? '100px' : '89px' }} className={!teaser ? 'small-card-loader' : ''}>
                                                {teaser &&
                                                    <p className="text-muted mb-0" dangerouslySetInnerHTML={{
                                                        __html: res.answer && res?.answer?.value,
                                                    }}>
                                                    </p>
                                                }
                                                {res && res.parent_data &&
                                                    res.parent_data.length > 0 &&
                                                    res.parent_data.map(
                                                        (item: any, i: any) => {
                                                            return (
                                                                <>
                                                                    <Card className="mt-2">
                                                                        <CardHeader className="align-items-center card-header">
                                                                            <h4 className="card-title card-title mb-0 me-2">
                                                                               {item.title}
                                                                            </h4>
                                                                        </CardHeader>
                                                                        <CardBody style={{ minHeight: !teaser ? '100px' : '89px' }} className={!teaser ? 'small-card-loader' : ''}>
                                                                            {teaser &&
                                                                               <p className="text-muted mb-0" dangerouslySetInnerHTML={{
                                                                                __html: item.answer && item?.answer?.value,
                                                                            }}>
                                                                            </p>
                                                                            }
                                                                        </CardBody>
                                                                    </Card>
                                                                </>
                                                            );
                                                        }
                                                    )}
                                            </CardBody>
                                        </Card >
                                    </>
                                );
                            }
                        )}
                </Col>
            </Row >
        </>
    );
};

export default memo(Teaser);
