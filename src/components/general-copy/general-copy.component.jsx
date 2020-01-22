import React from 'react'; 

import './general-copy.styles.sass'; 

const GeneralCopy = ({titlePt, titleEn, copyPt, copyEn}) => (
    <div className="general-copy">
        <h2 className="general-copy-title">
            {titlePt}
            {titleEn ? (<span className="general-copy-title-en">{titleEn}</span>) : null}
        </h2>
        {
            copyPt.map(paragraph => (
                <div className="copy">
                    <p className="paragraph">{paragraph}</p>
                </div>
            ))
        }
        {
            copyEn ? (
                copyEn.map(paragraph => (
                    <div className="copy general-copy-en">
                        <p className="paragraph">{paragraph}</p>
                    </div>
                ))
            ) : null
        }
    </div>
);

export default GeneralCopy; 