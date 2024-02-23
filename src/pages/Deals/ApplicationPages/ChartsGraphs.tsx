import React, { memo, useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Row, Card, CardBody, CardHeader, Col, } from "reactstrap";
import WebService from '../../../utility/WebService';

interface propdata {
    childData?: any
}

const ChartsGraph = (props: propdata) => {
    const [pieChart, setPieChart] = useState<any>()

    useEffect(() => {
        getCompanySummary();
    }, [])
    const getCompanySummary = () => {
        WebService.getAPI({
            action: `/company-summary`
        })
            .then(async (res: any) => {
                setPieChart(res);
            })
            .catch((e) => {
            });
    };

    const SimplePie = (dataColors: any) => {
        const series = [44, 55, 13, 43, 22]
        var options: ApexOptions = {
            chart: {
                height: 300,
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
                type="pie"
                height={267.7}
            />
        )
    }

    return (
        <>
            <Row>
                <Col xl={12} className='mt-2'>
                    <Card>
                        <CardHeader>
                            <h4 className="card-title mb-0">{props.childData.name}</h4>
                        </CardHeader>

                        <CardBody style={{ height: !pieChart ? '200px' : '265px' }} className={!pieChart ? 'card-loader' : ''}>
                            {pieChart &&
                                <SimplePie />
                            }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default memo(ChartsGraph);
