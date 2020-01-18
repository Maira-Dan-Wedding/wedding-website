import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

import './dropdown.styles.sass'; 

const Dropdown = ({links, match, history}) => (
    <ul className="dropdown">
        {links.map(({linkUrl, linkNameEn, linkNamePt}) => (
            <li className="dropdown-link" onClick={() => history.push(`${match.url}${linkUrl}`)}>
                {linkNamePt}
                <span className="link-en">{linkNameEn ? linkNameEn : <div>&nbsp;</div>}</span>
            </li>
        ))}
    </ul>
);

export default withRouter(Dropdown);