import React from 'react'; 

import './hamburguer-icon.styles.sass'

const HamburguerIcon = ({toggleNav}) => (
    <div 
        className="hamburguer-icon"
        onClick={toggleNav}
    >
        HUM
    </div>
);

export default HamburguerIcon; 