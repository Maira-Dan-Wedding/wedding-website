import React, { useState } from 'react'; 

import SCHEDULE_DATA from './schedule.data'; 

import Event from '../event/event.component'; 

import './schedule-overview.styles.sass'; 

const ScheduleOverview = () => {
    const [schedule] = useState(SCHEDULE_DATA);

    return (
        <div className="schelude-overview">
            {schedule.map( ({id, ...otherEventProps}, index) => (
                <Event key={id} index={index} {...otherEventProps} />
            ))}
        </div>
    )
};

export default ScheduleOverview; 