import React from 'react'; 

import './event-image.styles.sass'; 



const EventImage = ({ img, alternative }) => {
    return (
        <div className={alternative ? `event-image alternative` : `event-image`}>
            <div className="light-side" />
                <div className="dark-side" />
                <div className="image-wrapper">
                    <img 
                        src={img}
                        alt="Maira e Dan Casamento"
                    />
            </div>
        </div>
    );
}
export default EventImage; 