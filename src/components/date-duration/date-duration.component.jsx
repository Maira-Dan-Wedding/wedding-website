import React from 'react'; 

import './date-duration.styles.sass'; 

const DateDuration = ({ ptDate, ptWeekday, enDate, enWeekday, ptDuration, enDuration, alternative}) => (
    <div className={alternative ? `date-duration alternative` : `date-duration`}>

        <div className="date">
            <span className="pt-span">{`${ptWeekday}, ${ptDate}`} </span> 
            <span className="en-span">{`${enWeekday}, ${enDate}`}</span>
        </div>

        {ptDuration ? (
            <div className="duration">
                <span className="pt-span">{`${ptDuration}`}</span>  
                <span className="en-span">{`${enDuration}`}</span>
            </div>
        ) : null}

    </div>
);

export default DateDuration