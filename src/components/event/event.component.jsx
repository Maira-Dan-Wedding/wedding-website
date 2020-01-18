import React from 'react';

import EventImage from '../event-image/event-image.component';
import EventInfo from '../event-info/event-info.component';

import './event.styles.sass'; 


const Event = ({ imgUrl, index, ...otherProps }) => {
    return(
        <div className="event">
            {index%2 === 0 ? (
                <div className="event-grid">
                    <EventImage imgUrl={imgUrl} />
                    <EventInfo {...otherProps} />
                </div>
            ) : (
                <div className="event-grid">
                    <EventInfo alternative {...otherProps} />
                    <EventImage alternative imgUrl={imgUrl} />
                </div>
            )}

        </div>
    );
};
export default Event; 