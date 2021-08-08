import React from 'react'; 

import './event-copy.styles.sass'; 

const EventCopy = ({ptCopy, enCopy}) => (
    <div className="event-copy">
        <div className="copy">
            <p className="paragraph" dangerouslySetInnerHTML={{ __html: ptCopy }} />
        </div>
        <div className="copy">
            <p className="paragraph en" dangerouslySetInnerHTML={{ __html: enCopy }}/>
        </div>
    </div>
);

export default EventCopy; 