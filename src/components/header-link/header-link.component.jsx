import React, { useState } from 'react'; 
import { withRouter } from 'react-router-dom'; 

import Dropdown from '../dropdown/dropdown.component'

import './header-link.styles.sass'; 

const HeaderLink = ({linkUrl, linkNamePt, linkNameEn, dropdownList, isMainLink, match, history, isSticky, toggleNav}) => {
    const[isDropdownHidden, setIsDropdownHidden] = useState(true)

    const onClick = () => {
        toggleNav();
        return history.push(`${match.url}${linkUrl}`)
    };

    const toggleDropdown = () => setIsDropdownHidden(!isDropdownHidden);

    return (
        <li className={`header-link-box ${isSticky ? "header-link-box-sticky" : ""} ${isMainLink ? "main-link" : ""} ${linkNameEn === "Home" ? "home-link" : "" }`}>
           {dropdownList ? ( 
               <div>
                    <div className="header-link" onClick={toggleDropdown}>
                        {linkNamePt} <span className="dropdown-icon">&rsaquo;</span>
                        <span className="link-en">{linkNameEn ? linkNameEn : <div>&nbsp;</div>}</span>
                        <Dropdown links={dropdownList}  hidden={isDropdownHidden} toggleDropdown={toggleDropdown} />
                    </div>
                </div>
            ) : (
                <div className="header-link" onClick={onClick}>
                    {linkNamePt}
                    <span className="link-en">{linkNameEn ? linkNameEn : <div>&nbsp;</div>}</span>
                </div>
            )}
        </li>
    );
};

export default withRouter(HeaderLink);  