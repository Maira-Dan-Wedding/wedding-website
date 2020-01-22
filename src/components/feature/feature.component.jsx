import React from  'react'; 

import CustomButton from '../custom-button/custom-button.component'

import './feature.styles.sass'; 

const Feature = ({children, subtitle, enSubtitle, copy, cta, links}) => (
    <div className="feature">
        <div className="icon-wrapper">{children}</div>
        <div className="icon-subtitle">
            {subtitle}
            <span className="icon-subtitle-en">{enSubtitle}</span>
        </div>
        <div className="icon-copy">{copy}</div>
        <div className="links">
            <ul className="links-list">
                {links.map(link => (
                    <li><a className="travel-link" href={link}>{link}</a></li>
                ))}
            </ul>
        </div>
        {cta ? (
            <CustomButton>{cta}</CustomButton>
        ) : null}
    </div>
)

export default Feature; 