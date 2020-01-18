import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

import Dropdown from '../dropdown/dropdown.component'

import './header-link.styles.sass'; 

const HeaderLink = ({linkUrl, linkNamePt, linkNameEn, spacingLeft, spacingRight, dropdownList, isMainLink, match, history, isSticky}) => {

    const linkClassName = () => {
        let className = ""
        if(!isSticky && !isMainLink) className = "header-link-box"
        if(isMainLink) {
            isSticky ? className = "header-link-box header-link-box-sticky main-link" : className = "header-link-box main-link"
        };
        if(isSticky && !isMainLink) className = "header-link-box header-link-box-sticky"

        return className;
    };

    return (
        <li className={linkClassName()}>
           {dropdownList ? ( 
               <div>
                    <div className="header-link" onClick={() => history.push(`${match.url}${linkUrl}`)}>
                        {linkNamePt} <span className="dropdown-icon">&rsaquo;</span>
                        <span className="link-en">{linkNameEn ? linkNameEn : <div>&nbsp;</div>}</span>
                        <Dropdown links={dropdownList} />
                    </div>
                </div>
            ) : (
                <div className="header-link" onClick={() => history.push(`${match.url}${linkUrl}`)}>
                    {linkNamePt}
                    <span className="link-en">{linkNameEn ? linkNameEn : <div>&nbsp;</div>}</span>
                </div>
            )}
        </li>
    );
};

export default withRouter(HeaderLink);  