import React from 'react'; 

import './hamburguer-icon.styles.sass'

const HamburguerIcon = ({toggleNav, isHidden}) => (
    <div 
        className="hamburguer-icon"
        onClick={toggleNav}
    >
        <div id="menu-toggle" className={`${isHidden ? "" : "open"}`}>
            <div id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id="cross">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
);


export default HamburguerIcon; 