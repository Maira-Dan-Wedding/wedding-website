import React from 'react';

import EventImage from '../event-image/event-image.component';
import EventInfo from '../event-info/event-info.component';

import './event.styles.sass'; 


const Event = ({ img, index, ...otherProps }) => {
    return(
        <div className="event">
            {index%2 === 0 ? (
                <div className="event-grid">
                    <EventImage img={img} />
                    <EventInfo {...otherProps} />
                </div>
            ) : (
                <div className="event-grid">
                    <EventInfo alternative {...otherProps} />
                    <EventImage alternative img={img} />
                </div>
            )}

        </div>
    );
};
export default Event; 