import React from 'react'; 

import './general-bullet-point.styles.sass'; 

const GeneralBulletPoint = ({listPt, listEn}) => (
    <div className="general-bullet-point">
        <ul className="list-pt">
            {
                listPt.map(item => (
                    <li className="bullet-point">{item}</li>
                ))
            }
        </ul>
        {
            listEn ? (
                <ul className="list-en">
                    {
                        listEn.map(item => (
                            <li className="bullet-point">{item}</li>
                        ))
                    }
                </ul>
            ) : null
        }
    </div>
);

export default GeneralBulletPoint; 