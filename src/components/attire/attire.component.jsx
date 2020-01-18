import React from 'react'; 

import './attire.styles.sass'; 

const Attire = ({ptAttire, enAttire, alternative}) => (
    <div className={alternative ? `attire alternative` : `attire`}>
        <h3 className="subtitle">Traje // Attire</h3>
    <div className="copy">{ptAttire}</div>
    <div className="copy">{enAttire}</div>
    </div>
);

export default Attire; 