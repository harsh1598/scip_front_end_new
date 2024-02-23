import React, { memo } from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import SimpleBar from 'simplebar-react';

const DCFCashFlowTbl = () => {

    const data = [
        {
            id: 1,
            cashFlow: "Date",
            Entry: "",
            Year1: "2021",
            Year2: "2022",
            Year3: "2023",
            Year4: "2024",
            Year5: "2025",
        },
        {
            id: 2,
            cashFlow: "Time Periods",
            Entry: "16-07-2021",
            Year1: "17-08-2021",
            Year2: "18-09-2022",
            Year3: "19-10-2023",
            Year4: "20-11-2024",
            Year5: "21-12-2025",
        },
        {
            id: 3,
            cashFlow: "Year Fraction",
            Entry: "",
            Year1: "19349",
            Year2: "56452",
            Year3: "19349",
            Year4: "17349",
            Year5: "29349",
        },
        {
            id: 4,
            cashFlow: "EBIT",
            Entry: "",
            Year1: "47819",
            Year2: "47819",
            Year3: "47819",
            Year4: "47819",
            Year5: "47819",
        },
        {
            id: 5,
            cashFlow: "Less: Cash Taxes",
            Entry: "",
            Year1: "47810",
            Year2: "47810",
            Year3: "47810",
            Year4: "47810",
            Year5: "47810",
        },
        {
            id: 6,
            cashFlow: "Plus: D&A",
            Entry: "",
            Year1: "18",
            Year2: "19",
            Year3: "20",
            Year4: "21",
            Year5: "22",
        },
        {
            id: 7,
            cashFlow: "Less: Capex",
            Entry: "",
            Year1: "15008",
            Year2: "15005",
            Year3: "15003",
            Year4: "15002",
            Year5: "15001",
        },
        {
            id: 8,
            cashFlow: "Less: Changes in NWC",
            Entry: "",
            Year1: "4",
            Year2: "5",
            Year3: "6",
            Year4: "7",
            Year5: "8",
        },
        {
            id: 9,
            cashFlow: "Unlevered FCF",
            Entry: "",
            Year1: "350",
            Year2: "586",
            Year3: "373",
            Year4: "486",
            Year5: "247",
        },
        {
            id: 10,
            cashFlow: "(Entry)/Exit",
            Entry: "",
            Year1: "200",
            Year2: "200",
            Year3: "200",
            Year4: "200",
            Year5: "200",
        },
        {
            id: 11,
            cashFlow: "Transaction CF",
            Entry: "",
            Year1: "175",
            Year2: "175",
            Year3: "175",
            Year4: "175",
            Year5: "175",
        },
        {
            id: 12,
            cashFlow: "Transaction CF",
            Entry: "",
            Year1: "15000",
            Year2: "15000",
            Year3: "15000",
            Year4: "15000",
            Year5: "15000",
        },
    ];
    
    return (
        <>
            <Card className='dashboard-data'>
                <CardHeader className="align-items-center bg-danger-subtle">
                    <h4 className="card-title flex-grow-1 text-center">DCF CF (Cash Flow)</h4>
                </CardHeader>
                <SimpleBar style={{ maxHeight: "500px" }} >
                    <CardBody>
                        <Table className="table table-bordered mb-0">
                             <thead>
                                <tr>
                                    <th scope="col">Discounted Cash Flow</th>
                                    <th scope="col">Entry</th>
                                    <th scope="col">3799</th>
                                    <th scope="col">1900</th>
                                    <th scope="col">1901</th>
                                    <th scope="col">1902</th>
                                    <th scope="col">1903</th>
                                    <th scope="col">Exit</th>
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

export default memo(DCFCashFlowTbl);
