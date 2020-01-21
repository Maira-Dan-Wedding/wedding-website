import React from 'react'; 

import './info-header.styles.sass';

const InfoHeader = ({isSticky}) => (
    <div className={`info-header ${isSticky ? "info-header-sticky": ""}`}>
        <div className="container">
            <p className="header-text">Praia de Carneiros, Pernanbuco</p>
            <p className="header-text">November 13th, 2020</p>
        </div>
    </div>
);

export default InfoHeader; 