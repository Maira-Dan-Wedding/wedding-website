import React from 'react'; 

import HeaderLink from '../header-link/header-link.component'; 

import './header-nav.styles.sass'; 

const HeaderNav = ({linkData, isSticky}) => (
    <ul className={isSticky ? "header-nav header-nav-sticky" : "header-nav"}>
        {linkData.map(({id, ...props}) => (
            <HeaderLink key={id} { ...props} isSticky={isSticky} />
        ))}
    </ul>
);

export default HeaderNav;