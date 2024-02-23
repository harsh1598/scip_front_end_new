import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {

   return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid className='px-0'>
                    <Row>
                        <Col sm={6}>
                            {new Date().getFullYear()} © SCIP.
                        </Col>
                        <Col sm={6}>
                            <div className="text-sm-end d-none d-sm-block">
                                App Version: 2.0
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </React.Fragment>
    );
};


export default Footer;