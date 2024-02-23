import React from 'react';
import { Col, Container, Row } from 'reactstrap';

//import Components
import BreadCrumb from '../../Components/Common/BreadCrumb';


const DashboardAnalytics = () => {
document.title="Admin | Dashboard";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Dashboard" pageTitle="Dashboards" />
                     
                     
                    
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardAnalytics;