import React from 'react';
import { Container } from 'reactstrap';
// import EmailSidebar from './EmailSidebar';
import EmailToolbar from './EmailToolbar';
import BreadCrumb from '../../Components/Common/BreadCrumb';

const MailInbox = () => {
    document.title="Inbox | SCIP Admin";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                <BreadCrumb title="Inbox" pageTitle="Inbox" />
                    {/* <EmailSidebar /> */}
                    <div className='py-3'>
                    <EmailToolbar />
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default MailInbox;