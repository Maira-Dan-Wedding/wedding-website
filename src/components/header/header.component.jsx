import React, { useState } from 'react'; 

import HEADER_DATA from './header.data'; 

import HeaderNav from '../header-nav/header-nav.component';
import InfoHeader from '../info-header/info-header.component'; 

import './header.styles.sass'; 

const Header = ({isSticky}) => {
    const [linkData] = useState(HEADER_DATA);

    return (
        <div className={isSticky ? "header sticky" : "header"}>
            <InfoHeader isSticky={isSticky} />
            <div className="inner-header">
                <h1 className="main-title"><a href="#">Maíra &amp; Dan</a></h1>
                <nav>
                    <HeaderNav linkData={linkData} isSticky={isSticky} />
                </nav>
            </div>
        </div>
    );
};

export default Header; 