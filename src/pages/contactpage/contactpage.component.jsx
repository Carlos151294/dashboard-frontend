import React from 'react';

import Container from '../../components/container/container.component';

import './contactpage.styles.scss';

const ContactPage = () => {
    return (
        <Container className="info-container">
            <div className="author-data-field">
                Application powered by Carlos Flores Nava
                </div>
            <div className="author-data-field">
                carlos.flores.nava94@gmail.com
                </div>
        </Container>
    );
}

export default ContactPage;