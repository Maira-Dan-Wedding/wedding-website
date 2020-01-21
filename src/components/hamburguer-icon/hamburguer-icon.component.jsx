import React, {useState } from 'react'; 

import './hamburguer-icon.styles.sass'

const HamburguerIcon = ({toggleNav}) => {
    const [open, setOpen] = useState(false);

    const onClick = () => {
        toggleNav();
        return setOpen(!open)
    }

    return(
        <div 
            className="hamburguer-icon"
            onClick={onClick}
        >
            <div id="menu-toggle" className={`${open ? "open" : ""}`}>
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
}

export default HamburguerIcon; 