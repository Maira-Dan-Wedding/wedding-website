import React from 'react'; 

import './info-header.styles.sass';

const InfoHeader = ({isSticky}) => (
    <div className={`info-header ${isSticky ? "info-header-sticky": ""}`}>
        <div className="container">
            <p className="header-text">Praia de Carneiros, Pernambuco</p>
            <p className="header-text">April 4th, 2022</p>
        </div>
    </div>
);

export default InfoHeader; 