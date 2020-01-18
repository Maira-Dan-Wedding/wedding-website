import React from  'react'; 

import './feature.styles.sass'; 

const Feature = ({children, subtitle, enSubtitle, copy, cta, links}) => (
    <div className="feature">
        <div className="icon-wrapper">{children}</div>
        <div className="icon-subtitle">{subtitle}</div>
        <div className="icon-copy">{copy}</div>
        <div className="links">
            <ul className="links-list">
                {links.map(link => (
                    <li><a className="travel-link" href={link}>{link}</a></li>
                ))}
            </ul>
        </div>
        {cta ? {cta} : null}
    </div>
)

export default Feature; 