import React from 'react'; 

import DateDuration from '../date-duration/date-duration.component'; 
import Attire from '../attire/attire.component'; 
import EventCopy from '../event-copy/event-copy.component'; 
import AddressPhone from '../address-phone/address-phone.component';


import './event-info.styles.sass';

const EventInfo = ({address, phone, en, pt, title, alternative}) => (
    <div className={alternative ? `event-info alternative` : `event-info`}>

        <h2 className="title">{title}</h2>
        <DateDuration 
            ptDate={pt.date} 
            ptWeekday={pt.weekday} 
            ptDuration={pt.duration}
            enDate={en.date} 
            enWeekday={en.weekday}
            enDuration={en.duration}
            alternative={alternative}
        />
        {address ? (
            <AddressPhone 
                alternative={alternative}
                address={address}
                phone={phone}
            />
        ) : null}
    
        {pt.attire ? (
            <Attire 
            ptAttire={pt.attire}
            enAttire={en.attire}
            alternative={alternative}
            />
        ): null}
        {pt.copy ? (
            <EventCopy
            ptCopy={pt.copy}
            enCopy={en.copy}
            alternative={alternative}
            />
        ): null}

    </div>
);

export default EventInfo; 