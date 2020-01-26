import React, { useState } from 'react'; 

import SCHEDULE_DATA from './schedule.data';

import Event from '../event/event.component'; 

import './schedule-overview.styles.sass'; 

import Img1 from '../../assets/images/Praia-de-Carneiros-1-sch.jpg';
import Img2 from '../../assets/images/md-850-sch.jpg';
import Img3 from '../../assets/images/Praia-dos-Carneiros-Pernambuco-850.jpg';
import Img4 from '../../assets/images/md-sunset-850.jpg';

let imgArr = [Img1, Img2, Img3, Img4];

const ScheduleOverview = () => {
    const [schedule] = useState(SCHEDULE_DATA);

    return (
        <div className="schelude-overview" id="schedule">
            {schedule.map( ({id, ...otherEventProps}, index) => (
                <Event key={id} index={index} img={imgArr[index]} {...otherEventProps} />
            ))}
        </div>
    )
};

export default ScheduleOverview; 