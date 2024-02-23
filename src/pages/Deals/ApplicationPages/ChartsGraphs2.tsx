import React, { memo, useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Row, Card, CardBody, CardHeader, Col, } from "reactstrap";
import WebService from '../../../utility/WebService';

interface propdata {
    childData?: any
}

const ChartsGraphs2 = (props: propdata) => {
    const [donoutChart, setDonoutChart] = useState<any>()

    useEffect(() => {
        getCompanySummary();
    }, [])
    const getCompanySummary = () => {
        WebService.getAPI({
            action: `/company-summary`
        })
            .then(async (res: any) => {
                setDonoutChart(res);
            })
            .catch((e) => {
            });
    };

    const SimpleDonut = (dataColors: any) => {
        const series = [44, 55, 41, 17, 15]
        var options: ApexOptions = {
            chart: {
                height: 300,
                type: 'donut',
            },
            legend: {
                position: 'bottom'
            },
            dataLabels: {
                dropShadow: {
                    enabled: false,
                }
            },
            colors: ["#687cfe", "#2a9a63", "#efae4e", "#f7666e", "#0ac7fb"]
        };
        return (
            <ReactApexChart dir="ltr"
                className="apex-charts"
                series={series}
                options={options}
                type="donut"
                height={267.7}
            />

        )
    }

    return (
        <>
            <Row>
                <Col xl={12} className=''>
                    <Card>
                        <CardHeader>
                            <h4 className="card-title mb-0">{props.childData.name}</h4>
                        </CardHeader>
                        <CardBody style={{ height: !donoutChart ? '200px' : '265px' }} className={!donoutChart ? 'card-loader' : ''}>
                            {donoutChart &&
                                <SimpleDonut />
                            }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default memo(ChartsGraphs2);
