import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

import './dropdown.styles.sass'; 

const Dropdown = ({links, match, history, hidden, toggleDropdown, toggleNav, isSticky}) => {

    return(
        <ul className={`dropdown ${ hidden ? "dropdown-hidden" : ""} ${isSticky ? "dropdown-sticky" : ""}`}>
            <li className="dropdown-close-icon">&lsaquo;</li>
            {links.map(({id, linkUrl, linkNameEn, linkNamePt}) => (
                <li key={id} className="dropdown-link" onClick={() => {toggleNav(); toggleDropdown(); return history.push(`${match.url}${linkUrl}`)}}>
                    {linkNamePt}
                    <span className="link-en">{linkNameEn ? linkNameEn : <div>&nbsp;</div>}</span>
                </li>
            ))}
        </ul>
    );
};

export default withRouter(Dropdown);