import React, { memo } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import SimpleBar from 'simplebar-react';

const DCFModelInputTbl = () => {

    const data = [
        {
            id: 1,
            cashFlow: "Year",
            Entry: "",
            Year1: "2021",
            Year2: "2022",
            Year3: "2023",
            Year4: "2024",
            Year5: "2025",
        },
        {
            id: 2,
            cashFlow: "Date",
            Entry: "16-07-2021",
            Year1: "17-08-2021",
            Year2: "18-09-2022",
            Year3: "19-10-2023",
            Year4: "20-11-2024",
            Year5: "21-12-2025",
        },
        {
            id: 3,
            cashFlow: "Revenue",
            Entry: "",
            Year1: "19349",
            Year2: "56452",
            Year3: "19349",
            Year4: "17349",
            Year5: "29349",
        },
        {
            id: 4,
            cashFlow: "Cost of goods sold",
            Entry: "",
            Year1: "47819",
            Year2: "47819",
            Year3: "47819",
            Year4: "47819",
            Year5: "47819",
        },
        {
            id: 5,
            cashFlow: "Salaries (including any outsourced)",
            Entry: "",
            Year1: "47810",
            Year2: "47810",
            Year3: "47810",
            Year4: "47810",
            Year5: "47810",
        },
        {
            id: 6,
            cashFlow: "Other operating expenses (Selling, General and Administrative)",
            Entry: "",
            Year1: "18",
            Year2: "19",
            Year3: "20",
            Year4: "21",
            Year5: "22",
        },
        {
            id: 7,
            cashFlow: "Depreciation and Amortization",
            Entry: "",
            Year1: "15008",
            Year2: "15005",
            Year3: "15003",
            Year4: "15002",
            Year5: "15001",
        },
        {
            id: 8,
            cashFlow: "Interest",
            Entry: "",
            Year1: "4",
            Year2: "5",
            Year3: "6",
            Year4: "7",
            Year5: "8",
        },
        {
            id: 9,
            cashFlow: "Receivables",
            Entry: "",
            Year1: "350",
            Year2: "586",
            Year3: "373",
            Year4: "486",
            Year5: "247",
        },
        {
            id: 10,
            cashFlow: "Inventory",
            Entry: "",
            Year1: "200",
            Year2: "200",
            Year3: "200",
            Year4: "200",
            Year5: "200",
        },
        {
            id: 11,
            cashFlow: "Payables",
            Entry: "",
            Year1: "175",
            Year2: "175",
            Year3: "175",
            Year4: "175",
            Year5: "175",
        },
        {
            id: 12,
            cashFlow: "Capital expenditure",
            Entry: "",
            Year1: "15000",
            Year2: "15000",
            Year3: "15000",
            Year4: "15000",
            Year5: "15000",
        },
        {
            id: 13,
            cashFlow: "Change in outstanding debt",
            Entry: "",
            Year1: "2",
            Year2: "2",
            Year3: "2",
            Year4: "2",
            Year5: "2",
        },
    ];

    return (
        <>
            <Card className='dashboard-data'>
                <CardHeader className="align-items-center bg-danger-subtle">
                    <h4 className="card-title flex-grow-1 text-center">DCF Model Input</h4>
                </CardHeader>
                <SimpleBar style={{ maxHeight: "500px" }} >
                    <CardBody>
                        <Table className="table table-bordered mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Discounted Cash Flow</th>
                                    <th scope="col">Entry</th>
                                    <th scope="col">Year1</th>
                                    <th scope="col">Year2</th>
                                    <th scope="col">Year3</th>
                                    <th scope="col">Year4</th>
                                    <th scope="col">Year5</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.length && data.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.cashFlow}</td>
                                            <td>{item.Entry}</td>
                                            <td>{item.Year1}</td>
                                            <td>{item.Year2}</td>
                                            <td>{item.Year3}</td>
                                            <td>{item.Year4}</td>
                                            <td>{item.Year5}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </CardBody>
                </SimpleBar>
            </Card>
        </>
    );
};

export default memo(DCFModelInputTbl);
