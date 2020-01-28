import React, { useState } from 'react'; 

import HEADER_DATA from './header.data'; 

import HeaderNav from '../header-nav/header-nav.component';
import InfoHeader from '../info-header/info-header.component'; 
import HamburguerIcon from '../hamburguer-icon/hamburguer-icon.component'; 

import './header.styles.sass'; 

const Header = ({isSticky, isHamburguer}) => {
    const [linkData] = useState(HEADER_DATA);
    const [isHidden, setIsHidden] = useState(true)

    const toggleMobileHeader = () => setIsHidden(!isHidden)

    return (
        <div className="full-nav">
            <HamburguerIcon  toggleNav={toggleMobileHeader} isHidden={isHidden} isHamburguer={isHamburguer}/>
            <div className={`header ${isSticky ? "sticky" : ""} ${isHidden ? "header-hidden" : ""}`}>
                <InfoHeader isSticky={isSticky} />
                <div className="inner-header">
                    <nav>
                        <HeaderNav linkData={linkData} isSticky={isSticky} toggleNav={toggleMobileHeader} />
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header; 