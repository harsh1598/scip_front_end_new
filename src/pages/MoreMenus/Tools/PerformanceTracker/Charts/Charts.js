import React from 'react';
import ReactApexChart from "react-apexcharts";
import { dataSeries, githubdata, seriesData } from './series';

import getChartColorsArray from "../../../../../Components/Common/ChartsDynamicColor";

const BasicAreaCharts = ({dataColors}) => {
    var BasicAreaChartsColors = getChartColorsArray(dataColors);
    const series = [{
        name: "STOCK ABC",
        data: seriesData.monthDataSeries1.prices
    }];
    var options = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },

        title: {
            text: 'Fundamental Analysis of Stocks',
            align: 'left',
            style: {
                fontWeight: 500,
            },
        },
        subtitle: {
            text: 'Price Movements',
            align: 'left'
        },
        labels: seriesData.monthDataSeries1.dates,
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            opposite: true
        },
        legend: {
            horizontalAlign: 'left'
        },
        colors: BasicAreaChartsColors
    };

    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={series}
                type="area"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const BasicLineCharts = ({ dataColors }) => {
    var linechartBasicColors = getChartColorsArray(dataColors);
    const series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }];
    var options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        markers: {
            size: 4,
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        colors: linechartBasicColors,
        title: {
            text: 'Product Trends by Month',
            align: 'left',
            style: {
                fontWeight: 500,
            },
        },

        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={series}
                type="line"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

export {
    BasicAreaCharts,
    BasicLineCharts
};