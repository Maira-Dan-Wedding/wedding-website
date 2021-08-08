import React from  'react'; 

import CustomButton from '../custom-button/custom-button.component'

import './feature.styles.sass'; 

const Feature = ({children, subtitle, enSubtitle, copy, cta, links, emails, phones}) => (
    <div className="feature">
        <div className="icon-wrapper">{children}</div>
        <div className="icon-subtitle">
            {subtitle}
            <span className="icon-subtitle-en">{enSubtitle}</span>
        </div>
        <div className="icon-copy" dangerouslySetInnerHTML={{ __html: copy}} />
        <div className="links">
            <ul className="links-list">
                {links.map(link => (
                    <li><a className="travel-link" href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
                ))}
                {emails ? (emails.map(email => (
                    <li><a className="travel-link" href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a></li>
                ))) : null}
                {phones ? (phones.map(phone => (
                    <li><a className="travel-link" href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">{phone}</a></li>
                ))) : null}
            </ul>
        </div>
        {cta ? (
            <CustomButton>{cta}</CustomButton>
        ) : null}
    </div>
)

export default Feature; 