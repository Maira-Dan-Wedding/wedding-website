import React from 'react'; 

import './event-copy.styles.sass'; 

const EventCopy = ({ptCopy, enCopy}) => (
    <div className="event-copy">
        <div className="copy">
            <p className="paragraph">{ptCopy}</p>
        </div>
        <div className="copy">
            <p className="paragraph">{enCopy}</p>
        </div>
    </div>
);

export default EventCopy; 